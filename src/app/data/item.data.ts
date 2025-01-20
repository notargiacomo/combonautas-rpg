import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { TipoDano } from '../enum/tipo.dano.enum';
import { Alcance } from '../enum/alcance.enum';
import { Referencia } from '../enum/referencia.enum';
import { Tamanho } from '../enum/tamanho.enum';

@Injectable({
  providedIn: 'root',
})
export class ItemData {
  private itens: Item[] = [];

  getItens(): any[] {
    return this.itens;
  }

  constructor() {
    this.itens = [
      {
        id: 1,
        nome: 'Adaga',
        descricao: `Esta faca afiada é usada por muitos habitantes adultos do Reinado, embora seja favorita de ladrões e assassinos, por ser facilmente escondida (fornece +5 em testes de Ladinagem para ocultá-la). Quando ataca com uma adaga, você pode usar sua Destreza em vez de Força nos testes de ataque. Uma adaga pode ser arremessada.`,
        preco: 2,
        defesa: 0,
        rd: 10,
        pv: 2,
        cd_fabricacao: 15,
        cd_identificar_item: 0,
        preco_fabricacao: 0.6,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 0.2,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d4',
        tipo_dano: [TipoDano.PERFURACAO],
        multiplicador_critico: 2,
        margem_ameaca: 2,
        alcance: Alcance.CURTO,
        penalidade: 0,
        tracos:['ARMA SIMPLES', 'CORPO A CORPO', 'UMA MÃO', 'LEVE', 'DISCRETA', 'ARREMESSO', 'ATACA COM DESTREZA'],
        referencias: Referencia.BASICO,
        paginas: '144 E 146'
      },
      {
        id: 2,
        nome: 'Alabarda',
        descricao: `Uma haste de madeira com 2m de comprimento e uma lâmina de machado na ponta. A alabarda é uma arma alongada.`,
        preco: 10,
        defesa: 0,
        rd: 5,
        pv: 10,
        cd_fabricacao: 20,
        cd_identificar_item: 0,
        preco_fabricacao: 3.3,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 1,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 2,
        dano: '1d10',
        tipo_dano: [TipoDano.CORTE, TipoDano.PERFURACAO],
        multiplicador_critico: 3,
        margem_ameaca: 1,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA MARCIAL', 'CORPO A CORPO', 'DUAS MÃOS', 'ALONGADA'],
        referencias: Referencia.BASICO,
        paginas: '145 E 146'
      },
      {
        id: 3,
        nome: 'Alfange',
        descricao: `Uma versão maior da cimitarra, esta espada de lâmina larga e curva é bastante usada por guerreiros do Deserto da Perdição.`,
        preco: 75,
        defesa: 0,
        rd: 10,
        pv: 10,
        cd_fabricacao: 20,
        cd_identificar_item: 0,
        preco_fabricacao: 25,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 7.5,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 2,
        dano: '2d4',
        tipo_dano: [TipoDano.CORTE],
        multiplicador_critico: 2,
        margem_ameaca: 3,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA MARCIAL', 'CORPO A CORPO', 'DUAS MÃOS'],
        referencias: Referencia.BASICO,
        paginas: '145 E 146'
      },
      {
        id: 4,
        nome: 'Arco Curto',
        descricao: `Uma arma antiga e comum, este arco é usado primariamente como ferramenta de caça, embora seja usado como arma de guerra por milícias, bandidos e exércitos menos equipados. Pode ser usado montado.`,
        preco: 30,
        defesa: 0,
        rd: 5,
        pv: 10,
        cd_fabricacao: 15,
        cd_identificar_item: 0,
        preco_fabricacao: 10,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 3 ,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 2,
        dano: '1d6',
        tipo_dano: [TipoDano.PERFURACAO],
        multiplicador_critico: 3,
        margem_ameaca: 1,
        alcance: Alcance.MEDIO,
        penalidade: 0,
        tracos:['ARMA MARCIAL', 'ATAQUE A DISTÂNCIA', 'DUAS MÃOS', 'MUNIÇÃO FLECHA', 'MONTADO'],
        referencias: Referencia.BASICO,
        paginas: '144 E 146'
      },
      {
        id: 5,
        nome: 'Arco Longo',
        descricao: `Este arco reforçado tem a altura de uma pessoa. Ao contrário da versão curta, é primariamente uma arma de guerra. Por ter uma puxada pesada, permite que você aplique sua Força às rolagens de dano (ao contrário de outras armas de disparo). Porém, um arco longo não pode ser usado se você estiver montado.`,
        preco: 100,
        defesa: 0,
        rd: 5,
        pv: 10,
        cd_fabricacao: 15,
        cd_identificar_item: 0,
        preco_fabricacao: 33,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 10 ,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 2,
        dano: '1d8',
        tipo_dano: [TipoDano.PERFURACAO],
        multiplicador_critico: 3,
        margem_ameaca: 1,
        alcance: Alcance.MEDIO,
        penalidade: 0,
        tracos:['ARMA MARCIAL', 'ATAQUE A DISTÂNCIA', 'DUAS MÃOS', 'MUNIÇÃO FLECHA', 'APLICA FORÇA NO DANO'],
        referencias: Referencia.BASICO,
        paginas: '145 E 146'
      },
      {
        id: 6,
        nome: 'Azagaia',
        descricao: `Uma lança leve e flexível, própria para arremesso. Pode ser usada como arma corpo a corpo, mas você sofre uma penalidade de –5 no teste de ataque.`,
        preco: 1,
        defesa: 0,
        rd: 5,
        pv: 5,
        cd_fabricacao: 15,
        cd_identificar_item: 0,
        preco_fabricacao: 0.3,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 0.1 ,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d6',
        tipo_dano: [TipoDano.PERFURACAO],
        multiplicador_critico: 2,
        margem_ameaca: 1,
        alcance: Alcance.MEDIO,
        penalidade: 0,
        tracos:['ARMA SIMPLES', 'ATAQUE A DISTÂNCIA', 'UMA MÃO', 'ATAQUE CORPO A CORPO -5'],
        referencias: Referencia.BASICO,
        paginas: '144 E 146'
      },
      {
        id: 7,
        nome: 'Besta Leve',
        descricao: `Um arco montado sobre uma coronha de madeira com um gatilho, a besta leve é uma arma que dispara virotes com grande potência. Recarregar uma besta leve é uma ação de movimento.`,
        preco: 35,
        defesa: 0,
        rd: 5,
        pv: 5,
        cd_fabricacao: 15,
        cd_identificar_item: 0,
        preco_fabricacao: 11.6,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 3.5 ,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d8',
        tipo_dano: [TipoDano.PERFURACAO],
        multiplicador_critico: 2,
        margem_ameaca: 2,
        alcance: Alcance.MEDIO,
        penalidade: 0,
        tracos:['ARMA SIMPLES', 'ATAQUE A DISTÂNCIA', 'UMA MÃO', 'MUNIÇÃO VIROTE', 'RECARREGA AÇÃO MOVIMENTO'],
        referencias: Referencia.BASICO,
        paginas: '144 E 146'
      },
      {
        id: 8,
        nome: 'Besta Pesada',
        descricao: `Versão maior e mais potente da besta leve. Recarregar uma besta pesada é uma ação padrão.`,
        preco: 50,
        defesa: 0,
        rd: 5,
        pv: 10,
        cd_fabricacao: 20,
        cd_identificar_item: 0,
        preco_fabricacao: 16.6,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 5,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 2,
        dano: '1d12',
        tipo_dano: [TipoDano.PERFURACAO],
        multiplicador_critico: 2,
        margem_ameaca: 2,
        alcance: Alcance.MEDIO,
        penalidade: 0,
        tracos:['ARMA MARCIAL', 'ATAQUE A DISTÂNCIA', 'DUAS MÃOS', 'MUNIÇÃO VIROTE', 'RECARREGA AÇÃO PADRÃO'],
        referencias: Referencia.BASICO,
        paginas: '145 E 146'
      },
      {
        id: 9,
        nome: 'Bordão',
        descricao: `Um cajado apreciado por viajantes e camponeses por sua praticidade e fácil acesso (seu preço é zero). O bordão é uma arma dupla.`,
        preco: 0,
        defesa: 0,
        rd: 5,
        pv: 10,
        cd_fabricacao: 15,
        cd_identificar_item: 0,
        preco_fabricacao: 0,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 0,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 2,
        dano: '1d6',
        tipo_dano: [TipoDano.IMPACTO],
        multiplicador_critico: 2,
        margem_ameaca: 1,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA SIMPLES', 'CORPO A CORPO', 'DUAS MÃOS', 'DUPLA 1d6'],
        referencias: Referencia.BASICO,
        paginas: '144 E 147'
      },
      {
        id: 10,
        nome: 'Chicote',
        descricao: `Esta arma pode ser usada para atacar inimigos a até 4,5m e pode se enroscar nas mãos, pernas ou armas de seus adversários. O chicote é uma arma ágil e versátil, fornecendo +2 em testes para derrubar ou desarmar.`,
        preco: 2,
        defesa: 0,
        rd: 5,
        pv: 5,
        cd_fabricacao: 20,
        cd_identificar_item: 0,
        preco_fabricacao: 0,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 0,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d6',
        tipo_dano: [TipoDano.CORTE],
        multiplicador_critico: 3,
        margem_ameaca: 1,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA EXÓTICA', 'CORPO A CORPO', 'UMA MÃO', 'ÁGIL', 'VERSÁTIL', 'DERRUBAR', 'DESARMAR', 'ALCANCE 4,5m'],
        referencias: Referencia.BASICO,
        paginas: '145 E 147'
      },
      {
        id: 11,
        nome: 'Cimitarra',
        descricao: `Espada com a lâmina curva e muito afiada. A cimitarra é uma arma ágil.`,
        preco: 15,
        defesa: 0,
        rd: 10,
        pv: 5,
        cd_fabricacao: 20,
        cd_identificar_item: 0,
        preco_fabricacao: 0,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 0,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d6',
        tipo_dano: [TipoDano.CORTE],
        multiplicador_critico: 2,
        margem_ameaca: 3,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA MARCIAL', 'CORPO A CORPO', 'UMA MÃO', 'ÁGIL'],
        referencias: Referencia.BASICO,
        paginas: '144 E 147'
      },
      {
        id: 12,
        nome: 'Clava',
        descricao: `Um pedaço de madeira empunhado como arma, geralmente usado por bárbaros ou criaturas brutais — ou como arma improvisada, como um galho de árvore ou pedaço de mobília. Sendo fácil de conseguir, seu preço é zero.`,
        preco: 0,
        defesa: 0,
        rd: 5,
        pv: 5,
        cd_fabricacao: 15,
        cd_identificar_item: 0,
        preco_fabricacao: 0,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 0,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d6',
        tipo_dano: [TipoDano.CORTE],
        multiplicador_critico: 2,
        margem_ameaca: 1,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA SIMPLES', 'CORPO A CORPO', 'UMA MÃO'],
        referencias: Referencia.BASICO,
        paginas: '144 E 147'
      },
      {
        id: 14,
        nome: 'Espada Bastarda',
        descricao: `Maior e mais pesada que a espada longa, esta arma é tradicionalmente usada pelos cavaleiros de Bielefeld. A espada bastarda é uma arma adaptável. É muito grande para ser usada com uma só mão sem treinamento especial; por isso é uma arma exótica. Ela pode ser usada como uma arma marcial de duas mãos.`,
        preco: 35,
        defesa: 0,
        rd: 10,
        pv: 10,
        cd_fabricacao: 20,
        cd_identificar_item: 0,
        preco_fabricacao: 11.6,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 3.5,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d10',
        tipo_dano: [TipoDano.CORTE],
        multiplicador_critico: 2,
        margem_ameaca: 2,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA EXÓTICA', 'CORPO A CORPO', 'UMA MÃO', 'ÁGIL', 'ARMA MARCIAL DUAS MÃOS 1d12'],
        referencias: Referencia.BASICO,
        paginas: '145 E 148'
      },
      {
        id: 15,
        nome: 'Espada Curta',
        descricao: `O tipo mais comum de espada, usada por guardas ou como arma secundária de guerreiros mais capazes. Mede entre 40 e 50cm.`,
        preco: 10,
        defesa: 0,
        rd: 10,
        pv: 2,
        cd_fabricacao: 15,
        cd_identificar_item: 0,
        preco_fabricacao: 3.3,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 1,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d6',
        tipo_dano: [TipoDano.CORTE],
        multiplicador_critico: 2,
        margem_ameaca: 2,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA SIMPLES', 'CORPO A CORPO', 'LEVE', 'UMA MÃO'],
        referencias: Referencia.BASICO,
        paginas: '144 E 148'
      },
      {
        id: 16,
        nome: 'Espada Longa',
        descricao: `Arma típica de soldados e guerreiros, esta espada de dois gumes tem lâmina reta medindo entre 80cm e 1m.`,
        preco: 15,
        defesa: 0,
        rd: 10,
        pv: 5,
        cd_fabricacao: 20,
        cd_identificar_item: 0,
        preco_fabricacao: 5,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 1.5,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d8',
        tipo_dano: [TipoDano.CORTE],
        multiplicador_critico: 2,
        margem_ameaca: 2,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA MARCIAL', 'CORPO A CORPO', 'UMA MÃO'],
        referencias: Referencia.BASICO,
        paginas: '144 E 148'
      },
      {
        id: 17,
        nome: 'Florete',
        descricao: `A lâmina leve e fina desta espada torna a arma muito precisa. O florete é uma arma ágil.`,
        preco: 20,
        defesa: 0,
        rd: 10,
        pv: 5,
        cd_fabricacao: 20,
        cd_identificar_item: 0,
        preco_fabricacao: 6.3,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 2,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d6',
        tipo_dano: [TipoDano.PERFURACAO],
        multiplicador_critico: 2,
        margem_ameaca: 3,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA MARCIAL', 'CORPO A CORPO', 'UMA MÃO', 'ÁGIL'],
        referencias: Referencia.BASICO,
        paginas: '144 E 148'
      },
      {
        id: 18,
        nome: 'Foice',
        descricao: `Originalmente um instrumento agrícola, consiste de uma lâmina curva presa a um cabo de madeira. Uma arma tradicional de druidas.`,
        preco: 4,
        defesa: 0,
        rd: 10,
        pv: 2,
        cd_fabricacao: 15,
        cd_identificar_item: 0,
        preco_fabricacao: 3.3,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 1,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d6',
        tipo_dano: [TipoDano.CORTE],
        multiplicador_critico: 3,
        margem_ameaca: 2,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA SIMPLES', 'CORPO A CORPO', 'UMA MÃO', 'LEVE'],
        referencias: Referencia.BASICO,
        paginas: '144 E 148'
      },
      {
        id: 19,
        nome: 'Funda',
        descricao: `Uma simples tira de couro usada para arremessar pedras polidas. Na falta de munição adequada, pode disparar pedras comuns, mas o dano é reduzido em um passo. Recarregar uma funda é uma ação de movimento. Ao contrário de outras armas de disparo, você aplica sua Força a rolagens de dano com uma funda.`,
        preco: 0,
        defesa: 0,
        rd: 5,
        pv: 2,
        cd_fabricacao: 15,
        cd_identificar_item: 0,
        preco_fabricacao: 0,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 0,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d4',
        tipo_dano: [TipoDano.PERFURACAO],
        multiplicador_critico: 2,
        margem_ameaca: 1,
        alcance: Alcance.MEDIO,
        penalidade: 0,
        tracos:['ARMA SIMPLES', 'CORPO A CORPO', 'UMA MÃO', 'ATAQUE A DISTÂNCIA', 'MUNIÇÃO PEDRA POLIDA', 'MUNIÇÃO PEDRA COMUM 1d3', 'APLICA FORÇA NO DANO'],
        referencias: Referencia.BASICO,
        paginas: '144 E 148'
      },
      {
        id: 20,
        nome: 'Gadanho',
        descricao: `Outra ferramenta agrícola, o gadanho é uma versão maior da foice, para uso com as duas mãos. Foi criada para ceifar cereais, mas também pode ceifar vidas.`,
        preco: 18,
        defesa: 0,
        rd: 5,
        pv: 10,
        cd_fabricacao: 20,
        cd_identificar_item: 0,
        preco_fabricacao: 6,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 1.8,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '2d4',
        tipo_dano: [TipoDano.CORTE],
        multiplicador_critico: 4,
        margem_ameaca: 1,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA MARCIAL', 'CORPO A CORPO', 'DUAS MÃOS'],
        referencias: Referencia.BASICO,
        paginas: '145 E 148'
      },
      {
        id: 21,
        nome: 'Katana',
        descricao: `A espada tradicional do samurai tem lâmina levemente curva e apenas um gume. A katana é uma arma adaptável e ágil. É muito grande para ser empunhada com uma só mão sem treinamento especial; por isso, é uma arma exótica. Ela pode ser usada como uma arma marcial de duas mãos.`,
        preco: 100,
        defesa: 0,
        rd: 10,
        pv: 10,
        cd_fabricacao: 20,
        cd_identificar_item: 0,
        preco_fabricacao: 33.3,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 10,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d8',
        tipo_dano: [TipoDano.CORTE],
        multiplicador_critico: 2,
        margem_ameaca: 2,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA EXÓTICA', 'CORPO A CORPO', 'UMA MÃO', 'ADAPTÁVEL 1d10', 'ÁGIL'],
        referencias: Referencia.BASICO,
        paginas: '145 E 148'
      },
      {
        id: 22,
        nome: 'Lança',
        descricao: `Qualquer arma feita com uma haste de madeira e uma ponta afiada, natural ou metálica. Por sua facilidade de fabricação, é muito comum entre orcs, kobolds, trogloditas e outras raças menos civilizadas. Uma lança pode ser arremessada.`,
        preco: 2,
        defesa: 0,
        rd: 5,
        pv: 5,
        cd_fabricacao: 15,
        cd_identificar_item: 0,
        preco_fabricacao: 0.6,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 0.2,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d6',
        tipo_dano: [TipoDano.PERFURACAO],
        multiplicador_critico: 2,
        margem_ameaca: 1,
        alcance: Alcance.CURTO,
        penalidade: 0,
        tracos:['ARMA SIMPLES', 'CORPO A CORPO', 'UMA MÃO', 'ARREMESSO'],
        referencias: Referencia.BASICO,
        paginas: '145 E 148'
      },
      {
        id: 23,
        nome: 'Lança Montada',
        descricao: `A lança montada é uma arma alongada. Se você estiver montado, pode usá-la com apenas uma mão. Além disso, quando usada numa investida montada, causa +2d8 pontos de dano (note que dados extras não são multiplicados em caso de acerto crítico).`,
        preco: 10,
        defesa: 0,
        rd: 5,
        pv: 10,
        cd_fabricacao: 20,
        cd_identificar_item: 0,
        preco_fabricacao: 3.3,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 1,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 2,
        dano: '1d8',
        tipo_dano: [TipoDano.PERFURACAO],
        multiplicador_critico: 3,
        margem_ameaca: 1,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA MARCIAL', 'CORPO A CORPO', 'DUAS MÃOS', 'ARREMESSO', 'MONTADO UMA MÃO', 'INVESTIDA MONTADA +2d8 DANO'],
        referencias: Referencia.BASICO,
        paginas: '145 E 148'
      },
      {
        id: 24,
        nome: 'Maça',
        descricao: `Bastão com um peso cheio de protuberâncias na ponta, a maça é usada por clérigos que fazem votos de não derramar sangue. De fato, um golpe de maça nem sempre derrama sangue, mas esmaga ossos.`,
        preco: 12,
        defesa: 0,
        rd: 10,
        pv: 5,
        cd_fabricacao: 15,
        cd_identificar_item: 0,
        preco_fabricacao: 4,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 1.2,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d8',
        tipo_dano: [TipoDano.IMPACTO],
        multiplicador_critico: 2,
        margem_ameaca: 1,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA MARCIAL', 'CORPO A CORPO', 'UMA MÃO'],
        referencias: Referencia.BASICO,
        paginas: '144 E 149'
      },
      {
        id: 25,
        nome: 'Machadinha',
        descricao: `Ferramenta útil para cortar madeira e também inimigos. Uma machadinha pode ser arremessada.`,
        preco: 6,
        defesa: 0,
        rd: 5,
        pv: 2,
        cd_fabricacao: 15,
        cd_identificar_item: 0,
        preco_fabricacao: 2,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 0.6,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d8',
        tipo_dano: [TipoDano.CORTE],
        multiplicador_critico: 3,
        margem_ameaca: 1,
        alcance: Alcance.CURTO,
        penalidade: 0,
        tracos:['ARMA MARCIAL', 'CORPO A CORPO', 'UMA MÃO', 'LEVE', 'ARREMESSO'],
        referencias: Referencia.BASICO,
        paginas: '144 E 149'
      },
      {
        id: 26,
        nome: 'Machado Anão',
        descricao: `A arma preferida de onze entre dez guerreiros anões. Um machado anão é muito grande para ser usado com uma só mão sem treinamento especial; por isso é uma arma exótica. Ele pode ser usado como uma arma marcial de duas mãos.`,
        preco: 30,
        defesa: 0,
        rd: 10,
        pv: 10,
        cd_fabricacao: 20,
        cd_identificar_item: 0,
        preco_fabricacao: 10,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 3,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d10',
        tipo_dano: [TipoDano.CORTE],
        multiplicador_critico: 3,
        margem_ameaca: 1,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA EXÓTICA', 'CORPO A CORPO', 'UMA MÃO', 'ARMA MARCIAL DUAS MÃOS 1d10'],
        referencias: Referencia.BASICO,
        paginas: '145 E 149'
      },
      {
        id: 27,
        nome: 'Machado Anão',
        descricao: `A arma preferida de onze entre dez guerreiros anões. Um machado anão é muito grande para ser usado com uma só mão sem treinamento especial; por isso é uma arma exótica. Ele pode ser usado como uma arma marcial de duas mãos.`,
        preco: 30,
        defesa: 0,
        rd: 10,
        pv: 10,
        cd_fabricacao: 20,
        cd_identificar_item: 0,
        preco_fabricacao: 10,
        tempo_fabricacao_em_horas: 40,
        preco_conserto: 3,
        tempo_conserto_em_horas: 1,
        pericia_fabricacao_conserto: 'Ofício (armeiro)',
        valor_teste_resistencia: 0,
        tamanho: Tamanho.MEDIO,
        espaco: 1,
        dano: '1d10',
        tipo_dano: [TipoDano.CORTE],
        multiplicador_critico: 3,
        margem_ameaca: 1,
        alcance: 0,
        penalidade: 0,
        tracos:['ARMA EXÓTICA', 'CORPO A CORPO', 'UMA MÃO', 'ARMA MARCIAL DUAS MÃOS 1d10'],
        referencias: Referencia.BASICO,
        paginas: '145 E 149'
      },
    ];
  }
}
