import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiMethod, EndPoints } from '../core/service/conts';
import { HttpService } from '../core/service/http/http.service';
import { UtilService } from '../core/service/util/util.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
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
export class ForgotPasswordComponent implements OnInit {
  forgotPassword: FormGroup;
  resetPassword: FormGroup;
  ProgressSpinnerDlg: boolean = false;
  forgot_password = true;
  reset_password = false;

  constructor( private formBuilder: FormBuilder,
               private utilService: UtilService,
               private httpService: HttpService,
               private messageService: MessageService,
               private confirmationService: ConfirmationService,
               private router: Router) { }

  ngOnInit(): void {
    this.forgotPassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    });

    this.resetPassword = this.formBuilder.group({
      tempPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  // ******************************************************  FORGOT PASSWORD  ********************************************************
  forgot_pass() {
  
    if(this.forgotPassword.invalid) {
      this.messageService.add({severity:'error', summary:'Error Message', detail:'Please enter valid email'});
      return;
    }
    else if(this.forgotPassword.controls.email.value == '') {
      this.messageService.add({severity:'error', summary:'Error Message', detail:'Please enter email'});
      return;
    }
    else {
      this.ProgressSpinnerDlg = true;
      let browserInfo = this.utilService.getBrowserInfo();
      this.utilService.getIpAddress().subscribe((res:any) => {
        let ipAddress = res.ip;
        this.utilService.getGEOLocation(ipAddress).subscribe((geores:any) => {
          let email = this.forgotPassword.controls.email.value;
          let city = geores['city'];
          let country = geores['country_name'];
          let state = geores['state_prov'];
          const details = {"email": email,
          "location":"Country:"+country+"  State:"+state+"  City:"+city,
          "ipadd":ipAddress,
          "browsername":browserInfo['browserName'],
          "browserver":browserInfo['appName'],
          "useros":browserInfo['userAgent']
        }
      this.httpService.backendRequestCall(EndPoints.customer_forgot_password, ApiMethod.POST, details)
      .subscribe(response => {
      response=response||{};
        let message = response.message||'';
        let status = response.status||'false';
        if(status == "true"){
          this.ProgressSpinnerDlg = false; 
          this.messageService.add({severity:'success', summary:'Success', detail:message}); 
          this.forgot_password = false;
          this.reset_password = true;
          console.log(response);
        }else{
          this.ProgressSpinnerDlg = false;
          this.messageService.add({severity:'error', summary:'Error', detail:message});
        }
      },
      error => {
        this.ProgressSpinnerDlg = false;
       this.messageService.add({severity:'error', summary:'Error', detail:error.message});
      });
    
    });
  })
  }

  }

  // ******************************************************  RESET PASSWORD  ********************************************************
  reset_pass() {
    this.ProgressSpinnerDlg = true;
    if(this.resetPassword.invalid) {
      this.messageService.add({severity:'error', summary:'Error Message', detail:'Please enter valid email and password'});
      return;
    }
    else {
      let temppass = this.resetPassword.controls.tempPassword.value;
      let newpassword = this.resetPassword.controls.newPassword.value;
      const credentials = { "temppass": temppass, "newpassword": newpassword };
      this.httpService.backendRequestCall(EndPoints.customer_reset_password, ApiMethod.POST, credentials)
      .subscribe(response => {
        response=response||{};
        let message = response.message||'';
        let status = response.status||'false';
        if(status == "true"){
          this.ProgressSpinnerDlg = false; 
          this.messageService.add({severity:'success', summary:'Success', detail:message}); 
          this.reset_password = false;
          this.forgot_password = false;
          this.router.navigate(['/login']);
        }else{
          this.ProgressSpinnerDlg = false;
          this.messageService.add({severity:'error', summary:'Error', detail:message});
        }
      },
      error => {
        this.ProgressSpinnerDlg = false;
       this.messageService.add({severity:'error', summary:'Error', detail:error.message});
     }
      );
    }
  }

}
