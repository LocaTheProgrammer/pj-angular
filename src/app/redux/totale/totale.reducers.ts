import { Action, createReducer, on } from '@ngrx/store';
import { CarrelloTotale } from 'src/app/core/model/CarrelloTotale.interface';
import { initCarrelloTotales } from './totale.actions';




export interface CarrelloTotaleState {
    carrelloTotale: CarrelloTotale[];
}


export const initialState: CarrelloTotaleState = {
    carrelloTotale: [],   
};



export const carrelloTotaleReducer = createReducer(
    initialState,
    on(initCarrelloTotales, (state, { response }) => ({ ...state, carrelloTotale: response.result })),
);




//----//
export function reducerCarrelloTotale(state: CarrelloTotaleState, action: Action) {
    return carrelloTotaleReducer(state, action);
}

