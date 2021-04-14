import {Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { Magazzino } from "src/app/core/model/Magazzino.interface";
import { initMagazzinos } from "./magazzino.actions";


export interface MagazzinoState {
    magazzinos: Magazzino[];
}

export const initialState: MagazzinoState = {
    magazzinos: [],
    
};

export const magazzinosReducer = createReducer(
    initialState,
    on(initMagazzinos, (state, { response }) => ({ ...state, magazzinos: response.result })),
  
    
);
//----//
export function reducer(state: MagazzinoState, action: Action) {
    return magazzinosReducer(state, action);
}

