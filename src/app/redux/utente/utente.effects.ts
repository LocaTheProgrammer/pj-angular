import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { switchMap, map, tap } from "rxjs/operators";
import { HttpCommunicationsService } from "src/app/core/HttpCommunications/http-communications.service";
import { createUtente, deleteUtente, initUtentes, retreiveAllUtentes, updateUtente } from "./utente.actions";
import { Response } from '../../core/model/Response.interface';
import { Action } from "@ngrx/store";

@Injectable()
export class UtenteEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllUtentes(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("utente/findAll");
    }

    
    createUtente(email:string, ragioneSociale:string, partitaIva:string,sede:string,residenza:string,name:string): Observable<Response>{
        return this.http.retrievePostCall<Response>('utente/create',{email,ragioneSociale,partitaIva,sede,residenza,name});
    }

    findUpdateUtente(id:string, ragioneSociale:string, partitaIva:string, email:string, sede: string, residenza: string, name:string){
        return this.http.retrievePostCall<Response>('utente/update',{id, ragioneSociale, partitaIva,email,sede,residenza,name});
    }

    deleteUtente(id: string): Observable<Response>{
        console.log(this.http.retrievePostCall<Response>('utente/delete',{id}));
        return this.http.retrievePostCall<Response>('utente/delete',{id});
    }
    //id:string, ragioneSociale:string, partitaIva:string, email:string, sede: string, residenza: string, name:string
    findUpdateUtente$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(updateUtente),
        switchMap((action) => this.findUpdateUtente(
            action.id,
            action.ragioneSociale,
            action.partitaIva,
            action.email,
            action.sede,
            action.residenza,
            action.name).pipe(
            map((response) => initUtentes({ response }))
            ,tap(()=>this.router.navigateByUrl('/redirectutente'))
        ))
    ));

    deleteUtente$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(deleteUtente),
        switchMap((action) => this.deleteUtente(
            action.id).pipe(
            map((response) => initUtentes({ response }))
            ,tap(()=>this.router.navigateByUrl('/redirectutente'))
        ))
    ));

    getAllUtentes$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retreiveAllUtentes),
        switchMap(() => this.retreiveAllUtentes().pipe(
            map((response) => initUtentes({ response }))
        ))
    ));

    createUtente$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(createUtente),
        switchMap((action) => this.createUtente(
            action.email,
            action.ragioneSociale,
            action.partitaIva,
            action.sede,
            action.residenza,
            action.name).pipe(
            map((response) => initUtentes({ response }))
            // prova senza redirect
            ,tap(()=>this.router.navigateByUrl('/redirectutente'))
        ))
    ));
}