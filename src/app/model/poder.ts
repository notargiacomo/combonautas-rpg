import { Classe } from "./classe";

export interface Poder {

  id: number;
  ids_poder_pai?: number[];
  nome?: string;
  descricao?: string;
  prerequisito?: string;
  prerequisito_atributo_nome?: string;
  prerequisito_atributo_valor?: number;
  prerequisito_segundo_atributo_nome?: string;
  prerequisito_segundo_atributo_valor?: number;
  prerequisito_pericia?: string[];
  prerequisito_nivel?: number;
  prerequisito_habilidade?: string[];
  prerequisito_numero_habilidade_tormenta?: number;
  deuses?: number[];
  fator_tormenta?: number,
  e_aprimoramento?: boolean;
  e_poder_magico?:boolean;
  tipo?: string;
  classe?: Classe;
  referencias?:string;
  paginas?:string;

}