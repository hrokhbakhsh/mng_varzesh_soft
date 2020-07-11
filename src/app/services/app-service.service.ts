import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ResponseIpModel} from './response-ip-model';
import {HttpClient} from '@angular/common/http';
import {appconfig} from '../appconfig';
import {IpModel} from './ip-model';

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
        return this.http.get(`${url}/mng_login`, data);
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
}
