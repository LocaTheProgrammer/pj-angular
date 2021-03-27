import { Params } from "@angular/router";
import { createSelector } from "@ngrx/store";
import { AppState } from "..";
import { UtenteState } from "./utente.reducers";

export const selectUtenteState = (state: AppState) => state.utenteState;

export const selectUtentes = createSelector(
    selectUtenteState,
    (state: UtenteState) => state.utentes
);
// export const selectTotalUtentes = createSelector(
//     selectUtenteState,
//     (state: UtenteState) => state.utentes.length
// );

export const getCurrentUtente = createSelector(
    selectUtenteState,
    (state: UtenteState, params: Params) => state.utentes.find(item => item.id === Number(params['id']))
);