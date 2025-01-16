import { Classe } from "./classe";

export interface Poder {

  id: number;
  ids_poder_pai?: number[];
  nome?: string;
  descricao?: string;
  prerequisito?: string;
  prerequisito_atributo_nome?: string;
  prerequisito_atributo_valor?: number;
  prerequisito_pericia?: string;
  prerequisito_nivel?: number;
  tipo?: string;
  classe?: Classe;
  referencias?:string;
  paginas?:string;

}