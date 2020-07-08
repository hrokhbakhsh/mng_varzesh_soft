import { Injectable } from '@angular/core';
import {AppServiceService} from './app-service.service';

@Injectable({
  providedIn: 'root'
})
export class SetIpService {

  constructor( private service: AppServiceService) { }

  async getAllIp(){
    try {
      let res = await this.service.getIp().toPromise() ;
      console.log(res.data);
    }catch (e) {
      console.log(e)
    }
  }
}
