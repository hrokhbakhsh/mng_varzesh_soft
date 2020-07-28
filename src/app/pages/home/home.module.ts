import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {HomePage} from './home.page';
import {PersianPipesModule} from 'ngx-persian-pipe';

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
        PersianPipesModule ,
        RouterModule.forChild(routs),
    ],
    declarations: [HomePage]
})
export class HomeModule {
}
