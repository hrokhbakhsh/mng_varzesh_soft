import { Component, OnInit } from '@angular/core';
import {AppServiceService} from '../../services/app-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private service: AppServiceService) { }

  ngOnInit() {
  }


    logout() {
        this.service.logout();
    }
}
