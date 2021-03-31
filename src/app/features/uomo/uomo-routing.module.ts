import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UomoComponent } from './main/uomo.component';

const routes: Routes = [{ path: '', component: UomoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UomoRoutingModule { }
