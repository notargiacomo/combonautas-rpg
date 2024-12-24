import { Injectable } from "@angular/core";
import { Raca } from "../model/raca";
import { CARISMA, MEDIO, PEQUENO } from "../model/constantes";

  @Injectable({
    providedIn: 'root'
  })
  export class RacaData {
    private racas: Raca[] = [];

    getRacas(): any[] {
      return this.racas;
    }

    constructor() {
        this.racas = [
          {
            id: 1, 
            id_raca_superior:0, 
            nome:`Humano`, 
            tipo:`Humanoide`, 
            tamanho: MEDIO,
            longevidade: 1,
            nome_arquivo_descricao:`raca_humano_descricao`,
            nome_arquivo_historia:`raca_humano_historia`,
            imagem:'assets/img/raca_humano.png',
            atributos: {
              forca: 0,
              destreza: 0,
              constituicao: 0,
              inteligencia: 0,
              sabedoria: 0,
              carisma: 0,
              um_escolha: false,
              dois_escolha: false,
              tres_escolha_diferentes: false,
              especial: false,
              exceto: '',
            },
            deslocamentos: [''],
            // {
            //   terrestre: 9,
            //   escalada: 0,
            //   natacao: 0,
            //   voo: 0,
            //   escavacao: 0,
            // },
            sentidos: [''],
            //  {
            //   visao_penumbra: false,
            //   visao_escuro: false,
            //   faro_agucado: false,
            //   outros: ''
            // },
            referencia: {
              livro: "Básico",
              paginas: "19",
            },
            descricao:``,
            historia:``
            
          },
          {
            id: 2, 
            id_raca_superior:0, 
            nome:`Anão`, 
            tipo:`Humanoide`, 
            tamanho: MEDIO,
            longevidade: 2,
            nome_arquivo_descricao:`raca_anao_descricao`,
            nome_arquivo_historia:`raca_anao_historia`,
            imagem:'assets/img/raca_anao.png',
            atributos: {
              forca: 0,
              destreza: -1,
              constituicao: 2,
              inteligencia: 0,
              sabedoria: 1,
              carisma: 0,
              um_escolha: false,
              dois_escolha: false,
              tres_escolha_diferentes: false,
              especial: false,
              exceto: '',
            },
            deslocamentos: [''], 
            // {
            //   terrestre: 6,
            //   escalada: 0,
            //   natacao: 0,
            //   voo: 0,
            //   escavacao: 0,
            // },
            sentidos: ['Visão no Escuro'],
            // {
            //   visao_penumbra: false,
            //   visao_escuro: true,
            //   faro_agucado: false,
            //   outros: ''
            // },
            referencia: {
              livro: "Básico",
              paginas: "20",
            },
            descricao: ``,
            historia: ``
          },
          {
            id: 3, 
            id_raca_superior:0, 
            nome:`Dahllan`, 
            tipo:`Humanoide`, 
            tamanho: MEDIO,
            longevidade: 5,
            nome_arquivo_descricao:`raca_dahllan_descricao`,
            nome_arquivo_historia:`raca_dahllan_historia`,
            imagem:'assets/img/raca_dahllan.png',
            atributos: {
              forca: 0,
              destreza: 1,
              constituicao: 0,
              inteligencia: -1,
              sabedoria: 2,
              carisma: 0,
              um_escolha: false,
              dois_escolha: false,
              tres_escolha_diferentes: false,
              especial: false,
              exceto: '',
            },
            deslocamentos: [''],
            // {
            //   terrestre: 9,
            //   escalada: 0,
            //   natacao: 0,
            //   voo: 0,
            //   escavacao: 0,
            // },
            sentidos:  [''],
            // {
            //   visao_penumbra: false,
            //   visao_escuro: false,
            //   faro_agucado: false,
            //   outros: ''
            // },
            referencia: {
              livro: "Básico",
              paginas: "21",
            },
            descricao: ``,
            historia:``
          }, 
          {
            id: 4, 
            id_raca_superior:0, 
            nome:`Elfo`, 
            tipo:`Humanoide`, 
            tamanho: MEDIO,
            longevidade: 5,
            nome_arquivo_descricao:`raca_elfo_descricao`,
            nome_arquivo_historia:`raca_elfo_historia`,
            imagem:'assets/img/raca_elfo.png',
            atributos: {
              forca: 0,
              destreza: 1,
              constituicao: -1,
              inteligencia: 2,
              sabedoria: 0,
              carisma: 0,
              um_escolha: false,
              dois_escolha: false,
              tres_escolha_diferentes: false,
              especial: false,
              exceto: '',
            },
            deslocamentos: [''],
            // {
            //   terrestre: 12,
            //   escalada: 0,
            //   natacao: 0,
            //   voo: 0,
            //   escavacao: 0,
            // },
            sentidos: ['Visão na Penumbra'],
            // {
            //   visao_penumbra: true,
            //   visao_escuro: false,
            //   faro_agucado: false,
            //   outros: ''
            // },
            referencia: {
              livro: "Básico",
              paginas: "22",
            },
            descricao:``,
            historia:``
          },
          {
            id: 5, 
            id_raca_superior:0, 
            nome:`Goblin`, 
            tipo:`Humanoide`, 
            tamanho: PEQUENO,
            longevidade: 1,
            nome_arquivo_descricao:`raca_goblin_descricao`,
            nome_arquivo_historia:`raca_goblin_historia`,
            imagem:'assets/img/raca_goblin.png',
            atributos: {
              forca: 0,
              destreza: 2,
              constituicao: 0,
              inteligencia: 1,
              sabedoria: 0,
              carisma: -1,
              um_escolha: false,
              dois_escolha: false,
              tres_escolha_diferentes: false,
              especial: false,
              exceto: '',
            },
            deslocamentos: ['Escalada'],
            // {
            //   terrestre: 9,
            //   escalada: 9,
            //   natacao: 0,
            //   voo: 0,
            //   escavacao: 0,
            // },
            sentidos: ['Visão no Escuro'],
            // {
            //   visao_penumbra: true,
            //   visao_escuro: true,
            //   faro_agucado: false,
            //   outros: ''
            // },
            referencia: {
              livro: "Básico",
              paginas: "23",
            },
            descricao:``,
            historia:``
          },
          {
            id: 6, 
            id_raca_superior:0, 
            nome:`Lefou`, 
            tipo:`Monstro`, 
            tamanho: MEDIO,
            longevidade: 1,
            nome_arquivo_descricao:`raca_lefou_descricao`,
            nome_arquivo_historia:`raca_lefou_historia`,
            imagem:'assets/img/raca_lefou.png',
            atributos: {
              forca: 0,
              destreza: 0,
              constituicao: 0,
              inteligencia: 0,
              sabedoria: 0,
              carisma: -1,
              um_escolha: false,
              dois_escolha: false,
              tres_escolha_diferentes: true,
              especial: false,
              exceto: CARISMA,
            },
            deslocamentos: [''],
            // {
            //   terrestre: 9,
            //   escalada: 0,
            //   natacao: 0,
            //   voo: 0,
            //   escavacao: 0,
            // },
            sentidos:[''],
            // {
            //   visao_penumbra: false,
            //   visao_escuro: true,
            //   faro_agucado: false,
            //   outros: ''
            // },
            referencia: {
              livro: "Básico",
              paginas: "24",
            },
            descricao:``,
            historia:``
          },
          {
            id: 7, 
            id_raca_superior:0, 
            nome:`Minotauro`, 
            tipo:`Humanoide`, 
            tamanho: MEDIO,
            longevidade: 1,
            nome_arquivo_descricao:`raca_minotauro_descricao`,
            nome_arquivo_historia:`raca_minotauro_historia`,
            imagem:'assets/img/raca_minotauro.png',
            atributos: {
              forca: 2,
              destreza: 0,
              constituicao: 1,
              inteligencia: 0,
              sabedoria: -1,
              carisma: 0,
              um_escolha: false,
              dois_escolha: false,
              tres_escolha_diferentes: false,
              especial: false,
              exceto: '',
            },
            deslocamentos: [''],
            // {
            //   terrestre: 9,
            //   escalada: 0,
            //   natacao: 0,
            //   voo: 0,
            //   escavacao: 0,
            // },
            sentidos: ['Olfato Aguçado'],
            // {
            //   visao_penumbra: false,
            //   visao_escuro: false,
            //   faro_agucado: true,
            //   outros: ''
            // },
            referencia: {
              livro: "Básico",
              paginas: "25",
            },
            descricao:``,
            historia:``
          },
          {
            id: 8, 
            id_raca_superior:0, 
            nome:`Qareen`, 
            tipo:`Humanoide`, 
            tamanho: MEDIO,
            longevidade: 2,
            nome_arquivo_descricao:`raca_qareen_descricao`,
            nome_arquivo_historia:`raca_qareen_historia`,
            imagem:'assets/img/raca_qareen.png',
            atributos: {
              forca: 0,
              destreza: 0,
              constituicao: 0,
              inteligencia: 1,
              sabedoria: -1,
              carisma: 2,
              um_escolha: false,
              dois_escolha: false,
              tres_escolha_diferentes: false,
              especial: false,
              exceto: '',
            },
            deslocamentos: [''], 
            // {
            //   terrestre: 9,
            //   escalada: 0,
            //   natacao: 0,
            //   voo: 0,
            //   escavacao: 0,
            // },
            sentidos: [''],
            // {
            //   visao_penumbra: false,
            //   visao_escuro: false,
            //   faro_agucado: false,
            //   outros: ''
            // },
            referencia: {
              livro: "Básico",
              paginas: "26",
            },
            descricao:``,
            historia:``
          }
        ];
    }

}