import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ResponseIpModel} from './response-ip-model';
import {HttpClient} from '@angular/common/http';
import {appconfig} from '../appconfig';
import {IpModel} from './ip-model';
import {ResponseModel} from './response-model';

@Injectable({
    providedIn: 'root'
})
export class AppServiceService {

    packageUrl: string = null;
     url = 'https://cors-anywhere.herokuapp.com/' + localStorage.getItem('url');
    constructor(private http: HttpClient) {
    }

    getIp(): Observable<ResponseIpModel> {
        return this.http.get<ResponseIpModel>(`${appconfig.api}`);
    }


    authUser(data: any): Observable<any> {
        //const url = 'https://cors-anywhere.herokuapp.com/' + localStorage.getItem('url');
        return this.http.post<any>(`${this.url}/mng_login`, data);
    }

    async storeUrl(id) {
        try {

            const res = await this.getIp().toPromise();
            const ipModel: IpModel = res.data[id];
            this.packageUrl = ipModel.ServerAddress;
            localStorage.setItem('url', this.packageUrl);
        } catch (e) {

        }
    }
    storeUserId(id , name){
        localStorage.setItem('userId', id) ;
        localStorage.setItem('name' , name);
    }
    isLogin(): boolean {
        return localStorage.getItem('userId') != null;
    }

    isHasUrl(): boolean {
        return localStorage.getItem('url') != null;
    }
    logout() {
        localStorage.removeItem('userId');
        localStorage.removeItem('url');
        return true ;
    }

    getAllReport(): Observable<ResponseModel>{
        //const url = 'https://cors-anywhere.herokuapp.com/' + localStorage.getItem('url');
        return this.http.get<ResponseModel>(`${this.url}/mng_get_all_report_status`);
    }

    getAllUnite(): Observable<ResponseModel>{
        // @ts-ignore
        return this.http.post<ResponseModel>(`${this.url}/get_organization_unit`);
    }

}
