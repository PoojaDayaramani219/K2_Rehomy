import { trigger, transition, style, animate } from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EndPoints, ApiMethod } from '../core/service/conts';
import { HttpService } from '../core/service/http/http.service';
import { StorageService } from '../core/service/storage/storage.service';
import { UtilService } from '../core/service/util/util.service';
@Component({
    selector: 'app-login',
    templateUrl: './app.login.component.html',
    styleUrls: ['./app.login.component.css'],
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


export class AppLoginComponent implements OnInit {
    // ************************************************* GLOBAL VARIABLES *****************************************************
    ProgressSpinnerDlg: boolean = false;
    features: any[];

    // ************************************************* SIGNIN VARIABLES *****************************************************
    isSignIn: boolean = true;
    signin_section: boolean = true;
    signinForm: FormGroup;
    user_detail: any;
    remember_me_checked_status: any;

    // ************************************************* DOC UPLOAD VARIABLES *****************************************************
    doc_names_list: Array<any> = [];
    uploaded_doc_list_resp: Array<any> = [];
    doc_list: Array<any> = [];
    doc_list_row_data: Array<any> = [];
    doc_list_col_header: Array<any> = [];
    status_list: Array<any> = [];
    resave_doc_list: Array<any> = [];
  
    document_status_section: boolean = false;
    document_import_section: boolean = false;
    image_details_table: boolean = false;
    
    document_name: any;
    file_details: any;
    resave_file_details: any;
    remain_doc_list_resp: any;
    user_credentials: any;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private httpService: HttpService,
        private storageService: StorageService,
        private utilService: UtilService
    ) {}

    ngOnInit(): void {
        this.signinForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

        this.features = [
        { title: 'KNOW YOUR STATICS', image: 'live-collaboration.svg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { title: 'CENTRALISE CONTROL', image: 'security.svg', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'EASY MANAGEMENT', image: 'subscribe.svg', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
        ];
       try {
        if(this.storageService.getLocalObject('rememberMe') == true) {
          this.user_credentials = this.storageService.getLocalObject('user_credentials');
         }
         
       } catch (error) {
         
       }
    }

    // ************************************************* SIGNIN FUNCTIONS *****************************************************
    signIn() {
      if (this.signinForm.invalid) {
        this.messageService.add({severity:'error', summary:'Error Message', detail:'Please enter valid email and password'});
        return;
      }
      else {
        this.ProgressSpinnerDlg = true;
        const email = this.signinForm.controls.email.value;
        const password = this.signinForm.controls.password.value;
        const credentials = {email: email, password: password};
        this.httpService.backendRequestCall(EndPoints.login_customer, ApiMethod.POST, credentials)
        .subscribe(response => {
          response = response || {};
                let message = response.message||'';
                const status = response.status || 'false';
                if (status == 'true') {
                  this.ProgressSpinnerDlg = false;
                  this.user_detail = response.user_detail || {};
                  console.log(this.user_detail);
                  if(this.remember_me_checked_status == true) {
                    this.storageService.setLocalObject('user_credentials', {"email": email, "password": password});
                    this.storageService.setLocalObject('rememberMe', true);

                  }
                  else {
                    this.storageService.removeLocalObject('user_credentials');
                    this.storageService.setLocalObject('rememberMe', false);
                  }


                  this.storageService.setLocalObject('userdetails', this.user_detail);
                  this.signinForm.reset();
                  this.storageService.saveToken(this.user_detail.auth_token);
                  this.storageService.saveClientKey(this.user_detail.client_key);
                  this.messageService.add({severity:'success', summary: 'Success', detail: message});
                  this.router.navigate(['dashboard']);
                  
                }
                else {
                  this.ProgressSpinnerDlg = false;
                  this.messageService.add({severity:'error', summary: 'Error', detail: message});
                }
            },
            error => {
              this.ProgressSpinnerDlg = false;
              this.messageService.add({severity:'error', summary: 'Error', detail: 'Something went wrong, please try again later.'});
            }
          );
      }
    }

    login_customer_cookies() {
      let browserInfo = this.utilService.getBrowserInfo();
      this.utilService.getIpAddress().subscribe((res:any) => {
      let ipAddress = res.ip;
        this.utilService.getGEOLocation(ipAddress).subscribe((geores:any) => {
        let city = geores['city'];
        let country = geores['country_name'];
        let state = geores['state_prov'];
        const details = {
        "userid": this.user_detail.userid,
        "email": this.user_detail.email,
        "location":"Country:"+country+"  State:"+state+"  City:"+city,
        "ipadd":ipAddress,
        "browsername":browserInfo['browserName'],
        "browserver":browserInfo['appName'],
        "useros":browserInfo['userAgent'],
        "time": new Date().toString().split(' ')[4]
        }
        console.log(details);
      this.httpService.backendRequestCall(EndPoints.login_customer_cookies, ApiMethod.POST, details)
      .subscribe(response => {
      response=response||{};
        let message = response.message||'';
        let status = response.status||'false';
        if(status == "true"){
          alert(message);
        }else{
          alert(message);
        }
      },
      error => {
      console.log(error);
      });
    });
      });
    }

    rememberMe(event) {
      this.remember_me_checked_status = event.checked;
    }

    // ************************************************* SIGNUP FUNCTIONS *****************************************************
    signUp() {
      this.router.navigate(['register']);
    }

    // ************************************************* FORGOT FUNCTIONS *****************************************************
    forgot() {
      this.router.navigate(['forgot']);
    }
  }
