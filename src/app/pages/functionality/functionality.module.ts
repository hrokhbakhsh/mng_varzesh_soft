import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FunctionalityPageRoutingModule } from './functionality-routing.module';

import { FunctionalityPage } from './functionality.page';
import {ReciveReportPageModule} from "../recive-report/recive-report.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FunctionalityPageRoutingModule,
        ReciveReportPageModule
    ],
  declarations: [FunctionalityPage]
})
export class FunctionalityPageModule {}
