import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { CarrelloState } from './carrello.reducers';



export const selectCarrelloState = (state: AppState) => state.carrelloState;



export const selectCarrellos = createSelector(
    selectCarrelloState,
    (state: CarrelloState) => state.carrello
);



export const getCurrentCarrello = createSelector(
    selectCarrelloState,
    (state: CarrelloState, params: Params) => state.carrello.find(item => item.id === Number(params['id']))
);