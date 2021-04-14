import { createAction, props } from "@ngrx/store";
import { Magazzino } from "src/app/core/model/Magazzino.interface";
import { Response } from '../../core/model/Response.interface';

export const initMagazzinos = createAction('[Magazzino] init Magazzinos', props<{response: Response}>());
export const deleteMagazzino = createAction('[Magazzino] delete Magazzino',props<{id: string}>());
export const updateMagazzino = createAction('[Magazzino] find-update', props<{id:string, ragioneSociale:string, partitaIva:string, email:string, sede: string, residenza: string, name:string}>())
export const createMagazzino = createAction('[Magazzino] creazione Magazzino', props<{carta:string, indirizzo:string, cap:string, citta:string, nazione:string, emailUtente:string}>());
export const retreiveAllMagazzinos = createAction('[Magazzino] Magazzino');


