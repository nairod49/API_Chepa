import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  lienHost: string = 'https://data.mongodb-api.com/app/data-jvhjj/endpoint/data/v1';

  constructor(
    private http:HttpClient
  ) { }

  /* Test functions */
  apiCallTest() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
  getAgeBasedOnName(name: string) {
    return this.http.get('https://api.agify.io/?name=' + name);
  }

  /*
  Endpoints prévisionnels :
    - localhost/entreprise
    - localhost/dechet
    - localhost/gestion
    - localhost/gestion/entreprise
    - localhost/gestion/dechet
   */

  /* Endpoint : /entreprise */
  getEntreprise(siren: number) {
    return this.http.get(this.lienHost + '/entreprise/?siren=' + siren);
  }

  deleteEntreprise(siren: number) {
    return this.http.delete(this.lienHost + '/entreprise/?siren=' + siren);
  }

  postEntreprise(siren: number, nom: string) {
    return this.http.post(this.lienHost + '/entreprise',
      {
        "siren" : siren,
        "nom" : nom,
        "lieu" : ""
      });
  }

  patchEntreprise(siren: number, nom: string) {
    return this.http.patch(this.lienHost + '/entreprise',
      {
        "siren" : siren,
        "nom" : nom,
        "lieu" : ""
      });
  }

  /* Endpoint : /dechet */
  getDechet(id: number) {
    return this.http.get(this.lienHost + '/dechet/?id=' + id);
  }

  deleteDechet(id: number) {
    return this.http.delete(this.lienHost + '/dechet/?id=' + id);
  }

  postDechet(id: number, nom: string) {
    return this.http.post(this.lienHost + '/dechet',
      {
        "id" : id,
        "nom" : nom
      });
  }

  patchDechet(id: number, nom: string) {
    return this.http.post(this.lienHost + '/dechet',
      {
        "id" : id,
        "nom" : nom
      });
  }

  /* Endpoint : /gestion */
  /**
   * Post la gestion des déchets d'une entreprise
   * @param id
   * @param siren l'id de l'entreprise
   * @param date la date de déchet
   * @param dechet l'id de déchet
   * @param poid
   */
  postGestion(id: number, siren: number, date: string, dechet: number, poid: number) {
    return this.http.post(this.lienHost + 'gestion',
      {
        "id" : id,
        "siren" : siren,
        "date" : date,
        "dechet" : dechet,
        "poid" : poid
      });
  }

  getGestion(id: number) {
    return this.http.get(this.lienHost + '/gestion/?id=' + id);
  }

  deleteGestion(id: number) {
    return this.http.delete(this.lienHost + '/gestion/?id=' + id);
  }

  patchGestion(id: number, siren: number, date: string, dechet: number, poid: number) {
    return this.http.post(this.lienHost + 'gestion',
      {
        "id" : id,
        "siren" : siren,
        "date" : date,
        "dechet" : dechet,
        "poid" : poid
      });
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
