
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { switchMap, map, tap } from 'rxjs/operators';
import { HttpCommunicationsService } from "src/app/core/HttpCommunications/http-communications.service";

import { Response } from '../../core/model/Response.interface';
import { deleteCarrello, initCarrellos, retrieveAllCarrellos, createCarrello } from "./carrello.actions";




@Injectable()
export class CarrellosEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllCarrello(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("carrello/findAll");
    }

    // retreiveTotale(): Observable<Response> {
    //     return this.http.retrieveGetCall<Response>("carrelloTotale/findTotale");
    // }


    deleteCarrello(id:string,sessionEmail:string){
        return this.http.retrievePostCall<Response>('carrello/delete',{id,sessionEmail});
    }
    
    
    createCarrello( emailUtente:string, idArticolo:string, taglia:string, quantita:number): Observable<Response>{
        console.log("create carrello effects")
        return this.http.retrievePostCall<Response>('carrello/create',{emailUtente, idArticolo, taglia, quantita});
    }
    
    deleteCarrello$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(deleteCarrello),
        switchMap((action) => this.deleteCarrello(
            action.id,
            action.sessionEmail).pipe(
            map((response) => initCarrellos({ response })),
            tap(()=>this.router.navigateByUrl('/home'))
        ))
    ));
   

    getAllCarrellos$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCarrellos),
        switchMap(() => this.retreiveAllCarrello().pipe(
            map((response) => initCarrellos({ response }))
        ))
    ));
    
    // getTotlae$: Observable<Action> = createEffect(() => this.actions$.pipe(
    //     ofType(retrieveTotale),
    //     switchMap(() => this.retreiveAllCarrello().pipe(
    //         map((response) => initCarrellos({ response }))
    //     ))
    // ));



       

    
   
    createCarrello$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(createCarrello),
        switchMap((action) => this.createCarrello(
            action.emailUtente,
            action.idArticolo,
            action.taglia,
            action.quantita).pipe(
            map((response) => initCarrellos({ response })),
            tap(()=>this.router.navigateByUrl('/cart'))
        ))
    ));

   
    
}
