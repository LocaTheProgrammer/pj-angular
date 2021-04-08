import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpedizioneRoutingModule } from './spedizione-routing.module';
import { SpedizioneComponent } from './main/spedizione.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SpedizioneComponent],
  imports: [
    CommonModule,
    SpedizioneRoutingModule,
    SharedModule
  ]
})
export class SpedizioneModule { }
