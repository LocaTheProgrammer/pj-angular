import {Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { Utente } from "src/app/core/model/Utente.interface";
import { initUtentes } from "./utente.actions";


export interface UtenteState {
    utentes: Utente[];
}

export const initialState: UtenteState = {
    utentes: [],
    
};

export const utentesReducer = createReducer(
    initialState,
    on(initUtentes, (state, { response }) => ({ ...state, utentes: response.result })),
  
    
);
//----//
export function reducer(state: UtenteState, action: Action) {
    return utentesReducer(state, action);
}

