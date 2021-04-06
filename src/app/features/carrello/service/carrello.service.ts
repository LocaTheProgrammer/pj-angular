import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrieveAllCarrellos } from 'src/app/redux/carrello/carrello.actions';
import { retrieveTotale } from 'src/app/redux/totale/totale.actions';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  constructor(private store:Store) { }

  retrieveAllCarrelli(){
    this.store.dispatch(retrieveAllCarrellos())
  }
  retrieveTotale(){
    this.store.dispatch(retrieveTotale())
  }
}
