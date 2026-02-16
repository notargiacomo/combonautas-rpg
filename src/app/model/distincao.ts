import { Poder } from './poder';

export interface Distincao {
  id: number;
  nome?: string;
  admissao?: string;
  marca_distincao?: string;
  poderes?: Poder[];
  descricao?: string;
  ha_informacoes_adicionais?: boolean;
  descricao_informacoes?: string;
  imagem?: string;
  referencias?: string;
  paginas?: string;
}
