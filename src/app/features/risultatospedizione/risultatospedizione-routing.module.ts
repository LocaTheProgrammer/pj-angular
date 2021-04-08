import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RisultatospedizioneComponent } from './risultatospedizione.component';

const routes: Routes = [{ path: '', component: RisultatospedizioneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RisultatospedizioneRoutingModule { }
