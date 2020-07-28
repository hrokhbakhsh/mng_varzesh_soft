import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {ReciptionSituationPage} from './reciption-situation.page';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

const routs = [
    {
        path: '',
        component: ReciptionSituationPage,
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routs),
        FontAwesomeModule,
    ],
    declarations: [ReciptionSituationPage]
})
export class ReciptionModule {
}
