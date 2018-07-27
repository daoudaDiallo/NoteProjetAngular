import {Component, Inject, OnInit} from '@angular/core';
import {Matiere} from "../matieres/matieres.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppState} from "../store/index";
import {Store} from "@ngrx/store";
import {MatiereListModule} from "../store/actions/matiere.action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajout-matiere',
  templateUrl: './ajout-matiere.component.html',
  styleUrls: ['./ajout-matiere.component.css']
})
export class AjoutMatiereComponent implements OnInit {

  public matiereForm: FormGroup;

  constructor(private router: Router, @Inject(FormBuilder) fb: FormBuilder, private store: Store<AppState>) {
    this.matiereForm = fb.group({
      libelle: ['', Validators.required],
      coefficient: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  createMatiere(data: Matiere) {
    const payload = {
      ...data
    };
    this.store.dispatch(new MatiereListModule.LoadCreateMatiere(payload));
    // this.matiereForm.reset();
    this.router.navigateByUrl('/matiere');
  }

}
