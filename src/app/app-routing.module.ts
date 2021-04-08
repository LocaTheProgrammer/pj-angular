import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) }, 
                        { path: '', redirectTo: '/home', pathMatch: 'full' },
                        { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
                        { path: 'donna', loadChildren: () => import('./features/donna/donna.module').then(m => m.DonnaModule) },
                        { path: 'uomo', loadChildren: () => import('./features/uomo/uomo.module').then(m => m.UomoModule) },
                        { path: 'signup', loadChildren: () => import('./features/signup/signup.module').then(m => m.SignupModule) },
                        { path: 'dettaglio', loadChildren: () => import('./features/dettaglio/dettaglio.module').then(m => m.DettaglioModule) },
                        { path: 'cart', loadChildren: () => import('./features/carrello/carrello.module').then(m => m.CarrelloModule) },
                        { path: 'spedizione', loadChildren: () => import('./features/spedizione/spedizione.module').then(m => m.SpedizioneModule) },
                        { path: 'contattami', loadChildren: () => import('./features/contattami/contattami.module').then(m => m.ContattamiModule) },
                        { path: 'risultatospedizione', loadChildren: () => import('./features/risultatospedizione/risultatospedizione.module').then(m => m.RisultatospedizioneModule) },
                        { path: '**', loadChildren: () => import('./features/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
