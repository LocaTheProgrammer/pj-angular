import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { switchMap, map, tap } from "rxjs/operators";
import { HttpCommunicationsService } from "src/app/core/HttpCommunications/http-communications.service";
import { createMagazzino, deleteMagazzino, initMagazzinos, retreiveAllMagazzinos, updateMagazzino } from "./magazzino.actions";
import { Response } from '../../core/model/Response.interface';
import { Action } from "@ngrx/store";

@Injectable()
export class MagazzinoEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllMagazzinos(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("magazzino/findAll");
    }

    
    createMagazzino(carta:string, indirizzo:string, cap:string, citta:string, nazione:string,emailUtente:string): Observable<Response>{
        return this.http.retrievePostCall<Response>('magazzino/create',{carta, indirizzo, cap,citta, nazione,emailUtente});
    }

    findUpdateMagazzino(id:string, ragioneSociale:string, partitaIva:string, emailUtente:string, sede: string, residenza: string, name:string){
        return this.http.retrievePostCall<Response>('magazzino/update',{id, ragioneSociale, partitaIva,emailUtente,sede,residenza,name});
    }

    deleteMagazzino(id: string): Observable<Response>{
        console.log(this.http.retrievePostCall<Response>('magazzino/delete',{id}));
        return this.http.retrievePostCall<Response>('magazzino/delete',{id});
    }
    //id:string, ragioneSociale:string, partitaIva:string, email:string, sede: string, residenza: string, name:string
    findUpdateMagazzino$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(updateMagazzino),
        switchMap((action) => this.findUpdateMagazzino(
            action.id,
            action.ragioneSociale,
            action.partitaIva,
            action.email,
            action.sede,
            action.residenza,
            action.name).pipe(
            map((response) => initMagazzinos({ response }))
            ,tap(()=>this.router.navigateByUrl('/redirectmagazzino'))
        ))
    ));

    deleteMagazzino$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(deleteMagazzino),
        switchMap((action) => this.deleteMagazzino(
            action.id).pipe(
            map((response) => initMagazzinos({ response }))
            ,tap(()=>this.router.navigateByUrl('/redirectmagazzino'))
        ))
    ));

    getAllMagazzinos$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retreiveAllMagazzinos),
        switchMap(() => this.retreiveAllMagazzinos().pipe(
            map((response) => initMagazzinos({ response }))
        ))
    ));

    createMagazzino$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(createMagazzino),
        switchMap((action) => this.createMagazzino(
            action.carta,
            action.indirizzo,
            action.cap,
            action.citta,
            action.nazione,
            action.emailUtente).pipe(
            map((response) => initMagazzinos({ response }))
            // prova senza redirect
            ,tap(()=>this.router.navigateByUrl('/risultatomagazzino'))
        ))
    ));


    signInMagazzino(email: string, password: string): Observable<Response> {
        return this.http.retrievePostCall<Response>('magazzino/logIn', {email, password});
      }
      
      
        
     
  
}