import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {FunctionalityPage} from './functionality.page';

const routs = [
    {
        path: '',
        component: FunctionalityPage,
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routs),
    ],
    declarations: [FunctionalityPage]
})
export class FunctionalityModule {
}
