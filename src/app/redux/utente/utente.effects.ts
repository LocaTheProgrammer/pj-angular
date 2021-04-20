import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { switchMap, map, tap } from "rxjs/operators";
import { HttpCommunicationsService } from "src/app/core/HttpCommunications/http-communications.service";
import { createUtente, deleteUtente, initUtente, initUtentes, loginUtente, loginUtenteFailure, loginUtenteSuccess, retreiveAllUtentes, updateUtente } from "./utente.actions";
import { Response } from '../../core/model/Response.interface';
import { Action } from "@ngrx/store";

@Injectable()
export class UtenteEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllUtentes(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("utente/findAll");
    }

    
    createUtente(email:string, nome:string, cognome:string, password:string, dataNascita:string): Observable<Response>{
        return this.http.retrievePostCall<Response>('utente/create',{email, nome, cognome,password, dataNascita});
    }

    findUpdateUtente(email:string, nome:string, cognome:string, password:string, dataNascita:string){
        return this.http.retrievePostCall<Response>('utente/update',{email, nome, cognome,password, dataNascita});
    }

    deleteUtente(id: string): Observable<Response>{
        console.log(this.http.retrievePostCall<Response>('utente/delete',{id}));
        return this.http.retrievePostCall<Response>('utente/delete',{id});
    }
    //id:string, ragioneSociale:string, partitaIva:string, email:string, sede: string, residenza: string, name:string
    findUpdateUtente$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(updateUtente),
        switchMap((action) => this.findUpdateUtente(
            action.email,
            action.nome,
            action.cognome,
            action.password,
            action.dataNascita).pipe(
            map((response) => initUtentes({ response }))
            ,tap(()=>this.router.navigateByUrl('/home'))
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
            action.nome,
            action.cognome,
            action.password,
            action.dataNascita).pipe(
            map((response) => initUtentes({ response }))
            // prova senza redirect
            ,tap(()=>this.router.navigateByUrl('/login'))
        ))
    ));


    signInUtente(email: string, password: string): Observable<Response> {
        return this.http.retrievePostCall<Response>('utente/logIn', {email, password});
      }
      
      
        
      loginUtente$=createEffect(()=>this.actions$.pipe(
        ofType(loginUtente),
        switchMap(action => this.signInUtente(action.email, action.password).pipe(
            map( response=>{
              if(response.result === null){
                  console.log('Utente e/o Password non corretta')
                return loginUtenteFailure({error:'Utente e/o Password non corretta'})
              }else{
                sessionStorage.setItem('email',action.email)
                sessionStorage.setItem('id',response.result.id)
                return loginUtenteSuccess({user: response.result})
              }
            })
          ))
        ));
    
      loginUtenteSuccess$=createEffect(()=>this.actions$.pipe(
        ofType(loginUtenteSuccess),
        map( (action) => initUtente( {user: action.user} )),
        tap(()=>this.router.navigateByUrl('/home'))
      ));
  
  
}