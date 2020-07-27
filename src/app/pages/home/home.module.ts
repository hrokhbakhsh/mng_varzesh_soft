import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {HomePage} from './home.page';

const routs = [
    {
        path: '',
        component: HomePage,
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routs),
    ],
    declarations: [HomePage]
})
export class HomeModule {
}
