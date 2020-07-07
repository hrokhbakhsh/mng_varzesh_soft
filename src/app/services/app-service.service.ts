import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ResponseIpModel} from './response-ip-model';
import {HttpClient} from '@angular/common/http';
import {appconfig} from '../appconfig';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getIp(): Observable<ResponseIpModel> {
    return this.http.get<ResponseIpModel>(`${appconfig.api}`);
  }
}
