import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetIpPageRoutingModule } from './get-ip-routing.module';

import { GetIpPage } from './get-ip.page';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        GetIpPageRoutingModule,
        FontAwesomeModule
    ],
  declarations: [GetIpPage]
})
export class GetIpPageModule {}
