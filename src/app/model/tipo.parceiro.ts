import { Pericia } from './pericia';

export interface TipoParceiro {
  id: number;
  id_parceiro_pai?: number; // coloque o id do parceiro pai aqui, se houver
  nome?: string;
  descricao?: string;
  tracos?: string[];
  parceiro_patamar?: string[];
  referencias?: string;
  pagina?: string;
}
