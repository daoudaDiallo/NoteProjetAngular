import { Injectable } from  '@angular/core';
import { Actions, Effect, ofType } from  '@ngrx/effects';
import { Observable } from  'rxjs/Observable';
import { catchError, map, switchMap } from  'rxjs/operators';
import {of} from "rxjs/index";
import {MatiereService} from "../../matieres/matiere.service";
import {MatiereListModule} from "../actions/matiere.action";

@Injectable()
export  class  MatiereListEffects {
  // Ecoute les actions passées dans le store
  @Effect() LoadMatieres$: Observable<MatiereListModule.Actions> = this.actions$
    .pipe(
      ofType(MatiereListModule.ActionTypes.LOAD_INIT_MATIERES),
      switchMap(action  =>  this.matiereListService.getMatiere()),
      map(matieres => new MatiereListModule.SuccessInitMatieres(matieres)),
      catchError((err) => of(new MatiereListModule.ErrorLoadAction(err)))
    );

  @Effect() LoadCreateMatiere$: Observable<MatiereListModule.Actions> = this.actions$
    .pipe(
      ofType<MatiereListModule.LoadCreateMatiere>(MatiereListModule.ActionTypes.LOAD_CREATE_MATIERE),
      switchMap(action => this.matiereListService.createMatiere(action.payload)),
      map(matiere => new MatiereListModule.SuccessCreateMatiere(matiere)),
      catchError((err) => of(new MatiereListModule.ErrorLoadAction(err)))
    );

  @Effect() LoadDeleteMatiere$: Observable<MatiereListModule.Actions> = this.actions$
    .pipe(
      ofType<MatiereListModule.LoadDeleteMatiere>(MatiereListModule.ActionTypes.LOAD_DELETE_MATIERE),
      switchMap(action => this.matiereListService.deleteMatiere(action.payload)),
      map(id => new MatiereListModule.SuccessDeleteMatiere(id)),
      catchError((err) => of(new MatiereListModule.ErrorLoadAction(err)))
    );

  constructor(
    private  matiereListService: MatiereService,
    private  actions$: Actions,
  ) {}

}
