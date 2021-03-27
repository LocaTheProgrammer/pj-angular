import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { ArticoloHotState, ArticoloState } from './product.reducers';


export const selectArticoloState = (state: AppState) => state.articolosState;
export const selectArticoloHotState = (state: AppState) => state.articolosHotState;




export const selectArticolos = createSelector(
    selectArticoloState,
    (state: ArticoloState) => state.articolos
);

export const selectArticolosHot = createSelector(
    selectArticoloHotState,
    (state: ArticoloHotState) => state.articoloshot
);


export const getCurrentArticolo = createSelector(
    selectArticoloState,
    (state: ArticoloState, params: Params) => state.articolos.find(item => item.id === Number(params['id']))
);