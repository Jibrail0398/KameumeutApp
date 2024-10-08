import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AqiqahPageRoutingModule } from './aqiqah-routing.module';

import { AqiqahPage } from './aqiqah.page';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { ModalInputComponent } from 'src/app/components/modal-input/modal-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AqiqahPageRoutingModule,
    NavigationComponent,
    ModalInputComponent
  ],
  declarations: [AqiqahPage]
})
export class AqiqahPageModule {}
