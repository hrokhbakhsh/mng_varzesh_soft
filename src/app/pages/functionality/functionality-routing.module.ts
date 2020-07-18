import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunctionalityPage } from './functionality.page';

const routes: Routes = [
  {
    path: '',
    component: FunctionalityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunctionalityPageRoutingModule {}
