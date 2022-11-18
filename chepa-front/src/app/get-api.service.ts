import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Entreprise } from './models/entreprise.model';
import { Dechet } from './models/dechet.model';
import { Lieu } from './models/lieu.model';
import { Gestion } from './models/gestion.model';
import { User } from './models/user.model';

const httpOptions: any = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  lienHost: string = 'https://api-chepa-sercure.vercel.app/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(this.lienHost + '/allUser');
  }

  /* Endpoint : /entreprise */
  getEntreprise(siren: number) {
    return this.http.get<Entreprise[]>(this.lienHost + '/entreprise/?siren=' + siren);
  }

  deleteEntreprise(siren: number) {
    return this.http.delete(this.lienHost + '/entreprise/?siren=' + siren);
  }



  postEntreprise(command: Entreprise) {
    return this.http.post(this.lienHost + '/entreprise', command);
  }

  patchEntreprise(command: Entreprise) {
    return this.http.patch(this.lienHost + '/entreprise', command);
  }

  /* Endpoint : /dechet */
  getDechet(id: number) {
    return this.http.get(this.lienHost + '/dechet/?id=' + id);
  }

  deleteDechet(id: number) {
    return this.http.delete(this.lienHost + '/dechet/?id=' + id);
  }

  postDechet(command: Dechet) {
    return this.http.post(this.lienHost + '/dechet', command);
  }

  patchDechet(command: Dechet) {
    return this.http.patch(this.lienHost + '/dechet', command);
  }

  /* Endpoint : /gestion */
  postGestion(command: Gestion) {
    return this.http.post(this.lienHost + 'gestion', command);
  }

  getGestion(id: number) {
    return this.http.get(this.lienHost + '/gestion/?id=' + id);
  }

  deleteGestion(id: number) {
    return this.http.delete(this.lienHost + '/gestion/?id=' + id);
  }

  patchGestion(command: Gestion) {
    return this.http.patch(this.lienHost + 'gestion', command);
  }
  /* Endpoint : /gestion/entreprise */
  getGestionEntreprise(gestionID: number) {
    return this.http.get(this.lienHost + '/gestion/entreprise/?id=' + gestionID);
  }

  /* Endpoint : /gestion/dechet */
  getGestionDechet(gestionID: number) {
    return this.http.get(this.lienHost + '/gestion/dechet/?id=' + gestionID);
  }
}
