import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorqrPage } from './profesorqr.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorqrPageRoutingModule {}
