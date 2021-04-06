import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpedizioneComponent } from './main/spedizione.component';

const routes: Routes = [{ path: '', component: SpedizioneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpedizioneRoutingModule { }
