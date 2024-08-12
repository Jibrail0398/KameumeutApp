import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabelPotongPageRoutingModule } from './label-potong-routing.module';

import { LabelPotongPage } from './label-potong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabelPotongPageRoutingModule
  ],
  declarations: [LabelPotongPage]
})
export class LabelPotongPageModule {}
