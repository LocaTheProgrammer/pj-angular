import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { utentesReducer, UtenteState } from './utente/utente.reducers';

import { ArticoloHotState, articolosHotReducer, articolosReducer, ArticoloState } from './articolo/product.reducers';
import { carrelloReducer, CarrelloState } from './carrello/carrello.reducers';



export interface AppState{
    articolosState: ArticoloState;
    articolosHotState: ArticoloHotState;
    router: RouterReducerState<any>;
    utenteState: UtenteState
    carrelloState:CarrelloState;
   
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    articolosHotState:articolosHotReducer,
    utenteState: utentesReducer,
    articolosState:articolosReducer,
    carrelloState:carrelloReducer
    
   
}