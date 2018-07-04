import { Component, OnInit } from '@angular/core';
import {MatiereService} from '../matieres/matiere.service';
import {Matiere} from "../matieres/matieres.interface";

@Component({
  selector: 'app-ajout-matiere',
  templateUrl: './ajout-matiere.component.html',
  styleUrls: ['./ajout-matiere.component.css']
})
export class AjoutMatiereComponent implements OnInit {

  matieres: Matiere = {
    id_matire: null,
    libelle: '',
    coefficient: null
  };

  constructor(private matiereService: MatiereService) { }

  ngOnInit() {
  }

  createMatiere(data: Matiere) {
    this.matiereService.createMatiere(data);
  }

}
