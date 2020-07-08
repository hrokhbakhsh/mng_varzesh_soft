import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../../services/app-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private form: FormGroup;


  constructor(private service: AppServiceService , private fb: FormBuilder) {

    this.form = this.fb.group({
      username: ['', [Validators.required ]] ,
      password: ['', [Validators.required ]]
    });
  }

  ngOnInit() {

  }


  getIp() {
    console.log(this.service.packageUrl) ;

  }

  login() {
    console.log(this.form.value.password);
  }
}
