import { Classe } from "./classe";
import { Deus } from "./deus";
import { Raca } from "./raca";

export class Poder {

  id!: number;
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
  id_deuses?: number[];
  deuses?: Deus[];
  fator_tormenta?: number;
  e_aprimoramento?: boolean;
  e_poder_magico?: boolean;
  tipo?: string;
  id_classe?: number;
  classe?: Classe;
  raca?: Raca;
  duracao?: string;
  custo_pm?: string;
  execucao?: string;
  instrucao?: string[];
  resolucao?: string[];
  ativacao?: string[];
  referencias?: string;
  paginas?: string;
  auxiliar?: string;

}