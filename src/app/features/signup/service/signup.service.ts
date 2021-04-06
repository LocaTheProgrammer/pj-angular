import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createUtente } from 'src/app/redux/utente/utente.actions';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  createUtente(email: string, password: string, nome: string, cognome: string, dataNascita: string) {
   this.store.dispatch(createUtente({email, nome, cognome,password, dataNascita}))
  }

  constructor(private store:Store) { }
}
