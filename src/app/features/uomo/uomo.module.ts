import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UomoRoutingModule } from './uomo-routing.module';
import { UomoComponent } from './main/uomo.component';


@NgModule({
  declarations: [UomoComponent],
  imports: [
    CommonModule,
    UomoRoutingModule
  ]
})
export class UomoModule { }
