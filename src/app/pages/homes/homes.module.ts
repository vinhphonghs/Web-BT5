import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomesRoutingModule } from './homes-routing.module';
import { HomesComponent } from './homes.component';
import { sharedModule } from 'src/app/modules/shared.modules';


@NgModule({
  declarations: [
    HomesComponent
  ],
  imports: [
    CommonModule,
    HomesRoutingModule,
    sharedModule
  ]
})
export class HomesModule { }
