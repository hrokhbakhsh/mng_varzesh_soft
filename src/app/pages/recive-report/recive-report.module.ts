import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReciveReportPageRoutingModule } from './recive-report-routing.module';

import { ReciveReportPage } from './recive-report.page';
import {HeaderComponent} from "../header/header.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReciveReportPageRoutingModule
    ],
    exports: [
        HeaderComponent
    ],
    declarations: [ReciveReportPage, HeaderComponent]
})
export class ReciveReportPageModule {}
