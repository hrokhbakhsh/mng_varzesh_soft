import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../../services/app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  constructor(private service: AppServiceService) {

  }

  ngOnInit() {
  }


  getIp() {
    console.log(this.service.packageUrl) ;

  }
}
