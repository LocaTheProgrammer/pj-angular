import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './main/signup.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    SharedModule
  ]
})
export class SignupModule { }
