export interface FichaPersonagem {
  imagens: {
    personagem: string;
    token: string;
    topo: string;
  };

  cabecalho: {
    nome_personagem: string;
    nome_jogador: string;
    raca: string;
    origem: string;
    classe: string;
    devocao: string;
  };

  atributos: {
    forca: number;
    destreza: number;
    constituicao: number;
    inteligencia: number;
    sabedoria: number;
    carisma: number;
    pv: number;
    pm: number;
  };

  caracteristicas: {
    defesa: number;
    idade: number;
    faixa_etaria: string;
    tamanho: string;
    tipo: string;
  };

  listas: {
    ataques: string[];
    sentidos: string[];
    proficiencias: string[];
    deslocamentos: string[];
    resistencias: string[];
    pericias: string[];
    itens: string[];
    poderes: string[];
    magias: string[];
  };
}
