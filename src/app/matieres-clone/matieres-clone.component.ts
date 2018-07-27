import { Component, OnInit } from '@angular/core';
import {MatiereListModule} from "../store/actions/matiere.action";
import {Observable} from "rxjs/Rx";
import {Matiere} from "../matieres/matieres.interface";
import {select, Store} from "@ngrx/store";
import {AppState} from "../store/index";
import {selectMatiereListEntitiesConverted$, selectMatieresLoading$} from "../store/selectors/matiere.selector";

@Component({
  selector: 'app-matieres-clone',
  templateUrl: './matieres-clone.component.html',
  styleUrls: ['./matieres-clone.component.css']
})
export class MatieresCloneComponent implements OnInit {

  public matieres$: Observable<Matiere[]>;
  public  matieresLoading: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.matieres$ = store
      .pipe(select(selectMatiereListEntitiesConverted$));

    this.matieresLoading = store.pipe(select(selectMatieresLoading$));
  }

  ngOnInit() {
    this.store.dispatch(new  MatiereListModule.LoadInitMatieres());
  }

  deleteMatiere(id: number) {
    this.store.dispatch(new MatiereListModule.LoadDeleteMatiere(id));
  }

}
