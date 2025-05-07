import { Poder } from "./poder";

export interface Distincao {

  id: number;
  nome?: string;
  nome_arquivo_descricao?: string;
  nome_arquivo_informacoes?: string;
  nome_arquivo_admissao?: string;
  admissao?:string;
  marca_distincao?:string;
  poderes?: Poder[];
  descricao_distincao?: string;
  ha_informacoes_adicionais?: boolean;
  descricao_informacoes?:string;
  imagem?: string,
  referencias?: string,
  paginas?: string

}