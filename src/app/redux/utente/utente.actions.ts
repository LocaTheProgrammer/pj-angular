import { createAction, props } from "@ngrx/store";
import { Utente } from "src/app/core/model/Utente.interface";
import { Response } from '../../core/model/Response.interface';

export const initUtentes = createAction('[Utente] init Utentes', props<{response: Response}>());
export const deleteUtente = createAction('[Utente] delete Utente',props<{id: string}>());
export const updateUtente = createAction('[Utente] find-update', props<{email:string, nome:string, cognome:string, password:string, dataNascita:string}>())
export const createUtente = createAction('[Utente] creazione Utente', props<{email:string, nome:string, cognome:string, password:string, dataNascita:string}>());
export const retreiveAllUtentes = createAction('[Utente] Utente');

export const loginUtente = createAction('[Utente] login', props<{email: string, password: string}>());
export const initUtente = createAction('[UtenteInit] init', props<{user: Utente}>());
export const loginUtenteSuccess = createAction('[Utente] Login Success', props<{user: Utente}>());
export const loginUtenteFailure = createAction('[Utente] Login Failure', props<{error: string}>());

