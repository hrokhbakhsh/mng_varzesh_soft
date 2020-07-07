import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetIpPageRoutingModule } from './get-ip-routing.module';

import { GetIpPage } from './get-ip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule ,
    GetIpPageRoutingModule
  ],
  declarations: [GetIpPage]
})
export class GetIpPageModule {}
