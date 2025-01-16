import { Injectable } from '@angular/core';

import { Poder } from '../model/poder';
import { TipoPoder } from '../enum/tipopoder.enum';
import { Atributo } from '../enum/atributo.enum';
import { Referencia } from '../enum/referencia.enum';

@Injectable({
  providedIn: 'root',
})
export class PoderData {
  private poderes: Poder[] = [];

  getPoderes(): any[] {
    return this.poderes;
  }

  constructor() {
    this.poderes = [
      {
        id: 1,
        nome: 'Acuidade com Arma',
        descricao: 'Quando usa uma arma corpo a corpo leve ou uma arma de arremesso, você pode usar sua Destreza em vez de Força nos testes de ataque e rolagens de dano.',
        prerequisito: 'Pré-requisito: Des 1.',
        prerequisito_atributo_nome: Atributo.DESTREZA,
        prerequisito_atributo_valor: 1,
        referencias:Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 2,
        nome: 'Estilo de Duas Armas',
        descricao: 'Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Se possuir Ambidestria, em vez disso não sofre penalidade para usá-lo.',
        prerequisito: 'Pré-requisitos: Des 2, treinado em Luta.',
        prerequisito_atributo_nome: Atributo.DESTREZA,
        prerequisito_atributo_valor: 2,
        prerequisito_pericia: 'Luta',
        referencias:Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 3,
        ids_poder_pai: [2],
        nome: 'Arma Secundária Grande',
        descricao: 'Você pode empunhar duas armas de uma mão com o poder Estilo de Duas Armas.',
        prerequisito: 'Pré-requisito: Estilo de Duas Armas.',
        referencias:Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 4,
        nome: 'Estilo de Arremesso',
        descricao: 'Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas. Se também possuir o poder Saque Rápido, também recebe +2 nos testes de ataque com essas armas.',
        prerequisito: 'Pré-requisito: treinado em Pontaria.',
        prerequisito_pericia: 'Pontaria',
        referencias:Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 5,
        ids_poder_pai: [4],
        nome: 'Arremesso Potente',
        descricao: 'Quando usa uma arma de arremesso, você pode usar sua Força em vez de Destreza nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo com armas de arremesso.',
        prerequisito: 'Pré-requisitos: For 1, Estilo de Arremesso.',
        prerequisito_atributo_nome: Atributo.FORCA,
        prerequisito_atributo_valor: 1,
        referencias:Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 6,
        ids_poder_pai: [4],
        nome: 'Arremesso Múltiplo',
        descricao: 'Uma vez por rodada, quando faz um ataque com uma arma de arremesso, você pode gastar 1 PM para fazer um ataque adicional contra o mesmo alvo, arremessando outra arma de arremesso.',
        prerequisito: 'Pré-requisitos: Des 1, Estilo de Arremesso.',
        prerequisito_atributo_nome: Atributo.DESTREZA,
        prerequisito_atributo_valor: 1,
        referencias:Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 7,
        nome: 'Proficiência com Escudos',
        descricao: 'Você recebe essa proficiência com escudos.',
        referencias:Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 8,
        ids_poder_pai: [7],
        nome: 'Estilo de Arma e Escudo',
        descricao: 'Se você estiver usando um escudo, o bônus na Defesa que ele fornece aumenta em +2. Pré-requisitos: treinado em Luta, proficiência com escudos.',
        prerequisito: 'Pré-requisitos: treinado em Luta, proficiência com escudos.',
        prerequisito_pericia: 'Luta',
        referencias:Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 9,
        ids_poder_pai: [8],
        nome: 'Ataque com Escudo',
        descricao: 'Uma vez por rodada, se estiver empunhando um escudo e fizer a ação agredir, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com o escudo. Este ataque não faz você perder o bônus do escudo na Defesa.',
        prerequisito: 'Pré-requisito: Estilo de Arma e Escudo.',
        referencias:Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 10,
        nome: 'Estilo de Duas Mãos',
        descricao: 'Se estiver usando uma arma corpo a corpo com as duas mãos, você recebe +5 nas rolagens de dano. Este poder não pode ser usado com armas leves.',
        prerequisito: 'Pré-requisitos: For 2, Treinado em Luta.',
        prerequisito_atributo_nome: Atributo.FORCA,
        prerequisito_atributo_valor: 2,
        prerequisito_pericia: 'Luta',
        referencias:Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 11,
        ids_poder_pai: [10],
        nome: 'Ataque Pesado',
        descricao: 'Quando faz um ataque corpo a corpo com uma arma de duas mãos, você pode pagar 1 PM. Se fizer isso e acertar o ataque, além do dano você faz uma manobra derrubar ou empurrar contra o alvo como uma ação livre (use o resultado do ataque como o teste de manobra).',
        prerequisito: 'Pré-requisito: Estilo de Duas Mãos.',
        referencias:Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 12,
        nome: 'Ataque Poderoso',
        descricao: 'Sempre que faz um ataque corpo a corpo, você pode sofrer –2 no teste de ataque para receber +5 na rolagem de dano.',
        prerequisito: 'Pré-requisito: For 1.',
        prerequisito_atributo_nome: Atributo.FORCA,
        prerequisito_atributo_valor: 1,
        referencias:Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 13,
        nome: 'Estilo de Uma Arma',
        descricao: 'Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma (exceto ataques desarmados).',
        prerequisito: 'Pré-requisito: treinado em Luta.',
        prerequisito_pericia: 'Luta',
        referencias:Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 14,
        ids_poder_pai: [13],
        nome: 'Ataque Preciso',
        descricao: 'Se estiver empunhando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico.',
        prerequisito: 'Pré-requisito: Estilo de Uma Arma.',
        referencias:Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 15,
        ids_poder_pai: [8],
        nome: 'Bloqueio com Escudo',
        descricao: 'Quando sofre dano, você pode gastar 1 PM para receber redução de dano igual ao bônus na Defesa que seu escudo fornece contra este dano. Você só pode usar este poder se estiver usando um escudo.',
        prerequisito: 'Pré-requisito: Estilo de Arma e Escudo.',
        referencias:Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 16,
        nome: 'Ginete',
        descricao: 'Você passa automaticamente em testes de Cavalgar para não cair da montaria quando sofre dano. Além disso, não sofre penalidades para atacar à distância ou lançar magias quando montado.',
        prerequisito: 'Pré-requisito: treinado em Cavalgar.',
        prerequisito_pericia: 'Cavalgar',
        referencias:Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 17,
        ids_poder_pai: [16],
        nome: 'Carga de Cavalaria',
        descricao: 'Quando faz uma investida montada, você causa +2d8 pontos de dano. Além disso, pode continuar se movendo depois do ataque. Você deve se mover em linha reta e seu movimento máximo ainda é o dobro do seu deslocamento.',
        prerequisito: 'Pré-requisito: Ginete.',
        referencias:Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 18,
        nome: 'Combate Defensivo',
        descricao: 'Quando usa a ação agredir, você pode usar este poder. Se fizer isso, até seu próximo turno, sofre –2 em todos os testes de ataque, mas recebe +5 na Defesa. Pré-requisito: Int 1.',
        prerequisito_atributo_nome: Atributo.INTELIGENCIA,
        prerequisito_atributo_valor: 1,
        referencias:Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 19,
        ids_poder_pai: [18],
        nome: 'Derrubar Aprimorado',
        descricao: 'Você recebe +2 em testes de ataque para derrubar. Quando derruba uma criatura com essa manobra, pode gastar 1 PM para fazer um ataque extra contra ela.',
        prerequisito: 'Pré-requisito: Combate Defensivo.',
        referencias:Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 20,
        ids_poder_pai: [18],
        nome: 'Desarmar Aprimorado',
        descricao: 'Você recebe +2 em testes de ataque para desarmar. Quando desarma uma criatura, pode gastar 1 PM para arremessar a arma dela para longe. Para definir onde a arma cai, role 1d8 para a direção (sendo “1” diretamente à sua frente, “2” à frente e à direita e assim por diante) e 1d6 para a distância (medida em quadrados de 1,5m a partir da criatura desarmada). Pré-requisito: Combate Defensivo.',
        prerequisito: 'Pré-requisito: Combate Defensivo.',
        referencias:Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 21,
        nome: 'Estilo de Disparo',
        descricao: 'Se estiver usando uma arma de disparo, você soma sua Destreza nas rolagens de dano.',
        prerequisito: 'Pré-requisito: treinado em Pontaria.',
        prerequisito_pericia: 'Pontaria',
        referencias:Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 22,
        ids_poder_pai: [4, 21],
        nome: 'Disparo Preciso',
        descricao: 'Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade de –5 no teste de ataque.',
        prerequisito: 'Pré-requisito: Estilo de Disparo ou Estilo de Arremesso.',
        referencias:Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 23,
        ids_poder_pai: [21],
        nome: 'Disparo Rápido',
        descricao: 'Se estiver empunhando uma arma de disparo que possa recarregar como ação livre e gastar uma ação completa para agredir, pode fazer um ataque adicional com ela. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.',
        prerequisito: 'Pré-requisitos: Des 1, Estilo de Disparo.',
        prerequisito_atributo_nome: Atributo.DESTREZA,
        prerequisito_atributo_valor: 1,
        referencias:Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 24,
        nome: 'Empunhadura Poderosa',
        descricao: 'Ao usar uma arma feita para uma categoria de tamanho maior que a sua, a penalidade que você sofre nos testes de ataque diminui para –2 (normalmente, usar uma arma de uma categoria de tamanho maior impõe –5 nos testes de ataque).',
        prerequisito: 'Pré-requisito: For 3.',
        prerequisito_atributo_nome: Atributo.FORCA,
        prerequisito_atributo_valor: 3,
        referencias:Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 25,
        nome: 'Proficiência com Armaduras Pesadas',
        descricao: 'Você recebe essa proficiência com Armaduras Pesadas.',
        referencias:Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 26,
        ids_poder_pai: [25],
        nome: 'Encouraçado',
        descricao: 'Se estiver usando uma armadura pesada, você recebe +2 na Defesa. Esse bônus aumenta em +2 para cada outro poder que você possua que tenha Encouraçado como pré-requisito.',
        prerequisito: 'Pré-requisito: proficiência com armaduras pesadas.',
        referencias:Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 27,
        nome: 'Esquiva',
        descricao: 'Você recebe +2 na Defesa e Reflexos.',
        prerequisito: 'Pré-requisito: Des 1.',
        prerequisito_atributo_nome: Atributo.DESTREZA,
        prerequisito_atributo_valor: 1,
        referencias:Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 28,
        nome: 'Estilo de Arma Longa',
        descricao: 'Você recebe +2 em testes de ataque com armas alongadas e pode atacar alvos adjacentes com essas armas.',
        prerequisito: 'Pré-requisitos: For 1, treinado em Luta.',
        prerequisito_atributo_nome: Atributo.FORCA,
        prerequisito_atributo_valor: 1,
        prerequisito_pericia: 'Luta',
        referencias:Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 29,
        nome: 'Estilo Desarmado',
        descricao: 'Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades).',
        prerequisito: 'Pré-requisito: treinado em Luta.',
        prerequisito_pericia: 'Luta',
        referencias:Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 30,
        ids_poder_pai: [26],
        nome: 'Inexpugnável',
        descricao: 'Se estiver usando uma armadura pesada, você recebe +2 em todos os testes de resistência.',
        prerequisito: 'Pré-requisitos: Encouraçado, 6º nível de personagem.',
        prerequisito_nivel: 6,
        referencias:Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 31,
        ids_poder_pai: [26],
        nome: 'Fanático',
        descricao: 'Seu deslocamento não é reduzido por usar armaduras pesadas. ',
        prerequisito: 'Pré-requisitos: 12º nível de personagem, Encouraçado.',
        prerequisito_nivel: 12,
        referencias:Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 32,
        nome: 'Finta Aprimorada',
        descricao: 'Você recebe +2 em testes de Enganação para fintar e pode fintar como uma ação de movimento.',
        prerequisito: 'Pré-requisitos: treinado em Enganação.',
        prerequisito_pericia: 'Enganação',
        referencias:Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 33,
        nome: 'Proficiência com a Arma',
        descricao: 'Você recebe essa proficiência com a Arma',
        referencias:Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 34,
        ids_poder_pai: [34],
        nome: 'Foco em Arma',
        descricao: 'Escolha uma arma. Você recebe +2 em testes de ataque com essa arma. Você pode escolher este poder outras vezes para armas diferentes.',
        prerequisito: 'Pré-requisito: proficiência com a arma.',
        referencias:Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 35,
        ids_poder_pai: [22],
        nome: 'Mira Apurada',
        descricao: 'Quando usa a ação mirar, você recebe +2 em testes de ataque e na margem de ameaça com ataques à distância até o fim do turno.',
        prerequisito: 'Pré-requisitos: Sab 1, Disparo Preciso.',
        prerequisito_atributo_nome: Atributo.SABEDORIA,
        prerequisito_atributo_valor: 1,
        referencias:Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 36,
        ids_poder_pai: [29],
        nome: 'Piqueiro',
        descricao: 'Uma vez por rodada, se estiver empunhando uma arma alongada e um inimigo entrar voluntariamente em seu alcance corpo a corpo, você pode gastar 1 PM para fazer um ataque corpo a corpo contra este oponente com esta arma. Se o oponente tiver se aproximado fazendo uma investida, seu ataque causa dois dados de dano extra do mesmo tipo.',
        prerequisito: 'Pré-requisito: Estilo de Arma Longa.',
        referencias:Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 37,
        nome: 'Presença Aterradora',
        descricao: 'Você pode gastar uma ação padrão e 1 PM para assustar todas as criaturas a sua escolha em alcance curto. Veja a perícia Intimidação para as regras de assustar.',
        prerequisito: 'Pré-requisito: treinado em Intimidação.',
        prerequisito_pericia: 'Intimidação',
        referencias:Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 38,
        ids_poder_pai: [12],
        nome: 'Quebrar Aprimorado',
        descricao: 'Você recebe +2 em testes de ataque para quebrar. Quando reduz os PV de uma arma para 0 ou menos, você pode gastar 1 PM para realizar um ataque extra contra o usuário dela. O ataque adicional usa os mesmos valores de ataque e dano, mas os dados devem ser rolados novamente.',
        prerequisito: 'Pré-requisito: Ataque Poderoso.',
        referencias:Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 39,
        nome: 'Reflexos de Combate',
        descricao: 'Você ganha uma ação de movimento extra no seu primeiro turno de cada combate.',
        prerequisito: 'Pré-requisito: Des 1.',
        prerequisito_atributo_nome: Atributo.DESTREZA,
        prerequisito_atributo_valor: 1,
        referencias:Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 40,
        nome: 'Saque Rápido',
        descricao: 'Você recebe +2 em Iniciativa e pode sacar ou guardar itens como uma ação livre (em vez de ação de movimento). Além disso, a ação que você gasta para recarregar armas de disparo diminui em uma categoria (ação completa para padrão, padrão para movimento, movimento para livre).',
        prerequisito: 'Pré-requisito: treinado em Iniciativa.',
        prerequisito_pericia: 'Iniciativa',
        referencias:Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 41,
        ids_poder_pai: [12],
        nome: 'Trespassar',
        descricao: 'Quando você faz um ataque corpo a corpo e reduz os pontos de vida do alvo para 0 ou menos, pode gastar 1 PM para fazer um ataque adicional contra outra criatura dentro do seu alcance.',
        prerequisito: 'Pré-requisito: Ataque Poderoso.',
        referencias:Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 42,
        nome: 'Vitalidade',
        descricao: 'Você recebe +1 PV por nível de personagem e +2 em Fortitude. Pré-requisito: Con 1.',
        prerequisito_atributo_nome: Atributo.CONSTITUICAO,
        prerequisito_atributo_valor: 1,
        referencias:Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE
      },
    ];
  }
}
