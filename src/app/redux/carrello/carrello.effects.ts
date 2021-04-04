
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { switchMap, map, tap } from 'rxjs/operators';
import { HttpCommunicationsService } from "src/app/core/HttpCommunications/http-communications.service";

import { Response } from '../../core/model/Response.interface';
import { deleteCarrello, initCarrellos, retrieveAllCarrellos, createCarrello, updateCarrello, findProdById } from "./carrello.actions";




@Injectable()
export class CarrellosEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllCarrello(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("articolo/findAll");
    }

    

  
    findUpdateCarrello(id:string, description:string, measureUnit:string,name:string,price:string,sconto:string): Observable<Response>{
        return this.http.retrievePostCall<Response>('articolo/update',{id,description,measureUnit,name,price,sconto});
    }

    deleteCarrello(id:string){
        return this.http.retrievePostCall<Response>('articolo/delete',{id});
    }
    deleteCarrello$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(deleteCarrello),
        switchMap((action) => this.deleteCarrello(
            action.id).pipe(
            map((response) => initCarrellos({ response })),
            tap(()=>this.router.navigateByUrl('/redirectcarrellos'))
        ))
    ));
   

  
    createCarrello( email:string, idArticolo:string, taglia:string, quantita:number): Observable<Response>{
        return this.http.retrievePostCall<Response>('articolo/create',{email, idArticolo, taglia, quantita});
    }


    getAllCarrellos$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllCarrellos),
        switchMap(() => this.retreiveAllCarrello().pipe(
            map((response) => initCarrellos({ response }))
        ))
    ));


       

    //è sbagliato ma no sbatti di farne un altro
   
    createCarrello$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(createCarrello),
        switchMap((action) => this.createCarrello(
            action.email,
            action.idArticolo,
            action.taglia,
            action.quantita).pipe(
            map((response) => initCarrellos({ response })),
            tap(()=>this.router.navigateByUrl('/redirectcarrellos'))
        ))
    ));

   
   

    findUpdateCarrello$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(updateCarrello),
        switchMap((action) => this.findUpdateCarrello(
            action.id,
            action.description,
            action.measureUnit,
            action.name,
            action.price,
            action.scontoProd).pipe(
            map((response) => initCarrellos({ response }))
            ,tap(()=>this.router.navigateByUrl('/redirectcarrellos'))
        ))
    ));
    

    findProdById(ids:string){
        return this.http.retrievePostCall<Response>('articolo/findbyid',{ids});
    }
    findProdById$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(findProdById),
        switchMap((action) => this.findProdById(
            action.ids).pipe(
            map((response) => initCarrellos({ response })),
            tap(()=>this.router.navigateByUrl('/redirectcarrellos'))
        ))
    ));
    
}
