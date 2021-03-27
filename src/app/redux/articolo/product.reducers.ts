import { Action, createReducer, on } from '@ngrx/store';
import { Articolo } from 'src/app/core/model/Articolo.interface';
import { initArticolos } from './product.actions';



export interface ArticoloState {
    articolos: Articolo[];
   

   
}

export interface ArticoloHotState {
    articoloshot: Articolo[];
   

   
}




export const initialState: ArticoloState = {
    articolos: [],
    
    
};

export const initialStateHot: ArticoloHotState = {
    articoloshot: [],
    
    
};

export const articolosReducer = createReducer(
    initialState,
    on(initArticolos, (state, { response }) => ({ ...state, articolos: response.result })),
);



export const articolosHotReducer = createReducer(
    initialStateHot,
    on(initArticolos, (state, { response }) => ({ ...state, articolos: response.result })),
);

//----//
export function reducerArticolo(state: ArticoloState, action: Action) {
    return articolosReducer(state, action);
}

export function reducerArticoloHot(state: ArticoloHotState, action: Action){
    return articolosHotReducer(state, action);
}