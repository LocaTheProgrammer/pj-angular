import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContattamiRoutingModule } from './contattami-routing.module';
import { ContattamiComponent } from './main/contattami.component';


@NgModule({
  declarations: [ContattamiComponent],
  imports: [
    CommonModule,
    ContattamiRoutingModule
  ]
})
export class ContattamiModule { }
