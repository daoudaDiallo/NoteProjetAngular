import { HttpErrorResponse } from '@angular/common/http';
import {Matiere} from "../../matieres/matieres.interface";

export namespace MatiereListModule {

  export enum ActionTypes {
    LOAD_INIT_MATIERES = '[matiereList] Load Init Matieres',
    SUCCESS_INIT_MATIERES = '[matiereList] Success Init Matieres',
    LOAD_DELETE_MATIERE = '[todoList] Load Delete Matiere',
    SUCCESS_DELETE_MATIERE = '[todoList] Success Delete Matiere',
    LOAD_CREATE_MATIERE = '[matiereList] Load Create Matiere',
    SUCCESS_CREATE_MATIERE = '[matiereList] Success Create Matiere',
    ERROR_LOAD_ACTION = '[matiereList] Error Load Action'
  }

  export  class  LoadInitMatieres {
    readonly  type = ActionTypes.LOAD_INIT_MATIERES;
  }

  export  class  SuccessInitMatieres {
    readonly  type = ActionTypes.SUCCESS_INIT_MATIERES;
    constructor( public payload: Matiere[]) {}
  }

  export class LoadDeleteMatiere {
    readonly type = ActionTypes.LOAD_DELETE_MATIERE;
    constructor(public payload: number) {}
  }

  export class SuccessDeleteMatiere {
    readonly type = ActionTypes.SUCCESS_DELETE_MATIERE;
    constructor(public payload: number) {}
  }

  export class LoadCreateMatiere {
    readonly type = ActionTypes.LOAD_CREATE_MATIERE;
    constructor(public payload: Matiere) {}
  }

  export class SuccessCreateMatiere {
    readonly type = ActionTypes.SUCCESS_CREATE_MATIERE;
    constructor(public payload: Matiere) {}
  }

  export class ErrorLoadAction {
    readonly type = ActionTypes.ERROR_LOAD_ACTION;
    constructor(public payload: HttpErrorResponse) {}
  }

  export type Actions = LoadInitMatieres | ErrorLoadAction | SuccessInitMatieres | LoadCreateMatiere
    | SuccessCreateMatiere |  LoadDeleteMatiere
    | SuccessDeleteMatiere;
}
