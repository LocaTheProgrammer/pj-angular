import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpedizioneRoutingModule } from './spedizione-routing.module';
import { SpedizioneComponent } from './main/spedizione.component';


@NgModule({
  declarations: [SpedizioneComponent],
  imports: [
    CommonModule,
    SpedizioneRoutingModule
  ]
})
export class SpedizioneModule { }
