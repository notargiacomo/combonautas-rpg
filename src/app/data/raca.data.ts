import { Injectable } from '@angular/core';
import { Raca } from '../model/raca';

import {
  CARISMA,
  Construto as Construto,
  Espirito as Espirito,
  Humanoide,
  Monstro,
  Morto_Vivo,
} from '../model/constantes';
import { Sentido } from '../enum/sentido.enum';
import { Deslocamento } from '../enum/deslocamento.enum';
import { Referencia } from '../enum/referencia.enum';
import { Tamanho } from '../enum/tamanho.enum';

@Injectable({
  providedIn: 'root',
})
export class RacaData {
  private racas: Raca[] = [];

  get(): any[] {
    return this.racas;
  }

  constructor() {
    this.racas = [
      // RAÇAS BASE DO referencia BÁSICO
      {
        id: 1,
        id_raca_superior: 0,
        nome: `Humano`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_humano_descricao`,
        nome_arquivo_historia: `raca_humano_historia`,
        imagem: 'assets/img/raca_humano.png',
        deslocamentos: [''],
        referencias: Referencia.BASICO,
        paginas: '19',
        descricao: ``,
        historia: ``,
      },
      {
        id: 2,
        id_raca_superior: 0,
        nome: `Anão`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_anao_descricao`,
        nome_arquivo_historia: `raca_anao_historia`,
        imagem: 'assets/img/raca_anao.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.BASICO,
        paginas: '20',
        descricao: ``,
        historia: ``,
      },
      {
        id: 3,
        id_raca_superior: 0,
        nome: `Dahllan`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_dahllan_descricao`,
        nome_arquivo_historia: `raca_dahllan_historia`,
        imagem: 'assets/img/raca_dahllan.png',
        deslocamentos: [''],
        sentidos: [''],
        referencias: Referencia.BASICO,
        paginas: '21',
        descricao: ``,
        historia: ``,
      },
      {
        id: 4,
        id_raca_superior: 0,
        nome: `Elfo`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_elfo_descricao`,
        nome_arquivo_historia: `raca_elfo_historia`,
        imagem: 'assets/img/raca_elfo.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_PENUMBRA],
        referencias: Referencia.BASICO,
        paginas: '22',
        descricao: ``,
        historia: ``,
      },
      {
        id: 5,
        id_raca_superior: 0,
        nome: `Goblin`,
        tipo: Humanoide,
        tamanho: Tamanho.PEQUENO,
        nome_arquivo_descricao: `raca_goblin_descricao`,
        nome_arquivo_historia: `raca_goblin_historia`,
        imagem: 'assets/img/raca_goblin.png',
        deslocamentos: [Deslocamento.ESCALADA],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.BASICO,
        paginas: '23',
        descricao: ``,
        historia: ``,
      },
      {
        id: 6,
        id_raca_superior: 0,
        nome: `Lefou`,
        tipo: Monstro,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_lefou_descricao`,
        nome_arquivo_historia: `raca_lefou_historia`,
        imagem: 'assets/img/raca_lefou.png',
        deslocamentos: [''],
        sentidos: [''],
        referencias: Referencia.BASICO,
        paginas: '24',
        descricao: ``,
        historia: ``,
      },
      {
        id: 7,
        id_raca_superior: 0,
        nome: `Minotauro`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_minotauro_descricao`,
        nome_arquivo_historia: `raca_minotauro_historia`,
        imagem: 'assets/img/raca_minotauro.png',
        deslocamentos: [''],
        sentidos: [Sentido.OLFATO_AGUCADO],
        referencias: Referencia.BASICO,
        paginas: '25',
        descricao: ``,
        historia: ``,
      },
      {
        id: 8,
        id_raca_superior: 0,
        nome: `Qareen`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_qareen_descricao`,
        nome_arquivo_historia: `raca_qareen_historia`,
        imagem: 'assets/img/raca_qareen.png',
        deslocamentos: [''],
        sentidos: [''],
        referencias: Referencia.BASICO,
        paginas: '26',
        descricao: ``,
        historia: ``,
      },

      // RAÇAS EXTRAS DO referencia BÁSICO
      {
        id: 9,
        id_raca_superior: 0,
        nome: `Golem`,
        tipo: Construto,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_golem_descricao`,
        nome_arquivo_historia: `raca_golem_historia`,
        imagem: 'assets/img/raca_golem.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.BASICO,
        paginas: '24',
        descricao: ``,
        historia: ``,
      },
      {
        id: 10,
        id_raca_superior: 0,
        nome: `Hynne`,
        tipo: Humanoide,
        tamanho: Tamanho.PEQUENO,
        nome_arquivo_descricao: `raca_hynne_descricao`,
        nome_arquivo_historia: `raca_hynne_historia`,
        imagem: 'assets/img/raca_hynne.png',
        deslocamentos: [''],
        sentidos: [''],
        referencias: Referencia.BASICO,
        paginas: '27 e 28',
        descricao: ``,
        historia: ``,
      },
      {
        id: 11,
        id_raca_superior: 0,
        nome: `Kliren`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_kliren_descricao`,
        nome_arquivo_historia: `raca_kliren_historia`,
        imagem: 'assets/img/raca_kliren.png',
        deslocamentos: [''],
        sentidos: [''],
        referencias: Referencia.BASICO,
        paginas: '28',
        descricao: ``,
        historia: ``,
      },
      {
        id: 12,
        id_raca_superior: 0,
        nome: `Medusa`,
        tipo: Monstro,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_medusa_descricao`,
        nome_arquivo_historia: `raca_medusa_historia`,
        imagem: 'assets/img/raca_medusa.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.BASICO,
        paginas: '28 e 29',
        descricao: ``,
        historia: ``,
      },
      {
        id: 13,
        id_raca_superior: 0,
        nome: `Osteon`,
        tipo: Morto_Vivo,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_osteon_descricao`,
        nome_arquivo_historia: `raca_osteon_historia`,
        imagem: 'assets/img/raca_osteon.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.BASICO,
        paginas: '29',
        descricao: ``,
        historia: ``,
      },
      {
        id: 14,
        id_raca_superior: 0,
        nome: `Sereia/Tritão`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_sereia_tritao_descricao`,
        nome_arquivo_historia: `raca_sereia_tritao_historia`,
        imagem: 'assets/img/raca_sereia_tritao.png',
        deslocamentos: [''],
        sentidos: [''],
        referencias: Referencia.BASICO,
        paginas: '29 e 30',
        descricao: ``,
        historia: ``,
      },
      {
        id: 15,
        id_raca_superior: 0,
        nome: `Sílfide`,
        tipo: Espirito,
        tamanho: Tamanho.MINUSCULO,
        nome_arquivo_descricao: `raca_silfide_descricao`,
        nome_arquivo_historia: `raca_silfide_historia`,
        imagem: 'assets/img/raca_silfide.png',
        deslocamentos: [Deslocamento.VOO],
        sentidos: [Sentido.VISAO_PENUMBRA],
        referencias: Referencia.BASICO,
        paginas: '30',
        descricao: ``,
        historia: ``,
      },
      {
        id: 16,
        id_raca_superior: 0,
        nome: `Aggelus`,
        tipo: Espirito,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_suraggel_aggelus_descricao`,
        nome_arquivo_historia: `raca_suraggel_aggelus_historia`,
        imagem: 'assets/img/raca_suraggel_aggelus.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.BASICO,
        paginas: '30 e 31',
        descricao: ``,
        historia: ``,
      },
      {
        id: 17,
        id_raca_superior: 0,
        nome: `Sulfure`,
        tipo: Espirito,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_suraggel_sulfure_descricao`,
        nome_arquivo_historia: `raca_suraggel_sulfure_historia`,
        imagem: 'assets/img/raca_suraggel_sulfure.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.BASICO,
        paginas: '30 e 31',
        descricao: ``,
        historia: ``,
      },
      {
        id: 18,
        id_raca_superior: 0,
        nome: `Trog`,
        tipo: Monstro,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_trog_descricao`,
        nome_arquivo_historia: `raca_trog_historia`,
        imagem: 'assets/img/raca_trog.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.BASICO,
        paginas: '31',
        descricao: ``,
        historia: ``,
      },

      // RAÇAS DO AMEAÇAS

      {
        id: 19,
        id_raca_superior: 0,
        nome: `Meio-Orc`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_meio_orc_descricao`,
        nome_arquivo_historia: `raca_meio_orc_historia`,
        imagem: 'assets/img/raca_meio_orc.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.AMEACAS,
        paginas: '31',
        descricao: ``,
        historia: ``,
      },
      {
        id: 20,
        id_raca_superior: 0,
        nome: `Orc`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_orc_descricao`,
        nome_arquivo_historia: `raca_orc_historia`,
        imagem: 'assets/img/raca_orc.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.AMEACAS,
        paginas: '33',
        descricao: ``,
        historia: ``,
      },
      {
        id: 21,
        id_raca_superior: 0,
        nome: `Tabrachi`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_tabrachi_descricao`,
        nome_arquivo_historia: `raca_tabrachi_historia`,
        imagem: 'assets/img/raca_tabrachi.png',
        deslocamentos: [Deslocamento.NATACAO],
        sentidos: [Sentido.VISAO_PENUMBRA],
        referencias: Referencia.AMEACAS,
        paginas: '37',
        descricao: ``,
        historia: ``,
      },
      {
        id: 22,
        id_raca_superior: 0,
        nome: `Trog Anão`,
        tipo: Monstro,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_trog_anao_descricao`,
        nome_arquivo_historia: `raca_trog_anao_historia`,
        imagem: 'assets/img/raca_trog_anao.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.AMEACAS,
        paginas: '39',
        descricao: ``,
        historia: ``,
      },
      {
        id: 23,
        id_raca_superior: 0,
        nome: `Ogro`,
        tipo: Humanoide,
        tamanho: Tamanho.GRANDE,
        nome_arquivo_descricao: `raca_ogro_descricao`,
        nome_arquivo_historia: `raca_ogro_historia`,
        imagem: 'assets/img/raca_ogro.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_PENUMBRA],
        referencias: Referencia.AMEACAS,
        paginas: '40',
        descricao: ``,
        historia: ``,
      },
      {
        id: 24,
        id_raca_superior: 0,
        nome: `Bugbear`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_bugbear_descricao`,
        nome_arquivo_historia: `raca_bugbear_historia`,
        imagem: 'assets/img/raca_bugbear.png',
        deslocamentos: [''],
        sentidos: [Sentido.OLFATO_AGUCADO, Sentido.VISAO_ESCURO],
        referencias: Referencia.AMEACAS,
        paginas: '79',
        descricao: ``,
        historia: ``,
      },
      {
        id: 25,
        id_raca_superior: 0,
        nome: `Hobgoblin`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_hobgoblin_descricao`,
        nome_arquivo_historia: `raca_hobgoblin_historia`,
        imagem: 'assets/img/raca_hobgoblin.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.AMEACAS,
        paginas: '84',
        descricao: ``,
        historia: ``,
      },
      {
        id: 26,
        id_raca_superior: 0,
        nome: `Centauro`,
        tipo: Humanoide,
        tamanho: Tamanho.GRANDE,
        nome_arquivo_descricao: `raca_centauro_descricao`,
        nome_arquivo_historia: `raca_centauro_historia`,
        imagem: 'assets/img/raca_centauro.png',
        deslocamentos: [''],
        sentidos: [''],
        referencias: Referencia.AMEACAS,
        paginas: '105',
        descricao: ``,
        historia: ``,
      },
      {
        id: 27,
        id_raca_superior: 0,
        nome: `Gnoll`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_gnoll_descricao`,
        nome_arquivo_historia: `raca_gnoll_historia`,
        imagem: 'assets/img/raca_gnoll.png',
        deslocamentos: [''],
        sentidos: [Sentido.OLFATO_AGUCADO],
        referencias: Referencia.AMEACAS,
        paginas: '115',
        descricao: ``,
        historia: ``,
      },
      {
        id: 28,
        id_raca_superior: 0,
        nome: `Kallyanach`,
        tipo: Monstro,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_kallyanach_descricao`,
        nome_arquivo_historia: `raca_kallyanach_historia`,
        imagem: 'assets/img/raca_kallyanach.png',
        deslocamentos: [''],
        sentidos: [''],
        referencias: Referencia.AMEACAS,
        paginas: '151',
        descricao: ``,
        historia: ``,
      },
      {
        id: 29,
        id_raca_superior: 0,
        nome: `Kaijin`,
        tipo: Monstro,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_kaijin_descricao`,
        nome_arquivo_historia: `raca_kaijin_historia`,
        imagem: 'assets/img/raca_kaijin.png',
        deslocamentos: [''],
        sentidos: [''],
        referencias: Referencia.AMEACAS,
        paginas: '157',
        descricao: ``,
        historia: ``,
      },
      {
        id: 30,
        id_raca_superior: 0,
        nome: `Kappa`,
        tipo: Espirito,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_kappa_descricao`,
        nome_arquivo_historia: `raca_kappa_historia`,
        imagem: 'assets/img/raca_kappa.png',
        deslocamentos: [Deslocamento.NATACAO],
        sentidos: [''],
        referencias: Referencia.AMEACAS,
        paginas: '158',
        descricao: ``,
        historia: ``,
      },
      {
        id: 31,
        id_raca_superior: 0,
        nome: `Mashin`,
        tipo: Construto,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_mashin_descricao`,
        nome_arquivo_historia: `raca_mashin_historia`,
        imagem: 'assets/img/raca_mashin.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.AMEACAS,
        paginas: '161',
        descricao: ``,
        historia: ``,
      },
      {
        id: 32,
        id_raca_superior: 0,
        nome: `Nezumi`,
        tipo: Humanoide,
        tamanho: Tamanho.PEQUENO,
        nome_arquivo_descricao: `raca_nezumi_descricao`,
        nome_arquivo_historia: `raca_nezumi_historia`,
        imagem: 'assets/img/raca_nezumi.png',
        deslocamentos: [''],
        sentidos: [Sentido.OLFATO_AGUCADO, Sentido.VISAO_PENUMBRA],
        referencias: Referencia.AMEACAS,
        paginas: '162',
        descricao: ``,
        historia: ``,
      },
      {
        id: 33,
        id_raca_superior: 0,
        nome: `Tengu`,
        tipo: Espirito,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_tengu_descricao`,
        nome_arquivo_historia: `raca_tengu_historia`,
        imagem: 'assets/img/raca_tengu.png',
        deslocamentos: [Deslocamento.VOO],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.AMEACAS,
        paginas: '164',
        descricao: ``,
        historia: ``,
      },
      {
        id: 34,
        id_raca_superior: 0,
        nome: `Minauro`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_minauro_descricao`,
        nome_arquivo_historia: `raca_minauro_historia`,
        imagem: 'assets/img/raca_minauro.png',
        deslocamentos: [''],
        sentidos: [Sentido.OLFATO_AGUCADO],
        referencias: Referencia.AMEACAS,
        paginas: '175',
        descricao: ``,
        historia: ``,
      },
      {
        id: 35,
        id_raca_superior: 0,
        nome: `Kobolds`,
        tipo: Monstro,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_kobold_descricao`,
        nome_arquivo_historia: `raca_kobold_historia`,
        imagem: 'assets/img/raca_kobold.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.AMEACAS,
        paginas: '183',
        descricao: ``,
        historia: ``,
      },
      {
        id: 37,
        id_raca_superior: 0,
        nome: `Harpia`,
        tipo: Monstro,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_harpia_descricao`,
        nome_arquivo_historia: `raca_harpia_historia`,
        imagem: 'assets/img/raca_harpia.png',
        deslocamentos: [Deslocamento.VOO],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.AMEACAS,
        paginas: '201',
        descricao: ``,
        historia: ``,
      },
      {
        id: 38,
        id_raca_superior: 0,
        nome: `Ceratops`,
        tipo: Humanoide,
        tamanho: Tamanho.GRANDE,
        nome_arquivo_descricao: `raca_ceratops_descricao`,
        nome_arquivo_historia: `raca_ceratops_historia`,
        imagem: 'assets/img/raca_ceratops.png',
        deslocamentos: [''],
        sentidos: [''],
        referencias: Referencia.AMEACAS,
        paginas: '265',
        descricao: ``,
        historia: ``,
      },
      {
        id: 39,
        id_raca_superior: 0,
        nome: `Pteros`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_pteros_descricao`,
        nome_arquivo_historia: `raca_pteros_historia`,
        imagem: 'assets/img/raca_pteros.png',
        deslocamentos: [Deslocamento.VOO],
        sentidos: [Sentido.VISAO_PENUMBRA],
        referencias: Referencia.AMEACAS,
        paginas: '267',
        descricao: ``,
        historia: ``,
      },
      {
        id: 40,
        id_raca_superior: 0,
        nome: `Velocis`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_velocis_descricao`,
        nome_arquivo_historia: `raca_velocis_historia`,
        imagem: 'assets/img/raca_velocis.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_PENUMBRA, Sentido.OLFATO_AGUCADO],
        referencias: Referencia.AMEACAS,
        paginas: '268',
        descricao: ``,
        historia: ``,
      },
      {
        id: 41,
        id_raca_superior: 0,
        nome: `Voracis`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_voracis_descricao`,
        nome_arquivo_historia: `raca_voracis_historia`,
        imagem: 'assets/img/raca_voracis.png',
        deslocamentos: [Deslocamento.ESCALADA],
        sentidos: [Sentido.OLFATO_AGUCADO, Sentido.VISAO_PENUMBRA],
        referencias: Referencia.AMEACAS,
        paginas: '270',
        descricao: ``,
        historia: ``,
      },
      {
        id: 42,
        id_raca_superior: 0,
        nome: `Yidishan`,
        tipo: Construto,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_yidishan_descricao`,
        nome_arquivo_historia: `raca_yidishan_historia`,
        imagem: 'assets/img/raca_yidishan.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.AMEACAS,
        paginas: '300',
        descricao: ``,
        historia: ``,
      },
      {
        id: 43,
        id_raca_superior: 0,
        nome: `Moreau Coruja`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_moreau_coruja_descricao`,
        nome_arquivo_historia: `raca_moreau_coruja_historia`,
        imagem: 'assets/img/raca_moreau_coruja.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.AMEACAS,
        paginas: '304',
        descricao: ``,
        historia: ``,
      },
      {
        id: 44,
        id_raca_superior: 0,
        nome: `Moreau Hiena`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_moreau_hiena_descricao`,
        nome_arquivo_historia: `raca_moreau_hiena_historia`,
        imagem: 'assets/img/raca_moreau_hiena.png',
        deslocamentos: [''],
        sentidos: [Sentido.OLFATO_AGUCADO],
        referencias: Referencia.AMEACAS,
        paginas: '304',
        descricao: ``,
        historia: ``,
      },
      {
        id: 45,
        id_raca_superior: 0,
        nome: `Moreau Raposa`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_moreau_raposa_descricao`,
        nome_arquivo_historia: `raca_moreau_raposa_historia`,
        imagem: 'assets/img/raca_moreau_raposa.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_PENUMBRA, Sentido.OLFATO_AGUCADO],
        referencias: Referencia.AMEACAS,
        paginas: '304',
        descricao: ``,
        historia: ``,
      },
      {
        id: 46,
        id_raca_superior: 0,
        nome: `Moreaus Serpente`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_moreau_serpente_descricao`,
        nome_arquivo_historia: `raca_moreau_serpente_historia`,
        imagem: 'assets/img/raca_moreau_serpente.png',
        deslocamentos: [Deslocamento.ESCALADA],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.AMEACAS,
        paginas: '304',
        descricao: ``,
        historia: ``,
      },
      {
        id: 47,
        id_raca_superior: 0,
        nome: `Moreau Búfalo`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_moreau_bufalo_descricao`,
        nome_arquivo_historia: `raca_moreau_bufalo_historia`,
        imagem: 'assets/img/raca_moreau_bufalo.png',
        deslocamentos: [''],
        sentidos: [Sentido.OLFATO_AGUCADO],
        referencias: Referencia.AMEACAS,
        paginas: '304',
        descricao: ``,
        historia: ``,
      },
      {
        id: 48,
        id_raca_superior: 0,
        nome: `Moreau Coelho`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_moreau_coelho_descricao`,
        nome_arquivo_historia: `raca_moreau_coelho_historia`,
        imagem: 'assets/img/raca_moreau_coelho.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_PENUMBRA],
        referencias: Referencia.AMEACAS,
        paginas: '304',
        descricao: ``,
        historia: ``,
      },
      {
        id: 49,
        id_raca_superior: 0,
        nome: `Moreau Crocodilo`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_moreau_crocodilo_descricao`,
        nome_arquivo_historia: `raca_moreau_crocodilo_historia`,
        imagem: 'assets/img/raca_moreau_crocodilo.png',
        deslocamentos: [Deslocamento.NATACAO],
        sentidos: [''],
        referencias: Referencia.AMEACAS,
        paginas: '304',
        descricao: ``,
        historia: ``,
      },
      {
        id: 50,
        id_raca_superior: 0,
        nome: `Moreaus Gato`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_moreau_gato_descricao`,
        nome_arquivo_historia: `raca_moreau_gato_historia`,
        imagem: 'assets/img/raca_moreau_gato.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_PENUMBRA],
        referencias: Referencia.AMEACAS,
        paginas: '305',
        descricao: ``,
        historia: ``,
      },
      {
        id: 51,
        id_raca_superior: 0,
        nome: `Moreau Leão`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_moreau_leao_descricao`,
        nome_arquivo_historia: `raca_moreau_leao_historia`,
        imagem: 'assets/img/raca_moreau_leao.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_PENUMBRA],
        referencias: Referencia.AMEACAS,
        paginas: '305',
        descricao: ``,
        historia: ``,
      },
      {
        id: 52,
        id_raca_superior: 0,
        nome: `Moreau Lobo`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_moreau_lobo_descricao`,
        nome_arquivo_historia: `raca_moreau_lobo_historia`,
        imagem: 'assets/img/raca_moreau_lobo.png',
        deslocamentos: [''],
        sentidos: [Sentido.OLFATO_AGUCADO],
        referencias: Referencia.AMEACAS,
        paginas: '305',
        descricao: ``,
        historia: ``,
      },
      {
        id: 53,
        id_raca_superior: 0,
        nome: `Moreau Morcego`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_moreau_morcego_descricao`,
        nome_arquivo_historia: `raca_moreau_morcego_historia`,
        imagem: 'assets/img/raca_moreau_morcego.png',
        deslocamentos: [Deslocamento.VOO],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.AMEACAS,
        paginas: '305',
        descricao: ``,
        historia: ``,
      },
      {
        id: 54,
        id_raca_superior: 0,
        nome: `Moreau Urso`,
        tipo: Humanoide,
        tamanho: Tamanho.GRANDE,
        nome_arquivo_descricao: `raca_moreau_urso_descricao`,
        nome_arquivo_historia: `raca_moreau_urso_historia`,
        imagem: 'assets/img/raca_moreau_urso.png',
        deslocamentos: [''],
        sentidos: [Sentido.OLFATO_AGUCADO],
        referencias: Referencia.AMEACAS,
        paginas: '305',
        descricao: ``,
        historia: ``,
      },
      {
        id: 55,
        id_raca_superior: 0,
        nome: `Moreau Humano`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_moreau_humano_descricao`,
        nome_arquivo_historia: `raca_moreau_humano_historia`,
        imagem: 'assets/img/raca_moreau_humano.png',
        deslocamentos: [''],
        sentidos: [''],
        referencias: Referencia.AMEACAS,
        paginas: '305',
        descricao: ``,
        historia: ``,
      },
      {
        id: 56,
        id_raca_superior: 0,
        nome: `Elfo do Mar`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_elfo_mar_descricao`,
        nome_arquivo_historia: `raca_elfo_mar_historia`,
        imagem: 'assets/img/raca_elfo_mar.png',
        deslocamentos: [Deslocamento.NATACAO],
        sentidos: [''],
        referencias: Referencia.AMEACAS,
        paginas: '316',
        descricao: ``,
        historia: ``,
      },
      {
        id: 57,
        id_raca_superior: 0,
        nome: `Nagah Fêmea`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_nagah_femea_descricao`,
        nome_arquivo_historia: `raca_nagah_femea_historia`,
        imagem: 'assets/img/raca_nagah_femea.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_PENUMBRA],
        referencias: Referencia.AMEACAS,
        paginas: '333',
        descricao: ``,
        historia: ``,
      },
      {
        id: 58,
        id_raca_superior: 0,
        nome: `Nagah Macho`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_nagah_macho_descricao`,
        nome_arquivo_historia: `raca_nagah_macho_historia`,
        imagem: 'assets/img/raca_nagah_macho.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_PENUMBRA],
        referencias: Referencia.AMEACAS,
        paginas: '333',
        descricao: ``,
        historia: ``,
      },
      {
        id: 59,
        id_raca_superior: 0,
        nome: `Finntroll`,
        tipo: Monstro,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_finntroll_descricao`,
        nome_arquivo_historia: `raca_finntroll_historia`,
        imagem: 'assets/img/raca_finntroll.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.AMEACAS,
        paginas: '339',
        descricao: ``,
        historia: ``,
      },
      {
        id: 60,
        id_raca_superior: 0,
        nome: `Soterrado`,
        tipo: Morto_Vivo,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_soterrado_descricao`,
        nome_arquivo_historia: `raca_soterrado_historia`,
        imagem: 'assets/img/raca_soterrado.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.AMEACAS,
        paginas: '354',
        descricao: ``,
        historia: ``,
      },
      {
        id: 61,
        id_raca_superior: 0,
        nome: `Duende`,
        tipo: '',
        tamanho: '',
        nome_arquivo_descricao: `raca_duende_descricao`,
        nome_arquivo_historia: `raca_duende_historia`,
        imagem: 'assets/img/raca_duende.png',
        deslocamentos: [''],
        sentidos: [''],
        referencias: Referencia.HEROIS,
        paginas: '',
        descricao: ``,
        historia: ``,
      },
      {
        id: 62,
        id_raca_superior: 0,
        nome: `Eiradaan`,
        tipo: Espirito,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_eiradaan_descricao`,
        nome_arquivo_historia: `raca_eiradaan_historia`,
        imagem: 'assets/img/raca_eiradaan.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_PENUMBRA],
        referencias: Referencia.HEROIS,
        paginas: '',
        descricao: ``,
        historia: ``,
      },
      {
        id: 63,
        id_raca_superior: 0,
        nome: `Galokk`,
        tipo: Humanoide,
        tamanho: Tamanho.GRANDE,
        nome_arquivo_descricao: `raca_galokk_descricao`,
        nome_arquivo_historia: `raca_galokk_historia`,
        imagem: 'assets/img/raca_galokk.png',
        deslocamentos: [''],
        sentidos: [''],
        referencias: Referencia.HEROIS,
        paginas: '',
        descricao: ``,
        historia: ``,
      },
      {
        id: 64,
        id_raca_superior: 0,
        nome: `Meio-Elfo`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_meio_elfo_descricao`,
        nome_arquivo_historia: `raca_meio_elfo_historia`,
        imagem: 'assets/img/raca_meio_elfo.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_PENUMBRA],
        referencias: Referencia.HEROIS,
        paginas: '',
        descricao: ``,
        historia: ``,
      },
      {
        id: 65,
        id_raca_superior: 0,
        nome: `Sátiro`,
        tipo: Espirito,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_satiro_descricao`,
        nome_arquivo_historia: `raca_satiro_historia`,
        imagem: 'assets/img/raca_satiro.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_PENUMBRA],
        referencias: Referencia.HEROIS,
        paginas: '',
        descricao: ``,
        historia: ``,
      },
      {
        id: 66,
        id_raca_superior: 0,
        nome: `Anão Adepto da Pólvora`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_anao_adepto_polvora_descricao`,
        nome_arquivo_historia: `raca_anao_adepto_polvora_historia`,
        imagem: 'assets/img/raca_anao_adepto_polvora.png',
        deslocamentos: [''],
        sentidos: [Sentido.VISAO_ESCURO],
        referencias: Referencia.DB,
        paginas: 'DB 173 pag. 48',
        descricao: ``,
        historia: ``,
      },
      {
        id: 67,
        id_raca_superior: 0,
        nome: `Dahllan Artesâ Natural`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_dahllan_artesa_natural_descricao`,
        nome_arquivo_historia: `raca_dahllan_artesa_natural_historia`,
        imagem: 'assets/img/raca_dahllan_artesa_natural.png',
        deslocamentos: [''],
        sentidos: [''],
        referencias: Referencia.DB,
        paginas: 'DB 173 pag. 48',
        descricao: ``,
        historia: ``,
      },
      {
        id: 69,
        id_raca_superior: 0,
        nome: `Qareen Amigo da Magia`,
        tipo: Humanoide,
        tamanho: Tamanho.MEDIO,
        nome_arquivo_descricao: `raca_qareen_amigo_magia_descricao`,
        nome_arquivo_historia: `raca_qareen_amigo_magia_historia`,
        imagem: 'assets/img/raca_qareen_amigo_magia.png',
        deslocamentos: [''],
        sentidos: [''],
        referencias: Referencia.DB,
        paginas: 'DB 173 pag. 48',
        descricao: ``,
        historia: ``,
      },
    ];
  }
}
