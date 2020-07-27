import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DefaultPage} from './default.page';

const routes: Routes = [
    {
        path: '',
        component: DefaultPage,
        children: [
            {
                path: '',
                loadChildren: () => import('../home/home.module').then(value => value.HomeModule)
            },
            {
                path: 'recive-report',
                loadChildren: () => import('../recive-report/recive.module').then(value => value.ReciveModule)
            },
            {
                path: 'reciption-situation',
                loadChildren: () => import('../reciption-situation/reciption.module').then(value => value.ReciptionModule)
            },
            {
                path: 'functionality',
                loadChildren: () => import('../functionality/functionality.module').then(value => value.FunctionalityModule)
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
