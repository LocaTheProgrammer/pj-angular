import {Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { Spedizione } from "src/app/core/model/Spedizione.interface";
import { initSpediziones } from "./spedizione.actions";


export interface SpedizioneState {
    spediziones: Spedizione[];
}

export const initialState: SpedizioneState = {
    spediziones: [],
    
};

export const spedizionesReducer = createReducer(
    initialState,
    on(initSpediziones, (state, { response }) => ({ ...state, spediziones: response.result })),
  
    
);
//----//
export function reducer(state: SpedizioneState, action: Action) {
    return spedizionesReducer(state, action);
}

