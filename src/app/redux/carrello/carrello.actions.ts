import { createAction, props } from '@ngrx/store';
import { Response } from '../../core/model/Response.interface';

export const retrieveAllCarrellos = createAction('[carrello] carrello');
export const initCarrellos = createAction('[carrello] init articolos', props<{response: Response}>());
export const initCarrellosHot = createAction('[carrello] init articolos', props<{response: Response}>());
export const createCarrello= createAction('[Carrello] creazione carrello', props<{emailUtente:string, idArticolo:string, taglia:string, quantita:number}>());
export const deleteCarrello=createAction('[Carrello], delete carrello', props<{id: string}>())
export const findProdById=createAction('[Carrello], find carrello', props<{ids: string}>())
//sbagliato no sbatti altro

//no sbatti
