import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DefaultPage} from './default.page';
import {HomePage} from '../home/home.page';
import {ReciveReportPage} from '../recive-report/recive-report.page';
import {ReciptionSituationPage} from '../reciption-situation/reciption-situation.page';
import {FunctionalityPage} from '../functionality/functionality.page';

const routes: Routes = [
    {
        path: '',
        component: DefaultPage,
        children: [
            {
                path: '',
                component:HomePage
            },
            {
                path: 'recive-report',
                component:ReciveReportPage
            },
            {
                path: 'reciption-situation',
                component:ReciptionSituationPage
            },
            {
                path: 'functionality',
                component:FunctionalityPage
            }
        ],

    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DefaultRoutingModule {
}
