import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createCarrello } from 'src/app/redux/carrello/carrello.actions';

@Injectable({
  providedIn: 'root'
})
export class DettaglioServiceService {

  constructor(private store:Store) { }

  aggiungiAlCarrello(email:string, idArticolo:string, taglia:string, quantita:number){
    this.store.dispatch(createCarrello({email, idArticolo,taglia,quantita}))
  }
}
