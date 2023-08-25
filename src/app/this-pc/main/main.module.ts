import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LocalDiskCComponent } from './local-disk-c/local-disk-c.component';
import { LocalDiskDComponent } from './local-disk-d/local-disk-d.component';


@NgModule({
  declarations: [
    LocalDiskCComponent,
    LocalDiskDComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
