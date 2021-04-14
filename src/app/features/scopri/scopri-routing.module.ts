import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScopriComponent } from './scopri.component';

const routes: Routes = [{ path: '', component: ScopriComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScopriRoutingModule { }
