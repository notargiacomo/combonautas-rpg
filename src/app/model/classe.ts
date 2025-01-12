import { Proficiencia } from "../enum/proficiencia.enum";

export interface Classe {

  id: number;
  nome?: string;
  nome_arquivo_descricao_classe?: string;
  nome_arquivo_descricao_habilidades?: string;
  nome_arquivo_descricao_poderes?:string;
  nome_arquivo_descricao_informacoes?:string;
  nome_arquivo_descricao_complicacoes?:string;
  nome_arquivo_descricao_poderes_db?:string;
  descricao_classe?: string;
  descricao_habilidades?: string;
  descricao_poderes?: string;
  descricao_complicacoes?: string;
  descricao_poderes_db?: string;
  ha_informacoes_adicionais?: boolean;
  descricao_informacoes?:string;
  fator_vida?: number;
  fator_mana?:number;
  proficiencias: Proficiencia[];
  pericia_obrigatoria:string;
  pericia_escolha_entre_duas:string[];
  pericias_escolha_grupo:string[];
  numero_pericias_escolha_grupo:number;
  imagem?: string,
  tabela?: string,
  referencias?: string,
  paginas?: string

}