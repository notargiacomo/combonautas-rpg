import { Injectable } from '@angular/core';

import { Regra } from '../model/regra';

@Injectable({
  providedIn: 'root',
})
export class RegraData {
  private regras: Regra[] = [];

  get(): any[] {
    return this.regras;
  }

  constructor() {
    this.regras = [
      {
        id: 1,
        nome: 'ATRIBUTOS BÁSICOS',
        descricao: `<p>Todo personagem tem seis atributos, que definem suas competências básicas: Força, Destreza, Constituição, Inteligência, Sabedoria e Carisma. Atributos são medidos numericamente. Um valor 0 representa a média humana. Valores 1 ou 2 estão acima da média — o lenhador da vila, acostumado a trabalho pesado, pode ter Força nesse intervalo. Valores 3 ou 4 representam pessoas extraordinárias — o conselheiro real, que leu todos os livros da biblioteca do castelo, pode ter Inteligência nessa faixa. Valores 5 ou mais representam indivíduos heroicos. Já valores negativos estão abaixo da média. Uma criança pode ter Força –1, enquanto um ancião de saúde muito frágil pode ter Constituição –2. Todo personagem tem seis atributos, que definem suas competências básicas: Força, Destreza, Constituição, Inteligência, Sabedoria e Carisma. Atributos são medidos numericamente. Um valor 0 representa a média humana. Valores 1 ou 2 estão acima da média — o lenhador da vila, acostumado a trabalho pesado, pode ter Força nesse intervalo. Valores 3 ou 4 representam pessoas extraordinárias — o conselheiro real, que leu todos os livros da biblioteca do castelo, pode ter Inteligência nessa faixa. Valores 5 ou mais representam indivíduos heroicos. Já valores negativos estão abaixo da média. Uma criança pode ter Força –1, enquanto um ancião de saúde muito frágil pode ter Constituição –2.</p>
        <h5><b>Força • For</b></h5>
        <p>Seu poder muscular. A Força é aplicada em testes de Atletismo e Luta; rolagens de dano corpo a corpo ou com armas de arremesso, e testes de Força para levantar peso e atos similares.</p>
        <h5><b>Destreza • Des</b></h5>
        <p>Sua agilidade, reflexos, equilíbrio e coordenação motora. A Destreza é aplicada na Defesa e em testes de Acrobacia, Cavalgar, Furtividade, Iniciativa, Ladinagem, Pilotagem, Pontaria e Reflexos.</p>
        <h5><b>Constituição • Con</b></h5>
        <p>Sua saúde e vigor. A Constituição é aplicada aos pontos de vida iniciais e por nível e em testes de Fortitude. Se a Constituição muda, seus pontos de vida aumentam ou diminuem retroativamente de acordo.</p>
        <h5><b>Inteligência • Int</b></h5>
        <p>Sua capacidade de raciocínio, memória e educação. A Inteligência é aplicada em testes de Conhecimento, Guerra, Investigação, Misticismo, Nobreza e Ofício. Além disso, se sua Inteligência for positiva, você recebe um número de perícias treinadas igual ao valor dela (não precisam ser da sua classe).</p>
        <h5><b>Sabedoria • Sab</b></h5>
        <p>Sua observação, ponderação e determinação. A Sabedoria é aplicada em testes de Cura, Intuição, Percepção, Religião, Sobrevivência e Vontade.</p>
        <h5><b>Carisma • Car</b></h5>
        <p>Sua força de personalidade e capacidade de persuasão, além de uma mistura de simpatia e beleza. O Carisma é aplicado em testes de Adestramento, Atuação, Diplomacia, Enganação, Intimidação e Jogatina</p>`,
        referencia: `Tormenta 20 Jogo do Ano - página 17`
      },
      {
        id: 2,
        nome: 'DEFININDO SEUS ATRIBUTOS',
        descricao: `
        <p>Há duas maneiras de definir seus atributos: com pontos ou com rolagens. Escolha a que preferir.</p>
        <p><b>Pontos. </b>Você começa com todos os atributos em 0 e recebe 10 pontos para aumentá-los. O custo para aumentar cada atributo está descrito na tabela abaixo. Você também pode reduzir um atributo para –1 para receber 1 ponto adicional.</p>
        <p><b>Rolagens. </b>Role 4d6, descarte o menor e some os outros três. Anote o resultado. Repita esse processo cinco vezes, até obter um total de seis números. Então, converta esses números em atributos conforme a tabela abaixo. Por exemplo, se você rolar 13, 8, 15, 18, 10 e 9, seus atributos serão 1, –1, 2, 4, 0 e –1. Distribua esses valores entre os seis atributos como quiser. Caso seus atributos não somem pelo menos 6, role novamente o menor valor. Repita esse processo até seus atributos somarem 6 ou mais.</p>
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
        <meta charset="UTF-8">
        <style>
          body {
            background: #faf7f2 !importante;
            font-family: "Georgia", serif !importante;
            display: flex !importante;
            justify-content: center !importante;
            padding: 40px !importante;
          }

          table {
            border-collapse: collapse !importante;
            background: #fffdf9 !importante;
            box-shadow: 0 0 5px rgba(0,0,0,0.2) !importante;
            border: 2px solid #a00000 !importante;
          }

          caption {
            font-weight: bold !importante;
            text-transform: uppercase !importante;
            color: #a00000 !importante;
            font-size: 1.1em !importante;
            border-top: 2px solid #a00000 !importante;
            border-bottom: 2px solid #a00000 !importante;
            padding: 6px 0 !importante;
            letter-spacing: 0.5px !importante;
          }

          th, td {
            border: 1px solid #d8c5b0 !importante;
            padding: 6px 14px !importante;
            text-align: center !importante;
          }

          th {
            background: #efe4d4 !importante;
            color: #3b1e0c !importante;
            font-weight: bold !importante;
          }

          td {
            color: #2e1b0c !importante;
          }

          tr:nth-child(even) td {
            background: #f8f3ec !importante;
          }
        </style>
        </head>
        <body>

        <table>
          <caption><b>Tabela 1-1: Atributos</b></caption>
          <thead>
            <tr>
              <th>Atributo</th>
              <th>Custo</th>
              <th>Rolagem</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-2</td>
              <td>—</td>
              <td>7 ou menos</td>
            </tr>
            <tr>
              <td>-1</td>
              <td>-1 ponto</td>
              <td>8–9</td>
            </tr>
            <tr>
              <td>0</td>
              <td>0 ponto</td>
              <td>10–11</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1 ponto</td>
              <td>12–13</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2 pontos</td>
              <td>14–15</td>
            </tr>
            <tr>
              <td>3</td>
              <td>4 pontos</td>
              <td>16–17</td>
            </tr>
            <tr>
              <td>4</td>
              <td>7 pontos</td>
              <td>18</td>
            </tr>
          </tbody>
        </table>

        </body>
        </html>`,
        referencia: `Tormenta 20 Jogo do Ano - página 17`
      },
      {
        id: 3,
        nome: 'ATRIBUTOS MÍNIMOS',
        descricao: `
        <p>Um valor menor que –5 em um atributo gera um efeito: For ou Des (paralisado), Con (morre), Int ou Sab (inconsciente), Car (torna-se um NPC). Isso ignora imunidades.</p>`,
        referencia: `Tormenta 20 Jogo do Ano - página 17`
      },
      {
        id: 4,
        nome: 'RAÇAS',
        descricao: `<p>As raças de Arton são muito variadas entre si. Na maior parte do mundo civilizado um personagem não será hostilizado por pertencer a qualquer raça. Contudo, alguns antros de vilania podem nutrir verdadeiro ódio por determinadas raças — a Supremacia Purista, por exemplo, despreza não humanos. A exceção a isso são os lefou. Tocados pela Tormenta, a maior ameaça deste mundo, os lefou atraem medo em todos os reinos.</p>
        <p>As raças de Arton são muito variadas entre si. Na maior parte do mundo civilizado um personagem não será hostilizado por pertencer a qualquer raça. Contudo, alguns antros de vilania podem nutrir verdadeiro ódio por determinadas raças — a Supremacia Purista, por exemplo, despreza não humanos. A exceção a isso são os lefou. Tocados pela Tormenta, a maior ameaça deste mundo, os lefou atraem medo em todos os reinos.</p>
        <p>Algumas raças são mais numerosas ou têm papel predominante na história de Arton — humanos, anões, dahllan, elfos, goblins, lefou, minotauros e qareen. O povo do continente está acostumado a ver membros dessas raças. Uma vila humana pode ter um ferreiro anão, por exemplo, e ninguém ficará surpreso.</p>
        <p>Mas essas não são as únicas raças de Arton. Dentre toda a variedade dos seres deste mundo, há um grupo de raças mais raras: golens, hynne, kliren, medusas, osteon, sereias, sílfides, suraggel e trogs. A maioria das pessoas nunca viu um membro dessas raças. Pode considerar que são míticas, que foram extintas ou que jamais pisaram no continente. Um membro dessas raças pode atrair curiosidade, espanto ou até medo por onde passar. Em termos de jogo, essas raças possuem mecânicas mais avançadas e são indicadas para jogadores veteranos.</p>
        <p>Quase todas as grandes sagas artonianas são sobre grupos de diferentes raças. Aventureiros aprendem a ver o melhor em cada indivíduo e, ao longo de uma vida de viagens e batalhas, acostumam-se até mesmo ao mais exótico companheiro.</p>
        <h5><b>Escolhendo sua Raça</b></h5>
        <p>Após definir seus atributos, é hora de escolher sua raça. Você pode escolher qualquer raça, mas dependendo do seu conceito de personagem, algumas são mais indicadas que outras.</p>
        <p>Se você quiser um personagem bom de briga, por exemplo, minotauro é uma boa escolha. Se gosta de lançar magias, vá de elfo. Já se prefere resolver seus problemas na lábia, escolha qareen. Da mesma forma, algumas raças não são indicadas para certos conceitos. Um trog estudioso provavelmente não será muito competente, assim como um hynne brigão. Humanos são um caso especial — são a raça mais versátil, capazes de se destacar em qualquer carreira. Se estiver em dúvida, vá de humano.</p>
        <p>Como dito acima, todas as raças funcionam para todos os tipos de personagem, e fazer combinações inusitadas pode ser muito divertido. Mas, se você for um jogador iniciante, prefira uma raça que forneça um bônus no atributo principal de sua classe.</p>
        <p><h5><b>Características das Raças</b></h5></p>
        <p><b>Modificadores de Atributo.</b> Sua raça modifica seus atributos, podendo aumentá-los acima de 4 ou diminuí-los abaixo de –2.</p>
        <p><b>Habilidades de Raça.</b> Você possui todas as habilidades de sua raça. As regras para usar habilidades são explicadas no Capítulo 5: Jogando.</p>`,
        referencia: `Tormenta 20 Jogo do Ano - página 18`
      }
    ];
  }
}
