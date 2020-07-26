import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DefaultRoutingModule} from './default-routing.module';

import {DefaultPage} from './default.page';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DefaultRoutingModule
    ],
    declarations: [DefaultPage]
})
export class DefaultPageModule {
}
