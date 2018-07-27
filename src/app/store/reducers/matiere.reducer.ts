import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {Matiere} from "../../matieres/matieres.interface";
import {MatiereListModule} from "../actions/matiere.action";

export interface MatiereListStateEntity extends EntityState<Matiere> {
  loading: boolean;
  loaded: boolean;
  selectMatiere: Matiere;
  logs: {
    type: string;
    message: string;
  };
}

export const MatiereListAdapter: EntityAdapter<Matiere> = createEntityAdapter<Matiere>({
  sortComparer: false
});

export const initialState: MatiereListStateEntity = MatiereListAdapter.getInitialState({
  loading: false,
  loaded: false,
  selectMatiere: undefined,
  logs: undefined
});

export const {
  selectIds: selectMatieresIds,
  selectEntities: selectMatieresEntities,
  selectAll: selectMatieres,
  selectTotal: selectTotalMatieres
} = MatiereListAdapter.getSelectors();

export function matieresReducer(
  state = initialState,
  action: MatiereListModule.Actions
): MatiereListStateEntity {

  switch (action.type) {

    case MatiereListModule.ActionTypes.LOAD_INIT_MATIERES:
      // Passe le loading a true
      return {
        ...state,
        loading: true
      };

    case MatiereListModule.ActionTypes.SUCCESS_INIT_MATIERES:
      return {
        ...MatiereListAdapter.addMany(action.payload, state),
        loading: false,
        loaded: true,
      };

    case MatiereListModule.ActionTypes.LOAD_DELETE_MATIERE:
      return {
        ...state,
        loading: true
      };

    case MatiereListModule.ActionTypes.SUCCESS_DELETE_MATIERE:
      return {
        ...MatiereListAdapter.removeOne(action.payload, state),
        logs: { type: 'SUCCESS', message: 'La matiere a été supprimée avec succès' }
      };

    case MatiereListModule.ActionTypes.LOAD_CREATE_MATIERE:
      // Passe le loading a true
      return {
        ...state,
        loading: true
      };

    case MatiereListModule.ActionTypes.SUCCESS_CREATE_MATIERE:
      // Passe le loading a false et ajoute une matiere
      return {
        ...MatiereListAdapter.addOne(action.payload, state),
        loading: false,
        logs: { type: 'SUCCESS', message: 'La matiere a été créée avec succès' },
      };

    case MatiereListModule.ActionTypes.ERROR_LOAD_ACTION:
      return {
        ...state,
        logs: { type: 'ERROR', message: action.payload.message },
        loading: false
      };

    default:
      return state;
  }
}
