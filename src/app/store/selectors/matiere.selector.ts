import * as fromMatieres from '../reducers/matiere.reducer';
import {AppState} from "../index";
import {createSelector} from "@ngrx/store";
export { selectMatieresIds, selectMatieresEntities, selectMatieres, selectTotalMatieres } from '../reducers/matiere.reducer';

// La première fonction amène vers le state matieres
export const selectMatiereListState$ = (state: AppState) =>  state.matieres;

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
/*export const selectMatieres$ = createSelector(selectMatiereListState$,(matieres) =>  matieres.data);*/

export const selectMatiereListEntitiesConverted$ = createSelector(
  selectMatiereListState$,
  fromMatieres.selectMatieres);

export  const  selectMatieresLoading$ =
  createSelector(selectMatiereListState$, (matieres) =>  matieres.loading);

export  const  selectMatieresLoaded$ =
  createSelector(selectMatiereListState$, (matieres) =>  matieres.loaded);

export const selectMatieresErrors$ =
  createSelector(selectMatiereListState$, (matieres) => matieres.logs);
