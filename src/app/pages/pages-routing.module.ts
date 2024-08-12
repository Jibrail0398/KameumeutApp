import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'certificate',
    loadChildren: () => import('./certificate/certificate.module').then( m => m.CertificatePageModule)
  },
  {
    path: 'label',
    loadChildren: () => import('./label/label.module').then( m => m.LabelPageModule)
  },
  {
    path: 'label-potong',
    loadChildren: () => import('./label-potong/label-potong.module').then( m => m.LabelPotongPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
