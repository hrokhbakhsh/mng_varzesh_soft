import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import {UnAuthGuard} from './guard/un-auth.guard';
import {IpAuthGuard} from './guard/ip-auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: 'get-ip',
        canActivate: [IpAuthGuard],
        loadChildren: () => import('./login/get-ip/get-ip.module').then(m => m.GetIpPageModule)
    },
    {
        path: 'login',
        canActivate: [UnAuthGuard],
        loadChildren: () => import('./login/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/default/default.module').then(m => m.DefaultPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
