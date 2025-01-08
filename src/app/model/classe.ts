import { Proficiencia } from "../enum/proficiencia.enum";
import { Pericia } from "./pericia";

export interface Classe {

  id: number;
  nome?: string;
  nome_arquivo_descricao_classe?: string;
  nome_arquivo_descricao_poderes?:string;
  descricao_classe?: string;
  descricao_poderes?: string;
  fator_vida?: number;
  fator_mana?:number;
  proficiencias: Proficiencia[];
  pericia_obrigatoria:string;
  pericia_escolha_entre_duas:Pericia[];
  pericias_escolha_grupo:Pericia[];
  numero_pericias_escolha_grupo:number;
  imagem?: string,
  referencias?: string,
  paginas?: string

}