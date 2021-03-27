import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrieveAllArticolos, retrieveAllHot } from 'src/app/redux/articolo/product.actions';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private store: Store) { }

  retrieveAllArticolos(){
    this.store.dispatch(retrieveAllArticolos())
  }
  retrieveAllHot(){
    this.store.dispatch(retrieveAllHot());
  }

}
