import { Injectable } from '@angular/core';

import { Atributo } from '../enum/atributo.enum';
import { OpcoesSelecao } from '../enum/opcoes.selecao';
import { Referencia } from '../enum/referencia.enum';
import { TipoPoder } from '../enum/tipo.poder.enum';
import { Poder } from '../model/poder';

@Injectable({
  providedIn: 'root',
})
export class PoderData {
  private poderes: Poder[] = [];

  get(): any[] {
    return this.poderes;
  }

  constructor() {
    this.poderes = [
      {
        id: 1,
        nome: 'Acuidade com Arma',
        descricao:
          'Quando usa uma arma corpo a corpo leve ou uma arma de arremesso, você pode usar sua Destreza em vez de Força nos testes de ataque e rolagens de dano.',
        prerequisito: 'Pré-requisito: Des 1.',
        prerequisito_atributo_nome: Atributo.DESTREZA,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 2,
        nome: 'Estilo de Duas Armas',
        descricao:
          'Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Se possuir Ambidestria, em vez disso não sofre penalidade para usá-lo.',
        prerequisito: 'Pré-requisitos: Des 2, treinado em Luta.',
        prerequisito_atributo_nome: Atributo.DESTREZA,
        prerequisito_atributo_valor: 2,
        prerequisito_pericia: ['Luta'],
        referencias: Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 3,
        ids_poder_pai: [2],
        nome: 'Arma Secundária Grande',
        descricao:
          'Você pode empunhar duas armas de uma mão com o poder Estilo de Duas Armas.',
        prerequisito: 'Pré-requisito: Estilo de Duas Armas.',
        referencias: Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 4,
        nome: 'Estilo de Arremesso',
        descricao:
          'Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas. Se também possuir o poder Saque Rápido, também recebe +2 nos testes de ataque com essas armas.',
        prerequisito: 'Pré-requisito: treinado em Pontaria.',
        prerequisito_pericia: ['Pontaria'],
        referencias: Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 5,
        ids_poder_pai: [4],
        nome: 'Arremesso Potente',
        descricao:
          'Quando usa uma arma de arremesso, você pode usar sua Força em vez de Destreza nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo com armas de arremesso.',
        prerequisito: 'Pré-requisitos: For 1, Estilo de Arremesso.',
        prerequisito_atributo_nome: Atributo.FORCA,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 6,
        ids_poder_pai: [4],
        nome: 'Arremesso Múltiplo',
        descricao:
          'Uma vez por rodada, quando faz um ataque com uma arma de arremesso, você pode gastar 1 PM para fazer um ataque adicional contra o mesmo alvo, arremessando outra arma de arremesso.',
        prerequisito: 'Pré-requisitos: Des 1, Estilo de Arremesso.',
        prerequisito_atributo_nome: Atributo.DESTREZA,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 7,
        nome: 'Proficiência com Escudos',
        descricao: 'Você recebe essa proficiência com escudos.',
        referencias: Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 8,
        ids_poder_pai: [7],
        nome: 'Estilo de Arma e Escudo',
        descricao:
          'Se você estiver usando um escudo, o bônus na Defesa que ele fornece aumenta em +2. Pré-requisitos: treinado em Luta, proficiência com escudos.',
        prerequisito:
          'Pré-requisitos: treinado em Luta, proficiência com escudos.',
        prerequisito_pericia: ['Luta'],
        referencias: Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 9,
        ids_poder_pai: [8],
        nome: 'Ataque com Escudo',
        descricao:
          'Uma vez por rodada, se estiver empunhando um escudo e fizer a ação agredir, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com o escudo. Este ataque não faz você perder o bônus do escudo na Defesa.',
        prerequisito: 'Pré-requisito: Estilo de Arma e Escudo.',
        referencias: Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 10,
        nome: 'Estilo de Duas Mãos',
        descricao:
          'Se estiver usando uma arma corpo a corpo com as duas mãos, você recebe +5 nas rolagens de dano. Este poder não pode ser usado com armas leves.',
        prerequisito: 'Pré-requisitos: For 2, Treinado em Luta.',
        prerequisito_atributo_nome: Atributo.FORCA,
        prerequisito_atributo_valor: 2,
        prerequisito_pericia: ['Luta'],
        referencias: Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 11,
        ids_poder_pai: [10],
        nome: 'Ataque Pesado',
        descricao:
          'Quando faz um ataque corpo a corpo com uma arma de duas mãos, você pode pagar 1 PM. Se fizer isso e acertar o ataque, além do dano você faz uma manobra derrubar ou empurrar contra o alvo como uma ação livre (use o resultado do ataque como o teste de manobra).',
        prerequisito: 'Pré-requisito: Estilo de Duas Mãos.',
        referencias: Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 12,
        nome: 'Ataque Poderoso',
        descricao:
          'Sempre que faz um ataque corpo a corpo, você pode sofrer –2 no teste de ataque para receber +5 na rolagem de dano.',
        prerequisito: 'Pré-requisito: For 1.',
        prerequisito_atributo_nome: Atributo.FORCA,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 13,
        nome: 'Estilo de Uma Arma',
        descricao:
          'Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma (exceto ataques desarmados).',
        prerequisito: 'Pré-requisito: treinado em Luta.',
        prerequisito_pericia: ['Luta'],
        referencias: Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 14,
        ids_poder_pai: [13],
        nome: 'Ataque Preciso',
        descricao:
          'Se estiver empunhando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico.',
        prerequisito: 'Pré-requisito: Estilo de Uma Arma.',
        referencias: Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 15,
        ids_poder_pai: [8],
        nome: 'Bloqueio com Escudo',
        descricao:
          'Quando sofre dano, você pode gastar 1 PM para receber redução de dano igual ao bônus na Defesa que seu escudo fornece contra este dano. Você só pode usar este poder se estiver usando um escudo.',
        prerequisito: 'Pré-requisito: Estilo de Arma e Escudo.',
        referencias: Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 16,
        nome: 'Ginete',
        descricao:
          'Você passa automaticamente em testes de Cavalgar para não cair da montaria quando sofre dano. Além disso, não sofre penalidades para atacar à distância ou lançar magias quando montado.',
        prerequisito: 'Pré-requisito: treinado em Cavalgar.',
        prerequisito_pericia: ['Cavalgar'],
        referencias: Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 17,
        ids_poder_pai: [16],
        nome: 'Carga de Cavalaria',
        descricao:
          'Quando faz uma investida montada, você causa +2d8 pontos de dano. Além disso, pode continuar se movendo depois do ataque. Você deve se mover em linha reta e seu movimento máximo ainda é o dobro do seu deslocamento.',
        prerequisito: 'Pré-requisito: Ginete.',
        referencias: Referencia.BASICO,
        paginas: '124',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 18,
        nome: 'Combate Defensivo',
        descricao:
          'Quando usa a ação agredir, você pode usar este poder. Se fizer isso, até seu próximo turno, sofre –2 em todos os testes de ataque, mas recebe +5 na Defesa. Pré-requisito: Int 1.',
        prerequisito_atributo_nome: Atributo.INTELIGENCIA,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 19,
        ids_poder_pai: [18],
        nome: 'Derrubar Aprimorado',
        descricao:
          'Você recebe +2 em testes de ataque para derrubar. Quando derruba uma criatura com essa manobra, pode gastar 1 PM para fazer um ataque extra contra ela.',
        prerequisito: 'Pré-requisito: Combate Defensivo.',
        referencias: Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 20,
        ids_poder_pai: [18],
        nome: 'Desarmar Aprimorado',
        descricao:
          'Você recebe +2 em testes de ataque para desarmar. Quando desarma uma criatura, pode gastar 1 PM para arremessar a arma dela para longe. Para definir onde a arma cai, role 1d8 para a direção (sendo “1” diretamente à sua frente, “2” à frente e à direita e assim por diante) e 1d6 para a distância (medida em quadrados de 1,5m a partir da criatura desarmada). Pré-requisito: Combate Defensivo.',
        prerequisito: 'Pré-requisito: Combate Defensivo.',
        referencias: Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 21,
        nome: 'Estilo de Disparo',
        descricao:
          'Se estiver usando uma arma de disparo, você soma sua Destreza nas rolagens de dano.',
        prerequisito: 'Pré-requisito: treinado em Pontaria.',
        prerequisito_pericia: ['Pontaria'],
        referencias: Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 22,
        ids_poder_pai: [4, 21],
        nome: 'Disparo Preciso',
        descricao:
          'Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade de –5 no teste de ataque.',
        prerequisito:
          'Pré-requisito: Estilo de Disparo ou Estilo de Arremesso.',
        referencias: Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 23,
        ids_poder_pai: [21],
        nome: 'Disparo Rápido',
        descricao:
          'Se estiver empunhando uma arma de disparo que possa recarregar como ação livre e gastar uma ação completa para agredir, pode fazer um ataque adicional com ela. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.',
        prerequisito: 'Pré-requisitos: Des 1, Estilo de Disparo.',
        prerequisito_atributo_nome: Atributo.DESTREZA,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 24,
        nome: 'Empunhadura Poderosa',
        descricao:
          'Ao usar uma arma feita para uma categoria de tamanho maior que a sua, a penalidade que você sofre nos testes de ataque diminui para –2 (normalmente, usar uma arma de uma categoria de tamanho maior impõe –5 nos testes de ataque).',
        prerequisito: 'Pré-requisito: For 3.',
        prerequisito_atributo_nome: Atributo.FORCA,
        prerequisito_atributo_valor: 3,
        referencias: Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 25,
        nome: 'Proficiência com Armaduras Pesadas',
        descricao: 'Você recebe essa proficiência com Armaduras Pesadas.',
        referencias: Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 26,
        ids_poder_pai: [25],
        nome: 'Encouraçado',
        descricao:
          'Se estiver usando uma armadura pesada, você recebe +2 na Defesa. Esse bônus aumenta em +2 para cada outro poder que você possua que tenha Encouraçado como pré-requisito.',
        prerequisito: 'Pré-requisito: proficiência com armaduras pesadas.',
        referencias: Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 27,
        nome: 'Esquiva',
        descricao: 'Você recebe +2 na Defesa e Reflexos.',
        prerequisito: 'Pré-requisito: Des 1.',
        prerequisito_atributo_nome: Atributo.DESTREZA,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 28,
        nome: 'Estilo de Arma Longa',
        descricao:
          'Você recebe +2 em testes de ataque com armas alongadas e pode atacar alvos adjacentes com essas armas.',
        prerequisito: 'Pré-requisitos: For 1, treinado em Luta.',
        prerequisito_atributo_nome: Atributo.FORCA,
        prerequisito_atributo_valor: 1,
        prerequisito_pericia: ['Luta'],
        referencias: Referencia.BASICO,
        paginas: '125',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 29,
        nome: 'Estilo Desarmado',
        descricao:
          'Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades).',
        prerequisito: 'Pré-requisito: treinado em Luta.',
        prerequisito_pericia: ['Luta'],
        referencias: Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 30,
        ids_poder_pai: [26],
        nome: 'Inexpugnável',
        descricao:
          'Se estiver usando uma armadura pesada, você recebe +2 em todos os testes de resistência.',
        prerequisito: 'Pré-requisitos: Encouraçado, 6º nível de personagem.',
        prerequisito_nivel: 6,
        referencias: Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 31,
        ids_poder_pai: [26],
        nome: 'Fanático',
        descricao:
          'Seu deslocamento não é reduzido por usar armaduras pesadas. ',
        prerequisito: 'Pré-requisitos: 12º nível de personagem, Encouraçado.',
        prerequisito_nivel: 12,
        referencias: Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 32,
        nome: 'Finta Aprimorada',
        descricao:
          'Você recebe +2 em testes de Enganação para fintar e pode fintar como uma ação de movimento.',
        prerequisito: 'Pré-requisitos: treinado em Enganação.',
        prerequisito_pericia: ['Enganação'],
        referencias: Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 33,
        nome: 'Proficiência com a Arma',
        descricao: 'Você recebe essa proficiência com a Arma',
        referencias: Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 34,
        ids_poder_pai: [34],
        nome: 'Foco em Arma',
        descricao:
          'Escolha uma arma. Você recebe +2 em testes de ataque com essa arma. Você pode escolher este poder outras vezes para armas diferentes.',
        prerequisito: 'Pré-requisito: proficiência com a arma.',
        referencias: Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 35,
        ids_poder_pai: [22],
        nome: 'Mira Apurada',
        descricao:
          'Quando usa a ação mirar, você recebe +2 em testes de ataque e na margem de ameaça com ataques à distância até o fim do turno.',
        prerequisito: 'Pré-requisitos: Sab 1, Disparo Preciso.',
        prerequisito_atributo_nome: Atributo.SABEDORIA,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 36,
        ids_poder_pai: [29],
        nome: 'Piqueiro',
        descricao:
          'Uma vez por rodada, se estiver empunhando uma arma alongada e um inimigo entrar voluntariamente em seu alcance corpo a corpo, você pode gastar 1 PM para fazer um ataque corpo a corpo contra este oponente com esta arma. Se o oponente tiver se aproximado fazendo uma investida, seu ataque causa dois dados de dano extra do mesmo tipo.',
        prerequisito: 'Pré-requisito: Estilo de Arma Longa.',
        referencias: Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 37,
        nome: 'Presença Aterradora',
        descricao:
          'Você pode gastar uma ação padrão e 1 PM para assustar todas as criaturas a sua escolha em alcance curto. Veja a perícia Intimidação para as regras de assustar.',
        prerequisito: 'Pré-requisito: treinado em Intimidação.',
        prerequisito_pericia: ['Intimidação'],
        referencias: Referencia.BASICO,
        paginas: '128',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 38,
        ids_poder_pai: [12],
        nome: 'Quebrar Aprimorado',
        descricao:
          'Você recebe +2 em testes de ataque para quebrar. Quando reduz os PV de uma arma para 0 ou menos, você pode gastar 1 PM para realizar um ataque extra contra o usuário dela. O ataque adicional usa os mesmos valores de ataque e dano, mas os dados devem ser rolados novamente.',
        prerequisito: 'Pré-requisito: Ataque Poderoso.',
        referencias: Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 39,
        nome: 'Reflexos de Combate',
        descricao:
          'Você ganha uma ação de movimento extra no seu primeiro turno de cada combate.',
        prerequisito: 'Pré-requisito: Des 1.',
        prerequisito_atributo_nome: Atributo.DESTREZA,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 40,
        nome: 'Saque Rápido',
        descricao:
          'Você recebe +2 em Iniciativa e pode sacar ou guardar itens como uma ação livre (em vez de ação de movimento). Além disso, a ação que você gasta para recarregar armas de disparo diminui em uma categoria (ação completa para padrão, padrão para movimento, movimento para livre).',
        prerequisito: 'Pré-requisito: treinado em Iniciativa.',
        prerequisito_pericia: ['Iniciativa'],
        referencias: Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 41,
        ids_poder_pai: [12],
        nome: 'Trespassar',
        descricao:
          'Quando você faz um ataque corpo a corpo e reduz os pontos de vida do alvo para 0 ou menos, pode gastar 1 PM para fazer um ataque adicional contra outra criatura dentro do seu alcance.',
        prerequisito: 'Pré-requisito: Ataque Poderoso.',
        referencias: Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 42,
        nome: 'Vitalidade',
        descricao:
          'Você recebe +1 PV por nível de personagem e +2 em Fortitude.',
        prerequisito: 'Pré-requisito: Con 1.',
        prerequisito_atributo_nome: Atributo.CONSTITUICAO,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.COMBATE,
      },
      {
        id: 43,
        nome: 'Acrobático',
        descricao:
          'Você pode usar sua Destreza em vez de Força em testes de Atletismo. Além disso, terreno difícil não reduz seu deslocamento nem o impede de realizar investidas.',
        prerequisito: 'Pré-requisito: Des 2.',
        prerequisito_atributo_nome: Atributo.DESTREZA,
        prerequisito_atributo_valor: 2,
        referencias: Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 44,
        nome: 'Ao Sabor do Destino',
        descricao: `<p>Confiando em suas próprias habilidades (ou em sua própria sorte), você abre mão de usar itens mágicos. Sua autoconfiança fornece diversos benefícios, de acordo com seu nível de personagem e a tabela da página seguinte.</p>
        <div class="row">
        <div class="col-sm-12 mt-2 mb-4">
        <table border="1">
          <thead>
            <tr>
              <th>Nível</th>
              <th>Benefício</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6º</td>
              <td>+2 em uma perícia</td>
            </tr>
            <tr>
              <td>7º</td>
              <td>+1 na Defesa</td>
            </tr>
            <tr>
              <td>8º</td>
              <td>+1 nas rolagens de dano</td>
            </tr>
            <tr>
              <td>9º</td>
              <td>+1 em um atributo</td>
            </tr>
            <tr>
              <td>11º</td>
              <td>+2 em uma perícia</td>
            </tr>
            <tr>
              <td>12º</td>
              <td>+2 na Defesa</td>
            </tr>
            <tr>
              <td>13º</td>
              <td>+2 nas rolagens de dano</td>
            </tr>
            <tr>
              <td>14º</td>
              <td>+1 em um atributo</td>
            </tr>
            <tr>
              <td>16º</td>
              <td>+2 em uma perícia</td>
            </tr>
            <tr>
              <td>17º</td>
              <td>+3 na Defesa</td>
            </tr>
            <tr>
              <td>18º</td>
              <td>+3 nas rolagens de dano</td>
            </tr>
            <tr>
              <td>19º</td>
              <td>+1 em um atributo</td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
      </div>
        <p>Os bônus não são cumulativos (os bônus em atributos e perícias devem ser aplicados num atributo ou perícia diferente a cada vez). Se você utilizar voluntariamente qualquer item mágico (exceto poções), perde o benefício deste poder até o fim da aventura. Você ainda pode lançar magias, receber magias benéficas ou beneficiar-se de itens usados por outros — por exemplo, pode “ir de carona” em um tapete voador, mas não pode você mesmo conduzi-lo.</p>
      `,
        prerequisito: 'Pré-requisito: 6º nível de personagem.',
        prerequisito_nivel: 6,
        referencias: Referencia.BASICO,
        paginas: '129 e 130',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 45,
        nome: 'Aparência Inofensiva',
        descricao:
          'A primeira criatura inteligente (Int –3 ou maior) que atacar você em uma cena deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Este poder só funciona uma vez por cena; independentemente de a criatura falhar ou não no teste, poderá atacá-lo nas rodadas seguintes.',
        prerequisito: 'Pré-requisito: Car 1.',
        prerequisito_atributo_nome: Atributo.CARISMA,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '130',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 46,
        nome: 'Atlético',
        descricao: 'Você recebe +2 em Atletismo e +3m em seu deslocamento.',
        prerequisito: 'Pré-requisito: For 2.',
        prerequisito_atributo_nome: Atributo.FORCA,
        prerequisito_atributo_valor: 2,
        referencias: Referencia.BASICO,
        paginas: '130',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 47,
        nome: 'Atraente',
        descricao:
          'Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você.',
        prerequisito: 'Pré-requisito: Car 1.',
        prerequisito_atributo_nome: Atributo.CARISMA,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '130',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 48,
        nome: 'Comandar',
        descricao:
          'Você pode gastar uma ação de movimento e 1 PM para gritar ordens para seus aliados em alcance médio. Eles recebem +1 em testes de perícia até o fim da cena.',
        prerequisito: 'Pré-requisito: Car 1.',
        prerequisito_atributo_nome: Atributo.CARISMA,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '130',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 49,
        nome: 'Costas Largas',
        descricao:
          'Seu limite de carga aumenta em 5 espaços e você pode se beneficiar de um item vestido adicional.',
        prerequisito: 'Pré-requisito: Con 1, For 1.',
        prerequisito_atributo_nome: Atributo.FORCA,
        prerequisito_atributo_valor: 1,
        prerequisito_segundo_atributo_nome: Atributo.CONSTITUICAO,
        prerequisito_segundo_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '130',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 50,
        nome: 'Treinamento em Perícia',
        descricao:
          'Você se torna treinado em uma perícia a sua escolha. Você pode escolher este poder outras vezes para perícias diferentes.',
        referencias: Referencia.BASICO,
        paginas: '129',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 51,
        ids_poder_pai: [50],
        nome: 'Foco em Perícia',
        descricao:
          'Escolha uma perícia. Quando faz um teste dessa perícia, você pode gastar 1 PM para rolar dois dados e usar o melhor resultado. Você pode escolher este poder outras vezes para perícias diferentes. Este poder não pode ser aplicado em Luta e Pontaria (mas veja Foco em Arma).',
        prerequisito: 'Pré-requisito: treinado na perícia escolhida.',
        referencias: Referencia.BASICO,
        paginas: '130',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 52,
        nome: 'Inventário Organizado',
        descricao:
          'Você soma sua Inteligência no limite de espaços que pode carregar. Para você, itens muito leves ou pequenos, que normalmente ocupam meio espaço, em vez disso ocupam 1/4 de espaço.',
        prerequisito: 'Pré-requisito: Int 1.',
        prerequisito_atributo_nome: Atributo.INTELIGENCIA,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '130',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 53,
        nome: 'Investigador',
        descricao:
          'Você recebe +2 em Investigação e soma sua Inteligência em Intuição.',
        prerequisito: 'Pré-requisito: Int 1.',
        prerequisito_atributo_nome: Atributo.INTELIGENCIA,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '130',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 54,
        nome: 'Lobo Solitário',
        descricao:
          'Você recebe +1 em testes de perícia e Defesa se estiver sem nenhum aliado em alcance curto. Você não sofre penalidade por usar Cura em si mesmo.',
        referencias: Referencia.BASICO,
        paginas: '130',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 55,
        nome: 'Medicina',
        descricao:
          'Você pode gastar uma ação completa para fazer um teste de Cura (CD 15) em uma criatura. Se você passar, ela recupera 1d6 PV, mais 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD (2d6 com um resultado 20, 3d6 com um resultado 25 e assim por diante). Você só pode usar este poder uma vez por dia numa mesma criatura.',
        prerequisito: 'Pré-requisitos: Sab 1, treinado em Cura.',
        prerequisito_atributo_nome: Atributo.SABEDORIA,
        prerequisito_atributo_valor: 1,
        prerequisito_pericia: ['Cura'],
        referencias: Referencia.BASICO,
        paginas: '130',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 56,
        nome: 'Parceiro',
        descricao:
          'Você possui um parceiro animal ou humanoide que o acompanha em aventuras. Escolha os detalhes dele, como nome, aparência e personalidade. Em termos de jogo, é um parceiro iniciante de um tipo a sua escolha (veja a página 260). O parceiro obedece às suas ordens e se arrisca para ajudá-lo, mas, se for maltratado, pode parar de segui-lo (de acordo com o mestre). Se perder seu parceiro, você recebe outro no início da próxima aventura.',
        prerequisito:
          'Pré-requisitos: treinado em Adestramento (parceiro animal) ou Diplomacia (parceiro humanoide), 5º nível de personagem.',
        prerequisito_nivel: 5,
        prerequisito_pericia: ['Adestramento', 'Diplomacia'],
        referencias: Referencia.BASICO,
        paginas: '130',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 57,
        nome: 'Sentidos Aguçados',
        descricao:
          'Você recebe +2 em Percepção, não fica desprevenido contra inimigos que não possa ver e, sempre que erra um ataque devido a camuflagem, pode rolar mais uma vez o dado da chance de falha.',
        prerequisito: 'Pré-requisitos: Sab 1, treinado em Percepção.',
        prerequisito_atributo_nome: Atributo.SABEDORIA,
        prerequisito_atributo_valor: 1,
        prerequisito_pericia: ['Percepção'],
        referencias: Referencia.BASICO,
        paginas: '130',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 58,
        nome: 'Sortudo',
        descricao:
          'Você pode gastar 3 PM para rolar novamente um teste recém realizado (apenas uma vez por teste).',
        referencias: Referencia.BASICO,
        paginas: '131',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 59,
        nome: 'Surto Heroico',
        descricao:
          'Uma vez por rodada, você pode gastar 5 PM para realizar uma ação padrão ou de movimento adicional.',
        referencias: Referencia.BASICO,
        paginas: '131',
        tipo: TipoPoder.DESTINO,
      },
      // {
      //   id: 60,
      //   nome: 'Surto Heroico',
      //   descricao:
      //     'Uma vez por rodada, você pode gastar 5 PM para realizar uma ação padrão ou de movimento adicional.',
      //   referencias: Referencia.BASICO,
      //   paginas: '131',
      //   tipo: TipoPoder.DESTINO,
      // },
      {
        id: 61,
        nome: 'Torcida',
        descricao:
          'Você recebe +2 em testes de perícia e Defesa quando tem a torcida a seu favor. Entenda-se por “torcida” qualquer número de criaturas inteligentes em alcance médio que não esteja realizando nenhuma ação além de torcer por você.',
        prerequisito: 'Pré-requisito: Car 1.',
        prerequisito_atributo_nome: Atributo.CARISMA,
        prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '131',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 62,
        nome: 'Venefício',
        descricao:
          'Quando usa um veneno, você não corre risco de se envenenar acidentalmente. Além disso, a CD para resistir aos seus venenos aumenta em +2.',
        prerequisito: 'Pré-requisito: treinado em Ofício (alquimista).',
        prerequisito_pericia: ['Ofício (alquimista)'],
        referencias: Referencia.BASICO,
        paginas: '131',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 63,
        nome: 'Vontade de Ferro',
        descricao:
          'Você recebe +1 PM para cada dois níveis de personagem e +2 em Vontade',
          prerequisito: 'Pré-requisito: Sab 1.',
          prerequisito_atributo_nome: Atributo.SABEDORIA,
          prerequisito_atributo_valor: 1,
        referencias: Referencia.BASICO,
        paginas: '131',
        tipo: TipoPoder.DESTINO,
      },
      {
        id: 64,
        nome: 'Celebrar Ritual',
        descricao:
          'Você pode lançar magias como rituais. Isso dobra seu limite de PM, mas muda a execução para 1 hora (ou o dobro, o que for maior) e exige um gasto de T$ 10 por PM gasto (em incensos, oferendas...). Assim, um arcanista de 8º nível pode lançar uma magia de 16 PM gastando T$ 160. Magias lançadas como rituais não podem ser armazenadas em itens.',
          prerequisito: 'Pré-requisitos: treinado em Misticismo ou Religião, 8º nível de personagem.',
        prerequisito_nivel: 8,
        prerequisito_pericia: ['Misticismo','Religião'],
        referencias: Referencia.BASICO,
        paginas: '131',
        tipo: TipoPoder.MAGIA,
      },
      {
        id: 65,
        nome: 'Escrever Pergaminho',
        descricao:
          'Você pode usar a perícia Ofício (escriba) para fabricar pergaminhos com magias que conheça. Veja a página 121 para a regra de fabricar itens e as páginas 333 e 341 para as regras de pergaminhos. De acordo com o mestre, você pode usar objetos similares, como runas, tabuletas de argila etc.',
          prerequisito: 'Pré-requisitos: habilidade de classe Magias, treinado em Ofício (escriba).',
        prerequisito_pericia: ['Ofício (escriba)'],
        prerequisito_habilidade: ['Magia'],
        referencias: Referencia.BASICO,
        paginas: '131',
        tipo: TipoPoder.MAGIA,
      },
      {
        id: 66,
        nome: 'Foco em Magia',
        descricao:
          'Escolha uma magia que possa lançar. Seu custo diminui em –1 PM (cumulativo com outras reduções de custo). Você pode escolher este poder outras vezes para magias diferentes.',
        referencias: Referencia.BASICO,
        paginas: '131',
        tipo: TipoPoder.MAGIA,
      },
      {
        id: 67,
        nome: 'Magia Acelerada',
        descricao:
          'Muda a execução da magia para ação livre. Você só pode aplicar este aprimoramento em magias com execução de movimento, padrão ou completa e só pode lançar uma magia como ação livre por rodada. Custo: +4 PM.',
        prerequisito: 'Pré-requisito: lançar magias de 2º círculo.',
        e_aprimoramento: true,
        prerequisito_habilidade: ['Magia 2º círculo.'],
        referencias: Referencia.BASICO,
        paginas: '131',
        tipo: TipoPoder.MAGIA,
      },
      {
        id: 68,
        nome: 'Magia Ampliada',
        descricao:
          'Aumenta o alcance da magia em um passo (de curto para médio, de médio para longo) ou dobra a área de efeito da magia. Por exemplo, uma Bola de Fogo ampliada tem seu alcance aumentado para longo ou sua área aumentada para 12m de raio. Custo: +2 PM.',
        e_aprimoramento: true,
        referencias: Referencia.BASICO,
        paginas: '131',
        tipo: TipoPoder.MAGIA,
      },
      {
        id: 69,
        nome: 'Magia Discreta',
        descricao:
          'Você lança a magia sem gesticular e falar, usando apenas concentração. Isso permite lançar magias com as mãos presas, amordaçado etc. Também permite lançar magias arcanas usando armadura sem teste de Misticismo. Outros personagens só percebem que você lançou uma magia se passarem num teste de Misticismo (CD 20). Custo: +2 PM.',
        e_aprimoramento: true,
        referencias: Referencia.BASICO,
        paginas: '131',
        tipo: TipoPoder.MAGIA,
      },
      {
        id: 70,
        nome: 'Magia Ilimitada',
        descricao:
          'Você soma seu atributo-chave no limite de PM que pode gastar numa magia. Por exemplo, um arcanista de 5º nível com Int 4 e este poder pode gastar até 9 PM em cada magia.',
        referencias: Referencia.BASICO,
        paginas: '131',
        tipo: TipoPoder.MAGIA,
      },
      {
        id: 71,
        nome: 'Preparar Poção',
        descricao:
          'Você pode usar a perícia Ofício (alquimista) para fabricar poções com magias que conheça de 1º e 2º círculos. Veja a página 121 para a regra de fabricar itens e as páginas 333 e 341 para as regras de poções.',
        prerequisito: 'Pré-requisitos: habilidade de classe Magias, treinado em Ofício (alquimista).',
        referencias: Referencia.BASICO,
        prerequisito_pericia:['Ofício (alquimista)'],
        prerequisito_habilidade: ["Magia"],
        paginas: '131',
        tipo: TipoPoder.MAGIA,
      },
      {
        id: 72,
        nome: 'Afinidade com a Tormenta',
        descricao:
        `Você recebe +10 em testes de resistência contra efeitos da Tormenta, de suas criaturas e de devotos de Aharadak. Além disso, seu primeiro poder da Tormenta não conta para perda de Carisma.`,
        id_deuses: [1],
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 73,
        nome: 'Almejar o Impossível',
        descricao:
          'Quando faz um teste de perícia, um resultado de 19 ou mais no dado sempre é um sucesso, não importando o valor a ser alcançado.',
        id_deuses: [17, 19],
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 74,
        nome: 'Anfíbio',
        descricao:
          'Você pode respirar embaixo d’água e adquire deslocamento de natação igual a seu deslocamento terrestre.',
        id_deuses: [13],
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 75,
        nome: 'Apostar com o Trapaceiro',
        descricao:
          `Quando faz um teste de perícia, você pode gastar 1 PM para apostar com Hyninn. Você e o mestre rolam 1d20, mas o mestre mantém o resultado dele em segredo. Você então escolhe entre usar seu próprio resultado ou o resultado oculto do mestre (neste caso, ele revela o resultado).`,
        id_deuses: [5],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 76,
        nome: 'Armas da Ambição',
        descricao:
          `Você recebe +1 em testes de ataque e na margem de ameaça com armas nas quais é proficiente.`,
        id_deuses: [19],
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 77,
        nome: 'Arsenal das Profundezas',
        descricao:
          `Você recebe +2 nas rolagens de dano com azagaias, lanças e tridentes e seu multiplicador de crítico com essas armas aumenta em +1.`,
        id_deuses: [13],
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 78,
        nome: 'Astúcia da Serpente',
        descricao:
          `Você recebe +2 em Enganação, Furtividade e Intuição.`,
        id_deuses: [14],
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 79,
        nome: 'Ataque Piedoso',
        descricao:
          `Você pode usar armas corpo a corpo para causar dano não letal sem sofrer a penalidade de –5 no teste de ataque.`,
        id_deuses: [8, 18],
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 80,
        nome: 'Aura de Medo',
        descricao:
          `Você pode gastar 2 PM para gerar uma aura de medo de 9m de raio e duração até o fim da cena. Todos os inimigos que entrem na aura devem fazer um teste de Vontade (CD Car) ou ficam abalados até o fim da cena. Uma criatura que passe no teste de Vontade fica imune a esta habilidade por um dia. `,
        id_deuses: [6],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 81,
        nome: 'Aura de Paz',
        descricao:
          `Você pode gastar 2 PM para gerar uma aura de paz com alcance curto e duração de uma cena. Qualquer inimigo dentro da aura que tente fazer uma ação hostil contra você deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Se passar, fica imune a esta habilidade por um dia. `,
        id_deuses: [10],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 82,
        nome: 'Aura Restauradora',
        descricao:
          `Efeitos de cura usados por você e seus aliados em alcance curto recuperam +1 PV por dado.`,
        id_deuses: [8],
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 83,
        nome: 'Bênção do Mana',
        descricao:
          `Você recebe +1 PM a cada nível ímpar.`,
        id_deuses: [20],
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 84,
        nome: 'Carícia Sombria',
        descricao:
          `Você pode gastar 1 PM e uma ação padrão para cobrir sua mão com energia negativa e tocar uma criatura em alcance corpo a corpo. A criatura sofre 2d6 pontos de dano de trevas (Fortitude CD Sab reduz à metade) e você recupera PV iguais à metade do dano causado. Você pode aprender Toque Vampírico como uma magia divina. Se fizer isso, o custo dela diminui em –1 PM. `,
        id_deuses: [16],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 85,
        nome: 'Centelha Mágica',
        descricao:
          `Escolha uma magia arcana ou divina de 1º círculo. Você aprende e pode lançar essa magia.`,
        id_deuses: [20],
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 86,
        nome: 'Compreender os Ermos',
        descricao:
          `Você recebe +2 em Sobrevivência e pode usar Sabedoria para Adestramento (em vez de Carisma).`,
        id_deuses: [2],
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 87,
        nome: 'Conhecimento Enciclopédico',
        descricao:
          `Você se torna treinado em duas perícias baseadas em Inteligência a sua escolha.`,
        id_deuses: [15],
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 88,
        nome: 'Conjurar Arma',
        descricao:
          `Você pode gastar 1 PM para invocar uma arma corpo a corpo ou de arremesso com a qual seja proficiente. A arma surge em sua mão, fornece +1 em testes de ataque e rolagens de dano, é considerada mágica e dura pela cena. Você não pode criar armas de disparo, mas pode criar 20 munições. `,
        id_deuses: [3],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '132',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 89,
        nome: 'Coragem Total',
        descricao:
          `Você é imune a efeitos de medo, mágicos ou não. Este poder não elimina fobias raciais (como o medo de altura dos minotauros).`,
        id_deuses: [3, 7, 9, 19],
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 90,
        nome: 'Cura Gentil',
        descricao:
          `Você soma seu Carisma aos PV restaurados por seus efeitos mágicos de cura.`,
        id_deuses: [8],
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 91,
        nome: 'Curandeira Perfeita',
        descricao:
          `Você sempre pode escolher 10 em testes de Cura. Além disso, não sofre penalidade por usar essa perícia sem uma maleta de medicamentos. Se possuir o item, recebe +2 no teste de Cura (ou +5, se ele for aprimorado).`,
        id_deuses: [8],
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 93,
        nome: 'Dedo Verde',
        descricao:
          `Você aprende e pode lançar Controlar Plantas. Caso aprenda novamente essa magia, seu custo diminui em –1 PM. `,
        id_deuses: [2],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 94,
        nome: 'Descanso Natural',
        descricao:
          `Para você, dormir ao relento conta como condição de descanso confortável.`,
        id_deuses: [2],
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 95,
        nome: 'Dom da Esperança',
        descricao:
          `Você soma sua Sabedoria em seus PV em vez de Constituição, e se torna imune às condições alquebrado, esmorecido e frustrado.`,
        id_deuses: [10],
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 96,
        nome: 'Dom da Imortalidade',
        descricao:
          `Você é imortal. Sempre que morre, não importando o motivo, volta à vida após 3d6 dias. Apenas paladinos podem escolher este poder. Um personagem pode ter Dom da Imortalidade ou Dom da Ressurreição, mas não ambos. `,
        id_deuses: [18],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 97,
        nome: 'Dom da Profecia',
        descricao:
          `Você pode lançar Augúrio. Caso aprenda novamente essa magia, seu custo diminui em –1 PM. Você também pode gastar 2 PM para receber +2 em um teste. `,
        id_deuses: [18],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 98,
        nome: 'Dom da Ressurreição',
        descricao:
          `Você pode gastar uma ação completa e todos os PM que possui (mínimo 1 PM) para tocar o corpo de uma criatura morta há menos de um ano e ressuscitá-la. A criatura volta à vida com 1 PV e 0 PM, e perde 1 ponto de Constituição permanentemente. Este poder só pode ser usado uma vez em cada criatura. Apenas clérigos podem escolher este poder. Um personagem pode ter Dom da Imortalidade ou Dom da Ressurreição, mas não ambos. `,
        id_deuses: [18],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 99,
        nome: 'Dom da Verdade',
        descricao:
          `Você pode pagar 2 PM para receber +5 em testes de Intuição, e em testes de Percepção contra Enganação e Furtividade, até o fim da cena.`,
        id_deuses: [7],
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 100,
        nome: 'Escamas Dracônicas',
        descricao:
          `Você recebe +2 na Defesa e em Fortitude.`,
        id_deuses: [6],
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 101,
        nome: 'Escudo Mágico',
        descricao:
          `Quando lança uma magia, você recebe um bônus na Defesa igual ao círculo da magia lançada até o início do seu próximo turno. `,
        id_deuses: [20],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 102,
        nome: 'Espada Justiceira',
        descricao:
          `Você pode gastar 1 PM para encantar sua espada (ou outra arma corpo a corpo de corte que esteja empunhando). Ela tem seu dano aumentado em um passo até o fim da cena. `,
        id_deuses: [7],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 103,
        nome: 'Espada Solar',
        descricao:
          `Você pode gastar 1 PM para fazer uma arma corpo a corpo de corte que esteja empunhando causar +1d6 de dano por fogo até o fim da cena. `,
        id_deuses: [4],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 104,
        nome: 'Êxtase da Loucura',
        descricao:
          `Toda vez que uma ou mais criaturas falham em um teste de Vontade contra uma de suas habilidades mágicas, você recebe 1 PM temporário cumulativo. Você pode ganhar um máximo de PM temporários por cena desta forma igual a sua Sabedoria.`,
        id_deuses: [1, 12],
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 105,
        nome: 'Familiar Ofídico',
        descricao:
          `Você recebe um familiar cobra (veja a página 38) que não conta em seu limite de parceiros.`,
        id_deuses: [14],
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 106,
        nome: 'Farsa do Fingidor',
        descricao:
          `Você aprende e pode lançar Criar Ilusão. Caso aprenda novamente essa magia, seu custo diminui em –1 PM.`,
        id_deuses: [5],
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 107,
        nome: 'Fé Guerreira',
        descricao:
          `Você pode usar Sabedoria para Guerra (em vez de Inteligência). Além disso, em combate, pode gastar 2 PM para substituir um teste de perícia (exceto testes de ataque) por um teste de Guerra.`,
        id_deuses: [3],
        referencias: Referencia.BASICO,
        paginas: '133',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 110,
        nome: 'Forma de Macaco',
        descricao:
          `Você pode gastar uma ação completa e 2 PM para se transformar em um macaco. Você adquire tamanho Minúsculo (o que fornece +5 em Furtividade e –5 em testes de manobra) e recebe deslocamento de escalar 9m. Seu equipamento desaparece (e você perde seus benefícios) até você voltar ao normal, mas suas outras estatísticas não são alteradas. A transformação dura indefinidamente, mas termina caso você faça um ataque, lance uma magia ou sofra dano. `,
        id_deuses: [5],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 111,
        nome: 'Fulgor Solar',
        descricao:
          `Você recebe redução de frio e trevas 5. Além disso, quando é alvo de um ataque você pode gastar 1 PM para emitir um clarão solar que deixa o atacante ofuscado por uma rodada.`,
        id_deuses: [4],
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 112,
        nome: 'Fúria Divina',
        descricao:
          `Você pode gastar 2 PM para invocar uma fúria selvagem, tornando-se temível em combate. Até o fim da cena, você recebe +2 em testes de ataque e rolagens de dano corpo a corpo, mas não pode executar nenhuma ação que exija paciência ou concentração (como usar a perícia Furtividade ou lançar magias). Se usar este poder em conjunto com a habilidade Fúria, ela também dura uma cena (e não termina se você não atacar ou for alvo de uma ação hostil). `,
        id_deuses: [17],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 113,
        nome: 'Golpista Divino',
        descricao:
          `Você recebe +2 em Enganação, Jogatina e Ladinagem.`,
        id_deuses: [5],
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 114,
        nome: 'Habitante do Deserto',
        descricao:
          `Você recebe redução de fogo 10 e pode pagar 1 PM para criar água pura e potável suficiente para um odre (ou outro recipiente pequeno). `,
        id_deuses: [4],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 115,
        nome: 'Inimigo de Tenebra',
        descricao:
          `Seus ataques e habilidades causam +1d6 pontos de dano contra mortos-vivos. Quando você usa um efeito que gera luz, o alcance da iluminação dobra.`,
        id_deuses: [4],
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 116,
        nome: 'Kiai Divino',
        descricao:
          `Uma vez por rodada, quando faz um ataque corpo a corpo, você pode pagar 3 PM. Se acertar o ataque, causa dano máximo, sem necessidade de rolar dados.`,
        id_deuses: [9],
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 117,
        nome: 'Liberdade Divina',
        descricao:
          `Você pode gastar 2 PM para receber imunidade a efeitos de movimento por uma rodada. `,
        id_deuses: [19],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 118,
        nome: 'Manto da Penumbra',
        descricao:
          `Você aprende e pode lançar Escuridão. Caso aprenda novamente essa magia, seu custo diminui em –1 PM. `,
        id_deuses: [16],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 119,
        nome: 'Mente Analítica',
        descricao:
          `Você recebe +2 em Intuição, Investigação e Vontade.`,
        id_deuses: [15],
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 120,
        nome: 'Mente Vazia',
        descricao:
          `Você recebe +2 em Iniciativa, Percepção e Vontade.`,
        id_deuses: [9],
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 121,
        nome: 'Mestre dos Mares',
        descricao:
          `Você recebe +2 em Intuição, Investigação e Vontade.`,
        id_deuses: [13],
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 122,
        nome: 'Olhar Amedrontador',
        descricao:
          `Você aprende e pode lançar Amedrontar. Caso aprenda novamente essa magia, seu custo diminui em –1 PM. `,
        id_deuses: [11, 17],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 123,
        nome: 'Palavras de Bondade',
        descricao:
          `Você aprende e pode lançar Enfeitiçar. Caso aprenda novamente essa magia, seu custo diminui em –1 PM. `,
        id_deuses: [10],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 124,
        nome: 'Percepção Temporal',
        descricao:
          `Você pode gastar 3 PM para somar sua Sabedoria (limitado por seu nível e não cumulativo com efeitos que somam este atributo) a seus ataques, Defesa e testes de Reflexos até o fim da cena.`,
        id_deuses: [1],
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 125,
        nome: 'Pesquisa Abençoada',
        descricao:
          `Se passar uma hora pesquisando seus livros e anotações, você pode rolar novamente um teste de perícia baseada em Inteligência ou Sabedoria que tenha feito desde a última cena. Se tiver acesso a mais livros, você recebe um bônus no teste: +2 para uma coleção particular ou biblioteca pequena e +5 para a biblioteca de um templo ou universidade.`,
        id_deuses: [15],
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 126,
        nome: 'Poder Oculto',
        descricao:
          `Você pode gastar uma ação de movimento e 2 PM para invocar a força, a rapidez ou o vigor dos loucos. Role 1d6 para receber +2 em Força (1 ou 2), Destreza (3 ou 4) ou Constituição (5 ou 6) até o fim da cena. Você pode usar este poder várias vezes, mas bônus no mesmo atributo não são cumulativos. `,
        id_deuses: [12],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '134',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 127,
        nome: 'Presas Primordiais',
        descricao:
          `Você pode gastar 1 PM para transformar seus dentes em presas afiadas até o fim da cena. Você recebe uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir com outra arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida. Se já possuir outro ataque natural de mordida, em vez disso, o dano desse ataque aumenta em dois passos. `,
        id_deuses: [6, 11],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '135',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 128,
        nome: 'Presas venenosas',
        descricao:
          `Você pode gastar uma ação de movimento e 1 PM para envenenar uma arma corpo a corpo que esteja empunhando. Em caso de acerto, a arma causa perda de 1d12 pontos de vida. A arma permanece envenenada até atingir uma criatura ou até o fim da cena, o que acontecer primeiro.`,
        id_deuses: [14],
        referencias: Referencia.BASICO,
        paginas: '135',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 129,
        nome: 'Rejeição Divina',
        descricao:
          `Você recebe resistência a magia divina +5.`,
        id_deuses: [1],
        referencias: Referencia.BASICO,
        paginas: '135',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 130,
        nome: 'Reparar Injustiça',
        descricao:
          `Uma vez por rodada, quando um oponente em alcance curto acerta um ataque em você ou em um de seus aliados, você pode gastar 2 PM para fazer este oponente repetir o ataque, escolhendo o pior entre os dois resultados.`,
        id_deuses: [7],
        referencias: Referencia.BASICO,
        paginas: '135',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 131,
        nome: 'Sangue de Ferro',
        descricao:
          `Você pode pagar 3 PM para receber +2 em rolagens de dano e redução de dano 5 até o fim da cena. `,
        id_deuses: [3],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '135',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 132,
        nome: 'Sangue Ofídico',
        descricao:
          `Você recebe resistência a veneno +5 e a CD para resistir aos seus venenos aumenta em +2.`,
        id_deuses: [14],
        referencias: Referencia.BASICO,
        paginas: '135',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 133,
        nome: 'Servos do Dragão',
        descricao:
          `Você pode gastar uma ação completa e 2 PM para invocar 2d4+1 kobolds capangas em espaços desocupados em alcance curto. Você pode gastar uma ação de movimento para fazer os kobolds andarem (eles têm deslocamento 9m) ou uma ação padrão para fazê-los causar dano a criaturas adjacentes (1d6–1 pontos de dano de perfuração cada). Os kobolds têm For –1, Des 1, Defesa 12, 1 PV e falham automaticamente em qualquer teste de resistência ou oposto. Eles desaparecem quando morrem ou no fim da cena. Os kobolds não agem sem receber uma ordem. Usos criativos para capangas fora de combate ficam a critério do mestre. `,
        id_deuses: [6],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '135',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 134,
        nome: 'Sopro do Mar',
        descricao:
          `Você pode gastar uma ação padrão e 1 PM para soprar vento marinho em um cone de 6m. Criaturas na área sofrem 2d6 pontos de dano de frio (Reflexos CD Sab reduz à metade). Você pode aprender Sopro das Uivantes como uma magia divina. Se fizer isso, o custo dela diminui em –1 PM. `,
        id_deuses: [13],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '135',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 135,
        nome: 'Sorte dos loucos',
        descricao:
          `Você pode pagar 1 PM para rolar novamente um teste recém realizado. Se ainda assim falhar no teste, você perde 1d6 PM.`,
        id_deuses: [12],
        referencias: Referencia.BASICO,
        paginas: '135',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 136,
        nome: 'Talento Artístico',
        descricao:
          `Você recebe +2 em Acrobacia, Atuação e Diplomacia.`,
        id_deuses: [10],
        referencias: Referencia.BASICO,
        paginas: '135',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 137,
        nome: 'Teurgista Místico',
        descricao:
          `Até uma magia de cada círculo que você aprender poderá ser escolhida entre magias divinas (se você for um conjurador arcano) ou entre magias arcanas (se for um conjurador divino).`,
        prerequisito: 'Pré-requisito: habilidade de classe Magias.',
        prerequisito_habilidade: ['Magia'],
        id_deuses: [20],
        referencias: Referencia.BASICO,
        paginas: '135',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 138,
        nome: 'Tradição de Lin-Wu',
        descricao:
          `Você considera a katana uma arma simples e, se for proficiente em armas marciais, recebe +1 na margem de ameaça com ela.`,
        id_deuses: [9],
        referencias: Referencia.BASICO,
        paginas: '135',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 139,
        nome: 'Transmissão da Loucura',
        descricao:
          `Você pode lançar Sussurros Insanos (CD Car). Caso aprenda novamente essa magia, seu custo diminui em –1 PM. `,
        id_deuses: [12],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '135',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 140,
        nome: 'Tropas Duyshidakk',
        descricao:
          `Você pode gastar uma ação completa e 2 PM para invocar 1d4+1 goblinoides capangas em espaços desocupados em alcance curto. Você pode gastar uma ação de movimento para fazer os goblinoides andarem (eles têm deslocamento 9m) ou uma ação padrão para fazê-los causar dano a criaturas adjacentes (1d6+1 pontos de dano de corte cada). Os goblinoides têm For 1, Des 1, Defesa 15, 1 PV e falham automaticamente em qualquer teste de resistência ou oposto. Eles desaparecem quando morrem ou no fim da cena. Os goblinoides não agem sem receber uma ordem. Usos criativos para capangas fora de combate ficam a critério do mestre. `,
        id_deuses: [17],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '135',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 141,
        nome: 'Urro Divino',
        descricao:
          `Quando faz um ataque ou lança uma magia, você pode pagar 1 PM para somar sua Constituição (mínimo +1) à rolagem de dano desse ataque ou magia.`,
        id_deuses: [11],
        referencias: Referencia.BASICO,
        paginas: '136',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 142,
        nome: 'Visão nas Trevas',
        descricao:
          `Você enxerga perfeitamente no escuro, incluindo em magias de escuridão.`,
        id_deuses: [16],
        referencias: Referencia.BASICO,
        paginas: '136',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 143,
        nome: 'Voz da Civilização',
        descricao:
          `Você está sempre sob efeito de Compreensão. `,
        id_deuses: [15],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '136',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 144,
        nome: 'Voz da Natureza',
        descricao:
          `Você pode falar com animais (como o efeito da magia Voz Divina) e aprende e pode lançar Acalmar Animal, mas só contra animais. Caso aprenda novamente essa magia, seu custo diminui em –1 PM. `,
        id_deuses: [2],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '136',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 145,
        nome: 'Voz dos Monstros',
        descricao:
          `Você conhece os idiomas de todos os monstros inteligentes e pode se comunicar livremente com monstros não inteligentes (Int –4 ou menor), como se estivesse sob efeito da magia Voz Divina. `,
        id_deuses: [11],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '136',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 145,
        nome: 'Zumbificar',
        descricao:
          `Você pode gastar uma ação completa e 3 PM para reanimar o cadáver de uma criatura Pequena ou Média adjacente por um dia. O cadáver funciona como um parceiro iniciante de um tipo a sua escolha entre combatente, fortão ou guardião. Além disso, quando sofre dano, você pode sacrificar esse parceiro; se fizer isso, você sofre apenas metade do dano, mas o cadáver é destruído. `,
        id_deuses: [16],
        e_poder_magico: true,
        referencias: Referencia.BASICO,
        paginas: '136',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 146,
        nome: 'Anatomia Insana',
        descricao:
          `Você tem 25% de chance (resultado “1” em 1d4) de ignorar o dano adicional de um acerto crítico ou ataque furtivo. A chance aumenta em +25% para cada dois outros poderes da Tormenta que você possui.`,
        referencias: Referencia.BASICO,
        paginas: '136',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 147,
        nome: 'Anatomia Insana',
        descricao:
          `Você tem 25% de chance (resultado “1” em 1d4) de ignorar o dano adicional de um acerto crítico ou ataque furtivo. A chance aumenta em +25% para cada dois outros poderes da Tormenta que você possui.`,
        referencias: Referencia.BASICO,
        paginas: '136',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 148,
        nome: 'Antenas',
        descricao:
          `Você recebe +1 em Iniciativa, Percepção e Vontade. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.`,
        referencias: Referencia.BASICO,
        fator_tormenta: 2,
        paginas: '136',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 149,
        nome: 'Antenas',
        descricao:
          `Você recebe +1 em Iniciativa, Percepção e Vontade. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.`,
        referencias: Referencia.BASICO,
        fator_tormenta: 2,
        paginas: '136',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 150,
        nome: 'Armamento Aberrante',
        descricao:
          `Você pode gastar uma ação de movimento e 1 PM para produzir uma versão orgânica de qualquer arma corpo a corpo ou de arremesso com a qual seja proficiente — ela brota do seu braço, ombro ou costas como uma planta grotesca e então se desprende. O dano da arma aumenta em um passo para cada dois outros poderes da Tormenta que você possui. A arma dura pela cena, então se desfaz numa poça de gosma.`,
        prerequisito: 'Pré-requisito: outro poder da Tormenta.',
        prerequisito_habilidade: [TipoPoder.TORMENTA],
        prerequisito_numero_habilidade_tormenta: 1, 
        referencias: Referencia.BASICO,
        paginas: '136',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 151,
        nome: 'Asas Insetoides',
        descricao:
          `Você pode gastar 1 PM para receber deslocamento de voo 9m até o fim do seu turno. O deslocamento aumenta em +1,5m para cada outro poder da Tormenta que você possui.`,
        prerequisito: 'Pré-requisitos: quatro outros poderes da Tormenta.',
        prerequisito_habilidade: [TipoPoder.TORMENTA],
        prerequisito_numero_habilidade_tormenta: 4, 
        referencias: Referencia.BASICO,
        paginas: '136',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 152,
        nome: 'Carapaça',
        descricao:
          `Sua pele é recoberta por placas quitinosas. Você recebe +1 na Defesa. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.`,
        referencias: Referencia.BASICO,
        fator_tormenta: 2,
        paginas: '136',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 153,
        nome: 'Corpo Aberrante',
        descricao:
          `Crostas vermelhas em várias partes de seu corpo tornam seus ataques mais perigosos. Seu dano desarmado aumenta em um passo, mais um passo para cada quatro outros poderes da Tormenta que você possui.`,
        prerequisito: 'Pré-requisito: outro poder da Tormenta.',
        referencias: Referencia.BASICO,
        prerequisito_habilidade: [TipoPoder.TORMENTA],
        prerequisito_numero_habilidade_tormenta: 1, 
        paginas: '136',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 154,
        nome: 'Cuspir Enxame',
        descricao:
          `Você pode gastar uma ação completa e 2 PM para criar um enxame de insetos rubros em um ponto a sua escolha em alcance curto e com duração sustentada. O enxame tem tamanho Médio e pode passar pelo espaço de outras criaturas. Uma vez por rodada, você pode gastar uma ação de movimento para mover o enxame 9m. No final do seu turno, o enxame causa 2d6 pontos de dano de ácido a qualquer criatura no espaço que ele estiver ocupando. Para cada dois outros poderes da Tormenta que possui, você pode gastar +1 PM quando usa este poder para aumentar o dano do enxame em +1d6. `,
        referencias: Referencia.BASICO,
        fator_tormenta: 2,
        e_poder_magico: true,
        paginas: '136',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 155,
        nome: 'Dentes Afiados',
        descricao:
          `Você recebe uma arma natural de mordida (dano 1d4, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.`,
        referencias: Referencia.BASICO,
        paginas: '137',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 156,
        nome: 'Desprezar a Realidade',
        descricao:
          `Você pode gastar 2 PM para ficar no limiar da realidade até o início de seu próximo turno. Nesse estado, você ignora terreno difícil e causa 20% de chance de falha em efeitos usados contra você (não apenas ataques). Para cada dois outros poderes de Tormenta que você possuir, essa chance aumenta em 5% (máximo de 50%).`,
        prerequisito: 'Pré-requisito: quatro outros poderes da Tormenta.',
        prerequisito_habilidade: [TipoPoder.TORMENTA],
        prerequisito_numero_habilidade_tormenta: 4,
        fator_tormenta: 2,
        referencias: Referencia.BASICO,
        paginas: '137',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 157,
        nome: 'Empunhadura Rubra',
        descricao:
          `Você pode gastar 1 PM para cobrir suas mãos com uma carapaça rubra. Até o final da cena, você recebe +1 em Luta. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.`,
        fator_tormenta: 2,
        referencias: Referencia.BASICO,
        paginas: '137',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 158,
        nome: 'Fome de Mana',
        descricao:
          `Quando passa em um teste de resistência para resistir a uma habilidade mágica, você recebe 1 PM temporário cumulativo. Você pode ganhar um máximo de PM temporários por cena desta forma igual ao número de poderes da Tormenta que possui.`,
        fator_tormenta: 1,
        referencias: Referencia.BASICO,
        paginas: '137',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 159,
        nome: 'Larva Explosiva',
        ids_poder_pai: [155],
        descricao:
          `Se uma criatura que tenha sofrido dano de sua mordida nesta cena for reduzida a 0 ou menos PV, ela explode em chuva cáustica, morrendo e causando 4d4 pontos de dano de ácido em criaturas adjacentes. Para cada dois outros poderes da Tormenta que você possui, o dano aumenta em +2d4. Você é imune a esse dano. `,
        prerequisito: 'Pré-requisito: Dentes Afiados.',
        e_poder_magico: true,
        fator_tormenta: 2,
        referencias: Referencia.BASICO,
        paginas: '137',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 160,
        nome: 'Legião Aberrante',
        ids_poder_pai: [146],
        descricao:
          `Seu corpo se transforma em uma massa de insetos rubros. Você pode atravessar qualquer espaço por onde seja possível passar uma moeda (mas considera esses espaços como terreno difícil) e recebe +1 em testes contra manobras de combate e de resistência contra efeitos que tenham você como alvo (mas não efeitos de área). Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui. `,
        prerequisito: 'Pré-requisito: Anatomia Insana, três outros poderes da Tormenta.',
        prerequisito_habilidade: [TipoPoder.TORMENTA],
        prerequisito_numero_habilidade_tormenta: 3,
        fator_tormenta: 2,
        referencias: Referencia.BASICO,
        paginas: '137',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 161,
        nome: 'Mãos Membranosas',
        descricao:
          `Você recebe +1 em Atletismo, Fortitude e testes de agarrar. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.`,
        fator_tormenta: 2,
        referencias: Referencia.BASICO,
        paginas: '137',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 162,
        nome: 'Membros Estendidos',
        descricao:
          `Seus braços e armas naturais são grotescamente mais longos que o normal, o que aumenta seu alcance natural para ataques corpo a corpo em +1,5m. Para cada quatro outros poderes da Tormenta que você possui, esse alcance aumenta em +1,5m.`,
        fator_tormenta: 4,
        referencias: Referencia.BASICO,
        paginas: '137',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 163,
        nome: 'Membros Extras',
        descricao:
          `Você possui duas armas naturais de patas insetoides que saem de suas costas, ombros ou flancos. Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 2 PM para fazer um ataque corpo a corpo extra com cada uma (dano 1d4, crítico x2, corte). Se possuir Ambidestria ou Estilo de Duas Armas, pode empunhar armas leves em suas patas insetoides (mas ainda precisa pagar 2 PM para atacar com elas e sofre a penalidade de –2 em todos os ataques).`,
        prerequisito:'Pré-requisitos: quatro outros poderes da Tormenta.',
        prerequisito_habilidade: [TipoPoder.TORMENTA],
        prerequisito_numero_habilidade_tormenta: 4,
        referencias: Referencia.BASICO,
        paginas: '137',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 164,
        nome: 'Mente Aberrante',
        descricao:
          `Você recebe resistência a efeitos mentais +1. Além disso, sempre que precisa fazer um teste de Vontade para resistir a uma habilidade, a criatura que usou essa habilidade sofre 1d6 pontos de dano psíquico. Para cada dois outros poderes da Tormenta que você possui o bônus em testes de resistência aumenta em +1 e o dano aumenta em +1d6. `,
        e_poder_magico: true,
        fator_tormenta: 2,
        referencias: Referencia.BASICO,
        paginas: '137',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 165,
        nome: 'Olhos Vermelhos',
        descricao:
          `Você recebe visão no escuro e +1 em Intimidação. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.`,
        referencias: Referencia.BASICO,
        fator_tormenta: 2,
        paginas: '137',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 166,
        nome: 'Pele Corrompida',
        descricao:
          `Sua carne foi mesclada à matéria vermelha. Você recebe redução de ácido, eletricidade, fogo, frio, luz e trevas 2. Esta RD aumenta em +2 para cada dois outros poderes da Tormenta que você possui.`,
        referencias: Referencia.BASICO,
        fator_tormenta: 2,
        paginas: '137',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 167,
        nome: 'Sangue Ácido',
        descricao:
          `Quando você sofre dano por um ataque corpo a corpo, o atacante sofre 1 ponto de dano de ácido por poder da Tormenta que você possui.`,
        referencias: Referencia.BASICO,
        fator_tormenta: 1,
        paginas: '137',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 168,
        nome: 'Sangue Ácido',
        descricao:
          `Quando você sofre dano por um ataque corpo a corpo, o atacante sofre 1 ponto de dano de ácido por poder da Tormenta que você possui.`,
        referencias: Referencia.BASICO,
        fator_tormenta: 1,
        paginas: '137',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 169,
        nome: 'Visco Rubro',
        descricao:
          `Você pode gastar 1 PM para expelir um líquido grosso e corrosivo. Até o final da cena, você recebe +1 nas rolagens de dano corpo a corpo. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.`,
        referencias: Referencia.BASICO,
        fator_tormenta: 2,
        paginas: '137',
        tipo: TipoPoder.TORMENTA,
      },
      {
        id: 170,
        nome: 'Abraço da Fênix',
        descricao:
          `Você se torna imune a fogo. Se fosse sofrer dano mágico de fogo, em vez disso cura PV em quantidade igual à metade desse dano (se já faz isso por outro efeito, cura a quantidade completa).`,
        id_deuses:[18],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 171,
        nome: 'Adaga Noturna',
        descricao:
          `Você pode gastar 1 PM para fazer uma arma de perfuração que esteja usando causar +1d6 pontos de dano de frio até o fim da cena. `,
        id_deuses:[16],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 172,
        nome: 'Alimentar-se do Pavor',
        descricao:
          `Quando uma criatura em alcance curto sob efeito de uma condição de medo morre, você recebe pontos de vida temporários iguais ao dobro do seu ND, que duram até o fim da cena.`,
        id_deuses:[6, 11],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 173,
        nome: 'Alma de Mudança',
        descricao:
          `No início de cada aventura, você pode trocar uma quantidade de poderes (limitada por sua Sabedoria) por poderes diferentes cujos pré-requisitos cumpra. Você não pode trocar este poder.`,
        id_deuses:[17],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 174,
        nome: 'Andarilho Carregado',
        descricao:
          `Sua mochila de aventureiro não conta no seu limite de itens vestidos e, se estiver vestindo uma dessas mochilas, você pode usar Sabedoria para estabelecer seu limite de carga (em vez de Força). A critério do mestre, este poder pode ser aplicado a outro item equivalente (como uma mochila de carga).`,
        id_deuses:[19],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 175,
        nome: 'Armadilha Divina',
        descricao:
          `Você recebe um poder de Armadilha do caçador (Tormenta20, p. 50) a sua escolha. Por ser criada a partir de energia divina, essa armadilha pode ser preparada em locais sem os materiais propícios. `,
        id_deuses:[5],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 176,
        nome: 'Armadura de Ossos',
        descricao:
          `Você pode gastar uma ação de movimento e 2 PM para receber +2 na Defesa e em Intimidação, e redução de corte, frio e trevas 5 até o fim da cena. `,
        id_deuses:[16],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 177,
        nome: 'Armas da Destruição',
        descricao:
          `Você recebe +1 nas rolagens de dano e no multiplicador de crítico com armas nas quais é proficiente.`,
        id_deuses:[3],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 178,
        nome: 'Armas da Selvageria',
        descricao:
          `Para você, armas naturais são armas favoritas de Megalokk. Você recebe +2 em rolagens de dano com elas, pode usar Abençoar Arma (Tormenta20, p. 57) nelas e, quando usa esse poder ou a magia Armamento da Natureza, pode aplicar seus benefícios a todas as suas armas naturais (sem custo adicional).`,
        id_deuses:[11],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 179,
        nome: 'Armas da Selvageria',
        descricao:
          `Você considera todas as armas naturais como armas favoritas de Megalokk e recebe +2 em rolagens de dano com elas.`,
        id_deuses:[11],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 180,
        nome: 'Aventureiro Inquieto',
        descricao:
          `Uma vez por busca (Tormenta20, p. 278), você pode rolar novamente um teste recém-realizado (mas deve aceitar o novo resultado) e, quando recebe uma recompensa ou um castigo aleatório por uma busca (incluindo rolagens na Tabela 8-1; Tormenta20, p. 328), rola dois dados e escolhe entre os dois resultados.`,
        id_deuses:[19],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 181,
        nome: 'Baforada Dracônica',
        descricao:
          `Escolha um elemento entre ácido, eletricidade, fogo, frio, luz ou trevas (uma vez feita, essa escolha não pode ser mudada). Uma vez por rodada, você pode gastar PM (limitados por sua Constituição) para desferir um sopro elemental em uma criatura em alcance curto. Para cada PM que você gastar, o alvo sofre 1d10 pontos de dano do tipo escolhido (Reflexos CD Con reduz à metade). Recarga (movimento).`,
        id_deuses:[6],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 182,
        nome: 'Barreira de Coral',
        descricao:
          `Você pode gastar uma ação de movimento e 3 PM para cobrir seu corpo de coral. Até o fim da cena, você recebe +5 na Defesa e, sempre que sofrer um ataque corpo a corpo, o atacante sofre dano de perfuração igual a 1d6 + sua Constituição. Para cada patamar acima de iniciante, esse dano aumenta em +1d6. e`,
        id_deuses:[13],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 183,
        nome: 'Belo Presente',
        descricao:
          `Uma vez por cena, você pode pedir a Wynna o conhecimento de uma magia que tenha visto sendo lançada nessa aventura e que seja de um círculo a que você tenha acesso. Gaste uma ação padrão e faça um teste de Religião (CD 15 + custo em PM da magia). Se passar, você pode lançar essa magia até o fim do seu próximo turno (pagando seus custos normais).`,
        id_deuses:[20],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 184,
        nome: 'Biblioteca Divina',
        descricao:
          `Você recebe uma perícia treinada. A cada patamar de jogo (Tormenta20, p. 35) acima de iniciante, recebe mais uma perícia treinada.`,
        id_deuses:[15],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 185,
        nome: 'Cancioneiro da Esperança',
        descricao:
          `Você pode gastar uma ação padrão e 2 PM para entoar uma canção de superação e paz. Criaturas escolhidas (limitadas por seu Carisma) em alcance curto recebem +2 em testes (exceto testes de ataque) e +3m de deslocamento até o fim da cena. Se uma criatura afetada for executar uma ação hostil, perde esses bônus.`,
        id_deuses:[10],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 186,
        nome: 'Cerimonialista Divino',
        descricao:
          `Uma vez por dia, você pode gastar 1 hora para executar uma cerimônia tradicional que afeta até 1 + seu Carisma criaturas por 1 dia. Faça um teste de Religião com um bônus igual ao seu Carisma. Para cada 10 pontos do resultado, cada criatura afetada recebe um dado de auxílio. Quando faz um teste de atributo ou perícia (exceto Enganação, Furtividade e Ladinagem), a criatura pode gastar um deles para receber +1d6 de bônus no teste. Para criaturas que gastarem T$ 25 em oferendas no ritual, esse bônus muda para +1d8.`,
        id_deuses:[9],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 187,
        nome: 'Chamado Monstruoso',
        descricao:
          `Você aprende e pode lançar Conjurar Monstro e pode lançar e sustentar essa magia sem violar suas Obrigações & Restrições. Caso aprenda novamente essa magia, seu custo diminui em –1 PM.`,
        id_deuses:[11],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 188,
        nome: 'Companheiro Celeste',
        descricao:
          `Você possui um luminar (veja p. 277) que o acompanha como um parceiro iniciante. Se perder esse luminar, você pode receber outro com uma cerimônia que exige 1 dia e T$ 100 em oferendas.`,
        id_deuses:[8, 10],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 189,
        nome: 'Companheiro Silvestre',
        descricao:
          `Você possui um espírito da natureza que o acompanha como um parceiro perseguidor iniciante. Alternativamente, se você tiver o suplemento Ameaças de Arton, pode receber um bogum inciante (p. 190). Se perder esse parceiro, você pode receber outro com uma cerimônia que exige 1 dia e T$ 100 em oferendas.`,
        id_deuses:[2],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 190,
        nome: 'Convicção Ambiciosa',
        descricao:
          `Quando luta em desvantagem (um encontro contra o dobro de inimigos que seu grupo, ou com ND maior que o do grupo), você recebe +2 em testes de perícia até o fim da cena. Além disso, se houver um ou mais inimigos de ND igual ou maior que seu nível, você recebe uma ação padrão extra em seu primeiro turno de combate.`,
        id_deuses:[19],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 191,
        nome: 'Corromper Equipamento',
        descricao:
          `Você pode gastar 2 PM para cobrir uma arma, um escudo ou um esotérico que esteja empunhando com carapaça quitinosa. Até o fim da cena, o item recebe os benefícios de matéria vermelha (Tormenta20, p. 167), cumulativo com outros materiais especiais. Se usar este poder em uma arma produzida com Armamento Aberrante, seu custo é reduzido em –1 PM.`,
        id_deuses:[1],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 192,
        nome: 'Curar o Espírito',
        descricao:
          `Você pode gastar uma ação completa para inspirar esperança em uma criatura que possa tocar. Faça um teste de Carisma (CD 10). Se você passar, a criatura recupera 1d4+1 PM. Você só pode usar este poder uma vez por dia numa mesma criatura.`,
        id_deuses:[8],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 193,
        nome: 'Discurso Conciliador',
        descricao:
          `Quando faz um teste de Diplomacia para mudar atitude, você pode rolar dois dados e usar o melhor resultado ou ambos (como se tivesse usado mudar atitude duas vezes). Se passar em ambos, as mudanças de atitude são cumulativas.`,
        id_deuses:[10],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 194,
        nome: 'Dom da Furtividade',
        descricao:
          `Você soma sua Sabedoria em Furtividade e, para você, lançar magias é um ato pouco chamativo, o que reduz a penalidade para se esconder após conjurar para –10 (mas você ainda precisa de gestos e palavras).`,
        id_deuses:[5],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 195,
        nome: 'Dom da Vontade',
        descricao:
          `Você recebe +2 em Vontade e, uma vez por cena, quando passa em um teste de Vontade contra um efeito de um inimigo ou de um perigo apresentado pelo mestre, recebe 1d4 PM temporários.`,
        id_deuses:[7],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 196,
        nome: 'Dom dos Segredos',
        descricao:
          `Você pode gastar uma ação padrão e 2 PM para suplicar a Sszzaas por um segredo místico. Faça um teste de Carisma (CD 10, +2 para cada vez que usou este poder no mesmo dia). Se passar, você aprende e pode lançar uma magia de 1º círculo até o fim da cena (atributo-chave Car ou o seu atributo de conjuração, se houver).`,
        id_deuses:[14],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 197,
        nome: 'Égide dos Mares',
        descricao:
          `Você possui um espírito das águas que o acompanha como um parceiro guardião iniciante. Alternativamente, se você tiver o suplemento Ameaças de Arton, pode receber um escudeiro inciante (p. 191). Em ambos os casos, se perder esse parceiro, você pode receber outro com uma cerimônia que exige 1 dia e T$ 100 em oferendas.`,
        id_deuses:[13],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 198,
        nome: 'Espírito Animal',
        descricao:
          `Você pode gastar uma ação de movimento e 2 PM para conjurar um espírito animal que o envolve e luta com você. Até o fim da cena, você não pode ser flanqueado e recebe 10 PV temporários e uma arma natural (dano 1d6, crítico x2, tipo a sua escolha entre corte, impacto ou perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com essa arma. Quando usa este poder, você pode gastar PM adicionais (custo total limitado por sua Sabedoria). Para cada PM adicional, os PV temporários aumentam em +5.`,
        id_deuses:[2],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 199,
        nome: 'Espírito do Conhecimento',
        descricao:
          `Você pode gastar uma ação padrão e 2 PM para invocar uma manifestação do saber em um espaço desocupado em alcance curto. Ela é um espírito Minúsculo que tem deslocamento de voo 6m, Força nula, Defesa 15, 1 PV, visão no escuro e falha em qualquer teste oposto. No início de seus turnos, ela pode usar a ação movimentar-se uma vez. Você pode perceber tudo que a manifestação for capaz de perceber e pode lançar magias a partir dela (exceto magias de alcance pessoal com alvo você). A manifestação desaparece quando morre ou no fim da cena. `,
        id_deuses:[15],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 200,
        nome: 'Estouro da Trobada',
        descricao:
          `Você pode gastar uma ação completa e 2 PM para convocar uma manada de trobos (ou outro animal da região) em um ponto desocupado a sua escolha em alcance curto com duração sustentada. A manada é Enorme e pode passar pelo espaço de outras criaturas. Você pode gastar uma ação de movimento para mover a manada 12m em linha reta. Criaturas pelas quais ela passar sofrem 3d6 pontos de dano de impacto e ficam caídas (Fort CD Sab reduz à metade e evita a condição).`,
        id_deuses:[2],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 201,
        nome: 'Exaltar Honra',
        descricao:
          `Você pode gastar 2 PM para gerar uma aura de honradez de 9m de raio que dura até o fim da cena. Dentro dessa área, devotos de Lin-Wu e personagens que sigam algum código de conduta (como Código de Honra ou Código do Herói) recebem +5 em Diplomacia e Nobreza, e todas as criaturas na área sofrem –5 em perícias desonradas (Enganação, Furtividade e Ladinagem). Apenas personagens com a habilidade Abençoado ou Devoto Fiel podem escolher este poder.`,
        id_deuses:[9],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 202,
        nome: 'Familiar Elemental',
        descricao:
          `Você possui um espírito arcano que o acompanha como um familiar com as habilidades de um adepto iniciante. Alternativamente, se você tiver o suplemento Ameaças de Arton, pode receber um familiar elemental inciante, escolhido entre aquin'ne, t'peel, pakk ou terrier (p. 88). Em ambos os casos, se perder esse parceiro, você pode receber outro com uma cerimônia que exige 1 dia e T$ 100 em oferendas.`,
        id_deuses:[20],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 203,
        nome: 'Ferramentas da Guerra',
        descricao:
          `Uma vez por dia, você pode gastar 1 hora e T$ 10 por item para abençoar uma quantidade de itens limitada por sua Sabedoria. Armas abençoadas dessa forma fornecem +2 em rolagens de dano, e armaduras e escudos fornecem RD 2. Se o usuário de um item abençoado for derrotado em combate, o item é destruído. Os efeitos da bênção duram 1 dia. `,
        id_deuses:[3],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 204,
        nome: 'Golpe Semântico',
        descricao:
          `Você pode substituir testes de Diplomacia e Intimidação por Conhecimento.`,
        id_deuses:[15],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 205,
        nome: 'Golpe Tempestuoso',
        descricao:
          `Quando acerta um ataque corpo a corpo, você pode gastar 2 PM. Se fizer isso, a criatura é empurrada 3m em uma direção a sua escolha e fica desprevenida por 1 rodada.`,
        id_deuses:[3, 13],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 206,
        nome: 'Imolação Sagrada',
        descricao:
          `Você pode gastar uma ação padrão e 1 PM para cobrir seus braços com chamas com duração sustentada. Nesse estado, seus ataques corpo a corpo causam +1d6 pontos de dano de fogo. `,
        id_deuses:[4, 18],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 207,
        nome: 'Júbilo na Dor',
        descricao:
          `Quando causa ou sofre dano, você recebe redução de dano 1. Esse efeito é cumulativo e limitado por sua Sabedoria e termina se você passar 1 rodada sem causar ou sofrer dano.`,
        id_deuses:[1],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 208,
        nome: 'Jurista Divino',
        descricao:
          `Você pode usar Sabedoria para Nobreza (em vez de Inteligência) e pode usar essa perícia no lugar de Diplomacia e Intimidação.`,
        id_deuses:[7, 9],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 209,
        nome: 'Magia Caótica',
        descricao:
          `Quando lança uma magia, você pode gastar +2 PM. Se fizer isso, a CD para resistir a essa magia é calculada com 1d20 + seus modificadores, em vez de 10 + seus modificadores.`,
        id_deuses:[12],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 210,
        nome: 'Magia Piedosa',
        descricao:
          `Quando lança uma magia que causa dano, você pode fazer com que ela cause dano não letal.`,
        id_deuses:[8, 18],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 211,
        nome: 'Magia Venenosa',
        descricao:
          `Suas magias com resistência Fortitude recebem o seguinte aprimoramento. +1 PM: além do normal, criaturas que falharem perdem 1d12 PV por veneno, ou 1d6 se passarem na resistência.`,
        id_deuses:[14],
        e_aprimoramento: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 212,
        nome: 'Manto Ardiloso',
        descricao:
          `Você aprende a magia Disfarce Ilusório (CD Car). Na primeira vez que interage com alguém enquanto está sob efeito dessa magia, você recebe +10 no teste de Diplomacia para mudar a atitude dela. Caso aprenda novamente essa magia, seu custo diminui em –1 PM. `,
        id_deuses:[14],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 213,
        nome: 'Mar Revolto',
        descricao:
          `Você pode gastar 1 PM para gerar uma aura de 6m de raio com duração sustentada. No início de seus turnos, criaturas a sua escolha na área devem passar em um teste de Acrobacia (CD Sab, +5 se a criatura estiver dentro da água) para não cair. `,
        id_deuses:[13],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 214,
        nome: 'Mediador da Tempestade',
        descricao:
          `Você pode se comunicar com lefeu inteligentes (Int –3 ou maior) livremente e recebe +5 em testes de Diplomacia e Intuição com criaturas da Tormenta e devotos de Aharadak.`,
        id_deuses:[1],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 215,
        nome: 'Mestre de Si',
        descricao:
          `Você passa automaticamente no primeiro teste de Vontade contra um efeito de um inimigo que fizer a cada cena.`,
        id_deuses:[9],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 216,
        nome: 'A Ferramenta Certa',
        descricao:
          `Você pode gastar 1 PM para fazer uma ferramenta ou um equipamento de aventura de até T$ 400 aparecer na sua mão ou em um espaço adjacente. O item dura até o fim da cena, ou até deixar sua posse.`,
        id_deuses:[5],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 217,
        nome: 'Mordida de Víbora',
        descricao:
          `Você recebe uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Suas presas são retráteis e podem armazenar até 2 doses de veneno de contato. Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida. Se acertar, pode inocular uma das doses de veneno no alvo.`,
        id_deuses:[14],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 218,
        nome: 'Navegador Sagrado',
        descricao:
          `Você pode usar Sabedoria para Pilotagem (em vez de Destreza) e, enquanto estiver em uma embarcação aquática, suas magias divinas custam –2 PM.`,
        id_deuses:[13],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 219,
        nome: 'Nimb',
        descricao:
          `Você é Nimb. Ou um filho ou filha dele. Ou uma casca de banana na qual ele escorregou certa vez. Você pode gastar uma ação padrão e 2 PM para gerar uma habilidade única. Para isso, role 1d6 em cada coluna abaixo.
          <div class="row">
          <div class="col-sm-12 mt-2 mb-4">
          <table border="1" style="border-collapse: collapse; width: 100%; text-align: center;">
            <thead>
              <tr>
                <th>1d6</th>
                <th>Área/Alvo</th>
                <th>Efeito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Criaturas em um cone de 6m.</td>
                <td>Fica verde por 1 dia; sofre −2 em testes baseados em Carisma.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Uma criatura em alcance médio.</td>
                <td>Cura 2d6 PV.</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Criaturas em um raio de 9m.</td>
                <td>No próximo teste que fizer, deve rolar 2 dados e escolher o pior resultado.</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Criaturas em uma esfera com 6m de raio em alcance curto.</td>
                <td>Sofre 2d6 pontos de dano psíquico.</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Criaturas em uma linha de 15m.</td>
                <td>Recebe 1d4 PM temporários que duram 1 rodada.</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Criaturas escolhidas em alcance curto.</td>
                <td>Pode usar Poder Oculto (<i>Tormenta20</i>, p. 134) até o fim da cena.</td>
              </tr>
            </tbody>
          </table>
          </div>
          </div>`,
        id_deuses:[12],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 220,
        nome: 'O Dobro ou Nada',
        descricao:
          `Quando usa uma habilidade com custo em PM, você pode pagar o dobro desse custo (após aplicar efeitos que alterem o custo) para aumentar a CD da habilidade em +5. Se pelo menos um alvo passar no teste de resistência, você fica alquebrado. Este poder não pode ser usado em magias, incluindo simuladas.`,
        id_deuses:[5, 12],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 221,
        nome: 'O Futuro Que Vier Disso',
        descricao:
          `Quando faz um teste, você pode rolar um dado a sua escolha (d4 a d20) e somar o resultado a esse teste. Quando você faz isso, o mestre recebe um dado do mesmo tipo, que pode gastar para aplicar como penalidade em um de seus testes até o fim da próxima sessão. Você não pode usar este poder novamente na mesma sessão até que o mestre use o dado que recebeu.`,
        id_deuses:[17],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 222,
        nome: 'O Sol que nos Aquece',
        descricao:
          `Você pode gastar uma ação padrão e 2 PM para projetar uma aura de luz solar em um raio de 6m. Nessa área, habilidades mágicas de fogo ou luz e relacionadas a plantas (como Controlar Plantas) custam –1 PM (cumulativo com outras reduções) e criaturas com sensibilidade a luz e mortos-vivos ficam vulneráveis. `,
        id_deuses:[2, 4],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 223,
        nome: 'Palavra de Poder',
        descricao:
          `Você aprende e pode lançar Comando. Caso aprenda novamente essa magia, seu custo diminui em –1 PM. `,
        id_deuses:[15],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 224,
        nome: 'Passo Sombrio',
        descricao:
          `Uma vez por rodada, você pode gastar 2 PM para se teleportar para um espaço desocupado em alcance curto. Se tanto você quanto esse espaço estiverem sob escuridão, o custo deste poder diminui em –1 PM. Você não pode usar este poder se estiver imóvel. `,
        id_deuses:[16],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 225,
        nome: 'Perceber Farsas',
        descricao:
          `Você recebe +5 em Intuição e se torna imune a efeitos de ilusão.`,
        id_deuses:[15],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 226,
        nome: 'Pilar de Heredrimm',
        descricao:
          `Você pode gastar 2 PM para receber +2 na Defesa e redução de dano 5 até o fim da cena ou até encerrar este poder (uma ação livre). Enquanto esse efeito estiver ativo, seu deslocamento é reduzido à metade.`,
        id_deuses:[7],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 227,
        nome: 'Poder do Vínculo',
        descricao:
          `Você pode gastar uma ação de movimento e uma quantidade de PM (limitada ao círculo de magias a que tem acesso) para tocar em uma criatura capaz de lançar magias. O custo em PM da próxima magia que ela lançar diminui em um valor igual aos PM que você gastou.`,
        id_deuses:[20],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 228,
        nome: 'Poder Sem Limites',
        descricao:
          `A CD e os limites de PM de suas habilidades (exceto magias e habilidades que as simulem) aumentam em um valor igual ao seu patamar.`,
        id_deuses:[6],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 229,
        nome: 'Espalhar a Corrupção',
        descricao:
          `Quando chega em uma comunidade, você pode gastar um dia e fazer um teste de Religião (CD 20). Se passar, você planta a semente da corrupção no coração das pessoas em uma área equivalente a uma aldeia, um castelo ou um bairro de uma cidade grande. Por uma semana, ou até você partir do lugar, a categoria de atitude dessas pessoas em relação umas às outras piora em um passo, à medida que o senso moral delas se deteriora e seus piores desejos vêm à tona. Isso pode ser útil para gerar conflitos entre elas, embora caiba a você descobrir exatamente como se aproveitar deles.`,
        id_deuses:[1],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 230,
        nome: 'Proeminência Solar',
        descricao:
          `Suas magias que causam dano de fogo e que têm um teste de resistência recebem o seguinte aprimoramento: +1 PM: criaturas que falhem na resistência ficam em chamas e lentas até apagarem as chamas.`,
        id_deuses:[4],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 231,
        nome: 'Quebrar Encanto',
        descricao:
          `Você recebe +2 em testes de ataque para quebrar. Quando usa essa manobra, você pode gastar 2 PM. Se você acertar o ataque, o item e seu portador sofrem o efeito de Dissipar Magia, usando o resultado do teste de quebrar como teste de Misticismo e CD para resistir. `,
        id_deuses:[7],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 232,
        nome: 'Redirecionar Destino',
        descricao:
          `No início de cada dia, role um d20 e anote seu valor. Uma vez por rodada, quando uma criatura em alcance curto faz um teste, você pode gastar 3 PM para substituir o resultado do d20 desse teste pelo último valor anotado para este poder. O resultado do d20 substituído se torna seu novo valor anotado. `,
        id_deuses:[18],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 233,
        nome: 'Remorso do Belicista',
        descricao:
          `Uma vez por rodada, quando sofre dano de um inimigo, você pode gastar 1 PM. Se fizer isso, ele sofre uma penalidade cumulativa de –2 em testes de ataque e rolagens de dano até o fim da cena. Mental.`,
        id_deuses:[10],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 234,
        nome: 'Resplendor Divino',
        descricao:
          `Você pode gastar 2 PM para gerar uma aura de luz solar com 9m de raio que dura até o fim da cena. Além de sofrer os efeitos de exposição à luz, criaturas dentro da aura perdem toda camuflagem por escuridão e efeitos semelhantes (como da cobertura de sombras do aprimoramento da magia Escuridão). `,
        id_deuses:[4],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,  
      },
      {
        id: 235,
        nome: 'Saque Celestial',
        descricao:
          `Você pode gastar 1 PM para sacar ou guardar uma arma como uma ação livre. Se sacar sua arma e fizer um ataque corpo a corpo no mesmo turno, você recebe +2 nesse teste de ataque e seu dano aumenta em dois passos (apenas uma vez contra cada criatura por cena).`,
        id_deuses:[9],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 236,
        nome: 'Só os Loucos Sabem',
        descricao:
          `Role duas perícias na Tabela 6-6 (Tormenta20, p. 279). Você se torna treinado nelas (se já for, recebe +3 nessa perícia). No começo de cada dia, você pode gastar 3 PM para rolar novas perícias.`,
        id_deuses:[12],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 237,
        nome: 'Sorvo de Mana',
        descricao:
          `Sempre que falhar no teste de resistência contra uma magia de um inimigo, você recupera uma quantidade de PM igual ao círculo dela.`,
        id_deuses:[20],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 238,
        nome: 'Temor Arcano',
        descricao:
          `Quando um inimigo em alcance médio sob efeito de uma condição de medo falha em um teste de resistência contra uma de suas magias, você recebe 1 PM temporário cumulativo. Você pode ganhar um máximo de PM temporários por cena igual ao seu nível, e eles desaparecem no fim da cena.`,
        id_deuses:[6],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 239,
        nome: 'Terror Profundo',
        descricao:
          `Você recebe +2 em Intimidação e na CD de seus efeitos de medo.`,
        id_deuses:[6, 11, 17],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 240,
        nome: 'Toque de Não Vida',
        descricao:
          `Você pode gastar uma ação de movimento e 2 PM para fornecer a si mesmo ou a uma criatura adjacente 2d12 PV temporários (que são sempre os primeiros a serem perdidos) e, enquanto os PV temporários durarem, camuflagem leve.`,
        id_deuses:[16],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 241,
        nome: 'Transbordar Cura',
        descricao:
          `Quando você usa um efeito de cura, quaisquer pontos de vida excedentes desse efeito se tornam pontos de vida temporários, até um valor máximo igual ao dobro do nível do alvo.`,
        id_deuses:[8],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 242,
        nome: 'Trilha Desimpedida',
        descricao:
          `Você aprende e pode lançar a magia Caminhos da Natureza. Se aprender essa magia, o custo dela diminui em –1 PM.`,
        id_deuses:[2],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 243,
        nome: 'Ushultt',
        descricao:
          `Escolha um de seus aliados como seu ushultt. Enquanto estiverem em alcance curto um do outro, vocês recebem +2 em testes de ataque e rolagens de dano (esse bônus aumenta para +3 se o ushultt também for duyshidakk). Você pode trocar seu ushultt uma vez por aventura.`,
        id_deuses:[17],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 244,
        nome: 'Expurgar a Derrota',
        descricao:
          `Se estiver com 0 PM, você pode gastar seus pontos de vida (exceto PV temporários) no lugar de mana, à taxa de 3 PV por 1 PM. Você não pode reduzir seus PV a 0 ou menos dessa forma e não pode usar este poder se estiver sob efeito de ter descumprido suas Obrigações & Restrições. Pontos de vida gastos dessa forma só podem ser recuperados com descanso.`,
        id_deuses:[3],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 245,
        nome: `Versátil`,
        descricao: `Você se torna treinado em duas perícias a sua escolha (não precisam ser da sua classe). Você pode trocar uma dessas perícias por um poder geral a sua escolha.`,
        tipo: TipoPoder.HABILIDADE_RACA,
        raca: {id:1},
        instrucao: ['this.personagem.adicionaNumeroPericiasLivres(1)', OpcoesSelecao.RADIO, `[{chave: 'Duas Perícias', value: 'this.personagem.adicionaNumeroPericiasLivres(1)'}, {chave: 'Uma Perícia e um Poder Geral', value: "this.personagem.adicionarEspacoSelecaoPoder('Escolha um poder geral (Versátil)')"}]`],
        referencias: Referencia.BASICO,
        paginas: '19'
      },
      {
        id: 246,
        nome: `Conhecimento das Rochas`,
        descricao: `Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo.`,
        tipo: TipoPoder.HABILIDADE_RACA,
        raca: {id:2},
        instrucao: [
          `this.personagem.adicionaSentido('Visão no Escuro')`, 
          `this.personagem.atualizaBonusExtraPericia('PERCEPÇÃO', [{origem: 'Conhecimento das Rochas', bonus: 2, condicao:['SUBTERRÂNEO'], ativo: false}]);`,
          `this.personagem.atualizaBonusExtraPericia('SOBREVIVÊNCIA', [{origem: 'Conhecimento das Rochas', bonus: 2, condicao:['SUBTERRÂNEO'], ativo: false}]);`],
        referencias: Referencia.BASICO,
        paginas: '20'
      },
      {
        id: 247,
        nome: `Devagar e Sempre`,
        descricao: `Seu deslocamento é 6m (em vez de 9m). Porém, seu deslocamento não é reduzido por uso de armadura ou excesso de carga.`,
        tipo: TipoPoder.HABILIDADE_RACA,
        raca: {id:2},
        instrucao: ["this.personagem.atualizarDeslocamento('Terrestre', 6);",`this.personagem.adicionaImunidade('SOBRECARREGADO', 'Condição');`],
        referencias: Referencia.BASICO,
        paginas: '20'
      },
      {
        id: 248,
        nome: `Duro como Pedra`,
        descricao: `Você recebe +3 pontos de vida no 1º nível e +1 por nível seguinte.`,
        tipo: TipoPoder.HABILIDADE_RACA,
        raca: {id:2},
        instrucao: ['this.personagem.adicionaBonusTotalVida(2);',`this.personagem.adicionaBonusNivelVida(1);`],
        referencias: Referencia.BASICO,
        paginas: '20'
      },
      {
        id: 249,
        nome: `Tradição de Heredrimm`,
        descricao: `Você é perito nas armas tradicionais anãs, seja por ter treinado com elas, seja por usá-las como ferramentas de ofício. Para você, todos os machados, martelos, marretas e picaretas são armas simples. Você recebe +2 em ataques com essas armas.`,
        tipo: TipoPoder.HABILIDADE_RACA,
        raca: {id:2},
        instrucao: [`this.personagem?.posse?.equipamentos_empunhados?.forEach(empunhado => {empunhado?.ataque?.bonus_ataque?.push({origem:'Raça Anão, Poder Tradição de Heredrimm', bonus: 2, condicao: 'Martelo, Machado e Picareta', ativo: false})})`],
        referencias: Referencia.BASICO,
        paginas: '20'
      },
      {
        id: 250,
        nome: 'Amiga das Plantas',
        descricao: 'Você pode lançar a magia Controlar Plantas (atributo-chave Sabedoria). Caso aprenda novamente essa magia, seu custo diminui em –1 PM. e',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: ['this.adicionarMagiaExtra(195)'],
        referencias: Referencia.BASICO,
        paginas: '21'
      },
      {
        id: 251,
        nome: 'Armadura de Allihanna',
        descricao: 'Você pode gastar uma ação de movimento e 1 PM para transformarsua pele em casca de árvore, recebendo +2 na Defesa até o fim da cena.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [],
        ativacao: [`this.personagem.adicionaBonusDefesa(2, 'Armadura de Allihanna', 'Cena');`],
        referencias: Referencia.BASICO,
        paginas: '21'
      },
      {
        id: 252,
        nome: 'Empatia Selvagem',
        descricao: 'Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento para mudar atitude e persuasão com animais (veja Diplomacia, na página 118). Caso receba esta habilidade novamente, recebe +2 em Adestramento.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '21'
      },
      {
        id: 253,
        nome: 'Graça de Glórienn',
        descricao: 'Seu deslocamento é 12m (em vez de 9m).',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: ["this.personagem.atualizarDeslocamento('Terrestre', 12);"],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '21'
      },
      {
        id: 254,
        nome: 'Sangue Mágico',
        descricao: 'Você recebe +1 ponto de mana por nível.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: ['this.personagem.adicionaBonusNivelMana(1);'],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '21'
      },
      {
        id: 255,
        nome: 'Sentidos Élficos',
        descricao: 'Você recebe visão na penumbra e +2 em Misticismo e Percepção.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [`this.personagem.adicionaSentido('Visão na Penumbra')`, 
          `this.personagem.atualizaBonusExtraPericia('PERCEPÇÃO', [{origem: 'Conhecimento das Rochas', bonus: 2, condicao:[], ativo: true}]);`, `this.personagem.atualizaBonusExtraPericia('MISTICISMO', [{origem: 'Conhecimento das Rochas', bonus: 2, condicao:[], ativo: true}]);`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '21'
      },
      {
        id: 256,
        nome: 'Engenhoso',
        descricao: 'Você não sofre penalidades em testes de perícia por não usar ferramentas. Se usar a ferramenta necessária, recebe +2 no teste de perícia.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [`this.personagem.pericias?.forEach(pericia=>{if(pericia.objeto?.exigeFerramenta){pericia.adicionaBonusExtra([{origem: "Engenhoso", bonus: 2, condicao: ['Ferramenta'], ativo:false}])}})`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '23'
      },
      {
        id: 257,
        nome: 'Espelunqueiro',
        descricao: 'Você recebe visão no escuro e deslocamento de escalada igual ao seu deslocamento terrestre.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [`this.personagem.adicionaSentido('Visão no Escuro')`, `this.personagem.adicionaDeslocamento('Escalada', this.personagem.deslocamentos[0].valor)`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '23'
      },
      {
        id: 258,
        nome: 'Peste Esguia',
        descricao: 'Seu tamanho é Pequeno (veja a página 106), mas seu deslocamento se mantém 9m. Apesar de pequenos, goblins são rápidos.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [`this.personagem.atualizaTamanho('Pequeno')`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '23'
      },
      {
        id: 259,
        nome: 'Rato das Ruas',
        descricao: 'Você recebe +2 em Fortitude e sua recuperação de PV e PM nunca é inferior ao seu nível.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [`this.personagem.atualizaBonusExtraPericia('FORTITUDE', [{origem: 'Rato das Ruas', bonus: 2, condicao:[], ativo: true}]);`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '23'
      },
      {
        id: 260,
        nome: 'Cria da Tormenta',
        descricao: 'Você é uma criatura do tipo monstro e recebe +5 em testes de resistência contra efeitos causados por lefeu e pela Tormenta.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [`this.personagem.atualizaBonusExtraPericia('FORTITUDE', [{origem: 'Cria da Tormenta', bonus: 5, condicao:['Contra efeitos causados por lefeu e pela Tormenta.'], ativo: false}]);`, `this.personagem.atualizaBonusExtraPericia('REFLEXO', [{origem: 'Cria da Tormenta', bonus: 5, condicao:['Contra efeitos causados por lefeu e pela Tormenta.'], ativo: false}]);`, `this.personagem.atualizaBonusExtraPericia('VONTADE', [{origem: 'Cria da Tormenta', bonus: 5, condicao:['Contra efeitos causados por lefeu e pela Tormenta.'], ativo: false}]);`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '24'
      },
      {
        id: 261,
        nome: 'Deformidade',
        descricao: 'Todo lefou possui defeitos físicos que, embora desagradáveis, conferem certas vantagens. Você recebe +2 em duas perícias a sua escolha. Cada um desses bônus conta como um poder da Tormenta (exceto para perda de Crisma). Você pode trocar um desses bônus por um poder da Tormenta a sua escolha (ele também não conta para perda de Carisma).',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: ['this.personagem.adicionaBonusPericiaPoderNaoLocalizado(2, 261, undefined)', OpcoesSelecao.RADIO, `[{chave: 'Bonus +2 em Duas Perícias', value: 'this.personagem.adicionaBonusPericiaPoderNaoLocalizado(2, 261, undefined)'}, {chave: 'Bonus +2 em Uma Perícias e um Poder da Tormenta', value: "this.personagem.adicionarEspacoSelecaoPoder('Escolha um poder da tormenta (Deformidade)')"}]`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '24'
      },
      {
        id: 262,
        nome: 'Chifres',
        descricao: 'Você possui uma arma natural de chifres (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os chifres.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [`this.personagem.adicionarArmaNatural(this.personagem, 'Chifre', '1d6', 1, 2, 1.5 );`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '25'
      },
      {
        id: 263,
        nome: 'Couro Rígido',
        descricao: 'Sua pele é dura como a de um touro. Você recebe +1 na Defesa.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [`this.personagem.adicionaBonusDefesa(1, 'Couro Rígido', 'Permanente');`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '25'
      },
      {
        id: 264,
        nome: 'Faro',
        descricao: 'Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [`this.personagem.adicionaSentido('Faro Aguçado')`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '25'
      },
      {
        id: 265,
        nome: 'Medo de Altura',
        descricao: 'Se estiver adjacente a uma queda de 3m ou mais de altura (como um buraco ou penhasco), você fica abalado.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '25'
      },
      {
        id: 1000,
        nome: 'Desejos',
        descricao: 'Se lançar uma magia que alguém tenha pedido desde seu último turno, o custo da magia diminui em –1 PM. Fazer um desejo ao qareen é uma ação livre.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '26'
      },
      {
        id: 1001,
        nome: 'Resistência Elemental',
        descricao: 'Conforme sua ascendência, você recebe redução 10 a um tipo de dano. Escolha uma: frio (qareen da água), eletricidade (do ar), fogo (do fogo), ácido (da terra), luz (da luz) ou trevas (qareen das trevas).',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [OpcoesSelecao.RADIO, `[{chave: 'Frio', value: "this.personagem.adicionaResistenciaElemental('Frio', 10)"}, {chave: 'Eletricidade', value: "this.personagem.adicionaResistenciaElemental('Eletricidade', 10)"}, {chave: 'Fogo', value: "this.personagem.adicionaResistenciaElemental('Fogo', 10)"}, {chave: 'Ácido', value: "this.personagem.adicionaResistenciaElemental('Ácido', 10)"}, {chave: 'Luz', value: "this.personagem.adicionaResistenciaElemental('Luz', 10)"}, {chave: 'Trevas', value: "this.personagem.adicionaResistenciaElemental('Trevas', 10)"}]`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '26'
      },
      {
        id: 1002,
        nome: 'Tatuagem Mística',
        descricao: 'Você pode lançar uma magia de 1º círculo a sua escolha (atributo-chave Carisma). Caso aprenda novamente essa magia, seu custo diminui em –1 PM. e',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: ['this.adicionarMagiaExtra(0)'],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '26'
      },
      {
        id: 266,
        nome: 'Membro da Igreja',
        descricao: 'Você consegue hospedagem confortável e informação em qualquer templo de sua divindade, para você e seus aliados.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '85'
      },
      {
        id: 267,
        nome: 'Amigo Especial',
        descricao: 'Você recebe +5 em testes de Adestramento com animais. Além disso, possui um animal de estimação que o auxilia e o acompanha em suas aventuras. Em termos de jogo, é um parceiro que fornece +2 em uma perícia a sua escolha (exceto Luta ou Pontaria e aprovada pelo mestre) e não conta em seu limite de parceiros.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [`this.personagem.atualizaBonusExtraPericia('ADESTRAMENTO', [{origem: 'Amigo Especial', bonus: 5, condicao:['COM ANIMAIS'], ativo: false}]);`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '85'
      },
      {
        id: 268,
        nome: 'Lembranças Graduais',
        descricao: 'Durante suas aventuras, em determinados momentos a critério do mestre, você pode fazer um teste de Sabedoria (CD 10) para reconhecer pessoas, criaturas ou lugares que tenha encontrado antes de perder a memória.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '86'
      },
      {
        id: 269,
        nome: 'Sangue Azul',
        descricao: 'Você tem alguma influência política, suficiente para ser tratado com mais leniência pela guarda, conseguir uma audiência com o nobre local etc.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '86'
      },
      {
        id: 270,
        nome: 'Frutos do Trabalho',
        descricao: 'No início de cada aventura, você recebe até 5 itens gerais que possa fabricar num valor total de até T$ 50. Esse valor aumenta para T$ 100 no patamar aventureiro, T$ 300 no heroico e T$ 500 no lenda.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '86'
      },
      {
        id: 271,
        nome: 'Dom artístico',
        descricao: 'Você recebe +2 em testes de Atuação, e recebe o dobro de tibares em apresentações.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [`this.personagem.atualizaBonusExtraPericia('ATUAÇÃO', [{origem: 'Dom Artístico', bonus: 2, condicao:[], ativo: true}]);`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '86 e 87'
      },
      {
        id: 272,
        nome: 'Esse Cheiro...',
        descricao: 'Você recebe +2 em Fortitude e detecta automaticamente a presença (mas não a localização ou natureza) de itens alquímicos em alcance curto.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [`this.personagem.atualizaBonusExtraPericia('FORTITUDE', [{origem: 'Esse Cheiro...', bonus: 2, condicao:[], ativo: true}]);`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '87 e 88'
      },
      {
        id: 273,
        nome: 'Confissão',
        descricao: 'Você pode usar Intimidação para interrogar sem custo e em uma hora (veja Investigação).',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '88'
      },
      {
        id: 274,
        nome: 'Alpinista Social',
        descricao: 'Você pode substituir testes de Diplomacia por testes de Enganação.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '88 e 89'
      },
      {
        id: 275,
        nome: 'Truque de Mágica',
        descricao: 'Você pode lançar Explosão de Chamas, Hipnotismo e Queda Suave, mas apenas com o aprimoramento Truque. Esta não é uma habilidade mágica — os efeitos provêm de prestidigitação.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '89'
      },
      {
        id: 276,
        nome: 'Punguista',
        descricao: 'Você pode fazer testes de Ladinagem para sustento (como a perícia Ofício), mas em apenas um dia. Se passar, recebe o dobro do dinheiro, mas, se falhar, pode ter problemas com a lei (a critério do mestre).',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '89'
      },
      {
        id: 277,
        nome: 'Médico de Campo',
        descricao: 'Você soma sua Sabedoria aos PV restaurados por suas habilidades e itens mundanos de cura.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '89'
      },
      {
        id: 278,
        nome: 'Busca Interior',
        descricao: 'Quando você e seus companheiros estão diante de um mistério, incapazes de prosseguir, você pode gastar 1 PM para meditar sozinho durante algum tempo e receber uma dica do mestre.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '89'
      },
      {
        id: 279,
        nome: 'Desejo de Liberdade',
        descricao: 'Ninguém voltará a torná-lo um escravo! Você recebe +5 em testes contra a manobra agarrar e efeitos de movimento.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [`this.personagem.atualizaBonusExtraPericia('LUTA', [{origem: 'Desejo de Liberdade', bonus: 5, condicao:['CONTRA AGARRAR'], ativo: false}]);`, `this.personagem.atualizaBonusExtraPericia('FORTITUDE', [{origem: 'Desejo de Liberdade', bonus: 5, condicao:['CONTRA EFEITOS DE MOVIMENTO'], ativo: false}]);`, `this.personagem.atualizaBonusExtraPericia('VONTADE', [{origem: 'Desejo de Liberdade', bonus: 5, condicao:['CONTRA EFEITOS DE MOVIMENTO'], ativo: false}]);`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '89'
      },
      {
        id: 280,
        nome: 'Palpite Fundamentado',
        descricao: 'Você pode gastar 2 PM para substituir um teste de qualquer perícia originalmente baseada em Inteligência ou Sabedoria por um teste de Conhecimento.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '90'
      },
      {
        id: 281,
        nome: 'Cultura Exótica',
        descricao: 'Por sua diferente visão de mundo, você encontra soluções inesperadas. Você pode gastar 1 PM para fazer um teste de perícia somente treinada, mesmo sem ser treinado na perícia.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '90'
      },
      {
        id: 282,
        nome: 'Pão e Circo',
        descricao: 'Por seu treino em combates de exibição, você sabe “bater sem machucar”. Pode escolher causar dano não letal sem sofrer a penalidade de –5.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '90 e 91'
      },
      {
        id: 283,
        nome: 'Detetive',
        descricao: 'Você pode gastar 1 PM para substituir testes de Percepção e Intuição por testes de Investigação até o fim da cena.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '91'
      },
      {
        id: 284,
        nome: 'Herança',
        descricao: 'Você herdou um item de preço de até T$ 1.000. Você pode escolher este poder duas vezes, para um item de até T$ 2.000.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '91'
      },
      {
        id: 285,
        nome: 'Coração Heroico',
        descricao: 'Você recebe +3 pontos de mana. Quando atinge um novo patamar (no 5º, 11º e 17º níveis), recebe +3 PM.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '91 e 92'
      },
      {
        id: 286,
        nome: 'Passagem de Navio',
        descricao: 'Você consegue transporte marítimo para você e seus aliados, sem custos, desde que todos paguem com trabalho (passar em pelo menos um teste de perícia adequado durante a viagem).',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '92'
      },
      {
        id: 287,
        nome: 'Vendedor de Carcaças',
        descricao: 'Você pode extrair recursos de criaturas em um minuto, em vez de uma hora, e recebe +5 no teste.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '92'
      },
      {
        id: 288,
        nome: 'Negociação',
        descricao: 'Você pode vender itens 10% mais caro (não cumulativo com barganha).',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '93'
      },
      {
        id: 289,
        nome: 'Escavador',
        descricao: 'Você se torna proficiente em picaretas, causa +1 de dano com elas e não é afetado por terreno difícil em masmorras e subterrâneos.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '93'
      }, 
      {
        id: 1003,
        nome: 'Chassi',
        descricao: 'Você leva um dia para vestir ou remover uma armadura (pois precisa acoplar as peças dela a seu chassi). Entretanto, por ser acoplada, sua armadura não conta no limite de itens que você pode usar (mas você só pode usar uma armadura). Além disso, escolha um material para seu chassi entre os abaixo.',
        tipo: TipoPoder.HABILIDADE_ORIGEM,
        instrucao: [
          OpcoesSelecao.RADIO, 
          `[
          {chave: 'Barro. Constituição +2. Seu deslocamento não é afetado por terreno difícil e você passa automaticamente em testes de Acrobacia para passar por espaços apertados. Se permanecer mais de um dia sem contato com água, você não recupera PM com descanso até voltar para a água.', value: "this.personagem.adicionarAtributoConstituicao(2);"},
          {chave: 'Bronze. +1 em dois atributos. Seu deslocamento não é reduzido por armaduras pesadas ou excesso de carga. Sua armadura não é acoplada ao seu corpo; você pode removê-la e colocá-la no tempo normal, mas ela conta em seu limite de itens vestidos.', value: "this.personagem.adicionarPontosAtributoLivres(2, 1003)"},
          {chave: 'Carne. Constituição +2, Força +1, Carisma –1. Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe imunidade a metamorfose e trevas, mas não pode escolher elemental (água ou fogo) ou vapor como sua fonte de energia, e dano mágico de fogo e frio o deixa lento por 1d4 rodadas.', value: "this.personagem.atualizarDeslocamento('Terrestre', 6); this.personagem.adicionaImunidade('SOBRECARREGADO', 'Condição'); this.personagem.adicionarAtributoConstituicao(2, 1003); this.personagem.adicionarAtributoForca(1, 1003); this.personagem.adicionarAtributoCarisma(-1, 1003); this.personagem.adicionaImunidade('METAMORFOSE', 'Condição'); this.personagem.adicionaImunidade('TREVAS', 'Dano');"},
          {chave: 'Espelhos. Carisma +2, Sabedoria +1, Constituição –1. Quando uma criatura em alcance curto usa uma habilidade de classe que você possa ver, você pode gastar 1 PM para copiar essa habilidade. Até o fim do seu próximo turno, você pode usá-la como uma habilidade de raça (se ela usar um atributo para algo, use seu Carisma). Se copiar outra habilidade, você perde a anterior.', value: "this.personagem.adicionarAtributoCarisma(2, 1003); this.personagem.adicionarAtributoSabedoria(1, 1003); this.personagem.adicionarAtributoConstituicao(-1, 1003);"},
          {chave: 'Ferro. Força +1 e Constituição +1. Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe +2 na Defesa, mas possui penalidade de armadura –2.', value: "this.personagem.adicionarAtributoForca(1, 1003); this.personagem.adicionarAtributoConstituicao(1, 1003); this.personagem.adicionaBonusDefesa(2, 'Chassi', 'Permanente'); this.personagem.atualizarDeslocamento('Terrestre', 6); this.personagem.adicionaImunidade('SOBRECARREGADO', 'Condição');"},
          {chave: 'Gelo Eterno. Constituição +2. Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe imunidade a frio e redução de fogo 10, mas não pode escolher elemental (fogo) ou vapor como sua fonte de energia (veja Golem de Nor na página 348).', value: "this.personagem.adicionarAtributoConstituicao(2, 1003); this.personagem.atualizarDeslocamento('Terrestre', 6); this.personagem.adicionaImunidade('SOBRECARREGADO', 'Condição'); this.personagem.adicionaImunidade('FRIO', 'Dano'); this.personagem.adicionaEspacaoResistencia('Fogo', 10)"},
          {chave: 'Pedra. Constituição +2. Você não pode correr e seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe redução de corte, fogo e perfuração 5.', value: "this.personagem.adicionarAtributoConstituicao(2, 1003); this.personagem.atualizarDeslocamento('Terrestre', 6); this.personagem.adicionaImunidade('SOBRECARREGADO', 'Condição'); this.personagem.adicionaEspacaoResistencia('Corte', 5); this.personagem.adicionaEspacaoResistencia('Perfuração', 5); this.personagem.adicionaEspacaoResistencia('Fogo', 5);"},
          {chave: 'Sucata. Força +1 e Constituição +1. Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Quando recebe cuidados prolongados com a perícia Ofício (artesão), sua recuperação de PV aumenta em +2 por nível nesse dia (em vez de +1).', value: "this.personagem.adicionarAtributoConstituicao(1, 1003); this.personagem.adicionarAtributoForca(1, 1003); this.personagem.atualizarDeslocamento('Terrestre', 6); this.personagem.adicionaImunidade('SOBRECARREGADO', 'Condição'); this.personagem.adicionaEspacaoResistencia('Corte', 5); this.personagem.adicionaEspacaoResistencia('Perfuração', 5); this.personagem.adicionaEspacaoResistencia('Fogo', 5);"},
          ]`
        ],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '93'
      },
      {
        id: 1004,
        nome: 'Criatura Artificial',
        descricao: 'Você é uma criatura do tipo construto. Recebe visão no escuro e imunidade a cansaço, efeitos metabólicos e veneno. Além disso, não precisa respirar, alimentar-se ou dormir, mas não se beneficia de cura mundana e de itens da categoria alimentação. Você precisa ficar inerte por 8 horas por dia para recarregar sua fonte de energia. Se fizer isso, recupera PV e PM por descanso em condições normais (golens não são afetados por condições boas ou ruins de descanso). Por fim, a perícia Cura não funciona em você, mas Ofício (artesão) pode ser usada no lugar dela.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [`this.personagem.adicionaSentido('Visão no Escuro');`, `this.personagem.adicionaImunidade('CANSAÇO', 'Condição');`, `this.personagem.adicionaImunidade('METABOLISMO', 'Condição');`, `this.personagem.adicionaImunidade('VENENO', 'Condição');`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '93'
      },
      {
        id: 1005,
        nome: 'Fonte de energia',
        descricao: 'Escolha sua fonte de energia da lista abaixo.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [OpcoesSelecao.RADIO, `[
          {chave: 'Alquímica. Uma mistura alquímica gera a energia necessária à sua vida. Você pode gastar uma ação padrão para ingerir um item alquímico qualquer; se fizer isso, recupera 1 PM.', value: ""}, 
          {chave: 'Elemental. Você possui um espírito elemental preso em seu corpo. Escolha entre água (frio), ar (eletricidade), fogo (fogo) e terra (ácido). Você é imune a dano desse tipo. Se fosse sofrer dano mágico deste tipo, em vez disso cura PV em quantidade igual à metade do dano.', value: "this.personagem.adicionaResistenciaElementalLivre(10)"},
          {chave: 'Sagrada. Você foi animado por um texto ou símbolo sagrado depositado em seu corpo. Você pode lançar uma magia divina de 1º círculo a sua escolha (atributo-chave Sabedoria). Caso aprenda novamente essa magia, seu custo diminui em –1 PM. Alguém treinado em Religião pode trocar essa magia com um ritual que demora um dia e exige o gasto de um pergaminho mágico com outra magia de 1° círculo.', value: "this.adicionarMagiaExtra(0)"},
          {chave: 'Vapor. Seu corpo é movido por vapor e engrenagens. Você é imune a dano de fogo; se fosse sofrer dano desse tipo, em vez disso seu deslocamento aumenta em 4,5m por 1 rodada. Entretanto, dano de frio deixa-o lento por 1 rodada. Você pode gastar uma ação padrão e PM para soprar um jato de vapor escaldante em um cone de 4,5m. Criaturas na área sofrem 1d6 pontos de dano de fogo por PM gasto e ficam em chamas (Ref CD Con reduz à metade e evita a condição).', value: "this.personagem.adicionaImunidade('FOGO', 'Dano');"}
          ]`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '93'
      },
      {
        id: 1006,
        nome: 'Propósito de Criação',
        descricao: 'Você foi construído “pronto” para um propósito específico e não teve uma infância. Você não tem direito a escolher uma origem, mas recebe um poder geral a sua escolha.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: ['this.disableOrigem = true;'],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '93'
      },
      {
        id: 1007,
        nome: 'Tamanho',
        descricao: 'Escolha seu tamanho da lista abaixo.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [OpcoesSelecao.RADIO, `[{chave: 'Pequeno', value: "this.personagem.atualizaTamanho('Pequeno');this.personagem.adicionarAtributoDestreza(1, 1007)"}, {chave: 'Médio', value: "this.personagem.atualizaTamanho('Médio')"}, {chave: 'Grande', value: "this.personagem.atualizaTamanho('Pequeno');this.personagem.adicionarAtributoDestreza(-1, 1007)"}]`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '93'
      },
      {
        id: 1008,
        nome: 'Arremessador',
        descricao: 'Quando faz um ataque à distância com uma funda ou uma arma de arremesso, seu dano aumenta em um passo.',
        tipo: TipoPoder.HABILIDADE_RACA,
        instrucao: [`this.personagem.adicionaAumentoPasso(['Funda', 'Arremesso']);`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '93'
      },
      {
        id: 1009,
        nome: 'Pequeno e Rechonchudo',
        descricao: 'Seu tamanho é Pequeno (veja a página 106) e seu deslocamento é 6m. Você recebe +2 em Enganação e pode usar Destreza como atributo-chave de Atletismo (em vez de Força).',
        instrucao: [`this.personagem.atualizaTamanho('Pequeno')`, `this.personagem.atualizarDeslocamento('Terrestre', 6);`,`this.personagem.atualizaBonusExtraPericia('ENGANAÇÃO', [{origem: 'Pequeno e Rechonchudo', bonus: 2, condicao:[], ativo: true}]);`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '93'
      },
      {
        id: 1010,
        nome: 'Sorte Salvadora',
        descricao: 'Quando faz um teste de resistência, você pode gastar 1 PM para rolar este teste novamente.',
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '93'
      },
      {
        id: 1011,
        nome: 'Híbrido',
        descricao: 'Sua natureza multifacetada fez com que você aprendesse conhecimentos variados. Você se torna treinado em uma perícia a sua escolha (não precisa ser da sua classe).',
        instrucao: [`this.personagem.adicionaNumeroPericiasLivres(1)`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '93'
      },
      {
        id: 1012,
        nome: 'Engenhosidade',
        descricao: 'Quando faz um teste de perícia, você pode gastar 2 PM para somar sua Inteligência no teste. Você não pode usar esta habilidade em testes de ataque. Caso receba esta habilidade novamente, seu custo é reduzido em –1 PM.',
        instrucao: [`this.personagem.atualizaBonusExtraPericiasSomaAtributoExcetoLutaPontaria({origem: 'Engenhosidade', atributo: 'inteligencia', condicao:['2 PM'], ativo: false});`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '93'
      },
      {
        id: 1013,
        nome: 'Ossos Frágeis',
        descricao: 'Você sofre 1 ponto de dano adicional por dado de dano de impacto. Por exemplo, se for atingido por uma clava (dano 1d6), sofre 1d6+1 pontos de dano. Se cair de 3m de altura (dano 2d6), sofre 2d6+2 pontos de dano.',
        instrucao: [],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '93'
      },
      {
        id: 1014,
        nome: 'Vanguardista',
        descricao: 'Você recebe proficiência em armas de fogo e +2 em Ofício (um qualquer, a sua escolha).',
        instrucao: [`this.personagem.adicionaProficiencia('Armas de Fogo');`, `this.personagem.adicionaBonusPericiaPoderNaoLocalizado(2, 1014, ['Ofício Armeiro','Ofício Artesão','Ofício Alquimista', 'Ofício Cozinheiro', 'Ofício Alfaiate', 'Ofício Engenhoqueiro', 'Ofício Escriba', 'Ofício Professor', 'Ofício Tatuador', 'Ofício Fazendeiro', 'Ofício Pescador', 'Ofício Lenhador', 'Ofício Minerador', 'Ofício de Soldado', 'Ofício Marinheiro', 'Ofício Armadilheiro', 'Ofício Zelador', 'Ofício Mercador', 'Ofício Ferreiro', 'Ofício Taverneiro', 'Ofício Carpinteiro', 'Ofício Barbeiro', 'Ofício Pedreiro', 'Ofício Coureiro', 'Ofício Padeiro', 'Ofício Faxineiro'])`],
        ativacao: [],
        referencias: Referencia.BASICO,
        paginas: '93'
      },
      {
        id: 1015,
        nome: 'Vitória a Qualquer Custo',
        descricao: `Quando faz um teste de ataque, de resistência ou de Guerra, você pode gastar 2 PM para rolar novamente esse teste. Você pode fazer isso várias vezes no mesmo teste, mas cada novo uso aumenta o custo em +1 PM.`,
        id_deuses: [3],
      }
    ];
  }
}