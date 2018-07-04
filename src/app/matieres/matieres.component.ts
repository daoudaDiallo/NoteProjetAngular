import { Component, OnInit } from '@angular/core';
import {MatiereService} from './matiere.service';
import {Matiere} from './matieres.interface';
import {Router} from "@angular/router";

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.css']
})
export class MatieresComponent implements OnInit {

  matieres: Matiere[];

  constructor(private matiereService: MatiereService, private router: Router) { }

  ngOnInit() {
    this.matiereService
      .getMatiere()
      .subscribe((data: Matiere[]) => {
        this.matieres = data;
      });
  }

  goToAddMatiere () {
    this.router.navigateByUrl('/ajout-matiere');
  }

}
