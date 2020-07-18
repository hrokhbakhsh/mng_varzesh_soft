import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReciptionSituationPageRoutingModule } from './reciption-situation-routing.module';

import { ReciptionSituationPage } from './reciption-situation.page';
import {ReciveReportPageModule} from "../recive-report/recive-report.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReciptionSituationPageRoutingModule,
        ReciveReportPageModule
    ],
  declarations: [ReciptionSituationPage]
})
export class ReciptionSituationPageModule {}
