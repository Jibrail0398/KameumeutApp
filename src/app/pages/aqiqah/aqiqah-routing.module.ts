import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AqiqahPage } from './aqiqah.page';

const routes: Routes = [
  {
    path: '',
    component: AqiqahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AqiqahPageRoutingModule {}
