export interface Parceiro {
  id: number;
  id_parceiro_pai?: number; // coloque o id do parceiro pai aqui, se houver
  nome?: string;
  descricao?: string;
  chave?: string[];
  parceiro_patamar?: string[];
  referencias?: string;
  pagina?: string;
}
