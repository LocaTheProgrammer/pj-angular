
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { switchMap, map, tap } from 'rxjs/operators';
import { HttpCommunicationsService } from "src/app/core/HttpCommunications/http-communications.service";

import { Response } from '../../core/model/Response.interface';
// import { deleteCarrello, initCarrellos, retrieveAllCarrellos, createCarrello, retrieveTotale } from "./totale.actions";
import { initCarrelloTotales, retrieveTotale } from "./totale.actions";




@Injectable()
export class CarrelloTotalesEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

  

    retreiveAllCarrello(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("carrello/findAll");
    }



    
    getTotlae$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveTotale),
        switchMap(() => this.retreiveAllCarrello().pipe(
            map((response) => initCarrelloTotales({ response }))
        ))
    ));


    




       

    
   
   

   
    
}
