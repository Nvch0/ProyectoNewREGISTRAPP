import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesorqrPageRoutingModule } from './profesorqr-routing.module';

import { ProfesorqrPage } from './profesorqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorqrPageRoutingModule
  ],
  declarations: [ProfesorqrPage]
})
export class ProfesorqrPageModule {}
