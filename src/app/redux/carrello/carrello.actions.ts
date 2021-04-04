import { createAction, props } from '@ngrx/store';


import { Response } from '../../core/model/Response.interface';

export const retrieveAllCarrellos = createAction('[Home] articolos');
export const retrieveAllHot =createAction('[Carrello] hot articolos')
export const updateCarrello =createAction('[Carrello] prod upd',props<{id: string,description:string, measureUnit:string,name:string,price:string,scontoProd:string}>());
export const initCarrellos = createAction('[Home] init articolos', props<{response: Response}>());
export const initCarrellosHot = createAction('[Home] init articolos', props<{response: Response}>());
export const createCarrello= createAction('[Carrello] creazione prodotto', props<{email:string, idArticolo:string, taglia:string, quantita:number}>());
export const deleteCarrello=createAction('[Carrello], delete articolo', props<{id: string}>())
export const findProdById=createAction('[Carrello], find articolo', props<{ids: string}>())
//sbagliato no sbatti altro

//no sbatti
