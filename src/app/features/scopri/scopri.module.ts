import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScopriRoutingModule } from './scopri-routing.module';
import { ScopriComponent } from './scopri.component';


@NgModule({
  declarations: [ScopriComponent],
  imports: [
    CommonModule,
    ScopriRoutingModule
  ]
})
export class ScopriModule { }
