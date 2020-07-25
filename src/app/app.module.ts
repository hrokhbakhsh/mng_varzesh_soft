import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AppServiceService} from './services/app-service.service';
import {SetIpService} from './services/set-ip.service';
import {AuthGuard} from './guard/auth.guard';
import {UnAuthGuard} from './guard/un-auth.guard';
import {IpAuthGuard} from './guard/ip-auth.guard';
import {ChangeToPersianService} from "./services/change-to-persian.service";

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule ,
        FontAwesomeModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AppServiceService ,
        SetIpService ,
        AuthGuard,
        UnAuthGuard ,
        IpAuthGuard,
        ChangeToPersianService ,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
