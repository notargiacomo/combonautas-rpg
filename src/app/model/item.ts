import { TipoItem } from '@app/enum/tipo.item.enum';
import { Chave } from '../enum/chave.enum';

export interface Item {
  id: number;
  pericia?: string;
  proficiencia?: string;
  id_prerequisitos?: number;
  tipo: TipoItem;
  nome?: string;
  deus?: string;
  descricao?: string;
  descricao_extra?: string;
  preco?: number;
  preco_descricao?: string;
  defesa?: number;
  manutencao?: number;
  tipo_manutencao?: string;
  rd?: number;
  pv?: number;
  cd_fabricacao?: number;
  cd_identificar_item?: number;
  custo_permanente_pontos_mana?: number;
  preco_fabricacao?: number;
  qtd_pacote_municao?: number;
  tempo_fabricacao_em_horas?: number;
  preco_conserto?: number;
  tempo_conserto_em_horas?: number;
  pericia_fabricacao_conserto?: string;
  valor_teste_resistencia?: number;
  capacidade_minima_criaturas?: number;
  capacidade_maxima_criaturas?: number;
  capacidade_maxima_espacos?: number;
  // são variantes, porem usarei o valor medio
  tamanho?: string;
  espaco?: number;
  // são variantes, porem usarei o valor medio
  dano?: string;
  tipo_dano?: string[];
  multiplicador_critico?: number;
  margem_ameaca?: number;
  alcance?: number;
  penalidade?: number;
  chave: Chave[];
  formula?: string;
  imagem?: string;
  referencias?: string;
  paginas?: string;
}
