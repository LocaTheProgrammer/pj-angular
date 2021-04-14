import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrieveAllArticolos } from 'src/app/redux/articolo/product.actions';
import { createCarrello } from 'src/app/redux/carrello/carrello.actions';
import { retreiveAllMagazzinos } from 'src/app/redux/magazzino/magazzino.actions';

@Injectable({
  providedIn: 'root'
})
export class DettaglioServiceService {

  constructor(private store:Store) { }

  aggiungiAlCarrello(emailUtente:string, idArticolo:string, taglia:string, quantita:number){
    console.log("dettaglio service")
    console.log("sessionEmail: ", emailUtente)
    console.log("taglia: ",taglia)
    console.log("quantita: ",quantita)
    console.log("id articolo", idArticolo);
    console.log("JSON? ",{emailUtente, idArticolo,taglia,quantita})
   
    this.store.dispatch(createCarrello({emailUtente, idArticolo,taglia,quantita}))
  }
  
  retreiveAllMagazzinos(){
    this.store.dispatch(retreiveAllMagazzinos());
  }
}

