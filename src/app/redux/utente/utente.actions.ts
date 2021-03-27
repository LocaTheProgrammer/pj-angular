import { createAction, props } from "@ngrx/store";
import { Response } from '../../core/model/Response.interface';

export const initUtentes = createAction('[Utente] init Utentes', props<{response: Response}>());
export const deleteUtente = createAction('[Utente] delete Utente',props<{id: string}>());
export const updateUtente = createAction('[Utente] find-update', props<{id:string, ragioneSociale:string, partitaIva:string, email:string, sede: string, residenza: string, name:string}>())
export const createUtente = createAction('[Utente] creazione Utente', props<{email:string, ragioneSociale:string, partitaIva:string,sede:string,residenza:string,name:string}>());
export const retreiveAllUtentes = createAction('[Utente] Utente');