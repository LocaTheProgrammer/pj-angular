import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { retreiveAllUtentes, updateUtente } from 'src/app/redux/utente/utente.actions';

@Injectable({
  providedIn: 'root'
})
export class ProfiloService {

  constructor(private store:Store) { }

  retrieveAllUtenti(){
    this.store.dispatch(retreiveAllUtentes())
  }

  updateUtente(email: string, password: string, nome: string, cognome: string, dataNascita: string){
    this.store.dispatch(updateUtente({email,password,nome,cognome,dataNascita}));
  }
}
