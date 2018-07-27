import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Rx";
import {Matiere} from "./matieres.interface";
import {map} from "rxjs/internal/operators";

@Injectable()
export class MatiereService {
  constructor(private http: HttpClient) { }
  /*getMatiere() {
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
  }*/

  getMatiere(): Observable<Matiere[]> {
    return  this.http.get<Matiere[]>(`${environment.apiUrl}/matieres`);
  }

  createMatiere(body): Observable<Matiere> {
    return this.http.post<Matiere>(`${environment.apiUrl}/matieres`, body);
  }

  deleteMatiere(id): Observable<number> {
    return this.http.post<Matiere>(`${environment.apiUrl}/matieres/delete`, {'id': id})
      .pipe(map(response => id));
  }
}
