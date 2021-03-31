import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonnaRoutingModule } from './donna-routing.module';
import { DonnaComponent } from './main/donna.component';


@NgModule({
  declarations: [DonnaComponent],
  imports: [
    CommonModule,
    DonnaRoutingModule
  ]
})
export class DonnaModule { }
