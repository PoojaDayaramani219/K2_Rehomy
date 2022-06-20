import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndPoints, ApiMethod } from '../conts';
import { environment} from '../../../../environments/environment';
import { Observable, forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

    frontendRequestCall(api: EndPoints, method: ApiMethod, data?: any): Observable<any> {
        switch (method) {

            case ApiMethod.GET:
                return this.http.get(`${environment.FRONTEND_API_URL}${api}`);

            case ApiMethod.POST:
                return this.http.post(`${environment.FRONTEND_API_URL}${api}`, data);


            case ApiMethod.PUT:
                return this.http.put(`${environment.FRONTEND_API_URL}${api}`, data);


            case ApiMethod.DELETE:
                return this.http.delete(`${environment.FRONTEND_API_URL}${api}`);

        }

    }

    backendRequestCall(api: EndPoints, method: ApiMethod, data?: any): Observable<any> {
        switch (method) {

            case ApiMethod.GET:
                return this.http.get(`${environment.BACKEND_API_URL}${api}`);

            case ApiMethod.POST:
                return this.http.post(`${environment.BACKEND_API_URL}${api}`, data);


            case ApiMethod.PUT:
                return this.http.put(`${environment.BACKEND_API_URL}${api}`, data);


            case ApiMethod.DELETE:
                return this.http.delete(`${environment.BACKEND_API_URL}${api}`);

        }

    }

    frontendRequestMutliCall(requestList: Array<any>): Observable<any[]> {
        const forkJoinRequests: Array<any> = [];
        requestList.forEach(item => {
            forkJoinRequests.push(this.frontendRequestCall(item.api, item.method, item.data));
        });
        return forkJoin(forkJoinRequests);
    }
    backendRequestMutliCall(requestList: Array<any>): Observable<any[]> {
        const forkJoinRequests: Array<any> = [];
        requestList.forEach(item => {
            forkJoinRequests.push(this.backendRequestCall(item.api, item.method, item.data));
        });
        return forkJoin(forkJoinRequests);
    }
}
