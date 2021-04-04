import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUtente } from 'src/app/redux/utente/utente.actions';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private store: Store) { }

  executeLogin(email: string, password: string) {
    console.log("STAMPO DAL SERVICE USER:",email," PW: ",password)
    this.store.dispatch(loginUtente({email, password}))
    
  }
}
