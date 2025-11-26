import { Poder } from './poder';

export interface Deus {
  id: number;
  nome?: string;
  dominios?: string[];
  natureza?: string;
  status?: string;
  nome_arquivo_descricao?: string;
  nome_arquivo_poderes?: string;
  nome_arquivo_avatar?: string;
  descricao?: string;
  poderes?: Poder[];
  tipo?: string;
  simbolo?: string;
  imagem?: string;
  imagem_avatar?: string;
  armaPreferida?: string;
  fundamentalista_sacerdote?: string;
  aceitaPaladinos?: boolean;
  fundamentalista_paladino?: string;
  aceitaDruidas?: boolean;
  fundamentalista_druida?: string;
  canalizaEnergia?: string;
  devotos?: string[];
  referencias?: string;
  paginas?: string;
}
