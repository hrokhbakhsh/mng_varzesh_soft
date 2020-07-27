import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {ReciveReportPage} from './recive-report.page';

const routs = [
    {
        path: '',
        component: ReciveReportPage,
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routs),
    ],
    declarations: [ReciveReportPage]
})
export class ReciveModule {
}
