import { Action, createReducer, on } from '@ngrx/store';
import { Carrello } from 'src/app/core/model/Carrello.interface';
import { initCarrellos } from './carrello.actions';




export interface CarrelloState {
    carrello: Carrello[];
}


export const initialState: CarrelloState = {
    carrello: [],   
};



export const carrelloReducer = createReducer(
    initialState,
    on(initCarrellos, (state, { response }) => ({ ...state, carrello: response.result })),
);




//----//
export function reducerCarrello(state: CarrelloState, action: Action) {
    return carrelloReducer(state, action);
}

