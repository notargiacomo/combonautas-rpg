import { OpcoesSelecao } from "../enum/opcoes.selecao";
import { Poder } from "./poder";

export class Raca {

  id!: number;
  id_raca_superior?: number;
  nome?: string;
  tipo?: string;
  nome_arquivo_descricao?: string;
  nome_arquivo_historia?: string;
  nome_arquivo_poderes_gerais?: string;
  descricao?: string;
  historia?: string;
  poderes_gerais?: string;
  tamanho?: string;
  imagem?: string;
  sentidos?: string[];
  deslocamentos?: string[];
  instrucao?: string[];
  resolucao?: string[];
  habilidades?: Poder[];
  poderes?: Poder[];
  seSelecaoFinalizada?: boolean;
  referencias?: string;
  paginas?: string;
  forca?: number;
  destreza?: number;
  constituicao?: number;
  inteligencia?: number;
  sabedoria?: number;
  carisma?: number;
  temMagia?: boolean;
  temPoderGeral?: boolean;
  temPericia?: boolean;
  temRD?:boolean;
  temDefeito?: boolean;
  temArmaNatural?: boolean;
  bonus?: string[];
  penalidade?: string[];

  constructor(){
  }

}