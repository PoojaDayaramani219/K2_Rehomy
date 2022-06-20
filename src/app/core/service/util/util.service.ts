import {Injectable} from '@angular/core';
import {UtilVariable} from '../conts';
import {AES, enc} from 'crypto-js';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

    encryptKey = UtilVariable.ENCRYPT_KEY;
    constructor(private http: HttpClient) { }

    decrypt(data: any , key: string = this.encryptKey): string {
        return AES.decrypt(data, key).toString(enc.Utf8);

    }

    encrypt(data: any, key: string = this.encryptKey): string {
        return AES.encrypt(data, key).toString();
    }


    getBrowserInfo() {
        const nAgt = navigator.userAgent;
        let browserName = navigator.appName;
        let fullVersion = '' + parseFloat(navigator.appVersion);
        let majorVersion: number;
        // tslint:disable-next-line:one-variable-per-declaration
        let nameOffset, verOffset, ix;

        // In Opera 15+, the true version is after "OPR/"
        // tslint:disable-next-line:no-conditional-assignment triple-equals
        if ((verOffset = nAgt.indexOf('OPR/')) != -1) {
            browserName = 'Opera';
            fullVersion = nAgt.substring(verOffset + 4);
        }
        // In older Opera, the true version is after "Opera" or after "Version"
        // tslint:disable-next-line:triple-equals no-conditional-assignment
        else if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browserName = 'Opera';
            fullVersion = nAgt.substring(verOffset + 6);
            // tslint:disable-next-line:no-conditional-assignment triple-equals
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                fullVersion = nAgt.substring(verOffset + 8);
            }
        }
        // In MSIE, the true version is after "MSIE" in userAgent
        // tslint:disable-next-line:triple-equals no-conditional-assignment
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browserName = 'Microsoft Internet Explorer';
            fullVersion = nAgt.substring(verOffset + 5);
        }
        // In Chrome, the true version is after "Chrome"
        // tslint:disable-next-line:triple-equals no-conditional-assignment
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browserName = 'Chrome';
            fullVersion = nAgt.substring(verOffset + 7);
        }
        // In Safari, the true version is after "Safari" or after "Version"
        // tslint:disable-next-line:triple-equals no-conditional-assignment
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browserName = 'Safari';
            fullVersion = nAgt.substring(verOffset + 7);
            // tslint:disable-next-line:no-conditional-assignment triple-equals
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                fullVersion = nAgt.substring(verOffset + 8);
            }
        }
        // In Firefox, the true version is after "Firefox"
        // tslint:disable-next-line:triple-equals no-conditional-assignment
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browserName = 'Firefox';
            fullVersion = nAgt.substring(verOffset + 8);
        }
        // In most other browsers, "name/version" is at the end of userAgent
        // tslint:disable-next-line:no-conditional-assignment
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
            // tslint:disable-next-line:no-conditional-assignment
            (verOffset = nAgt.lastIndexOf('/'))) {
            browserName = nAgt.substring(nameOffset, verOffset);
            fullVersion = nAgt.substring(verOffset + 1);
            // tslint:disable-next-line:triple-equals
            if (browserName.toLowerCase() == browserName.toUpperCase()) {
                browserName = navigator.appName;
            }
        }
        // trim the fullVersion string at semicolon/space if present
        // tslint:disable-next-line:triple-equals no-conditional-assignment
        if ((ix = fullVersion.indexOf(';')) != -1) {
            fullVersion = fullVersion.substring(0, ix);
        }
        // tslint:disable-next-line:triple-equals no-conditional-assignment
        if ((ix = fullVersion.indexOf(' ')) != -1) {
            fullVersion = fullVersion.substring(0, ix);
        }

        majorVersion = parseInt('' + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        return {
            browserName,
            version: fullVersion,
            majorVersion,
            appName: navigator.appName,
            userAgent: navigator.userAgent
        };

    }

    getIpAddress() {
        return this.http.get('https://api.ipify.org/?format=json').pipe(take(1));
    }

    getGEOLocation(ip: string) {
        // Update your api key to get from https://ipgeolocation.io
        const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${UtilVariable.GEOAPI_KEY}&ip=${ip}`;
        return this.http.get(url).pipe(take(1));

    }

    getGlobleEnvironments(){
        return {
            hostname: window.location.hostname,
            pathname: window.location.pathname,
            origin: window.location.origin
        };
    }
}
