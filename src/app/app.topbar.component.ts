import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StorageService} from '../app/core/service/storage/storage.service';
import { HttpService } from '../app/core/service/http/http.service';
import { EndPoints, ApiMethod } from '../app/core/service/conts';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import {AppComponent} from './app.component';
import { AppMainComponent } from './app.main.component';
import { UtilService } from './core/service/util/util.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  providers: [MessageService, ConfirmationService]

})
export class AppTopBarComponent implements OnInit {

    sub = new Subscription();
    user_detail: any;
    items: MenuItem[];
    loginUser: string;

    constructor(public app: AppComponent,
        public appMain: AppMainComponent,
        private router: Router,
        private storageService: StorageService,
        private httpService: HttpService,
        private confirmationService: ConfirmationService,
        private utilService: UtilService,
        private messageService: MessageService) { }

    ngOnInit(): void {
        this.user_detail = this.storageService.getLocalObject('userdetails'); 
        this.loginUser = this.user_detail.firstname + ' ' + this.user_detail.lastname;
        // this.login_sp_cookies();
    }

//     login_sp_cookies() {
//       let browserInfo = this.utilService.getBrowserInfo();
//       this.utilService.getIpAddress().subscribe((res:any) => {
//         let ipAddress = res.ip;
//          this.utilService.getGEOLocation(ipAddress).subscribe((geores:any) => {
//           let city = geores['city'];
//           let country = geores['country_name'];
//           let state = geores['state_prov'];
//           const details = {
//           "userid": this.user_detail.userid,
//           "email": this.user_detail.email,
//           "location":"Country:"+country+"  State:"+state+"  City:"+city,
//           "ipadd":ipAddress,
//           "browsername":browserInfo['browserName'],
//           "browserver":browserInfo['appName'],
//           "useros":browserInfo['userAgent'],
//           "time": new Date().toString().split(' ')[4]
//          }
//        this.httpService.backendRequestCall(EndPoints.login_sp_cookies, ApiMethod.POST, details)
//         .subscribe(response => {
//         response=response||{};
//           let message = response.message||'';
//           let status = response.status||'false';
//           if(status == "true"){
//           }else{
//             this.messageService.add({severity:'error', summary:'Error', detail:message});
//           }
//        },
//        error => {
//          this.messageService.add({severity:'error', summary:'Error', detail:error.message});
//        });
//       });
//        });
// }

    logout() {
        let userid = this.user_detail.userid;
        let email = this.user_detail.email;
        const credentials = {userid: userid, email: email};
        this.httpService.backendRequestCall(EndPoints.customer_logout, ApiMethod.POST, credentials)
            .subscribe(response => {
                    response = response || {};
                    let message = response.message||'';
                    let status = response.status || 'false';
                    if (status == 'true') {
                        this.storageService.removeCookies();
                        this.storageService.removeLocalObject('userdetails');
                        this.router.navigate(['']);
                        this.messageService.add({severity:'success', summary: 'Success', detail: message});
                    }
                    else {
                        this.messageService.add({severity:'error', summary: 'Error', detail: message});
                    }
                },
                error => {
                    this.messageService.add({severity:'error', summary: 'Error', detail: 'Something went wrong!'});
                }
            );
    }

    profile() {
        this.router.navigate(['settings/profile']);
    }
}
