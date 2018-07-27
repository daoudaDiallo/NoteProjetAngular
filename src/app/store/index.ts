import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import {MatiereListEffects} from "./effects/matiere.effect";
import {MatiereListStateEntity, matieresReducer} from "./reducers/matiere.reducer";

// Le root reducer
const reducers = {
  matieres: matieresReducer
};

export interface AppState {
  matieres: MatiereListStateEntity;
}

// Nécéssaire pour l'AOT
export function getReducers() {
  return reducers;
}
// Nécéssaire pour l'AOT
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export  const  appEffects = [MatiereListEffects];
