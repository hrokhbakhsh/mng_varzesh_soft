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
    constructor(private http: HttpClient) {
    }

    getIp(): Observable<ResponseIpModel> {
        return this.http.get<ResponseIpModel>(`${appconfig.api}`);
    }


    authUser(data: any): Observable<any> {
        const url = 'https://cors-anywhere.herokuapp.com/' + localStorage.getItem('url');
        return this.http.post<any>(`${url}/mng_login`, data);
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
        const url = 'https://cors-anywhere.herokuapp.com/' + localStorage.getItem('url');
        return this.http.get<ResponseModel>(`${url}/mng_get_all_report_status`);
    }

    getAllUnite(): Observable<ResponseModel>{
        // @ts-ignore
        const url = 'https://cors-anywhere.herokuapp.com/' + localStorage.getItem('url');
        return this.http.post<ResponseModel>(`${url}/get_organization_unit`, {});
    }

    getPoolReceptionLimit(data: any): Observable<any>{
        const url = 'https://cors-anywhere.herokuapp.com/' + localStorage.getItem('url');
        return this.http.post<ResponseModel>(`${url}/mng_get_pool_reception_limit`, data);
    }
    getCreditorAmountLimit(data: any): Observable<ResponseModel>{
        const url = 'https://cors-anywhere.herokuapp.com/' + localStorage.getItem('url');
        return this.http.post<ResponseModel>(`${url}/mng_get_creditor_amounts_limit`, data);
    }
    getCreditorAmounDay(data: any): Observable<ResponseModel>{
        const url = 'https://cors-anywhere.herokuapp.com/' + localStorage.getItem('url');
        return this.http.post<ResponseModel>(`${url}/mng_get_creditor_amounts_today`, data);
    }
    getDebtorAmountsLimit(data: any): Observable<ResponseModel>{
        const url = 'https://cors-anywhere.herokuapp.com/' + localStorage.getItem('url');
        return this.http.post<ResponseModel>(`${url}/mng_get_debtor_amounts_limit`, data);
    }
}
