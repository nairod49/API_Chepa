import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entreprise } from './models/entreprise.model';
import { Dechet } from './models/dechet.model';
import { Lieu } from './models/lieu.model';
import { Gestion } from './models/gestion.model';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  lienHost: string = 'https://data.mongodb-api.com/app/data-jvhjj/endpoint/data/v1';

  constructor(
    private http:HttpClient
  ) { }

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
