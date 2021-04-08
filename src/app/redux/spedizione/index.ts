import { Params } from '@angular/router';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { SpedizioneState } from './spedizione.reducers';



export const selectSpedizioneState = (state: AppState) => state.spedizioneState;



export const selectSpediziones = createSelector(
    selectSpedizioneState,
    (state: SpedizioneState) => state.spediziones
);
