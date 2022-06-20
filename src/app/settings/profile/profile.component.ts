import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { EndPoints, ApiMethod } from 'src/app/core/service/conts';
import { HttpService } from 'src/app/core/service/http/http.service';
import { StorageService } from 'src/app/core/service/storage/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ProfileComponent implements OnInit {
  ProgressSpinnerDlg: boolean = false;
  about_profile_tab: boolean = true;
  edit_profile_tab: boolean = false;
  filetype = ".png, .jpeg, jpg";
  img_src: any;
  file_details: any;
  changePassForm: FormGroup;
  editProfileForm: FormGroup;
  user_detail: any;
  profile_tab_items: MenuItem[];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    if(this.img_src == undefined) {
      this.img_src = "../../assets/demo/images/avatar/profile.jpg";
    }

    this.changePassForm = this.formBuilder.group({
      old_password: ['', Validators.required],
      new_password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });

    this.editProfileForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      mobileno: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required]
    });


    this.user_detail = this.storageService.getLocalObject('userdetails');

    this.profile_tab_items = [
      {label: 'About', icon: 'pi pi-user', command: (event) => this.onTabChange(event, 'about')},
      {label: 'Edit', icon: 'pi pi-pencil', command: (event) => this.onTabChange(event, 'edit')},
    ];

  }

  onTabChange(event, tab) {
    if(tab == 'about') {
      this.about_profile_tab = true;
      this.edit_profile_tab = false;
    }
    else if(tab == 'edit') {
      this.about_profile_tab = false;
      this.edit_profile_tab = true;
    }
  }
  
  onEditProfile(event, file) {
    for (const file of event.files) {
      this.file_details = file;
    }
     this.img_src = this.sanitizer.bypassSecurityTrustResourceUrl(this.file_details.objectURL.changingThisBreaksApplicationSecurity);
     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Profile updated successfully' });
  }

  onChangePassword() {
    if(this.changePassForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill all the fields' });
      return;
    }
    else if(this.changePassForm.controls.new_password.value != this.changePassForm.controls.confirm_password.value) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'New password and confirm password does not match' });
      return;
    }
    else {
      this.ProgressSpinnerDlg = true;
      let userid = this.user_detail.userid;
      let email = this.user_detail.email;
      let oldpassword = this.changePassForm.controls.old_password.value;
      let newpassword = this.changePassForm.controls.new_password.value;
      const credentials = { "userid": userid, "email": email, "oldpassword": oldpassword, "newpassword": newpassword };
      this.httpService.backendRequestCall(EndPoints.customer_change_password, ApiMethod.POST, credentials)
      .subscribe(response => {
        response=response||{};
            let message = response.message||'';
            let status = response.status||'false';
            if(status == "true"){
                this.ProgressSpinnerDlg = false;
                this.messageService.add({severity:'success', summary: 'Success', detail: message});
                this.changePassForm.reset();                
            }else{
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

  onUpdateProfile() {}
}
