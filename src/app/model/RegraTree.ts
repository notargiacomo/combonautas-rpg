export interface RegraTree {
  id?: number;
  nome?: string;
  descricao?: string;
  sequencia?: number;
  children?: RegraTree[];
}