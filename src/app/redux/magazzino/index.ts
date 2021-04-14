import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { MagazzinoState } from './magazzino.reducers';



export const selectMagazzinoState = (state: AppState) => state.magazzinoState;



export const selectMagazzinos = createSelector(
    selectMagazzinoState,
    (state: MagazzinoState) => state.magazzinos
);
