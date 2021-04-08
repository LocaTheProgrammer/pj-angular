import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createSpedizione } from 'src/app/redux/spedizione/spedizione.actions';

@Injectable({
  providedIn: 'root'
})
export class SpedizioneService {

  constructor(private store: Store) { }

  createSpedizione(carta:string, indirizzo:string, cap:string, citta:string, nazione:string, emailUtente:string){
    this.store.dispatch(createSpedizione({carta, indirizzo, cap, citta, nazione, emailUtente}))
  }

  paga( numeroCarta:string,proprietarioCarta:string, meseCarta:string, annoCarta:string,cvc:string){
    console.log("IN BETA BOOH")
  }
}
