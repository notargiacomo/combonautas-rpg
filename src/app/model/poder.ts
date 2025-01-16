import { Classe } from "./classe";

export interface Poder {

  id: number;
  ids_poder_pai?: number[];
  nome?: string;
  descricao?: string;
  prerequisito?: string;
  atributo?: number;
  pericia?: number;
  tipo?: string;
  classe?: Classe;

}