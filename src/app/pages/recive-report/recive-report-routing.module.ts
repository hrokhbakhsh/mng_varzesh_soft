import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReciveReportPage } from './recive-report.page';

const routes: Routes = [
  {
    path: '',
    component: ReciveReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReciveReportPageRoutingModule {}
