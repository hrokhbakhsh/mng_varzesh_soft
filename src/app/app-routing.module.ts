import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import {UnAuthGuard} from "./guard/un-auth.guard";
import {IpAuthGuard} from "./guard/ip-auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'get-ip',
    canActivate: [IpAuthGuard] ,
    loadChildren: () => import('./login/get-ip/get-ip.module').then( m => m.GetIpPageModule)
  },
  {
    path: 'login',
    canActivate: [UnAuthGuard] ,
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard] ,
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'recive-report',
    loadChildren: () => import('./pages/recive-report/recive-report.module').then( m => m.ReciveReportPageModule)
  },
  {
    path: 'reciption-situation',
    loadChildren: () => import('./pages/reciption-situation/reciption-situation.module').then( m => m.ReciptionSituationPageModule)
  },
  {
    path: 'functionality',
    loadChildren: () => import('./pages/functionality/functionality.module').then( m => m.FunctionalityPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
