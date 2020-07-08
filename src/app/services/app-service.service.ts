import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) { }

  getIp(): Observable<ResponseIpModel> {
    return this.http.get<ResponseIpModel>(`${appconfig.api}`);
  }

   async storeUrl(id){
    try {

      let res = await this.getIp().toPromise();
      let ipModel: IpModel = res.data[id];
      this.packageUrl = ipModel.ServerAddress ;
    }catch (e) {

    }
  }
}
