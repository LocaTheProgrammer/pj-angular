import { createAction, props } from "@ngrx/store";
import { Spedizione } from "src/app/core/model/Spedizione.interface";
import { Response } from '../../core/model/Response.interface';

export const initSpediziones = createAction('[Spedizione] init Spediziones', props<{response: Response}>());
export const deleteSpedizione = createAction('[Spedizione] delete Spedizione',props<{id: string}>());
export const updateSpedizione = createAction('[Spedizione] find-update', props<{id:string, ragioneSociale:string, partitaIva:string, email:string, sede: string, residenza: string, name:string}>())
export const createSpedizione = createAction('[Spedizione] creazione Spedizione', props<{carta:string, indirizzo:string, cap:string, citta:string, nazione:string, emailUtente:string}>());
export const retreiveAllSpediziones = createAction('[Spedizione] Spedizione');


