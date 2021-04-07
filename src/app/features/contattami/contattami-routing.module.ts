import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattamiComponent } from './main/contattami.component';

const routes: Routes = [{ path: '', component: ContattamiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContattamiRoutingModule { }
