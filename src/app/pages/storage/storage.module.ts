import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedModule } from 'src/app/modules/shared.modules';
import { StorageRoutingModule } from './storage-routing.module';
import { StorageComponent } from './storage.component';




@NgModule({
  declarations: [
    StorageComponent
  ],
  imports: [
    CommonModule,
    StorageRoutingModule,
    sharedModule
  ]
})
export class StorageModule {}

