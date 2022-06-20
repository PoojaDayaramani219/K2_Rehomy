import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, ConfirmationService, ConfirmEventType } from 'primeng/api';
import { EndPoints, ApiMethod } from '../core/service/conts';
import { HttpService } from '../core/service/http/http.service';
import { S3UtilService } from '../core/service/s3-util.service';
import { StorageService } from '../core/service/storage/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService, ConfirmationService],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-10%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      // transition(':leave', [
      //   animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      // ])
    ])
  ]
})
export class RegisterComponent implements OnInit {

  // ************************************************* GLOBAL VARIABLES *****************************************************
  ProgressSpinnerDlg: boolean = false;

  // ************************************************* SIGNUP VARIABLES *****************************************************
  registerForm: FormGroup;
  personal_info_fields: boolean = true;
  location_info_fields: boolean = false;
  authorization_token_section: boolean = false;

  country_names_list: Array<any> = [];
  state_names_list: Array<any> = [];
  city_names_list: Array<any> = [];
  business_type_selected_value: any;
  registration_details: any;
  entity_name: any;
  customer_signup_request_resp: any;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private httpService: HttpService,
    private router: Router,
    private storageService: StorageService,
    private s3UtilService: S3UtilService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobile_no: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      authorization_token: []
    });
  }

  // ************************************************* SIGNUP FUNCTIONS *****************************************************


  nextStep() {
    if(this.registerForm.controls.first_name.value == '' || this.registerForm.controls.first_name.value == null) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Please enter first name'});
      return;
    }
    else if(this.registerForm.controls.last_name.value == '' || this.registerForm.controls.last_name.value == null) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Please enter last name'});
      return;
    }
    else if(this.registerForm.controls.email.value == '' || this.registerForm.controls.email.value == null) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Please enter email'});
      return;
    }
    else if(this.registerForm.controls.email.invalid) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Please enter valid email'});
      return;
    }
    else if(this.registerForm.controls.password.value == '' || this.registerForm.controls.password.value == null) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Please enter password'});
      return;
    }
    else if(this.registerForm.controls.password.value.length < 6) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Password must be atleast 6 characters long'});
      return;
    }
    else if(this.registerForm.controls.confirm_password.value == '' || this.registerForm.controls.confirm_password.value == null) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Please enter confirm password'});
      return;
    }
    else if(this.registerForm.controls.confirm_password.value.length < 6) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Confirm password must be atleast 6 characters long'});
      return;
    }
    else if(this.registerForm.controls.password.value != this.registerForm.controls.confirm_password.value) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Password and confirm password must be same'});
      return;
    }
    else {
      this.personal_info_fields = false;
      this.location_info_fields = true;
      this.authorization_token_section = false;
      this.CountryNamesList();
    }
  }

  // Personal information
  prevStep() {
    this.personal_info_fields = true;
    this.location_info_fields = false;
    this.authorization_token_section = false;
  }

  // Location information
  CountryNamesList() {
    this.ProgressSpinnerDlg = true;
    this.httpService.backendRequestCall(EndPoints.get_country_detail, ApiMethod.POST)
      .subscribe(response => {
        response = response || {};
        let message = response.message || '';
        let status = response.status || 'false';
        if (status == "true") {
        this.ProgressSpinnerDlg = false;
          this.country_names_list = response.country_data;
        } else {
        this.ProgressSpinnerDlg = false;
            this.messageService.add({severity:'error', summary: 'Error', detail: message});
        }
      }, error => {
        this.ProgressSpinnerDlg = false;
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Something went wrong. Please try again later.'});
      }
      );
  }
  
  onCountrySelect(event) {
    this.ProgressSpinnerDlg = true;
    let countryid = event.value["country_id"];
    const credentials = {"countryid": countryid};
    this.httpService.backendRequestCall(EndPoints.get_state_detail, ApiMethod.POST, credentials)
      .subscribe(response => {
      response = response || {};
      let message = response.message || '';
      let status = response.status || 'false';
      if (status == "true") {
        this.ProgressSpinnerDlg = false;
          this.state_names_list = response.state_data;
      } else {
          this.ProgressSpinnerDlg = false;
          this.messageService.add({severity:'error', summary: 'Error', detail: message});
      }
      }, error => {
          this.ProgressSpinnerDlg = false;
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Something went wrong. Please try again later.'});
      }
      );
  }

  onStateSelect(event) {
    this.ProgressSpinnerDlg = true;
    let stateid = event.value["state_id"];
    const credentials = {"stateid": stateid};
    this.httpService.backendRequestCall(EndPoints.get_city_detail, ApiMethod.POST, credentials)
        .subscribe(response => {
        response = response || {};
          let message = response.message || '';
          let status = response.status || 'false';
          if (status == "true") {
            this.ProgressSpinnerDlg = false;
            this.city_names_list = response.city_data;
          } 
          else {
            this.ProgressSpinnerDlg = false;
            this.messageService.add({severity:'error', summary: 'Error', detail: message});
          }
        }, error => {
          this.ProgressSpinnerDlg = false;
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Something went wrong. Please try again later.'});
        }
      );
  }

  // confirmation section 
  register_request() {
    if (this.registerForm.invalid) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Please fill all the required fields'});
      return;
    }
    else if(this.registerForm.controls.mobile_no.invalid) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Please enter valid mobile number'});
      return;
    }
    else {
      this.ProgressSpinnerDlg = true;
      let firstname = this.registerForm.controls.first_name.value;
      let lastname = this.registerForm.controls.last_name.value;
      let email = this.registerForm.controls.email.value;
      let password = this.registerForm.controls.password.value;
      let confpassword = this.registerForm.controls.confirm_password.value;
      let mobile = this.registerForm.controls.mobile_no.value;
      let city = this.registerForm.controls.city.value["city_name"];
      let state = this.registerForm.controls.state.value["state_name"];
      let country = this.registerForm.controls.country.value["country_name"];
      let credentials = {firstname: firstname, lastname: lastname, email: email, password: password, confpassword: confpassword, mobile: mobile, city: city, state: state, country: country};
      this.httpService.backendRequestCall(EndPoints.register_customer_request, ApiMethod.POST, credentials)
          .subscribe(response => {
                  response = response || {};
                  let message = response.message||'';
                  let status = response.status || 'false';
                  if (status == 'true') {
                    this.ProgressSpinnerDlg = false;
                    this.customer_signup_request_resp = response;
                    this.messageService.add({severity:'success', summary: 'Success', detail: message});
                    this.authorization_token_section = true;
                        console.log(credentials);
                  }
                  else {
                    this.ProgressSpinnerDlg = false;
                    this.messageService.add({severity:'error', summary: 'Error', detail: message});
                    this.authorization_token_section = false;
                  }
              },
              error => {
                this.ProgressSpinnerDlg = false;
                this.authorization_token_section = false;
                this.messageService.add({severity:'error', summary: 'Error', detail: 'Something went wrong. Please try again later.'});
              }
          );
    }
  }

  // ************************************************* REGISTRATION FUNCTIONS *****************************************************
  Register() {
    if(this.registerForm.controls.authorization_token.value == '') {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Please Enter Authorization Token to proceed'});
    }
    else if(this.customer_signup_request_resp.auth_code != this.registerForm.controls.authorization_token.value) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Please Enter Correct Authorization Token to proceed'});
    }
    else {
      this.ProgressSpinnerDlg = true;
      let firstname = this.registerForm.controls.first_name.value;
      let lastname = this.registerForm.controls.last_name.value;
      let email = this.registerForm.controls.email.value;
      let password = this.registerForm.controls.password.value;
      let confpassword = this.registerForm.controls.confirm_password.value;
      let mobile = this.registerForm.controls.mobile_no.value;
      let city = this.registerForm.controls.city.value["city_name"];
      let state = this.registerForm.controls.state.value["state_name"];
      let country = this.registerForm.controls.country.value["country_name"];
      let credentials = {firstname: firstname, lastname: lastname, email: email, password: password, confpassword: confpassword, mobile: mobile, city: city, state: state, country: country};
      this.httpService.backendRequestCall(EndPoints.register_customer_success, ApiMethod.POST, credentials)
          .subscribe(response => {
                  response = response || {};
                  let message = response.message||'';
                  let status = response.status || 'false';
                  if (status == 'true') {
                    this.ProgressSpinnerDlg = false;
                    this.messageService.add({severity:'success', summary: 'Success', detail: message});
                    this.router.navigate(['/login']);
                    this.registerForm.reset();
                  }
                  else {
                    this.ProgressSpinnerDlg = false;
                    this.messageService.add({severity:'error', summary: 'Error', detail: message});
                  }
              },
              error => {
                this.ProgressSpinnerDlg = false;
                this.messageService.add({severity:'error', summary: 'Error', detail: 'Something went wrong. Please try again later.'});
              }
          );
    }
  
  }

  // ************************************************* DOCUMENT FUNCTIONS *****************************************************

  login() {
    this.router.navigate(['/login']);
  }

  getEventValue($event) {
    return $event.target.value;
  }

  refreshTable() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
