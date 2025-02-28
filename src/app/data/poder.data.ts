import { Injectable } from '@angular/core';

import { Poder } from '../model/poder';
import { TipoPoder } from '../enum/tipo.poder.enum';
import { Atributo } from '../enum/atributo.enum';
import { Referencia } from '../enum/referencia.enum';
import { OpcoesSelecao } from '../enum/opcoes.selecao';
import { Chave } from '../enum/chave.enum';

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
          'Você recebe +10 em testes de resistência contra efeitos da Tormenta, de suas criaturas e de devotos de Aharadak. Além disso, seu primeiro poder da Tormenta não conta para perda de Carisma.',
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
          `Você se torna imune a fogo. Se fosse sofrer dano mágico de fogo, em vez disso recebe PV temporários em quantidade igual à metade desse dano.`,
        id_deuses:[18],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 171,
        nome: 'Adaga Lunar',
        descricao:
          `Você pode gastar 1 PM para fazer uma arma de perfuração que esteja empunhando causar +1d6 pontos de dano de frio até o fim da cena. `,
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
          `Quando uma criatura em alcance curto sob efeito de uma condição de medo morre, você recebe 1 PM temporário cumulativo. Você pode ganhar um máximo de PM temporários por cena igual ao seu nível, e eles desaparecem no fim da cena.`,
        id_deuses:[6, 11],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 173,
        nome: 'Alma de Mudança',
        descricao:
          `No início de cada aventura, você pode trocar um número de outros poderes até sua Sabedoria por poderes diferentes.`,
        id_deuses:[17],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 174,
        nome: 'Andarilho Carregado',
        descricao:
          `Sua primeira mochila de aventureiro não conta em seu limite de itens vestidos e, se estiver vestindo uma dessas mochilas, pode usar Sabedoria para estabelecer seu limite de carga (em vez de Força).`,
        id_deuses:[19],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 175,
        nome: 'Armadilha Divina',
        descricao:
          `Você recebe um poder de Armadilha do caçador (Tormenta20, p. 50) à sua escolha. Por ser criada a partir de energia divina, essa armadilha pode ser preparada em locais sem os materiais propícios. `,
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
          `Você pode gastar 3 PM para receber +2 na Defesa e redução de corte, frio e perfuração 10 até o fim da cena. `,
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
          `Você recebe +1 nas rolagens de dano e no multiplicador de crítico com armas.`,
        id_deuses:[3],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 178,
        nome: 'Armas da Selvageria',
        descricao:
          `Você considera todas as armas naturais como armas favoritas de Megalokk e recebe +2 em rolagens de dano com elas.`,
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
          `Uma vez por busca (Tormenta20, p. 278), você pode rolar novamente um teste recém-realizado (mas deve aceitar o novo resultado) e, quando recebe uma recompensa ou castigo aleatório por uma busca, rola dois dados e escolhe entre os dois resultados.`,
        id_deuses:[19],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 181,
        nome: 'Baforada Dracônica',
        descricao:
          `Escolha um elemento entre ácido, eletricidade, fogo, frio, luz ou trevas (uma vez feita, essa escolha não pode ser mudada). Você pode gastar uma ação padrão e PM (limitado por sua Constituição) para desferir um sopro elemental em uma criatura em alcance curto. Para cada PM que você gastar, o alvo sofre 1d10 pontos de dano do tipo escolhido (Ref CD Con reduz à metade). Alternativamente, quando faz a ação agredir, você pode usar este poder como parte dessa ação.`,
        id_deuses:[6],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 182,
        nome: 'Barreira de Coral',
        descricao:
          `Você pode gastar uma ação de movimento e 2 PM para cobrir seu corpo de coral. Até o fim da cena, seu deslocamento é reduzido à metade, mas você recebe +2 na Defesa e, sempre que sofrer um ataque corpo a corpo, o atacante sofre dano de perfuração igual a 1d6 + sua Constituição. Se estiver com pelo menos metade do corpo imerso em água, você pode usar esse poder como uma ação livre.`,
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
          `Uma vez por cena, você pode gastar uma ação padrão para pedir o conhecimento de uma magia a Wynna. Gaste uma ação padrão e faça um teste de Religião (CD 15+ custo em PM da magia). Você pode pedir qualquer magia que tenha visto sendo lançada nessa aventura e que seja de um círculo a que tenha acesso. Se passar, você pode lançar essa magia até o fim do seu próximo turno.`,
        id_deuses:[20],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 184,
        nome: 'Biblioteca Divina',
        descricao:
          `Você recebe uma perícia treinada adicional por patamar.`,
        id_deuses:[15],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 185,
        nome: 'Cancioneiro da Esperança',
        descricao:
          `Você pode gastar uma ação padrão e 2 PM para entoar uma canção de superação e paz. Criaturas escolhidas em alcance curto (limitadas por seu Carisma) recebem +2 em Força e Destreza e +3m de deslocamento até o fim da cena (Von CD Car evita), Se uma criatura afetada executar qualquer ação hostil, os bônus são substituídos por uma penalidade de –2 em todos os testes de perícia.`,
        id_deuses:[10],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 186,
        nome: 'Cerimonialista Divino',
        descricao:
          `Uma vez por descanso, você pode executar uma cerimônia religiosa tradicional. Faça um teste de Religião com um bônus igual ao seu Carisma. Para cada 10 pontos no resultado desse teste, você recebe um marcador de pétalas. Você pode distribuir esses marcadores entre criaturas escolhidas que tenham participado da cerimônia. Até o fim do dia, cada criatura pode gastar um marcador para receber +1d6 em um teste de Iniciativa, Intuição, Diplomacia, Percepção ou Vontade. `,
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
          `Você aprende e pode lançar Conjurar Monstro e pode lançar e sustentar essa magia sem violar suas Obrigações e Restrições. `,
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
          `Você possui um luminar (veja p. @@) que lhe acompanha como um parceiro iniciante. Se perder esse luminar, você recebe outro no início da próxima aventura.`,
        id_deuses:[8, 10],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 189,
        nome: 'Companheiro Silvestre',
        descricao:
          `Você possui um bogum (veja Ameaças de Arton, p. 190) que lhe acompanha como um parceiro iniciante. Se perder esse bogum, você recebe outro no início da próxima aventura.`,
        id_deuses:[2],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 190,
        nome: 'Convicção Ambiciosa',
        descricao:
          `Enquanto estiver encurralado ou sobrepujado (pelo menos dois oponentes para cada membro do grupo ou um encontro de ND maior que o do grupo), você recebe +2 em testes de perícia. Além disso, contra chefes finais (veja Ameaças de Arton, p. 368), você recebe uma ação padrão extra na primeira rodada de combate.`,
        id_deuses:[19],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 191,
        nome: 'Corromper Equipamento',
        descricao:
          `Você pode gastar 2 PM para cobrir um item que esteja empunhando com uma substância rubra. Até o fim da cena, o item recebe os benefícios de matéria vermelha (Tormenta20, p. 167), cumulativo com outros materiais especiais. Se usar esse poder em uma arma produzida com Armamento Aberrante, seu custo é reduzido em –1 PM.`,
        id_deuses:[1],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 192,
        nome: 'Curar o Espírito',
        descricao:
          `Você pode gastar uma ação completa para inspirar esperança em uma criatura em que possa tocar. Faça um teste de Carisma (CD 10). Se passar, a criatura recupera 1d4 PM. Você só pode usar este poder uma vez por dia numa mesma criatura.`,
        id_deuses:[8],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 193,
        nome: 'Discurso Conciliador',
        descricao:
          `Quando faz um teste de Diplomacia para mudar atitude, você pode rolar dois dados e usar o melhor resultado ou ambos (como se tivesse usado mudar atitude duas vezes). Se passar em ambos, as mudanças de atitude serão cumulativas.`,
        id_deuses:[10],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 194,
        nome: 'Dom da Furtividade',
        descricao:
          `Você soma sua Sabedoria em Furtividade e, contra criaturas desprevenidas, a CD para resistir às suas magias aumenta em +2.`,
        id_deuses:[5],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 195,
        nome: 'Dom da Vontade',
        descricao:
          `Você recebe +2 em Vontade e, uma vez por cena, quando falha em um teste de Vontade contra um efeito de um inimigo ou de um perigo, recebe 1d4 PM.`,
        id_deuses:[7],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 196,
        nome: 'Dom dos Segredos',
        descricao:
          `Você pode gastar uma ação padrão e 2 PM para suplicar à Sszzaas por um segredo oculto. Faça um teste de Carisma (CD 10). Se passar, você aprende um poder cujos requisitos possa cumprir (mas você não precisa cumprir requisitos de classe) até o fim da cena. Se falhar, entretanto, você fica alquebrado por um dia.`,
        id_deuses:[14],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 197,
        nome: 'Égide dos Mares',
        descricao:
          `Você possui um escudeiro (veja Ameaças de Arton, p. 190) que lhe acompanha como um parceiro iniciante. Se perder esse escudeiro, você recebe outro no início da próxima aventura.`,
        id_deuses:[13],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 198,
        nome: 'Espírito Animal',
        descricao:
          `Você aprende e pode lançar Arma Espiritual. A arma convocada, entretanto, tem a forma um animal espiritual a sua escolha, que causa dano de um tipo apropriado à sua forma. Caso aprenda novamente essa magia, seu custo diminui em –1 PM. `,
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
          `Você pode gastar uma ação padrão e 2 PM para invocar uma manifestação do saber em um espaço desocupado em alcance curto. Ela é um espírito Minúsculo que tem deslocamento de voo 6m, For –, Des 3, Defesa 15, 1 PV, visão no escuro e falha em qualquer teste de resistência ou oposto. A partir do seu próximo turno, a manifestação pode fazer uma ação de movimento no início de cada um dos seus turnos. Você pode perceber tudo que a manifestação for capaz de perceber, e pode lançar magias com alcance de toque ou maior como se a manifestação fosse seu ponto de origem. A manifestação desaparece quando morre ou no fim da cena. `,
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
          `Você pode gastar uma ação completa e 2 PM para convocar uma manada enfurecida de trobos (ou qualquer outro animal da região) em um ponto a sua escolha em alcance curto com duração sustentada. A manada tem tamanho Grande e pode passar pelo espaço de outras criaturas. Você pode gastar uma ação de movimento para mover a manada 12m em linha reta. Criaturas pelas quais a manada passar sofrem 3d6 pontos de dano de impacto e ficam caídas (Fort CD Sab reduz à metade e evita a condição).`,
        id_deuses:[2],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 201,
        nome: 'Expor Honra',
        descricao:
          `Você pode pagar 1 PM para gerar uma aura de verdade de 9m de raio e duração até o fim da cena. Dentro dessa área, devotos de Lin-Wu e personagens que sigam algum código de conduta (como Código de Honra ou Código do Herói) recebem +2 em Diplomacia e Nobreza, enquanto as demais criaturas sofrem –2 em testes de Enganação, Furtividade e Ladinagem. Apenas personagens com a habilidade Abençoado ou Devoto Fiel podem escolher este poder.`,
        id_deuses:[9],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 202,
        nome: 'Familiar Elemental',
        descricao:
          `Você possui um familiar arcano (veja Tormenta20, p. 38) escolhido entre um aquin’ne, t’peel, pakk ou terrier (veja Ameaças de Arton, p. 88).`,
        id_deuses:[20],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 203,
        nome: 'Ferramentas da Guerra',
        descricao:
          `Uma vez por dia, você pode gastar uma hora e TS 10 por item para abençoar uma quantidade de itens limitada por sua Sabedoria. Armas abençoadas desta forma fornecem +2 em testes de ataque e rolagens de dano, enquanto armaduras e escudos têm seu bônus na Defesa aumentados em +2. Se o usuário de um item abençoado for derrotado em combate, o item é destruído. Os efeitos da bênção duram um dia. `,
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
          `Você pode substituir testes de Diplomacia e Enganação por Conhecimento.`,
        id_deuses:[15],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 205,
        nome: 'Golpe Tempestuoso',
        descricao:
          `Quando acerta um ataque corpo a corpo, você pode gastar 1 PM. Se fizer isso, a criatura é empurrada 3m em uma direção a sua escolha e fica vulnerável por 1 rodada.`,
        id_deuses:[3, 13],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 206,
        nome: 'Imolação Sagrada',
        descricao:
          `Você pode gastar uma ação padrão e 2 PM para cobrir-se com chamas até o fim da cena ou té ser submerso em água. Enquanto estiver coberto pelas chamas, uma vez por rodada, quando sofre um ataque corpo a corpo, você pode causar 2d6 + Sabedoria pontos de dano de fogo no atacante. `,
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
          `Você se torna treinado em Nobreza (se já for treinado, em vez disso recebe +2 nessa perícia) e pode usar esta perícia no lugar de Diplomacia e Intimidação.`,
        id_deuses:[7, 9],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 209,
        nome: 'Magia Caótica',
        descricao:
          `Quando lança uma magia, você pode gastar 1 PM para aceitar o poder do caos. Se fizer isso, a CD para resistir a essa magia recebe um modificador igual a 1d20-10.`,
        id_deuses:[12],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 210,
        nome: 'Magia Piedosa',
        descricao:
          `Quando lança uma magia que causa dano, você pode gastar +1 PM para transformar o dano dela em não-letal.`,
        id_deuses:[8, 18],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 211,
        nome: 'Magia Venenosa',
        descricao:
          `Suas magias com resistência Fortitude recebem o seguinte aprimoramento: +1 PM: além do normal, criaturas que falharem perdem 1d12 PV por veneno.`,
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
          `Você aprende a magia Disfarce Ilusório (CD Car). Na primeira vez que interage com alguém enquanto está sob efeito dessa magia, você recebe +10 no teste de Diplomacia para tentar mudar a atitude dela. Caso aprenda novamente essa magia, seu custo diminui em –1 PM. `,
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
          `Você pode gastar 1 PM para gerar uma aura de 6m de raio com duração sustentada. Cada criatura, à sua escolha, que começar seu próprio turno dentro dessa aura deverá passar em um teste de Acrobacia (CD Sab; criaturas dentro da água sofrem uma penalidade de –5 nesse teste.) ou ficará caída.`,
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
          `Você pode falar com lefeu livremente e recebe +5 em testes de Diplomacia e Intuição com criaturas da Tormenta e devotos de Aharadak.`,
        id_deuses:[1],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 215,
        nome: 'Mestre de Si',
        descricao:
          `Você passa automaticamente no primeiro teste de Vontade que fizer a cada cena.`,
        id_deuses:[9],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 216,
        nome: 'Mochileiro Preparado',
        descricao:
          `Você pode gastar 1 PM para fazer uma ferramenta ou um item de aventura de até T$ 100 aparecer na sua mão ou em um espaço adjacente. O item dura até o fim da cena, ou até deixar sua posse.`,
        id_deuses:[5, 19],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 217,
        nome: 'Mordida de Víbora',
        descricao:
          `Você recebe uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida. Suas presas são retráteis e podem armazenar até 2 doses de veneno, como o efeito da melhoria injeção alquímica (Tormenta20, p. 165).`,
        id_deuses:[14],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 218,
        nome: 'Navegador Sagrado',
        descricao:
          `Você se torna treinado em Pilotagem (se já for treinado, em vez disso recebe +2 nessa perícia) e, enquanto estiver em uma embarcação aquática, suas magias divinas custam –1 PM.`,
        id_deuses:[13],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 219,
        nome: 'Nimb',
        descricao:
          `<p><b>Nimb.</b> Você é Nimb, ou não. Você pode gastar uma ação padrão e 2 PM para gerar uma habilidade única. Para isso, role 1d6 duas vezes, uma para Área/Alvo e outra para Efeito. </p>
          <p>
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
        nome: 'O dobro ou nada',
        descricao:
          `Quando usa uma habilidade com um custo em PM, você pode pagar o dobro desse custo. Se fizer isso, a CD dessa habilidade aumenta em +5. Se pelo menos um alvo passar no teste de resistência, você fica alquebrado.`,
        id_deuses:[5, 12],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 221,
        nome: 'O Futuro que vier disso',
        descricao:
          `Quando faz um teste, você pode rolar um dado à sua escolha (entre 1d4 e 1d20) e somar o resultado a este teste. Quando você faz isso, o mestre recebe um dado do mesmo tipo que ele pode gastar para aplicar como uma penalidade em um de seus testes até o fim da próxima sessão. Você não pode usar este poder novamente até que o mestre use o dado que ele recebeu.`,
        id_deuses:[17],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 222,
        nome: 'O Sol que nos Aquece',
        descricao:
          `Você pode gastar uma ação padrão e 3 PM para intensificar a luz solar em uma esfera de 6m de raio em alcance médio. Nessa área, habilidades mágicas de fogo e relacionadas à plantas (como Controlar Plantas) custam –1 PM e criaturas com sensibilidade a luz sofrem o dobro da penalidade por ficarem ofuscadas. Você só pode usar este poder se estiver sob a luz do sol natural. `,
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
          `Uma vez por rodada, você pode gastar 2 PM para se teleportar para um espaço desocupado em alcance curto. Se tanto você quanto o espaço de destino estiverem sob qualquer tipo de escuridão, o custo deste poder é reduzido em –1 PM. `,
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
          `Você recebe +2 em Intuição e se torna imune a magias de ilusão.`,
        id_deuses:[15],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 226,
        nome: 'Pilar de Heredrimm',
        descricao:
          `Você pode gastar 2 PM receber +2 na Defesa e redução de dano 5 até o fim da cena ou até encerrar este poder (uma ação livre). Enquanto este efeito estiver ativo, seu deslocamento é reduzido à metade e você não pode correr ou fazer investidas.`,
        id_deuses:[7],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 227,
        nome: 'Poder do Vínculo',
        descricao:
          `Você pode gastar uma ação de movimento e uma quantidade de PM limitada ao círculo de magias a que você tem acesso1 PM (e +1 pm para cada círculo de magia que for capaz de conjurar) e tocar em uma criatura capaz de conjurar magias. O custo em PMs da próxima magia que aquela criatura lançar é reduzido numa quantidade igual aos PMs que você gastou.`,
        id_deuses:[20],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 228,
        nome: 'Poder Sem Limites',
        descricao:
          `Todos os seus limites de PM para habilidades aumentam em +2.`,
        id_deuses:[6],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 229,
        nome: 'Portal Vivo',
        descricao:
          `Você pode gastar uma ação completa e 2 PM para criar um enxame de insetos rubros em um ponto a sua escolha em alcance curto e com duração sustentada. O enxame tem tamanho Médio e pode passar pelo espaço de outras criaturas. Uma vez por rodada, você pode gastar uma ação de movimento para mover o enxame 9m. No final do seu turno, o enxame causa 2d6 pontos de dano de ácido a qualquer criatura no espaço que ele estiver ocupando. Você pode aprender Enxame Rubro de Ichabod como uma magia divina. Se fizer isso, o custo dela diminui em –1 PM. <i><b>e</i></b>`,
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
          `Suas magias que causam dano de fogo e que têm um teste de resistência recebem o seguinte aprimoramento: +1 PM: Criaturas que falhem na resistência ficam em chamas. Elas também ficam lentas até apagarem as chamas.`,
        id_deuses:[4],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 231,
        nome: 'Quebrar Encanto',
        descricao:
          `Você recebe +2 em testes de ataque para quebrar. Além disso, quando vence um teste oposto para quebrar um item, você pode gastar 2 PM. Se fizer isso, gera um efeito semelhante a Dissipar Magia sobre o item e sobre seu usuário, usando o resultado do seu teste de quebrar no lugar do teste de Misticismo. `,
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
          `Ao escolher este poder, role um d20 e anote o resultado. Uma vez por rodada, quando uma criatura em alcance curto faz um teste, você pode gastar 1 PM para trocar o valor do dado desse teste pelo valor anotado (o valor do dado passa a ser o novo valor anotado).`,
        id_deuses:[18],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 233,
        nome: 'Remorso do Belicista',
        descricao:
          `Uma vez por rodada, quando sofre dano de um inimigo, você pode gastar 1 PM. Se fizer isso, até o fim da cena aquela criatura sofre uma penalidade cumulativa de –2 em testes de ataque e rolagens de dano. Mental.`,
        id_deuses:[10],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 234,
        nome: 'Resplendor Divino',
        descricao:
          `Você pode gastar 2 PM para gerar uma aura de luz solar com 9m de raio e duração até o fim da cena. Além de sofrer os efeitos de exposição à luz solar, criaturas dentro da aura perdem toda camuflagem por escuridão, incluindo mágica. `,
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
          `O primeiro ataque que você acertar numa rodada causa +1d6 pontos de dano de luz. Este dano extra é multiplicado em um acerto crítico.`,
        id_deuses:[9],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 236,
        nome: 'Só os Loucos Sabem',
        descricao:
          `No começo de cada dia, determine duas perícias aleatoriamente usando a Tabela 6-6: Desafios de Buscas (Tormenta20, p. 279). Até o fim do dia, você se torna treinado nas perícias determinadas ou, se já for treinado em alguma delas, recebe +2 naquela perícia.`,
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
          `Você pode pagar 2 PM para cobrir você ou um aliado adjacente em trevas protetivas. O alvo recebe 2d12 PV temporários. Enquanto esses PV durarem, ele também tem camuflagem leve por escuridão. `,
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
          `Você está sempre sob o efeito básico da magia Caminhos da Natureza. Se aprender essa magia, o custo dela diminui em –1 PM. `,
        id_deuses:[2],
        e_poder_magico: true,
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 243,
        nome: 'Ushult',
        descricao:
          `Escolha um de seus aliados como seu Ushult. Enquanto estiverem em alcance curto um do outro, vocês recebem +1 em testes de perícia e rolagens de dano (esse bônus dobra se o Ushult também for duyshidakk). Você pode trocar seu Ushult uma vez por aventura.`,
        id_deuses:[17],
        referencias: Referencia.DEUSES,
        paginas: '',
        tipo: TipoPoder.CONCEDIDO,
      },
      {
        id: 244,
        nome: 'Vitória a Qualquer Custo',
        descricao:
          `<p>Se estiver com 0 PM, você pode gastar seus pontos de vida no lugar de mana, à taxa de 3 PV por 1 PM. Pontos de vida gastos dessa forma só podem ser recuperados com descanso.</p>
          <p>Quando faz um teste de ataque, de resistência ou de Guerra, você pode gastar 2 PM para rolar novamente este teste. Você pode usar este efeito várias vezes no mesmo teste, mas a cada novo uso seu custo aumenta em +1 PM.</p>`,
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
        instrucao: ['this.personagem.adicionaNumeroPericiasLivres(1)', OpcoesSelecao.RADIO, `[{chave: 'Duas Perícias', value: 'this.personagem.adicionaNumeroPericiasLivres(1)'}, {chave: 'Uma Perícia e um Poder', value: "this.personagem.adicionarEspacoSelecaoPoder('Escolha um poder geral (Versátil)')"}]`],
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
          'this.personagem.adicionaSentido(Sentido.VISAO_ESCURO)', 
          `this.personagem.atualizaBonusCondicionalPericia('${Chave.PERICIA_PERCEPCAO}', [{origem: 'Conhecimento das Rochas', bonus: 2, condicao:['SUBTERRÂNEO'], ativo: false}]);`,
          `this.personagem.atualizaBonusCondicionalPericia('${Chave.PERICIA_SOBREVIVENCIA}', [{origem: 'Conhecimento das Rochas', bonus: 2, condicao:['SUBTERRÂNEO'], ativo: false}]);`],
        referencias: Referencia.BASICO,
        paginas: '20'
      },
      {
        id: 247,
        nome: `Devagar e Sempre`,
        descricao: `Seu deslocamento é 6m (em vez de 9m). Porém, seu deslocamento não é reduzido por uso de armadura ou excesso de carga.`,
        tipo: TipoPoder.HABILIDADE_RACA,
        raca: {id:2},
        instrucao: ['this.personagem.deslocamentos[0].valor = 6;',`this.personagem.imunidades.push(new Imunidade('${Chave.CONDICAO_SOBRECARREGADO}', 'Condição'));`],
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
        ativacao: [`this.personagem.defesa.defesa_bonus.push({bonus:2, descricao:'Armadura de Allihanna', duracao: 'Cena'});`, `this.personagem.defesa.atualizaDefesa(this.personagem);`],
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
      }
    ];
  }
}
