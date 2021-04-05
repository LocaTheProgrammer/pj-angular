import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { CarrelloTotaleState } from './totale.reducers';



export const selectCarrelloTotaleState = (state: AppState) => state.carrelloTotaleState;



export const selectCarrelloTotales = createSelector(
    selectCarrelloTotaleState,
    (state: CarrelloTotaleState) => state.carrelloTotale
);



// export const getCurrentCarrelloTotale = createSelector(
//     selectCarrelloTotaleState,
//     (state: CarrelloTotaleState, params: Params) => state.carrelloTotale.find(item => item.id === Number(params['id']))
// );