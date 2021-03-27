import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { reducers } from './redux';
import { ArticolosEffects } from './redux/articolo/product.effects';
import { UtenteEffects } from './redux/utente/utente.effects';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule,
    SharedModule,

    StoreModule.forRoot(reducers),
     EffectsModule.forRoot([
      ArticolosEffects,
      UtenteEffects
     ]
     ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
