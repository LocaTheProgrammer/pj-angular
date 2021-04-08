import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RisultatospedizioneRoutingModule } from './risultatospedizione-routing.module';
import { RisultatospedizioneComponent } from './risultatospedizione.component';


@NgModule({
  declarations: [RisultatospedizioneComponent],
  imports: [
    CommonModule,
    RisultatospedizioneRoutingModule
  ]
})
export class RisultatospedizioneModule { }
