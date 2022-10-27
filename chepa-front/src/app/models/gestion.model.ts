import { Entreprise } from './entreprise.model';
import { Dechet } from './dechet.model';

export class Gestion {
  Id_gestion!: number;
  Entreprise!: Entreprise;
  Date!: Date;
  Dechet!: Dechet;
  Poid!: number;
}
