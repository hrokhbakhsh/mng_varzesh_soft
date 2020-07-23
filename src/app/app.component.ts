import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AppServiceService} from "./services/app-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'گزارشات',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'وضعیت پذیرش',
      url: '/reciption-situation',
      icon: 'receipt'
    },
    {
      title: 'گزارش دریافتی',
      url: '/recive-report',
      icon: 'card'
    },
    {
      title: 'گزارش عملکرد',
      url: '/functionality',
      icon: 'bar-chart'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar ,
    private service: AppServiceService ,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

    logout() {
      this.service.logout();
      this.router.navigate(['/login']);
    }
}
