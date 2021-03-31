import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonnaComponent } from './main/donna.component';

const routes: Routes = [{ path: '', component: DonnaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonnaRoutingModule { }
