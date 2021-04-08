import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { switchMap, map, tap } from "rxjs/operators";
import { HttpCommunicationsService } from "src/app/core/HttpCommunications/http-communications.service";
import { createSpedizione, deleteSpedizione, initSpediziones, retreiveAllSpediziones, updateSpedizione } from "./spedizione.actions";
import { Response } from '../../core/model/Response.interface';
import { Action } from "@ngrx/store";

@Injectable()
export class SpedizioneEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllSpediziones(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("spedizione/findAll");
    }

    
    createSpedizione(carta:string, indirizzo:string, cap:string, citta:string, nazione:string,emailUtente:string): Observable<Response>{
        return this.http.retrievePostCall<Response>('spedizione/create',{carta, indirizzo, cap,citta, nazione,emailUtente});
    }

    findUpdateSpedizione(id:string, ragioneSociale:string, partitaIva:string, emailUtente:string, sede: string, residenza: string, name:string){
        return this.http.retrievePostCall<Response>('spedizione/update',{id, ragioneSociale, partitaIva,emailUtente,sede,residenza,name});
    }

    deleteSpedizione(id: string): Observable<Response>{
        console.log(this.http.retrievePostCall<Response>('spedizione/delete',{id}));
        return this.http.retrievePostCall<Response>('spedizione/delete',{id});
    }
    //id:string, ragioneSociale:string, partitaIva:string, email:string, sede: string, residenza: string, name:string
    findUpdateSpedizione$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(updateSpedizione),
        switchMap((action) => this.findUpdateSpedizione(
            action.id,
            action.ragioneSociale,
            action.partitaIva,
            action.email,
            action.sede,
            action.residenza,
            action.name).pipe(
            map((response) => initSpediziones({ response }))
            ,tap(()=>this.router.navigateByUrl('/redirectspedizione'))
        ))
    ));

    deleteSpedizione$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(deleteSpedizione),
        switchMap((action) => this.deleteSpedizione(
            action.id).pipe(
            map((response) => initSpediziones({ response }))
            ,tap(()=>this.router.navigateByUrl('/redirectspedizione'))
        ))
    ));

    getAllSpediziones$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retreiveAllSpediziones),
        switchMap(() => this.retreiveAllSpediziones().pipe(
            map((response) => initSpediziones({ response }))
        ))
    ));

    createSpedizione$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(createSpedizione),
        switchMap((action) => this.createSpedizione(
            action.carta,
            action.indirizzo,
            action.cap,
            action.citta,
            action.nazione,
            action.emailUtente).pipe(
            map((response) => initSpediziones({ response }))
            // prova senza redirect
            ,tap(()=>this.router.navigateByUrl('/risultatospedizione'))
        ))
    ));


    signInSpedizione(email: string, password: string): Observable<Response> {
        return this.http.retrievePostCall<Response>('spedizione/logIn', {email, password});
      }
      
      
        
     
  
}