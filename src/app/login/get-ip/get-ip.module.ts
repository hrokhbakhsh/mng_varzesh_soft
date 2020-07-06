import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetIpPageRoutingModule } from './get-ip-routing.module';

import { GetIpPage } from './get-ip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetIpPageRoutingModule
  ],
  declarations: [GetIpPage]
})
export class GetIpPageModule {}
