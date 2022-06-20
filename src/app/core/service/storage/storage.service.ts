import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UtilService } from '../util/util.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
      private cookies: CookieService,
      private util: UtilService,
      private router: Router,
  ) { }

    saveToken(token: string): void{
        const expiredDate = new Date();
        expiredDate.setDate(expiredDate.getDate() + 1 );
        const globleVarible = this.util.getGlobleEnvironments();
        this.cookies.set('k2ai-token', this.util.encrypt(token), expiredDate, '/', globleVarible.hostname);
    }

    getToken(){
        return this.util.decrypt(this.cookies.get('k2ai-token'));
    }
    removeCookies(){
        const globleVarible = this.util.getGlobleEnvironments();
        this.cookies.deleteAll('/', globleVarible.hostname);
    }

    saveClientKey(token: string): void{
        const expiredDate = new Date();
        expiredDate.setDate(expiredDate.getDate() + 1 );
        const globleVarible = this.util.getGlobleEnvironments();
        this.cookies.set('k2ai-clientKey', this.util.encrypt(token), expiredDate, '/', globleVarible.hostname);
        this.router.navigate(['#']);
    }

    getClientKey(){
        return this.util.decrypt(this.cookies.get('k2ai-clientKey'));
    }
    removeClientKey(){
        this.cookies.delete('k2ai-clientKey');
    }

    setLocalObject(key: string, value: any){
        localStorage.setItem(key, this.util.encrypt(JSON.stringify(value)));
    }

    getLocalObject(key: string): any {
        return JSON.parse(this.util.decrypt(localStorage.getItem(key) || {}));
    }

    removeLocalObject(key: string){
        localStorage.removeItem(key);
    }
}
