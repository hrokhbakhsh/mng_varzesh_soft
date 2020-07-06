import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetIpPage } from './get-ip.page';

const routes: Routes = [
  {
    path: '',
    component: GetIpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetIpPageRoutingModule {}
