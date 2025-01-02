import { Injectable } from "@angular/core";
import { Raca } from "../model/raca";
import { CARISMA, Construtor, Espirito as Espirito, Humanoide, MEDIO, MINUSCULO, Monstro, Morto_Vivo, PEQUENO } from "../model/constantes";

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

          // RAÇAS BASE DO LIVRO BÁSICO
          {
            id: 1, id_raca_superior:0, nome:`Humano`, tipo:Humanoide, tamanho: MEDIO, nome_arquivo_descricao:`raca_humano_descricao`, nome_arquivo_historia:`raca_humano_historia`, imagem:'assets/img/raca_humano.png', deslocamentos: [''], referencia: { livro: "Básico", paginas: "19"}, descricao:``, historia:``        
          },
          {
            id: 2, id_raca_superior:0, nome:`Anão`, tipo:Humanoide, tamanho: MEDIO, nome_arquivo_descricao:`raca_anao_descricao`, nome_arquivo_historia:`raca_anao_historia`, imagem:'assets/img/raca_anao.png', deslocamentos: [''], sentidos: ['Visão no Escuro'], referencia: { livro: "Básico", paginas: "20"}, descricao: ``, historia: ``
          },
          {
            id: 3, id_raca_superior:0, nome:`Dahllan`, tipo:Humanoide, tamanho: MEDIO, nome_arquivo_descricao:`raca_dahllan_descricao`, nome_arquivo_historia:`raca_dahllan_historia`, imagem:'assets/img/raca_dahllan.png', deslocamentos: [''], sentidos:  [''], referencia: { livro: "Básico", paginas: "21"}, descricao: ``, historia:``
          }, 
          {
            id: 4, id_raca_superior:0, nome:`Elfo`, tipo:Humanoide, tamanho: MEDIO,         nome_arquivo_descricao:`raca_elfo_descricao`, nome_arquivo_historia:`raca_elfo_historia`, imagem:'assets/img/raca_elfo.png',
            deslocamentos: [''], sentidos: ['Visão na Penumbra'], referencia: { livro: "Básico", paginas: "22"}, descricao:``,            historia:``
          },
          {
            id: 5, id_raca_superior:0, nome:`Goblin`, tipo:Humanoide, tamanho: PEQUENO,
            nome_arquivo_descricao:`raca_goblin_descricao`, nome_arquivo_historia:`raca_goblin_historia`, imagem:'assets/img/raca_goblin.png',
            deslocamentos: ['Escalada'], sentidos: ['Visão no Escuro'], referencia: { livro: "Básico", paginas: "23"}, descricao:``, historia:``
          },
          {
            id: 6, id_raca_superior:0, nome:`Lefou`, tipo:Monstro, tamanho: MEDIO, nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
            deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          },
          {
            id: 7, id_raca_superior:0, nome:`Minotauro`, tipo:Humanoide, tamanho: MEDIO, nome_arquivo_descricao:`raca_minotauro_descricao`, nome_arquivo_historia:`raca_minotauro_historia`, imagem:'assets/img/raca_minotauro.png', deslocamentos: [''], sentidos: ['Olfato Aguçado'], referencia: { livro: "Básico", paginas: "25"},
            descricao:``, historia:``
          },
          {
            id: 8, id_raca_superior:0, nome:`Qareen`, tipo:Humanoide, tamanho: MEDIO,        nome_arquivo_descricao:`raca_qareen_descricao`, nome_arquivo_historia:`raca_qareen_historia`, imagem:'assets/img/raca_qareen.png',
            deslocamentos: [''], sentidos: [''], referencia: { livro: "Básico", paginas: "26"}, descricao:``, historia:``
          }

          // RAÇAS EXTRAS DO LIVRO BÁSICO
          ,
          {
            id: 9, id_raca_superior:0, nome:`Golem`, tipo:Construtor, tamanho: MEDIO,         nome_arquivo_descricao:`raca_golem_descricao`, nome_arquivo_historia:`raca_golem_historia`, imagem:'assets/img/raca_golem.png',
            deslocamentos: [''], sentidos:['Visão no Escuro'], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          },
          {
            id: 10, id_raca_superior:0, nome:`Hynne`, tipo:Humanoide, tamanho: PEQUENO,         nome_arquivo_descricao:`raca_hynne_descricao`, nome_arquivo_historia:`raca_hynne_historia`, imagem:'assets/img/raca_hynne.png',
            deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "27 e 28"}, descricao:``, historia:``
          },
          {
            id: 11, id_raca_superior:0, nome:`Kliren`, tipo:Humanoide, tamanho: MEDIO,         nome_arquivo_descricao:`raca_kliren_descricao`, nome_arquivo_historia:`raca_kliren_historia`, imagem:'assets/img/raca_kliren.png',
            deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "28"}, descricao:``, historia:``
          },
          {
            id: 12, id_raca_superior:0, nome:`Medusa`, tipo:Monstro, tamanho: MEDIO,         nome_arquivo_descricao:`raca_medusa_descricao`, nome_arquivo_historia:`raca_medusa_historia`, imagem:'assets/img/raca_medusa.png',
            deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "28 e 29"}, descricao:``, historia:``
          },
          {
            id: 13, id_raca_superior:0, nome:`Osteon`, tipo:Morto_Vivo, tamanho: MEDIO,         nome_arquivo_descricao:`raca_osteon_descricao`, nome_arquivo_historia:`raca_osteon_historia`, imagem:'assets/img/raca_osteon.png',
            deslocamentos: [''], sentidos:['Visão no Escuro'], referencia: {livro: "Básico", paginas: "29"}, descricao:``, historia:``
          },
          {
            id: 14, id_raca_superior:0, nome:`Sereia/Tritão`, tipo:Humanoide, tamanho: MEDIO, nome_arquivo_descricao:`raca_sereia_tritao_descricao`, nome_arquivo_historia:`raca_sereia_tritao_historia`, imagem:'assets/img/raca_sereia_tritao.png',
            deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "29 e 30"}, descricao:``, historia:``
          },
          {
            id: 15, id_raca_superior:0, nome:`Sílfide`, tipo:Espirito, tamanho: MINUSCULO,         nome_arquivo_descricao:`raca_silfide_descricao`, nome_arquivo_historia:`raca_silfide_historia`, imagem:'assets/img/raca_silfide.png',
            deslocamentos: ['Voo'], sentidos:['Visão na Penumbra'], referencia: {livro: "Básico", paginas: "30"}, descricao:``, historia:``
          },
          {
            id: 16, id_raca_superior:0, nome:`Aggelus`, tipo:Espirito, tamanho: MEDIO,         nome_arquivo_descricao:`raca_suraggel_aggelus_descricao`, nome_arquivo_historia:`raca_suraggel_aggelus_historia`, imagem:'assets/img/raca_suraggel_aggelus.png', deslocamentos: [''], sentidos:['Visão no Escuro'], referencia: {livro: "Básico", paginas: "30 e 31"}, descricao:``, historia:``
          },
          {
            id: 17, id_raca_superior:0, nome:`Sulfure`, tipo:Espirito, tamanho: MEDIO,         nome_arquivo_descricao:`raca_suraggel_sulfure_descricao`, nome_arquivo_historia:`raca_suraggel_sulfure_historia`, imagem:'assets/img/raca_suraggel_sulfure.png',
            deslocamentos: [''], sentidos:['Visão no Escuro'], referencia: {livro: "Básico", paginas: "30 e 31"}, descricao:``, historia:``
          },
          {
            id: 18, id_raca_superior:0, nome:`Trog`, tipo:Monstro, tamanho: MEDIO,         nome_arquivo_descricao:`raca_trog_descricao`, nome_arquivo_historia:`raca_trog_historia`, imagem:'assets/img/raca_trog.png',
            deslocamentos: [''], sentidos:['Visão no Escuro'], referencia: {livro: "Básico", paginas: "31"}, descricao:``, historia:``
          },
          // {
          //   id: 6, id_raca_superior:0, nome:`Trog`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:['Visão no Escuro'], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // },
          // {
          //   id: 6, id_raca_superior:0, nome:`Lefou`, tipo:`Monstro`, tamanho: MEDIO,         nome_arquivo_descricao:`raca_lefou_descricao`, nome_arquivo_historia:`raca_lefou_historia`, imagem:'assets/img/raca_lefou.png',
          //   deslocamentos: [''], sentidos:[''], referencia: {livro: "Básico", paginas: "24"}, descricao:``, historia:``
          // }

        ];
    }

}