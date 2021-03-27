
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { switchMap, map, tap } from 'rxjs/operators';
import { HttpCommunicationsService } from "src/app/core/HttpCommunications/http-communications.service";

import { Response } from '../../core/model/Response.interface';
import { deleteArticolo, initArticolos, retrieveAllArticolos, createArticolo, updateArticolo, findProdById, retrieveAllHot, initArticolosHot } from "./product.actions";



@Injectable()
export class ArticolosEffects {

    constructor(private actions$: Actions, private http: HttpCommunicationsService, private router: Router) { }

    retreiveAllArticolo(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("articolo/findAll");
    }

    retreiveAllHot(): Observable<Response> {
        return this.http.retrieveGetCall<Response>("articolo/findHot");
    }

  
    findUpdateArticolo(id:string, description:string, measureUnit:string,name:string,price:string,sconto:string): Observable<Response>{
        return this.http.retrievePostCall<Response>('articolo/update',{id,description,measureUnit,name,price,sconto});
    }

    deleteArticolo(id:string){
        return this.http.retrievePostCall<Response>('articolo/delete',{id});
    }
    deleteArticolo$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(deleteArticolo),
        switchMap((action) => this.deleteArticolo(
            action.id).pipe(
            map((response) => initArticolos({ response })),
            tap(()=>this.router.navigateByUrl('/redirectarticolos'))
        ))
    ));
   

  
    createArticolo( description:string, measureUnit:string, name:string, price:string, scontoProd:string): Observable<Response>{
        return this.http.retrievePostCall<Response>('articolo/create',{description, measureUnit,name, price,scontoProd});
    }


    getAllArticolos$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllArticolos),
        switchMap(() => this.retreiveAllArticolo().pipe(
            map((response) => initArticolos({ response }))
        ))
    ));

    getAllHot$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllHot),
        switchMap(() => this.retreiveAllHot().pipe(
            map((response) => initArticolosHot({ response }))
        ))
    ));
       

    //è sbagliato ma no sbatti di farne un altro
   
    createArticolo$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(createArticolo),
        switchMap((action) => this.createArticolo(
            action.description,
            action.measureUnit,
            action.name,
            action.price,
            action.sconto).pipe(
            map((response) => initArticolos({ response })),
            tap(()=>this.router.navigateByUrl('/redirectarticolos'))
        ))
    ));

   
   

    findUpdateArticolo$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(updateArticolo),
        switchMap((action) => this.findUpdateArticolo(
            action.id,
            action.description,
            action.measureUnit,
            action.name,
            action.price,
            action.scontoProd).pipe(
            map((response) => initArticolos({ response }))
            ,tap(()=>this.router.navigateByUrl('/redirectarticolos'))
        ))
    ));
    

    findProdById(ids:string){
        return this.http.retrievePostCall<Response>('articolo/findbyid',{ids});
    }
    findProdById$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(findProdById),
        switchMap((action) => this.findProdById(
            action.ids).pipe(
            map((response) => initArticolos({ response })),
            tap(()=>this.router.navigateByUrl('/redirectarticolos'))
        ))
    ));
    
}
