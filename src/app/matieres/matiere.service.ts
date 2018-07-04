import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable()
export class MatiereService {
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  getMatiere() {
    return this
      .http
      .get(`${this.url}/matieres`);
  }

  createMatiere(data) {
    this.http.post(`${this.url}/matieres`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Votre matière a été créer avec succès.', 'Success');
          this.router.navigateByUrl('/matiere');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }
}
