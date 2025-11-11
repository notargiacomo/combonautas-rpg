import { Proficiencia } from '../enum/proficiencia.enum';
import { Complicacao } from './complicacao';
import { Poder } from './poder';

export interface Classe {
  id: number;
  id_classe_pai?: number;
  nome?: string;
  sem_poderes?: boolean;
  poderes?: Poder[];
  habilidades?: Poder[];
  complicacoes?: Complicacao[];
  poderesDb?: Poder[];
  descricao_classe?: string;
  descricao_habilidades?: string;
  descricao_poderes?: string;
  descricao_complicacoes?: string;
  ha_informacoes_adicionais?: boolean;
  ha_poderes_db?: boolean;
  ha_complicacoes?: boolean;
  usa_poderes_variantes?: boolean;
  descricao_informacoes?: string;
  fator_vida?: number;
  fator_mana?: number;
  proficiencias?: Proficiencia[];
  pericia_obrigatoria?: string;
  pericia_escolha_entre_duas?: string[];
  pericias_escolha_grupo?: string[];
  numero_pericias_escolha_grupo?: number;
  imagem?: string;
  tabela?: string;
  referencias?: string;
  paginas?: string;
}
