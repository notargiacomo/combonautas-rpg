export interface MagiaSB {
      id?: number;
      id_count?: number;
      id_pai?: number;
      id_referencia?: number;
      referencia?: {
            nome?: string;
      };
      nome?: string;
      descricao?: string;
      escola?: string;
      tipo?: string;
      circulo?: number;
      custo_pm?: number;
      execucao?: string;
      alcance?: string;
      alvo?: string;
      duracao?: string;
      duracoes_concatenadas?: string[];
      area?: string;
      pericia_resistencia?: string;
      metodo_resistencia?: string;
      custo_material?: number;
      custo_pm_permanente?: number;
      efeito?: string;
      e_aumenta?: boolean;
      e_truque?: boolean;
      restricao?: string;
      paginas?: string;
}