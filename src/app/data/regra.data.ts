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
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 17`,
      },
      {
        id: 2,
        nome: 'DEFININDO SEUS ATRIBUTOS',
        descricao: `
        <p>Há duas maneiras de definir seus atributos: com pontos ou com rolagens. Escolha a que preferir.</p>
        <p><b>Pontos. </b>Você começa com todos os atributos em 0 e recebe 10 pontos para aumentá-los. O custo para aumentar cada atributo está descrito na tabela abaixo. Você também pode reduzir um atributo para –1 para receber 1 ponto adicional.</p>
        <p><b>Rolagens. </b>Role 4d6, descarte o menor e some os outros três. Anote o resultado. Repita esse processo cinco vezes, até obter um total de seis números. Então, converta esses números em atributos conforme a tabela abaixo. Por exemplo, se você rolar 13, 8, 15, 18, 10 e 9, seus atributos serão 1, –1, 2, 4, 0 e –1. Distribua esses valores entre os seis atributos como quiser. Caso seus atributos não somem pelo menos 6, role novamente o menor valor. Repita esse processo até seus atributos somarem 6 ou mais.</p>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 1-1: Atributos</th>
            </tr>
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
        </table>`,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 17`,
      },
      {
        id: 3,
        nome: 'ATRIBUTOS MÍNIMOS',
        descricao: `
        <p>Um valor menor que –5 em um atributo gera um efeito: For ou Des (paralisado), Con (morre), Int ou Sab (inconsciente), Car (torna-se um NPC). Isso ignora imunidades.</p>`,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 17`,
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
        <p><b>Habilidades de Raça.</b> Você possui todas as habilidades de sua raça. As regras para usar habilidades são explicadas no Capítulo 5: Jogando.</p>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 1-2: Raças</th>
            </tr>
            <tr>
              <th>Raça</th>
              <th>Modificadores de Atributo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Humano</td><td>+1 em três atributos diferentes</td></tr>
            <tr><td>Anão</td><td>Con +3, Des –1, Des –1</td></tr>
            <tr><td>Dahllan</td><td>Sab +2, Des +1, Int –1</td></tr>
            <tr><td>Elfo</td><td>Int +2, Des +1, Con –1</td></tr>
            <tr><td>Goblin</td><td>Des +2, Int +1, Car –1</td></tr>
            <tr><td>Lefou</td><td>+1 em três atributos diferentes (exceto Car), Car –1</td></tr>
            <tr><td>Minotauro</td><td>For +2, Con +1, Sab –1</td></tr>
            <tr><td>Qareen</td><td>Car +2, Int +1, Sab –1</td></tr>
            <tr><td>Golem</td><td>For +2, Con +1, Sab –1</td></tr>
            <tr><td>Hynne</td><td>Des +2, Car +1, For –1</td></tr>
            <tr><td>Kliren</td><td>Int +2, Car +1, Con –1</td></tr>
            <tr><td>Medusa</td><td>Des +2, Car +1, For –1</td></tr>
            <tr><td>Osteon</td><td>+1 em três atributos diferentes</td></tr>
            <tr><td>Seria/Tritão</td><td>+1 em três atributos diferentes</td></tr>
            <tr><td>Sílﬁde</td><td>Car +2, Des +1, For –1</td></tr>
            <tr><td>Suraggel</td><td>Sab +2, Int +1 (aggelus) ou Des +2, Int +1 (sulfure)</td></tr>
            <tr><td>Trog</td><td>Con +2, For +1, Int –1</td></tr>
          </tbody>
        </table>`,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 18`,
      },
      {
        id: 5,
        nome: 'CLASSES',
        descricao: `<p>Uma classe é como uma profissão. Ela representa a forma que você escolheu para enfrentar os perigos do mundo e perseguir seus objetivos — com armas, perícias ou magias.</p>
        <h5><p><b>ESCOLHENDO SUA CLASSE</b></p></h5>
        <p>A classe é a característica mais importante de um personagem e define que papel você terá no grupo de aventureiros. Tormenta20 contém quatorze classes. A tabela a seguir traz um resumo das classes, com uma descrição curta, sugestão de atributo principal, e PV, PM e perícias iniciais.</p>
        <h5><p><b>CARACTERÍSTICA DAS CLASSES</b></p></h5>
        <p><b>Pontos de Vida e Mana.</b> Sua classe define seus pontos de vida e pontos de mana. Veja mais sobre essas características na página 106.</p>
        <p><b>Perícias.</b> Suas perícias treinadas. Veja mais sobre isso no Capítulo 2.</p>
        <p><b>Proficiências.</b> Os tipos de armas e armaduras que você sabe usar (além de armas simples e armaduras leves, que todos os personagens sabem usar). Veja mais sobre isso nas páginas 142 e 152.</p>
        <table>
          <thead>
            <tr>
              <th colspan="6">Tabela 1-3: Classes</th>
            </tr>
            <tr>
              <th>Classe</th>
              <th>Descrição</th>
              <th>Atributo</th>
              <th>PV¹</th>
              <th>PM</th>
              <th>Perícias²</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Arcanista</td>
              <td>Um conjurador de magias arcanas, por meio de estudo, em foco ou dom natural.</td>
              <td>Inteligência ou Carisma</td>
              <td>8</td>
              <td>6</td>
              <td>Misticismo e Vontade, mais 2</td>
            </tr>
            <tr>
              <td>Bárbaro</td>
              <td>Um combatente primitivo, que usa fúria e instintos para destruir seus inimigos.</td>
              <td>Força</td>
              <td>24</td>
              <td>3</td>
              <td>Fortitude e Luta, mais 4</td>
            </tr>
            <tr>
              <td>Bardo</td>
              <td>Um artista errante faz-tudo versátil, sempre com a solução certa para cada ocasião.</td>
              <td>Carisma</td>
              <td>12</td>
              <td>4</td>
              <td>Atuação e Reflexos, mais 4</td>
            </tr>
            <tr>
              <td>Bucaneiro</td>
              <td>Um navegador inconsequente e galante, sempre em busca de ouro e emoção.</td>
              <td>Destreza</td>
              <td>16</td>
              <td>3</td>
              <td>Luta ou Pontaria, Reflexos, mais 4</td>
            </tr>
            <tr>
              <td>Caçador</td>
              <td>Um exterminador de monstros e mestre da sobrevivência em áreas selvagens.</td>
              <td>Força ou Destreza</td>
              <td>20</td>
              <td>3</td>
              <td>Luta ou Pontaria, Sobrevivência, mais 2</td>
            </tr>
            <tr>
              <td>Cavaleiro</td>
              <td>Um combatente honrado, especializado em suportar dano e proteger os outros.</td>
              <td>Força</td>
              <td>20</td>
              <td>3</td>
              <td>Fortitude e Luta, mais 2</td>
            </tr>
            <tr>
              <td>Clérigo</td>
              <td>Servo de um dos deuses de Arton, usa poderes divinos para defender aliados e punir inimigos.</td>
              <td>Sabedoria</td>
              <td>16</td>
              <td>5</td>
              <td>Religião e Vontade, mais 2</td>
            </tr>
            <tr>
              <td>Druida</td>
              <td>Um devoto da natureza e deuses das forças selvagens, naturais ou monstruosas.</td>
              <td>Sabedoria</td>
              <td>16</td>
              <td>5</td>
              <td>Sobrevivência e Vontade, mais 4</td>
            </tr>
            <tr>
              <td>Guerreiro</td>
              <td>O especialista supremo em técnicas de combate com armas.</td>
              <td>Força ou Destreza</td>
              <td>20</td>
              <td>3</td>
              <td>Luta ou Pontaria, Fortitude, mais 2</td>
            </tr>
            <tr>
              <td>Inventor</td>
              <td>Um ferreiro, alquimista ou engenheiro, especializado em fabricar e usar itens.</td>
              <td>Inteligência</td>
              <td>12</td>
              <td>4</td>
              <td>Ofício e Vontade, mais 4</td>
            </tr>
            <tr>
              <td>Ladino</td>
              <td>Aventureiro cheio de truques, confiante, mais em agilidade e esperteza que em força bruta.</td>
              <td>Destreza</td>
              <td>12</td>
              <td>4</td>
              <td>Ladinagem e Reflexos, mais 4</td>
            </tr>
            <tr>
              <td>Lutador</td>
              <td>Um especialista em combate desarmado rústico e duro.</td>
              <td>Força</td>
              <td>20</td>
              <td>3</td>
              <td>Fortitude e Luta, mais 4</td>
            </tr>
            <tr>
              <td>Nobre</td>
              <td>Um membro da alta sociedade cujas principais armas são sua lábia e status.</td>
              <td>Carisma</td>
              <td>16</td>
              <td>4</td>
              <td>Diplomacia ou Intimidação, Vontade, mais 4</td>
            </tr>
            <tr>
              <td>Paladino</td>
              <td>Um campeão do bem e da ordem, o perfeito soldado dos deuses.</td>
              <td>Força e Carisma</td>
              <td>20</td>
              <td>3</td>
              <td>Luta e Vontade, mais 2</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="6">
                ¹Mais sua Constituição. ²Mais sua Inteligência, se positiva. Perícias por Inteligência não precisam estar na lista da classe.
              </td>
            </tr>
          </tfoot>
        </table>`,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 32`,
      },
      {
        id: 6,
        nome: 'HABILIDADES DE CLASSE',
        descricao: `<p>Você começa o jogo com todas as habilidades do 1º nível da sua classe. As regras para usar habilidades são explicadas no Capítulo 5: Jogando.</p>
        <p><b>Poderes.</b> Todas as classes possuem uma habilidade “Poder” (Poder de Arcanista, Poder de Bárbaro, Poder de Bardo...) que permite que você escolha um poder de uma lista. Alguns poderes têm pré-requisitos. Para escolhê-los e usá-los, você deve possuir todos os requerimentos mencionados. Você pode escolher um poder no nível em que atinge seus pré-requisitos. A menos que especificado o contrário, você não pode escolher um mesmo poder mais de uma vez. Você sempre pode substituir um poder de classe por um poder geral (veja no Capítulo 2). Para outros propósitos, poderes funcionam como habilidades. Poderes que aumentam o custo em PM de uma magia são poderes de aprimoramento (veja a página 131).</p>`,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 33`,
      },
      {
        id: 7,
        nome: 'NÍVEL DE PERSONAGEM',
        descricao: `<p>O nível de um personagem representa sua experiência e poder — quanto mais alto, mais poderoso ele é. Conforme vivem aventuras e vencem desafios, personagens ganham pontos de experiência (XP). Acumulando certo número de pontos, sobem de nível. A Tabela 1-4: Níveis de Personagem indica quantos pontos de experiência você deve acumular para chegar a cada nível.</p>
        <p>Você começa no 1º nível e com 0 XP. Isso representa um herói novato, recém começando sua carreira. Perigos mundanos, como enfrentar um bandido de estrada ou um lobo faminto, serão um desafio para você. Porém, à medida que se aventura e sobe de nível, você se torna capaz de enfrentar ameaças cada vez maiores. Veja mais sobre isso no quadro “Patamares de Jogo”, na página 35.</p>
        <h5><p><b>SUBINDO DE NÍVEL</b></p></h5>
        <p>Quando acumula XP suficiente (conforme a tabela abaixo) você sobe de nível. Quando isso acontece, você ganha os três benefícios a seguir.</p>
        <p><b>1. Pontos de Vida e Mana.</b> Seus PV e PM aumentam de acordo com a sua classe. Some sua Constituição aos PV que ganha por nível (mas você sempre ganha pelo menos 1 PV ao subir de nível).</p>
        <p><b>2. Habilidades de Classe.</b> Você ganha todas as habilidades do nível alcançado. Consulte a tabela da sua classe para saber quais.</p>
        <p><b>3. Bônus em Perícias.</b> Seu bônus em perícias é igual à metade do seu nível. Assim, a cada nível par (2º, 4º, 6º etc.) ele aumenta em +1. Isso representa o fato de que heróis experientes se tornam mais capazes. Você usa o número antes da barra para perícias treinadas e o número depois da barra para perícias não treinadas. Veja mais sobre isso no Capítulo 2.</p>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 1-4: Níveis de Personagem</th>
            </tr>
            <tr>
              <th>Nível de Personagem</th>
              <th>Pontos de Experiência</th>
              <th>Bônus em Perícias</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1º</td><td>0</td><td>+2/+0</td></tr>
            <tr><td>2º</td><td>1.000</td><td>+3/+1</td></tr>
            <tr><td>3º</td><td>3.000</td><td>+4/+2</td></tr>
            <tr><td>4º</td><td>6.000</td><td>+4/+2</td></tr>
            <tr><td>5º</td><td>10.000</td><td>+5/+3</td></tr>
            <tr><td>6º</td><td>15.000</td><td>+5/+3</td></tr>
            <tr><td>7º</td><td>21.000</td><td>+6/+3</td></tr>
            <tr><td>8º</td><td>28.000</td><td>+6/+4</td></tr>
            <tr><td>9º</td><td>36.000</td><td>+7/+4</td></tr>
            <tr><td>10º</td><td>45.000</td><td>+8/+5</td></tr>
            <tr><td>11º</td><td>55.000</td><td>+9/+5</td></tr>
            <tr><td>12º</td><td>66.000</td><td>+10/+6</td></tr>
            <tr><td>13º</td><td>78.000</td><td>+11/+6</td></tr>
            <tr><td>14º</td><td>91.000</td><td>+12/+7</td></tr>
            <tr><td>15º</td><td>105.000</td><td>+13/+7</td></tr>
            <tr><td>16º</td><td>120.000</td><td>+14/+8</td></tr>
            <tr><td>17º</td><td>136.000</td><td>+14/+8</td></tr>
            <tr><td>18º</td><td>153.000</td><td>+15/+9</td></tr>
            <tr><td>19º</td><td>171.000</td><td>+15/+9</td></tr>
            <tr><td>20º</td><td>190.000</td><td>+16/+10</td></tr>
          </tbody>
        </table>`,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 35`,
      },
      {
        id: 8,
        nome: 'MULTICLASSE',
        descricao: `<p>Quando sobe de nível, você pode escolher outra classe. Essa opção é conhecida como multiclasse e fornece mais versatilidade, em troca de poder bruto.</p>
        <p><I>O qareen Zaled Rayeder, um arcanista de 3º nível, encontra um propósito para seus dons mágicos selvagens na ordem de Khalmyr, o Deus da Justiça. Ao subir para o 4º nível, escolhe um nível de paladino, tornando-se um arcanista 3/paladino 1. Zaled terá as habilidades de um arcanista de 3º nível e de um paladino de 1º nível.</I></p>
        <h5><p><b>SUBINDO DE NÍVEL</b></p></h5>
        <p>Quando acumula XP suficiente (conforme a tabela abaixo) você sobe de nível. Quando isso acontece, você ganha os três benefícios a seguir.</p>
        <p><b>Pontos de Vida.</b> Quando você ganha o primeiro nível em uma nova classe, ganha os PV de um nível subsequente, não do primeiro. Zaled ganha 5 PV pelo primeiro nível de paladino, não 20.</p>
        <p><b>Pontos de Mana.</b> Some os PM fornecidos por cada classe para determinar seu montante total.</p>
        <p><b>Perícias e Proficiências.</b> Quando você ganha o primeiro nível em uma nova classe, não ganha as perícias treinadas ou proficiências da nova classe.</p>
        <p><b>Níveis de Classe e de Personagem.</b> Nível de classe são níveis numa classe específica. Já seu nível de personagem é a soma dos níveis de todas as suas classes. Zaled é um arcanista de 3º nível, um paladino de 1º nível e um personagem de 4º nível (a soma dos dois).</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 35`,
      },
      {
        id: 9,
        nome: 'PATAMARES DE JOGO',
        descricao: `<p>As classificações abaixo fornecem uma noção da escala de poder dos personagens e afetam certas habilidades.</p>
        <p><b>• Iniciante (1º ao 4º nível).</b> Aventureiro novato, envolvido em missões locais, como proteger vilas do ataque de bandidos e escoltar caravanas.</p>
        <p><b>• Veterano (5º ao 10º nível).</b> Neste patamar, o herói presta serviços importantes a nobres e líderes de guildas.</p>
        <p><b>• Campeão (11º ao 16º nível). </b> Já famoso por suas façanhas, o aventureiro trabalha para monarcas e enfrenta grandes vilões e monstros terríveis.</p>
        <p><b>• Lenda (17º ao 20º nível).</b> Entre os mais poderosos de Arton, o herói lida com perigos que ameaçam todo o mundo... Ou mesmo toda a realidade!</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 35`,
      },
      {
        id: 10,
        nome: 'FAMILIARES ARCANOS',
        descricao: `<p>Um familiar é uma criatura mágica. Em termos de jogo, é um parceiro especial com o qual você pode se comunicar telepaticamente em alcance longo. Ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de sua espécie pode fazer. Se ele morrer, você fica atordoado por uma rodada. Você pode invocar um novo familiar com um ritual que exige um dia e T$ 100 em ingredientes.</p>
        <p><b>• Borboleta. </b> A CD dos testes de Vontade para resistir a suas magias aumenta em +1.</p>
        <p><b>• Cobra. </b> A CD dos testes de Fortitude para resistir a suas magias aumenta em +1.</p>
        <p><b>• Coruja. </b> Quando lança uma magia com alcance de toque, você pode pagar 1 PM para aumentar seu alcance para curto.</p>
        <p><b>• Corvo. </b> Quando faz um teste de Misticismo ou Vontade, você pode pagar 1 PM para rolar dois dados e usar o melhor resultado.</p>
        <p><b>• Falcão. </b> Você não pode ser surpreendido e nunca fica desprevenido.</p>
        <p><b>• Gato. </b> Você recebe visão no escuro e +2 em Furtividade.</p>
        <p><b>• Lagarto. </b> A CD dos testes de Reflexos para resistir a suas magias aumenta em +1.</p>
        <p><b>• Rato. </b> Você pode usar seu atributo-chave em Fortitude, no lugar de Constituição.</p>
        <p><b>• Sapo. </b>  Você soma seu atributo-chave ao seu total de pontos de vida (cumulativo).</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 38`,
      },
      {
        id: 11,
        nome: 'ANIMAIS TOTÊMICOS',
        descricao: `<p>A seguir está uma lista de animais venerados por tribos bárbaras de Arton.</p>
        <p><b>• Coruja. </b> A sábia coruja guia seus discípulos. Você pode lançar Orientação.</p>
        <p><b>• Corvo. </b>Um seguidor do corvo enxerga além do véu. Você pode lançar Visão Mística.</p>
        <p><b>• Falcão. </b>Sempre atento, o falcão permite que você lance Detectar Ameaças.</p>
        <p><b>• Grifo. </b>O mais veloz dos animais, o grifo permite que você lance Primor Atlético.</p>
        <p><b>• Lobo. </b>O lobo é feroz e letal. Você pode lançar Concentração de Combate.</p>
        <p><b>• Raposa. </b>A sagaz raposa nunca está onde se espera. Você pode lançar Imagem Espelhada.</p>
        <p><b>• Tartaruga. </b>A tartaruga protege os seus. Você pode lançar Armadura Arcana.</p>
        <p><b>• Urso. </b>O vigoroso urso permite que você lance Vitalidade Fantasma e possa usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um druida de seu nível.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 42`,
      },
      {
        id: 12,
        nome: 'MÚSICAS DE BARDO',
        descricao: `<p>Alguns poderes do bardo são Músicas. Esses poderes compartilham as seguintes regras.</p>
        <p>• Para ativar uma música, você precisa ser treinado em Atuação e empunhar um instrumento musical (veja a página 158)</p>
        <p>• Ativar uma música gasta uma ação padrão e 1 PM.</p>
        <p>• Efeitos de músicas têm alcance curto</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 45`,
      },
      {
        id: 13,
        nome: 'BRAVATAS',
        descricao: `<p>Audazes e imprudentes, bucaneiros têm o costume da bravata — a promessa pública de realizar uma façanha, às vezes atrelada a uma restrição, como “Navegarei até Galrasia com um barco furado!”. Todas as Bravatas compartilham as seguintes regras.</p>
        <p>• Uma Bravata deve envolver um desafio real. Em termos de jogo, deve ser uma ação com ND igual ou maior que o nível do bucaneiro.</p>
        <p>• Você só pode ter uma Bravata de cada tipo ativa por vez. Caso falhe em uma Bravata ou desista dela, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia.</p>
        <p>• Quando você cumpre uma Bravata, recebe um benefício que dura até o fim da aventura. De acordo com o mestre, caso isso aconteça perto do fim da aventura, o benefício pode se estender até a próxima.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 45`,
      },
      {
        id: 14,
        nome: 'ARMADILHAS',
        descricao: `<p>Alguns poderes do caçador são Armadilhas. Esses poderes compartilham as seguintes regras.</p>
        <p>• Preparar uma armadilha gasta uma ação completa e 3 PM.</p>
        <p>• Uma armadilha afeta uma área de 3m de lado adjacente a você e é acionada pela primeira criatura que entrar na área.</p>
        <p>• Uma criatura que o veja preparando a armadilha saberá que ela está lá. Uma criatura que não o veja preparando a armadilha pode encontrá-la se gastar uma ação padrão procurando e passar em um teste de Investigação (CD Sab).</p>
        <p>• É possível aplicar veneno a uma armadilha, como se ela fosse uma arma.</p>
        <p>Você não precisa de nenhum item para criar a armadilha, pois usa materiais naturais, como galhos e cipós. Porém, precisa estar em um ambiente propício, como uma floresta, um beco repleto de entulhos etc.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 51`,
      },
      {
        id: 15,
        nome: 'POSTURA DE COMBATE',
        descricao: `<p>Alguns poderes do cavaleiro são Posturas de Combate. Esses poderes compartilham as seguintes regras.</p>
        <p>• Assumir uma postura gasta uma ação de movimento e 2 PM.</p>
        <p>• Os efeitos de uma postura duram até o final da cena, a menos que sua descrição diga o contrário.</p>
        <p>• Você só pode manter uma postura por vez.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 54`,
      },
      {
        id: 16,
        nome: 'MISSAS',
        descricao: `<p>Alguns poderes do clérigo são Missas. Esses poderes compartilham as seguintes regras.</p>
        <p>• Rezar uma Missa exige uma hora e o gasto de materiais especiais (como velas, incensos, água benta...) no valor de T$ 25. Um mesmo celebrante pode aplicar mais de um poder de Missa na mesma celebração. Cada poder adicional aumenta o custo da Missa em T$ 25.</p>
        <p>• Uma Missa afeta um número máximo de pessoas igual a 1 + sua Sabedoria. Todas as pessoas precisam estar presentes durante toda a Missa.</p>
        <p>• Os efeitos de uma Missa duram um dia. Uma mesma criatura só pode receber os benefícios da mesma Missa uma vez por dia.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 58`,
      },
      {
        id: 17,
        nome: 'COMPANHEIRO ANIMAL',
        descricao: `<p>Um companheiro animal é um amigo valoroso e fiel. Você decide de qual espécie é seu companheiro. Vocês têm um vínculo mental, sendo capazes de entender um ao outro. Seu companheiro animal obedece a você, mesmo que isso arrisque a vida dele.</p>
        <p>Em termos de jogo, seu companheiro animal é um parceiro ajudante, assassino, atirador, combatente, fortão, guardião, perseguidor, ou uma montaria, do nível iniciante. No 7º nível ele muda para veterano e, no 15º nível, para mestre (se tiver mais de um tipo, todos mudam de nível). Se o companheiro animal morrer, você fica atordoado por uma rodada. Você pode invocar um novo companheiro após um dia inteiro de prece e meditação.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 62`,
      },
      {
        id: 18,
        nome: 'EFEITOS DO GOLPE PESSOAL',
        descricao: `
        <p><b>Amplo (+3 PM).</b> Seu ataque atinge todas as criaturas em alcance curto (incluindo aliados, mas não você mesmo). Faça um único teste de ataque e compare com a Defesa de cada criatura.</p>
        <p><b>Avanço (+1 PM).</b> Você pode percorrer até o seu deslocamento em linha reta antes de desferir o golpe.</p>
        <p><b>Atordoante (+2 PM).</b> Uma criatura que sofra dano do ataque fica atordoada por uma rodada (apenas uma vez por cena; Fortitude CD For anula).</p>
        <p><b>Brando (+0 PM).</b> Seu golpe causa dano não letal.</p>
        <p><b>Brutal (+1 PM).</b> Fornece um dado extra de dano do mesmo tipo.</p>
        <p><b>Carregado (+1 PM).</b> Você pode gastar uma ação padrão para energizar seu ataque. Se você fizer isso e atacar até a próxima rodada, seu ataque causa +2d8 pontos de dano.</p>
        <p><b>Conjurador (Custo da Magia + 1 PM).</b> Escolha uma magia de 1º ou 2º círculos que tenha como alvo uma criatura ou que afete uma área. Se acertar seu golpe, você lança a magia como uma ação livre, tendo como alvo a criatura atingida ou como centro de sua área o ponto atingido pelo ataque (atributo-chave é um mental a sua escolha). Considere que a mão da arma está livre para lançar esta magia. ✨</p>
        <p><b>Destruidor (+2 PM).</b> Aumenta o multiplicador de crítico em +1.</p>
        <p><b>Distante (+1 PM).</b> Aumenta o alcance em um passo (de corpo a corpo para curto, médio e longo). Outras características não mudam (um ataque corpo a corpo com alcance curto continua usando Luta e somando sua Força no dano).</p>
        <p><b>Elemental (+2 PM).</b> Causa +2d6 pontos de dano de ácido, eletricidade, fogo ou frio. Você pode escolher este efeito mais vezes para aumentar o dano em +2d6 (do mesmo tipo ou de outro), por +2 PM a cada vez. ✨</p>
        <p><b>Impactante (+1 PM).</b> Empurra o alvo 1,5m para cada 10 pontos de dano causado (arredondado para baixo). Por exemplo, 3m para 22 pontos de dano.</p>
        <p><b>Letal (+2 PM).</b> Aumenta a margem de ameaça em +2. Você pode escolher este efeito duas vezes para aumentar a margem de ameaça em +5.</p>
        <p><b>Penetrante (+1 PM). </b>Ignora 10 pontos de RD.</p>
        <p><b>Preciso (+1 PM). </b>Quando faz o teste de ataque, você rola dois dados e usa o melhor resultado.</p>
        <p><b>Qualquer Arma (+1 PM). </b>Você pode usar seu Golpe Pessoal com qualquer tipo de arma.</p>
        <p><b>Ricocheteante (+1 PM). </b>A arma volta pra você após o ataque. Só pode ser usado com armas de arremesso.</p>
        <p><b>Sequencial (+2 PM).</b> Seu golpe causa +1d6 pontos de dano. A cada vez que você acerta o golpe na mesma cena, esse bônus aumenta em um passo.</p>
        <p><b>Sifão (+2 PM).</b> Você recebe 1 PM temporário para cada 10 pontos da rolagem de dano. Você pode receber um máximo de PM temporários por cena igual ao seu nível e eles desaparecem no fim da cena.</p>
        <p><b>Teleguiado (+1 PM). </b>Ignora penalidades por camuflagem ou cobertura leves.</p>
        <p><b>Golpe de Abertura (–2 PM).</b> Seu golpe só pode ser usado em seu primeiro turno do combate.</p>
        <p><b>Lento (–2 PM).</b> Seu ataque exige uma ação completa para ser usado</p>
        <p><b>Perto da Morte (–2 PM).</b> O ataque só pode ser usado se você estiver com um quarto de seus PV ou menos.</p>
        <p><b>Sacrifício (–2 PM).</b> Sempre que usa seu Golpe Pessoal, você perde 10 PV.</p>
        <p><b>Truque Secreto (–2 PM).</b> Seu golpe só pode ser usado uma vez contra cada alvo por cena.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 66`,
      },
      {
        id: 19,
        nome: 'LIVRO DE FÓRMULAS',
        descricao: `<p>Quando adquire o poder Alquimista Iniciado, você recebe um livro de fórmulas. Uma “fórmula” é uma magia divina ou arcana (atributo-chave Inteligência) que serve para cumprir os pré-requisitos de fabricação de poções.</p>
        <p>Você começa com três fórmulas de 1º círculo. A cada nível além do 1º, aprende uma fórmula adicional. A partir do 6º nível, pode aprender fórmulas de 2º círculo e, se possuir o poder Mestre Alquimista, a cada quatro níveis (10º, 14º e 18º) pode aprender fórmulas de um círculo maior.</p>
        <p>Se não tiver seu livro de fórmulas, você não pode fabricar poções. Se perder seu livro, você pode preparar outro com uma semana de trabalho e o gasto de T$ 100.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 70`,
      },
      {
        id: 20,
        nome: 'JULGAMENTO DIVINO',
        descricao: `<p>Alguns poderes do paladino são Julgamentos Divinos. Esses poderes compartilham as seguintes regras.</p>
        <p>• Proferir um julgamento gasta uma ação de movimento, a menos que a descrição diga o contrário.</p>
        <p>• Julgamentos que não têm um efeito instantâneo duram até o fim da cena.</p>
        <p>• Uma mesma criatura pode ser alvo de vários julgamentos diferentes, mas efeitos do mesmo julgamento não se acumulam.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 83`,
      },
      {
        id: 21,
        nome: 'VIRTUDES PALADINESCAS',
        descricao: `<p>Este conjunto de poderes representa obediência veemente a um comportamento específico. Você recebe um bônus progressivo em seu total de pontos de mana de acordo com a quantidade de poderes desse tipo que possui: +1 PM para uma Virtude, +3 PM para duas, +6 PM para três, +10 PM para quatro e +15 PM para cinco Virtudes.</p>
        <p>Virtudes Paladinescas são poderosas, mas possuem uma contrapartida — você deve se comportar de acordo com quaisquer Virtudes que possuir. Um paladino caridoso, por exemplo, deve sempre ajudar os necessitados, enquanto um casto nunca pode cair em tentação. Não seguir uma Virtude Paladinesca que você possua conta como uma violação do Código do Herói. O mestre tem a palavra final sobre o que exatamente constitui uma violação.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 84`,
      },
      {
        id: 22,
        nome: 'MONTARIA SAGRADA',
        descricao: `<p>Um paladino de 5º nível pode receber uma montaria sagrada, designada pelos deuses. Este animal vai atuar como um fiel companheiro de batalhas. Normalmente será um cavalo de guerra para paladinos de tamanho Médio ou um pônei para Pequenos, mas suplementos futuros trarão outras opções de montarias.</p>
        <p>Para invocar sua montaria você gasta uma ação de movimento e 2 PM. Ela aparece com um brilho de luz dourada ao seu lado e fica até o fim da cena, quando desaparece de volta para o mundo divino de onde veio.</p>
        <p>Como opção para campanhas mais realistas, a montaria sagrada pode ser um animal mundano, em vez de invocado. Neste caso, você nunca precisa gastar uma ação ou PM para ter a montaria — que já estará com você. Por outro lado, o animal pode não ser capaz de acompanhá-lo em todos os lugares (um cavalo, por exemplo, não conseguirá entrar num túnel apertado ou escalar uma montanha).</p>
        <p>Você e sua montaria têm um vínculo mental, sendo sempre capazes de entender um ao outro (não é preciso fazer testes de Adestramento). Ela fornece os benefícios de um parceiro veterano de seu tipo. No 11º nível, passa a fornecer os benefícios de um parceiro mestre. Veja a lista de parceiros na página 260. Uma montaria cumpre qualquer ordem sua, mesmo que signifique arriscar a vida. Se a montaria sagrada morrer, você fica atordoado por uma rodada. Você pode invocar uma nova montaria após um dia de prece e meditação.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 84`,
      },
      {
        id: 23,
        nome: 'ENGENHOCAS',
        descricao: `<p>Uma engenhoca é uma invenção que simula o efeito de uma magia. Exemplos incluem um canhão (simula o efeito da magia Bola de Fogo), uma arma de raios (Relâmpago), um casaco blindado (Armadura Arcana), um emplastro curativo (Curar Ferimentos), um guarda-costas mecânico (Conjurar Monstro), um projetor de imagens (Criar Ilusão), um veículo a vapor (Montaria Arcana) etc.</p>
        <p>Uma engenhoca é um item mundano Minúsculo que ocupa 1 espaço e possui Defesa 15, pontos de vida iguais à metade dos PV de seu fabricante e RD 5. Quando é fabricada, escolha se ela será empunhada (precisa estar na sua mão para ser ativada) ou vestida (precisa estar vestida para ser ativada, conta para seu limite de itens vestidos). Ao ser ativada, uma engenhoca pode assumir outra forma. Por exemplo, uma engenhoca que simula Montaria Arcana pode ser uma caixinha de engrenagens que se desdobra na forma de uma moto de madeira. Suas estatísticas não mudam.</p>
        <p><b>Fabricação.</b> Para fabricar uma engenhoca, escolha uma magia arcana ou divina de 1º círculo. Essa será a magia que a engenhoca irá simular. A partir do 6º nível, você pode criar engenhocas com magias de 2º círculo e, a cada quatro níveis, pode criar engenhocas de um círculo maior.</p>
        <p>O custo de fabricação da engenhoca é T$ 100 x o custo em PM da magia que ela simula e a CD do teste é 20 + o custo em PM da magia. Assim, para fabricar uma engenhoca que simula o efeito de uma magia de 2º círculo (3 PM) você precisa gastar T$ 300 e passar em um teste de Ofício (engenhoqueiro) contra CD 23. O tempo de fabricação é uma semana.</p>
        <p><I>Limite de Engenhocas.</I> Engenhocas são itens complexos e delicados, que exigem manutenção constante. O máximo de engenhocas que você pode ter ao mesmo tempo é igual a sua Inteligência.</p>
        <p><b>Ativação.</b> Apenas o fabricante de uma engenhoca pode ativá-la. Ativar uma engenhoca exige uma ação padrão (ou a execução da magia, o que for maior) e um teste de Ofício (engenhoqueiro) contra CD 15 + custo em PM da magia. Se você passar, a engenhoca gera o efeito da magia (atributo-chave Int). Se falhar, ela enguiça e não pode ser utilizada até ser consertada, o que exige uma hora de trabalho. Cada nova ativação da engenhoca no mesmo dia aumenta a CD do teste de Ofício em +5.</p>
        <p>Quando ativa uma engenhoca, você pode usar quaisquer aprimoramentos da magia que ela simula, até um custo igual a sua Inteligência. A CD para ativar a engenhoca aumenta em +1 por PM e você paga o custo em PM dos aprimoramentos.</p>
        <p>Se a engenhoca simula o efeito de uma magia com custo especial, esse custo deve ser pago a cada ativação. Para outros custos e limitações, o efeito gerado pela engenhoca funciona como uma magia. Por exemplo, para manter um efeito com duração sustentada gerado por uma engenhoca, o inventor deve pagar 1 PM no início de cada um de seus turnos. Da mesma forma, só pode manter um efeito sustentado de engenhoca por vez. Se a magia simulada exigir um teste de Misticismo, use Ofício (engenhoqueiro) em seu lugar.</p>
        <p><b>Efeito Mundano.</b> O efeito de uma engenhoca não é mágico. Isso significa que ele não pode ser dissipado, funciona em áreas de antimagia etc.</p>
        <p><b>Penalidade de Armadura.</b> A ativação de uma engenhoca exige movimentos rápidos e precisos. Por isso, o teste de Ofício (engenhoqueiro) para ativar engenhocas sofre penalidade de armadura. Porém, você pode ativar engenhocas que geram magias arcanas enquanto usa armadura sem precisar fazer testes de Misticismo.</p>
        <p><b>Efeitos que Impedem Conjuração.</b> Um efeito que especificamente impeça um personagem de lançar magias (como a Fúria de um bárbaro ou a magia Transformação de Guerra) também impede um inventor de ativar engenhocas.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - páginas 70 e 71`,
      },
      {
        id: 24,
        nome: 'FORMA SELVAGEM',
        descricao: `<p>Você pode gastar uma ação completa e 3 PM para adquirir a forma de uma criatura selvagem. Em termos de jogo, quando usa esta habilidade você adquire os modificadores de uma das formas abaixo. Características não mencionadas não mudam.</p>
        <p>Na forma selvagem você não pode falar, empunhar itens ou lançar magias. Seu equipamento desaparece (mas você mantém os benefícios de quaisquer itens vestidos), ressurgindo quando você volta ao normal. Outras criaturas podem fazer um teste de Percepção oposto pelo seu teste de Enganação para perceber que você não é um animal comum (você recebe +10 neste teste). Cada transformação dura pelo tempo que você quiser, mas você reverte à forma normal se ficar inconsciente ou morrer.</p>

        <h5><p><b>FORMA ÁGIL</b></p></h5>
        <p>Você recebe Destreza +2 e duas armas naturais que causam 1d6 pontos de dano e possuem margem de ameaça 19. Se atacar com ambas, sofre –2 em todos os testes de ataque até o seu próximo turno.</p>
        <p><I>• Aprimorada.</I> Você recebe Destreza +4, deslocamento +3m e duas armas naturais (como acima, mas com dano de 1d8). Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</p>
        <p><I>• Superior.</I> Você recebe Destreza +6, deslocamento +6m e duas armas naturais (como acima, mas com dano de 1d10). Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</p>

        <h5><p><b>FORMA FEROZ</b></p></h5>
        <p>Você recebe Força +3, +2 na Defesa e uma arma natural que causa 1d8 pontos de dano.</p>
        <p><I>• Aprimorada.</I> Você recebe Força +5, +4 na Defesa e uma arma natural que causa 2d6 pontos de dano. Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</p>
        <p><I>• Superior.</I> Você recebe Força +10, +6 na Defesa e uma arma natural que causa 4d6 pontos de dano. Seu tamanho muda para Enorme (–5 em Furtividade, +5 em testes de manobra).</p>

        <h5><p><b>FORMA RESISTENTE</b></p></h5>
        <p>Você recebe +5 na Defesa, redução de dano 5 e uma arma natural que causa 1d6 pontos de dano.</p>
        <p><I>• Aprimorada.</I>  Você recebe Força +3, +8 na Defesa, redução de dano 8 e uma arma natural que causa 1d8 pontos de dano. Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</p>
        <p><I>• Superior.</I> Você recebe Força +5, +10 na Defesa, redução de dano 10 e uma arma natural que causa 2d6 pontos de dano. Seu tamanho muda para Enorme (–5 em Furtividade, +5 em testes de manobra).</p>

        <h5><p><b>FORMA SORRATEIRA</b></p></h5>
        <p>Você recebe Destreza +2 e uma arma natural que causa 1d4 pontos de dano. Seu tamanho muda para Pequeno (+2 em Furtividade, –2 em testes de manobra).</p>
        <p><I>• Aprimorada.</I> Você recebe Destreza +4. Seu tamanho muda para Minúsculo (+5 em Furtividade, –5 em testes de manobra).</p>
        <p><I>• Superior.</I> Você recebe Destreza +6 e deslocamento de voo 18m. Seu tamanho muda para Minúsculo (+5 em Furtividade, –5 em testes de manobra).</p>

        <h5><p><b>FORMA VELOZ</b></p></h5>
        <p>Você recebe Destreza +2, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento 15m, deslocamento de escalada 9m ou deslocamento de natação 9m.</p>
        <p><I>• Aprimorada.</I> Você recebe Destreza +4, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento 18m, deslocamento de escalada 12m ou deslocamento de natação 12m.</p>
        <p><I>• Superior.</I> Você recebe Destreza +6, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento de natação 18m ou deslocamento de voo 24m.</p>

        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 63`,
      },
      {
        id: 25,
        nome: 'ORIGENS',
        descricao: `<p>Enquanto sua raça diz como você nasceu e sua classe diz o que se tornou, sua origem revela sua ocupação antes de ser aventureiro. É o que você fazia até ganhar seu primeiro nível em uma classe.</p>
        <p>Cada origem apresentada a seguir é intencionalmente vaga e breve, apenas uma ideia por onde começar. Você pode usá-la como está, para jogar rapidamente, ou então colorir com quantos detalhes quiser!</p>
        <h5><p><b>ITENS DE ORIGENS</b></p></h5>
        <p>Você começa com todos os itens descritos na linha “Itens” de sua origem sem pagar por eles.</p>
        <h5><p><b>BENEFÍCIOS DE ORIGENS</b></p></h5>
        <p>Cada origem possui uma lista de benefícios que inclui perícias e poderes gerais, descritos no Capítulo 2. Você escolhe dois benefícios da lista — duas perícias, dois poderes ou uma perícia e um poder. Se preferir regras mais rápidas, escolha apenas perícias.</p>
        <p><b>Perícias.</b> Atuar como batedor aguçou os sentidos do meio-elfo Gorack Misuk. Uma infância na estrada tornou Aivy Karter capaz de cuidar de si mesma nos ermos. Fugir da milícia pelas ruas de Malpetrim fez de Sima, a Astuta, uma pessoa furtiva. Você se torna treinado na perícia escolhida, representando aprendizado adquirido em sua vida pregressa.</p>
        <p><b>Poderes.</b> A vida de apresentações em Valkaria fez da barda Kiim Nomi uma estrela nata. Trabalhar em navios durante a juventude garantiu ao bucaneiro Don Doido contatos com quem conseguir transporte marítimo. Anos servindo no exército de Deheon ensinaram o paladino Rhogar a manejar sua espada. Você recebe o poder escolhido, mas ainda precisa cumprir seus pré-requisitos</p>
        <p><b>Poder Único.</b> Cada origem tem um poder exclusivo, descrito após os outros benefícios. Ele pode ser escolhido como um de seus dois benefícios. Apenas personagens com essa origem podem escolher esse poder.</p>
        <p>O humano clérigo Pivas, que cresceu isolado nas florestas de Tollon, escolhe a origem eremita. Ele começa com os seguintes itens: uma barraca e uma maleta de medicamentos. Pivas então pode escolher dois benefícios: ele escolhe a perícia Religião e o poder único Busca Interior.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 85`,
      },
      {
        id: 26,
        nome: 'SUA PRÓPRIA ORIGEM',
        descricao: `<p>Uma origem é algo que você pode mudar, negociando com o mestre, para ajustar melhor à história que você imaginou. Por exemplo, Kurt Snyder estudou como médico de Salistick — mais especificamente, como alienista. A origem Curandeiro oferece as perícias Cura e Vontade. Nesse caso, o jogador de Kurt poderia trocar uma dessas por Intuição.</p>
        <p>Outro exemplo: o suraggel paladino Agatodemo, um herói camponês, protegeu sua aldeia contra o ataque de hobgoblins que, ao fugir, deixaram cair uma arma exótica. Antes de partir da aldeia, Agatodemo treinou com essa arma. Assim, você poderia trocar seus itens iniciais pela própria arma, e pegar o poder Proficiência para saber usá-la.</p>
        <p>Até mesmo uma nova habilidade pode ser inventada, usando as outras como referência e inspiração. Você não precisa ficar preso apenas a benefícios mecânicos, como “ganhar +2 em alguma coisa”. Pense em coisas que ajudem seu grupo ou tragam mais sabor à interpretação, ou ainda algo relacionado à própria campanha — ser parente de algum NPC importante, por exemplo.</p>
        <p>Ainda, você pode inventar uma origem totalmente nova. Talvez Kaine, o Coletor, seja um guerreiro esqueleto conjurado pelo próprio necromante Vladislav, enquanto Ira Dodado é um clérigo de Nimb que começou sua carreira após matar um dragão com uma panelada, e Kadi O’ Blaine é um arcanista vindo de Magika, mundo da deusa Wynna. Lembre-se: em Arton, nenhum herói é estranho demais.</p>
        <p>Aproveite a origem para transpor para o jogo ideias que você tenha e não consiga representar com raça e classe. Em outras palavras, ela é o espaço para o jogador criar. Só não vale apelar! “Ah, eu era seguidor de um arcanista de 18º nível, então ele morreu engasgado com um pretzel e eu fiquei com as coisas mágicas dele, tudo bem?”</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 95`,
      },
      {
        id: 27,
        nome: 'DEUSES',
        descricao: `<p>Em Arton, você pode trabalhar a serviço dos deuses, cumprindo seus desígnios. Um personagem que serve a uma divindade é chamado devoto e, em troca de seguir certas obrigações, recebe poderes. Ser devoto é uma escolha. Por exemplo, você pode ser um cavaleiro normal, sem obrigações, ou um cavaleiro devoto de Khalmyr, com obrigações e poderes.</p>
        <h5><p><b>ESCOLHENDO SEU DEUS</b></p></h5>
        <p>Você pode se tornar devoto na construção de seu personagem ou sempre que subir de nível. Porém, só pode ter uma devoção e não pode mudá-la (exceto sob critério do mestre). Se você for clérigo, druida ou paladino, automaticamente será um devoto.</p>
        <p>Para ser devoto de um deus, sua raça ou sua classe devem estar listadas na seção “Devotos” do deus em questão. Humanos e clérigos são exceção — podem ser devotos de qualquer divindade.</p>
        <p>Ao se tornar devoto, você recebe um poder concedido a sua escolha da lista do deus e passa a seguir as Obrigações & Restrições dele. Se violá-las, perde todos os seus PM e só pode recuperá-los a partir do próximo dia. Se violá-las de novo na mesma aventura, perde todos os seus PM e não pode recuperá-los até fazer uma penitência (veja a perícia Religião). Poderes concedidos são descritos no Capítulo 2.</p>
        <p><I><b>Multiclasse.</b></I> No caso de classes com listas de devoções permitidas, a classe com menos opções determina a que deve ser seguida (isso permite que uma devoção anterior seja mudada). Se não houver devoções compatíveis, a multiclasse não pode ser feita.</p>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 1-20: Deuses</th>
            </tr>
            <tr>
              <th>Divindade</th>
              <th>Energia</th>
              <th>Poderes Concedidos</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Aharadak</td><td>Negativa</td><td>Afinidade com a Tormenta, Êxtase da Loucura, Percepção Temporal, Rejeição Divina</td></tr>
            <tr><td>Allihanna</td><td>Positiva</td><td>Compreender os Ermos, Dedo Verde, Descanso Natural, Voz da Natureza</td></tr>
            <tr><td>Arsenal</td><td>Qualquer</td><td>Conjurar Arma, Coragem Total, Fé Guerreira, Sangue de Ferro</td></tr>
            <tr><td>Azgher</td><td>Positiva</td><td>Espada Solar, Fulgor Solar, Habitante do Deserto, Inimigo de Tenebra</td></tr>
            <tr><td>Hyninn</td><td>Qualquer</td><td>Apostar com o Trapaceiro, Farsa do Fingidor, Forma de Macaco, Golpista Divino</td></tr>
            <tr><td>Kallyadranoch</td><td>Negativa</td><td>Aura de Medo, Escamas Dracônicas, Presas Primordiais, Servos do Dragão</td></tr>
            <tr><td>Khalmyr</td><td>Positiva</td><td>Coragem Total, Dom da Verdade, Espada Justiceira, Reparar Injustiça</td></tr>
            <tr><td>Lena</td><td>Positiva</td><td>Ataque Piedoso, Aura Restauradora, Cura Gentil, Cura Perfeita</td></tr>
            <tr><td>Lin-Wu</td><td>Qualquer</td><td>Coragem Total, Kiai Divino, Mente Vazia, Tradição de Lin-Wu</td></tr>
            <tr><td>Marah</td><td>Positiva</td><td>Aura de Paz, Dom da Esperança, Palavras de Bondade, Talento Artístico</td></tr>
            <tr><td>Megalokkh</td><td>Negativa</td><td>Olhar Amedrontador, Presas Primordiais, Uivo Divino, Voz dos Monstros</td></tr>
            <tr><td>Nimb</td><td>Qualquer</td><td>Êxtase da Loucura, Poder Oculto, Sorte dos Loucos, Transmissão da Loucura</td></tr>
            <tr><td>Oceano</td><td>Qualquer</td><td>Anfíbio, Arsenal das Profundezas, Mestre dos Mares, Sonhos do Mar</td></tr>
            <tr><td>Sszzaas</td><td>Negativa</td><td>Astúcia da Serpente, Familiar Ofídico, Presas Venenosas, Sangue Ofídico</td></tr>
            <tr><td>Tanna-Toh</td><td>Qualquer</td><td>Conhecimento Enciclopédico, Mente Analítica, Pesquisa Abençoada, Voz da Civilização</td></tr>
            <tr><td>Tenebra</td><td>Negativa</td><td>Carícia Sombria, Manto da Penumbra, Visão nas Trevas, Zumbificar</td></tr>
            <tr><td>Thwor</td><td>Qualquer</td><td>Almejar o Impossível, Fúria Divina, Olhar Amedrontador, Tropas Duyshidakk</td></tr>
            <tr><td>Thyatis</td><td>Positiva</td><td>Ataque Piedoso, Dom da Imortalidade, Dom da Profecia, Dom da Ressurreição</td></tr>
            <tr><td>Valkaria</td><td>Qualquer</td><td>Almejar o Impossível, Armas da Ambição, Coragem Total, Liderança Divina</td></tr>
            <tr><td>Wynna</td><td>Qualquer</td><td>Benção do Mana, Centelha Mágica, Escudo Mágico, Teurgista Místico</td></tr>
          </tbody>
        </table>
        <h5><p><b>CARACTERÍSTICAS DOS DEUSES</b></p></h5>
        <p><b>Crenças e Objetivos.</b> Um resumo da doutrina da divindade, aquilo em que os devotos creem.</p>
        <p><b>Símbolo Sagrado.</b> O símbolo do deus, normalmente usado como um medalhão ou na roupa.</p>
        <p><b>Canalizar Energia.</b> O tipo de energia que a divindade canaliza. Devotos de alguns deuses podem escolher o tipo de energia (nesse caso, uma vez feita, a escolha não pode ser mudada).</p>
        <p><b>Arma Preferida.</b> A arma típica de devotos do deus, importante para certas habilidades e magias.</p>

        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 96 e 97`,
      },
      {
        id: 28,
        nome: 'PONTOS DE VIDA - PV',
        descricao: `<p>Pontos de vida são uma medida de seu vigor físico, tolerância a dor e experiência em combate. Eles indicam a quantidade de dano que você pode sofrer antes de cair inconsciente. Assim, o mesmo ferimento que mataria um camponês comum será “apenas um arranhão” para um bárbaro embrutecido ou um ladino esquivo.</p>
        <p>Enquanto tiver pelo menos 1 ponto de vida, você pode agir e lutar normalmente. Se ficar com 0 ou menos PV, você cai inconsciente e sangrando (veja mais sobre isso na página 236).</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 106`,
      },
      {
        id: 29,
        nome: 'PONTOS DE MANA - PM',
        descricao: `<p>Pontos de mana são uma medida de sua energia, determinação e força interior. Eles indicam quantas habilidades você consegue usar.</p>
        <p>Você não pode gastar mais pontos de mana do que tem, mas não sofre penalidades por ficar com 0 ou menos PM.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 106`,
      },
      {
        id: 30,
        nome: 'RECUPERANDO PV E PM',
        descricao: `<p>Com uma noite de descanso (pelo menos oito horas de sono), você recupera PV e PM de acordo com seu nível e <b><I>condições de descanso.</I></b></p>
        <p><b>Ruim.</b> Recuperação igual à metade do nível. Dormir ao relento, sem um saco de dormir e um acampamento, constitui condição ruim (veja Sobrevivência, na página 123).</p>
        <p><b>Normal.</b> Recuperação igual à metade do nível. Dormir ao relento, sem um saco de dormir e um acampamento, constitui condição ruim (veja Sobrevivência, na página 123).</p>
        <p><b>Confortável.</b> Recuperação igual à metade do nível. Dormir ao relento, sem um saco de dormir e um acampamento, constitui condição ruim (veja Sobrevivência, na página 123).</p>
        <p><b>Luxuosa.</b> Recuperação igual à metade do nível. Dormir ao relento, sem um saco de dormir e um acampamento, constitui condição ruim (veja Sobrevivência, na página 123).</p>
        <p>Certas habilidades, magias e itens também recuperam PV e PM. Você nunca pode recuperar mais pontos de vida ou mana do que perdeu — ou seja, não pode ultrapassar seu máximo.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 106`,
      },
      {
        id: 31,
        nome: `PV's e PM's Temporários`,
        descricao: `<p>Certos efeitos fornecem PV ou PM temporários. Eles são somados a seus pontos atuais, mesmo que ultrapassem o máximo. Pontos temporários são sempre os primeiros a serem gastos. Caso não seja especificado o contrário, pontos temporários desaparecem no fim do dia.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 106`,
      },
      {
        id: 32,
        nome: `DEFESA`,
        descricao: `<p>A Defesa representa o quão difícil é acertá-lo em combate. Sua Defesa é 10 + sua Destreza + seu bônus de armadura e escudo.</p>
        <p>Quando você ataca um inimigo, a CD do seu teste de ataque é à Defesa dele (veja mais sobre isso no Capítulo 5: Jogando).</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 106`,
      },
      {
        id: 33,
        nome: `TAMANHO`,
        descricao: `<p>O tamanho de uma criatura é classificado em seis categorias: Minúsculo, Pequeno, Médio, Grande, Enorme e Colossal. Por padrão, seu tamanho é Médio, mas sua raça pode alterar isso. Criaturas Médias não recebem modificadores por tamanho. Criaturas menores recebem bônus em Furtividade e penalidade em manobras de combate. Para criaturas maiores, esses bônus e penalidades são invertidos.</p>
        <p>Criaturas Minúsculas usam armas reduzidas, que causam um passo a menos de dano (veja a Tabela 3-2: Dano de Armas, na página 143). Criaturas Grandes e Enormes usam armas aumentadas, que causam um passo a mais de dano, e criaturas Colossais usam armas gigantes, que causam dois passos a mais de dano. Uma criatura pode usar uma arma feita para até uma categoria de tamanho maior ou menor que a dela, mas sofre –5 nos testes de ataque e a arma ocupa um espaço a mais ou a menos, respectivamente (mínimo meio espaço).</p>
        <table style="width: 100%; border-collapse: collapse; color: black; font-family: 'Times New Roman', serif; text-align: center;">
          <thead>
            <tr>
              <th colspan="4">Tabela 1-21: Tamanho de Criaturas</th>
            </tr>
            <tr>
              <th style="border: 1px solid #000; padding: 6px;">Categoria de Tamanho</th>
              <th style="border: 1px solid #000; padding: 6px;">Exemplos</th>
              <th style="border: 1px solid #000; padding: 6px;">Espaço Ocupado* /<br>Alcance Natural</th>
              <th style="border: 1px solid #000; padding: 6px;">Modificador de<br>Furtividade/Manobras</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #000; padding: 6px;">Minúsculo</td>
              <td style="border: 1px solid #000; padding: 6px;">Falcão, rato, sílfide</td>
              <td style="border: 1px solid #000; padding: 6px;">1,5m</td>
              <td style="border: 1px solid #000; padding: 6px;">+5/–5</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 6px;">Pequeno</td>
              <td style="border: 1px solid #000; padding: 6px;">Cão, goblin, hynne</td>
              <td style="border: 1px solid #000; padding: 6px;">1,5m</td>
              <td style="border: 1px solid #000; padding: 6px;">+2/–2</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 6px;">Médio</td>
              <td style="border: 1px solid #000; padding: 6px;">Humano, anão, elfo</td>
              <td style="border: 1px solid #000; padding: 6px;">1,5m</td>
              <td style="border: 1px solid #000; padding: 6px;">0</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 6px;">Grande</td>
              <td style="border: 1px solid #000; padding: 6px;">Cavalo, ogro, serpe</td>
              <td style="border: 1px solid #000; padding: 6px;">3m</td>
              <td style="border: 1px solid #000; padding: 6px;">–2/+2</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 6px;">Enorme</td>
              <td style="border: 1px solid #000; padding: 6px;">Ente, gigante, hidra</td>
              <td style="border: 1px solid #000; padding: 6px;">4,5m</td>
              <td style="border: 1px solid #000; padding: 6px;">–5/+5</td>
            </tr>
            <tr>
              <td style="border: 1px solid #000; padding: 6px;">Colossal</td>
              <td style="border: 1px solid #000; padding: 6px;">Colosso, dragão, kraken</td>
              <td style="border: 1px solid #000; padding: 6px;">9m</td>
              <td style="border: 1px solid #000; padding: 6px;">–10/+10</td>
            </tr>
          </tbody>
        </table>

        <p style="font-size: 14px; font-style: italic; margin-top: 4px; color: black;">
          *Espaço ocupado pela criatura. “3m”, por exemplo, significa que a criatura ocupa um espaço de 3m x 3m, ou seja, 2x2 quadrados num mapa.
        </p>

        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 106 e 107`,
      },
      {
        id: 34,
        nome: `DESLOCAMENTO`,
        descricao: `<p>Sua velocidade, medida em quantos metros você anda com uma ação de movimento. Por padrão, seu deslocamento é 9 metros (6 quadrados no mapa), mas algumas habilidades podem mudar esse valor.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 106`,
      },
      {
        id: 35,
        nome: `IDADE`,
        descricao: `<p>Muitos heróis são jovens, mas nem todos precisam ser. Não há idade certa para viver aventuras, perseguir sonhos e combater o mal.
        <h5><p><b>IDADE INICIAL</b></p></h5>
        <p>Você pode escolher a idade inicial de seu personagem ou determiná-la aleatoriamente, com uma rolagem que varia conforme sua classe.</p>
        <p><b>Bárbaro, Bucaneiro, Ladino, Lutador.</b> 1d6+15 anos (para um resultado entre 16 e 21 anos).</p>
        <p><b>Bardo, Caçador, Cavaleiro, Guerreiro, Nobre, Paladino.</b> 2d4+15 anos (para um resultado entre 17 e 23 anos).</p>
        <p><b>Arcanista, Clérigo, Druida, Inventor.</b> 2d6+15 anos (para um resultado entre 17 e 27 anos).</p>
        <h5><p><b>ENVELHECENDO</b></p></h5>
        <p>Conforme envelhecem, personagens recebem os seguintes modificadores.</p>
        <p><b>Maduro (45 Anos).</b> For –1, Des –1, Con –1, Int +1, Sab +1, Car +1.</p>
        <p><b>Velho (70 Anos).</b> For –2, Des –2, Con –2, Int +1, Sab +1, Car +1.</p>
        <p><b>Longevidade Máxima.</b> 70 + 2d20 anos.</p>
        <p>Os modificadores são cumulativos. Assim, um personagem velho recebe um total de For –3, Des –3, Con –3, Int +2, Sab +2, Car +2.</p>
        <h5><p><b>RAÇAS LONGEVAS</b></p></h5>
        <p>As categorias de envelhecimento abaixo se aplicam a todas as raças, com exceção de anões, dahllan, elfos, golens, osteon, qareen e sílfides. Essas raças usam a mesma idade inicial, mas multiplicam as categorias de envelhecimento (maduro e velho) e a longevidade máxima pelos seguintes valores.</p>
        <p><b>• Anões e Qareen.</b> x2.</p>
        <p><b>• Dahllan, Elfos, Golens, Osteon, Sílfides.</b> x5. Personagens dessas raças não têm longevidade máxima; podem viver para sempre, morrendo apenas de formas violentas ou por razões excepcionais (por exemplo, quando escolhem deixar de viver ou são chamados ao além-vida por sua divindade).</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 1 Construção de Personagem`,
        referencia: `Tormenta 20 Jogo do Ano - página 108`,
      },
      {
        id: 36,
        nome: `PERÍCIAS`,
        descricao: `<p>Perícias medem suas capacidades mundanas. São usadas para realizar todo tipo de façanha, de saltar sobre um desfiladeiro a acertar um monstro com sua espada e decifrar um pergaminho antigo.</p>
        <h5><p><b>ESCOLHENDO PERÍCIAS</b></p></h5>
        <p>Ao escolher sua classe, você recebe um número de perícias treinadas (ou seja, nas quais é mais competente). Você também recebe um número de perícias treinadas igual a sua Inteligência. Perícias ganhas por Inteligência não precisam pertencer à lista de sua classe.</p>
        <p>Você pode ganhar novas perícias treinadas com o poder Treinamento em Perícia ou aumentando sua Inteligência (exceto aumentos temporários).</p>
        <h5><p><b>USANDO PERÍCIAS</b></p></h5>
        <p>A descrição de cada perícia explica o que você pode fazer com ela, junto com exemplos de usos e suas respectivas regras. Testes de perícia seguem a mecânica básica do jogo, apresentada na Introdução e detalhada no Capítulo 5: Jogando.</p>
        <h5><p><b>BÔNUS PERÍCIA</b></p></h5>
        <p>Quando faz um teste de perícia, você soma seu bônus de perícia ao resultado do d20. Esse número é uma medida de sua competência com a perícia em questão. Ele é igual à metade do seu nível (arredondado para baixo) + o atributo-chave da perícia (veja a seguir). Nas perícias treinadas, você recebe um bônus de +2. No 7º nível, esse bônus aumenta para +4. No 15º nível, aumenta para +6.</p>
        <p>Por exemplo, um personagem de 3º nível com Força 4 terá um bônus de +5 nas perícias baseadas em Força, no caso, Atletismo e Luta (+1 da metade do nível, +4 da Força). Se for treinado numa dessas perícias, seu bônus com ela será +7 (+1 da metade do nível, +4 de Força, +2 do treinamento).</p>
        <p><b><center>Bônus de Perícia = Metade do Nível + Atributo-chave + Bônus de Treinamento (se for treinado)*</center></b>
        <center>*O bônus de treinamento é +2 do 1º ao 6º níveis, +4 do 7º ao 14º níveis e +6 do 15º nível em diante</center></p><br />
        <h5><p><b>ATRIBUTO-CHAVE</b></p></h5>
        <p>O atributo usado com a perícia. Por exemplo, Diplomacia envolve lábia e capacidade de argumentação, por isso seu atributo-chave é Carisma. Já Conhecimento envolve estudo e memória, por isso seu atributo-chave é Inteligência. O atributo-chave afeta seu bônus de perícia (veja acima).</p>
        <h5><p><b>TREINAMENTOS E TESTES</b></p></h5>
        <p>Algumas perícias só podem ser usadas quando você é treinado nelas. Por exemplo, se você não é treinado em Ladinagem, não tem o conhecimento necessário para desarmar uma armadilha, independentemente de seu nível ou Destreza. Quando a palavra “treinada” aparece após o nome da perícia, você só poderá usá-la se for treinado nela. Além disso, algumas perícias possuem usos específicos que exigem treinamento.</p>
        <h5><p><b>PENALIDADE DE ARMADURA</b></p></h5>
        <p>Algumas perícias exigem liberdade de movimento. Quando a palavra “armadura” aparece após o nome da perícia, você sofrerá uma penalidade nos testes dela se estiver usando armadura ou escudo. Veja o Capítulo 3: Equipamento para detalhes.</p>
        `,
        regras: `Tormenta 20 Jogo do Ano Capítulo 2 Perícias & Poderes`,
        referencia: `Tormenta 20 Jogo do Ano - página 108`,
      },
      {
        id: 37,
        nome: `PERÍCIAS DE RESISTÊNCIA`,
        descricao: `<p>Fortitude, Reflexos e Vontade são usadas para resistir a efeitos negativos, como uma explosão ou um encantamento de controle mental. Por isso, são chamadas de perícias de resistência. Efeitos que afetem seus “testes de resistência” afetam todos os testes destas perícias. Assim, um efeito que forneça +1 em testes de resistência fornece +1 em Fortitude, Reflexos e Vontade.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 106`,
      },
      {
        id: 38,
        nome: `PODERES GERAIS`,
        descricao: `<p>Poderes gerais podem ser escolhidos por qualquer personagem, independentemente de sua classe. Eles seguem todas as regras de habilidades. Poderes gerais fornecem mais opções, ao custo de um pouco de complexidade. Usá-los ou não é uma decisão de cada jogador (veja o quadro na página ao lado).</p>
        <h5><p><b>ESCOLHENDO PODERES GERAIS</b></p></h5></p>
        <p>Algumas raças e origens fornecem poderes gerais. Além disso, sempre que você recebe um poder de classe, pode trocá-lo por um poder geral.</p>
        <h5><p><b>GRUPOS DE PODERES</b></p></h5></p>
        <p><b>Combate.</b> Poderes que melhoram características relacionadas a combate. </p>
        <p><b>Destino.</b> Poderes que melhoram características não relacionadas a combate.</p>
        <p><b>Magia.</b> Poderes ligados a magias e itens mágicos.</p>
        <p><b>Concedidos.</b> Poderes recebidos por devotos.</p>
        <p><b>Tormenta.</b> Poderes ligados à tempestade rubra.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 124`,
      },
      {
        id: 39,
        nome: `PODERES GERAIS: USAR OU NÃO?`,
        descricao: `<p>Poderes gerais permitem diferenciar ainda mais seu personagem, trazendo novas opções e estratégias. No entanto, seu uso deixa o jogo mais pesado — construir o personagem e subir de nível será mais trabalhoso.</p>
        <p>Se você está experimentando suas primeiras aventuras, pode ser melhor evitar poderes gerais. Suas escolhas de raça, classe e origem já oferecem um enorme número de combinações.</p>
        <p>No entanto, se você é um veterano de várias campanhas, talvez queira mais capacidade de personalização. Nesse caso, fique à vontade para ler esta seção e escolher os poderes que preferir — seja para melhor representar o conceito de seu herói, seja para conseguir combinações mais efetivas.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 125`,
      },
      {
        id: 40,
        nome: `PODERES DE APRIMORAMENTO`,
        descricao: `<p>Estes poderes acrescentam melhorias às magias conhecidas pelo conjurador. Eles seguem todas as regras para aprimoramentos (veja o Capítulo 4: Magia). Você pode aplicar quantos aprimoramentos quiser, desde que não ultrapasse seu limite de PM.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 131`,
      },
      {
        id: 41,
        nome: `PODERES DE COMBATE`,
        descricao: `<p>Poderes que melhoram características relacionadas a combate.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 124`,
      },
      {
        id: 42,
        nome: `PODERES DE DESTINO`,
        descricao: `<p>Poderes que melhoram características não relacionadas a combate.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 124`,
      },
      {
        id: 43,
        nome: `PODERES DE MAGIA`,
        descricao: `<p>Todos os poderes deste grupo possuem como pré-requisito lançar magias.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 131`,
      },
      {
        id: 44,
        nome: `PODERES CONCEDIDOS`,
        descricao: `<p>Todos os poderes desta seção possuem como pré-requisito ser devoto de um dos deuses indicados. O atributo-chave desses poderes é Sabedoria.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 132`,
      },
      {
        id: 45,
        nome: `PODERES DA TORMENTA`,
        descricao: `<p>Estes poderes oferecem habilidades ligadas à tempestade rubra. Quando escolhe um poder da Tormenta, você perde 1 de Carisma. Para cada dois outros poderes da Tormenta, você perde mais 1 de Carisma. Essa perda representa deformidades físicas e o desaparecimento gradual de sua própria identidade. Um personagem reduzido a menos que Car –5 torna-se um NPC sob controle do mestre.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 136`,
      },
      {
        id: 46,
        nome: `EQUIPAMENTO INICIAL`,
        descricao: `<p>Personagens de 1º nível começam com os itens fornecidos pela sua origem e os itens a seguir.</p>
        <ul>
          <li>Uma mochila, um saco de dormir e um traje de viajante.</li>
          <li>
            Uma arma simples a sua escolha. Se você tiver proficiência com armas marciais,
            também começa com uma arma marcial a sua escolha.
          </li>
          <li>
            Uma armadura de couro, couro batido ou gibão de peles, a sua escolha.
            Se você tiver proficiência com armaduras pesadas, em vez disso pode começar com uma brunea.
            Se tiver proficiência com escudos, começa também com um escudo leve.
            <I>Exceção:</I> arcanistas começam sem armadura.
          </li>
          <li>
            T$ 4d6, que você pode usar para comprar itens ou guardar para usar na aventura.
          </li>
        </ul>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 140`,
      },
      {
        id: 47,
        nome: `DINHEIRO INICIAL`,
        descricao: `<p>Personagens acima do 1º nível começam com mais dinheiro, conforme a tabela abaixo.</p>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 3-1: Dinheiro Inicial</th>
            </tr>
            <tr>
              <th>Nível</th>
              <th>Dinheiro Inicial (T$)</th>
              <th>Nível</th>
              <th>Dinheiro Inicial (T$)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1º</td><td>4d6</td><td>11º</td><td>19.000</td></tr>
            <tr><td>2º</td><td>300</td><td>12º</td><td>27.000</td></tr>
            <tr><td>3º</td><td>600</td><td>13º</td><td>36.000</td></tr>
            <tr><td>4º</td><td>1.000</td><td>14º</td><td>49.000</td></tr>
            <tr><td>5º</td><td>2.000</td><td>15º</td><td>66.000</td></tr>
            <tr><td>6º</td><td>3.000</td><td>16º</td><td>88.000</td></tr>
            <tr><td>7º</td><td>5.000</td><td>17º</td><td>110.000</td></tr>
            <tr><td>8º</td><td>7.000</td><td>18º</td><td>150.000</td></tr>
            <tr><td>9º</td><td>10.000</td><td>19º</td><td>200.000</td></tr>
            <tr><td>10º</td><td>13.000</td><td>20º</td><td>260.000</td></tr>
          </tbody>
        </table>


        `,
        referencia: `Tormenta 20 Jogo do Ano - página 140`,
      },
      {
        id: 48,
        nome: `RIQUEZA & MOEDAS`,
        descricao: `<p>O Tibar (T$) é a moeda padrão do Reinado. Trata-se de uma peça redonda de prata com 1,5 cm de diâmetro. A cunhagem traz em um lado o rosto de Tibar, o Deus do Comércio — um rei com cabelos encaracolados e uma joia em forma de olho na coroa; e no outro lado o mesmo rosto, mas sem a coroa. Em Arton, ao jogar “cara ou coroa”, o costume é escolher “coroa ou não coroa”.</p>
        <p>A moeda foi criada por Quindogar Tolliannor, primeiro conselheiro real de Deheon e adepto ardoroso das artes da barganha e negociação. Ficou tão popular que Tollianor passou a ser conhecido pelo nome de sua criação e ascendeu como Deus Menor do Comércio. Atualmente, ele tenta “negociar” uma posição no Panteão. Acredita-se que manter um Tibar no bolso ou no pescoço (como um amuleto) garante boa fortuna.</p>
        <p>Nem todos os reinos seguem o padrão do Tibar. Em alguns lugares, devido à escassez de prata, o Tibar de cobre é usado como moeda padrão. Em outros, o valor do Tibar pode apresentar flutuações — provocando grande agitação entre as guildas de comerciantes, falsificadores e contrabandistas.</p>
        <p>Por padrão, todos os preços de itens e serviços são exibidos em T$. Entretanto, existem duas variações da moeda: o Tibar de cobre (TC), que vale um décimo do T$, utilizado por camponeses e plebeus, e o Tibar de Ouro (TO), que vale T$ 10, utilizado por aristocratas, grandes mercadores e aventureiros poderosos.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 140`,
      },
      {
        id: 49,
        nome: `TROCA & COMÉRCIO`,
        descricao: `<p>No Reinado, o comércio é organizado por guildas mercantes. As guildas decidem quem pode vender o quê e o valor dos produtos e serviços que controlam, o que garante um padrão nos preços. Em lugares afastados, ermos ou sob o domínio de tiranos, porém, os preços podem variar muito.</p>
        <p>No geral, personagens podem comprar itens pelos preços listados nas tabelas e vendê-los pela metade desses preços. Em certos lugares, o mestre pode determinar que os itens são mais caros, estão disponíveis em quantidades limitadas ou não estão disponíveis (veja o Capítulo 6). Comprando ou vendendo, os valores podem ser melhorados através de barganha (veja a perícia Diplomacia).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 140`,
      },
      {
        id: 50,
        nome: `LIMITE DE USO: EMPUNHADOS`,
        descricao: `<p>Alguns itens precisam ser <i>empunhados</i> para serem usados. Isso inclui armas, escudos, itens alquímicos e outros, como tochas e varinhas. Você pode empunhar apenas um item em cada mão, ou seja, pode empunhar no máximo dois itens ao mesmo tempo (supondo que você tenha duas mãos). Você pode guardar um item empunhado com uma ação de movimento ou largá-lo no chão com uma ação livre.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 141`,
      },
      {
        id: 51,
        nome: `LIMITE DE USO: VESTIDO`,
        descricao: `<p>Itens que não são empunhados precisam ser vestidos. Você pode receber os benefícios de no máximo quatro itens vestidos simultaneamente — há um limite para a quantidade de objetos com os quais é possível lidar ao mesmo tempo. Se você vestir um quinto item, ele não fornecerá seu benefício até que você remova outro. Vestir ou despir um item é uma ação de movimento (e você ainda precisa gastar outra ação de movimento para guardá-lo ou uma ação livre para largá-lo no chão). Note que esse limite se aplica apenas a itens com benefícios mecânicos — você pode vestir seu traje de viajante, ou outra roupa que não forneça bônus, sem que isso afete seu limite.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 141`,
      },
      {
        id: 52,
        nome: `LIMITE DE CARGA`,
        descricao: `
        <p>
          A quantidade de equipamento que você pode carregar é medida em <em>espaços de itens</em>.
          Por padrão, um item ocupa 1 espaço. Porém, há exceções:
        </p>

        <ul>
          <li>
            Itens alquímicos, poções, pergaminhos e outros itens muito leves ou pequenos ocupam meio espaço.
            Ou seja, dois desses itens ocupam 1 espaço.
          </li>
          <li>
            Armas de duas mãos, armaduras leves, escudos pesados, criaturas Minúsculas e outros itens pesados
            ou volumosos ocupam 2 espaços.
          </li>
          <li>
            Armaduras pesadas, criaturas Pequenas e outros itens muito pesados ou volumosos,
            como um barril ou baú, ocupam 5 espaços.
          </li>
          <li>
            Itens extremamente pesados ou volumosos, como uma criatura Média, ocupam 10 espaços.
            Itens ainda maiores podem ocupar mais espaços ou serem impossíveis de carregar,
            a critério do mestre.
          </li>
          <li>
            Cada mil moedas, independentemente do tipo, ocupam 1 espaço.
          </li>
        </ul>

        <p>Você pode carregar 10 espaços +2 por ponto de Força (ou –1 por ponto de Força negativo). Se ultrapassar esse limite, fica sobrecarregado — sofre penalidade de armadura –5 e seu deslocamento é reduzido em –3m. Você não pode carregar mais do que o dobro do seu limite. Assim, um personagem com Força 2 pode carregar até 14 espaços sem penalidade, e até 28 espaços ficando sobrecarregado. Ele não pode carregar mais de 28 espaços de itens.</p>
        <p>A regra considera que você possui uma mochila onde carregar seu equipamento. A própria mochila não ocupa espaço. De forma similar, recipientes cuja única função seja carregar outros itens não ocupam espaço. Por exemplo, a bainha de uma espada está incluída no espaço da própria espada. Porém, recipientes que forneçam benefícios próprios, como uma bandoleira de poções, ocupam espaço.</p>
        <p>Por fim, a critério do mestre, pequenos itens que não possuem efeito em jogo — ou seja, que são meramente “cosméticos” — não precisam ser considerados. Você pode carregar um traje de viajante (ou outra roupa que não forneça um benefício) sem que isso ocupe espaço.</p>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 141`,
      },
      {
        id: 53,
        nome: `PROFICIÊNCIA DE ARMA`,
        descricao: `<p><b>Armas Simples.</b> Armas de manejo fácil, como adagas, clavas e lanças. Todos os personagens sabem usar armas simples.</p>
        <p><b>Armas Marciais.</b> Espadas, machados e outras armas de uso específico de combatentes. Bárbaros, bardos, bucaneiros, caçadores, cavaleiros, guerreiros, nobres e paladinos sabem usar armas marciais.</p>
        <p><b>Armas Exóticas.</b> Armas difíceis de dominar, como a corrente de espinhos e a espada bastarda. Exigem treinamento específico.</p>
        <p><b>Armas de Fogo.</b> Armas de pólvora são raras em Arton, por isso exigem treinamento específico.</p>
        <p><b><i>Penalidade por Não Proficiência.</i></b> Se você atacar com uma arma com a qual não seja proficiente, sofre –5 nos testes de ataque.</p>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 142`,
      },
      {
        id: 54,
        nome: `PROPÓSITO DE ARMA`,
        descricao: `<p><b>Corpo a Corpo.</b> Podem ser usadas para atacar alvos adjacentes. Para atacar com uma arma de combate corpo a corpo, faça um teste de Luta. Quando você ataca com uma arma corpo a corpo, soma sua Força às rolagens de dano.</p>
        <p><b>Ataque à Distância.</b> Podem ser usadas para atacar alvos adjacentes ou à distância. Para atacar com uma arma de combate à distância, faça um teste de Pontaria. São subdivididas em de arremesso e de disparo.</p>
        <p><I>Arremesso.</I> A própria arma é atirada, como uma adaga ou azagaia. Sacar uma arma de arremesso é uma ação de movimento. Quando você ataca com uma arma de arremesso, soma sua Força às rolagens de dano.</p>
        <p><I>Disparo.</I> A arma dispara um projétil, como um arco atira flechas. Sacar a munição de uma arma de disparo é uma ação livre. Recarregar uma arma de disparo exige as duas mãos. Quando ataca com uma arma de disparo, não soma nenhum valor de atributo às rolagens de dano.</p>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 142`,
      },
      {
        id: 55,
        nome: `EMPUNHADURA DA ARMA`,
        descricao: `<p><b>Leve.</b> Esta arma é usada com uma mão e se beneficia do poder Acuidade com Arma.</p>
        <p><b>Uma mão.</b> Esta arma é usada com uma mão, deixando a outra mão livre para outros fins.</p>
        <p><b>Duas mãos.</b> Esta arma é usada com as duas mãos. Livrar uma mão é uma ação livre. Reempunhá-la é uma ação de movimento (ou livre, se você puder sacá-la dessa forma).</p>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 142`,
      },
      {
        id: 56,
        nome: `CARACTERÍSTICAS DAS ARMAS`,
        descricao: `<p><b>Preço.</b> Inclui acessórios básicos, como bainhas para lâminas e aljavas para flechas.</p>
        <p><b>Dano.</b> Quando você acerta um ataque, rola o dano indicado (acrescente modificadores, se houver). O resultado é subtraído dos pontos de vida do alvo.</p>
        <p>O dano na tabela se refere a armas normais, para criaturas Pequenas e Médias. Veja a Tabela 3-2: Dano de Armas para armas menores ou maiores.</p>
        <p><b>Crítico.</b> Quando você acerta um ataque rolando um 20 natural (ou seja, o dado mostra um 20), faz um acerto crítico. Neste caso, multiplique os dados de dano por 2. Bônus numéricos e dados extras (como pela habilidade Ataque Furtivo) não são multiplicados. Por exemplo, um dano de 1d8+3 torna-se 2d8+3 com um acerto crítico.</p>
        <p>Certas armas fazem críticos em margem maior que 20 ou multiplicam o dano por um valor maior que 2. Em geral, armas mais precisas (bestas, espadas...) têm margem maior, enquanto armas mais penetrantes (arcos, machados...) têm multiplicador maior.</p>
        <p>Efeitos que aumentam a margem de ameaça diminuem o número necessário para conseguir um crítico. Já efeitos que aumentam o multiplicador de crítico são acrescentados ao número do multiplicador.</p>
        <p><i>19.</i> A arma tem margem de ameaça 19 ou 20.</p>
        <p><i>18.</i> A arma tem margem de ameaça 18, 19 ou 20.</p>
        <p><i>x2, x3, x4.</i> A arma causa dano dobrado, triplicado ou quadruplicado em caso de acerto crítico.</p>
        <p><i>19/x3.</i> A arma tem margem de ameaça 19 ou 20 e causa dano triplicado em caso de acerto crítico.</p>
        <p><b>Alcance.</b> Armas com alcance podem ser usadas para ataques à distância. As categorias de alcance são curto (9m, ou 6 quadrados em um mapa), médio (30m ou 20 quadrados) e longo (90m ou 60 quadrados). Você pode atacar dentro do alcance sem sofrer penalidades. Você pode atacar até o dobro do alcance, mas sofre –5 no teste de ataque. Armas sem alcance podem ser arremessadas em alcance curto com –5 no teste de ataque.</p>
        <p><b>Tipo.</b> Armas tipicamente causam dano por corte (C), impacto (I) ou perfuração (P). Certas criaturas são resistentes ou imunes a certos tipos de dano.</p>
        <p><b>Espaço.</b> Quantos espaços a arma ocupa, importante para a capacidade de carga do personagem.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - páginaS 142 e 143`,
      },
      {
        id: 57,
        nome: `HABILIDADE DE ARMA`,
        descricao: `
        <p>Algumas armas possuem uma ou mais das habilidades a seguir. Habilidades de armas aparecem em itálico no texto, para facilitar sua identificação.</p>
        <p><b>Adaptável.</b> Uma arma de uma mão com esta habilidade pode ser usada com as duas mãos para aumentar seu dano em um passo.</p>
        <p><b>Ágil.</b> Pode ser usada com Acuidade com Arma, mesmo não sendo uma arma leve.</p>
        <p><b>Alongada.</b> Dobra o alcance natural do atacante, mas não permite atacar um adversário adjacente.</p>
        <p><b>Desbalanceada.</b> Impõe uma penalidade de –2 em testes de ataque.</p>
        <p><b>Dupla.</b> Pode ser usada com Estilo de Duas Armas (e poderes similares) para fazer ataques adicionais, como se fosse uma arma de uma mão e uma arma leve. Cada “ponta” conta como uma arma separada para efeitos de melhorias e encantos.</p>
        <p><b>Híbrida.</b> (Ameaças de Arton, pag. 393)./b> Uma arma híbrida possui dois ou mais modos de uso. Quando usa a arma, você considera apenas as características do modo que está usando e aplica apenas habilidades e efeitos que afetem este modo. Trocar de modo é uma ação de movimento (ou livre, se você tiver Saque Rápido). Aplicar melhorias e encantos em uma arma híbrida custa o dobro do preço em tibares.</p>
        <p><b>Ocultável.</b> O tamanho e/ou formato da arma tornam mais fácil escondê-la. Ela fornece +5 em testes de Ladinagem para ocultá-la. A adaga (Tormenta20, p. 146) é uma arma ocultável.</p>
        <p><b>Surpreendente.</b> Uma vez por cena, se você sacar a arma como ação livre e usá-la para atacar no mesmo turno, o oponente fica desprevenido contra esse ataque.</p>
        <p><b>Versátil.</b> Fornece bônus em uma ou mais manobras (cumulativo com outros bônus de itens), conforme a arma.</p>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 143`,
      },
      {
        id: 58,
        nome: `PASSOS DE DANO DA ARMA`,
        descricao: `
        <p>Alguns efeitos podem aumentar ou diminuir o dano da arma em um ou mais “passos”. Por exemplo, armas aumentadas, usadas por criaturas Grandes (veja a página 106), causam um passo a mais de dano. Sempre que precisar aumentar ou diminuir o dano de uma arma em um ou mais passos, consulte a Tabela 3-2: Dano de Armas.</p>
        <table>
          <thead>
            <tr>
              <th colspan="6">Tabela 3-2: Dano de Armas</th>
            </tr>
            <tr>
              <th>−2 Passos</th>
              <th>−1 Passo</th>
              <th>Normal</th>
              <th>+1 Passo</th>
              <th>+2 Passos</th>
              <th>+3 Passos</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>1d2</td><td>1d3</td><td>1d4</td><td>1d6</td><td>1d8</td></tr>
            <tr><td>1d2</td><td>1d3</td><td>1d4</td><td>1d6</td><td>1d8</td><td>1d10</td></tr>
            <tr><td>1d3</td><td>1d4</td><td>1d6</td><td>1d8</td><td>1d10</td><td>1d12</td></tr>
            <tr><td>1d4</td><td>1d6</td><td>1d8 ou 2d4</td><td>1d10</td><td>1d12</td><td>3d6</td></tr>
            <tr><td>1d6</td><td>1d8</td><td>1d10</td><td>2d6</td><td>3d6</td><td>4d6</td></tr>
            <tr><td>1d8</td><td>1d10</td><td>1d12, 2d6 ou 3d4</td><td>3d6</td><td>4d6</td><td>4d8</td></tr>
            <tr><td>1d10</td><td>2d6</td><td>2d8</td><td>3d8</td><td>4d8</td><td>4d10</td></tr>
            <tr><td>2d6</td><td>2d8</td><td>2d10</td><td>3d10</td><td>4d10</td><td>4d12 (máximo)</td></tr>
          </tbody>
        </table>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 143`,
      },
      {
        id: 59,
        nome: `ATAQUE DESARMADO`,
        descricao: `
        <p>Um ataque desarmado é um soco, chute ou qualquer outro golpe que use seu próprio corpo. Um ataque desarmado é considerado uma arma leve corpo a corpo que causa dano de impacto não letal (1d3 pontos de dano para criaturas Pequenas e Médias) e não é afetado por efeitos que mencionem especificamente objetos ou armas empunhadas. Uma criatura só possui um único ataque desarmado (mas pode escolher qual parte do corpo utiliza cada vez que o desfere).</p>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 143`,
      },
      {
        id: 60,
        nome: `ARMAS NATURAIS`,
        descricao: `
        <p>Armas naturais representam partes específicas do corpo de uma criatura que podem ser usadas para desferir ataques, como chifres, garras ou uma poderosa mordida. Armas naturais são consideradas armas leves corpo a corpo e, assim como ataques desarmados, não são afetadas por efeitos que afetem especificamente objetos (uma arma natural não pode ser desarmada ou quebrada, por exemplo) ou que afetem armas que precisam ser empunhadas. A quantidade e tipo de dano de cada arma natural é apresentada em sua descrição.</p>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 143`,
      },
      {
        id: 61,
        nome: `ARMAS IMPROVISADAS`,
        descricao: `
        <p>Atacar com um objeto que não tenha sido feito para lutar (cadeiras, garrafas quebradas...) provoca penalidade de –2 no teste de ataque. Via de regra, armas improvisadas causam 1d6 pontos de dano, com crítico x2, mas esses valores podem mudar de acordo com o mestre. O tipo de dano é determinado pelo mestre (impacto para cadeira, corte para garrafa quebrada...).</p>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 147`,
      },
      {
        id: 62,
        nome: `MUNIÇÕES`,
        descricao: `
        <p>Projéteis usados em armas de disparo. Munição é vendida em pacotes com projéteis suficientes para 20 ataques. Sempre que você faz um ataque com uma arma de disparo, a munição é perdida, independentemente de o ataque acertar ou não.</p>
        <p>Pacotes de munições podem receber melhorias e encantos como armas (mas bônus de munições não acumulam com bônus da arma de disparo). O aumento no preço de um pacote de munição superior ou mágico é metade do aumento de uma arma (uma munição com uma melhoria, por exemplo, custa +T$ 150, em vez de +T$ 300).</p>
        <p><b>Balas.</b> Uma bolsa com 20 balas (pequenas esferas de chumbo) e pólvora. Recarregar uma pistola ou um mosquete é uma ação padrão.</p>
        <p><b>Flechas.</b> Uma aljava com 20 flechas, hastes de madeira com ponta metálica e penas para estabilizar o voo. Recarregar um arco com uma flecha é uma ação livre.</p>
        <p><b>Pedras.</b> Um saco de couro com 20 pedras polidas. Recarregar uma funda com uma pedra de qualquer tipo é uma ação de movimento.</p>
        <p><b>Virotes.</b> Uma aljava com 20 setas de madeira. Recarregar uma besta leve é uma ação de movimento; já recarregar uma besta pesada é uma ação padrão.</p>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 151`,
      },
      {
        id: 63,
        nome: `PROFICIÊNCIA DE ARMADURAS & ESCUDOS`,
        descricao: `
        <p>Armaduras são classificadas em leves e pesadas, de acordo com a sua facilidade de uso e mobilidade.</p>
        <p><b>Armaduras Leves.</b> Feitas de tecido, couro ou peles, oferecem pouca proteção, mas muita liberdade de movimentos. Vestir ou remover uma armadura leve é uma ação completa.</p>
        <p><b>Armaduras Pesadas.</b> Feitas de cota de malha (trama com anéis metálicos) ou placas de aço. Oferecem maior proteção, mas restringem seus movimentos. Se usar uma armadura pesada, você não aplica sua Destreza na Defesa e tem seu deslocamento reduzido em 3m. Vestir ou remover uma armadura pesada demora cinco minutos. Dormir de armadura pesada deixa você fatigado pelo dia.</p>
        <p><b>Escudos.</b> Existem escudos leves e pesados. Um personagem proficiente em escudo sabe usar ambos. Colocar ou tirar um escudo de qualquer tipo é uma ação de movimento.</p>
        <p><i>Ataque com Escudo.</i> Caso possua proficiência em armas marciais, você pode usar um escudo para atacar, mas perde seu bônus na Defesa até seu próximo turno se fizer isso. Escudos leves causam 1d4 pontos de dano de impacto e escudos pesados causam 1d6 pontos de dano de impacto, ambos com crítico x2. Embora possam ser usados para atacar, escudos não contam como armas.</p>
        <p><b>Penalidade por Não Proficiência.</b> Um personagem vestindo uma armadura ou escudo que não saiba usar aplica a penalidade da armadura em todas as perícias baseadas em Força e Destreza.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 147`,
      },
      {
        id: 64,
        nome: `CARACTERÍSTICAS DAS ARMADURAS E ESCUDOS`,
        descricao: `<p><b>Preço.</b> . Este é o preço por armaduras completas — “partes” de armaduras não costumam ser vendidas separadamente e não fornecem proteção quando usadas de forma avulsa.</p>
        <p><b>Bônus na Defesa.</b>  Cada armadura fornece um bônus na Defesa do usuário. Quanto mais pesada, maior o bônus. Não se pode vestir uma armadura sobre outra. Pode-se usar armadura e escudo ao mesmo tempo (os bônus se acumulam), mas não dois escudos.</p>
        <p><b>Penalidade de Armadura.</b> Por seu peso e rigidez, a maioria das armaduras dificulta o uso de perícias que demandam agilidade. Aplique a penalidade de armadura em testes de Acrobacia, Furtividade e Ladinagem (e em testes de Atletismo para natação). Penalidades de armaduras e escudos se acumulam.</p>
        <p><b>Espaço.</b> Quantos espaços a armadura ou escudo ocupa, importante para a capacidade de carga do personagem.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 153`,
      },
      {
        id: 65,
        nome: `EQUIPAMENTOS DE AVENTURA`,
        descricao: `<p>Utensílios úteis para exploradores de masmorras. A CD para fabricar qualquer desses itens é 15.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 155`,
      },
      {
        id: 66,
        nome: `FERRAMENTAS`,
        descricao: `<p>Itens desta categoria afetam testes de perícia, eliminando penalidades ou fornecendo bônus. A CD para fabricar qualquer ferramenta é 20.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 158`,
      },
      {
        id: 67,
        nome: `INSTRUMENTOS MUSICAIS`,
        descricao: `<p>Alguns itens da categoria ferramentas são instrumentos musicais. Tais itens são de grande importância para bardos e possuem as regras a seguir.</p>
        <p>• Você precisa empunhar um instrumento musical com as duas mãos para receber seus benefícios e para usar Músicas de Bardo (veja a página 45).</p>
        <p>• Instrumentos musicais podem ser usados como esotéricos por bardos (permitindo que lance magias usando a mão que empunha o instrumento).</p>
        <p>• Instrumentos musicais podem receber melhorias de ferramentas (contam como itens ligados a Atuação) e de esotéricos (mas afetam apenas magias lançadas por bardos).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 158`,
      },
      {
        id: 68,
        nome: `VESTUÁRIOS`,
        descricao: `<p>Todos os itens desta seção precisam ser vestidos para fornecerem seus benefícios. A CD para fabricar qualquer vestuário é 20.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 158`,
      },
      {
        id: 69,
        nome: `ESOTÉRICOS`,
        descricao: `<p>Itens utilizados por conjuradores para lançar magias de forma mais eficiente. Para usar um esotérico, você precisa empunhá-lo com a mão que usará para gesticular ao lançar a magia. Uma magia só pode receber os benefícios de um esotérico por vez. A CD para fabricar qualquer esotérico é 20 e para fabricá-lo você deve ser treinado em Misticismo.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 159`,
      },
      {
        id: 70,
        nome: `ALQUÍMICOS: PREPARADOS`,
        descricao: `<p>Itens de uso único que geram efeitos variados quando usados. A CD para fabricar qualquer preparado é 15.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 160`,
      },
      {
        id: 71,
        nome: `ALQUÍMICOS: CATALIZADORES`,
        descricao: `<p>Substâncias preparadas através de processos alquímicos, catalisadores são itens de uso único que melhoram o efeito de uma magia quando ela é lançada.</p>
        <p>Você precisa estar empunhando um catalisador para usá-lo e só pode usar um catalisador por vez. Reduções de custo de catalisadores acumulam com outras reduções de custo. Catalisadores que aumentam o dano só funcionam em magias que já causem dano. A CD para fabricar qualquer catalisador é 15 e para fabricá-lo você deve ser treinado em Misticismo.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 160`,
      },
      {
        id: 72,
        nome: `ALQUÍMICOS: VENENOS`,
        descricao: `<p>Substâncias naturais ou preparadas perigosas para seres vivos. Exceto se indicado o contrário, a CD para fabricar qualquer veneno é 20.</p>
        <p>Venenos são classificados de acordo com o método de inoculação.</p>
        <p><b>Contato.</b> Inoculados via um ataque que acerte (ou se a vítima toca o objeto envenenado). Aplicar um veneno em uma arma exige uma ação de movimento e uma rolagem de 1d6. Se você rolar 1, se envenena acidentalmente (mas veja o poder Venefício). O veneno permanece na arma até acertar um ataque ou até o fim da cena (o que acontecer primeiro).</p>
        <p><b>Inalação.</b> Inoculados via respiração. São armazenados em frascos que podem ser arremessados em alcance curto. Quando o frasco se quebra, libera o veneno num cubo com 3m de lado. Todas as criaturas na área são expostas — prender a respiração não impede a inoculação, pois o veneno pode entrar por canais lacrimais, membranas nasais e outras partes do corpo.</p>
        <p><b>Ingestão.</b> Inoculados através da ingestão de comida ou bebida.</p>
        <p>Uma criatura exposta a um veneno deve fazer um teste de Fortitude (CD definida pelo aplicador do veneno, atributo-chave Int). Se falhar, sofre o efeito do veneno (efeitos em parênteses afetam vítimas que passem no teste de resistência). Efeitos que não sejam instantâneos, como perda de PV recorrente ou condições, deixam a vítima com a condição envenenada, e curar esta condição encerra quaisquer efeitos de veneno (mas não recupera PV perdidos).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 161`,
      },
      {
        id: 73,
        nome: `ALIMENTAÇÃO`,
        descricao: `<p>A seção Alimentação traz pratos especiais, refeições feitas com ingredientes selecionados e que fornecem um benefício. Um prato especial deve ser consumido ao ser comprado ou fabricado. Seu bônus dura um dia e você só pode receber um bônus de alimentação por dia.</p>
        <p>Note que, se estiver usando a regra de custo de vida (veja a página 277), você não precisa se preocupar com a alimentação de seu personagem — refeições corriqueiras são apenas pano de fundo. Assim, use pratos especiais apenas quando quiser um benefício — e estiver disposto a pagar por ele!</p>
        <p><Fabricar um prato especial leva 1 hora e exige um teste de Ofício (cozinheiro) contra CD 15). Você pode sofrer –5 no teste para fabricar até cinco pratos (pagando o custo de todos).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 160`,
      },
      {
        id: 74,
        nome: `ANIMAIS`,
        descricao: `<p>Animais funcionam como parceiros (veja a página 260). Animais comprados são parceiros iniciantes. Para parceiros de maior nível, você precisa adquiri-los através de uma habilidade.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 160`,
      },
      {
        id: 75,
        nome: `ITENS SUPERIORES`,
        descricao: `<p>Itens superiores são equipamentos de alta qualidade, fabricados com as melhores técnicas e matérias-primas. Em termos de jogo, itens superiores possuem de uma a quatro melhorias. Cada melhoria fornece um benefício, mas aumenta o preço do item. Por exemplo, uma espada longa normal custa T$ 15. Uma espada longa superior com uma melhoria custa T$ 315. Já uma espada longa com quatro melhorias custa incríveis T$ 18.015!</p>
        <p>Itens com uma melhoria são caros, mas ainda relativamente comuns. Por exemplo, um castelo poderoso e próspero pode equipar seus guardas com armas com uma melhoria. Itens com duas melhorias são muito valiosos, e nunca são produzidos em grande quantidade. O capitão da guarda do mesmo castelo pode ter um item com duas melhorias. Já itens com três ou quatro melhorias são obras-primas, tão ou mais famosos quanto seus portadores. O senhor ou a senhora do castelo do exemplo talvez tenha um item assim, e ele provavelmente terá sido uma herança passada de geração em geração.</p>
        <table class="tabela-preco-melhorias">
          <thead>
            <tr>
              <th colspan="3">Tabela 3-7: Preço de Melhorias</th>
            </tr>
            <tr>
              <th>Número de Melhorias</th>
              <th>Aumento no Preço</th>
              <th>Aumento na CD</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>+ T$ 300</td><td>+5</td></tr>
            <tr><td>2</td><td>+ T$ 3.000</td><td>+10</td></tr>
            <tr><td>3</td><td>+ T$ 9.000</td><td>+15</td></tr>
            <tr><td>4</td><td>+ T$ 18.000</td><td>+20</td></tr>
          </tbody>
        </table>

        <p><h5><b>MELHORIAS</b></p></h5></p>
        <p>Apenas itens das categorias armas, armaduras e escudos, ferramentas, vestuário e esotéricos podem receber melhorias. As melhorias para cada categoria de item estão listadas na Tabela 3-8. Cada melhoria só pode ser aplicada uma vez a um mesmo item.</p>        `,
        referencia: `Tormenta 20 Jogo do Ano - página 164`,
      },
      {
        id: 76,
        nome: `FABRICANDO ITENS SUPERIORES`,
        descricao: `<p>Itens superiores só podem ser fabricados por personagens com a habilidade Fabricar Item Superior (veja a página 68). A fabricação deles segue a mesma regra de itens normais, porém, de acordo com o número de melhorias, o preço e a CD do teste de Ofício aumentam (veja a Tabela 3-7).</p>
        <p>Por exemplo, o preço de uma couraça é T$ 500. Fabricá-la exige um gasto de T$ 166 (um terço do preço) e um teste de Ofício contra CD 15. Já o preço de uma couraça com duas melhorias é T$ 3.500 (T$ 500 + T$ 3.000 das duas melhorias). Fabricá-la exige um gasto de T$ 1.166 (um terço do preço) e um teste de Ofício contra CD 25 (15 da CD base + 10 das duas melhorias).</p>
        <p>É possível adicionar melhorias a um item. Você paga a diferença de acordo com o novo número de melhorias. Por exemplo, para adicionar a terceira melhoria a um item que já possui duas, você precisa pagar mais T$ 2.000 (um terço da diferença de três para duas melhorias). Além disso, deve fazer um teste de Ofício contra a CD do número de melhorias que o item passará a ter e, se falhar por 5 ou mais, estraga o item.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 167`,
      },
      {
        id: 77,
        nome: `CLASSIFICAÇÃO DA MAGIA`,
        descricao: `<p>Todas as magias são classificadas em tipos (arcana ou divina) e círculos (do 1º ao 5º).</p>
        <p><b>Magia Arcana.</b> Manipula diretamente as energias do mundo, permitindo ao conjurador violar as leis naturais e alterar a realidade. Este tipo de mágica pode ser dominado por estudo ou aptidão natural. Seus efeitos costumam ser impressionantes, destruidores e fantásticos — como produzir relâmpagos, metamorfosear criaturas, transportar por longas distâncias e criar imagens ilusórias.</p>
        <p><b>Magia Divina.</b> Provém de uma causa ou entidade poderosa — normalmente um deus maior. Através da devoção a essa causa ou entidade, o conjurador recebe poder mágico. A magia divina geralmente envolve proteção, fortalecimento e cura.</p>        
        <p><b>Círculos.</b> Magias são divididas em círculos, do 1º ao 5º. Quanto mais alto o círculo da magia, mais poderosa ela é. Magias de 1º círculo são pouco mais que truques, mal excedendo capacidades mundanas. Já magias de 5º círculo podem invocar chuvas de meteoros, parar o tempo e até mesmo realizar desejos!</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 170`,
      },
      {
        id: 78,
        nome: `ATRIBUTO-CHAVE`,
        descricao: `<p>A magia é intensa em Arton e pode ser dominada de várias formas.</p>
        <p><i>• Inteligência.</i> Atributo-chave dos bruxos e magos. Eles seguem métodos e fórmulas antigas, herméticas, registradas em livros e pergaminhos. Para eles, magia é ciência.</p>
        <p><i>• Sabedoria.</i> Atributo-chave dos clérigos e druidas. É a magia espiritual, baseada no contato com os deuses e a percepção da natureza. Para eles, magia é fé.</p>
        <p><i>• Carisma.</i>  Atributo-chave dos bardos e feiticeiros. Eles invocam seu próprio poder interior, alimentando magias com autoconfiança e força de personalidade. Para eles, magia é arte.</p>
        <p>O atributo-chave afeta seus pontos de mana e a CD dos testes de resistência para resistir a suas magias.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 170`,
      },
      {
        id: 79,
        nome: `APRENDENDO MAGIAS`,
        descricao: `<p>Sua classe diz que tipo de magia você pode lançar: arcanistas e bardos lançam magias arcanas; clérigos e druidas lançam magias divinas. Sua classe também diz com quantas magias você começa e quantas ganha por nível.</p>
        <p>Algumas habilidades permitem que você aprenda magias novas. Caso a habilidade não diga qual magia você aprende, você pode escolher qualquer magia de um tipo e círculo que possa lançar.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 170`,
      },
      {
        id: 80,
        nome: `LANÇANDO MAGIAS`,
        descricao: `<p>Magias são habilidades mágicas e seguem todas as regras vistas a partir da página 224.</p>
        <p><b>Custo em PM.</b> Lançar uma magia exige gastar uma ação (varia de magia para magia) e pontos de mana (de acordo com o círculo da magia).</p>
        <table class="tabela-custo-magias">
          <thead>
            <tr>
              <th colspan="2">Tabela 4-1: Custo de Magias</th>
            </tr>
            <tr>
              <th>Círculo</th>
              <th>Custo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1º</td><td>1 PM</td></tr>
            <tr><td>2º</td><td>3 PM</td></tr>
            <tr><td>3º</td><td>6 PM</td></tr>
            <tr><td>4º</td><td>10 PM</td></tr>
            <tr><td>5º</td><td>15 PM</td></tr>
          </tbody>
        </table>
        <br/>
        <p><b>Gestos e Palavras.</b> Lançar uma magia envolve pronunciar palavras mágicas e gesticular com pelo menos uma mão livre. É um ato chamativo, perceptível por aqueles ao redor. Um conjurador amordaçado ou incapaz de usar as mãos não pode lançar magias.</p>
        <p><b>Concentração.</b> Lançar uma magia também exige calma e concentração. Por isso, um conjurador em situação difícil deve passar em um teste de Vontade. Se falhar no teste a magia é perdida, mas os PM são gastos mesmo assim.</p>
        <p>• Ser ferido durante a execução da magia: CD igual ao dano. Para magias que exigem uma ação padrão ou menos, o conjurador só pode ser ferido durante a execução se for atacado como uma reação ou se estiver sofrendo dano contínuo (por chamas ou veneno, por exemplo).</p>
        <p><i>• Condição ruim: CD 15 + custo em PM da magia.</i> Exemplos incluem movimento vigoroso, como montado a galope, caído ou em uma tempestade.</p>
        <p><i>• Condição terrível: CD 20 + custo em PM da magia.</i> Exemplos incluem movimento violento, como uma carroça desgovernada, agarrado ou em um terremoto.</p>
        <p><b>Armaduras e Magia Arcana.</b> O uso de armaduras atrapalha os gestos necessários para lançar magias arcanas. Lançar uma magia arcana usando armadura exige um teste de Misticismo (CD 20 + o custo em PM da magia). O teste sofre penalidade de armadura. Se falhar, a magia não funciona, mas gasta PM. Magias lançadas por habilidades de raça, poderes ou itens mágicos não sofrem esta limitação.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 170`,
      },
      {
        id: 81,
        nome: `APRIMORAMENTOS DE MAGIAS`,
        descricao: `<p>Algumas magias permitem gastar mais pontos de mana ao serem lançadas para aumentar seu efeito. Estas opções são chamadas de aprimoramentos.</p>
        <p><b>Limite de PM.</b> Como qualquer habilidade com custo variável, o máximo de PM que você pode gastar ao lançar uma magia obedece às regras para gasto de PM vistas na página 224.</p>
        <p><b>Aprimoramentos Cumulativos.</b> Para aprimoramentos que aumentam um valor (o texto começa com a palavra “aumenta”), você pode gastar aquela quantidade de PM várias vezes para acumular o aumento. A magia Bola de Fogo causa 6d6 pontos de dano e tem um aprimoramento que aumenta esse dano em +2d6 por +2 PM. Um arcanista de 11º nível pode gastar até 11 PM ao lançar essa magia, causando 14d6 pontos de dano.</p>
        <p><b>Aprimoramentos que Mudam Magias.</b> Alguns aprimoramentos alteram a descrição da magia (o texto começa com a palavra “muda”). Nesse caso, a magia continua igual em tudo, exceto a parte mudada pelo aprimoramento. Mudanças na mesma característica da magia nunca se acumulam.</p>
        <p><b>Truque.</b> Este aprimoramento transforma a magia em uma versão mais simples e reduz seu custo em PM para zero. Truques não podem ser usados em conjunto com outros aprimoramentos.</p>
        <p><b>Pré-requisitos.</b> Alguns aprimoramentos exigem que você seja capaz de lançar magias de determinado círculo. Para magias de classe, você deve cumprir o requisito com a classe com a qual aprendeu a magia. Para magias aprendidas de outra forma, você não tem como cumprir esses pré-requisitos.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 171`,
      },
      {
        id: 82,
        nome: `CARACTERÍSTICAS DE MAGIAS`,
        descricao: `
        <h5><b>ESCOLAS</b></h5>
        <p>Todas as magias, sejam arcanas ou divinas, pertencem a uma escola. A escolha de uma magia indica como ela utiliza e manipula energia.</p>
        <p>Escolas de magia contam como tipos de efeitos (veja a página 228), o que indica sua relação com outros efeitos. Por exemplo, um bônus em testes de resistência contra ilusões se aplica contra quaisquer magias de ilusão.</p>
        <p><b>Abjuração (Abjur).</b> Magias de proteção, que anulam outras magias ou expulsam criaturas invocadas de volta a seus planos de existência nativos.</p>
        <p><b>Adivinhação (Adiv).</b> Magias de detecção ou que vasculham passado e futuro.</p>
        <p><b>Convocação (Conv).</b> Magias que transportam matéria. Esse transporte é realizado através do Éter Entre Mundos; por isso, qualquer efeito que bloqueia viagens etéreas também impede convocações. Criaturas convocadas surgem em uma superfície desocupada e, quando destruídas, desaparecem e são devolvidas a seus mundos nativos.</p>
        <p><b>Encantamento (Encan).</b> . Magias que afetam a mente. Todas as magias de encantamento são efeitos mentais.</p>
        <p><b>Evocação (Evoc).</b> Magias que manipulam ou geram energia pura. Ácido, eletricidade, fogo e frio são as energias geradas pelos quatro elementos, respectivamente terra, ar, fogo e água. Magias de fogo funcionam sob a água, mas criam vapor quente em vez de chamas abertas. Luz é energia positiva, cuja manifestação é capaz de iluminar, curar e causar dano de luz. Por fim, essência é energia mágica pura.</p>
        <p><b>Ilusão (Ilus).</b> Essas magias fazem outros perceberem algo que não existe ou ignorarem algo real. Todas as magias de ilusão são efeitos mentais.</p>
        <p><b>Necromancia (Necro).</b> Magias que canalizam energia negativa, criando escuridão, drenando a força vital de criaturas vivas e criando mortos-vivos. Magias de necromancia são efeitos de trevas.</p>
        <p><b>Transmutação (Trans).</b> Magias que alteram as propriedades físicas de uma criatura ou objeto.</p>
        <h5><b>EXECUÇÃO</b></h5>
        <p>A ação necessária para lançar a magia.</p>
        <p><i>Ação Livre.</i> Você só pode lançar uma magia com execução de ação livre por rodada. Isso inclui magias afetadas por habilidades como Magia Acelerada.</p>
        <p><i>Reação.</i> Magias com execução de reação só podem ser lançadas em reação àquilo contra o qual se aplicam (por exemplo, uma magia que fornece bônus na Defesa pode ser lançada em reação a um ataque).</p>
        <p><i>Ação Completa.</i> No caso de magias com execução maior do que uma ação completa, você fica desprevenido enquanto estiver lançando a magia.</p>
        <h5><b>ALCANCE</b></h5>
        <p>Indica a distância máxima a partir do conjurador que a magia alcança. Veja a página 224 para detalhes.</p>
        <h5><b>EFEITO</b></h5>
        <p>Determina se a magia afeta um alvo, uma área ou cria algo. Veja as páginas 224 e 225 para detalhes.</p>
        <h5><b>DURAÇÃO</b></h5>
        <p>A duração indica por quanto tempo a magia mantém seu efeito. Quando ela termina, a energia mágica se dissipa e a magia acaba. Veja a página 227 para detalhes.</p>
        <p>Uma magia permanente ainda pode ser dissipada para encerrar sua duração.</p>
        <h5><b>RESISTÊNCIA</b></h5>
        <p>Magias prejudiciais normalmente permitem que seus alvos façam um teste de resistência para evitar ou reduzir seus efeitos. Veja a página 227 para detalhes.</p>
        <p><b>Dificuldade.</b> A CD do teste de resistência contra uma magia é 10 + metade do nível do personagem + atributo-chave da magia.</p>
        <p><i>Samira é uma qareen feiticeira de 8º nível com Carisma 5. A CD para resistir a suas magias é 19 (10 +4 +5 = 19).</i></p>
        <p><b>Sucesso em Testes de Resistência.</b> Uma criatura que passe em seu teste contra uma magia sem efeitos óbvios sente um tipo de formigamento ou força hostil, mas não pode deduzir a natureza exata do ataque. O conjurador também sente que a magia falhou — não é possível fingir ter sido enfeitiçado por Enfeitiçar, pois o conjurador saberá. No entanto, você não sabe se um alvo passou em um teste de resistência contra magias de área ou efeito.</p>
        <h5><b>CUSTOS ESPECIAIS</b></h5>
        <p>Algumas magias poderosas exigem outros custos além de pontos de mana. Veja a página 224 para detalhes. Se uma magia possuir custo especial, isso estará indicado no fim do texto descritivo dela.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 172 E 173`,
      },
      {
        id: 83,
        nome: `ANULANDO MAGIAS`,
        descricao: `<p>Você pode anular uma magia conjurada por outra pessoa, fazendo uma contramágica. Para isso, use a ação preparar (veja a página 234) para agir quando uma criatura lançar uma magia. Nesse instante, você deve lançar uma magia que possa anular a magia original.</p>
        <p>Normalmente, uma magia só pode ser anulada por outra igual — se um inimigo lança <I>Bola de Fogo</I>, você deve lançar outra <I>Bola de Fogo</I> para anulá-la. Mas algumas magias podem anular outras: por exemplo, <I>Luz</I> anula <I>Escuridão</I> (e vice-versa). Em caso de dúvida, cabe ao mestre julgar se uma magia anula outra. Como regra geral, uma magia nunca pode anular outra de círculo maior.</p>
        <p><i>Dissipar Magia</i> é uma exceção — pode ser usada para anular qualquer magia (mesmo de círculos maiores), mas você deve fazer um teste de Misticismo oposto por Misticismo ou Vontade de quem está lançando a magia (o que for maior). Se você vencer, seu <i>Dissipar Magia</i> funciona como contramágica.</p>
        <p>Tanto a magia anulada quanto a usada como contramágica encerram-se instantaneamente.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 172 E 173`,
      },
      {
        id: 84,
        nome: `TESTES`,
        descricao: `<p>Sempre que um personagem tenta fazer uma ação cujo resultado é incerto, o jogador faz um teste. Um teste é uma rolagem de 1d20 + um modificador.</p>
        <p>Testes são classificados pela característica utilizada (atributo ou perícia) e pelo que define sua CD (comuns ou opostos).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 220`,
      },
      {
        id: 85,
        nome: `TESTES DE ATRIBUTO`,
        descricao: `<p>Você usa testes de atributo para tarefas básicas, para as quais nenhuma perícia se aplica. Para fazer um teste de atributo, role 1d20 e some o valor do atributo apropriado.</p>
        <p><center><b>Teste de Atributo = 1d20 + Atributo</b></center></p>
        <p>Aqui estão alguns exemplos de testes de atributo, seguidos pelo atributo testado.</p>
        <ul>
          <li>Erguer um objeto pesado (Força).</li>
          <li>Amarrar cordas (Destreza).</li>
          <li>Estabilizar sangramento (Constituição).</li>
          <li>Resolver um enigma (Inteligência).</li>
          <li>Decidir se algo é prudente (Sabedoria).</li>
          <li>Causar boa impressão (Carisma).</li>
        </ul>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 220`,
      },
      {
        id: 86,
        nome: `TESTES DE PERÍCIA`,
        descricao: `<p>Um teste de perícia funciona como um teste de atributo. Porém, você soma o bônus da perícia em questão.</p>
        <p><center><b>Teste de Perícia = 1d20 + Bônus de Perícia</b></center></p>
        <p>O Capítulo 2: Perícias & Poderes explica como calcular seu bônus de cada perícia.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 220`,
      },
      {
        id: 87,
        nome: `TESTES COMUNS`,
        descricao: `<p>Testes comuns são usados quando um personagem está competindo contra o ambiente. Eles são realizados contra uma CD determinada pelo mestre, de acordo com a tarefa sendo realizada. Consulte a Tabela 5-1: Dificuldades para exemplos.</p>        <p><center><b>Teste de Perícia = 1d20 + Bônus de Perícia</b></center></p>
        <p>O mestre pode estipular as dificuldades de todos os testes usando a tabela abaixo como guia. Porém, o Capítulo 2 traz exemplos de dificuldades para tarefas específicas nas descrições de cada perícia.</p>
        <table>
          <thead>
            <tr>
              <th colspan="3">Tabela 5-1: Dificuldades</th>
            </tr>
            <tr>
              <th>Tarefa</th>
              <th>CD</th>
              <th>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fácil*</td>
              <td>5</td>
              <td>Subir uma encosta íngreme (Atletismo)</td>
            </tr>
            <tr>
              <td>Média</td>
              <td>10</td>
              <td>Ouvir um guarda se aproximando (Percepção)</td>
            </tr>
            <tr>
              <td>Difícil</td>
              <td>15</td>
              <td>Estancar um sangramento (Cura)</td>
            </tr>
            <tr>
              <td>Desafiadora</td>
              <td>20</td>
              <td>Nadar contra uma correnteza (Atletismo)</td>
            </tr>
            <tr>
              <td>Formidável</td>
              <td>25</td>
              <td>Sabotar uma armadilha complexa (Ladinagem)</td>
            </tr>
            <tr>
              <td>Heroica</td>
              <td>30</td>
              <td>Decifrar um pergaminho antigo em um idioma morto (Conhecimento)</td>
            </tr>
            <tr>
              <td>Quase Impossível</td>
              <td>40</td>
              <td>Fabricar uma “obra-prima”, ou seja, um item com quatro melhorias (Ofício)</td>
            </tr>
          </tbody>
        </table>

        <p class="nota-tabela">
          *Testes fáceis aparecem na tabela para fornecer senso de escala, mas normalmente não são exigidos — caso um personagem tente uma tarefa fácil, o mestre pode considerar que ele passa automaticamente, para acelerar o jogo.
        </p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 220`,
      },
      {
        id: 88,
        nome: `TESTES OPOSTOS`,
        descricao: `<p>Testes opostos são usados quando dois ou mais personagens estão competindo entre si. Cada personagem envolvido faz seu teste. Aquele com maior valor é o vencedor. Em caso de empate, aquele com o maior bônus vence. Se os bônus forem iguais, outra rolagem deve ser feita.</p>
        <h5><b>MISTURANDO TESTES COMUNS E OPOSTOS</b></h5>
        <p>Um teste pode ser comum e oposto ao mesmo tempo. Por exemplo, se três personagens estão disputando para ver quem atravessa um lago primeiro, todos devem fazer um teste de Atletismo contra uma CD. Aqueles que passarem atravessam o lago. Dentre esses, aquele com o maior resultado chega primeiro.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 220`,
      },
      {
        id: 89,
        nome: `TESTES: SUCESSOS E FALHAS AUTOMÁTICAS`,
        descricao: `<p>Ao fazer um teste, um 20 natural (quando o resultado do d20 é 20) sempre é um sucesso, e um 1 natural (quando o resultado do d20 é 1) sempre é uma falha, não importando o valor a ser alcançado.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 221`,
      },
      {
        id: 90,
        nome: `TESTES: CONDIÇÕES FAVORÁVEIS E DESFAVORÁVEIS`,
        descricao: `<p>Certas situações podem tornar um teste mais fácil ou mais difícil. Para representar isso, o mestre pode alterar o teste de duas maneiras.</p>
        <ul>
        <li>Conceder ao personagem um bônus de +2 ou mais para representar circunstâncias que melhorem seu desempenho. Por exemplo, procurar por um livro em uma biblioteca bem organizada com um teste de Investigação.</li>
        <li>Impor ao personagem uma penalidade de –2 ou mais para representar circunstâncias que atrapalham seu desempenho, como procurar por um frasco específico em um laboratório bagunçado com um teste de Investigação.</li>
        </ul>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 221`,
      },
      {
        id: 91,
        nome: `TESTES: NOVAS TENTATIVAS`,
        descricao: `<p>Em geral, você pode tentar um teste de novo em caso de falha e continuar tentando por toda a eternidade. Contudo, alguns testes acarretam penalidades (ou problemas!) em caso de falha. Por exemplo, um personagem que falhe em um teste de Atletismo para subir uma encosta pode tentar novamente. Mas, se falhar por 5 ou mais, cairá. Ele pode se levantar e tentar de novo, supondo que a queda não tenha sido muito dolorida...</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 221`,
      },
      {
        id: 92,
        nome: `TESTES: FERRAMENTAS`,
        descricao: `<p>Algumas perícias requerem ferramentas. Se isso for necessário, será mencionado na descrição da perícia. Se você não possui o item apropriado, ainda pode usar a perícia, mas sofre uma penalidade de –5 no teste.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 221`,
      },
      {
        id: 93,
        nome: `TESTES: AJUDAR`,
        descricao: `<p>Às vezes, os personagens trabalham juntos e se ajudam. Um personagem (normalmente aquele com o maior bônus) é considerado o líder, e faz o teste normal, enquanto cada ajudante faz um teste contra CD 10 (usando a mesma perícia ou outra que faça sentido). Um teste de ajuda concede ao líder um bônus de +1, e +1 adicional para cada 10 pontos acima da CD (+2 para um resultado 20, +3 para 30 e assim por diante). Em muitos casos, ajuda externa não traz benefícios — você não pode ajudar um colega a ser mais silencioso em seu teste de Furtividade. Ou então apenas um número limitado de ajudantes pode auxiliar alguém ao mesmo tempo (não há espaço para muitas pessoas à volta de uma mesma fechadura). O mestre limita a ajuda como achar melhor, de acordo com a tarefa e as condições.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 221`,
      },
      {
        id: 94,
        nome: `TESTES: TESTES SEM ROLAGENS`,
        descricao: `<p>Um teste representa a realização de uma tarefa desafiadora — com alta dificuldade ou feita em situação de perigo. Quando este não é o caso, você pode usar as opções a seguir para dispensar as rolagens. Elas são úteis para acelerar o jogo e não interromper a história com rolagens desnecessárias.</p>
        <p><b>Escolher 0.</b> Quando seu bônus total em um teste é igual ou maior que a CD, você não precisa fazer o teste — você automaticamente passa. A tarefa é trivial para alguém com suas habilidades. Por exemplo, um personagem com Sobrevivência +15 não precisa fazer testes para montar acampamento em uma planície (uma tarefa com CD 15). Caso o teste tenha variados graus de sucesso, você obtém o mínimo possível. Você ainda pode fazer uma rolagem para alcançar um grau maior de sucesso, se quiser, mas arrisca falhar se rolar um 1 natural.</p>
        <p><b>Escolher 10.</b> Quando não há pressão para realizar uma tarefa, você pode escolher 10. Isso significa realizar a tarefa com calma, sem chance para erros. Em vez de rolar 1d20, considere um resultado 10 automático. Isso costuma bastar para muitas tarefas.</p>
        <p><b>Escolher 20.</b> Quando não há pressão e a tarefa não oferece nenhuma consequência ou penalidade em caso de falha, você pode escolher 20. Isso significa gastar todo o tempo do mundo e tentar todas as possibilidades, até passar. Em vez de rolar 1d20, considere um resultado 20 automático. Escolher 20 exige vinte vezes mais tempo que o normal para executar a perícia (ou, para simplificar, a cena inteira, de acordo com o mestre).</p>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 221`,
      },
      {
        id: 95,
        nome: `TESTES ESTENDIDOS`,
        descricao: `<p>A maioria das tarefas pode ser resolvida com um único teste. Se um personagem quer escalar um muro, o sucesso ou a falha são aparentes após um único teste. Entretanto, para situações complexas e que consomem tempo — como escalar uma montanha —, ou quando o mestre quer criar clima de tensão, esta regra pode ser usada.</p>
        <p>Em um teste estendido, <i>o grupo deve acumular uma quantidade de sucessos antes de três falhas</i>, o que indica uma falha total. Quanto mais complexa a tarefa, mais sucessos são exigidos — veja a tabela ao lado.</p>
        <table class="tabela-testes-estendidos">
          <thead>
            <tr>
              <th colspan="3">Tabela 5-2: Testes Estendidos</th>
            </tr>
            <tr>
              <th>Sucessos exigidos</th>
              <th>Complexidade</th>
              <th>Exemplos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3</td>
              <td>Baixa</td>
              <td>Escalar um paredão (Atletismo)</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Média</td>
              <td>Atravessar o Pântano dos Juncos (Sobrevivência)</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Alta</td>
              <td>Compreender um ritual antigo (Misticismo)</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <p>Por exemplo, os personagens estão procurando o esconderijo de uma guilda de ladrões. Para isso precisam fazer perguntas na cidade. Pela complexidade da tarefa, o mestre pede um teste estendido de Investigação com complexidade média e CD 20. Isso significa que os heróis devem fazer testes de Investigação contra CD 20 até acumularem cinco sucessos. Se conseguirem, descobrem as pistas. Porém, se acumularem três falhas antes dos cinco sucessos, têm uma falha total — nesse caso, o grupo pode ter sido descuidado e alertado os membros da guilda, além de não conseguir a informação que queria.</p>
        <p>Testes estendidos podem envolver mais de uma perícia. Por exemplo, infiltrar-se em uma base purista pode exigir um sucesso em Atletismo, para escalar o muro, e dois em Furtividade, para não ser visto pelas sentinelas. Um julgamento pode exigir dois sucessos em Nobreza, para conhecer a lei, mais três em Diplomacia, para convencer o magistrado.</p>
        <h5><b>TESTES ESTENDIDOS ABERTOS</b></h5>
        <p>O mestre pode permitir que os jogadores decidam quais perícias vão usar em um teste estendido. O jogador escolhe a perícia, então explica como vai utilizá-la para resolver o desafio.</p>
        <p>Por exemplo, em um julgamento, um personagem poderia usar Enganação (“vou corromper o magistrado”); Intimidação (“vou assustar os jurados para que decidam em meu favor”); Intuição (“vou analisar a situação para determinar qual o melhor argumento”) etc.</p>
        <p>Permitir que os jogadores descrevam quais perícias vão usar irá envolvê-los mais com a cena. Se o mestre permitir isso, cada teste avulso dentro do teste estendido precisa ser feito com uma perícia diferente. Se combinada com as opções que dificultam os testes estendidos (veja abaixo), essa opção exige pensamento tático por parte do grupo!</p>
        <h5><b>TESTES ESTENDIDOS EM GRUPO</b></h5>
        <p>Por serem feitos ao longo do tempo, testes estendidos podem ser feitos por mais de um personagem, ou mesmo pelo grupo todo. De fato, colocar o grupo inteiro para fazer um único teste estendido é uma ótima forma de unir os jogadores!</p>
        <p>Caso mais de um personagem esteja participando do teste estendido, resolva o teste por “rodadas”; a cada rodada, cada jogador faz um teste. Some os sucessos e falhas de todos para definir se o teste estendido é bem-sucedido ou não.</p>
        <p>Fazer testes estendidos em grupo é muito útil em testes estendidos abertos (veja acima), nas quais cada perícia só pode ser usada uma vez. Com vários personagens participando do teste, a chance deles terem mais perícias treinadas diferentes é maior.</p>        
        <h5><b>AJUDA E TESTES ESTENDIDOS</b></h5>
        <p>Personagens podem ajudar em testes estendidos, usando a regra de ajuda padrão. Porém, uma perícia usada para ajudar não poderá ser usada novamente no teste estendido, seja para ajudar, seja para realizar o teste principal.</p>
        <h5><b>DIFICULTANDO TESTES EXTENDIDOS</b></h5>
        <p>Para testes estendidos especialmente desafiadores, o mestre pode usar <i>dificuldades cumulativas</i> e <i>penalidades por falhas.</i></p>
        <p>No primeiro caso, a CD aumenta em +2 a cada teste (independentemente de o teste ser um sucesso ou uma falha), representando a dificuldade crescente. Por exemplo, num teste estendido para se infiltrar até os aposentos reais do castelo, a CD pode aumentar a cada teste, pois quanto mais perto do quarto do rei, maior a segurança.</p>
        <p>No segundo caso, o mestre aplica uma penalidade para cada falha — isto é, além de chegar mais perto da falha total. Digamos que um personagem esteja envolvido em uma negociação intrincada com um aristocrata, exigindo um teste estendido de Diplomacia. Cada vez que falha, pode sofrer uma penalidade cumulativa de –2 nos testes seguintes — isso significa que o aristocrata está ficando cada vez mais ofendido. Da mesma forma, um personagem escalando uma montanha com um teste estendido de Atletismo pode sofrer 3d6 pontos de dano para cada falha, representando ferimentos durante a subida.</p>
        <h5><b>INTERRUPÇÕES E NOVAS TENTATIVAS</b></h5>
        <p>A maioria dos testes estendidos pode ser interrompida sem problemas. Entretanto, o mestre pode determinar que uma interrupção conte como uma falha ou até mesmo como uma falha completa no teste estendido.</p>
        <p>Normalmente pode-se fazer novas tentativas de testes estendidos. Entretanto, da mesma forma que com testes normais, alguns testes estendidos têm consequências que devem ser levadas em conta. Por exemplo, uma armadilha que exige um teste estendido de Ladinagem pode disparar em caso de falha.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 222 e 223`,
      },
      {
        id: 96,
        nome: `HABILIDADES`,
        descricao: `<p>Além de atributos e perícias, personagens possuem habilidades fornecidas por sua raça, origem, classe, itens e outras fontes.</p>
        <h5><b>USANDO HABILIDADES</b></h5>
        <p>Habilidades podem ser passivas (seus efeitos estão sempre funcionando) ou ativadas (precisam ser usadas para gerar seus efeitos). O poder Coração da Selva, do druida é uma habilidade passiva, enquanto a Fúria do bárbaro é uma habilidade ativada. Para usar habilidades ativadas você precisa gastar uma ação e, provavelmente, pontos de mana.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 224`,
      },
      {
        id: 97,
        nome: `HABILIDADES: AÇÃO NECESSÁRIA`,
        descricao: `<p>A descrição da habilidade determina a ação necessária para usá-la. Caso nada esteja descrito, usar a habilidade é uma ação livre (exceto no caso abaixo).</p>
        <p><b>Habilidades Engatilhadas.</b> Habilidades ativadas por decorrência de outro evento (como fazer um ataque), são ativadas como uma reação e somente uma vez por instância do evento.</p>
        <p><i>A habilidade Frenesi, do bárbaro, diz que quando você usa a ação agredir, pode gastar 2 PM para realizar um ataque adicional. Ativar Frenesi é uma reação que só pode ser feita uma vez por ação agredir.</i></p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 224`,
      },
      {
        id: 98,
        nome: `HABILIDADES: CUSTO DE PONTOS DE MANA`,
        descricao: `<p>A descrição da habilidade determina se são necessários PM para usá-la. Nesse caso, você gasta os PM mesmo em caso de falha. Por exemplo, se um guerreiro usa Ataque Especial e erra o ataque, ainda assim gasta os pontos de mana.</p>
        <p>Para habilidades com custo variável, o máximo de PM que você pode gastar por uso é igual ao seu nível na classe que fornece a habilidade (mas você sempre pode usar a habilidade em seu custo mínimo). Para habilidades de raça, origem ou outras fontes e poderes gerais, o limite é o seu nível de personagem.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 224`,
      },
      {
        id: 99,
        nome: `HABILIDADES: CUSTOS ESPECIAIS`,
        descricao: `<p>Alguns habilidades possuem custos além de PM.</p>
        <p><b>Componente Material.</b> A habilidade exige ingredientes para ser usada. Esses ingredientes devem estar na mão do personagem e são consumidos com o uso (mesmo que a habilidade falhe).</p>
        <p><b>Penalidade de PM.</b> A habilidade reduz seus PM máximos enquanto estiver ativa (você não recupera esses PM até a duração da habilidade acabar).</p>
        <p><b>Sacrifício de PM.</b> Certas habilidades poderosíssimas têm um custo ainda mais alto: você deve sacrificar permanentemente certa quantidade de PM para usá-las.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 224`,
      },
      {
        id: 100,
        nome: `HABILIDADES: ALCANCE`,
        descricao: `<p>Muitas habilidades possuem um <I>alcance</I>, isto é, a distância máxima a partir do personagem da qual o efeito pode se originar. Caso alguma parte da área da habilidade esteja além do alcance, a área é afetada normalmente.</p>
        <p><b>Pessoal.</b> A habilidade afeta somente o personagem e/ou objetos que ele esteja carregando. Também pode ser uma habilidade de área que se inicia a partir do personagem e só o afeta se mencionar.</p>
        <p><b>Toque.</b> O personagem precisa tocar o alvo em seu alcance natural para afetá-lo, mas não precisa gastar uma ação ou fazer testes para isso (tocar o alvo faz parte da ação da habilidade).</p>
        <p><b>Curto.</b> A habilidade alcança alvos a até 9m (6 quadrados em um mapa).</p>
        <p><b>Médio.</b> A habilidade alcança alvos a até 30m (20 quadrados em um mapa).</p>
        <p><b>Longo.</b> A habilidade alcança alvos a até 90m (60 quadrados em um mapa).</p>
        <p><b>Ilimitado.</b> A habilidade alcança qualquer lugar no mesmo mundo. A maioria das habilidade com este alcance exige que você conheça e/ou já tenha estado no ponto de origem da habilidade.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 224`,
      },
      {
        id: 101,
        nome: `HABILIDADES: EFEITOS`,
        descricao: `<p>Toda habilidade gera um <i>efeito</i> — causar dano em um alvo, fornecer um bônus a você ou qualquer outra coisa. A seguir estão regras gerais para efeitos. Muitos efeitos possuem um tipo (veja a página 228).</p>
        <h5><b>ALVOS & ÁREAS</b></h5>
        <p>A maior parte das habilidades atinge um ou mais alvos ou afeta uma área.</p>
        <p><b>Linha de Efeito.</b> Um caminho direto e sem obstruções até onde a habilidade pode ter efeito. Você deve ter linha de efeito para qualquer alvo ou ponto de origem da área que queira afetar, ou para qualquer espaço onde queira criar um efeito. Qualquer barreira sólida, visível ou não, anula a linha de efeito.</p>
        <p><b>Alvo.</b> A habilidade afeta um ou mais alvos, que podem ser criaturas ou objetos. Você usa a habilidade sobre os alvos e deve ser capaz de percebê-los. Uma habilidade usada sobre um tipo de alvo errado 224 Jogando falha automaticamente. Por exemplo, a magia Tranca Arcana não tem efeito se lançada sobre algo que não seja uma porta, baú ou semelhante.</p>
        <p><i>Objetos e Tamanhos.</i> Algumas habilidades se referem a objetos em termos de espaços — consulte o Capítulo 3. Outras habilidades se referem a objetos em termos de categorias de tamanho. Nesse caso, o mestre deve arbitrar a categoria do objeto comparando-o com criaturas. Por exemplo, uma adaga é um objeto Minúsculo, uma carroça é um objeto Grande e um galeão é um objeto Colossal.</p>
        <p><b>Área.</b> A habilidade afeta uma área. Normalmente, você escolhe um ponto dentro do alcance e que possa perceber para ser a origem da área, mas não controla quais criaturas ou objetos serão afetados — qualquer coisa na área estará sujeita aos efeitos, incluindo você. De acordo com o mestre, você pode usar uma habilidade numa área que não possa perceber com um teste de Percepção (Misticismo no caso de magias) contra CD 20 + custo em PM. Para habilidades com alcance pessoal, você é o ponto de origem e não é afetado (exceto quando dito o contrário). Áreas avançam até seu limite ou até serem interrompidas por uma barreira capaz de bloqueá-las. Em geral, áreas se enquadram em uma das categorias a seguir.</p>
        <ul>
        <li><i>Cilindro.</i> Surge na interseção de quatro quadrados, estendendo-se pela largura indicada e subindo até o fim da altura indicada.</li>
        <li><i>Cone.</i> Surge adjacente a você e se afasta de você na direção escolhida, ficando mais largo com a distância, conforme os modelos da ilustração abaixo.</li>
        <li><i>Esfera.</i> Surge na interseção de quatro quadrados, estendendo-se em todas as direções até o limite de seu raio.</li>
        <li><i>Linha.</i> Surge adjacente a você e se afasta de você reta até o fim do alcance. A menos que indicado o contrário, uma linha tem 1,5m de largura.</li>
        <li><i>Quadrado.</i> Surge no quadrado ou quadrados escolhidos, afetando o piso. Um “cubo” é como um quadrado, mas afeta também a altura.</li>
        <li><i>Outros.</i> Algumas habilidades podem ter áreas específicas, citadas em sua descrição.</li>
        </ul>
        <p><b>Criação.</b> Caso a habilidade crie ou invoque alguma coisa, a coisa aparece em um local a sua escolha dentro do alcance e para o qual você tenha linha de efeito. Após surgir, a coisa pode se mover ou ser movida para fora da linha de efeito. Por exemplo, você não pode conjurar um monstro dentro de uma sala fechada. Mas, uma vez conjurar, o monstro pode entrar na sala, mesmo que você ainda não tenha linha de efeito para o interior dela.</p>
        <p><b>Redirecionando Efeitos.</b> Algumas habilidades permitem redirecionar seu efeito para novos alvos ou áreas após serem usadas. Quando isso for possível, redirecionar a habilidade é uma ação padrão.</p>

        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 224 e 225`,
      },
      {
        id: 102,
        nome: `HABILIDADES: ACUMULANDO EFEITOS`,
        descricao: `<p>A interação entre diferentes efeitos depende de sua origem. As fontes de efeitos são habilidades, perícias, itens, magias, parceiros e o ambiente.</p>
        <p>Efeitos de habilidades e perícias acumulam entre si, exceto quando vierem da mesma habilidade ou perícia. Assim, o bônus na Defesa da Pele de Ferro do bárbaro acumula com o bônus na Defesa da Esquiva Sagaz do bucaneiro. Isso não inclui magias.</p>
        <p>Efeitos de itens, magias, parceiros e o ambiente acumulam com os de outras fontes, mas não entre si. Assim, um personagem com um item que forneça +1 em Fortitude e uma magia que também forneça +1 em Fortitude terá um bônus de +2 nessa perícia. Porém, um personagem com dois itens ou duas magias que forneçam +1 em Fortitude não terá +2 — como os efeitos são da mesma fonte, não acumulam.</p>
        <p><b>Armaduras.</b> Bônus na Defesa e penalidade de armadura de escudos se acumulam com os de armaduras e um outro item adicional a sua escolha.</p>
        <p><b>Atributos.</b> O valor de um mesmo atributo não se acumula em características do personagem. Ou seja, um clérigo/druida não soma duas vezes sua Sabedoria nos pontos de mana, assim como um bucaneiro/nobre não soma duas vezes seu Carisma na Defesa. A exceção são perícias: é possível somar um atributo a uma perícia que use este mesmo atributo-chave, mas apenas uma vez. Por exemplo, um caçador pode usar Explorador para somar sua Sabedoria em Percepção e Sobrevivência (perícias que usam Sabedoria).</p>
        <p><b>Chance de Falha.</b> Chance de falha nunca acumula acima de 75%. Sempre há no mínimo uma chance de 1 em 4 de acertar o alvo.</p>
        <p><b>Reduções de Custo.</b> Reduções no custo de PM não são cumulativas. Uma habilidade nunca pode ter seu custo reduzido para menos de 1 PM.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 226`,
      },
      {
        id: 103,
        nome: `HABILIDADES: EFEITOS QUE AFETAM TESTE`,
        descricao: `<p>Efeitos que fornecem um bônus a um teste ou modificam sua dificuldade devem ser usados antes de rolar o dado. Efeitos que permitem que você role novamente o dado devem ser usados antes de o mestre declarar se você passou ou não no teste (e você deve ficar com o segundo valor rolado, mesmo que seja pior que o primeiro).</p>
        <p><I>A habilidade Orgulho, do nobre, que fornece um bônus para um teste, deve ser usada antes de rolar o teste. A habilidade Mestre em Arma, do guerreiro, que permite que você role novamente um ataque recém realizado, deve ser usada antes de o mestre declarar se o ataque acertou ou não.</I></p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 226`,
      },
      {
        id: 104,
        nome: `HABILIDADES: EFEITOS - LIMITES DE NÍVEL`,
        descricao: `<p>Algumas habilidades são limitadas pelo seu nível. Para classes, use seu nível naquela classe. Para outros casos, seu nível de personagem.</p>
        <p><I>A habilidade Insolência, do bucaneiro, permite que você some seu Carisma na Defesa, limitado pelo seu nível. Assim, um bucaneiro de 2º nível com Car 3 soma +2 na Defesa. Quando subir para o 3º nível, passará a somar +3. Da mesma forma, um lutador de 4º nível usando a habilidade Voadora soma no máximo +4d6 de dano, mesmo que tenha se deslocado mais de 8 quadrados.</I></p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 226`,
      },
      {
        id: 105,
        nome: `HABILIDADES: DURAÇÃO`,
        descricao: `<p>A duração indica por quanto tempo a habilidade mantém seu efeito.</p>
        <p><b>Instantânea.</b> O efeito da habilidade termina assim que ela é usada, mas suas consequências podem durar mais tempo. Por exemplo, uma magia Curar Ferimentos age instantaneamente, mas os ferimentos continuam curados.</p>
        <p><b>Cena.</b> A habilidade dura uma cena inteira, encerrando-se quando esse momento da história acaba. Uma cena não tem uma medida fixa. Podem ser algumas rodadas (um combate), alguns minutos (uma conversa entre personagens), horas (atravessar um bosque) ou até dias (uma viagem sem incidentes). Veja mais sobre isso no Capítulo 6: O Mestre.</p>
        <p><b>Sustentada.</b> A habilidade precisa de um fluxo constante de mana. O personagem deve gastar 1 PM como uma ação livre no início de cada turno seu para manter o efeito ativo. Se não o fizer, a habilidade termina. Você pode manter diversas habilidades sustentadas, pagando o custo de cada uma, mas apenas uma magia sustentada por vez.</p>
        <p><b>Definida.</b>A duração pode ser medida em rodadas, horas, dias ou outra unidade de tempo.</p>
        <p><b>Permanente.</b> A habilidade fica ativa para sempre, mas ainda pode ser encerrada de outras formas.</p>
        <p><b>Duração e Áreas.</b> Caso a habilidade afete uma área, seus efeitos permanecem nessa área pela sua duração. Criaturas e objetos válidos que entrem na área são afetados, deixando de sê-lo quando saem.</p>
        <p><b>Descarregar.</b> Algumas habilidades duram até serem ativadas e descarregadas. A habilidade permanece “dormente” até que determinado evento aconteça, quando é ativada e descarregada, ou até que sua duração transcorra, quando se encerra sem efeito.</p>
        <p><b>Encerrando suas habilidades.</b> Um personagem pode encerrar uma habilidade sua e seus respectivos efeitos como uma ação livre.</p>
        <p><b>Morte e Duração.</b> A morte de um personagem não afeta suas habilidades (exceto sustentadas) — elas permanecem até que sua duração termine.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 227`,
      },
      {
        id: 106,
        nome: `HABILIDADES: TESTE DE RESISTÊNCIA`,
        descricao: `<p>Habilidades prejudiciais normalmente permitem que seus alvos façam um teste de resistência para evitar ou reduzir seus efeitos. Se esse for o caso, o tipo de teste (Fortitude, Reflexos ou Vontade) e a maneira como ele altera o efeito serão descritos na habilidade.</p>
        <p>A CD do teste de resistência para qualquer efeito gerado por um personagem é 10 + metade do nível do personagem + seu valor num atributo. O atributo aparecerá entre parênteses na descrição da fonte do efeito (habilidade ou item; para magias, será sempre o atributo-chave da magia).</p>
        <p><i>A habilidade Presença Aristocrática, do nobre, tem CD Car, ou seja, a CD para resistir a ela é 10 + metade do nível do personagem + seu Carisma. Para Marsha Yleus, uma humana nobre de 10º nível com Carisma 4, a CD para resistir a essa habilidade é 19 (10 + 5 + 4).</i></p>
        <p><b>Anula.</b> A habilidade não tem efeito sobre um alvo que passe em seu teste de resistência.</p>
        <p><b>Parcial.</b> O efeito é menor em um alvo que passe no teste de resistência.</p>
        <p><b>Reduz à Metade.</b> O efeito é reduzido à metade em um alvo que passe no teste de resistência.</p>
        <p><b>Desacredita.</b> Um termo específico para efeitos de ilusão. Se uma criatura interagir com a ilusão (examinando-a de perto ou tocando-a; apenas observá-la de longe não é suficiente) tem direito a um teste para perceber que ela não é real. A ilusão continua funcionando mesmo que uma criatura perceba que ela não é real; essa criatura pode avisar seus aliados como uma ação livre, permitindo que eles façam testes para desacreditar.</p>
        <p><b>Objetos e Dano.</b> A menos que a descrição do efeito diga o contrário, itens carregados não sofrem dano por habilidades (mesmo de área). Objetos soltos sofrem dano (mas somente de habilidades que possam ter objetos como alvo ou afetem uma área).</p>
        <p><b>Objetos e Testes de Resistência.</b> Para habilidades capazes de afetar objetos e que permitem testes de resistência, itens mundanos soltos falham automaticamente e itens mundanos carregados podem fazer testes com o bônus de seu portador. Itens mágicos sempre podem fazer teste de resistência, usando seu próprio bônus (veja página 334) ou de seu portador, se houver (o que for maior).</p>
        <p><b>Testes de Perícia.</b> Algumas habilidades incluem testes de perícia para resistir a efeitos. A menos que a descrição indique o contrário, a dificuldade dos testes é igual à CD para resistir à habilidade.</p>
                `,
        referencia: `Tormenta 20 Jogo do Ano - página 227`,
      },
      {
        id: 107,
        nome: `CLARIFICAÇÕES DE REGRAS`,
        descricao: `<p><b>Arredondando.</b> A menos que indicado o contrário, sempre que um efeito indica uma divisão, arredonde para baixo. Por exemplo, se um ataque causa 7 pontos de dano e um efeito reduz esse dano à metade, o ataque causa apenas 3 pontos de dano.</p>
        <p><b>Ordem.</b> Se mais de um efeito afetar um valor, siga a ordem de operações padrão. Ou seja, aplique primeiro multiplicações e divisões, depois somas e subtrações. O resultado de um teste de resistência é sempre o primeiro a ser aplicado.</p>
        <p><i>Por exemplo:</i> um guerreiro usando uma armadura incandescente (que fornece redução de fogo 10) é atingido por uma Bola de Fogo que causa 26 pontos de dano. Primeiro, ele faz seu teste de Reflexos. Se passar, reduz o dano à metade, para 13 (26/2=13).</p>
        <p>Então, o guerreiro pode usar a habilidade Durão. Se tiver passado no teste de resistência, sofrerá 6 pontos de dano (13/2=6). Se tiver falhado, sofrerá 13 pontos de dano (26/2=13)</p>
        <p>Por fim, ele aplica sua RD 10. Se tiver passado no teste de resistência e usado a habilidade Durão, não sofrerá dano. Se tiver passado no teste de resistência ou usado a habilidade Durão, sofrerá 3 pontos de dano (13–10=3). Por fim, se não tiver passado no teste nem usado Durão, sofrerá 16 pontos de dano (26–10=16).</p>
        <p><b>Multiplicações.</b> Se mais de um efeito fizer você multiplicar um valor, combine-os em um único multiplicador, com cada efeito além do primeiro adicionando seu multiplicador –1. Por exemplo, dois efeitos que dobrem o valor (x2 + x2) irão triplicar o valor (2 + [2–1] = 3) em vez de quadruplicá-lo.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 226`,
      },
      {
        id: 108,
        nome: `TIPOS DE EFEITOS DE HABILIDADES`,
        descricao: `<p>Muitos efeitos são categorizados em um (ou em mais de um) dos tipos a seguir. Por si só, a maioria dos tipos não possui efeito em regras. Contudo, indicam como o efeito interage com outros. Por exemplo, uma criatura com imunidade a medo não será afetada por efeitos do tipo medo.</p>
        <p><b>Arcano.</b> Gerado pelas energias místicas de Arton. Todos efeitos arcanos são mágicos.</p>
        <p><b>Atordoamento.</b> Afeta a capacidade de agir do alvo.</p>
        <p><b>Cansaço.</b> Diminui as capacidades físicas do alvo. Construtos e mortos-vivos são imunes a efeitos de cansaço.</p>
        <p><b>Climático.</b> Gerado pelas forças da natureza.</p>
        <p><b>Cura.</b> Cura pontos de vida do alvo.</p>
        <p><b>Dano.</b> Reduz os PV do alvo. Efeitos deste tipo são subdivividos em tipos de dano (veja a página 230).</p>
        <p><b>Divino.</b> Gerado pela energia de um deus, direta ou indiretamente. Todos efeitos divinos são mágicos.</p>
        <p><b>Luz.</b> Efeitos relacionados a dano e cura de luz, iluminação e energia positiva (sinônimo de luz).</p>
        <p><b>Mágico.</b> Energizados por forças arcanas ou divinas, envolvem magias, efeitos gerados por itens mágicos ou marcados com o símbolo ✨. Podem ser subdivididos em escolas de magia (veja a página 172).</p>
        <p><b>Medo.</b> Medo capaz de prejudicar o alvo. Criaturas com Inteligência nula são imunes a medo.</p>
        <p><b>Mental.</b> Afeta a mente do alvo, diminuindo suas capacidades ou influenciando-a. Criaturas com Inteligência nula são imunes a efeitos mentais.</p>
        <p><b>Metabolismo.</b> Afeta a fisiologia do alvo. Incluem doenças, sangramento e fome. Construtos e mortos-vivos são imunes a efeitos de metabolismo.</p>
        <p><b>Metamorfose.</b> Altera a forma ou composição corporal do alvo. Inclui petrificação.</p>
        <p><b>Movimento.</b> Afeta ou remove a capacidade de se movimentar do alvo.</p>
        <p><b>Perda de Vida.</b> Reduz os PV do alvo. Ao contrário de dano, não é afetado por redução de dano.</p>
        <p><b>Sentidos.</b> Afeta os sentidos físicos do alvo, por exemplo, deixando-o cego ou surdo.</p>
        <p><b>Trevas.</b> Efeitos relacionados a necromancia, escuridão e energia negativa (sinônimo de trevas).</p>
        <p><b>Veneno.</b> Efeitos gerados por venenos. Construtos e mortos-vivos são imunes a venenos.</p>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 228`,
      },
      {
        id: 109,
        nome: `HABILIDADE GERAL: AGARRAR APRIMORADO`,
        descricao: `<p>Se a criatura acertar um ataque com uma arma natural (especificada na habilidade), poderá fazer a manobra agarrar com esta arma como uma ação livre. Enquanto está usando a arma natural para agarrar, a criatura não pode usá-la para desferir outros ataques.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 228`,
      },
      {
        id: 110,
        nome: `HABILIDADE GERAL: CURA ACELERADA`,
        descricao: `<p>No início de seu turno, a criatura recupera pontos de vida iguais ao seu valor de Cura Acelerada (por exemplo, 5 PV com Cura Acelerada 5). Se houver algum tipo de dano listado após uma barra, a Cura Acelerada não recupera dano daqueles tipos. Por exemplo, uma criatura com Cura Acelerada 10/ácido recupera 10 PV no início de seu turno, a menos que o dano tenha sido causado por ácido. Múltiplas habilidades de Cura Acelerada se acumulam. Cura Acelerada não cura perda de PV, apenas dano.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 228`,
      },
      {
        id: 111,
        nome: `HABILIDADE GERAL: DESLOCAMENTO DE ESCALADA`,
        descricao: `<p>Pode caminhar por superfícies verticais e até mesmo de cabeça para baixo como se fossem o chão. O movimento de escalada segue as demais regras de movimento e é afetado pelas características da superfície (uma parede acidentada pode ser considerada terreno difícil, por exemplo). Uma criatura que esteja escalando e perca seu deslocamento de escalada ou a capacidade de realizar ações físicas (como por ficar inconsciente ou paralisada) cai.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 228`,
      },
      {
        id: 112,
        nome: `HABILIDADE GERAL: DESLOCAMENTO DE ESCAVAÇÃO`,
        descricao: `<p>Pode se mover sob terreno granular, como terra e areia (mas não atravessar rocha sólida). Após a passagem da criatura, o terreno atrás dela se fecha devido aos restos de material deixados para trás. Deslocamento de escavação pode ser afetado pelas características do solo: por exemplo, um solo pedregoso pode ser considerado terreno difícil.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 228`,
      },
      {
        id: 113,
        nome: `HABILIDADE GERAL: DESLOCAMENTO DE NATAÇÃO`,
        descricao: `<p>Pode se deslocar em líquidos sem precisar fazer testes de Atletismo. Porém, assim como criaturas terrestres podem precisar de testes de Acrobacia e Atletismo em certas circunstâncias (como durante um terremoto), uma criatura com deslocamento de natação pode precisar de testes de Atletismo (como em correntes aquáticas muito fortes ou num redemoinho). A criatura não sofre penalidades e limitações por estar submersa (com exceção daquelas relacionadas às suas armas — veja mais na página 269).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 228`,
      },
      {
        id: 114,
        nome: `HABILIDADE GERAL: DESLOCAMENTO DE VOO`,
        descricao: `<p>Pode voar. Uma criatura com deslocamento de voo pode encerrar seu deslocamento em pleno ar e pode se mover e atacar como uma criatura terrestre. Uma criatura voando que perca seu deslocamento de voo ou a capacidade de realizar ações cai 150m por rodada. Uma criatura voando que sofra uma manobra derrubar bem-sucedida cai 1d6 x 1,5 m antes de recuperar o voo.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 229`,
      },
      {
        id: 115,
        nome: `HABILIDADE GERAL: FARO`,
        descricao: `<p>A criatura tem olfato apurado. Contra inimigos em alcance curto que não possa ver, ela não fica desprevenida e camuflagem total lhe causa apenas 20% de chance de falha.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 229`,
      },
      {
        id: 116,
        nome: `HABILIDADE GERAL: IMUNIDADE`,
        descricao: `<p>A criatura é imune a um tipo de efeito ou outro elemento (como um tipo de dano, uma condição ou uma habilidade). Ela não sofre nenhuma consequência direta daquilo contra a qual ela é imune. Ela ainda pode ser afetada indiretamente — por exemplo, uma criatura imune a efeitos mágicos ainda é afetada por terreno difícil criado por magias. Imunidade a acertos críticos os transforma em acertos normais.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 229`,
      },
      {
        id: 117,
        nome: `HABILIDADE GERAL: INCORPÓREO`,
        descricao: `<p>A criatura não tem corpo físico. Só pode ser afetada por armas e efeitos mágicos (mesmo as com alcance toque) ou outras criaturas incorpóreas. Ela pode atravessar objetos sólidos, mas não manipulá-los e tem Força nula.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 229`,
      },
      {
        id: 118,
        nome: `HABILIDADE GERAL: PERCEPÇÃO ÀS CEGAS`,
        descricao: `<p>A criatura usa sentidos diferentes da visão (como radar, sonar, sensibilidade a vibrações etc.). Efeitos relacionados à visão, como escuridão e invisibilidade, não a afetam. Ela pode fazer testes de Percepção para observar usando estes sentidos, ao invés da visão. Esta habilidade tem alcance curto (a menos que especificado o contrário).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 229`,
      },
      {
        id: 119,
        nome: `HABILIDADE GERAL: REDUÇÃO DE DANO(RD)`,
        descricao: `<p>A criatura ignora parte do dano que sofre. Por exemplo, se uma criatura com RD 5 sofre um ataque que causa 8 pontos de dano, perde apenas 3 PV. A redução pode ser contra um ou mais tipos de dano específicos. Assim, uma criatura com redução de fogo 10 ignora 10 pontos de dano de fogo, mas sofre dano de outros tipos normalmente. Caso haja um ou mais tipos de dano listados após uma barra, a RD não se aplica àqueles tipos. Por exemplo, uma criatura com RD 10/mágico ignora 10 pontos de dano de todos os ataques que sofrer — exceto dano causado por habilidades e armas mágicas. Múltiplos efeitos de RD são cumulativos.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 229`,
      },
      {
        id: 120,
        nome: `HABILIDADE GERAL: RESISTÊNCIA A <EFEITO>`,
        descricao: `<p>A criatura recebe um bônus em testes de resistência contra efeitos do tipo especificado no nome desta habilidade. Por exemplo, uma criatura com resistência a magia +2 recebe +2 em testes de Fortitude, Reflexos ou Vontade contra habilidades mágicas.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 229`,
      },
      {
        id: 121,
        nome: `HABILIDADE GERAL: VISÃO NA PENUMBRA`,
        descricao: `<p>A criatura enxerga em escuridão leve em alcance curto (exceto mágica). Ela ignora camuflagem leve por esse tipo de escuridão (veja a página 318).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 229`,
      },
      {
        id: 122,
        nome: `HABILIDADE GERAL: VISÃO NO ESCURO`,
        descricao: `<p>A criatura enxerga em escuridão total em alcance curto (exceto mágica). Ela ignora camuflagem total por esse tipo de escuridão (veja a página 318).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 229`,
      },
      {
        id: 123,
        nome: `HABILIDADE GERAL: VUNERABILIDADE A DANO`,
        descricao: `<p>A criatura sofre +50% a mais de dano de um tipo específico. Por exemplo, se uma criatura com vulnerabilidade a frio sofre um ataque que causa 15 pontos de dano de frio, ela sofre 22 pontos de dano (15 x 1,5 = 22).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 229`,
      },
      {
        id: 124,
        nome: `COMBATE: TESTE DE ATAQUE`,
        descricao: `<p>Este é um tipo específico de teste de perícia, para acertar um alvo com um ataque. Normalmente é um teste de Luta, para um ataque corpo a corpo, ou de Pontaria, para um ataque à distância.</p>
        <p>A dificuldade do teste é a Defesa do alvo. Se o resultado é igual ou maior que a Defesa do alvo, você acerta e causa dano (veja Dano, a seguir).</p>
        <p>Um teste de ataque pode sofrer modificadores por habilidades, arma e condições.</p>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 230`,
      },
      {
        id: 125,
        nome: `COMBATE: DANO`,
        descricao: `<p>Quando você acerta um ataque, causa dano. Esse dano reduz os pontos de vida do inimigo (veja Ferimentos & Morte, a seguir).</p>
        <p>Você rola dados para descobrir quanto dano causou. O tipo de dado depende da arma ou ataque utilizado — por exemplo, 1d4 para uma adaga ou 1d8 para uma espada longa. O dano de cada arma é descrito no Capítulo 3: Equipamento. Para ataques corpo a corpo ou com armas de arremesso, você soma sua Força na rolagem de dano.</p>
        <p>Um teste de ataque pode sofrer modificadores por habilidades, arma e condições.</p>
        <p><b><center>Dano com Arma Corpo a Corpo ou de Arremesso = Dano da Arma + Força do Atacante</center></b></p>
        <p><b><center>Dano com Arma de Disparo = Dano da Arma</center></b></p>
        <p>Assim, um personagem com Força 3 usando uma espada longa causa 1d8+3 pontos de dano (1d8 da espada longa mais 3 da Força).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 230`,
      },
      {
        id: 126,
        nome: `COMBATE: TIPO DE DANO`,
        descricao: `<p>Cada arma ou efeito que causa dano possui um tipo, conforme a lista a seguir. Por si só, o tipo de dano não possui efeito em regras. Contudo, indica a relação do dano com outros efeitos. Por exemplo, uma criatura com redução de corte 5 reduz todo dano de corte que sofre em 5.</p>
        <p><b>Ácido.</b> Certos monstros e perigos naturais, além de itens alquímicos, causam dano deste tipo. Ácido é ligado ao elemento terra.</p>
        <p><b>Corte.</b> Armas afiadas, como espadas, machados e as garras de um monstro, causam dano de corte.</p>
        <p><b>Essência.</b> Energia mágica pura, canalizada por magias como Seta Infalível de Talude.</p>
        <p><b>Fogo.</b> Causado por calor e chamas naturais e mágicas. Fogo é ligado ao elemento... fogo!</p>
        <p><b>Frio.</b> Algumas magias, além de clima severo, causam dano de frio. Ligado ao elemento água.</p>
        <p><b>Impacto.</b> Causado por armas de contusão, como clavas e maças, além de ondas de choque, explosões, ataques sônicos e quedas.</p>
        <p><b>Luz.</b> Magias e outros efeitos provenientes de divindades bondosas causam dano de luz.</p>
        <p><b>Perfuração.</b> Armas pontudas, como lanças, e mordidas de monstros causam dano de perfuração.</p>
        <p><b>Psíquico.</b> Ataques mentais e magias que afetam a mente da vítima causam dano deste tipo.</p>
        <p><b>Trevas.</b> Causado por efeitos de necromancia e ligados a divindades malignas.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 230`,
      },
      {
        id: 127,
        nome: `COMBATE: ACERTOS CRÍTICOS`,
        descricao: `<p>Um acerto crítico é um ataque especialmente certeiro, que atinge pontos vitais ou vulneráveis.</p>
        <p>A tabela de armas do Capítulo 3: Equipamento possui uma coluna “Crítico”. Cada arma tem uma margem de ameaça (que pode ser 18, 19 ou 20) e um multiplicador (que pode ser x2, x3 ou x4). Quando nenhuma margem aparece, será 20. Quando nenhum multiplicador aparece, será x2.</p>
        <p>Você faz um acerto crítico quando acerta um ataque rolando um valor igual ou maior que a margem de ameaça da arma. Neste caso, multiplica os dados de dano do ataque (incluindo quaisquer aumentos por passos) pelo multiplicador da arma. Bônus numéricos de dano, assim como dados extras (como pela habilidade Ataque Furtivo) não são multiplicados.</p>
        <p>Certas criaturas são imunes a acertos críticos. Um alvo imune a acertos críticos ainda sofre o dano de um ataque normal.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 230 e 231`,
      },
      {
        id: 128,
        nome: `COMBATE: INICIATIVA`,
        descricao: `<p>A cada rodada, todo personagem tem um turno — sua vez de agir. A Iniciativa determina a ordem dos turnos dentro da rodada.</p>
        <p><b>Teste de Iniciativa.</b> No início do combate, cada jogador faz um teste de Iniciativa para seu personagem. O mestre faz um único teste para os inimigos (caso haja inimigos com bônus de Iniciativa diferentes, o mestre usa o menor valor). Aqueles com os resultados mais altos agem primeiro.</p>
        <p>No caso de empates, o personagem com o maior modificador de perícia age primeiro. Se o empate persistir, eles fazem um novo teste de Iniciativa entre si, para decidir quem age primeiro.</p>
        <p>Não é preciso fazer novos testes de Iniciativa a cada rodada; a ordem se mantém durante todo o combate.</p>
        <p><b>Entrando na Batalha.</b> Se um personagem entra na batalha depois que ela começou, faz um teste de Iniciativa e age quando seu turno chegar, na rodada seguinte.</p>
        <p><b>Surpresa.</b> Quando o combate começa, se você não percebeu seus inimigos, está surpreendido. Se você está ciente de seus inimigos, mas eles não estão cientes de você, eles é que estão surpreendidos. Caso os dois lados tenham se percebido, ninguém está surpreendido. E se nenhum lado percebe o outro... bem, nenhum combate acontece!</p>
        <p><b>Percebendo os Inimigos.</b> O mestre diz quem está ciente de seus inimigos no começo do combate. Em geral, ele diz aos jogadores para fazerem testes de Percepção contra uma dificuldade ou opostos pelo teste de Furtividade dos inimigos (caso estes estejam sendo cautelosos).</p>
        <p>Um personagem que nunca fica surpreendido (por exemplo, se tiver a habilidade Esquiva Sobrenatural) pode rolar a Iniciativa  e agir mesmo que falhe em seu teste de Percepção; de alguma maneira ele já esperava o perigo, ou reage com reflexos impossivelmente rápidos.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 230 e 231`,
      },
      {
        id: 129,
        nome: `COMBATE: TIPOS DE AÇÕES`,
        descricao: `<p>No seu turno, você pode fazer uma ação padrão e uma ação de movimento, em qualquer ordem.</p>
        <p>Você pode trocar sua ação padrão por uma ação de movimento, para fazer duas ações de movimento, mas não pode fazer o inverso.</p>
        <p>Você também pode abrir mão das duas ações (tanto a padrão quanto a de movimento) para fazer uma ação completa.</p>
        <p>Portanto, em um turno você pode fazer:</p>
        <p><b><center>Uma ação padrão e uma ação de movimento;</center></b>
        <b><center>Ou duas ações de movimento;</center></b>
        <b><center> Ou uma ação completa.</center></b></p>
        <p>Você também pode executar qualquer quantidade de ações livres e reações.</p>
        <p><b>Ação Padrão.</b> Basicamente, uma ação padrão permite que você execute uma tarefa. Fazer um ataque ou lançar uma magia são as ações padrão mais comuns.</p>
        <p><b>Ação de Movimento.</b> Esta ação representa algum tipo de movimento físico. Seu uso mais comum é percorrer uma distância igual a seu deslocamento. Levantar-se, sacar uma arma, pegar um item de sua mochila, abrir uma porta e subir numa montaria também são ações de movimento.</p>
        <p><b>Ação Completa.</b> Este tipo de ação exige todo o tempo e esforço normal de uma rodada. Para uma ação completa, você deve abrir mão de sua ação padrão e de sua ação de movimento — mas, normalmente, você ainda pode realizar ações extras, ações livres e reações.</p>
        <p><b>Ação Livre.</b> Esta ação não exige quase nenhum tempo e esforço, mas ainda só pode ser feita em seu turno. Jogar-se no chão ou gritar uma ordem são ações livres — mas o mestre pode decidir que algo é complicado demais para ser livre. Dar uma ordem curta é uma ação livre, explicar um plano inteiro, não!</p>
        <p><b>Reação.</b> Uma reação acontece em resposta a outra coisa. Como ações livres, reações tomam tão pouco tempo que você pode realizar qualquer quantidade delas. A diferença é que uma ação livre é uma escolha consciente, executada no turno do personagem. Já uma reação é um reflexo ou uma resposta automática, que pode ocorrer mesmo fora do seu turno. Você pode reagir mesmo se não puder realizar ações normais, como quando estiver atordoado. Um teste de Percepção para perceber um troll escondido no pântano, ou um teste de Reflexos para escapar de uma explosão, são exemplos de reações.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 233`,
      },
      {
        id: 130,
        nome: `AÇÃO PADRÃO: AGREDIR`,
        descricao: `<p>Você faz um ataque com uma arma corpo a corpo ou à distância.</p>
        <p>Com uma arma corpo a corpo, você pode atacar qualquer inimigo dentro de seu alcance natural (1,5m para criaturas Pequenas e Médias ou um inimigo adjacente no mapa). Personagens maiores, ou usando certas armas, podem atacar mais longe. Você pode substituir um ataque corpo a corpo por uma manobra de combate (veja a seguir).</p>
        <p>Com uma arma de ataque à distância, você pode atacar qualquer inimigo que consiga ver e que esteja no alcance da arma (ou até o dobro do alcance, sofrendo uma penalidade de –5).</p>
        <p><I>Atirando em Combate Corpo a Corpo.</I> Quando faz um ataque à distância contra uma criatura em combate corpo a corpo, você sofre –5 no teste de ataque. Uma criatura está em combate corpo a corpo se estiver dentro do alcance natural de qualquer inimigo (incluindo você).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 233`,
      },
      {
        id: 131,
        nome: `AÇÃO PADRÃO: ATROPELAR`,
        descricao: `<p>Você usa uma ação padrão durante um movimento para avançar pelo espaço ocupado por uma criatura (normalmente, você não pode fazer uma ação padrão durante um movimento; isto é uma exceção). A criatura pode lhe dar passagem ou resistir. Se der passagem, você avança pelo espaço dela; nenhum teste é necessário. Se resistir, faça um teste de manobra oposto; se você vencer, deixa a criatura caída e continua seu avanço. Se o alvo vencer, continua de pé e detém seu avanço. Atropelar é uma ação livre se tentada durante uma investida.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 233 e 234`,
      },
      {
        id: 132,
        nome: `AÇÃO PADRÃO: FINTAR`,
        descricao: `<p>Faça um teste de Enganação oposto ao teste de Reflexos de uma criatura em alcance curto. Se você passar, ela fica desprevenida contra seu próximo ataque, mas apenas até o fim de seu próximo turno.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 234`,
      },
      {
        id: 133,
        nome: `AÇÃO PADRÃO: LANÇAR UMA MAGIA`,
        descricao: `<p>A maioria das magias exige uma ação padrão para ser executada.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 234`,
      },
      {
        id: 134,
        nome: `AÇÃO PADRÃO: PREPARAR`,
        descricao: `<p>Você prepara uma ação (padrão, de movimento ou livre) para realizar mais tarde, após seu turno, mas antes de seu turno na próxima rodada. Diga a ação que vai fazer e em quais circunstâncias (por exemplo, “disparar minha besta na primeira criatura que passar pela porta”). A qualquer momento antes de seu próximo turno, você pode fazer a ação preparada como uma reação a essas circunstâncias.</p>
        <p>Se, no seu próximo turno, você ainda não tiver realizado sua ação preparada, não pode mais realizá-la (embora possa preparar a mesma ação de novo).</p>
        <p>Pelo resto do combate, sua Iniciativa fica imediatamente acima da qual você fez a ação preparada.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 234`,
      },
      {
        id: 135,
        nome: `AÇÃO PADRÃO: USAR UMA HABILIDADE OU ITEM MÁGICO`,
        descricao: `<p>Algumas habilidades e itens mágicos, como poções, exigem uma ação padrão para serem usadas.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 234`,
      },
      {
        id: 136,
        nome: `AÇÃO PADRÃO: AGREDIR - MANOBRA DE COMBATE`,
        descricao: `<p>Uma manobra é um ataque corpo a corpo para fazer algo diferente de causar dano — como arrancar a arma do oponente ou empurrá-lo para um abismo. Não é possível fazer manobras de combate com ataques à distância.</p>
        <p>Faça um teste de manobra (um teste de ataque corpo a corpo) oposto com a criatura. Mesmo que ela esteja usando uma arma de ataque à distância, deve fazer o teste usando seu valor de Luta. Em caso de empate, o personagem com o maior bônus vence. Se os bônus forem iguais, outro teste deve ser feito. Em geral, você pode usar qualquer arma corpo a corpo para fazer manobras de combate.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 234`,
      },
      {
        id: 137,
        nome: `MANOBRA DE COMBATE:  AGARRAR`,
        descricao: `<p>Você segura uma criatura (por seu braço, sua roupa etc.). Uma criatura agarrada fica desprevenida e imóvel, sofre –2 nos testes de ataque e só pode atacar com armas leves. Ela pode se soltar com uma ação padrão, vencendo um teste de manobra oposto. Você só pode agarrar com um ataque desarmado ou arma natural e, enquanto agarra, fica com essa mão ou arma natural ocupada. Além disso, move-se metade do deslocamento normal, mas arrasta a criatura que estiver agarrando. Você pode soltá-la com uma ação livre. Você pode atacar uma criatura agarrada com sua mão livre. Se preferir, pode substituir um ataque por um teste de agarrar contra a criatura. Se vencer, causa dano de impacto igual a um ataque desarmado ou arma natural. Isso significa que você está esmagando ou sufocando o inimigo.</p>
        <p>Um personagem fazendo um ataque à distância contra um alvo envolvido na manobra agarrar tem 50% de chance de mirar no alvo errado!</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 234`,
      },
      {
        id: 138,
        nome: `MANOBRA DE COMBATE:  DERRUBAR`,
        descricao: `<p>Você deixa o alvo caído. Esta queda normalmente não causa dano. Se você vencer o teste oposto por 5 pontos ou mais, derruba o oponente com tanta força que também o empurra um quadrado em uma direção a sua escolha. Se isso o jogar além de um parapeito ou precipício, ele pode fazer um teste de Reflexos (CD 20) para se agarrar numa beirada.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 234`,
      },
      {
        id: 139,
        nome: `MANOBRA DE COMBATE:  DESARMAR`,
        descricao: `<p>Você derruba um item que a criatura esteja segurando. Normalmente o item cai no mesmo lugar em que o alvo está (a menos que o alvo esteja voando, sobre uma ponte etc.). Se você vencer o teste oposto por 5 pontos ou mais, derruba o item com tanta força que também o empurra um quadrado em uma direção a sua escolha.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 234`,
      },
      {
        id: 140,
        nome: `MANOBRA DE COMBATE:  EMPURRAR`,
        descricao: `<p>Você empurra a criatura 1,5m. Para cada 5 pontos de diferença entre os testes, você empurra o alvo mais 1,5m. Você pode gastar uma ação de movimento para avançar junto com a criatura (até o limite do seu deslocamento).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 234`,
      },
      {
        id: 141,
        nome: `MANOBRA DE COMBATE:  QUEBRAR`,
        descricao: `
        <p>Você atinge um item que a criatura esteja segurando. </p>
        <p>Tentar quebrar ou destruir um objeto — desde uma porta fechada até uma espada empunhada por um inimigo — é similar a atacar uma criatura.</p>
        <p>Para objetos soltos, faça um ataque contra a Defesa do objeto, definida por sua categoria de tamanho. Se o objeto estiver em movimento, recebe +5 na Defesa. Para um objeto segurado por outra criatura, veja a manobra quebrar.</p>
        <p>Se você acerta o ataque, causa dano normal. Entretanto, objetos normalmente têm redução de dano, dependendo de seu material. Um objeto reduzido a 0 ou menos PV é destruído.</p>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 5-4: Estatísticas de Objetos</th>
            </tr>
            <tr>
              <th scope="col">Exemplo</th>
              <th scope="col">Tamanho</th>
              <th scope="col">Def</th>
              <th scope="col">RD</th>
              <th scope="col">PV</th>
            </tr>
          </thead>

          <tbody>
            <tr class="section">
              <td colspan="5"><strong>Objetos Gerais</strong></td>
            </tr>

            <tr>
              <td>Pergaminho</td>
              <td>Minúsculo</td>
              <td>15</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Corda</td>
              <td>Minúsculo</td>
              <td>15</td>
              <td>0</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Corrente</td>
              <td>Minúsculo</td>
              <td>15</td>
              <td>10</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Cadeira</td>
              <td>Pequeno</td>
              <td>12</td>
              <td>5</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Barril</td>
              <td>Médio</td>
              <td>10</td>
              <td>5</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Porta de madeira</td>
              <td>Grande</td>
              <td>8</td>
              <td>5</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Porta de pedra</td>
              <td>Grande</td>
              <td>8</td>
              <td>8</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Porta de ferro</td>
              <td>Grande</td>
              <td>8</td>
              <td>10</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Carroça</td>
              <td>Grande</td>
              <td>8</td>
              <td>5</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Casebre</td>
              <td>Enorme</td>
              <td>5</td>
              <td>5</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Celeiro</td>
              <td>Colossal</td>
              <td>0</td>
              <td>5</td>
              <td>200</td>
            </tr>

            <tr class="section">
              <td colspan="5"><strong>Armas, Armaduras e Escudos*</strong></td>
            </tr>

            <tr>
              <td>Arma leve de madeira (machadinha)</td>
              <td></td>
              <td>5</td>
              <td></td>
              <td>2</td>
            </tr>
            <tr>
              <td>Arma de uma mão de madeira (clava)</td>
              <td></td>
              <td>5</td>
              <td></td>
              <td>5</td>
            </tr>
            <tr>
              <td>Arma de duas mãos de madeira (bordão)</td>
              <td></td>
              <td>5</td>
              <td></td>
              <td>10</td>
            </tr>
            <tr>
              <td>Arma leve de metal (adaga)</td>
              <td></td>
              <td>10</td>
              <td></td>
              <td>2</td>
            </tr>
            <tr>
              <td>Arma de uma mão de metal (espada longa)</td>
              <td></td>
              <td>10</td>
              <td></td>
              <td>5</td>
            </tr>
            <tr>
              <td>Arma de duas mãos de metal (montante)</td>
              <td></td>
              <td>10</td>
              <td></td>
              <td>10</td>
            </tr>

            <tr>
              <td>Escudo leve</td>
              <td></td>
              <td>5</td>
              <td></td>
              <td>10</td>
            </tr>
            <tr>
              <td>Escudo pesado</td>
              <td></td>
              <td>10</td>
              <td></td>
              <td>20</td>
            </tr>

            <tr>
              <td>Armadura leve</td>
              <td></td>
              <td>5</td>
              <td></td>
              <td>20</td>
            </tr>
            <tr>
              <td>Armadura pesada</td>
              <td></td>
              <td>10</td>
              <td></td>
              <td>40</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colspan="5">
                <small>
                  *Pontos de vida de itens comuns. Divida por 2 para itens reduzidos, multiplique por 2 para itens aumentados e multiplique por 5 para itens gigantes.
                </small>
              </td>
            </tr>
          </tfoot>
        </table>

        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 234 e 239`,
      },
      {
        id: 142,
        nome: `AÇÃO DE MOVIMENTO: LEVANTAR-SE`,
        descricao: `
        <p>Levantar do chão (ou de uma cama, cadeira...) exige uma ação de movimento.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 234`,
      },
      {
        id: 143,
        nome: `AÇÃO DE MOVIMENTO: MANIPULAR ÍTEM`,
        descricao: `
        <p>Muitas vezes, manipular um item exige uma ação de movimento. Pegar um objeto em uma mochila, abrir ou fechar uma porta e atirar uma corda para alguém são ações de movimento.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 234`,
      },
      {
        id: 144,
        nome: `AÇÃO DE MOVIMENTO: MIRAR`,
        descricao: `
        <p>Você mira em um alvo que possa ver, dentro do alcance de sua arma. Isso anula a penalidade de –5 em testes de Pontaria realizados neste turno contra aquele alvo caso ele esteja engajado em combate corpo a corpo.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 234`,
      },
      {
        id: 145,
        nome: `AÇÃO DE MOVIMENTO: MOVIMENTAR-SE`,
        descricao: `
        <p>Você pode percorrer uma distância igual a seu deslocamento (tipicamente 9m para raças de tamanho Médio). Outros tipos de movimento, como nadar, escalar ou cavalgar, também usam esta ação.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 234`,
      },
      {
        id: 146,
        nome: `AÇÃO DE MOVIMENTO: SACAR OU GUARDAR ITEM`,
        descricao: `
        <p>Sacar ou guardar um item exige uma ação de movimento.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 234`,
      },
      {
        id: 147,
        nome: `AÇÃO COMPLETA: CORRIDA`,
        descricao: `
        <p>Você corre mais rapidamente que seu deslocamento normal. Veja a perícia Atletismo.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 235`,
      },
      {
        id: 148,
        nome: `AÇÃO COMPLETA: GOLPE DE MISERICÓRDIA`,
        descricao: `
        <p>Você desfere um golpe letal em um oponente adjacente e indefeso. Um golpe de misericórdia é um acerto crítico automático. Além de sofrer dano, a vítima tem uma chance de morrer instantaneamente. Esta chance é de 25% (1 em 1d4) para personagens e NPCs importantes e de 75% (1 a 3 em 1d4) para NPCs secundários.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 235`,
      },
      {
        id: 149,
        nome: `AÇÃO COMPLETA: INVESTIDA`,
        descricao: `
        <p>Você avança até o dobro de seu deslocamento (e no mínimo 3m) em linha reta e, no fim do movimento, faz um ataque corpo a corpo. Você recebe +2 no teste de ataque, mas sofre –2 na Defesa até o seu próximo turno, porque sua guarda fica aberta. Você não pode fazer uma investida em terreno difícil. Durante uma investida, você pode fazer a manobra atropelar como uma ação livre (mas não pode atropelar e atacar o mesmo alvo).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 235`,
      },
      {
        id: 150,
        nome: `AÇÃO COMPLETA: LANÇAR UMA MAGIA`,
        descricao: `
        <p>Ao lançar magias com execução maior do que uma ação completa, você gasta uma ação completa a cada rodada.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 235`,
      },
      {
        id: 151,
        nome: `AÇÃO LIVRE: ATRASAR`,
        descricao: `
        <p>Escolhendo atrasar sua ação, você age mais tarde na ordem de Iniciativa, em relação à Iniciativa que rolou. Isto é o mesmo que reduzir sua Iniciativa voluntariamente pelo resto do combate. Quando sua nova Iniciativa chegar, você age normalmente. Você pode especificar este novo valor de Iniciativa ou apenas esperar até algum momento e então agir, fixando sua nova Iniciativa neste ponto. Atrasar é útil para ver o que seus amigos ou inimigos farão, antes de decidir o que você mesmo fará.</p>
        <ul>
        <li><i>Limites para atrasar.</i> Você pode atrasar sua Iniciativa até –10 menos seu bônus de Iniciativa. Quando a contagem de Iniciativa chega a esse ponto, você deve agir ou abrir mão de qualquer ação na rodada. Por exemplo, um personagem com um bônus de Iniciativa +3 pode esperar até a contagem de Iniciativa chegar a –13. Nesse ponto, deve agir ou desistir de seu turno. Isso importa quando vários personagens atrasam suas ações.</li>
        <li><i>Vários atrasos.</i> Se vários personagens estão atrasando suas ações, aquele com o maior bônus de Iniciativa (ou a maior Destreza, em caso de empate) tem a vantagem. Se dois ou mais personagens que estejam atrasando quiserem agir na mesma contagem de Iniciativa, aquele com o maior bônus age primeiro. Se dois ou mais personagens estão tentando agir um depois do outro, aquele com o maior bônus de Iniciativa tem o direito de agir depois.</li>
        </ul>
        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 235 e 236`,
      },
      {
        id: 152,
        nome: `AÇÃO LIVRE: FALAR`,
        descricao: `
        <p>Em geral, falar é uma ação livre. Lançar magias ou usar habilidades de classe que dependem da voz não são ações livres. O mestre também pode limitar aquilo que você consegue falar durante uma rodada (vinte palavras são o limite padrão).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 236`,
      },
      {
        id: 153,
        nome: `AÇÃO LIVRE: JOGAR-SE NO CHÃO`,
        descricao: `
        <p>Jogar-se no chão é uma ação livre. Você recebe os benefícios e penalidades normais por estar caído, mas normalmente não sofre dano ao se jogar no chão.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 236`,
      },
      {
        id: 154,
        nome: `AÇÃO LIVRE: LARGAR UM ITEM`,
        descricao: `
        <p>Deixar cair um item que esteja segurando é uma ação livre. Mas deixar cair (ou jogar) um item com a intenção de acertar algo é uma ação padrão. E deixar cair (ou jogar) um item para que outra pessoa agarre é uma ação de movimento.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 236`,
      },
      {
        id: 155,
        nome: `FERIMENTOS & MORTE`,
        descricao: `
        <p>Sempre que você sofre dano — golpeado pelo tacape de um ogro, atingido por uma Bola de Fogo ou caindo em uma armadilha —, subtrai este valor de seus pontos de vida. Você anota seus pontos de vida em sua ficha de personagem ou em qualquer papel de rascunho.</p>
        <p>O dano pode deixar cicatrizes, amassar sua armadura e sujar sua roupa de sangue, mas não o impede de agir. Isso só muda quando seus pontos de vida chegam a 0 ou menos.</p>
        <p>Se ficar com 0 PV ou menos, você cai inconsciente e fica sangrando. No início de seu turno, faça um teste de Constituição (CD 15). Se passar, você estabiliza e não precisa mais fazer esse teste (exceto se perder mais PV). Se falhar, você perde 1d6 pontos de vida. Você deve repetir o teste a cada rodada, até estabilizar ou morrer. Um personagem sangrando pode ser estabilizado com um teste de Cura (CD 15) ou com qualquer efeito que cure pelo menos 1 PV.</p>
        <p>Um personagem com 0 ou menos pontos de vida que recupere PV até um valor positivo (1 ou mais) por causa de uma habilidade, magia ou descanso, recobra a consciência e pode agir normalmente.</p>
        <p>Quando seus pontos de vida chegam a –10 ou a um número negativo igual à metade de seus PV totais (o que for mais baixo), você morre.</p>
        <p>Por exemplo: Oberon, o Martelo, um arcanista com 12 PV, morre se chegar a –10 PV. Mais tarde na campanha, Oberon sobe vários níveis e chega a 30 PV. Agora, ele só morre se chegar a –15 PV.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 236`,
      },
      {
        id: 156,
        nome: `DANO NÃO LETAL`,
        descricao: `
        <p>Dano não letal conta para determinar quando você cai inconsciente, mas não para determinar quando você começa a sangrar ou morre. Efeitos de cura recuperam primeiro pontos de vida perdidos por dano não letal.</p>
        <p>Quase todo dano causado em condições normais (armas, armadilhas, magias...) é letal. Você pode usar uma arma para causar dano não letal (batendo com as partes não afiadas da arma, controlando a força dos golpes ou evitando pontos vitais), mas sofre uma penalidade de –5 no teste de ataque.</p>
        <p>Ataques desarmados e certas armas específicas causam dano não letal. Você pode usar esses ataques e armas para causar dano letal, mas sofre a mesma penalidade de –5 no teste de ataque.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 236`,
      },
      {
        id: 157,
        nome: `MOVIMENTAÇÃO: DESLOCAMENTO`,
        descricao: `
        <p>Esta é a medida de quantos metros você pode percorrer com uma ação de movimento. O deslocamento padrão é 9m, mas algumas habilidades de raça e classe podem mudá-lo.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 238`,
      },
      {
        id: 158,
        nome: `MOVIMENTAÇÃO: ATRAVESSAR UM ESPAÇO OCUPADO`,
        descricao: `
        <p>Você pode atravessar um espaço ocupado por um aliado. No entanto, não pode atravessar um espaço ocupado por um inimigo, a menos que ele esteja caído ou indefeso, ou seja pelo menos três categorias de tamanho maior ou menor que você. Você também pode atravessar um espaço ocupado por um inimigo com Acrobacia ou a ação atropelar. Espaço ocupado por um inimigo conta como terreno difícil.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 238`,
      },
      {
        id: 159,
        nome: `MOVIMENTAÇÃO: CARGA`,
        descricao: `
        <p>Se você estiver sobrecarregado (veja a página 141), seu deslocamento diminui em 3m.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 238`,
      },
      {
        id: 160,
        nome: `MOVIMENTAÇÃO: DIAGONAIS`,
        descricao: `
        <p>Em um mapa, mover-se na diagonal custa o dobro. Ou seja, andar 1,5m (1 quadrado) na diagonal conta como 3m (2 quadrados).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 238`,
      },
      {
        id: 161,
        nome: `MOVIMENTAÇÃO: OUTROS TIPOS DE MOVIMENTO`,
        descricao: `
        <p>Além de andar, você pode gastar uma ação de movimento para se mover de outras maneiras. Consulte as perícias Acrobacia e Atletismo.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 238`,
      },
      {
        id: 162,
        nome: `MOVIMENTAÇÃO: SUBIR OU MERGULHAR`,
        descricao: `
        <p>Voando ou nadando, movimentar-se na vertical custa o dobro na subida (ou o triplo em diagonais) e metade na descida (ou o normal em diagonais). Ou seja, voar 1,5m para cima conta como 3m, enquanto voar 3m para baixo conta como 1,5m.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 238`,
      },
      {
        id: 163,
        nome: `MOVIMENTAÇÃO: TERRENO DIFÍCIL`,
        descricao: `
        <p>Lugares onde é difícil andar, como uma floresta cheia de raízes, neve profunda, ruínas com destroços ou mesmo uma rua lotada de pessoas, são terreno difícil. Mover-se em terreno difícil custa o dobro. Ou seja, você se move metade do deslocamento normal — ou gasta 3m de deslocamento por quadrado, em vez de 1,5m.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 238`,
      },
      {
        id: 164,
        nome: `SITUAÇÕES ESPECIAIS`,
        descricao: `
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 5-3: Situações Especiais</th>
            </tr>
            <tr>
              <th>O atacante está...</th>
              <th>Modificador no ataque</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Caído</td>
              <td>-5</td>
            </tr>
            <tr>
              <td>Cego</td>
              <td>50% de chance de falha</td>
            </tr>
            <tr>
              <td>Em posição elevada</td>
              <td>+2</td>
            </tr>
            <tr>
              <td>Flanqueando o alvo</td>
              <td>+2 (apenas para corpo a corpo)</td>
            </tr>
            <tr>
              <td>Invisível</td>
              <td>+5 (não se aplica a alvos cegos)</td>
            </tr>
            <tr>
              <td>Ofuscado</td>
              <td>-2</td>
            </tr>
            <tr class="section">
              <td colspan="2"><strong>O alvo está...</strong></td>
            </tr>
            <tr>
              <td>Caído</td>
              <td>-5 contra ataques corpo a corpo, +5 contra ataques à distância</td>
            </tr>
            <tr>
              <td>Cego</td>
              <td>-5</td>
            </tr>
            <tr>
              <td>Desprevenido</td>
              <td>-5</td>
            </tr>
            <tr>
              <td>Sob camuflagem leve</td>
              <td>20% de chance de falha</td>
            </tr>
            <tr>
              <td>Sob camuflagem total</td>
              <td>50% de chance de falha</td>
            </tr>
            <tr>
              <td>Sob cobertura leve</td>
              <td>+2</td>
            </tr>
            <tr>
              <td>Sob cobertura total</td>
              <td>O alvo não pode ser atacado</td>
            </tr>
          </tbody>
        </table>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 239`,
      },
      {
        id: 165,
        nome: `SITUAÇÕES ESPECIAIS: CAMUFLAGEM`,
        descricao: `
        <p>Você recebe camuflagem leve quando um efeito dificulta a visão dos inimigos. Pode ser escuridão leve, neblina, folhagens ou outro efeito similar no local onde você está ou no espaço entre você e o oponente. Ataques contra você têm 20% de chance de falha (ao fazer um ataque, o atacante rola 1d10 junto com o d20 do teste de ataque; se o resultado desse d10 for 1 ou 2, o ataque erra, independentemente do resultado do teste de ataque).</p>
        <p>Você recebe camuflagem total quando um efeito impede a visão dos inimigos — por exemplo, em uma câmara em escuridão total. A chance de falha em camuflagem total é 50% (1 a 5 no d10).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 238 e 239`,
      },
      {
        id: 166,
        nome: `SITUAÇÕES ESPECIAIS: COBERTURA`,
        descricao: `
        <p>Você recebe cobertura leve quando está atrás de algo que bloqueia o ataque dos inimigos, como uma árvore, uma muralha de castelo, a lateral de uma carroça ou uma criatura maior. Cobertura leve fornece +5 na Defesa.</p>
        <p><i>No mapa, o atacante e o alvo escolhem, cada um, um canto do quadrado onde estão. Trace uma linha reta entre os cantos. Se a linha é interrompida por um obstáculo ou criatura, o alvo tem cobertura leve. O alvo não recebe cobertura se a linha seguir ao longo de um obstáculo ou apenas tocar a ponta de um obstáculo.</i></p>
        <p>Você recebe cobertura total quando seus inimigos não podem alcançá-lo — por exemplo, se estiver atrás de uma parede. Cobertura total impede que você seja atacado.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 238 e 239`,
      },
      {
        id: 167,
        nome: `SITUAÇÕES ESPECIAIS: FLANQUEAR`,
        descricao: `
        <p>Quando você luta corpo a corpo contra um oponente e um aliado faz o mesmo no lado oposto — ou seja, o inimigo está entre vocês — vocês estão flanqueando o alvo. Ambos recebem +2 em seus testes de ataque contra o alvo flanqueado. Não se pode flanquear à distância ou com ataques desarmados (a menos que você possua as habilidades Briga ou Estilo Desarmado).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 239`,
      },
      {
        id: 168,
        nome: `NPC: ATITUDE`,
        descricao: `
        <pTodo NPC possui uma categoria de atitude em relação a cada personagem — uma medida geral da relação do NPC com o personagem em questão. No geral, você não precisa se preocupar com a categoria de atitude. Porém, ela pode ajudá-lo a determinar o que o NPC está disposto a fazer pelo personagem.</p>
        <p><b>Prestativo.</b> Adora o personagem e pode ajudá-lo, mesmo correndo perigo. Um herói recebe +5 em testes de persuasão contra NPCs prestativos.</p>
        <p><b>Amistoso.</b> Gosta do personagem e pode ajudá-lo, mas dificilmente se arriscará por ele.</p>
        <p><b>Indiferente.</b> Não gosta nem desgosta do personagem. Vai tratá-lo como socialmente esperado. Esta é a categoria padrão.</p>
        <p><b>Inamistoso.</b> Desgosta do personagem, mas não a ponto de se arriscar para prejudicá-lo. Pode enganá-lo, criar intrigas sobre ele... Um herói sofre –5 em testes de persuasão contra um NPC inamistoso.</p>
        <p><b>Hostil.</b> Odeia o personagem e vai tentar prejudicá-lo, mesmo correndo perigo — pode roubá-lo ou mesmo atacá-lo! Um herói falha automaticamente em testes de persuasão contra um NPC hostil.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 259`,
      },
      {
        id: 169,
        nome: `NPC: TESTES DE PERÍCIAS`,
        descricao: `
        <p>Às vezes, uma interação com um NPC exigirá uma estatística de jogo. Por exemplo, se um personagem quiser barganhar com um mercador, você precisará do valor de Vontade dele. Como dito anteriormente, você não precisa ter fichas completas para cada NPC. Em vez disso, use a tabela abaixo. Apenas determine o patamar do NPC de acordo com o papel dele no mundo e se a perícia em questão é “forte” ou “fraca” para ele. Por exemplo, um mercador usaria a coluna “forte” para Diplomacia, Ofício e Vontade, e a coluna “fraca” para as demais perícias.</p>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 6-1: Estatísticas de NPCs</th>
            </tr>
            <tr>
              <th>Patamar</th>
              <th>Perícia Forte</th>
              <th>Perícia Fraca</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Iniciante <em>(exemplo: guarda de cidade, mascate...)</em></td>
              <td>+5</td>
              <td>+0</td>
            </tr>
            <tr>
              <td>Veterano <em>(capitão da guarda, mercador próspero...)</em></td>
              <td>+10</td>
              <td>+3</td>
            </tr>
            <tr>
              <td>Campeão <em>(guarda-costas real, mestre de guilda...)</em></td>
              <td>+15</td>
              <td>+6</td>
            </tr>
          </tbody>
        </table>

        `,
        referencia: `Tormenta 20 Jogo do Ano - página 259`,
      },
      {
        id: 170,
        nome: `NPC: PARCEIROS`,
        descricao: `
        <p>Parceiros são NPCs que se aventuram com o grupo. Podem ser adquiridos através de habilidades, contratados ou comprados (no caso de animais ou construtos) ou mesmo recebidos como recompensa.</p>
        <h5><p><b>USANDO PARCEIROS</b></p></h5>
        <p>Em Tormenta20, o foco da história são os personagens — eles são os astros, os protagonistas, aqueles que resolvem os problemas. NPCs devem ser no máximo coadjuvantes. Assim, evite parceiros que participem da ação o tempo todo. A menos que sua campanha seja justamente sobre recrutar parceiros, eles devem ser usados apenas em situações especiais; a mais clássica é quando heróis estão perto de enfrentar um vilão poderoso, que não podem derrotar sozinhos. Antes do confronto final, recrutam parceiros para equilibrar a batalha.</p>
        <p>Parceiros podem ser recompensas por boas ideias ou missões completadas. O grupo fez amizade com um guerreiro local? Quando um monstro atacar a cidade, talvez ele apareça para dar uma mãozinha. O grupo salvou um barão? O nobre pode enviar uma cavaleira para acompanhá-los na próxima aventura.</p>
        <p>Por outro lado, evite usar parceiros apenas como bônus. Parceiros devem ter personalidade e fazer parte da história, caso contrário, serão reduzidos a um ajuste na ficha! O mestre não precisa interpretar o parceiro a cada momento — ele é um coadjuvante, não precisa de tanto “tempo de tela”. Mas, às vezes, deve dizer alguma coisa. Parceiros podem ser interpretados pelo próprio jogador que os escolheu, de acordo com a preferência do grupo.</p>
        <p>Parceiros funcionam melhor se usados com parcimônia, para serem algo especial. Mesmo que o parceiro seja amigo do grupo, arranje motivos para que ele não possa se aventurar sempre. O guerreiro precisa proteger a cidade, afinal de contas!</p>
        <h5><p><b>REGRAS DE PARCEIROS</b></p></h5>
        <p>Parceiros não atuam como NPCs completos. Eles não têm um turno e não realizam ações. Em vez disso, cada parceiro ajuda um personagem, fornecendo um bônus. Esse bônus depende do tipo e nível de poder do parceiro (iniciante, veterano ou mestre). Essa classificação é abstrata, não indicando classe e nível do NPC, e fica a cargo do mestre. Parceiros fornecidos por habilidades só mudam de poder (de iniciante para veterano, por exemplo), quando instruído pela habilidade.</p>
        <p>Cada parceiro pode ajudar apenas um personagem por vez. No início do seu turno, você pode gastar uma ação de movimento para passar um parceiro para outro personagem em alcance curto até o fim da cena (para fazer isso com um animal, você precisa ser treinado em Adestramento).</p>
        <p>Personagens iniciantes (até o 4º nível) podem ter um parceiro, personagens veteranos e campeões (do 5º ao 16º nível) podem ter até dois e personagens lenda (do 17º nível em diante) podem ter até três parceiros. Se um efeito fornecer um parceiro temporário além do seu limite, você não se beneficiará dele — mas pode passá-lo para outro personagem como visto acima.</p>
        <p>Parceiros não podem ser alvos de ações hostis. Porém, em situações dramáticas, o mestre pode decidir que algo acontece com ele. Se um personagem é capturado por orcs, o cavalo dele pode acabar a serviço dos humanoides — ou ser devorado!</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 260`,
      },
      {
        id: 171,
        nome: `NPC: PARCEIROS`,
        descricao: `
        <p>Parceiros são NPCs que se aventuram com o grupo. Podem ser adquiridos através de habilidades, contratados ou comprados (no caso de animais ou construtos) ou mesmo recebidos como recompensa.</p>
        <h5><p><b>USANDO PARCEIROS</b></p></h5>
        <p>Em Tormenta20, o foco da história são os personagens — eles são os astros, os protagonistas, aqueles que resolvem os problemas. NPCs devem ser no máximo coadjuvantes. Assim, evite parceiros que participem da ação o tempo todo. A menos que sua campanha seja justamente sobre recrutar parceiros, eles devem ser usados apenas em situações especiais; a mais clássica é quando heróis estão perto de enfrentar um vilão poderoso, que não podem derrotar sozinhos. Antes do confronto final, recrutam parceiros para equilibrar a batalha.</p>
        <p>Parceiros podem ser recompensas por boas ideias ou missões completadas. O grupo fez amizade com um guerreiro local? Quando um monstro atacar a cidade, talvez ele apareça para dar uma mãozinha. O grupo salvou um barão? O nobre pode enviar uma cavaleira para acompanhá-los na próxima aventura.</p>
        <p>Por outro lado, evite usar parceiros apenas como bônus. Parceiros devem ter personalidade e fazer parte da história, caso contrário, serão reduzidos a um ajuste na ficha! O mestre não precisa interpretar o parceiro a cada momento — ele é um coadjuvante, não precisa de tanto “tempo de tela”. Mas, às vezes, deve dizer alguma coisa. Parceiros podem ser interpretados pelo próprio jogador que os escolheu, de acordo com a preferência do grupo.</p>
        <p>Parceiros funcionam melhor se usados com parcimônia, para serem algo especial. Mesmo que o parceiro seja amigo do grupo, arranje motivos para que ele não possa se aventurar sempre. O guerreiro precisa proteger a cidade, afinal de contas!</p>
        <h5><p><b>REGRAS DE PARCEIROS</b></p></h5>
        <p>Parceiros não atuam como NPCs completos. Eles não têm um turno e não realizam ações. Em vez disso, cada parceiro ajuda um personagem, fornecendo um bônus. Esse bônus depende do tipo e nível de poder do parceiro (iniciante, veterano ou mestre). Essa classificação é abstrata, não indicando classe e nível do NPC, e fica a cargo do mestre. Parceiros fornecidos por habilidades só mudam de poder (de iniciante para veterano, por exemplo), quando instruído pela habilidade.</p>
        <p>Cada parceiro pode ajudar apenas um personagem por vez. No início do seu turno, você pode gastar uma ação de movimento para passar um parceiro para outro personagem em alcance curto até o fim da cena (para fazer isso com um animal, você precisa ser treinado em Adestramento).</p>
        <p>Personagens iniciantes (até o 4º nível) podem ter um parceiro, personagens veteranos e campeões (do 5º ao 16º nível) podem ter até dois e personagens lenda (do 17º nível em diante) podem ter até três parceiros. Se um efeito fornecer um parceiro temporário além do seu limite, você não se beneficiará dele — mas pode passá-lo para outro personagem como visto acima.</p>
        <p>Parceiros não podem ser alvos de ações hostis. Porém, em situações dramáticas, o mestre pode decidir que algo acontece com ele. Se um personagem é capturado por orcs, o cavalo dele pode acabar a serviço dos humanoides — ou ser devorado!</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 260`,
      },
      {
        id: 172,
        nome: `VARIANTE: PARCEIROS VULNERÁVEIS`,
        descricao: `
        <p>Com esta variante, parceiros podem se ferir e morrer. Sempre que um personagem sofre dano, deve rolar um dado para cada parceiro. Com um resultado “1”, o parceiro fica ferido. Por si só, isso não tem efeito em jogo. Porém, caso o jogador role um novo 1 para um parceiro que já esteja ferido, esse parceiro morre. O dado rolado depende do poder do parceiro: d4 para iniciantes, d6 para veteranos e d8 para mestres. Esta variante coloca sobre o jogador a decisão de continuar ou não usando um parceiro ferido — o personagem abre mão da ajuda para não arriscar o amigo?</p>
        <p>Recomendamos esta variante apenas para parceiros circunstanciais, não aqueles recebidos por habilidades de classe.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 260`,
      },
      {
        id: 173,
        nome: `NPC: MONTARIAS E COMBATE MONTADO`,
        descricao: `
        <p>Montarias são um tipo específico de parceiro. Elas usam as seguintes regras especiais.</p>
        <ul>
        <li>Para usar um parceiro montaria você precisa montar nele. Para passá-lo para outro aliado, precisa desmontar antes. Ambas são ações de movimento.</li>
        <li>Uma vez montado, você precisa gastar uma ação de movimento e fazer um teste de Cavalgar (CD 10) por turno para guiar a montaria. Se passar, recebe os benefícios dela. Se falhar, perde a ação de movimento. Se falhar por 5 ou mais, cai da montaria e sofre 1d6 pontos de dano. Se for treinado em Cavalgar, você recebe os bônus da montaria automaticamente, sem precisar gastar a ação ou fazer o teste.</li>
        <li>Se você sofrer dano, deve fazer um teste de Cavalgar (CD igual ao dano). Se falhar, cai da montaria e sofre 1d6 pontos de dano. Se possuir o poder Ginete, você não precisa fazer esse teste.</li>
        <li>Cada parceiro montaria possui uma categoria de tamanho (indicada ao lado do nome do parceiro). Um personagem só pode montar uma montaria maior do que ele mesmo, e enquanto estiver montado usa o tamanho da montaria para efeitos do espaço que ocupa e para modificador de Furtividade.</li>
        <li>O balanço da montaria em movimento torna mais difícil atacar à distância (–2 em testes de ataque) e conta como condição ruim para lançar magias. Se possuir o poder Ginete, você não sofre nenhuma dessas penalidades.</li>
        </ul>
        <p>Montarias podem ser compradas ou recebidas por habilidades. No primeiro caso, são sempre parceiros iniciantes. No segundo, seu poder é definido pela habilidade em questão. Note que embora alguns animais sejam facilmente comprados, como cavalos e trobos, outros são raros. Encontrar um grifo à venda é quase impossível!</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 260`,
      },
      {
        id: 174,
        nome: `PONTOS DE EXPERIÊNCIA`,
        descricao: `
        <p>A progressão em poder de um personagem é medida em níveis. Estes, por sua vez, são obtidos através de pontos de experiência, ou XP — uma medida de quanto um personagem já evoluiu (você pode falar tanto “a XP”, se referindo a experiência, ou “os XP”, se referindo aos pontos de experiência).</p>
        <p>Você precisa de certa quantidade de XP para subir de nível. Cada desafio vencido (monstro derrotado, armadilha desativada, enigma decifrado...) fornece XP conforme seu nível de desafio, ou ND — uma medida de sua dificuldade.</p>
        <p>Multiplique o ND da ameaça por 1.000. Essa é a quantidade de XP que esse desafio renderá. Divida igualmente entre os membros do grupo.</p>
        <p><center><b>Cálculo de Experiência: ND x 1.000 / número de personagens = XP para cada personagem</b></center></p>
        <p>Assim, derrotar um ogro (ND 5) rende 5.000 XP (5 vezes 1.000). Se forem quatro aventureiros, cada um receberá 1.250 XP (5.000 dividido por 4).</p>
        <p><b>Vencendo Desafios.</b> Muitos grupos preferem lidar com monstros ou vilões da maneira mais direta e definitiva — matando-os. Porém, você não precisa conceder XP apenas por inimigos mortos: o importante é derrotá-los. Se o necromante maligno é vencido e aprisionado, os aventureiros recebem XP. Se o demônio é banido para sua dimensão de origem, rende XP. Desde que a vitória seja real e decisiva, o XP é o mesmo.</p>
        <p><b>Desafios Irrelevantes.</b> Personagens só ganham XP por perigos reais. Um desafio cujo ND seja 5 ou mais pontos menor que o nível do grupo não rende XP nenhum — os heróis não podem mais aprender nada enfrentando-o.</p>
        <p><b>XP Parcial.</b> Em Tormenta20, os personagens ganham XP não apenas por vencer desafios, mas por enfrentá-los. Um desafio vencido traz mais experiência, mas mesmo uma derrota pode ensinar muita coisa! Um desafio vencido rende a XP total pelo ND, como acima. Um desafio que não é vencido, mas que também não derrota os heróis (um empate), rende metade da XP total. Um desafio que derrota os heróis rende um quarto da XP total.</p>
        <p><b>XP Alternativo.</b> Você pode premiar boas interpretações e ideias com pontos de experiência. Mas cuidado para não distribuir pontos e mais pontos apenas por interpretação, ou você terá um grupo que nunca se aventura, apenas conversa!</p>
        <h5><p><b>AVANÇOS POR MARCOS</b></p></h5>
        <p>Nesta opção, os personagens não recebem pontos de experiência. Em vez disso, sobem de nível sempre que alcançam um determinado marco de história.</p>
        <p>O mestre define os marcos. Normalmente, será o fim de uma aventura. Neste caso, ao término de cada aventura, todos os personagens sobem de nível. Porém, o mestre pode definir outros marcos de acordo com a campanha ou com os objetivos de cada personagem. Por exemplo, se a campanha envolve unir as diferentes tribos bárbaras das Montanhas Sanguinárias para enfrentar um monstro, cada tribo que se aliar ao grupo pode ser um marco.</p>
        <p>As vantagens desta opção são mudar o foco do jogo — de “derrotar desafios”, ele passa para “avançar a história” — e simplificar a vida do mestre, que não precisa mais calcular a XP de cada sessão. Por outro lado, alguns grupos preferem a abordagem mais exata dos pontos de experiência.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 326`,
      },
      {
        id: 175,
        nome: `TESOUROS`,
        descricao: `
        <p>A profissão de aventureiro é perigosa, mas traz grandes recompensas. Com os espólios de inimigos caídos e os pagamentos por missões completadas, um herói pode se tornar tão rico quanto um rei.</p>
        <h5><p><b>TESOURO EM COMBATE</b></p></h5>
        <p>Para determinar o tesouro de um combate, faça os jogadores rolarem duas vezes na Tabela 8-1 (veja as páginas 328 e 329), uma vez na coluna Dinheiro e outra na coluna Itens, na linha equivalente ao ND da criatura derrotada. Assim, se o grupo derrotou um necromante (ND 7), deve rolar duas vezes na linha do ND 7, uma na coluna de Dinheiro e outra na de Itens (os jogadores decidem entre si quem rola). Se o grupo tiver derrotado mais de uma criatura, rola uma vez para cada criatura ou, de acordo com o mestre, uma vez na linha equivalente ao nível de desafio do combate.</p>
        <p>A descrição da criatura indica o tesouro que ela fornece. “Nenhum” indica que a criatura não traz tesouro; nesse caso, não use a tabela. “Padrão” indica tesouro típico; use a tabela sem modificação. “Metade” indica que a criatura tem poucos tesouros; use a tabela, mas divida pela metade quaisquer resultados rolados na coluna Dinheiro. Por fim, “Dobro” significa que a criatura tem muitos tesouros. Role duas vezes em cada coluna da tabela.</p>
        <p>A maneira como o grupo encontra o tesouro fica a seu critério. Você pode simplesmente descrever “depois de derrotar os gnolls, vocês vasculham suas bolsas e encontram...” ou preparar algo mais elaborado. Por exemplo, bandidos que ataquem o grupo em uma estrada provavelmente não estarão carregando o seu tesouro consigo. Em vez disso, podem ter um esconderijo próximo onde guardam o fruto de seus roubos. Depois de derrotar os bandidos, os personagens podem vasculhar as redondezas em busca desse esconderijo. Outro exemplo: em uma aventura que envolva explorar um antigo templo, você pode determinar que o tesouro de todos os combates está em uma sala trancada e protegida por armadilhas. Ao derrotar guardas em um corredor, o grupo não encontrará nenhum tesouro. Mas, se conseguirem acesso a essa câmara, terão todo o tesouro de uma só vez. Ou, ainda, em vez de encontrar tesouro de inimigos derrotados, o grupo pode receber um valor equivalente como pagamento por seu empregador. As possibilidades são diversas. E, é claro, em vez de rolar, você pode escolher um tesouro, usando a tabela como guia</p>
        <h5><p><b>RESULTADO DA TABELA</b></p></h5>
        <p>Dinheiro. O grupo encontra moedas ou riquezas.</p>
        <ul>
        <li><i>Moedas.</i> Você pode apenas descrever o valor (“Vocês encontram 25 TO”) ou detalhar mais (“Vocês encontram 25 Tibares de ouro da época do Rei-Imperador Phylidio, o Tranquilo. Tais moedas são muito valiosas hoje”).</li>
        <li></i>Riquezas.</i> O grupo encontra um ou mais itens sem uso prático, mas valiosos. Role 1d% na Tabela 8-2 para determinar o valor de venda de cada riqueza. A tabela traz exemplos de itens e, entre parênteses, quantos espaços eles ocupam.</li>
        </ul>
        <p>Moedas e riquezas podem ser usadas como elementos de aventura. Por exemplo, se o grupo derrota mercenários contratados por um barão corrupto, pode encontrar moedas com a efígie do nobre, ligando-o os bandidos a ele.</p>
        <p><b>Itens.</b> O grupo encontra um item diverso, um equipamento, um equipamento superior, uma ou mais poções ou um item mágico.</p>
        <ul>
        <li><i>Diverso.</i> Role na Tabela 8-3, na página seguinte, para determinar qual item o grupo encontra.</li>
        <li><i>Equipamento.</i> Role 1d6 para determinar o tipo de equipamento: 1–3), arma; 4–5) armadura ou escudo; 6) esotérico. Então role na Tabela 8-4, na página seguinte, para determinar o item específico.</li>
        <li><i>Superior.</i> Role para determinar se é uma arma, armadura/escudo ou esotérico, como acima. Então, para cada melhoria do item, role uma vez na Tabela 8-5: Itens Superiores, na página 332.</li>
        <li><i>Poções.</i> Veja a página 341.</li>
        <li><i>Mágico.</i> Role 1d6 para determinar o tipo de item: 1–2) arma (página 336); 3) armadura/escudo (página 339); 4–6) acessório (página 342).</li>
        </ul>
        <h5><p><b>TESOUROS EM OUTRAS SITUAÇÕES</b></p></h5>
        <p>O mestre pode fornecer tesouros por outras situações que não envolvam combate — normalmente na forma de recompensas por atos realizados pelo grupo. Se os personagens resgatam o filho de uma mercadora, ela pode presenteá-los com tesouro.</p>
        <p>Esta também é uma forma de garantir que o grupo receba o tesouro devido por uma aventura. Se os personagens são convocados por um rei para acabar com uma infestação de aparições, podem passar a aventura sem ganhar nada (pois aparições são criaturas com tesouro “nenhum”). Para resolver isso, no fim da aventura o rei pode recompensá-los com um valor equivalente ao que teriam ganhado pelos combates, se aparições possuíssem tesouro padrão.</p>
        <h5><p><b>CONTROLANDO RIQUEZAS</b></p></h5>
        <p>É importante controlar a riqueza do grupo. Personagens com dinheiro demais para seu nível terão acesso a itens que não deveriam ter, tornando os desafios fáceis. Da mesma forma, um grupo muito pobre terá dificuldade para sobreviver!</p>
        <p>A tabela ao lado apresenta o tesouro médio que o grupo deve receber a cada cena com uma ameaça. A palavra-chave é “médio” — os personagens não precisam ganhar esse valor exato. Mas, se passarem por muitas cenas sem tesouro, faça com que recebam esse valor em outra ocasião (como visto em “Tesouro em Outras Situações”). Por outro lado, se estão muito ricos, devem passar por uma série de cenas sem tesouro, até a situação se normalizar. Um grupo de quatro personagens deve vencer quatro ameaças de ND igual ao seu nível para subir para o próximo. Assim, ao longo de cada nível, um grupo deve conquistar quatro vezes o valor na tabela.</p>
        <p>Outra maneira de garantir que o grupo tenha riqueza apropriada é comparar seu nível e riqueza com a Tabela 3-1: Dinheiro Inicial. Um personagem de 10º nível, por exemplo, deve ter posses que somam perto de T$ 13.000. Se tiver muito mais ou muito menos, algo está errado e precisa ser ajustado.</p>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 8-6: Tesouro Médio por Cena</th>
            </tr>
            <tr>
              <th>Nível</th>
              <th>Tesouro</th>
              <th>Nível</th>
              <th>Tesouro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1º</td>
              <td>T$ 300</td>
              <td>11º</td>
              <td>T$ 8.000</td>
            </tr>
            <tr>
              <td>2º</td>
              <td>T$ 300</td>
              <td>12º</td>
              <td>T$ 9.000</td>
            </tr>
            <tr>
              <td>3º</td>
              <td>T$ 400</td>
              <td>13º</td>
              <td>T$ 13.000</td>
            </tr>
            <tr>
              <td>4º</td>
              <td>T$ 1.000</td>
              <td>14º</td>
              <td>T$ 17.000</td>
            </tr>
            <tr>
              <td>5º</td>
              <td>T$ 1.000</td>
              <td>15º</td>
              <td>T$ 22.000</td>
            </tr>
            <tr>
              <td>6º</td>
              <td>T$ 2.000</td>
              <td>16º</td>
              <td>T$ 22.000</td>
            </tr>
            <tr>
              <td>7º</td>
              <td>T$ 2.000</td>
              <td>17º</td>
              <td>T$ 40.000</td>
            </tr>
            <tr>
              <td>8º</td>
              <td>T$ 3.000</td>
              <td>18º</td>
              <td>T$ 50.000</td>
            </tr>
            <tr>
              <td>9º</td>
              <td>T$ 3.000</td>
              <td>19º</td>
              <td>T$ 60.000</td>
            </tr>
            <tr>
              <td>10º</td>
              <td>T$ 6.000</td>
              <td>20º</td>
              <td>T$ 72.000</td>
            </tr>
          </tbody>
        </table>

        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 327 a 332`,
      },
      {
        id: 176,
        nome: `ITENS MÁGICOS`,
        descricao: `
        <p>A magia é uma força poderosa e muito presente em Arton. No entanto, itens mágicos são raros. Os heróis artonianos confiam mais nas próprias capacidades do que em objetos para garantir sua vitória.</p>
        <p>Por outro lado, itens mágicos são especiais. Uma espada mágica não será apenas uma ferramenta, usada e descartada assim que surgir algo melhor. Um guerreiro precisará lutar muito por sua arma encantada — e, quando encontrá-la, descobrirá que é única, especial e poderosa.</p>
        <p>Itens mágicos são uma forma marcante de recompensa. Tente pensar em pelo menos um item para cada personagem no grupo, um objeto único ligado a sua personalidade, estilo e táticas, e conceda-os apenas em momentos singulares, após bastante esforço.</p>
        <p>Itens mágicos são divididos em uso único (poções e pergaminhos) e permanentes (armas, armaduras/ escudos e acessórios). Itens mágicos permanentes ainda são divididos em itens menores, médios e maiores.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 333`,
      },
      {
        id: 177,
        nome: `USANDO ITENS MÁGICOS`,
        descricao: `
        <p>Itens mundanos e mágicos seguem as mesmas regras para acúmulo de bônus e limites de uso e carga. Assim, se um item mundano e um item mágico fornecem um bônus na mesma característica, eles não se acumulam — use apenas o melhor. Da mesma forma, um personagem vestindo dois itens mundanos e dois itens mágicos não receberá os benefícios de um quinto item vestido.</p>
        <p><b>Limites de Carga.</b> Itens mágicos ocupam espaço como itens mundanos. Uma espada longa flamejante, por exemplo, ocupa 1 espaço — o mesmo que uma espada longa mundana. Acessórios ocupam 1 espaço, a menos que sua descrição indique o contrário. Poções e pergaminhos ocupam meio espaço.</p>
        <p><b>Ativação e Testes.</b> Para itens mágicos com habilidades ativadas, você precisa primeiro identificá-los (veja a seguir). A menos que sua descrição diga o contrário, ativar um item mágico é uma ação padrão. Para itens com efeitos que exigem teste de resistência, o atributo usado para definir a CD é indicado na descrição do item (para poções e pergaminhos, é Inteligência, Sabedoria ou Carisma, a escolha do usuário).</p>
        <ul>
        <li><i>Itens que lançam magias.</i> Lançar magias a partir de itens não exige pronunciar palavras mágicas, gesticular ou se concentrar, e magias arcanas lançadas por meio de itens não sofrem limitação pelo uso de armadura. Você pode usar aprimoramentos, mas precisa pagar por eles.</li>
        </ul>
        <p><b>Identificando Itens mágicos.</b> Alguns itens mágicos parecem comuns, sem nada de especial. Outros são visivelmente encantados: brilham, zunem ou são cobertos de runas ou gemas faiscantes. Alguns itens trazem inscrições indicando o que podem fazer; essas podem ser mágicas, mudando para um idioma que você saiba ler, ou exigir fluência em línguas exóticas (veja a perícia Conhecimento). Outros podem não trazer qualquer pista sobre seu funcionamento. Nesse caso, os poderes só ficam claros se você identificar o item. Para isso, use a perícia Misticismo — ou a velha tentativa e erro. Você pode subir naquela vassoura velha e saltar da janela. Se for uma vassoura voadora, você sairá voando. Se não for...</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 333`,
      },
      {
        id: 178,
        nome: `FABRICANDO ITENS MÁGICOS`,
        descricao: `
        <p>Itens mágicos podem ser fabricados por conjuradores e inventores com os poderes apropriados.</p>
        <h5><p><b>ITENS DE USO ÚNICO</b></p></h5>
        <p>Para fabricar uma poção ou pergaminho, escolha uma magia ou fórmula que você conheça. Essa será a magia que o item irá conter (poções podem conter apenas magias que tenham como alvo uma criatura ou objeto, ou que tenham efeito em área). O preço do item é T$ 30 x o custo em PM da magia ao quadrado (mínimo 1), e a CD para fabricá-lo é 20 + o custo em PM da magia. A seguir, alguns exemplos.</p>
        <p><i>Magia de 1º círculo (1 PM): preço = T$ 30 x (1^2) = T$ 30; CD para fabricar = 20 + 1 = CD 21.</i></p>
        <p><i>Magia de 3º círculo (6 PM): preço = T$ 30 x (6^2) = T$ 1.080; CD para fabricar = 20 + 6 = CD 26.</i></p>
        <p>Quando fabrica uma poção, você pode aplicar aprimoramentos nela, até seu limite de gasto de PM, como se estivesse lançando a magia. O custo e a CD do teste de Ofício são ajustados de acordo. Quando fabrica um pergaminho, você não pode aplicar aprimoramentos. Porém, pode fazer isso ao ativá-lo.</p>
        <h5><p><b>ITENS PERMANENTES</b></p></h5>
        <p>Armas e armaduras mágicas podem ser encantadas ou específicas. Acessórios são sempre específicos.</p>
        <p><b>Itens Encantados.</b> Funcionam como itens superiores (veja a página 164) — mas, em vez de melhorias, possuem encantos. Um item mágico menor possui um encanto, um médio possui dois e um item mágico maior possui três encantos. O preço e a CD do teste de Ofício aumentam de acordo com o número de encantos (veja a tabela ao lado). Bônus por encantos não se acumulam.</p>
        <p>Um mesmo item pode ser superior e encantado. Some os modificadores de preço e CD no teste de Ofício, e os bônus fornecidos por melhorias e encantos para determinar o bônus do item.</p>
        <p>Assim, uma espada longa com um encanto tem preço de T$ 18.015. Fabricá-la exige um gasto de T$ 6.005 e um teste de Ofício contra CD 30. Já uma espada longa com quatro melhorias e três encantos (o máximo possível) tem preço de T$ 90.015 (T$ 15 da espada + T$ 18.000 das quatro melhorias, mais T$ 72.000 dos três encantos). Fabricá-la exige um gasto de T$ 30.005 e um teste de Ofício contra CD 60. Apenas os maiores armeiros são capazes de forjar uma arma dessas!</p>
        <p><b>Itens Específicos.</b> Usam as regras de fabricação de itens de Ofício. O preço de cada item aparece nas tabelas a seguir. A CD do teste de Ofício é dada pela categoria do item: CD 30 para itens menores, CD 40 para médios e CD 50 para itens maiores. Por fim, a perícia usada é determinada pelo tipo de item: Ofício (armeiro) para armas e armaduras e Ofício (artesão) para acessórios. De acordo com o mestre, outros Ofícios podem ser usados para itens específicos — como Ofício (joalheiro) para um anel. Itens específicos não podem receber encantos. Todas as armas e armaduras específicas deste livro são itens maiores.</p>
        <p>Custo em Pontos de Mana. Para fabricar um item mágico permanente, o personagem deve sacrificar certa quantidade de pontos de mana: 1 PM para itens menores, 2 PM para médios e 3 PM para itens maiores. É essa essência que irá energizar o item. Os pontos de mana são perdidos para sempre. Contudo, caso o personagem destrua um item mágico permanente que criou, recupera os PM sacrificados naquele item. De acordo com o mestre, outras coisas podem ser sacrificadas no lugar de pontos de mana, como ingredientes raros. Porém, encontrar um ingrediente desses é sempre uma tarefa difícil — talvez o objetivo de uma aventura!</p>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 8-7: Preço de Encantos</th>
            </tr>
            <tr>
              <th>Número de Encantos</th>
              <th>Aumento no Preço</th>
              <th>Aumento na CD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>+ T$ 18.000</td>
              <td>+10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>+ T$ 36.000</td>
              <td>+15</td>
            </tr>
            <tr>
              <td>3</td>
              <td>+ T$ 72.000</td>
              <td>+20</td>
            </tr>
          </tbody>
        </table>
        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 333 e 334`,
      },
      {
        id: 179,
        nome: `DESTRUINDO ITENS MÁGICOS`,
        descricao: `
        <p>Para determinar as características de um item mágico, veja a seção “Quebrando Objetos”, do Capítulo 5, para as características de um item normal do mesmo tipo. Itens mágicos permanentes recebem um bônus em PV e RD conforme sua categoria: +10 para itens menores, +20 para médios e +40 para maiores. Por exemplo, uma espada longa (normalmente PV 5 e RD 10) de categoria maior tem PV 45 e RD 50.</p>
        <p>Um item mágico que não esteja sendo usado faz seus próprios testes de resistência. O bônus depende da categoria: +5 para itens menores, +10 para médios e +20 para maiores. Se estiver sendo usado, pode escolher entre seu bônus ou o do portador.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - páginas 333 e 334`,
      },
      {
        id: 180,
        nome: `POÇÕES`,
        descricao: `
        <p>Poções e pergaminhos contêm o efeito de uma magia. Quando são ativados, geram o efeito dessa magia e então desaparecem. Para gerar uma poção aleatoriamente, role na tabela ao lado.</p>
        <p>Poções e pergaminhos são classificados conforme o círculo da magia que contêm: 1º ou 2º (item mágico menor), 3º ou 4º (médio) e 5º (maior).</p>
        <p>Uma poção é um líquido mágico armazenado em um frasco de vidro ou cerâmica. Poções que afetam objetos também são chamadas de óleos e poções que geram efeito em área também são chamadas de granadas.</p>
        <p><b>Ativação.</b> Para ativar uma poção você deve bebê-la (a poção afeta quem ingeri-la). Isso exige uma ação padrão. Também é possível dar uma poção a uma criatura inconsciente como uma ação completa ou forçar uma criatura a beber uma poção fazendo a manobra agarrar e então vencendo mais um teste de manobra.</p>
        <p>Ativar um óleo exige uma ação padrão para aplicá-lo no objeto que será afetado. Ativar uma granada exige uma ação padrão para arremessá-la em qualquer ponto em alcance curto (o centro do efeito da magia é o ponto onde a granada foi arremessada).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 341`,
      },
      {
        id: 181,
        nome: `PERGAMINHOS`,
        descricao: `
        <p>Poções e pergaminhos contêm o efeito de uma magia. Quando são ativados, geram o efeito dessa magia e então desaparecem. Para gerar uma poção aleatoriamente, role na tabela ao lado.</p>
        <p>Poções e pergaminhos são classificados conforme o círculo da magia que contêm: 1º ou 2º (item mágico menor), 3º ou 4º (médio) e 5º (maior).</p>
        <p>Um pergaminho mágico é uma folha grossa feita de papel, papiro, couro ou outros materiais. Pergaminhos podem conter qualquer magia. Quando as palavras escritas nele são pronunciadas, a magia é ativada e o pergaminho se desfaz em cinzas.</p>
        <p><b>Ativação.</b> Para ativar um pergaminho você deve lê-lo em voz alta. Isso exige uma ação padrão ou a ação necessária para lançar a magia, o que for maior. Para ler um pergaminho, você deve conhecer a magia escrita nele ou passar em um teste de Misticismo (CD 20 + custo em PM da magia).</p>
        <p>Quando ativa um pergaminho, você toma quaisquer decisões exigidas pela magia, como se a tivesse lançado, e aplica habilidades que se aplicariam às suas próprias magias. Caso conheça a magia, pode aplicar aprimoramentos nela, pagando o custo em pontos de mana deles (você paga apenas o custo dos aprimoramentos, não o custo básico da magia).</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 341`,
      },
      {
        id: 182,
        nome: `ORIGENS REGIONAIS`,
        descricao: `
        <p>Origens regionais são relacionadas a um reino ou região de Arton. Você pode escolher uma delas (no lugar de sua origem comum) se for nativo desse local ou tiver passado os seus anos formativos lá.</p>
        <p>Diferente das origens do livro básico, que representam conceitos amplos, origens regionais fornecem um benefício único, característico do local ao qual pertencem. Se o benefício incluir treinamento em uma perícia na qual você já seja treinado, você pode ser treinado em outra perícia de classe. Para os demais efeitos, use as mesmas regras de origens. Efeitos de origens contam como efeitos de habilidades para fins de acúmulo.</p>
        `,
        referencia: `Atlas de Arton - página 470`,
      },
      {
        id: 183,
        nome: `TATUAGEM MÍSTICA`,
        descricao: `
        <p>Os tatuadores tamalus de Khubar podem criar tatuagens especiais com Ofício (tatuador). Essas tatuagens podem ter um entre três benefícios: +1 na Defesa, resistência a magia +2 ou a habilidade de lançar uma magia de 1o círculo (atributochave Sabedoria). Tatuagens precisam estar visíveis para funcionarem e, quando expostas, ocupam o espaço de um item vestido. Cada tatuagem custa T$ 1.000 x sua quantidade de tatuagens místicas (a primeira custa T$ 1.000, a segunda custa T$ 2.000 e assim progressivamente).</p>
        `,
        referencia: `Atlas de Arton - página 470`,
      },
      {
        id: 184,
        nome: `TREINANDO MONTARIAS SELVAGENS`,
        descricao: `
        <p>As duas formas mais comuns para um personagem obter uma montaria é por meio de uma habilidade, como Companheiro Animal e Montaria Sagrada, ou usando tibares para comprar um cavalo, trobo ou outra das montarias comumente disponíveis nos mercados de Arton. Entretanto, existe outra maneira: treinar uma criatura selvagem.</p>
        <p>O primeiro passo para treinar uma criatura é domá-la. Para isso, você precisa capturar a criatura (por meio de uma armadilha, magia etc.) ou derrotá-la em combate. Após isso, deve fazer um teste de Adestramento (CD 15 + ND da criatura). Se passar, você doma a criatura e pode começar a treiná-la. Se falhar, a criatura é muito selvagem para ser treinada.</p>
        <p>Uma vez que a criatura seja domada, é hora de começar seu treinamento. Isso é um teste estendido de Adestramento (CD 15 + ND da criatura), no qual é necessário um total de sucessos igual a 3 + ND da criatura antes de 3 falhas. Cada teste representa um dia de trabalho e você recebe um bônus cumulativo de +1 para cada sucesso consecutivo. Se passar no teste estendido, transforma a criatura em um parceiro montaria iniciante. Se falhar, precisa começar o treinamento do início.</p>
        <p>Treinar uma criatura selvagem exige tempo e dedicação. O treinador se torna responsável pela criatura e deve cuidar de sua alimentação, saúde e segurança. Além disso, precisa passar tempo suficiente a seu lado para que ela se acostume com sua presença. Por isso, durante o período de treinamento, você sofre uma penalidade de –2 em testes de perícia e sua recuperação de PM por descanso diminui em um nível.</p>
        <p>A critério do mestre, estas regras também podem ser usadas para treinar outros tipos de parceiros irracionais (como um animal perseguidor ou vigilante).</p>
        `,
        referencia: `Ameaças de Arton - página 224`,
      },
      {
        id: 185,
        nome: `RECURSOS NATURAIS`,
        descricao: `
        <p>Certas criaturas, como dragões, elementais e monstros peçonhentos, fornecem recursos específicos como parte de seus tesouros. Entretanto, existem outros materiais de grande utilidade que podem ser extraídos de ameaças. Esta seção apresenta regras opcionais para mestres que desejam usar esse tipo de tesouro em suas aventuras.</p>
        <p>Recursos naturais podem ser incluídos em qualquer criatura que já não possua um recurso especial, e podem complementar seu tesouro normal ou substituí-lo (a critério do mestre). Para usar um desses recursos, escolha um tipo apropriado à criatura em questão. Alternativamente, você pode rolar na linha referente ao tipo da criatura na Tabela 3-5: Recursos Naturais. A quantidade de recursos fornecida depende do tamanho da criatura; criaturas Pequenas e Médias fornecem 1 unidade do recurso, criaturas Grandes e Enormes fornecem 2 unidades e criaturas Colossais fornecem 5 unidades. Criaturas Minúsculas são muito pequenas para produzir recursos. Embora seja possível extrair recursos de criaturas inteligentes, isso pode ser considerado um tabu, um crime ou simplesmente um ato hediondo, dependendo de onde os aventureiros estiverem</p>
        <p>Recursos naturais são extraídos como recursos especiais; exigem uma hora de trabalho e um sucesso em um teste de Sobrevivência ou de um Ofício relacionado ao recurso, com CD 15 + ND da criatura. Em caso de falha, os recursos são estragados.</p>
        <table>
          <thead>
            <tr>
              <th colspan="8">Tabela 3-5: Recursos Naturais</th>
            </tr>
            <tr>
              <th>Tipo de Criatura (1d6)</th>
              <th>Carapaça</th>
              <th>Couro</th>
              <th>Fonte</th>
              <th>Ingrediente</th>
              <th>Mantimento</th>
              <th>Osso</th>
              <th>Sucata</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Animal</td>
              <td>1</td>
              <td>2–3</td>
              <td>—</td>
              <td>—</td>
              <td>4–5</td>
              <td>6</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Construto</td>
              <td>1–2</td>
              <td>—</td>
              <td>3</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Espírito*</td>
              <td>—</td>
              <td>—</td>
              <td>1–3</td>
              <td>4–6</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Humanoide</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Monstro</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5–6</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Morto-vivo</td>
              <td>1</td>
              <td>—</td>
              <td>2–3</td>
              <td>—</td>
              <td>—</td>
              <td>4–6</td>
              <td>—</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="8">* Use essa linha para criaturas incorpóreas de qualquer tipo.</td>
            </tr>
          </tfoot>
        </table>
        <br />
        <h5><p><b>TIPOS DE RECURSOS</b></p></h5>
        <p>A variedade de recursos existentes em Arton é tão vasta quanto sua fauna. A seguir são descritos os mais comuns, mas você pode expandir esta lista conforme adequado à sua campanha. Use os recursos descritos aqui e nas fichas de ameaças como base para suas ideias.</p>
        <p>A descrição de cada recurso indica seus usos. Para recursos que podem ser empregados como matéria-prima, seu valor, bem como o grau de qualidade dos itens que podem ser fabricados com ele, depende do patamar da ameaça da qual foi extraído.</p>
        <table>
          <thead>
            <tr>
              <th colspan="2">Tabela 3-6: Tipos de Recursos Naturais</th>
            </tr>
            <tr>
              <th>Patamar da Ameaça</th>
              <th>Valor/Qualidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Iniciante</td>
              <td>T$ 20 para itens normais</td>
            </tr>
            <tr>
              <td>Veterano</td>
              <td>T$ 100 para itens superiores</td>
            </tr>
            <tr>
              <td>Campeão</td>
              <td>T$ 500 para itens mágicos</td>
            </tr>
            <tr>
              <td>Lenda</td>
              <td>T$ 2.500 para itens mágicos</td>
            </tr>
          </tbody>
        </table>

        <p><b>Carapaça.</b> Diversos tipos de carapaças servem como matéria-prima para couraças, lorigas segmentadas, meias armaduras, armaduras completas e escudos pesados. Esses itens contam como itens naturais para devotos de Allihanna, mas são mais frágeis que metal; cada vez que você sofre um acerto crítico, há 10% (1 em 1d10) de chance de que o item seja destruído. Um item mágico ou feito inteiramente de peças de uma criatura lenda não sofre esse efeito.</p>
        <p><b>Couro.</b> Serve como matéria-prima para armaduras acolchoadas, armaduras de couro, gibões de peles e escudos leves. Ao fabricar uma versão mágica desses itens, você pode gastar 10 peças de couro de lendas para reduzir o custo do item em –1 PM.</p>
        <p><b>Fonte.</b> Das penas de uma fênix às presas de um vampiro, várias criaturas carregam uma fagulha mística que pode ser usada como matéria-prima de itens esotéricos. Além disso, ao fabricar um acessório mágico, você pode gastar 10 fontes de lendas para reduzir o custo do item em –1 PM.</p>
        <p><b>Ingrediente.</b> Diversas criaturas produzem substâncias que podem ser empregadas como ingredientes para itens alquímicos e poções mágicas, independente de seu patamar.</p>
        <p><b>Mantimento.</b> Carne, leite, ovos e outros materiais podem ser usados como alimentos. Cada porção alimenta quatro pessoas; mantimentos de uma criatura iniciante contam como uma refeição comum, de uma criatura veterana ou campeã contam como um prato especial (determinado pelo mestre) e de uma criatura lenda contam como dois pratos especiais (com efeitos cumulativos).</p>
        <p><b>Osso.</b> Ossos das mais variadas partes de criaturas servem como matéria-prima de armas. Peças de patamar veterano também podem ser usadas nas melhorias espinhoso ou macabro. Além disso, ao fabricar uma maça do terror ou um item tumular ou assustador, você pode pode gastar 10 peças de osso de lendas para reduzir o custo do item em –1 PM.</p>
        <p><b>Sucata.</b> Partes de golens e outras criaturas artificiais servem como matéria-prima de engenhocas e itens de metal. Além disso, quando fabrica uma engenhoca, você pode gastar uma peça de sucata para receber um bônus no teste de Ofício (cumulativo com bônus de outros itens), conforme o patamar da criatura: veterano, +2; campeão, +5; lenda, +10.</p>
        
        `,
        referencia: `Ameaças de Arton - páginas 401 e 402`,
      },
      {
        id: 186,
        nome: `PARCEIROS ESPECIAIS`,
        descricao: `
        <p>Um parceiro especial fornece os benefícios listados em sua descrição, mas conta como o tipo indicado para habilidades que fornecem um parceiro desse tipo. Por exemplo, uma hiena (um parceiro especial perseguidor) pode ser escolhida por um personagem com o poder Companheiro Animal (que permite escolher um parceiro perseguidor). Alguns parceiros possuem mais de um tipo; nesse caso, seu tipo é definido quando ele é criado e não pode ser alterado posteriormente.</p>
        `,
        referencia: `Ameaças de Arton - página 416`,
      },
      {
        id: 187,
        nome: `NATAÇÃO E PARCEIROS`,
        descricao: `
        <p>Exceto quando indicado em sua descrição, parceiros que fornecem deslocamento de natação não permitem ao personagem falar ou respirar debaixo d’água nem anulam as penalidades padrão por estar submerso.</p>
        `,
        referencia: `Ameaças de Arton - página 416`,
      },
      {
        id: 188,
        nome: `DEVOÇÃO AMPLA`,
        descricao: `
        <p>Clérigos e frades do Panteão, druidas de Arton e paladinos do bem não recebem poderes concedidos. Em compensação, por sua devoção ampla, recebem +2 PM por patamar.</p>
        `,
        referencia: `Deuses de Arton - página 11`,
      },
      {
        id: 189,
        nome: `SACRÁRIOS`,
        descricao: `
        <p>Alguns poderes de frade são sacrários — uma área consagrada pelo poder divino. Esses poderes compartilham das seguintes regras.</p>
        <ul>
        <li>Criar um sacrário gasta uma ação padrão e 3 PM.</li>
        <li>Um sacrário ocupa uma esfera de 3m de raio em alcance curto.</li>
        <li>Um sacrário dura até o fim da cena, a menos que sua descrição diga o contrário.</li>
        <li>Você pode ter um número de sacrários ativos simultâneos igual à sua Sabedoria.</li>
        <li>Um sacrário não pode ser criado em uma área afetada por outro sacrário ou onde haja um símbolo visível de uma divindade diferente da sua.</li>
        <li>Para ser afetada, uma criatura precisa estar inteiramente dentro da área do sacrário.</li>
        </ul>
        `,
        referencia: `Deuses de Arton - página 39`,
      },
      {
        id: 190,
        nome: `DOM DA RESSURREIÇÃO E FRADES`,
        descricao: `
        <p>O poder concedido Dom da Ressurreição (Tormenta20, p. 133), originalmente limitado a clérigos, também pode ser escolhido por frades de Thyatis.</p>
        `,
        referencia: `Deuses de Arton - página 41`,
      },
      {
        id: 191,
        nome: `EQUIPAMENTOS RELIGIOSOS`,
        descricao: `
        <p>Esta seção descreve diversos equipamentos relacionados às divindades de Arton. Embora geralmente sejam usados por devotos, muitos desses itens não exigem uma conexão divina e frequentemente são empregados por aventureiros sem nenhuma ligação com os deuses.</p>
        `,
        referencia: `Deuses de Arton - página 48`,
      },
      {
        id: 192,
        nome: `SÍMBOLOS SAGRADOS VISÍVEIS`,
        descricao: `
        <p>Diversos efeitos, como os das magias Consagrar e Profanar, são modificados pela presença de um símbolo sagrado visível. Isso é qualquer símbolo sagrado que tenha sido intencionalmente colocado no local por um devoto, como parte da decoração ou arquitetura do lugar (como um símbolo de Khalmyr esculpido na parede de um templo), ou um símbolo que esteja sendo empunhado, ou vestido, de forma visível por um devoto da divindade. A critério do mestre, símbolos danificados ou deixados casualmente em um lugar por alguém que não seja um devoto (como o símbolo de um aventureiro morto encontrado em uma masmorra) não possuem o poder necessário para modificar esses efeitos.</p>
        `,
        referencia: `Deuses de Arton - página 51`,
      },
      {
        id: 193,
        nome: `PRATOS ESPECIAIS DIVINOS`,
        descricao: `
        <p>Cada prato especial desta seção é uma receita sagrada, dedicada a um deus específico e que leva como ingrediente especial uma porção da devoção do cozinheiro. Por isso, estes pratos só podem ser preparados por devotos do respectivo deus.</p>
        `,
        referencia: `Deuses de Arton - página 51`,
      },
      {
        id: 194,
        nome: `ITENS LITÚRGICOS`,
        descricao: `
        <p>Itens litúrgicos são itens mágicos imbuídos de poder divino. Mais do que meros objetos encantados, são símbolos de fé. Cada item litúrgico é associado a um deus e possui afinidade com seus devotos — alguns funcionam apenas com estes devotos, enquanto outros se tornam mais fortes nas mãos destes. De forma similar, um item litúrgico só pode ser fabricado por devotos da divindade em questão.</p>
        <p>Itens litúrgicos não podem ser identificados com Misticismo, apenas com Religião. Se você for devoto do deus associado ao item, recebe +5 em testes para identificá-lo.</p>
        `,
        referencia: `Deuses de Arton - página 55`,
      },
      {
        id: 195,
        nome: `"MAS É OUTRO DEUS!"`,
        descricao: `
        <p>Grande parte das magias neste capítulo trazem o nome de um deus no título. Isso significa que a magia é tipicamente ofertada (ou foi criada) por aquela divindade. Mas então, sendo devoto de outra fé, ainda posso aprendê-la e lançá-la?</p>
        <p>A resposta é sim. Embora existam rivalidades e inimizades, deuses maiores ainda formam um Panteão, são irmãos unidos sob uma mesma liderança. Poderes divinos são exclusivos, mas magias não (exceto quando sua descrição diz o contrário). Além disso, apesar de suas naturezas díspares, deuses são orgulhosos e vaidosos. Ficam satisfeitos quando devotos de outros entoam seu nome, recorrem a seus milagres. A divindade padroeira, contudo, talvez se aborreça um pouquinho...</p>
        <p>Como regra opcional, quando você lança uma magia com o nome de um deus inimigo ou rival, o mestre pode estabelecer que essa transgressão cobra um pequeno preço. Se falhar em um teste de Religião (CD 20) para conseguir perdão adequado, você sofre –2 em seu próximo teste de perícia e recebe uma breve visão de sua divindade, levemente desapontada...</p>
        `,
        referencia: `Deuses de Arton - página 64`,
      },
      {
        id: 196,
        nome: `MASCOTES`,
        descricao: `
        <p>Um mascote é uma criatura com a qual você desenvolveu uma grande afinidade. Em termos de jogo, é um parceiro especial que não conta em seu limite de parceiros e com o qual você pode se comunicar através de gestos em alcance médio. Ele obedece a seus comandos, mas ainda está limitado ao que uma criatura de sua espécie pode fazer. Mascotes fornecem seus benefícios tanto para você quanto para seus melhores amigos. Se perder um de seus mascotes, você pode treinar um novo com uma semana de trabalho e T$ 100.</p>
        <p>A resposta é sim. Embora existam rivalidades e inimizades, deuses maiores ainda formam um Panteão, são irmãos unidos sob uma mesma liderança. Poderes divinos são exclusivos, mas magias não (exceto quando sua descrição diz o contrário). Além disso, apesar de suas naturezas díspares, deuses são orgulhosos e vaidosos. Ficam satisfeitos quando devotos de outros entoam seu nome, recorrem a seus milagres. A divindade padroeira, contudo, talvez se aborreça um pouquinho...</p>
        <ul>
        <li><b>Águia Real.</b> Uma vez por rodada, fornece +1d6 em uma rolagem de dano com arma.</li>
        <li><b>Bicho Preguiça.</b> Agarrado às costas (suas ou de seu melhor amigo), este animal ocupa o espaço de um item vestido, mas fornece um ataque natural de garra (dano 1d6, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com essa garra.</li>
        <li><b>Camundongo Espiritual.</b> Aumenta a CD para resistir a habilidades mágicas em +1.</li>
        <li><b>Fada-Borboleta.</b> Diminui o custo de habilidades mágicas em –1.</li>
        <li><b>Gekko Malhado.</b> Fornece +2 na Defesa e em Reflexos.</li>
        <li><b>Mico-Leão Dourado.</b> Permite usar Ladinagem para punga em alcance curto</li>
        <li><b>Minivaca.</b> Fornece +1 em testes de ataque. Esse bônus dobra em investidas.</li>
        <li><b>Ossinhos.</b> O esqueleto de um animal reanimado. Fornece redução de corte, frio e perfuração 2.</li>
        </ul>
        `,
        referencia: `Heróis de Arton - página 19`,
      },
      {
        id: 197,
        nome: `EMULSÃO`,
        descricao: `
        <p>Uma emulsão é um óleo que concede propriedades mágicas a um item. Usá-la é uma ação padrão e fornece um ou mais encantos para um item até o fim da cena. Conceder um encanto através de uma emulsão não tem custo adicional (além do gasto do óleo) e conta no limite de encantos do item.</p>
        <p>Existem emulsões com um, dois e três encantos. Se um encanto contido em uma emulsão tiver outro como pré-requisito, a emulsão deve incluir também esse pré-requisito. Fabricar uma emulsão segue as mesmas regras para itens alquímicos, mas o custo e a CD dependem da quantidade de encantos contidos no óleo.</p>
        <table>
          <thead>
            <tr>
              <th>Encantos</th>
              <th>Custo de Fabricação</th>
              <th>CD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>T$ 250</td>
              <td>25</td>
            </tr>
            <tr>
              <td>2</td>
              <td>T$ 750</td>
              <td>30</td>
            </tr>
            <tr>
              <td>3</td>
              <td>T$ 1.500</td>
              <td>35</td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>Por sua volatilidade, que exige do criador manutenção constante, além da necessidade de supervisão em sua aplicação, emulsões não são comercializadas.</p>
        `,
        referencia: `Heróis de Arton - página 24`,
      },
      {
        id: 198,
        nome: `O SÍTIO SAGRADO`,
        descricao: `
        <p>Uma área erma com 5 km de raio, o sítio sagrado é um refúgio para o ermitão e fornece diversas habilidades a ele, algumas das quais o acompanham para além das fronteiras deste local. Caso o sítio sagrado seja destruído, você perde todos os seus PM e só pode recuperá-los ao criar um novo sítio. Fazer isso ocupa um tempo entre aventuras.</p>
        <p><b>Aliados da Natureza.</b> Dentro do sítio, criaturas não inteligentes (Int –4 ou –5) têm atitude melhor com você, conforme seu tipo: no 7º nível, animais são amistosos e espíritos e monstros, indiferentes. No 15º nível suas categorias de atitude melhoram um passo. Você pode comandar criaturas prestativas para lutar ao seu lado e ajudar a defender o sítio sagrado, mas elas não irão segui-lo para fora dele. O mestre decide quais criaturas estão presentes no sítio (de forma geral, a qualquer momento há um número de criaturas com ND total somado igual ao seu nível).</p>
        <p><b>Terreno Associado.</b> Ao receber seu sítio sagrado, escolha um terreno entre aquático, ártico, colina, deserto, floresta, montanha, pântano, planície ou subterrâneo. Esse será o tipo de terreno associado ao seu sítio sagrado. Sempre que estiver em um terreno desse tipo, você soma sua Sabedoria (mínimo +1) em Furtividade, Percepção, Misticismo, Religião e Sobrevivência. No 7º nível, e a cada quatro níveis subsequentes, escolha mais um tipo de terreno para associar ao seu sítio ou aumente o bônus de perícias de um tipo de terreno já escolhido em +2.</p>
        <p>Você também é capaz de atingir uma conexão mais forte com sua divindade dentro do sítio sagrado. Dentro dele, seu redutor de PM por Vínculo com a Terra muda para –2.</p>
        <p><b>Caminhos Sagrados.</b> Quando está em um terreno de um tipo associado ao seu sítio, você não sofre redução de deslocamento por terreno difícil natural e a CD para rastreá-lo aumenta em +10.</p>
        <p><b>Base.</b> O sítio sagrado conta como uma base (veja p. 244) básica. Você paga apenas a metade do custo para aumentar o porte dessa base e para construir cômodos nela.</p>
        `,
        referencia: `Heróis de Arton - página 30`,
      },
      {
        id: 199,
        nome: `O RITUAL DO LICH`,
        descricao: `
        <p>O Ritual do Lich representa o auge do conhecimento mágico de um necromante. É o resultado de anos de estudos, pesquisas e experimentos, sendo conhecido por poucos. Os passos deste ritual são descritos a seguir</p>
        <h5><p><b>PASSO 1: O FILACTÉRIO</b></p></h5>
        <p>“Para viver para sempre, a alma não pode ser destruída”. Baseado nesse princípio, o candidato a lich deve possuir um filactério, um local seguro no qual poderá guardar sua alma. O filactério típico é uma caixa de metal selada, repleta de tiras de pergaminhos com escritos mágicos, mas pode ser quase qualquer objeto. Independente de sua forma, o filactério custa T$ 20.000. Com este item em mãos, você deve lançar as seguintes magias, nessa ordem: Profanar (com o aprimoramento que torna permanente), Ligação Sombria (como parte do ritual, pode ser lançada tendo como alvo o filactério), Roubar a Alma (em si mesmo) e Tranca Arcana (no filactério). As magias não surtem efeito imediatamente, apenas no fim do ritual</p>
        <h5><p><b>PASSO 2: A POÇÃO DO SONO ETERNO</b></p></h5>
        <p>Com um receptáculo em mãos, você deve se concentrar no próximo passo: morrer. Mas não de qualquer maneira — apenas através da poção do sono eterno. Esta poção especial contém vários tipos de venenos: beladona, cicuta, essência de sombra e pó de lich (uma dose de cada), que são usados como matéria-prima, e fabricá-la exige um teste de Ofício (alquimista) contra CD 35. Com a poção em mãos, você deve lançar as seguintes magias, nessa ordem: Erupção Glacial, Rogar Maldição e Servo Morto-Vivo. Você deve esperar uma noite de lua minguante para beber a poção, pois esta é uma etapa que não pode ser testemunhada por Lena.</p>
        <h5><p><b>PASSO 3: O MAGO IMORTAL</b></p></h5>
        <p>Para você, a poção do sono eterno é letal. Após sua morte, seu corpo fica inerte e sua alma é sugada para o filactério (assim, um candidato que não tenha realizado o primeiro passo do ritual simplesmente morre). Sem um corpo físico, sua consciência vaga pelos reinos dos deuses. Depois de uma semana, sua mente retorna para seu corpo — mas o tempo já cobrou seu preço. Seu corpo está seco, enrugado, com olhos vazios e ossos salientes. Você não respira mais e não tem sangue, tendo se tornado um morto-vivo. Este é um ritual complexo e a preparação e execução dele provavelmente terá tomado boa parte de seu tempo de vida. Mas isso não é um problema: agora você é um lich e não precisa mais se preocupar nem com tempo, nem com vida.</p>
        <p>Em termos de regras, você adquire as características a seguir:</p>
        <p><b>Atributos.</b> Inteligência +1, Sabedoria +1, Carisma +1, Constituição –1.</p>
        <p><b>Morto-Vivo.</b> Seu tipo muda para morto-vivo. Você recebe visão no escuro e imunidade a efeitos de cansaço e metabólicos, eletricidade, frio, metamorfose, trevas e veneno. Além disso, não precisa respirar, alimentar-se ou dormir. Por fim, efeitos mágicos de cura de luz causam dano a você e você não se beneficia de itens da categoria alimentação, mas dano de trevas recupera seus PV.</p>
        <p><b>Cadáver Resiliente.</b> Você recebe +5 na Defesa e redução de dano 10/mágico.</p>
        <p><b>Aura de Medo.</b> Você recebe este poder (Tormenta20, p. 132, mas ele não é um poder concedido). Se já o possui, a CD para resistir a ele aumenta em +2.</p>
        <p><b>Toque Gélido.</b> Quando faz um ataque desarmado, você pode gastar 3 PM para envolver sua mão em frio sobrenatural. Se fizer isso e acertar o ataque, em vez do dano normal você causa 6d6+6 pontos de dano de frio e a vítima fica paralisada por 1 rodada (apenas uma vez por cena, Fort CD Int evita).</p>
        <p><b>Filactério.</b> Se for morto, você retorna completamente recuperado em 1d10 dias. A única forma de derrotá-lo permanentemente é destruir seu filactério. Você pode deixar o filactério em qualquer lugar, mas você e ele precisam estar no mesmo Plano. O filactério possui RD 30 e PV iguais aos seus. Se for danificado, é totalmente restaurado na próxima vez que você recuperar seus PM por descanso.</p>
        <p><b>Preço da Não Vida.</b> Você precisa passar 8 horas sob a luz de estrelas ou no subterrâneo. Se fizer isso, recupera PV e PM por descanso em condições normais (você não é afetado por condições boas ou ruins de descanso). Caso contrário, sofre os efeitos de fome.</p>        `,
        referencia: `Heróis de Arton - página 36`,
      },
      {
        id: 200,
        nome: `O TREINAMENTO DE UM VASSALO`,
        descricao: `
        <p>Ao longo de sua carreira, o vassalo se torna treinado em diversas perícias. Sempre que receber um desses treinamentos por uma habilidade de vassalo, se já for treinado na perícia, em vez disso você recebe +2 nela.</p>`,
        referencia: `Heróis de Arton - página 43`,
      },
      {
        id: 201,
        nome: `MAGIAS SIMULADAS`,
        descricao: `
        <p>Uma magia simulada é uma habilidade não mágica que reproduz os efeitos de uma magia, como os poderes Flagelo dos Mares e Truque de Mágica (Tormenta20, pp. 48 e 89).</p>
        <p>Magias simuladas seguem as mesmas regras de magias normais, exceto por não serem habilidades mágicas e não contarem como magias (não se beneficiam de efeitos que afetam magias, como itens esotéricos e catalisadores, e não exigem testes de concentração). Entretanto, elas não se acumulam com outras magias (simuladas ou não).</p>
        `,
        referencia: `Heróis de Arton - página 44`,
      },
      {
        id: 202,
        nome: `ORIGENS ESPECIAIS`,
        descricao: `
        <p>Esta seção traz origens que representam históricos relacionados a lugares, organizações ou eventos específicos de Arton. Você pode escolher uma delas (no lugar de sua origem comum) se sua história estiver de alguma forma ligada aos elementos dessa origem.</p>
        <p>Diferentes das origens do livro básico, que representam conceitos amplos, origens especiais fornecem um benefício único, característico do local, evento ou organização a que se referem. Se o benefício incluir treinamento em uma perícia na qual você já é treinado, você pode ser treinado em outra perícia de classe. Efeitos de origens contam como habilidades para fins de acúmulo.</p>
        `,
        referencia: `Heróis de Arton - página 46`,
      },
      {
        id: 203,
        nome: `OFÍCIOS VARIADOS`,
        descricao: `
        <p>Algumas das origens descritas aqui fornecem treinamento em Ofícios variados, como coureiro ou barbeiro. Assim como os Ofícios básicos descritos em Tormenta20, essas perícias também podem ser usadas para fabricar e consertar itens dos tipos apropriados. Por exemplo, Ofício (coureiro) pode ser usado para fabricar quaisquer itens feitos primariamente de couro, como um gibão de peles, uma bandoleira de poções, uma mochila de aventureiro ou um item feito de um material especial à base de couro (como o couro de bulette, descrito em Ameaças de Arton, p. 399). Em todos os casos, o mestre tem a palavra final sobre quais itens fazem parte desses Ofícios.</p>
        `,
        referencia: `Heróis de Arton - página 46`,
      },
      {
        id: 204,
        nome: `PODERES DE BRADO`,
        descricao: `
        <p>Poderes de brado compartilham as seguintes regras.</p>
        <ul>
        <li>Emitir um brado gasta uma ação de movimento e 1 PM, a menos que a descrição diga o contrário.</li>
        <li>Brados têm alcance curto.</li>
        </ul>
        <p>A critério do mestre, habilidades raciais baseadas em gritos, como o Rugido Imponente do moreau do leão (Ameaças de Arton, p. 305), podem ser consideradas poderes de brado para um bárbaro.</p>
        `,
        referencia: `Heróis de Arton - página 57`,
      },
      {
        id: 205,
        nome: `PODERES DE PAIXÃO`,
        descricao: `
        <p>Paixões são aspectos da vida de um cavaleiro aos quais ele se entrega com dedicação total. São crenças tão importantes que, em nome delas, ele é capaz de se inspirar e sobrepujar quaisquer limitações. Contudo, se um cavaleiro é derrotado enquanto está inspirado por sua Paixão, a vergonha pode abalá-lo profundamente. Esses poderes compartilham as seguintes regras.</p>
        <ul>
        <li>Evocar uma Paixão é uma ação livre.</li>
        <li>Quando evoca uma Paixão, você faz um teste de Carisma (CD 10 +5 por teste dessa Paixão na mesma aventura). Se passar, recebe o benefício da Paixão. Se falhar, não pode mais usá-la até o fim da aventura.</li>
        <li>Paixões que não têm um efeito instantâneo duram até o fim da cena.</li>
        <li>Sempre que rola 20 natural em um teste de Paixão, ou obtém uma vitória significativa em uma cena em que usou uma Paixão com sucesso, você recebe um bônus permanente e cumulativo de +1 nos testes de atributo para ativá-la.</li>
        <li>Sempre que rola 1 natural em um teste de Paixão, ou sofre uma falha significativa em uma cena em que usou uma Paixão com sucesso, você recebe uma penalidade permanente e cumulativa de –1 nos testes de atributo para ativá-la.</li>
        </ul>
        <h5><p><b>PAIXÕES E RESULTADOS SIGNIFICATIVOS</b></p></h5>
        <p>Sempre que o cavaleiro evoca uma Paixão, está colocando à prova um sentimento que faz parte das fundações de sua alma. Nenhum cavaleiro que tenha uma Paixão ousa tratá-la como uma mera ferramenta, nem espera que o objeto de sua Paixão o defenda. Pelo contrário: ele está disposto a entregar a vida pelo objeto da Paixão.</p>
        <p>Assim, uma “vitória significativa” ao usar uma Paixão nunca se refere ao próprio cavaleiro. Para que uma vitória seja significativa, deve beneficiar diretamente o alvo da Paixão e não pode servir a interesses pessoais ou egoístas do cavaleiro. Por exemplo, uma cavaleira que tenha Paixão: Amor (sua esposa) pode obter uma vitória significativa ao salvá-la de um vilão, mas não ao derrotar esse mesmo vilão se ela não estiver sendo ameaçada por ele. Se a mesma cavaleira tiver Paixão: Lealdade (a Ordem da Luz), pode obter uma vitória significativa ao defender o Castelo da Luz contra uma invasão, mas não ao vencer os mesmos inimigos em uma circunstância na qual a Ordem não esteja ameaçada.</p>
        <p>Da mesma forma, uma “falha significativa” é uma circunstância em que o cavaleiro não consegue proteger o alvo de sua Paixão e, por omissão ou incompetência, permite que ele seja prejudicado. A mesma cavaleira teria uma falha significativa se sua esposa fosse aprisionada e levada embora pelo vilão, ou se o Castelo da Luz fosse invadido.</p>
        <p>O mestre tem a palavra final sobre o que é uma vitória ou uma falha significativas no uso de uma Paixão. Como regra geral, o jogador deve se esforçar ao máximo para proteger e beneficiar o alvo da Paixão. Se negligenciá-la ou colocá-la em segundo plano, atrás de coisas como sua própria segurança, uma recompensa ou o grupo de aventureiros, pode sofrer uma penalidade, como se tivesse rolado 1 natural em um teste de Paixão</p>
        `,
        referencia: `Heróis de Arton - página 63`,
      },
      {
        id: 206,
        nome: `MESTRE CELEBRANTE`,
        descricao: `
        <p>O poder Mestre Celebrante (Tormenta20, p. 58) dobra os benefícios de Missas celebradas pelo personagem. Abaixo detalhamos como isso se aplica.</p>
        <ul>
        <li>Se a Missa fornece um bônus numérico que se aplica por toda sua duração, como o de Mente Abençoada, esse bônus é dobrado.</li>
        <li>Se fornece uma quantidade de PV ou PM, como Elevação do Espírito, essa quantidade é dobrada</li>
        <li>Se permite usar uma habilidade ou receber um benefício uma vez, como Compartilhar Milagre, esse efeito pode ser usado uma vez adicional pela duração da Missa.</li>
        </ul>
        `,
        referencia: `Heróis de Arton - página 65`,
      },
      {
        id: 207,
        nome: `COMBINAÇÕES DESARMADAS`,
        descricao: `
        <p>Poderes de Combinação representam golpes que se aproveitam dos efeitos de ataques anteriores sobre seu oponente.Eles compartilham as seguintes regras.</p>
        <ul>
        <li>Combinações só podem ser usadas com ataques desarmados.</li>
        <li>Cada Combinação só pode ser usada uma vez por rodada, e apenas uma Combinação pode ser usada por ataque.</li>
        <li>Quando acerta um ataque usando um poder de Combinação, você começa uma contagem (individual por oponente). O próximo ataque de Combinação recebe um bônus de contagem (descrito em cada poder). A contagem zera se você passar uma rodada sem acertar um ataque usando um poder de combinação.</li>
        </ul>
        `,
        referencia: `Heróis de Arton - página 74`,
      },
      {
        id: 208,
        nome: `PODERES DE RAÇA`,
        descricao: `
        <p>Poderes de raça são um novo grupo de poderes gerais. São caracterizados por possuírem como pré-requisito pertencer a uma raça específica. Exceto por isso, funcionam como quaisquer outros poderes gerais.</p>
        `,
        referencia: `Heróis de Arton - página 84`,
      },
      {
        id: 209,
        nome: `PODERES DE GRUPO`,
        descricao: `
        <p>Poderes de grupo fornecem bônus maiores que outros poderes; contudo, só funcionam se houver outro personagem com o mesmo poder na cena. Assim, se apenas você comprar um poder de grupo, ele não terá efeito! Muitas vezes, poderes de grupo se tornam mais eficientes de acordo com o número de personagens com o mesmo poder na cena.</p>
        <p>O pré-requisito de ter um aliado com o mesmo poder na cena nunca pode ser cumprido por NPCs, parceiros e outros coadjuvantes — apenas por personagens jogadores. Também não pode ser cumprido por efeitos que permitam a um personagem usar um poder sem possuí-lo. Em suma, funcionam apenas se dois ou mais membros do grupo efetivamente tiverem escolhido o poder. Caso um membro do grupo morra e um poder de grupo fique inativo, você pode gastar tempo entre aventuras para treinar e trocar o poder, ou esperar que o jogador em questão faça outro personagem com o mesmo poder de grupo.</p>
        `,
        referencia: `Heróis de Arton - página 92`,
      },
      {
        id: 210,
        nome: `EU BEBO SIM`,
        descricao: `
        <p>Fabricar uma bebida exige um teste de Ofício (cozinheiro) com CD 20 e segue as regras normais de fabricação de itens consumíveis (com 1 dia você faz uma bebida, ou duas se aceitar uma penalidade de –5 no teste).</p>
        <p>Consumir uma bebida leva alguns minutos — embora seja possível tomar alguns goles rapidamente, para receber os benefícios dela você precisa ingeri-la com calma! Benefícios de bebida duram 1 dia e se acumulam com outros benefícios de alimentação (incluindo de bebidas diferentes).</p>
        <p>Quando você ingere uma bebida alcoólica, deve fazer um teste de Fortitude (CD indicada no item; cada dose adicional no mesmo dia aumenta a CD em +5). Se falhar, fica embriagado (–2 em testes baseados em Destreza e Carisma). Se já estava embriagado, fica bebum (desprevenido, –5 em testes baseados em Destreza e Carisma). Por fim, se já estava bebum, cai inconsciente. Todas as condições duram até o fim do dia.</p>
        <p>Efeitos que evitem penalidades impostas por bebidas também anulam seus benefícios, pois eles andam lado a lado. Afinal, um personagem só recebe redução de dano ou bônus em perícias sociais ao beber por estar levemente embriagado! Um personagem com imunidade a efeitos prejudiciais de itens ingeríveis (como pelo poder Vida Rústica) pode abrir mão dessa imunidade ao beber para receber os benefícios da bebida. Nesse caso, ele recebe +5 em seu teste de Fortitude.</p>
        <p>Use estas regras apenas se todos os membros do grupo forem maiores de idade. E, por mais que tavernas e bebidas alcoólicas sejam comuns em obras de fantasia, não custa lembrar: na vida real, consuma com moderação!</p>
        `,
        referencia: `Heróis de Arton - página 237`,
      },
      {
        id: 211,
        nome: `MONTARIA E ITENS VESTIDOS`,
        descricao: `
        <p>A menos que algo seja especificado em contrário em sua descrição, uma montaria pode ser equipada com dois itens vestidos, como uma sela ou um alforje (Tormenta20, pp. 158 e 162) ou outro dos itens para animais descritos aqui.</p>
        `,
        referencia: `Heróis de Arton - página 238`,
      },
      {
        id: 212,
        nome: `SERVIÇOS MERCENÁRIOS`,
        descricao: `
        <p>Você pode contratar mercenários como parceiros (Tormenta20, p. 260). O valor listado representa o preço para contratar o NPC por uma cena. Ele o acompanha, contando no seu limite de parceiros, mas sem oferecer benefícios, até que você peça sua ajuda. Então fornece seu benefício até o fim da cena. Após ajudá-lo, o mercenário vai embora. De acordo com o mestre, pode ser possível contratar um mercenário para uma aventura inteira pelo triplo do preço listado. A descrição de cada mercenário indica seu tipo e nível.</p>
        `,
        referencia: `Heróis de Arton - página 238`,
      },
      {
        id: 213,
        nome: `CAPANGAS`,
        descricao: `
        <p>Capangas são criaturas simplificadas que agem em grupo. Individualmente, são fracos, mas graças aos números, tornam-se perigosos. Eles usam as seguintes regras.</p>
        <ul>
        <li>Para usar um grupo de capangas em combate, primeiro você deve posicioná-los. Para isso, você gasta uma ação completa e posiciona cada capanga do grupo em um espaço desocupado em alcance curto.</li>
        <li>Você pode usar uma ação de movimento para fazer quaisquer capangas já posicionados se mover ao deslocamento deles, ou uma ação padrão para fazê-los causar dano automático a criaturas adjacentes (apenas uma vez por rodada). Capangas não agem sem receber ordens.</li>
        <li>Exceto quando dito o contrário, capangas têm 1 PV e falham automaticamente em qualquer teste oposto. Um capanga reduzido a 0 PV não pode ser usado pelo restante da cena.</li>
        <li>Se o tamanho de um capanga não for indicado em sua descrição, ele é Médio.</li>
        <li>Cada grupo de capangas conta como um parceiro para o limite de parceiros que você pode ter.</li>
        <li>Usos criativos para capangas fora de combate ficam a critério do mestre.</li>
        <li>Capangas são criaturas simplificadas e não se beneficiam de alguns efeitos (por exemplo, não recebem bônus em testes de ataque, pois causam dano automático).</li>
        </ul>
        `,
        referencia: `Heróis de Arton - páginas 240 e 241`,
      },
      {
        id: 214,
        nome: `SERVIÇOS MERCENÁRIOS`,
        descricao: `
        <p>As criaturas convocadas pelas seguintes habilidades são capangas, e são afetadas por quaisquer efeitos que afetem especificamente capangas: Conjurar Mortos-Vivos, Servos do Dragão, Tropas Duyshidakk (Tormenta20), o aprimoramento que conjura kobolds de Conjurar Monstro (Ameaças de Arton) e Legião Tapistana (Jornada Heroica: Guerra Artoniana e Jornada Heroica: A Libertação de Valkaria). Em especial, um efeito que aumente a quantidade de capangas que você recebe, como Comandante de Campo (veja p. 75) aumenta a quantidade de capangas convocados. Da mesma forma, um efeito que reduza a ação necessária para posicionar seus capangas também reduz a ação necessária para usar essas habilidades (exceto para magias).</p>
        <p>Capangas convocados não contam em seu limite de parceiros.</p>
        `,
        referencia: `Heróis de Arton - página 241`,
      },
      {
        id: 215,
        nome: `VEÍCULOS`,
        descricao: `
        <p>Carroças carregando repolhos e carruagens carregando princesas. Grandes veleiros singrando os mares e ágeis ornitópteros voando pelos céus. Arton possui diversos veículos, e cada vez mais eles são parte da vida — e das aventuras — dos heróis. Esta seção apresenta regras detalhadas para uso de veículos.</p>
        <h5><p><b>CARACTERÍSTICAS DE VEÍCULOS</b></p></h5>
        <p><b>Tamanho.</b> O tamanho de um veículo determina o espaço que ele ocupa, bem como seus modificadores de Furtividade e manobras (Tormenta20, p. 107). Além disso, o veículo aplica seu modificador de Furtividade por tamanho nos testes de Pilotagem do piloto.</p>
        <p><b>Deslocamento.</b> Veículos seguem as regras normais para seus tipos de deslocamento, exceto que um veículo com deslocamento de natação se move apenas sobre a água, a menos que sua descrição especifica que ele podem submergir.</p>
        <p><b>Defesa.</b> Indica a dureza dos materiais que compõem o veículo. Se o veículo adiciona um atributo (ou outra característica) do piloto à sua Defesa, ele só recebe esse benefício se estiver em movimento.</p>
        <p><b>Pontos de Vida.</b> Representam a resistência dos materiais que compõem o veículo. Um veículo reduzido a 0 PV ou menos para de funcionar e, se for reduzido a um total de PV negativos igual à metade de seus pontos de vida máximos, é destruído além de qualquer conserto.</p>
        <ul>
        <li><i>Consertando Veículos.</i> Para consertar um veículo, você gasta 1 hora de trabalho e faz um teste de Ofício (artesão ou outro apropriado) com CD 15. Se passar, recupera 1d8 PV do veículo, +1d8 para cada 5 pontos pelos quais o teste superar a CD. Para cada d8 recuperado, você precisa gastar T$ 10 em materiais. A critério do mestre, várias pessoas podem reparar um veículo ao mesmo tempo, sobretudo se ele for Grande ou maior. Ao contrário de outros objetos, pontos de vida de veículos também podem ser recuperados com habilidades que recuperem PV de construtos, como a magia <i>Transmutar Objetos.</i></li>
        </ul>
        <p><b>Tripulação.</b> Cada veículo exige um ou mais tripulantes, conforme seu tamanho e complexidade.</p>
        <ul>
        <li><i>Piloto.</i> Responsável por conduzir o veículo. Todo veículo tripulado precisa de pelo menos um piloto.</i></li>
        <li><i>Copiloto.</i> Pode fazer testes de Pilotagem para ajudar o piloto, e pode substituí-lo se necessário.</i></li>
        <li><i>Capitão.</i> Veículos maiores, como navios, geralmente possuem um capitão. Ele desempenha diversas tarefas adequadas ao veículo e pode fazer testes para ajudar os demais tripulantes.</i></li>
        </ul>
        <p>Certos veículos podem ter outros tripulantes especializados, como navegadores, artesãos, canhoneiros, remadores etc. Se a tripulação de um veículo for menor que o necessário, o piloto sofre –2 em testes de Pilotagem. Se for menor que a metade do necessário, a penalidade aumenta para –5.</p>
        <p><b>Passageiros e Carga.</b> Indica quantos passageiros ou espaços de carga o veículo pode transportar. Como regra geral, um passageiro Pequeno ou Médio que não esteja sobrecarregado equivale a 20 espaços de carga de um veículo. Qualquer sobrecarga do passageiro conta no limite de espaços do veículo.</p>
        <p><b>Cobertura.</b> Alguns veículos fornecem cobertura, leve ou total, para seus ocupantes (indicado em sua descrição).</p>
        `,
        referencia: `Heróis de Arton - páginas 241 e 242`,
      },
      {
        id: 216,
        nome: `JOGANDO COM VEÍCULOS`,
        descricao: `
        <p><b>Embarcando.</b> Embarcar em um veículo geralmente é uma ação de movimento. No caso de veículos maiores, como navios, alcançar posições específicas pode demorar mais tempo.</p>
        <p><b>Pilotagem.</b> Para conduzir um veículo em combate ou outras situações ruins (por exemplo, uma estrada esburacada para um veículo terrestre, ou um dia de ventania para um veículo voador) você precisa gastar uma ação de movimento e fazer um teste de Pilotagem contra CD 15. Em situações muito ruins (um bosque embarrado para um veículo terrestre, uma tempestade para um veículo voador), a CD aumenta para 25. Se passar, você avança seu deslocamento. Se falhar, avança metade desse deslocamento. Por fim, se falhar por 5 ou mais, sofre um contratempo.</p>
        <p>Um contratempo pode ser perda de vida (2d6 para veículos Médios ou menores, +2d6 por categoria de tamanho acima), uma colisão ou um problema que desabilite uma roda ou incapacite uma das criaturas que puxa o veículo (veja a seguir).</p>
        <ul>
        <li><i>Pilotagem Cuidadosa.</i> No início de cada rodada, você pode pilotar cuidadosamente. Se fizer isso, nessa rodada o deslocamento do veículo diminui pela metade e você recebe +2 em Pilotagem.</li>
        </ul>
        <p><b>Colisões.</b> Veículos em movimento podem colidir com obstáculos, como paredes, árvores e outros veículos. Quando uma colisão ocorre, o veículo e seus ocupantes sofrem 1d6 pontos de dano de impacto para cada 3m de deslocamento do veículo (mínimo 1d6). Os ocupantes do veículo podem fazer um teste de Reflexos (CD 20 + o total de dados de dano) para reduzir esse dano à metade. A critério do mestre, obstáculos muito pequenos (três ou mais categorias de tamanho menores que o veículo) ou frágeis (como uma pilha de feno) não causam dano de colisão. Já obstáculos muito grandes (duas ou mais categorias de tamanho maiores que o veículo) podem, além do dano, forçar o veículo a parar completamente ou capotar.</p>
        <p><b>Quebrando Rodas.</b> É possível quebrar ou sabotar as rodas de um veículo ou outras partes necessárias para seu deslocamento, como remos ou velas (veja Ladinagem em Tormenta20, p. 120). Se uma dessas partes for desabilitada, o piloto sofre uma penalidade de –2 em testes de Pilotagem. Se mais da metade dessas partes for desabilitada, o piloto sofre –5 em testes de Pilotagem e o deslocamento do veículo é reduzido à metade. O mestre tem a palavra final sobre quais partes de um veículo interferem em seu deslocamento.</p>
        <p><b>Animais de Tração.</b> Para veículos puxados por criaturas, a descrição indica quantas delas são necessárias. Se a quantidade de criaturas presentes for menor que o indicado, o piloto sofre –2 em testes de Pilotagem. Se for menor que a metade, a penalidade em Pilotagem aumenta para –5 e o deslocamento do veículo é reduzido à metade.</p>
        <p><b>Atacar em um Veículo.</b> O balanço de um veículo em movimento torna mais difícil atacar à distância (–2 em testes de ataque) e conta como condição ruim para lançar magias. A critério do mestre, poderes relacionados a combater em veículos, como Pernas do Mar (Tormenta20, p. 48), podem eliminar essas penalidades.</p>
        <p><b>Atropelamento.</b> Você pode usar uma ação completa para atropelar criaturas. Faça um teste de Pilotagem para conduzir como normal. Se você passar, o veículo percorre até o dobro de seu deslocamento (mínimo 6m) em linha reta, podendo passar pelo espaço ocupado por criaturas menores que ele. Criaturas atropeladas sofrem 1d6 pontos de dano de impacto para cada 1,5m de deslocamento do veículo e ficam caídas (Ref CD igual ao resultado do teste de Pilotagem reduz à metade e evita a condição). Se encontrar uma criatura de tamanho igual ou maior que o seu, em vez de atropelá-la o veículo colide com ela (veja “Colisões”). Veículos Enormes e Colossais são ainda mais perigosos; seus dados de dano mudam respectivamente para d8 e d12.</p>
        <p><b>Aeronaves.</b> Alguns veículos voadores, como balões, podem ficar parados em pleno ar sem perder sustentação. Já outros (indicados em sua descrição) precisam percorrer pelo menos metade do seu deslocamento a cada rodada para se manter voando. Caso contrário, começam a cair e perder controle; o mestre determina quantas rodadas uma aeronave leva para chegar ao solo (como regra geral, uma queda totalmente livre percorre 150m por rodada). Ao fim disso, a aeronave atinge o chão e sofre dano de queda como normal. Da mesma forma, uma aeronave reduzida a 0 PV ou menos perde a capacidade de voar e cai. Em ambos os casos, o piloto pode fazer um teste de Pilotagem para amortecer queda (veja a perícia Acrobacia).</p>
        `,
        referencia: `Heróis de Arton - páginas 242 e 243`,
      },
      {
        id: 217,
        nome: `BASES`,
        descricao: `
        <p>Embora a maior parte das histórias falem de aventureiros que vivem na estrada e dormem ao relento, muitos heróis desejam um lar. É claro que, em se falando de aventureiros, esse lugar será mais do que apenas uma casa. Será um refúgio onde descansar após cada expedição, um cofre no qual guardar seus tesouros e uma fortaleza contra ataques inimigos. Será uma base.</p>
        <p>Uma base é um espaço compartilhado por todo o grupo, com cômodos onde todos os personagens podem morar — assim como seus parceiros e famílias, se assim desejarem. Bases exigem grande investimento, mas fornecem grandes benefícios.</p>
        `,
        referencia: `Heróis de Arton - página 244`,
      },
      {
        id: 218,
        nome: `BASES: ADQUIRINDO UMA`,
        descricao: `
        <p>Bases podem ser construídas, recebidas como recompensa por um serviço realizado ou mesmo compradas. Para construir uma base, primeiro é necessário escolher um lugar. Dependendo da região, isso pode ser tão simples quanto encontrar uma clareira ou tão complexo e burocrático quanto comprar um terreno e obter permissões e autorizações da nobreza ou do governo local. Com o lugar escolhido, você deve Bases gastar uma ação entre aventuras (veja Tormenta20, p. 276), T$ 1.000 e fazer um teste de Nobreza (ou de outra perícia que você possa justificar e seja aprovada pelo mestre) com CD 20. Outros personagens podem ajudar no teste de construção gastando suas próprias ações entre aventuras. Se falhar, você pode tentar novamente gastando mais uma ação entre aventuras e T$ 1.000. Se passar, você constrói uma base mínima (veja a tabela abaixo) de um tipo a sua escolha (veja “Tipos de Bases”, a seguir). Pode ter sido caro e demorado, mas agora seu grupo tem um lugar para chamar de seu! A partir disso, você pode trabalhar para expandir a base, então construir cômodos e enchê-los de mobília.</p>
        <p>Também é possível receber uma base como recompensa por uma aventura — ou até mesmo como parte do tesouro. Um contratante rico pode pagar os heróis por um serviço realizado com uma de suas propriedades. E se os personagens derrotaram um mago vilão… por que não ficar com a torre dele? Por fim, o grupo pode simplesmente comprar sua base. Essa talvez seja a opção mais simples, mas também é a mais cara: o preço de comprar uma base pronta é igual a três vezes o valor da tabela abaixo. Além disso, de acordo com o mestre, pode ser necessário alguns dias procurando um lugar, negociando com o vendedor ou mesmo preenchendo papelada.</p>
        `,
        referencia: `Heróis de Arton - página 244`,
      },
      {
        id: 219,
        nome: `BASES: CARACTERÍSTICAS`,
        descricao: `
        <p>Uma base é uma estrutura natural ou fabricada que abriga diversos cômodos e mobílias. Bases podem ser fixas, como uma torre ou um esconderijo em uma caverna, ou móveis, como um navio ou um rochedo voador. Bases possuem as seguintes características.</p>
        <p><b>Nome.</b> Pode ser o nome da construção ou uma referência a seus moradores.</p>
        <p><b>Tipo.</b> A natureza da base e seus benefícios iniciais.</p>
        <p><b>Porte.</b> O tamanho da base.</p>
        <p><b>Segurança.</b> Um número de 1 a 20 que representa as defesas da base.</p>
        <p><b>Manutenção.</b> O custo de manter a base, pago no início de cada aventura.</p>
        <p><b>Cômodos.</b> Aposentos dentro da base, como quartos, bibliotecas e salas de treinamento.</p>
        <p><b>Mobílias.</b> Móveis e itens de decoração que complementam os cômodos da base.</p>
        <p>Benefícios fornecidos pelas características da base (tipo, cômodos e mobílias) se acumulam entre si, mas contam como benefícios de estruturas e não se acumulam com os benefícios de outras estruturas (como dádivas, domínios e negócios).</p>
        <h5><p><b>TIPOS DE BASES</b></p></h5>
        <p>O tipo da base representa sua forma física e função principal. O tipo é escolhido quando a base é criada e só pode ser alterado por meio de uma reforma (veja o quadro).</p>
        <p><b>Centro de Poder.</b> A base foi construída sobre um centro de energias mágicas, como um bosque feérico, um pedaço de solo sagrado ou uma intersecção de linhas energéticas. Os residentes recebem +1 PM.</p>
        <p><b>Empreendimento.</b> A base é parte de um negócio. Uma vez a cada intervalo entre aventuras, um residente pode fazer um teste de Inteligência, com um bônus igual ao número de cômodos que a base pode ter. A base rende um número de tibares de ouro igual ao resultado do teste. O residente pode gastar sua ação nesse intervalo entre aventuras administrando o negócio; se fizer isso, recebe o dobro de dinheiro. Como alternativa, se estiver usando as regras de negócios de Fim dos Tempos Arco 2: Valkaria, em vez disso a base conta como um negócio de nível 1 (e pode receber níveis de negócio separadamente).</p>
        <p><b>Esconderijo.</b> A base está em um local oculto ou disfarçado, longe de olhos indiscretos. Os residentes recebem +1 em testes de resistência.</p>
        <p><b>Fortificação.</b> A base é uma estrutura fortificada, como uma torre ou um forte, ou está localizada em um ponto de difícil acesso. Ela recebe +5 em segurança e seus residentes recebem +1 na Defesa.</p>
        <p><b>Móvel.</b> A base é um veículo terrestre (deslocamento 12m) ou aquático (deslocamento de natação 12m), como uma carroça ou navio. Se for um veículo aquático, ela não pode submergir (a menos que tenha o cômodo cúpula protetora). Em ambos os casos, por estarem acostumados à estrada, os residentes recebem +1,5m em seu deslocamento — além da praticidade de poder mover a base para qualquer lugar.</p>
        <p><b>Residência.</b> A base é um local confortável e aconchegante, onde os aventureiros podem descansar e relaxar. Cada residente recebe +3 PV e, uma vez por aventura, pode receber os benefícios de um prato especial descrito em Tormenta20 (p. 162).</p>
        `,
        referencia: `Heróis de Arton - página 245`,
      },
      {
        id: 220,
        nome: `BASES: REFORMANDO`,
        descricao: `
        <p>A critério do mestre, você pode alterar o tipo da base para outro. Isso é o equivalente a um teste para construir uma base (veja “Adquirindo uma Base”), mas o custo é metade do custo de construção e a CD é 20 + seu número de cômodos. Se passar, você troca o tipo da base. Quaisquer cômodos da base que tenham o tipo anterior como pré-requisito são destruídos no processo. Se falhar, você pode tentar novamente gastando mais uma ação entre aventuras e o valor dos materiais de construção.</p>
        `,
        referencia: `Heróis de Arton - página 245`,
      },
      {
        id: 221,
        nome: `BASES: PORTE`,
        descricao: `
        <p>O porte de uma base determina o espaço que ela ocupa, sua manutenção (bases maiores são mais caras de manter) e quantos cômodos ela pode abrigar. Uma base recém-construída é mínima (bases compradas ou recebidas podem ter qualquer porte).</p>
        <p>Você pode aumentar o porte da base com uma ação entre aventuras. Para isso, gaste a diferença de preço entre o porte atual e o próximo (por exemplo, T$ 2.000 para subir de porte mínimo para modesto) e faça um teste como descrito em “Adquirindo uma Base”, mas com CD 20 + o número de cômodos do novo porte. Se passar, você amplia o porte da base em uma categoria. Se falhar, pode tentar novamente gastando mais uma ação entre aventuras e o valor dos materiais de construção.</p>
        `,
        referencia: `Heróis de Arton - página 245`,
      },
      {
        id: 222,
        nome: `BASES: SEGURANÇA`,
        descricao: `
        <p>Um número de 0 a 20 que representa as defesas da base. Invasores com ND inferior à segurança da base sofrem uma penalidade em testes de perícia e rolagens de dano dentro dela igual à diferença entre seu ND e o valor de segurança. Já criaturas com ND 5 pontos abaixo da segurança não conseguem invadir a base. A segurança de uma base recém-criada é 0.</p>
        `,
        referencia: `Heróis de Arton - página 246`,
      },
      {
        id: 223,
        nome: `BASES: MANUTENÇÃO`,
        descricao: `
        <p>As despesas recorrentes para que a base esteja sempre em ordem, como limpeza, reparos e criadagem. Ela depende de seu porte e deve ser paga no início de cada aventura; caso contrário, um dos cômodos da base é danificado e deixa de fornecer seus bônus até ser reparado (o que exige uma ação entre aventuras e o gasto de metade do custo do cômodo).</p>
        `,
        referencia: `Heróis de Arton - página 246`,
      },
      {
        id: 224,
        nome: `BASES: CÔMODOS`,
        descricao: `
        <p>Cômodos são as instalações de uma base. Cada base pode ter um número máximo de cômodos de acordo com seu porte. Para construir um cômodo, você precisa gastar uma ação entre aventuras e T$ 1.000 e fazer um teste de Nobreza, ou de outra perícia que você possa justificar e que seja aprovada pelo mestre. A CD é 20 + o número de cômodos que a base pode ter. Se você passar, o cômodo é construído. Se falhar, pode tentar novamente gastando mais uma ação entre aventuras e o custo do cômodo. Exceto quando algo for descrito em contrário, os benefícios de um cômodo se aplicam a todos os residentes.</p>
        `,
        referencia: `Heróis de Arton - página 246`,
      },
      {
        id: 225,
        nome: `BASES: MOBÍLIAS`,
        descricao: `
        <p>De tapeçarias a cabeças de monstros empalhadas, mobílias são objetos que podem ser incluídos em um cômodo para melhorar suas funcionalidades. Mobílias são adquiridas como itens comuns, podendo ser compradas, fabricadas (contam como equipamentos de aventura) ou mesmo encontradas como tesouros. Cada cômodo pode conter uma mobília, e os efeitos da mobília se acumulam com aqueles fornecidos pelo cômodo. Mobílias podem ser movidas de um cômodo para outro entre aventuras, mas uma mesma mobília só pode afetar um único cômodo a cada aventura.</p>        `,
        referencia: `Heróis de Arton - página 250`,
      },
      {
        id: 226,
        nome: `BASES: TESOURO OU MOBÍLIA?`,
        descricao: `
        <p>A critério do mestre, tesouros encontrados em aventuras podem ser usados como mobílias. A chave simbólica de uma cidade, presenteada por seu grato burgomestre, ou uma flor encantada, entregue por uma dríade, podem lembrar os heróis de vitórias passadas. Os benefícios dessas mobílias ficam a cargo do mestre.</p>
        `,
        referencia: `Heróis de Arton - página 251`,
      },
      {
        id: 227,
        nome: `ESOTÉRICOS MÁGICOS`,
        descricao: `
        <p>Esotéricos mágicos funcionam de forma similar a armas mágicas, podendo ser tanto encantados quanto específicos (Tormenta20, p. 334).</p>
        `,
        referencia: `Heróis de Arton - página 260`,
      },
      {
        id: 228,
        nome: `ACESSÓRIOS MÁGICOS`,
        descricao: `
        <p>Acessórios representam versões mágicas de itens gerais e pertencem às mesmas categorias desses itens. Quando a descrição de um acessório não especificar sua categoria, guie-se por sua descrição e pela lógica. Uma flauta fantasma, por exemplo, é um instrumento musical, enquanto um chapéu do disfarce é um vestuário. O mestre tem a palavra final quanto à categoria de cada acessório. Acessórios mágicos funcionam de forma similar a armas mágicas, podendo ser tanto encantados quanto específicos (Tormenta20, p. 334).</p>
        `,
        referencia: `Heróis de Arton - página 262`,
      },
      {
        id: 229,
        nome: `ENCANTOS PARA ACESSÓRIOS`,
        descricao: `
        <p>Encantos para acessórios são aplicados a itens gerais (exceto esotéricos, que possuem sua própria seção; veja acima). A descrição de cada encanto indica para qual tipo de item ele se aplica.</p>
        `,
        referencia: `Heróis de Arton - página 262`,
      },
      {
        id: 230,
        nome: `ITENS INTELIGENTES`,
        descricao: `
        <p>Itens inteligentes são itens mágicos que, através de um evento específico, adquiriram consciência e capacidade de raciocínio alimentadas por magia. Mais do que simples objetos encantados, tornaram-se indivíduos únicos, dotados de personalidade e, muitas vezes, objetivos próprios. A inteligência de um item não pode ser fabricada como um mero encanto: cada um adquire suas faculdades mentais por meio de um evento único, específico de suas histórias particulares.</p>
        <p>Objetos sencientes são raríssimos — menos de 1% dos itens mágicos são inteligentes. Eles pensam e agem como seres vivos, e devem ser tratados como NPCs, em vez de meras anotações nas fichas dos heróis. Assim, o mestre deve pensar com cuidado antes de colocar um item mágico inteligente na campanha.</p>
        <p>Em termos de regras, um item inteligente é um item mágico único, com um conjunto de características adicionais que representam suas capacidades mentais — <i>nível, atributos, sentidos, comunicação, poderes secundários e pontos de mana</i>. Tornar-se inteligente não muda a categoria de poder do item — ele segue sendo menor, médio, maior ou artefato, como antes de adquirir consciência.</p>
        `,
        referencia: `Heróis de Arton - página 269`,
      },
      {
        id: 231,
        nome: `ITENS INTELIGENTES: CRIANDO UM ITEM MÁGICO INTELIGENTE`,
        descricao: `
        <p>Para criar um item mágico inteligente, primeiro gere um item mágico normal. Então leia as instruções a seguir para definir suas características adicionais.</p>
        <p><b>Nível.</b> O nível do item inteligente é determinado por sua categoria de item mágico: menor, 9º; médio, 13º; maior, 17º, e artefato, 20º.</p>
        <p><b>Atributos.</b> Itens mágicos inteligentes possuem apenas valores de atributos mentais — sua Força, Destreza e Constituição são nulas. Para definir os atributos do item, role 3d6 e converta o resultado rolado em um valor de atributo usando a Tabela 1-1 (Tormenta20, p. 17). Esta será a Inteligência do item. Repita o processo duas vezes para gerar sua Sabedoria e seu Carisma. Então, role 1d% na Tabela 3-12 (na página a seguir) e aplique os modificadores da coluna “Atributos”.</p>
        <p><b>Sentidos.</b> Itens mágicos inteligentes podem ver e ouvir como seres humanos. Alguns, além dos sentidos comuns, possuem também visão no escuro e percepção às cegas. Para definir os sentidos do item, role 1d% na Tabela 3-12.</p>
        <p><b>Comunicação.</b> Itens mágicos inteligentes podem se comunicar com seus usuários. Esta comunicação é rudimentar — o item pode apenas transmitir impulsos que incentivam (ou não) certas ações. O que um item específico incentiva depende de sua personalidade. Alguns itens mágicos podem falar ou comunicar-se telepaticamente (apenas com o usuário). Para definir as capacidades de comunicação do item, role 1d% na Tabela 3-12.</p>
        <p><b>Poderes Secundários.</b> Além de seus encantos, itens mágicos inteligentes possuem um ou mais poderes secundários. Poderes secundários são divididos em menores e maiores. Para definir quantos poderes o item possui e de quais tipos, role 1d% na Tabela 3-12 (sim, ela de novo… e pela última vez).</p>
        <ul>
        <li><i>Treinamento em Perícia.</i> O item é treinado nas perícias indicadas. Ele faz testes usando seu próprio nível e atributo e, a menos que esteja sendo empunhado para outra ação (como uma arma sendo usada para atacar), pode fazer testes usando suas próprias ações.</li>
        <li><i>Magias.</i> O item pode lançar as magias indicadas. Ele usa seu próprio nível e atributo e gasta seus próprios PM para isso. Ele gasta sua própria ação, a menos que esteja sendo empunhado para outra ação. O mestre define o atributo-chave dos poderes do item (em geral Carisma).</li>
        </ul>
        <p>Pontos de Mana. Um item inteligente possui sua própria reserva de PM, que é igual à soma do nível dele mais seus atributos mentais. Esses PM podem ser usados pelo item para ativar seus poderes, ou podem ser gastos pelo usuário para habilidades do próprio usuário. Nesse caso, cada PM gasto custa 2 PM do item. Itens inteligentes precisam ficar inertes por 8 horas por dia para recuperar seus PM. Quando fazem isso, recuperam 1 PM por nível (veja abaixo, eles não são afetados por condições de descanso).</p>
        <table>
          <thead>
            <tr>
              <th colspan="5">Tabela 3–13: Capacidades de Itens Mágicos Inteligentes</th>
            </tr>
            <tr>
              <th>d%</th>
              <th>Atributos</th>
              <th>Sentidos</th>
              <th>Comunicação</th>
              <th>Poderes Secundários</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01–25</td>
              <td>Int –1, Sab +0, Car –2</td>
              <td>Visão e audição normais</td>
              <td>Empatia</td>
              <td>Um menor</td>
            </tr>
            <tr>
              <td>26–50</td>
              <td>Int +0, Sab +1, Car –1</td>
              <td>Visão e audição normais</td>
              <td>Empatia</td>
              <td>Dois menores</td>
            </tr>
            <tr>
              <td>51–75</td>
              <td>Int +1, Sab +2, Car +0</td>
              <td>Visão no escuro</td>
              <td>Fala</td>
              <td>Dois menores e um maior</td>
            </tr>
            <tr>
              <td>76–90</td>
              <td>Int +2, Sab +3, Car +1</td>
              <td>Percepção às cegas (curto)</td>
              <td>Fala</td>
              <td>Três menores e um maior</td>
            </tr>
            <tr>
              <td>91–100</td>
              <td>Int +3, Sab +4, Car +2</td>
              <td>Percepção às cegas (médio)</td>
              <td>Telepatia</td>
              <td>Três menores e dois maiores</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 3–14: Poderes de Itens Mágicos Inteligentes</th>
            </tr>
            <tr>
              <th>d%</th>
              <th>Poder Menor</th>
              <th>d%</th>
              <th>Poder Maior</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>01–10</td><td>Pode lançar <em>Adaga Mental</em></td><td>01–08</td><td>Pode lançar <em>Augúrio</em></td></tr>
            <tr><td>11–15</td><td>Pode lançar <em>Bênção</em> (apenas no usuário)</td><td>09–14</td><td>Pode lançar <em>Campo de Força</em></td></tr>
            <tr><td>16–19</td><td>Pode lançar <em>Compreensão</em></td><td>15–20</td><td>Pode lançar <em>Círculo da Justiça</em></td></tr>
            <tr><td>20–22</td><td>Pode lançar <em>Controlar Plantas</em></td><td>21–26</td><td>Pode lançar <em>Condição</em></td></tr>
            <tr><td>23–26</td><td>Pode lançar <em>Criar Ilusão</em></td><td>27–31</td><td>Pode lançar <em>Controlar Fogo</em></td></tr>
            <tr><td>27–31</td><td>Pode lançar <em>Disfarce Ilusório</em></td><td>32–40</td><td>Pode lançar <em>Curar Ferimentos</em></td></tr>
            <tr><td>32–33</td><td>Pode lançar <em>Escuridão</em></td><td>41–45</td><td>Pode lançar <em>Desespero Esmagador</em></td></tr>
            <tr><td>34–36</td><td>Pode lançar <em>Hipnotismo</em></td><td>46–50</td><td>Pode lançar <em>Globo da Verdade de Gwen</em></td></tr>
            <tr><td>37–40</td><td>Pode lançar <em>Visão Mística</em></td><td>51–55</td><td>Pode lançar <em>Ligação Telepática</em></td></tr>
            <tr><td>41–45</td><td>Pode lançar <em>Vitalidade Fantasma</em></td><td>56–60</td><td>Pode lançar <em>Localização</em></td></tr>
            <tr><td>46–55</td><td>Treinado em <em>Conhecimento e Religião</em></td><td>61–65</td><td>Pode lançar <em>Purificação</em></td></tr>
            <tr><td>56–65</td><td>Treinado em <em>Diplomacia e Nobreza</em></td><td>66–75</td><td>Pode lançar <em>Raio Solar</em></td></tr>
            <tr><td>66–75</td><td>Treinado em <em>Enganação e Jogatina</em></td><td>76–80</td><td>Pode lançar <em>Soco de Arsenal</em></td></tr>
            <tr><td>76–80</td><td>Treinado em <em>Intimidação e Sobrevivência</em></td><td>81–85</td><td>Pode lançar <em>Sopro das Vivantes</em></td></tr>
            <tr><td>81–90</td><td>Treinado em <em>Intuição e Percepção</em></td><td>86–90</td><td>Pode lançar <em>Velocidade</em></td></tr>
            <tr><td>91–100</td><td>Treinado em <em>Misticismo</em></td><td>91–100</td><td>Fornece +1 em um atributo do usuário (defina aleatoriamente)</td></tr>
          </tbody>
        </table>
        <p><small>Se um mesmo poder for rolado mais de uma vez, ignore e role novamente.</small></p>

        `,
        referencia: `Heróis de Arton - páginas 269 e 270`,
      },
      {
        id: 232,
        nome: `ITENS INTELIGENTES: EGO`,
        descricao: `
        <p>O ego mede a força de vontade do item e a probabilidade de ele influenciar (ou até mesmo dominar) seu usuário. O ego de um item é igual à soma de seus atributos, mais os modificadores apresentados na Tabela 3-14. Assim, um item mágico maior (ego 15) com três poderes menores (+3), um poder maior (+2), Int 3, Sab 4, Car 0 (+7) e comunicação por fala (+1) tem ego 28.</p>
        <p>Sempre que você tentar fazer algo contrário aos interesses do item, deve fazer um teste de Vontade (CD igual ao ego do item). Se falhar, não consegue fazer a ação e não pode tentar novamente por 1 dia. Se falhar por 10 ou mais, o item controla suas ações por 1 dia.</p>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 3–15: Ego</th>
            </tr>
            <tr>
              <th>Característica do Item</th>
              <th>Pontos de Ego</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Item menor</td><td>5</td></tr>
            <tr><td>Item médio</td><td>10</td></tr>
            <tr><td>Item maior</td><td>15</td></tr>
            <tr><td>Artefato</td><td>20</td></tr>
            <tr><td>Cada ponto de atributo</td><td>+1</td></tr>
            <tr><td>Cada poder menor</td><td>+1</td></tr>
            <tr><td>Cada poder maior</td><td>+2</td></tr>
            <tr><td>Comunicação por fala</td><td>+1</td></tr>
            <tr><td>Comunicação por telepatia</td><td>+2</td></tr>
          </tbody>
        </table>

        `,
        referencia: `Heróis de Arton - páginas 269 e 270`,
      },
      {
        id: 233,
        nome: `ITENS AMALDIÇOADOS`,
        descricao: `
        <p>Itens amaldiçoados são objetos mágicos que, por acidente ou de propósito, receberam efeitos negativos que prejudicam seu portador. Esses efeitos são representados por maldições.</p>
        <p>Em termos de regras, uma maldição funciona de forma semelhante a um encanto. Para criar um item amaldiçoado, o mestre escolhe um item qualquer, com ou sem encantos, e adiciona a ele quantas maldições achar apropriado (até um máximo de três).</p>
        <h5><p><b>REMOVENDO MALDIÇÕES</b></p></h5>
        <p>Uma vez que um personagem use um item amaldiçoado, ele se torna alvo da maldição. Para esse efeito, “usar” significa vestir o item ou empregá-lo para seu propósito (como atacar com uma arma ou usar uma ferramenta para um teste de Ofício). Uma vez que isso aconteça, o personagem não pode mais se livrar do item até se livrar dessa maldição. Se o item é vestido, ele não consegue removê-lo e, se o item é empunhado, ele surge magicamente em sua mão em qualquer situação na qual poderia ser usado (a critério do mestre). A magia Purificação (Tormenta20, p. 202) com o aprimoramento de +3 PM permite que o personagem se livre do item. Entretanto, ela não remove a maldição do item em si.</p>
        <p>Para remover a maldição de um item, é necessário usar uma magia como Desejo ou Intervenção Divina. Alternativamente, a maldição pode ser removida por alguma ação específica, como vingar a morte do antigo dono do item ou banhar o item nas águas de uma fonte específica. A forma exata para remover a maldição de cada item fica a cargo do mestre e descobri-la pode ser uma aventura por si só.</p>
        `,
        referencia: `Heróis de Arton - página 271`,
      },
      {
        id: 234,
        nome: `MALDIÇÕES OU BENÇÃOS?`,
        descricao: `
        <p>Certas maldições, como acalentadora e pró-criatura, têm efeitos que poderiam ser usados em prol dos heróis — anular condições negativas e curar dano, nesses casos. O texto diz explicitamente que as maldições não funcionam para isso, o que pode parecer um pouco arbitrário…</p>
        <p>E é arbitrário mesmo! Itens amaldiçoados são feitos para prejudicar o usuário. Não são magia “neutra”, mas efeitos maldosos, irritantes e incômodos. Sempre pedras no sapato, nunca oportunidades. Em princípio, nenhum uso de itens amaldiçoados que beneficie os personagens é válido.</p>
        <p>Contudo, o mestre pode, em raras exceções, permitir que jogadores com ótimas ideias encontrem um uso benéfico para um item amaldiçoado em uma situação específica. Digamos que a guerreira (usando pela primeira vez uma espada pró-criatura) acabou de fazer um acerto crítico e curou todo o dano do ogro que o grupo está enfrentando, sem saber que isso aconteceria. O bardo então faz um teste de Diplomacia (com todas as penalidades por fazer isso em uma rodada) para acalmar o grandalhão, argumentando que tudo não passa de um mal-entendido — afinal, a guerreira acabou de curá-lo!</p>
        <p>Em casos como esses, itens amaldiçoados podem fornecer um bônus ou dar subsídios para um plano. A criatividade é uma das bases do RPG, afinal. Mas eles nunca devem ser fontes constantes e previsíveis de recursos ou efeitos positivos.</p>
        `,
        referencia: `Heróis de Arton - página 273`,
      },
      {
        id: 235,
        nome: `ATRIBUTOS VARIADOS`,
        descricao: `
        <p>O livro básico traz duas opções para definir seus atributos: pontos ou rolagem. A seguir estão seis opções novas. Para todas que envolvem rolagens, consulte a tabela em Tormenta20, p. 17, para converter os resultados das rolagens em atributos.</p>
        <h5><p><b>CLÁSSICA</b></p></h5>
        <p>Como a rolagem padrão, mas rolando apenas 3d6 (em vez de 4d6 menos o menor). Este método gera personagens fracos — a maior parte dos atributos ficará entre –1 e 2, com valores 3 e 4 sendo raros — e desequilibrados entre si. É indicado para histórias mais realistas, com clima brutal, nas quais os heróis surgem do povo comum. Se quiser ser muito “raiz”, role os valores em ordem (ou seja, a primeira rolagem será sua Força, a segunda sua Destreza e assim por diante) e dê um jeito de jogar com o que sair!</p>
        <h5><p><b>ÉPICA</b></p></h5>
        <p>Como a rolagem padrão, mas rolando 3d6+6 menos o menor. O oposto do anterior, este método gera personagens mais poderosos, quase certamente sem nenhum ponto fraco e com menos desequilíbrio entre si. É útil para emular histórias nas quais os heróis são “escolhidos” de algum tipo.</p>
        <h5><p><b>VALKARIA</b></p></h5>
        <p>Cada atributo começa em 8 (calma! esse valor será convertido no final). Role 7d6 e aplique cada dado como quiser nos seis atributos. Converta o resultado final para gerar seus atributos, da mesma forma que outros métodos de rolagem, usando a tabela de Tormenta20, p. 17. Você só pode aplicar os dados inteiros (não pode “quebrá-los” em diferentes atributos) e, conforme a tabela, o valor máximo convertido de um atributo é 4, mesmo que o valor inicial seja maior que 18.</p>
        <p>Exemplo: você rola 7d6 e obtém os resultados 2, 2, 3, 3, 4, 5 e 5. Você decide montar um bárbaro fortão, então aplica os dois 5 em sua Força, para somar 18. Aplica o 4 e o 2 em sua Destreza, para somar 14. Aplica dois 3 em sua Constituição, para somar 14. Por fim, aplica o segundo 2 em sua Sabedoria, para somar 10. Como seus dados acabaram, seus valores de Inteligência e Carisma ficam sendo apenas os 8 iniciais. Assim, seu personagem fica com Força 18 (valor convertido 4), Destreza 14 (2), Constituição 14 (2), Inteligência 8 (–1), Sabedoria 10 (0) e Carisma 8 (–1). Este método pode parecer maluco, mas dá boas chance de o jogador construir um personagem heroico e do jeito que ele quiser.</p>
        <h5><p><b>KHALMYR</b></p></h5>
        <p>Distribua os seguintes valores em seus atributos, sem rolar nada: 3, 3, 2, 1, 0 e –1. Isso gera personagens interessantes (com pontos fortes e fracos), mas completamente equilibrados entre si, já que todos do grupo terão os mesmos valores.</p>
        <h5><p><b>NIMB</b></p></h5>
        <p>Se o método Valkaria parecia maluco, este de fato é. Role 7d20 e descarte o menor. Então aplique cada um dos seis valores restantes em um atributo e converta-os usando a tabela, com as seguintes adições: resultados 1, 2 ou 3 geram um atributo –3 (sim, você será muito ruim em alguma coisa); resultados 18 ou 19 geram um atributo 4, e um resultado 20 gera um espantoso atributo 5 — um valor impossível de ser gerado em qualquer outro método. Este método pode gerar personagens muito poderosos (ou muito fracos!) e praticamente garante que o grupo será desequilibrado entre si. Use por sua conta e risco.</p>
        <h5><p><b>PONTOS VARIADOS</b></p></h5>
        <p>Por fim, você pode usar o método de pontos do livro básico, mas aumentando ou diminuindo a pontuação, para gerar personagens mais ou menos poderosos. Para campanhas “pé no chão”, use 5 pontos. Já para campanhas épicas e exageradas, 15 pontos.</p>        `,
        referencia: `Heróis de Arton - páginas 280 e 281`,
      },
      {
        id: 236,
        nome: `RAÇAS ABERTAS`,
        descricao: `
        <p>Pela regra padrão, cada raça possui modificadores de atributos que representam as tendências desse povo. Por exemplo, os meios-gigantes galokk tendem a ser mais fortes que os pequeninos hynne, por isso a primeira raça tem um bônus de Força e a segunda, uma penalidade. Mas heróis artonianos são tudo, menos “padrão”! Com esta variante, você pode usar cada modificador de atributo de sua raça em qualquer atributo. Por exemplo, um anão (normalmente Con +2, Sab +1, Des –1) terá os modificadores +2, +1 e –1 para aplicar nos atributos que quiser, enquanto um aggelus (normalmente Sab +2 e Car +1) terá os modificadores +2 e +1. Você não pode aplicar mais de um modificador no mesmo atributo.</p>`,
        referencia: `Heróis de Arton - página 281`,
      },
      {
        id: 237,
        nome: `DEVOÇÕES ABERTAS`,
        descricao: `
        <p>Esta variante é simples: um personagem pode ser devoto de qualquer divindade, independente de sua raça ou classe. O Panteão está sempre imerso em conflitos, e faz sentido que um deus aceite qualquer devoto para ganhar poder sobre seus irmãos.</p>`,
        referencia: `Heróis de Arton - página 281`,
      },
      {
        id: 238,
        nome: `COMPLICAÇÕES`,
        descricao: `
        <p>Complicações são restrições e penalidades com as quais seu personagem precisa lidar. Quando você cria seu personagem, pode escolher uma complicação para ele (e apenas uma). Se fizer isso, recebe um poder geral extra. Você é livre para escolher o poder, mas deve preencher seus pré-requisitos.</p>
        <p>Note que você sempre pode criar adversidades pessoais para seu personagem. Nada o impede de jogar com um bárbaro impulsivo ou um nobre pedante, por exemplo. No entanto, complicações oferecem efeitos em regras para representar isso. Traduzir tudo isso em regras tem duas vantagens: primeiro, garante que essa característica “apareça” nas aventuras e tenha peso na história. Segundo, permite que você tenha um poder a mais sem desequilibrar o jogo, o que por sua vez o ajuda a personalizar ainda mais seu personagem.</p>
        <p>Em termos de regras, complicações contam como habilidades. Se uma complicação impõe uma condição, você a sofre mesmo que seja imune a ela.</p>
        <h5><p><b>TIPOS DE COMPLICAÇÕES</b></p></h5>
        <p>Assim como poderes, complicações são divididas entre gerais e específicas de cada classe. Sua complicação pode ser escolhida entre a lista geral ou entre a lista de sua classe do 1º nível. Se você tiver uma complicação de classe, só recebe e pode usar o poder proveniente dela se pelo menos metade de seus níveis totais forem nessa classe. Por exemplo, se um arcanista 2/guerreiro 2 que tenha uma complicação de arcanista subir de nível de guerreiro, não poderá usar seu poder geral proveniente da complicação.</p>
        <h5><p><b>COMPLICAÇÕES COMPORTAMENTAIS</b></p></h5>
        <p>Certas complicações restringem as ações de um herói, seja por traduzirem uma limitação de sua personalidade, seja por representarem um código ou voto que ele decidiu seguir. Essas complicações são marcadas pelo símbolo †. De forma similar aos Códigos de Honra de certas classes (como cavaleiro e paladino), esse símbolo significa que, se você violar a complicação, perde todos os seus PM e só pode recuperá-los a partir do próximo dia.</p>
        `,
        referencia: `Heróis de Arton - página 282`,
      },
      {
        id: 239,
        nome: `REGRA OPCIONAL: SUPERAÇÃO DE COMPLICAÇÃO`,
        descricao: `
        <p>Arton é um mundo de heróis — e heróis amadurecem e aprendem ao longo de suas jornadas. Ao longo da campanha, você pode tentar superar sua complicação… Mas saiba que isso não será fácil!</p>
        <p>Com esta regra opcional, você pode superar sua complicação, na prática removendo-a de sua ficha — mas sem perder o poder que ela forneceu! Para fazer isso, deve estar no patamar campeão (a partir do 11º nível) e fazer uma ação específica durante o jogo. A ação varia de acordo com a complicação. Um aventureiro Cabeça Quente, por exemplo, talvez precise passar alguns meses num mosteiro de Lin-Wu, meditando para aprender a se controlar, enquanto um Fracote talvez precise servir nas legiões do Império de Tauron para ganhar um pouco de massa. Em termos gerais, essa ação deve ser equivalente à admissão em uma distinção. Além da ação em jogo, o herói deve gastar T$ 100 por nível e ser bemsucedido em um treinamento (veja “Tempo entre Aventuras” em Tormenta20, p. 277). Se conseguir isso tudo, o personagem não recebe um benefício de treinamento, mas supera a complicação.</p>
        <p>Superar uma complicação não é uma tarefa simples, e nem deve ser. O ideal é que seja o clímax de uma jornada pessoal; um marco para o personagem, talvez para o grupo todo! O mestre também pode usar a superação de uma complicação como o objetivo ou a recompensa de uma aventura.</p>
        <p>O que exatamente a superação representa varia. Se for uma complicação física, talvez ela seja curada, ou talvez você aprenda a conviver com ela. Se for mental, talvez você mude de comportamento após um processo de aprendizado ou mesmo um momento catártico.</p>
        `,
        referencia: `Heróis de Arton - página 287 `,
      },
      {
        id: 240,
        nome: `IDADES VARIADAS`,
        descricao: `
        <p>Personagens iniciantes em Tormenta20 normalmente são jovens, na casa dos 20 anos. Contudo, isso é apenas costume, não lei! Se você quiser, seu personagem pode ter uma idade diferente — a ficção está repleta de protagonistas mais novos ou mais velhos.</p>
        <p>Você pode considerar a idade de seu personagem um fator puramente descritivo, sem efeito em jogo. Se não quiser complicar as coisas, esse é o melhor caminho. Contudo, na vida real a idade é um fator determinante para diversas características pessoais — uma criança dificilmente terá a mesma força física de um adulto, por exemplo. Se você quiser que sua faixa etária tenha consequências em jogo (ou se simplesmente quiser mais um elemento mecânico com o qual construir sua ficha), pode usar as regras opcionais desta seção. Estas regras substituem os modificadores de atributos para personagens mais velhos descritos no livro básico (Tormenta20, p. 108).</p>
        <h5><p><b>PERSONAGENS DE IDADE VARIADAS</b></p></h5>
        <p>Para criar um personagem de idade variada, escolha uma faixa etária para ele e aplique os efeitos dela. Existem sete faixas etárias: criança, adolescente, jovem, adulto, maduro, velho e ancião. A faixa etária padrão é jovem, a única que não altera sua ficha — todas as outras trazem benefícios e penalidades.</p>
        <p>Os efeitos de faixas etárias não são necessariamente equilibrados. No geral, crianças são menos poderosas que adultos, e os efeitos refletem isso. Se você quer um jogo balanceado, sugerimos que não use estas regras — elas são opcionais justamente por trazerem certo desequilíbrio!</p>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 4-2: Faixas Etárias</th>
            </tr>
            <tr>
              <th>Faixa Etária</th>
              <th>Idade</th>
              <th>Modificadores</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Criança</td>
              <td>9–12</td>
              <td>For –2, Con –1, Sab –1, Tamanho Menor, Protegido dos Deuses, Sem Origem</td>
            </tr>
            <tr>
              <td>Adolescente</td>
              <td>13–17</td>
              <td>Sab –1, Ímpeto Juvenil, Origem em Construção</td>
            </tr>
            <tr>
              <td>Jovem</td>
              <td>18–24</td>
              <td>Nenhum</td>
            </tr>
            <tr>
              <td>Adulto</td>
              <td>25–39</td>
              <td>Um poder geral extra, uma complicação de idade (opcional)</td>
            </tr>
            <tr>
              <td>Maduro</td>
              <td>40–59</td>
              <td>Um nível extra, duas complicações de idade</td>
            </tr>
            <tr>
              <td>Velho</td>
              <td>60–79</td>
              <td>For –1, Des –1, Con –1, dois níveis extras, três complicações de idade, Aumento de Atributo bloqueado para atributos físicos</td>
            </tr>
            <tr>
              <td>Ancião</td>
              <td>80+</td>
              <td>For –2, Des –2, Con –2, três níveis extras, quatro complicações de idade, Aumento de Atributo bloqueado para atributos físicos</td>
            </tr>
          </tbody>
        </table>

        `,
        referencia: `Heróis de Arton - página 288 `,
      },
      {
        id: 241,
        nome: `IDADE VARIADA: CRIANÇA`,
        descricao: `
        <p>A menor faixa etária possível para personagens jogadores. Obviamente existem pessoas mais novas no mundo, mas não recomendamos jogar com personagens com menos de 9 anos.</p>
        <p>Crianças nasceram durante a Guerra Artoniana, ou logo antes, mas eram muito pequenas para terem participado do conflito — provavelmente nem lembram dele. Embora não tenham se envolvido diretamente, podem ter sofrido suas consequências. Por exemplo, podem ser órfãos da guerra ou filhos de refugiados. Ou, se tiverem sorte, filhos de soldados que enriqueceram com espólios, ou mesmo de nobres que ganharam terras com as mudanças políticas.</p>
        <p><b>Força –2, Constituição –1, Sabedoria –1.</b> Crianças são fisicamente mais fracas e frágeis que adultos, além de menos capazes de entender as sutilezas do mundo.</p>
        <p><b>Tamanho Menor.</b> Você é uma categoria de tamanho menor que o padrão de sua raça (exceto se sua raça já for Minúscula; nesse caso, a mudança é apenas estética).</p>
        <p><b>Sem Origem.</b> Você não recebe benefícios de origem. Você está apenas começando a viver os anos que definirão quem você será!</p>
        <p><b>Protegido dos Deuses.</b> Você recebe +2 na Defesa e +5 em todos os testes de resistência. Isso é uma mistura de sorte sobrenatural com o fato de que inimigos normalmente ignoram crianças, justamente por serem menos perigosas.</p>
        `,
        referencia: `Heróis de Arton - página 288 `,
      },
      {
        id: 242,
        nome: `IDADE VARIADA: ADOLECENTE`,
        descricao: `
        <p>Muitos aventureiros começam suas carreiras nesta idade. Adolescentes viram a Guerra Artoniana, mas dificilmente terão participado dela. Esta é a categoria de idade mais velha para um personagem que nasceu em Tamu-ra após a libertação da ilha.</p>
        <p><b>Sabedoria –1.</b> Adolescentes são conhecidos por sua impetuosidade.</p>
        <p><b>Ímpeto Juvenil.</b> Você recebe +3 pontos de mana. Adolescentes acham que podem fazer qualquer coisa, e essa confiança os torna mais heroicos.</p>
        <p><b>Origem em Construção.</b> Você recebe apenas um benefício de origem, em vez de dois (se sua origem possuir um único benefício, comece com uma perícia treinada a menos por sua classe).</p>
        `,
        referencia: `Heróis de Arton - página 289 `,
      },
      {
        id: 243,
        nome: `IDADE VARIADA: JOVEM`,
        descricao: `
        <p>A idade padrão. Heróis jovens usam as regras básicas de construção de personagem, sem modificadores.</p>
        <p>Jovens podem ter participado da Guerra Artoniana, mas provavelmente em postos iniciais. Eles podem se lembrar de fatos históricos como as Guerras Táuricas, a Marcha de Arsenal, a batalha dos deuses em Tamura, a Libertação de Valkaria e a coroação de Shivara como Rainha-Imperatriz, mas serão muito novos para terem efetivamente participado desses eventos.</p>
        `,
        referencia: `Heróis de Arton - página 289 `,
      },
      {
        id: 244,
        nome: `IDADE VARIADA: ADULTO`,
        descricao: `
        <p>Uma idade comum para aventureiros — pelo menos para aqueles que não morreram em sua primeira caverna infestada de glops! Um personagem adulto pode ter participado dos últimos grandes acontecimentos do mundo, como a Guerra Artoniana, a queda da Flecha de Fogo ou a rebelião de escravos no Império de Tauron. Mesmo que não tenha se envolvido diretamente, pode ter sofrido as consequências deles.</p>
        <p>Um personagem desta faixa etária também terá visto acontecimentos mais antigos, como a queda do Paladino de Arton, a primeira batalha contra a Tormenta em Trebuck e a Libertação de Valkaria, mas dificilmente terá participado deles.</p>
        <p><b>Já Vi Coisas.</b> Você pode receber um poder geral. Nesse caso, também recebe uma complicação de idade (veja a seguir).</p>
        `,
        referencia: `Heróis de Arton - página 289 `,
      },
      {
        id: 245,
        nome: `IDADE VARIADA: MADURO`,
        descricao: `
        <p>Muitas figuras de autoridade, como burgomestres e capitães da guarda, são desta faixa etária. Elas talvez não tenham o vigor de pessoas mais novas, mas compensam isso com experiência.</p>
        <p>Um personagem maduro já terá visto muitas coisas. Além de tudo descrito em “Adulto”, acima, ele poderá se lembrar de eventos como a chegada de Mestre Arsenal ao mundo de Arton, a guerra civil de Bielefeld e o surgimento da Tormenta no Império de Jade. Será muito novo para ter participado desses eventos, mas poderá ter lutado contra Arsenal ou nas Guerras Táuricas, e novamente na Guerra Artoniana, sendo um veterano de diversos grandes conflitos.</p>
        <p><b>Veterano Calejado.</b> Você começa o jogo com um nível adicional em relação aos personagens mais novos do grupo. Por exemplo, se o grupo vai começar no 1º nível, você começa no 2º. Contudo, essa experiência tem seu preço — você recebe duas complicações de idade.</p>
        `,
        referencia: `Heróis de Arton - página 289 `,
      },
      {
        id: 246,
        nome: `IDADE VARIADA: VELHO`,
        descricao: `
        <p>Num mundo de problemas como Arton, nem todos chegam a esta idade respeitável. Aqueles que a alcançam muitas vezes assumem posições de respeito, como mestres de guildas, alto sacerdotes ou conselheiros reais. Claro, nem todos atingem tamanha eminência. Alguns, ao chegar a esta idade, serão fazendeiros, artesãos ou estarão descansando em suas casas.</p>
        <p>Um artoniano velho terá muitas histórias para contar! Ele poderá se lembrar de eventos considerados lendários na era atual, como o eclipse solar no qual Thwor nasceu e a coroação do Rei-Imperador Thormy. Um personagem desta idade poderia até mesmo ter lutado no Dia dos Gigantes, em Valkaria, uma batalha hoje envolta em lendas e mistérios!</p>
        <p><b>Ai Minhas Costas.</b> Você começa o jogo com dois níveis adicionais. Contudo, perde 1 ponto em todos os atributos físicos (Força, Destreza e Constituição) e recebe três complicações de idade. Além disso, não pode escolher o poder Aumento de Atributo para nenhum atributo físico — infelizmente, os tempos de vigor ficaram para trás. A partir deste ponto, mesmo o mais saudável dos aventureiros começa a sentir que a idade é um caminho sem volta…</p>
        `,
        referencia: `Heróis de Arton - página 290 `,
      },
      {
        id: 247,
        nome: `IDADE VARIADA: ANCIÃO`,
        descricao: `
        <p>A última faixa etária. Em Arton, poucas pessoas chegam até aqui — mesmo aqueles que não encontram um fim violento normalmente acabam morrendo de simples velhice antes de se tornarem anciões. Contudo, entre aqueles ricos o bastante para adquirir poções e magias milagrosas (ou tratamento médico de Salistick), atingir este patamar é mais comum.</p>
        <p>Um ancião é tão velho quanto o antigo ReiImperador Thormy. Ele terá visto diversas mudanças no mundo, como os primeiros contatos formais entre o Reinado e Tamu-ra e a chegada de Lorde Niebling a Arton. As histórias que um ancião escutava quando criança já foram praticamente esquecidas hoje, e falavam sobre o primeiro encontro de Talude e Vectorius, a fundação da Ordem da Luz e a luta contra um antigo deus chamado Sartan.</p>
        <p><b>O Inverno da Vida.</b> Você começa o jogo com três níveis adicionais. Porém, perde 2 pontos em todos os atributos físicos (Força, Destreza e Constituição) e recebe quatro complicações de idade. Assim como velhos, você não pode escolher o poder Aumento de Atributo para atributos físicos.</p>
        `,
        referencia: `Heróis de Arton - página 290 `,
      },
      {
        id: 248,
        nome: `IDADE VARIADA: O PESO DA IDADE (COMPLICAÇÕES)`,
        descricao: `
        <p>Personagens adultos ou mais velhos precisam escolher uma complicação de idade por faixa etária — ou seja, uma para adultos, duas para maduros, três para velhos e quatro para anciões. Como a velhice não atinge todas as pessoas da mesma forma, esta mecânica representa melhor os efeitos do envelhecimento do que os modificadores de atributos da regra padrão. Complicações de idade funcionam como complicações normais (veja p. 282). Seus efeitos se acumulam!</p>
        `,
        referencia: `Heróis de Arton - página 290 `,
      },
      {
        id: 249,
        nome: `IDADE VARIADA: ENVELHECENDO`,
        descricao: `
        <p>Quando atinge uma faixa etária maior, você ajusta seus efeitos de idade de acordo. Assim, se for criança e se tornar adolescente, aumenta uma categoria de tamanho e recebe +2 em Força, +1 em Constituição, um benefício de origem e a habilidade Ímpeto Juvenil, mas perde a habilidade Protegido dos Deuses. Se mais tarde se tornar jovem, ganha +1 em Sabedoria e um benefício de origem (completando os dois habituais), mas perde a habilidade Ímpeto Juvenil.</p>
        <p><b>Histórias de Maioridade.</b> Uma das coisas mais divertidas em uma campanha é acompanhar as mudanças do personagem — não apenas em regras, mas também em personalidade. E não há mudança maior do que a passagem da infância para a vida adulta. Assim, uma opção divertida envolvendo estas regras é começar uma campanha com personagens crianças então, depois de algumas aventuras, fazer um salto temporal, retomando a história com os mesmos heróis, agora crescidos. A personalidade deles pode ser influenciada pelos eventos que aconteceram na sua infância — como no histórico de muitos aventureiros. A diferença aqui é que esses eventos foram jogados!</p>
        <p><b>Fonte da Juventude.</b> Por padrão, personagens não morrem por causas naturais, mas se o mestre quiser ser mais realista (ou malvado) pode pedir que personagens velhos e anciões rolem 1d20 no início de cada aventura. Num resultado 1 para velhos, e de 1 a 3 para anciões, o tempo do personagem estará chegando ao fim. Durante essa aventura, ele sofre os efeitos de mais uma complicação de idade aleatória — e, após essa última chance de glória, partirá do mundo mortal. A perspectiva da mortalidade pode incentivar os personagens a buscarem a imortalidade. Normalmente, não nos preocupamos em morrer por velhice, mas se isso for uma possibilidade, uma aventura em busca de algum tipo de “fonte da juventude” se torna interessante — especialmente se o rejuvenescimento eliminar as penalidades da idade, mas não seus benefícios.</p>
        `,
        referencia: `Heróis de Arton - página 290 `,
      },
      {
        id: 250,
        nome: `IDADE DAS RAÇAS`,
        descricao: `
        <p>Os intervalos de idade das faixas etárias usam as idades humanas como referência. Contudo, certas raças envelhecem em ritmos diferentes.</p>
        <p>Anões, meios-elfos e qareen envelhecem mais lentamente que humanos. Multiplique os intervalos de idade deles a partir de adulto por 2. Já dahllan, duendes, eiradaan, elfos, golens, osteon, sátiros e sílfides envelhecem muito mais lentamente — multiplique os intervalos de idade deles a partir de adulto por 5. Assim, um anão se torna adulto aos 50 anos (25 x 2), enquanto um elfo se torna adulto apenas aos 125 anos (25 x 5)! Note que, embora essas raças sejam mais longevas, amadurecem no mesmo ritmo de humanos. Assim, tanto humanos quanto elfos serão crianças dos 9 aos 12 anos, adolescentes dos 13 aos 17 e jovens a partir dos 18. Apenas a partir daqui as diferenças surgem.</p>
        <p>Já goblins e trogs são menos longevos que humanos. Multiplique todos os intervalos de idade deles por 0,7 (arredonde para o valor mais próximo). Assim, um goblin é criança a partir dos 6 anos, adolescente a partir dos 9, jovem a partir dos 13, adulto a partir dos 18, maduro a partir dos 28, velho a partir dos 42 e ancião a partir dos 56 anos.</p>
        `,
        referencia: `Heróis de Arton - página 289 `,
      },
      {
        id: 251,
        nome: `OBJETIVOS `,
        descricao: `
        <p>Com esta regra opcional, você pode escolher um objetivo heroico para seu personagem: ascender ao trono de um reino, vingar a morte de seu mestre, tornar-se o líder de uma guilda de ladrões ou outra coisa igualmente grandiosa. Um objetivo heroico deve ser algo que marca uma virada na vida do personagem e que o modificará para sempre.</p>
        <p>Todo objetivo heroico deve ser grandioso e específico. Ser admitido na Ordem da Luz não é um objetivo heroico. Tornar-se o Alto Comandante, sim. Da mesma forma, não basta dizer que você deseja “ascender à nobreza” ou “punir um grande vilão”. Você deseja ser o rei de Bielefeld ou prender Dee. Cumprindo um objetivo heroico, você será o líder ou maior expoente de algo, terá revolucionado algum aspecto de Arton. O mestre tem a palavra final sobre o que pode ser um objetivo heroico.</p>
        <p>Você pode escolher seu objetivo durante a construção do personagem ou com a campanha já em andamento. Um objetivo heroico nunca pode começar já estando perto de ser cumprido. Por exemplo, você não pode esperar até estar em Lamnor para decidir que seu objetivo é ser o novo Ayrrak.</p>
        <p>Em termos de jogo, um personagem com um objetivo heroico recebe certos benefícios quando se aproxima de seu objetivo e sofre penalidades quando se afasta dele.</p>
        <h5><p><b>BENEFÍCIOS DE OBJETIVO</b></p></h5>
        <p>No início de qualquer cena diretamente relacionada a seu objetivo, você recebe um benefício de acordo com seu objetivo. Esse benefício conta como uma habilidade e dura até o fim da cena.</p>
        <p>Você só pode receber um benefício de objetivo por aventura. Você pode escolher não receber o benefício em uma cena se achar que a aventura terá outra cena relacionada ao objetivo, que seja mais importante.</p>
        <p>O que exatamente significa uma cena diretamente relacionada a seu objetivo fica a critério do mestre. Como regra geral, se ao término da cena você estiver mais perto de seu objetivo, a cena ativa o benefício.</p>
        <h5><p><b>PENALIDADES DE OBJETIVO</b></p></h5>
        <p>Se ao fim de uma cena você estiver mais longe de seu objetivo, sofre uma penalidade ditada por seu objetivo. Você sofre essa penalidade mesmo que seja imune a seu efeito.</p>
        <p>Embora a maior parte das cenas não vá aproximá-lo de seu objetivo, provavelmente também não vai afastá-lo. Assim, cenas não relacionadas ao objetivo não impõem penalidades. Por exemplo, caso seu objetivo seja casar com Vladislav Tpish, uma cena longe da Academia Arcana não o afasta de seu objetivo. Contudo, uma cena em que você briga com ele o afasta.</p>
        <h5><p><b>CONCLUINDO UM OBJETIVO</b></p></h5>
        <p>Se você completar seu objetivo, recebe um benefício maior e permanente. A partir desse ponto, não recebe mais benefícios ou penalidades em cenas relacionadas ao objetivo. Você não pode escolher um novo objetivo — afinal, um objetivo heroico é algo que define toda uma vida.</p>
        `,
        referencia: `Heróis de Arton - página 292 `,
      },
      {
        id: 252,
        nome: `TIPOS DE OBJETIVOS`,
        descricao: `
        <p>A seguir estão algumas categorias amplas nas quais seu objetivo pode se enquadrar. Se você quiser um objetivo que não se enquadre em nenhuma delas, você e o mestre podem criar uma nova categoria, usando estas como base.</p>
        <p><b>Benefício.</b> Você recebe este benefício em cenas diretamente ligadas ao seu objetivo (mas apenas uma vez por aventura).</p>
        <p><b>Penalidade.</b> Você sofre esta penalidade se, ao término de uma cena, estiver mais longe de seu objetivo. A penalidade dura até o fim da aventura.</p>
        <p><b>Conclusão.</b> Se alcançar seu objetivo, você recebe este benefício. Ele é permanente.</p>
        `,
        referencia: `Heróis de Arton - página 292 `,
      },
      {
        id: 253,
        nome: `TIPOS DE OBJETIVOS: DESAFIOS`,
        descricao: `
        <p>Você quer fazer algo muito difícil, apenas porque é difícil. Deseja escalar o Monte do Dragão Adormecido sem equipamento, sem magias e vendado; ou vencer Laan numa corrida a pé; ou derrotar Maquius em combate desarmado após ter bebido mais do que ele.</p>
        <p><b>Benefício.</b> Você recebe +2d4 PM temporários.</p>
        <p><b>Penalidade.</b> Você fica fatigado.</p>
        <p><b>Conclusão.</b> Você recebe +1 em dois atributos diferentes a sua escolha.</p>
        `,
        referencia: `Heróis de Arton - página 293`,
      },
      {
        id: 254,
        nome: `TIPOS DE OBJETIVOS: DESCOBERTA`,
        descricao: `
        <p>Você deseja aprender um conhecimento específico, formular uma teoria ou desvendar um mistério: quer visitar todos os reinos dos deuses, descobrir como criar uma nova raça de seres vivos ou solucionar o assassinato do Rei de Salistick.</p>
        <p><b>Benefício.</b> Você recebe um bônus de +2 em testes de Inteligência e de perícias baseadas nesse atributo.</p>
        <p><b>Penalidade.</b> Você fica frustrado.</p>
        <p><b>Conclusão.</b> Você recebe +1 em Inteligência eum poder geral a sua escolha.</p>
        `,
        referencia: `Heróis de Arton - página 293`,
      },
      {
        id: 255,
        nome: `TIPOS DE OBJETIVOS: LIDERANÇA`,
        descricao: `
        <p>Você quer ascender socialmente e conquistar uma posição de destaque: Alto Comandante da Ordem da Luz, irmão mais velho da Companhia dos Irmãos ou o próximo Ayrrak de Lamnor. Você é movido pela ambição, ou talvez seja o legítimo herdeiro de algum título.</p>
        <p><b>Benefício.</b> Você recebe +2 em testes de Carisma e de perícias baseadas nesse atributo.</p>
        <p><b>Penalidade.</b> Você fica alquebrado.</p>
        <p><b>Conclusão.</b> Você recebe +1 em Carisma e uma estrutura ou benefício equivalente, a critério do mestre.</p>
        `,
        referencia: `Heróis de Arton - página 293`,
      },
      {
        id: 256,
        nome: `TIPOS DE OBJETIVOS: OBRA`,
        descricao: `
        <p>Você deseja construir uma obra monumental, algo nunca visto em Arton. Por exemplo, uma estátua maior que a de Sckhar, uma ponte ligando os dois continentes ou uma embarcação capaz de cruzar o éter divino.</p>
        <p><b>Benefício.</b> Você recebe +2 em testes de resistência e 1d4 PM temporários.</p>
        <p><b>Penalidade.</b> Você fica abalado.</p>
        <p><b>Conclusão.</b>  Você recebe +1 em Constituição e os benefícios de sua obra (provavelmente uma base, domínio, negócio ou veículo, a critério do mestre).</p>
        `,
        referencia: `Heróis de Arton - página 293`,
      },
      {
        id: 257,
        nome: `TIPOS DE OBJETIVOS: RIQUEZA`,
        descricao: `
        <p>Você quer dinheiro, pura e simplesmente. Não é o mesmo que ascensão social, pois não envolve reconhecimento ou legitimidade. Para cumprir este objetivo, você deve acumular uma quantidade de tibares decidida pelo mestre (provavelmente um milhão!). Equipamento, patrimônio, domínios, propriedades e outros bens não contam para o cumprimento do objetivo, apenas dinheiro vivo!</p>
        <p><b>Benefício.</b>  O custo em PM de suas habilidades é reduzido em –1.</p>
        <p><b>Penalidade.</b> Você fica alquebrado.</p>
        <p><b>Conclusão.</b> Escolha uma habilidade com custo em PM. O custo em PM para usá-la é reduzido em –2 PM (cumulativo com outras reduções). Além disso, agora você pode gastar o dinheiro guardado!</p>
        `,
        referencia: `Heróis de Arton - página 293`,
      },
      {
        id: 258,
        nome: `TIPOS DE OBJETIVOS: SALVAÇÃO`,
        descricao: `
        <p>Você deseja ajudar, encontrar ou resgatar uma pessoa necessitada, perdida ou aprisionada. Como alternativa, pode querer ajudar toda uma população. Por exemplo, quer libertar seu irmão da Fortaleza Hardof, devolver a divindade a Tilliann ou reformar toda a Favela dos Goblins.</p>
        <p><b>Benefício.</b> Você recebe +2 na Defesa.</p>
        <p><b>Penalidade.</b> Você fica vulnerável.</p>
        <p><b>Conclusão.</b> Você recebe +2 na Defesa e em testes de resistência, além de um parceiro mestre de um tipo a sua escolha.</p>
        `,
        referencia: `Heróis de Arton - página 293`,
      },
      {
        id: 259,
        nome: `TIPOS DE OBJETIVOS: VINGANÇA`,
        descricao: `
        <p>Você quer matar, prender ou punir uma pessoa ou monstro que lhe fez um grande mal. Seja quem for, deve ser um vilão poderoso: Hermann Von Krauser, Ferren Asloth ou mesmo Gatzvalith!</p>
        <p><b>Benefício.</b> Uma vez por rodada, você recebe +5 em uma rolagem de dano.</p>
        <p><b>Penalidade.</b> Você fica fraco.</p>
        <p><b>Conclusão.</b> Você recebe +1 em Força e um poder de combate a sua escolha.</p>
        `,
        referencia: `Heróis de Arton - página 293`,
      },
      {
        id: 260,
        nome: `ABANDONANDO UM OBJETIVO`,
        descricao: `
        <p>Uma vez que um personagem escolha um objetivo, deve se esforçar para cumpri-lo. Alguns objetivos oferecem benefícios significativos apenas por tentar cumprilos... Mas jogadores espertos podem escolhê-los sem nunca realmente almejar sua conclusão, apenas desfrutando os benefícios de tentar!</p> 
        <p>Se o mestre julgar que o personagem não está se esforçando para cumprir o objetivo, pode definir que o objetivo foi abandonado. O jogador sofre a penalidade do objetivo por uma aventura, então o perde. Nenhum benefício ou penalidade se aplicam mais, mas ele não pode escolher um novo objetivo.</p>
        `,
        referencia: `Heróis de Arton - página 293`,
      },
      {
        id: 261,
        nome: `PERIGOS`,
        descricao: `
        <p>Aventureiros não precisam se preocupar apenas com monstros e inimigos — Arton é um mundo de problemas e a vida dos heróis é sempre arriscada! Esta seção traz regras para perigos — armadilhas, doenças e outras ameaças que não são criaturas.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 317`,
      },
      {
        id: 262,
        nome: `PERIGOS: AREIA MOVEDIÇA`,
        descricao: `
        <p>Presente em pântanos e desertos, pode engolir criaturas ou objetos para dentro de si. Em geral, areia movediça ocupa um quadrado com 6m de lado.</p>
        <p>Um personagem deve passar em um teste de Sobrevivência (CD 25) para notar areia movediça à frente. Se entrar na área da areia, fica agarrado. Se passar uma rodada inteira agarrado, submerge e precisa prender a respiração (veja Sufocamento).</p>
        <p>Uma criatura na areia movediça pode gastar uma ação completa e fazer um teste de Atletismo (CD 25) para escapar. Se estava submersa, fica agarrada. Se estava agarrada, fica livre na margem da areia. Porém, se falhar por 5 ou mais, fica fatigada (se já estava fatigada, fica exausta e, se já estava exausta, fica inconsciente, provavelmente morrendo...).</p>
        <p>Personagens fora da área de areia movediça podem ajudar no teste de Atletismo (alcançando um galho, vara ou corda para a vítima, por exemplo).</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 317`,
      },
      {
        id: 263,
        nome: `PERIGOS: ARMADILHAS`,
        descricao: `
        <p>Vilões adoram forrar seus covis de armadilhas para afastar aventureiros intrometidos. Mesmo antigos templos e masmorras abandonadas podem conter dispositivos diabólicos protegendo seus tesouros. A ficha de cada armadilha traz as informações a seguir.</p>
        <p><b>Nome.</b> Armadilhas com o nome em <i>itálico</i> são mágicas e podem ser anuladas com <i>Dissipar Magia.</i></p>
        <p><b>Efeito.</b> O que acontece com a criatura que disparou a armadilha. Normalmente, uma armadilha afeta apenas a criatura que a disparou; se afetar mais de uma criatura ou uma área, isso estará especificado.</p>
        <p><b>Resistência.</b> O tipo e CD do teste de resistência que a vítima da armadilha deve fazer para evitar ou reduzir seu efeito, caso haja.</p>
        <p><b>Investigação e Ladinagem.</b> A CD dos testes para encontrar e desarmar a armadilha.</p>
        <p><b>ND.</b> O perigo que a armadilha representa. Funciona como o nível de desafio de uma criatura.</p>`,
        referencia: `Tormenta 20 Jogo odo Ano - página 317`,
      },
      {
        id: 264,
        nome: `PERIGOS: DOENÇAS`,
        descricao: `
        <p>Uma doença pode ser transmitida por contato, inalação ou ingestão (veja “Venenos”, na página 161, para as regras de cada tipo). Um personagem exposto a uma doença deve fazer um teste de Fortitude (CD conforme a doença). Se falhar, é contaminado (mas ainda não sofre nenhum efeito). Contaminação não é cumulativa; uma vez que contraia a doença, o personagem não sofre efeitos adicionais por ser atingido novamente.</p>
        <p>Um personagem contaminado deve repetir o teste de Fortitude no início de cada dia. Se falhar, sofre o efeito da doença naquele dia. Se passar, não sofre o efeito. Se passar por dois dias seguidos, estará curado.</p>`,
        referencia: `Tormenta 20 Jogo odo Ano - página 318`,
      },
      {
        id: 265,
        nome: `PERIGOS: ESCURIDÃO`,
        descricao: `
        <p>Escuridão é dividida em leve e total.</p>
        <p>Escuridão Leve. Qualquer situação de penumbra, como uma noite enluarada ou os cantos da cidade ao longe dos postes com seus lampiões. Fornece camuflagem leve.</p>
        <p>Escuridão Total. O breu da noite sem estrelas ou luar, longe de qualquer fonte de luz, ou uma câmara totalmente fechada ou nos subterrâneos, longe da entrada. Fornece camuflagem total.</p>`,
        referencia: `Tormenta 20 Jogo odo Ano - página 318`,
      },
      {
        id: 266,
        nome: `PERIGOS: FOGO`,
        descricao: `
        <p>Um personagem exposto a fogo deve fazer um teste de Reflexos (CD 15). Se falhar, fica em chamas, sofrendo 1d6 pontos de dano de fogo no início de seus turnos. O personagem pode gastar uma ação padrão para apagar o fogo com as mãos. Imersão em água também apaga as chamas.</p>
        <p>Fogo provocado por efeitos instantâneos, como nas magias Explosão de Chamas e Bola de Fogo, não dura o suficiente para incendiar alguém.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 319`,
      },
      {
        id: 267,
        nome: `PERIGOS: FOME E SEDE`,
        descricao: `
        <p>Um personagem pode resistir um dia inteiro sem água ou comida sem maiores problemas. Depois disso, deve fazer um teste de Fortitude por dia (CD 15 +1 por teste anterior). Se falhar, fica fatigado. Se falhar novamente, fica exausto. Se falhar pela terceira vez, fica inconsciente. A quarta falha é letal. Condições causadas por fome e sede só podem ser curadas por comida e bebida. Metabolismo.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 319`,
      },
      {
        id: 268,
        nome: `PERIGOS: FUMAÇA`,
        descricao: `
        <p>Um personagem imerso em fumaça densa (por exemplo, dentro de uma casa em chamas) deve fazer um teste de Fortitude no início de cada um de seus turnos (CD 10 +1 por teste anterior). Se falhar, perde o turno engasgando-se e tossindo, sem conseguir realizar nenhuma outra ação. Falhar em dois testes seguidos causa a perda de 1d6 pontos de vida. Metabolismo.</p>
        <p>Fumaça também obscurece a visão, fornecendo camuflagem leve às criaturas em seu interior.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 319`,
      },
      {
        id: 269,
        nome: `PERIGOS: LAVA`,
        descricao: `
        <p>Lava, magma e outros materiais incandescentes (como metal derretido) causam 2d6 pontos de dano de fogo por rodada de exposição direta.</p>
        <p>Imersão total (por exemplo, cair na cratera de um vulcão) causa 20d6 pontos de dano de fogo por rodada e o dano persiste por uma rodada adicional. Por exemplo, se um personagem fica duas rodadas na lava e depois sai, sofre um total de 60d6 pontos de dano de fogo.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 319`,
      },
      {
        id: 270,
        nome: `PERIGOS: QUEDA`,
        descricao: `
        <p>Uma queda causa 1d6 pontos de dano de impacto para cada 1,5m, até um máximo de 40d6 para uma queda de 60m. Em caso de queda na água, reduza o dano em 6m (ou seja, –4d6).</p>
        <p>Um objeto pesado (pedra, baú, barril...) que caia sobre uma criatura também causa 1d6 pontos de dano para cada 1,5m da queda. Dobre o dano para um objeto muito pesado (rocha, altar, carroça...).</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 319`,
      },
      {
        id: 271,
        nome: `PERIGOS: SONO`,
        descricao: `
        <p>Um personagem pode ficar uma noite sem dormir sem problemas — embora não recupere PV e PM. Depois disso, deve fazer um teste de Fortitude por dia sem dormir (CD 15 +1 por teste anterior). Se falhar, fica fatigado. Se já estiver fatigado, fica exausto. Se já estiver exausto, cai inconsciente e não pode ser acordado até dormir pelo menos oito horas.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 319`,
      },
      {
        id: 272,
        nome: `PERIGOS: SUFOCAMENTO`,
        descricao: `
        <p>Um personagem pode prender a respiração por um número de rodadas igual a 1 + sua Constituição (por exemplo, 3 rodadas se tem Con 2).</p>
        <p>Depois disso, deve fazer um teste de Fortitude por rodada (CD 15 +1 por teste anterior). Se falhar, cai inconsciente e perde 1d6 PV por rodada até respirar novamente ou morrer. Metabolismo.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 319`,
      },
      {
        id: 273,
        nome: `PERIGOS: TORMENTA`,
        descricao: `
        <p>Como uma infecção que ataca Arton, a Tormenta corrompe tudo e todos: seres vivos, objetos, o terreno, até o próprio espaço e tempo.</p>
        <p>Ao entrar em uma área de Tormenta, uma criatura fica automaticamente frustrada, à medida que sua mente luta contra a insanidade. No início de cada dia na área, a criatura deve fazer um teste de Vontade (CD 25 + 2 por dia anterior consecutivo) ou ficará esmorecida pelo dia. Se já estava esmorecida, fica confusa pelo dia. Se já estava confusa, fica completamente insana — se era um personagem, se torna um NPC maligno sob controle do mestre. Além disso, enquanto estiver na área de Tormenta, habilidades com custo em pontos de mana têm seu custo aumentado em 2 PM e itens mágicos encantados perdem um de seus encantamentos (a escolha do portador). Por fim, a recuperação de PV e PM por descanso é reduzida à metade (após aplicar outros efeitos que afetem sua recuperação).</p>
        <p>Lefeu e lefou são imunes a todos esses efeitos.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 319`,
      },
      {
        id: 274,
        nome: `PERIGOS COMPLEXOS`,
        descricao: `
        <p>Uma avalanche nas Montanhas Uivantes, uma jornada pelos ermos e uma tempestade em alto mar são exemplos de perigos complexos. Enquanto perigos simples oferecem uma ameça dentro de uma cena, perigos complexos são uma cena por si só. Eles são uma boa opção para quando você quer uma cena de ação que não seja um combate.</p>
        <p>Em termos de jogo, perigos complexos são similares a combates, envolvendo diversas decisões e múltiplos testes. A mecânica deles é baseada em testes estendidos (veja a página 222), mas cada um pode trazer regras próprias. A ficha de cada perigo complexo traz as seguintes informações.</p>
        <p><b>Nome e ND.</b> O nome e o nível de desafio do perigo.</p>
        <p><b>Objetivo.</b> Em um combate, o objetivo normalmente é simples: derrotar os inimigos. Já em um perigo, o objetivo nem sempre é tão óbvio. Afinal, não é possível “derrotar” algo como uma tempestade. Esta linha resume o que os personagens devem fazer para “vencer” o perigo.</p>
        <p><b>Efeito.</b> O que o perigo causa aos personagens. Se o perigo fosse uma criatura, este bloco seria as ações que ele pode fazer.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 320`,
      },
      {
        id: 275,
        nome: `FICHA DE NPC'S`,
        descricao: `
        <p>Como dito no Capítulo 6, a maioria dos NPCs não precisa de fichas. Na verdade, os únicos que precisam são aqueles que podem enfrentar o grupo. Para esses, você pode criar uma ficha de ameaça, semelhante a das criaturas descritas neste capítulo.</p>
        <p>Fichas de ameaça seguem uma lógica diferente das fichas de personagens. Elas não se preocupam com a origem de cada bônus e modificador das estatísticas, apenas com os valores finais. Para criar uma ficha de ameaça, siga os passos abaixo.</p>
        <h5><p><b>CONCEITOS E ND</b></p></h5>
        <p>Para começar, defina o conceito do NPC, o papel dele no mundo. Ele é um assassino furtivo, um combatente de armadura pesada ou um aristocrata que secretamente adora Aharadak?</p>
        <p>Após pensar no conceito do NPC, escolha um nível de desafio adequado para ele (use como base os patamares de jogo descritos na página 35). O ND representa a experiência e poder geral do NPC e funciona como o nível de personagem dele.</p>
        <h5><p><b>ESTATÍSTICAS DE JOGO</b></p></h5>
        <p>Estatísticas de ameaças não são calculadas a partir de atributos, habilidades e equipamento. Em vez disso, são determinadas pelo ND e pela Tabela 7-2: Estatísticas de NPCs. Esse sistema torna a criação de NPCs mais fácil e rápida.</p>
        <p><b>Ataque e Dano.</b> O teste de ataque e o dano do NPC. Um multiplicador ao lado do ataque indica que o NPC faz aquela quantidade de ataques por rodada (cada um com o dano indicado). Defina como o NPC ataca. Isso não afeta os valores, mas ajuda a definir detalhes como tipo de dano, alcance etc.</p>
        <p><b>Defesa & PV.</b> Respectivamente, os valores de Defesa e pontos de vida do NPC.</p>
        <p><b>Perícias.</b> Esta coluna apresenta dois valores. Use o primeiro para as perícias nos quais o NPC é focado, de acordo com seu conceito. Por exemplo, um assassino usaria o primeiro valor para Enganação, Furtividade e Iniciativa. Use o segundo valor para todas as outras perícias do NPC.</p>
        <p><b>CD.</b> Indica a dificuldade para resistir às habilidades do NPC, como magias e outros efeitos.</p>
        <p><b>Habilidades.</b> Escolha as habilidades do NPC. Um assassino pode ter ataque furtivo, um combatente de armadura pesada pode ter redução de dano e um cultista pode lançar magias. Como regra geral, um NPC de patamar iniciante deve ter uma ou duas habilidades, com uma habilidade adicional para cada patamar acima. Para exemplos de habilidades, veja as classes de personagem e as ameaças.</p>
        <p>Evite usar pontos de mana. Eles são ótimos para medir os recursos de um personagem jogador, mas uma complicação desnecessária para o mestre, que já precisa controlar diversos elementos. Para habilidades simples, considere que o NPC pode usá-las à vontade. Para habilidades mais poderosas (como uma magia de alto círculo), considere que o NPC pode usá-la uma vez por cena ou então apenas após recarregá-la gastando uma ação. Se quiser usar pontos de mana, considere de 3 a 6 PM por ND.</p>
        <p><b>Outras Características.</b> Defina a raça, os atributos, o deslocamento e o equipamento do NPC. A raça pode ser uma disponível para personagens ou uma exclusiva de ameaças, como orc ou finntroll. Seja como for, a escolha será apenas “estética”, pois não afeta outras estatísticas — embora possa ser uma inspiração para as habilidades.</p>
        <p>Para atributos, veja o “pacote” correspondente ao patamar do NPC, a seguir, e distribua os valores dados entre os seis atributos. Assim como a raça, esses valores não influenciam as demais estatísticas, servindo apenas para testes de atributo. Iniciante: 3, 2, 1, 1, 0, –1. Veterano: 4, 3, 2, 1, 0, 0. Campeão: 5, 4, 3, 2, 1, 0. Lenda: 7, 5, 4, 2, 2, 1.</p>
        <p>O deslocamento padrão é 9m, mas pode ser maior ou menor — nosso assassino furtivo pode ter deslocamento 12m, enquanto o combatente de armadura pesada pode ter 6m.</p>
        <p>Por fim, decida se o NPC possui algum equipamento digno de nota. Novamente, isso é uma escolha visual, pois as estatísticas já foram definidas.</p>
        <p>Alterando Valores. Essas regras permitem que você crie NPCs rapidamente e sem se prender em detalhes que não teriam impacto no jogo. Naturalmente, fique à vontade para ajustar os valores da tabela para que se encaixem melhor no conceito do NPC. Um bárbaro robusto e de tanga pode ter mais pontos de vida, mas menos Defesa. Já um conjurador pode ter menos PV, mas a capacidade de lançar magias. Para esses ajustes, você pode subir algumas estatísticas em 1 ou mais níveis, e baixar outras. O tal bárbaro robusto pode ter pontos de vida como se seu ND fosse 2 pontos maior, mas ter sua Defesa diminuída na mesma proporção. Apenas tome cuidado para não alterar demais os números sem ajustar o nível de desafio, para evitar ter uma ficha muito forte, ou muito fraca, para o seu ND.</p>
        <h5><p><b>DESCRIÇÃO</b></p></h5>
        <p>Uma vez que você tenha as estatísticas de jogo do NPC, é hora de definir seus aspectos descritivos, como nome, aparência, personalidade e histórico. Para isso, consulte as dicas para personagens, na página 107, e os arquétipos de NPCs a partir da página 257.</p>
        <p>Fique à vontade para detalhar o quanto quiser, mas lembre-se de priorizar informa- ções que irão aparecer no jogo! Para a maioria dos NPCs, um nome, uma frase de descrição, e dois ou três traços de personalidade são suficientes.</p>
        <table>
          <thead>
            <tr>
              <th colspan="8">Tabela 7-2: Estatísticas de NPC</th>
            </tr>
            <tr>
              <th>Patamar</th>
              <th>ND</th>
              <th>Ataque</th>
              <th>Dano</th>
              <th>Defesa</th>
              <th>PV</th>
              <th>Perícias</th>
              <th>CD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="5">Iniciante</td>
              <td>1/2</td><td>+7</td><td>1d6+3</td><td>15</td><td>10</td><td>+4/+0</td><td>14</td>
            </tr>
            <tr>
              <td>1</td><td>+9</td><td>1d8+6</td><td>16</td><td>20</td><td>+6/+1</td><td>15</td>
            </tr>
            <tr>
              <td>2</td><td>+11</td><td>1d10+10</td><td>18</td><td>40</td><td>+8/+2</td><td>16</td>
            </tr>
            <tr>
              <td>3</td><td>+13</td><td>2d6+11</td><td>21</td><td>70</td><td>+10/+3</td><td>17</td>
            </tr>
            <tr>
              <td>4</td><td>+15</td><td>2d6+14</td><td>24</td><td>110</td><td>+12/+4</td><td>18</td>
            </tr>

            <tr>
              <td rowspan="6">Veterano</td>
              <td>5</td><td>+18, x2</td><td>1d12+11</td><td>28</td><td>150</td><td>+14/+5</td><td>20</td>
            </tr>
            <tr>
              <td>6</td><td>+20, x2</td><td>2d6+15</td><td>31</td><td>190</td><td>+16/+6</td><td>22</td>
            </tr>
            <tr>
              <td>7</td><td>+22, x2</td><td>2d8+19</td><td>34</td><td>230</td><td>+18/+7</td><td>24</td>
            </tr>
            <tr>
              <td>8</td><td>+24, x2</td><td>2d10+20</td><td>37</td><td>270</td><td>+20/+8</td><td>26</td>
            </tr>
            <tr>
              <td>9</td><td>+26, x2</td><td>2d12+21</td><td>40</td><td>310</td><td>+22/+9</td><td>28</td>
            </tr>
            <tr>
              <td>10</td><td>+29, x2</td><td>3d6+26</td><td>43</td><td>350</td><td>+24/+10</td><td>30</td>
            </tr>

            <tr>
              <td rowspan="6">Campeão</td>
              <td>11</td><td>+32, x3</td><td>3d10+26</td><td>46</td><td>400</td><td>+25/+11</td><td>32</td>
            </tr>
            <tr>
              <td>12</td><td>+35, x3</td><td>3d10+26</td><td>48</td><td>450</td><td>+26/+12</td><td>34</td>
            </tr>
            <tr>
              <td>13</td><td>+37, x3</td><td>3d10+36</td><td>50</td><td>500</td><td>+27/+13</td><td>36</td>
            </tr>
            <tr>
              <td>14</td><td>+40, x3</td><td>4d6+38</td><td>52</td><td>550</td><td>+28/+14</td><td>38</td>
            </tr>
            <tr>
              <td>15</td><td>+43, x3</td><td>4d8+40</td><td>54</td><td>600</td><td>+29/+15</td><td>40</td>
            </tr>
            <tr>
              <td>16</td><td>+45, x3</td><td>4d10+44</td><td>56</td><td>650</td><td>+30/+16</td><td>42</td>
            </tr>

            <tr>
              <td rowspan="4">Lenda</td>
              <td>17</td><td>+47, x4</td><td>4d12+45</td><td>59</td><td>700</td><td>+32/+17</td><td>44</td>
            </tr>
            <tr>
              <td>18</td><td>+50, x4</td><td>4d12+45</td><td>61</td><td>750</td><td>+33/+18</td><td>46</td>
            </tr>
            <tr>
              <td>19</td><td>+52, x4</td><td>4d12+45</td><td>63</td><td>850</td><td>+34/+19</td><td>48</td>
            </tr>
            <tr>
              <td>20</td><td>+55, x4</td><td>4d12+50</td><td>65</td><td>900</td><td>+35/+20</td><td>50</td>
            </tr>
          </tbody>
        </table>

        `,
        referencia: `Tormenta 20 Jogo odo Ano - páginas 322 e 323`,
      },
      {
        id: 276,
        nome: `AMBIENTE DE AVENTURA: MASMORRA`,
        descricao: `
        <p>Antigas redes de túneis levando ao reino secreto de Doherimm. Ruínas esquecidas de templos sszzaazitas. Covis de dragões, com suas promessas de tesouro. Lugares fechados, perigosos, repletos de armadilhas e monstros. Em Arton, esses lugares são conhecidos coletivamente como “masmorras”.</p>
        <p>Uma masmorra pode ser pequena e apertada, um simples esconderijo de bandidos, ou um vasto complexo planar como o Labirinto de Valkaria, vencido por heróis do passado para libertar a Deusa da Humanidade. São lugares de mistério e bizarria, de eventos absurdos e sem sentido. Uma tribo orc vive no aposento vizinho ao ninho de aranhas gigantes, sem que ocorra qualquer conflito — até a chegada de aventureiros. Uma passagem secreta se abre onde não deveria estar. Um caldeirão na antiga cozinha pode conter tanto uma poção mágica de cura quanto uma mão zumbi estranguladora.</p>
        <p>Todas as masmorras, no entanto, têm uma coisa em comum: são o alvo preferido de heróis que desejam adquirir experiência e conquistar tesouros.</p>
        <p>Em termos de jogo, masmorras são um ambiente comum de aventura. Por serem fechadas, limitam as opções dos jogadores e simplificam a vida do mestre. Em uma masmorra, o grupo pode decidir basicamente para qual sala ir. Se você mapear todas as salas, terá uma resposta para todas as decisões dos jogadores. Mestres iniciantes devem considerar fazer suas primeiras aventuras nesse tipo de ambiente.</p>
        <h5><p><b>CRIANDO AVENTURAS E MASMORRAS</b></p></h5>
        <p>Criar uma aventura em uma masmorra exige basicamente criar a masmorra em si.</p>
        <p><b>Conceito.</b> Defina o conceito da masmorra. A tabela ao lado traz algumas ideias, mas as possibilidades são ilimitadas — praticamente qualquer espaço fechado pode ser uma masmorra.</p>
        <p><b>Tamanho.</b> A quantidade de salas. Masmorras pequenas têm entre 3 e 6 salas e podem ser resolvidas como parte de uma sessão de jogo. Masmorras médias têm entre 7 e 20 salas e ocupam uma sessão inteira. Masmorras grandes têm entre 21 e 50 salas e são o escopo de toda uma aventura. Não recomendamos masmorras maiores do que isso — por mais interessante que o ambiente seja, ficar tanto tempo num mesmo lugar acaba sendo entediante.</p>
        <p><b>Objetivo Principal.</b> O objetivo da masmorra é aquilo que o grupo foi buscar nela. Um antídoto? O esconderijo do vilão? Um tesouro? O conceito funciona como um guia — se a masmorra é uma prisão, o objetivo pode ser resgatar um prisioneiro.</p>
        <p><b>Objetivos Secundários (Opcional; Apenas Masmorras Médias e Grandes).</b> Invente um objetivo secundário, algo que o grupo deve fazer antes do objetivo principal. Por exemplo, uma chave que precisa ser encontrada para abrir a última porta. Um objetivo secundário faz com que o grupo interaja mais com a masmorra. Em vez de avançar direto rumo ao fim, os personagens terão que explorar em busca do objetivo secundário. Masmorras médias podem ter um objetivo secundário, enquanto masmorras grandes podem ter até três.</p>
        <p><b>Objetivos Opcionais.</b> Invente objetivos que não são obrigatórios para atingir o principal. O melhor exemplo é uma sala pela qual os personagens não precisam passar, mas que possui um tesouro e um desafio. Os personagens encaram o desafio para conquistar o tesouro? A decisão é deles. Adicionar escolhas faz com que os jogadores se envolvam mais. Masmorras pequenas devem ter um objetivo opcional; masmorras médias, dois, e masmorras grandes, três.</p>
        <p><b>Ameaças.</b> Calcule uma ameaça para cada três salas, com um misto de cenas de ação (monstros, armadilhas) e exploração (labirintos, enigmas). Veja o Capítulo 7: Ameaças.</p>
        <p><b>Pontos de Interesse (Opcional).</b> Pense em elementos que tornarão a jornada dos heróis mais interessante. Um rio subterrâneo, uma coleção de tapeçarias com a história de um antigo reino, uma estátua falante... Isso inclui NPCs com os quais os personagens podem interagir (se o NPC for apenas um inimigo, será uma ameaça). Os pontos de interesse podem ter relação com os objetivos ou ameaças da masmorra ou ser apenas elementos descritivos.</p>
        <p><b>Mapa.</b> Desenhe o mapa da masmorra, com o número de salas que escolheu e corredores para conectá-las. Distribua os objetivos (principal, secundários e opcionais) nas salas e as ameaças antes ou junto dos objetivos. Faça mais de um caminho, para que os jogadores tenham escolhas. Se você não souber ou não quiser desenhar, pode procurar mapas prontos ou geradores de mapas na internet. Na verdade, outra maneira de criar uma masmorra é começar pelo mapa e ir preenchendo-o com os elementos desta lista (objetivos, ameaças e pontos de interesse).</p>
        <p><b>Descrição e Regras.</b> Por fim, escreva uma descrição rápida para cada sala da masmorra e as regras de cada objetivo e ameaça, como fichas de criaturas.</p>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 6-2: Ideias de Masmorras</th>
            </tr>
            <tr>
              <th>1d20</th>
              <th>Masmorra</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Complexo de cavernas subterrâneas</td></tr>
            <tr><td>2</td><td>Mina abandonada</td></tr>
            <tr><td>3</td><td>Templo de um deus maligno</td></tr>
            <tr><td>4</td><td>Esgotos da cidade</td></tr>
            <tr><td>5</td><td>Castelo de um déspota</td></tr>
            <tr><td>6</td><td>Torre de um mago louco</td></tr>
            <tr><td>7</td><td>Moinho da vila</td></tr>
            <tr><td>8</td><td>Armazém no porto</td></tr>
            <tr><td>9</td><td>Ruínas de uma civilização perdida</td></tr>
            <tr><td>10</td><td>Fortaleza anã abandonada</td></tr>
            <tr><td>11</td><td>Mansão assombrada</td></tr>
            <tr><td>12</td><td>Prisão da cidade</td></tr>
            <tr><td>13</td><td>Caverna submersa</td></tr>
            <tr><td>14</td><td>Gruta usada como covil por um monstro</td></tr>
            <tr><td>15</td><td>Biblioteca mágica</td></tr>
            <tr><td>16</td><td>Galeão encalhado</td></tr>
            <tr><td>17</td><td>Labirinto feito para proteger um tesouro</td></tr>
            <tr><td>18</td><td>Manicômio repleto de vilões insanos</td></tr>
            <tr><td>19</td><td>Vulcão inativo</td></tr>
            <tr><td>20</td><td>Castelo nas nuvens</td></tr>
          </tbody>
        </table>
        <h5><p><b>ELEMENTOS DE MASMORRA</b></p></h5>
        <p><b>Pisos.</b> Pisos planos (tablados de madeira, ladrilhos em bom estado...) não têm efeito em regras. Pisos irregulares (cavernas naturais, construções em ruínas...) exigem testes de Acrobacia (CD 10) para correr ou fazer uma investida. Piso escorregadio, seja por água, gelo ou mesmo sangue, também exige o uso de Acrobacia para se equilibrar. Um piso que seja irregular e escorregadio aumenta a CD do teste para 15. Por fim, pisos cobertos de escombros, entulhos ou outros obstáculos impactantes contam como terreno difícil.</p>
        <p><b>Paredes.</b> Paredes normalmente são de alvenaria ou pedra bruta (escavada ou natural), mas também podem ser de madeira. Paredes de alvenaria têm redução de dano 8 e 200 PV por trecho de 1,5m de lado. A CD de Atletismo para escalá-las é 20. Paredes de pedra bruta têm RD 8, 500 PV e CD 15 para escalar. Por fim, paredes de madeira possuem RD 5, 100 PV e CD 20 para escalar.</p>
        <p><b>Portas.</b> Podem ser de madeira (usada em casas comuns), madeira reforçada (encontrada em mansões, armazéns e outras construções protegidas), pedra (usada em templos e torres) e ferro (usada em salas de tesouro). Além de portas, muitos ambientes são fechados por grades de ferro, especialmente castelos, calabouços e esgotos. A tabela a seguir traz a redução de dano e os pontos de vida de cada tipo de porta. Também é possível abrir uma porta com um encontrão ou chute — em termos de jogo, uma ação padrão e um teste de Força. A dificuldade do teste aparece na tabela. Um personagem que falhe por 5 ou mais sofre 1d6 pontos de dano de impacto.</p>
        <p><b>Portas Secretas.</b> Encontrar uma dessas exige um teste de Investigação, com CD de 20 (portas escondidas atrás de estantes ou tapeçarias) a 30 (portas feitas para se mesclar perfeitamente às paredes).</p>
        <p><b>Escadarias.</b> Subir uma escadaria conta como terreno difícil. Descer uma escadaria correndo ou fazendo uma investida exige um teste de Acrobacia (CD 10). Em caso de falha, você cai no chão, rola 1d4 x 1,5m para frente (ou até o fim da escada) e sofre 1d6 pontos de dano de impacto por 1,5m rolados.</p>
        <p><b>Pilares.</b> Pilares e colunas existem por motivos funcionais (suportar o peso do teto) e estéticos. Via de regra, quanto maior e mais profunda for uma sala, mais colunas ela terá. Pilares podem ser estreitos (com menos de 1,5m de largura) ou largos (com mais de 1,5m de largura). Um pilar estreito tem RD 8 e 100 PV. Um personagem pode ficar no mesmo espaço de um pilar estreito e receber cobertura leve por isso (+5 na Defesa). Um pilar largo possui RD 8 e 500 PV. Um personagem não pode ficar no mesmo espaço de um pilar largo, mas pode ficar atrás dele para ganhar cobertura leve. Estalagmites e estátuas contam como pilares estreitos ou largos, de acordo com seu tamanho.</p>
        <p><b>Tapeçarias.</b> Um elemento comum de muitas masmorras (especialmente templos e castelos antigos), tapeçarias podem ser úteis como esconderijo ou meio de alcançar um ponto mais alto. Uma tapeçaria com 1,5m de largura tem RD 0 e 10 PV. Um personagem atrás de uma tapeçaria possui camuflagem leve. A CD do teste de Atletismo para escalar uma tapeçaria é 15 (supondo que ela seja resistente o bastante para sustentar o peso do personagem).</p>
        <p><b>Altares.</b> Outro elemento típico de masmorras são altares — normalmente, blocos de pedra retangulares que são o centro de um templo. Um altar comum ocupa um espaço de 1,5m por 3m, possui RD 8 e 200 PV e fornece cobertura leve a qualquer criatura atrás dele, embora altares maiores, menores e de outros materiais existam. Um altar também pode emanar uma aura mágica, especialmente as magias Consagrar e Profanar.</p>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 6-3: Portas</th>
            </tr>
            <tr>
              <th>Tipo de Porta</th>
              <th>RD</th>
              <th>PV</th>
              <th>CD</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Madeira</td><td>5</td><td>20</td><td>15</td></tr>
            <tr><td>Madeira reforçada</td><td>5</td><td>30</td><td>20</td></tr>
            <tr><td>Pedra</td><td>8</td><td>100</td><td>25</td></tr>
            <tr><td>Ferro</td><td>10</td><td>100</td><td>25</td></tr>
            <tr><td>Grade</td><td>10</td><td>60</td><td>20</td></tr>
          </tbody>
        </table>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - páginas 263 à 265`,
      },
      {
        id: 277,
        nome: `AMBIENTE DE AVENTURA: OS ERMOS`,
        descricao: `
        <p>Florestas sombrias, montanhas escarpadas e o fundo do mar são exemplos de “ermos”, lugares abertos e inóspitos — ao contrário de masmorras, que são fechadas e inóspitas. Ermos e masmorras são os ambientes de aventura mais comuns. Incontáveis histórias de fantasia épica incluem jornadas pelos ermos.</p>
        <h5><p><b>CRIANDO AVENTURAS NOS ERMOS</b></p></h5>
        <p>É possível fazer uma aventura nos ermos como se fosse uma masmorra, ou seja, mapeando o lugar que os personagens vão explorar. No caso de uma floresta, por exemplo, apenas substitua as salas por clareiras e os corredores por trilhas entre as árvores.</p>
        <p>Porém, ermos são definidos por serem lugares abertos, onde os personagens podem ir em qualquer direção. Para emular isso, é melhor usar uma abordagem abstrata. Em vez de fazer um mapa, defina uma condição para os personagens avançarem e uma série de encontros que eles terão à medida que avançam.</p>
        <p>Imagine uma aventura que tenha como objetivo encontrar uma flor mágica no centro da Mata dos Galhos Partidos. Você define que, para avançar pela floresta, os personagens precisam passar em um teste de Sobrevivência. Cada teste representa um dia de viagem e, para chegar ao centro, é necessário passar em três testes (ou seja, na melhor das hipóteses, o grupo chegará em três dias). Para cada avanço, você prepara uma cena — uma ameaça, objetivo opcional ou ponto de interesse. Por exemplo, após o primeiro sucesso, os heróis são atacados por lobos famintos.</p>
        <p>Para deixar as coisas mais envolventes, coloque escolhas para os jogadores. Após o segundo sucesso, o grupo vê seu caminho bloqueado por teias. Eles seguem em frente, arriscando serem atacados por aranhas gigantes, ou procuram outro caminho, talvez estendendo sua jornada em um ou mais dias? Por fim, defina uma consequência para o tempo perdido. Talvez o grupo tenha mantimentos limitados, talvez haja monstros errantes e a cada dia exista uma chance de que os heróis sejam atacados.</p>
        <p>Prepare uma descrição para cada um dos dias da jornada e sua aventura estará pronta. Essa abordagem abstrata funciona bem — e simplifica a vida do mestre.</p>
        `,

        referencia: `Tormenta 20 Jogo odo Ano - páginas 266 à 270`,
      },
      {
        id: 278,
        nome: 'ERMOS: CLIMA',
        descricao: `
        <p>O clima pode ser um aspecto importante de uma cena — uma batalha sob uma tempestade costuma ser mais dramática que lutar em um belo dia de sol!</p>
        <p><b>Calor e Frio.</b> Um personagem em clima muito quente (acima de 50º C) ou muito frio (abaixo de –10º C) deve fazer um teste de Fortitude por dia (CD 15 +1 por teste anterior). Se falhar sofre 1d6 pontos de dano de fogo ou frio que só pode ser curado após sair do clima quente ou frio. Em calor ou frio extremos (acima de 60º C ou abaixo de –20º C) o teste deve ser feito por minuto.</p>
        <p><b>Neblina.</b> Fornece camuflagem. Neblina espessa fornece camuflagem leve a criaturas a 1,5m e camuflagem total a criaturas a mais de 1,5m.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 267`,
      },
      {
        id: 279,
        nome: 'ERMOS: PRECIPITAÇÕES',
        descricao: `
        <p><b>Chuva.</b> –5 em testes de Percepção e os mesmos efeitos de vento forte.</p>
        <p><b>Granizo.</b> Como chuva, mas no início de cada rodada, todas as criaturas sofrem 1 ponto de dano de impacto.</p>
        <p><b>Neve.</b> Como chuva, mas cria terreno difícil.</p>
        <p><b>Tempestade.</b> –10 em testes de Percepção e os mesmos efeitos de vendaval. No início de cada rodada, há 10% de chance de uma criatura aleatória ser atingida por um raio (8d10 pontos de dano de eletricidade).</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 267`,
      },
      {
        id: 280,
        nome: 'ERMOS: VENTO',
        descricao: `
        <p><b>Vento Forte.</b> –2 em testes de ataque à distância e 50% de chance por rodada de apagar chamas ou dissipar névoas.</p>
        <p><b>Vendaval.</b> –5 em testes de ataque à distância. Apaga chamas e dissipa névoas.</p>
        <p><b>Furacão.</b> Torna ataques à distância impossíveis, apaga chamas e dissipa névoas. No início de cada rodada, criaturas Médias ou menores devem passar em um teste de Fortitude (CD 15) ou caem, são arrastadas 1d4 x 1,5m na direção do vento e sofrem 1d6 pontos de dano de impacto para cada 1,5m.</p>
        <p><b>Tornado.</b> Torna ataques à distância impossíveis, apaga chamas e dissipa névoas. No início de cada rodada, criaturas Grandes ou menores devem passar em um teste de Fortitude (CD 25) ou caem, são arrastadas 1d12 x 1,5m em uma direção aleatória e sofrem 1d6 pontos de dano de impacto para cada 1,5m.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 267`,
      },
      {
        id: 281,
        nome: 'TERRENOS: COLINAS',
        descricao: `
        <p>Um tipo de terreno caracterizado por ondulações (suaves ou íngremes) e eventuais penhascos.</p>
        <p><b>Inclinação Suave.</b> Não afeta o movimento, mas personagens no lado superior recebem bônus por terreno elevado contra personagens no lado inferior.</p>
        <p><b>Inclinação Íngreme.</b> Conta como terreno difícil para subir. Descer uma inclinação íngreme correndo ou fazendo uma investida exige um teste de Acrobacia (ou Cavalgar, se você estiver montado; CD 10). Em caso de falha, você cai no chão, rola 1d4 x 1,5m para frente (ou até o fim da inclinação) e sofre 1d6 pontos de dano de impacto por 1,5m rolados.</p>
        <p><b>Penhasco.</b> Um rochedo alto e escarpado, um penhasco típico tem 1d6 x 3m de altura. Escalar um penhasco exige um teste de Atletismo (CD 15).</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 268`,
      },
      {
        id: 282,
        nome: 'TERRENOS: DESERTOS',
        descricao: `
        <p>Lugares áridos e quentes (para desertos de clima frio, veja “Ártico”, a seguir).</p>
        <p><b>Dunas.</b> Formadas pela ação do vento sobre a areia, dunas funcionam como inclinações íngremes (veja “Colinas”, acima). Porém, cair e rolar de uma duna não causa dano.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 268`,
      },
      {
        id: 283,
        nome: 'TERRENOS: FLORESTAS',
        descricao: `
        <p>Incluem florestas fechadas e abertas (bosques). Florestas fechadas são cobertas de árvores largas, folhagens e vegetação rasteira. Bosques normalmente possuem apenas árvores estreitas.</p>
        <p><b>Árvores.</b> Podem ser estreitas (com menos de 1,5m de largura) ou largas (com mais de 1,5m de largura). Uma árvore estreita tem RD 5 e 100 PV. Um personagem pode ficar no mesmo espaço de uma árvore estreita e receber cobertura leve. Uma árvore larga possui RD 5 e 500 PV. Um personagem não pode ficar no mesmo espaço de uma árvore larga, mas pode ficar atrás dela para ganhar cobertura leve. Subir numa árvore exige um teste de Atletismo (CD 15). Um personagem no topo de uma árvore precisa se equilibrar (CD 15; veja Acrobacia, na página 115). Um personagem no topo de uma árvore larga recebe camuflagem leve contra criaturas no solo.</p>
        <p><b>Folhagens.</b> Moitas e arbustos contam como terreno difícil e fornecem camuflagem leve a criaturas dentro deles.</p>
        <p><b>Vegetação Rasteira.</b> Raízes, vinhas e outros tipos de vegetação rasteira contam como terreno difícil. Além disso, impõem penalidade de –2 em teste de Furtividade pelas folhas secas e galhos caídos.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 268`,
      },
      {
        id: 284,
        nome: 'TERRENOS: MONTANHAS',
        descricao: `
        <p>O início de um terreno montanhoso é normalmente marcado por inclinações e penhascos (veja “Colinas”, acima).</p>
        <p><b>Abismo.</b> Uma fenda no chão, normalmente com 1d4 x 1,5m de largura e 2d4 x 3m de profundidade. Escalar para fora de um abismo exige um teste de Atletismo (CD 20).</p>
        <p><b>Altitude.</b> A falta de oxigênio de grandes altitudes pode ser letal. Um personagem no cume de uma montanha deve fazer um teste de Fortitude (CD 15 + 1 por teste anterior) por dia. Em caso de falha, fica fatigado até descer (se já estava fatigado, fica exausto).</p>
        <p><b>Paredão.</b> Um penhasco vertical e muito alto, normalmente com 2d6 x 3m de altura. Escalar um paredão exige um teste de Atletismo (CD 25).</p>
        <p><b>Seixos.</b> Em montanhas, inclinações íngremes às vezes são cobertas de pedrinhas. Nesse caso, a CD do teste para descer a inclinação numa corrida ou investida aumenta para 15.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 268`,
      },
      {
        id: 285,
        nome: 'TERRENOS: PÂNTANOS',
        descricao: `
        <p>Inclui brejos, charcos, mangues (pântanos de água salgada) e qualquer tipo de terreno alagado. Pântanos possuem muita vegetação rasteira, folhagens e árvores (veja “Florestas”, acima), além de água parada (veja “Aquático”, abaixo) e lodaçais.</p>
        <p><b>Lodaçal.</b> Poças com uma mistura de água e lama que atrapalha os movimentos. Um lodaçal conta como terreno difícil e impõe a condição vulnerável a qualquer personagem dentro dele.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 268`,
      },
      {
        id: 286,
        nome: 'TERRENOS: PLANÍCIES',
        descricao: `
        <p>Incluem estradas, pastos, fazendas e campos de batalha. Normalmente, não há elementos associados a planícies, embora às vezes elas contenham vegetação rasteira (veja em “Florestas”, acima). Campos de batalha, porém, muitas vezes possuem trincheiras.</p>
        <p><b>Trincheira.</b> Uma vala escavada no solo para proteger soldados. Um personagem em uma trincheira recebe cobertura leve contra ataques à distância. Sair de uma trincheira conta como terreno difícil. Essa regra pode ser usada para valas, leitos de rio secos e acidentes geográficos similares.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 268`,
      },
      {
        id: 287,
        nome: 'TERRENOS: ÁRTICOS',
        descricao: `
        <p>Qualquer região fria. Normalmente, regiões árticas são montanhas ou desertos gelados (tundras).</p>
        <p><b>Gelo.</b> Você pode andar no gelo à metade do seu deslocamento sem testes. Porém, andar em seu deslocamento normal, correr, fazer uma investida ou sofrer dano sobre o gelo exige um teste de Acrobacia (CD 15, no caso de movimento, ou igual ao dano sofrido). Em caso de falha, você cai e desliza 1d4 x 1,5m (para a frente, no caso de movimento, ou na direção do ataque, no caso de dano sofrido).</p>
        <p><b>Rio Congelado.</b> Andar sobre um rio congelado é como andar sobre gelo. Se você cair e rolar 1 no d4 para determinar quanto desliza, o gelo quebra e você afunda. Se você afundar, sofre 1d6 pontos de dano de frio por rodada e precisa nadar. Sair exige estar debaixo de um buraco no gelo e gastar uma ação de movimento para se erguer. Abrir um buraco exige causar 10 pontos de dano de impacto ou fogo.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 269`,
      },
      {
        id: 288,
        nome: 'TERRENOS: AQUÁTICOS',
        descricao: `
        <p>Este tipo de terreno é dividido em água corrente (rios e mar agitado) e parada (lagos e mar calmo).</p>
        <p><b>Água Corrente.</b> A velocidade típica de uma correnteza é 1d6 x 3m por rodada. No fim de cada rodada, todos os personagens na água são arrastados nessa velocidade na direção da correnteza. A CD de testes de Atletismo para nadar em um rio é 15 (para correntezas de 9m por rodada ou menos) ou 20 (para correntezas mais rápidas). Sair de uma correnteza com velocidade de 15m ou mais exige chegar até a margem ou ponto de apoio (como um bote ou uma tábua flutuante), então gastar uma ação de movimento e passar num teste de Atletismo (CD 20) para agarrar alguma coisa (galho, raiz, corda...). Se falhar, o personagem não consegue agarrar nada (e, no fim da rodada, será levado pela correnteza).</p>
        <p><b>Água Parada.</b> Água parada exige testes de Atletismo para nadar, conforme a descrição da perícia, mas não possui nenhum outro modificador.</p>
        <p><b>Personagens Submersos.</b> Criaturas debaixo d’água não podem falar (e, portanto, lançar magias) e sofrem –2 em testes de ataque e –5 em testes de Percepção. Eles só podem se deslocar fazendo testes de Atletismo para nadar. Criaturas com deslocamento de natação não sofrem essas penalidades.</p>
        <p>Armas de ataque à distância não podem ser usadas (com exceção de armas de arremesso de perfuração, bestas e redes) e armas de corte e impacto causam metade do dano debaixo d’água. Por fim, criaturas submersas recebem camuflagem e cobertura leves contra personagens fora d’água.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 269`,
      },
      {
        id: 289,
        nome: 'TERRENOS: COVIL',
        descricao: `
        <p>Da gruta de um urso-coruja ao fosso de um escorpião gigante, os ermos estão repletos de lares de monstros. Um covil pode ser avistado com testes de Percepção ou Sobrevivência, e esta última perícia pode ser usada para identificar o habitante do lugar (CD 15 + ND da criatura). Normalmente um monstro estará em seu covil, mas há 25% de chance de ele estar fora — e qualquer tesouro que ele possua estar desprotegido. Resta saber se os personagens conseguirão entrar e sair antes da criatura voltar...</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 269`,
      },
      {
        id: 290,
        nome: 'TERRENOS: RUÍNA',
        descricao: `
        <p>Os ermos são repletos dos resquícios de eras passadas. Um personagem que entre em uma ruína deve rolar 1d6. Com um resultado 1 ou 2, a ruína possui apenas uma ameaça (normalmente uma armadilha ou monstro, a critério do mestre). Com um resultado 3 ou 4, estará vazia. Com um resultado 5, possui uma ameaça e um tesouro. Com um resultado 6, possui apenas um tesouro. As ameaças e os tesouros são apropriados para o nível do grupo. Essa mecânica serve para lugares pequenos — ruínas grandes são masmorras por si só!</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 269`,
      },
      {
        id: 291,
        nome: 'TERRENOS: SANTUÁRIO',
        descricao: `
        <p>Mesmo em regiões inóspitas é possível encontrar lugares consagrados aos deuses — uma estátua de Khalmyr, um círculo de flores para Allihanna, uma pedra manchada de sangue para Megalokk... Um teste de Religião (CD 20) indica a qual deus o santuário é consagrado. Tocar um santuário de seu deus patrono fornece o efeito de uma magia (normalmente Bênção, Curar Ferimentos, Físico Divino ou Vestimenta da Fé), mas apenas uma vez por dia. Porém, se o santuário for de um deus inimigo, você é amaldiçoado (veja Rogar Maldição) até o final do dia.</p>
        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 269`,
      },
      {
        id: 292,
        nome: 'VIAGENS',
        descricao: `
        <p>Via de regra, é melhor lidar com viagens de forma abstrata (veja o quadro “Jornadas em ‘Montagem’”, na página 267). Mas, se quiser lidar com uma viagem de forma detalhada, use as informações a seguir.</p>
        <p><b>Velocidade de Viagem.</b> Consulte a tabela abaixo para determinar a velocidade de viagem do grupo, por hora ou por dia, de acordo com o deslocamento do membro mais lento do grupo.</p>
        <p><b>Terreno e Clima.</b> As distâncias na tabela consideram terreno aberto e clima bom. Em terreno difícil (florestas, pântanos...) ou clima ruim (chuva, neblina...) diminua a distância pela metade. Essas reduções são cumulativas. De acordo com o mestre, testes de Sobrevivência podem anular essas reduções.</p>
        <p><b>Marcha Forçada.</b> As distâncias na tabela consideram um ritmo normal de caminhada, mas é possível avançar mais rápido. Nesse caso, a distância por hora dobra, mas a cada hora o personagem deve passar em um teste de Fortitude (CD 15 +1 por teste anterior) ou perde 1d6 pontos de vida.</p>
        <p><b>Perdendo-se.</b> Se o grupo não está seguindo uma estrada ou marco — como um rio ou praia —, o guia deve passar em um teste de Sobrevivência por dia, ou ficará perdido. Um grupo perdido viaja em uma direção aleatória. Uma vez por dia, cada personagem pode fazer um teste de Sobrevivência (CD 20 –1 por dia de viagem aleatória) para perceber que está no caminho errado e determinar um novo caminho (com um novo teste de Sobrevivência).</p>
        <p><b>Suprimentos.</b> Controle suprimentos apenas se isso for importante para a aventura — por exemplo, durante uma travessia pelo Deserto da Perdição, a falta de água e comida pode ser tão perigosa quanto um monstro! Nesse caso, os jogadores devem controlar suas rações de viagem. Testes de Sobrevivência para encontrar suprimentos, e de Fortitude para resistir à fome e à sede, podem tornar uma viagem tão emocionante quanto um combate.</p>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 6-4: Viagens</th>
            </tr>
            <tr>
              <th>Deslocamento</th>
              <th>por hora¹</th>
              <th>por dia²</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>4,5m</td><td>2,25km</td><td>18km</td></tr>
            <tr><td>6m</td><td>3km</td><td>24km</td></tr>
            <tr><td>7,5m</td><td>3,75km</td><td>30km</td></tr>
            <tr><td>9m</td><td>4,5km</td><td>36km</td></tr>
            <tr><td>12m</td><td>6km</td><td>48km</td></tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">
                ¹Deslocamento × 0,5 km. &nbsp;&nbsp;
                ²Deslocamento por hora × 8 km.
              </td>
            </tr>
          </tfoot>
        </table>

        `,
        referencia: `Tormenta 20 Jogo odo Ano - página 270`,
      },
      {
        id: 293,
        nome: 'PAPÉIS NO GRUPO',
        descricao: `
        <p>Grupos de Tormenta20 normalmente se organizam de forma natural e espontânea, de acordo com a personalidade de cada jogador. Cada pessoa na mesa cuida de seu personagem, incluindo tesouro, condições etc., enquanto o mestre fica responsável pelos NPCs e pelo mundo.</p>
        <p>Contudo, essa forma de organização pode levar a alguns problemas. Um jogador que tenha dificuldade de ordenar suas anotações pode ignorar parte de seu tesouro, ou mesmo algum objetivo que já tinha planejado. Alguém com memória ruim e sem um sistema de controle pode se perder na duração de seus efeitos e nas condições (e bônus!) que afetam seu personagem. O próprio mestre pode se ver sobrecarregado por ter que lembrar de todos os eventos da campanha, além de todas as regras.</p>
        <p>Para resolver esse tipo de situação, os jogadores podem se dividir em papéis.</p>
        <p>Papéis são funções que cada jogador tem na mesa, auxiliando o bom andamento do jogo. Cada um fica responsável por uma parte “burocrática” ou específica da campanha, garantindo que ninguém acabe sobrecarregado e minimizando os erros. O mestre não tem um papel, já que normalmente cuida de muitos elementos que outros papéis tomam para si.</p>
        <p>Existe um número maior de papéis do que a média de jogadores em um grupo. Isso é proposital: provavelmente alguns desses papéis serão divididos entre todos ou ficarão a cargo do mestre. Nenhum jogador pode assumir mais de um papel. Contudo, caso o grupo decida usar esta regra opcional, todos precisam assumir um. Ninguém fica isento de responsabilidades. O grupo como um todo deve decidir quais papéis são necessários e qual jogador é mais adequado para cada um deles.</p>
        <p>Embora os papéis digam respeito a tarefas da vida real, alguns podem se refletir nos personagens. Por exemplo, o cartógrafo pode interpretar um personagem que também mapeia o terreno — assim garantindo que os mapas existam dentro da campanha.</p>
        <p>A lista a seguir descreve os papéis disponíveis para personagens jogadores.</p>
        `,
        referencia: `Heróis de Arton - página 294`,
      },
      {
        id: 294,
        nome: 'PAPÉIS NO GRUPO: ADVOGADO',
        descricao: `
        <p>O papel do advogado é simples: ajudar o grupo com regras. Ao contrário de outros papéis, o jogador deve conhecer bem o sistema e saber onde encontrar a maior parte das informações. Faz parte de seu trabalho auxiliar jogadores novatos, achar regras no livro quando o mestre pede e até dar palpites (quando for solicitado) sobre otimização de fichas de seus colegas. Em suma, é um auxiliar de regras da mesa toda.</p>
        <p><center><b>Se for o advogado, você recebe +1 ponto de mana.</b></center></p>
        `,
        referencia: `Heróis de Arton - página 294`,
      },
      {
        id: 295,
        nome: 'PAPÉIS NO GRUPO: ARQUIVISTA',
        descricao: `
        <p>O arquivista anota nomes de NPCs e lugares, acontecimentos importantes, objetivos que outros jogadores tenham declarado e que possam esquecer (“Se um dia formos a Valkaria, quero procurar Lorde Niebling!”), além das relações entre os coadjuvantes mais importantes. Em suma, ele ajuda o mestre e os jogadores a lembrar de informações da história, impedindo que sejam ignoradas ou confundidas.</p>
        <p><center><b>Se for o arquivista, você recebe +1 em Diplomacia.</b></center></p>
        `,
        referencia: `Heróis de Arton - página 294`,
      },
      {
        id: 296,
        nome: 'PAPÉIS NO GRUPO: BIBLIOTECÁRIO',
        descricao: `
        <p>O bibliotecário é o guardião das informações que o grupo possui sobre o cenário. O jogador não precisa necessariamente conhecer muito sobre Arton. Contudo, assim que o grupo descobre algo digno de nota (por exemplo, a história da Revolta dos Três ou a estrutura dos exércitos da Supremacia Purista), o bibliotecário faz uma anotação sobre isso, com o livro e a página onde a informação pode ser encontrada para consulta. Grupos que estejam conhecendo o cenário aos poucos podem se beneficiar muito de um bibliotecário.</p>
        <p><center><b>Se for o bibliotecário, você recebe +1 em Conhecimento.</b></center></p>
        `,
        referencia: `Heróis de Arton - página 294`,
      },
      {
        id: 297,
        nome: 'PAPÉIS NO GRUPO: CARTÓGRAFO',
        descricao: `
        <p>O cartógrafo mapeia o terreno onde o grupo está — seja uma masmorra, sejam ermos em que eles possam se perder. Em grupos que não usam mapas de batalha, o cartógrafo deve manter um controle sobre onde cada personagem e NPC está num combate, além de suas posições relativas (para flanquear, por exemplo). Caso a campanha envolva longas viagens, o cartógrafo deve saber a distância aproximada dos principais pontos de interesse. Se o grupo calcular mantimentos de forma rígida, o cartógrafo pode auxiliar o tesoureiro a manter esse controle durante viagens.</p>
        <p><center><b>Se for o cartógrafo, você recebe +1 em Sobrevivência.</b></center></p>
        `,
        referencia: `Heróis de Arton - páginas 294 e 295`,
      },
      {
        id: 298,
        nome: 'PAPÉIS NO GRUPO: ENFERMEIRO',
        descricao: `
        <p>O enfermeiro mantém o controle de condições e penalidades que afetam os membros do grupo, totais de PV e suprimentos de cura. Se houver personagens sangrando, ele lembra dos testes de Constituição. Além disso, alerta os demais sobre companheiros prestes a morrer.</p>
        <p><center><b>Se for o enfermeiro, você recebe +1 em Cura.</b></center></p>
        `,
        referencia: `Heróis de Arton - página 295`,
      },
      {
        id: 299,
        nome: 'PAPÉIS NO GRUPO: ESTRATEGISTA',
        descricao: `
        <p>O estrategista mantém o controle da iniciativa e das informações dos efeitos que afetam os personagens em combate. É dever dele lembrar os demais de bônus temporários (como pelo poder Comandar ou pela Aura Sagrada do paladino) e ter uma ideia geral dos principais poderes de combate de cada um, para que o grupo não ignore possibilidades em batalha.</p>
        <p><center><b>Se for o estrategista, você recebe +1 em Guerra.</b></center></p>
        `,
        referencia: `Heróis de Arton - página 295`,
      },
      {
        id: 300,
        nome: 'PAPÉIS NO GRUPO: TERATÓLOGO',
        descricao: `
        <p>O teratólogo mantém o controle sobre habilidades e fraquezas de monstros e inimigos que os personagens conheçam. Por exemplo, depois que o grupo encontra pela primeira vez um troll, o teratólogo pode anotar sua habilidade de regeneração, então lembrar a todos do que sabem da próxima vez. Não serve apenas para limitar as ações dos jogadores: também registra estratégias e vulnerabilidades. Este papel também pode ser útil para lembrar o mestre de habilidades e fraquezas de inimigos.</p>
        <p><center><b>Se for o teratólogo, você recebe +1 em Misticismo.</b></center></p>
        `,
        referencia: `Heróis de Arton - página 295`,
      },
      {
        id: 301,
        nome: 'PAPÉIS NO GRUPO: TESOUREIRO',
        descricao: `
        <p>Responsável por anotar os bens do grupo. Quando o grupo encontra um tesouro, o tesoureiro divide-o entre todos igualmente, tendo a palavra final sobre quem ficará com um item específico. Uma vez que o item esteja com um personagem, não é mais responsabilidade do tesoureiro.</p>
        <p>Bens de propriedade coletiva são de responsabilidade do tesoureiro. Ele também mantém o controle sobre quanto cada um investiu em uma propriedade coletiva, para garantir que todos estejam contribuindo.</p>
        <p><center><b>Se for o tesoureiro, você recebe +1 em Nobreza ou em um Ofício.</b></center></p>
        `,
        referencia: `Heróis de Arton - página 295`,
      },
      {
        id: 302,
        nome: 'PAPÉIS NO GRUPO: XERIFE',
        descricao: `
        <p>Alguns grupos têm pouco tempo para jogar. Assim, qualquer indecisão exagerada (como demorar uma hora para abrir uma porta) pode prejudicar a sessão. Também podem sofrer outras limitações — jogam online com conexões ruins ou têm muitos jogadores. Outros grupos, mesmo sem nenhum desses problemas, são apenas indecisos demais. Seja pelo motivo que for, às vezes alguns grupos simplesmente perdem muito tempo sem que ninguém se divirta.</p>
        <p>O xerife é um jogador que o mestre pode contactar discretamente (pela internet, sussurrando ou por um bilhete) para ajudá-lo a empurrar o grupo para a frente. Não se trata de fazer a história acontecer de uma determinada maneira — apenas de fazê-la acontecer! Por exemplo, o mestre pode dizer ao xerife “Essa porta não tem nada de especial, chega de discutir sobre ela” ou “O velhinho dormindo num canto não é um avatar de Khalmyr”. Outras responsabilidades do xerife podem ser ajudar o mestre a conter o número de piadas (desde que isso não vá prejudicar a diversão do grupo) ou servir de “voz do bom senso”, evitando decisões absurdas ou que resultarão no fim da campanha. Em suma, o xerife é um auxiliar do mestre, alguém que abre mão de algumas surpresas e ajuda o jogo a “andar”.</p>
        <p><center><b>Se for o xerife, você recebe +1 em Iniciativa.</b></center></p>
        `,
        referencia: `Heróis de Arton - página 295`,
      },
      {
        id: 303,
        nome: 'COMBATE AVANÇADO',
        descricao: `
        <p>Esta seção traz diversas regras opcionais para combate. Cada uma altera o funcionamento desse tipo de cena de uma forma específica, deixando suas lutas mais táticas, brutais ou cinematográficas.</p>
        <p>As mecânicas não são necessariamente relacionadas entre si, de modo que você pode usar apenas as que preferir.</p>
        `,
        referencia: `Heróis de Arton - página 296`,
      },
      {
        id: 304,
        nome: 'COMBATE AVANÇADO: AÇÕES RÁPIDAS',
        descricao: `
        <p>Esta regra introduz um novo tipo de ação: rápida. Esta ação é algo simples, que ocupa apenas uma fração do seu movimento. Você não recebe ações rápidas automaticamente, mas pode usar suas ações de movimento para executá-las (cada movimento equivale a duas ações rápidas). Quando converte uma ação de movimento em ações rápidas, elas devem ser executadas em sequência (a menos que seu grupo esteja usando a regra opcional Movimento Intercalado).</p>
        <p>As seguintes ações descritas em Tormenta20 (p. 234) são consideradas ações rápidas: levantar-se, manipular item, mirar e sacar ou guardar item. Além disso, você pode usar uma ação rápida para percorrer uma distância igual à metade do seu deslocamento. Se o grupo estiver usando a regra opcional Posicionamento, erguer escudo (p. 304) também é considerada uma ação rápida.</p>
        `,
        referencia: `Heróis de Arton - página 296`,
      },
      {
        id: 305,
        nome: 'COMBATE AVANÇADO: ARMAS LEVES E ÁGEIS',
        descricao: `
        <p>Com esta regra, você pode usar Destreza em vez de Força para testes de ataque corpo a corpo e na rolagem de dano com armas leves, ágeis e de arremesso. Se usar esta regra, ignore o pré-requisito de Acuidade com Arma em qualquer habilidade ou item.</p>
        `,
        referencia: `Heróis de Arton - página 296`,
      },
      {
        id: 306,
        nome: 'COMBATE AVANÇADO: ATAQUES DE OPORTUNIDADE',
        descricao: `
        <p>Nesta regra, os combatentes podem aproveitar brechas na defesa de seus inimigos para desferir ataques de oportunidade. Um ataque de oportunidade é um ataque corpo a corpo, feito como uma reação quando um inimigo em seu alcance, e que você possa perceber, executa uma das ações descritas a seguir.</p>
        <ul>
        <li>Fazer um ataque à distância.</li>
        <li>Levantar-se (a menos que o inimigo se levante como uma ação livre).</li>
        <li>Lançar uma magia, exceto magias lançadas como reação ou ação livre (mas veja conjuração defensiva). Além disso, magias com alcance toque não provocam ataques de oportunidade de seu alvo (mas provocam de outras criaturas no alcance).</li>
        <li>Sair de um quadrado ameaçado (mas veja as ações reposicionar e recuar).</li>
        <li>Usar itens complexos, como ativar uma engenhoca ou beber uma poção. A critério do mestre, outras ações complexas podem provocar ataques de oportunidade (sacar ou guardar um item não é uma ação complexa, mas recarregar uma arma com ação de movimento ou maior, sim).</li>        
        <li>Você só pode executar um ataque de oportunidade por rodada.</li>
        </ul>
        <p><b>Acrobacia e Oportunidade.</b> Passar por um inimigo usando Acrobacia (Tormenta20, p. 115) não provoca ataques de oportunidade desse inimigo.</p>
        <p><b>Novas Ações.</b> Esta regra introduz as seguintes novas ações para personagens.</p>
        <ul>
        <li><i>Reposicionar (movimento).</i> Você ajusta sua posição com cautela; você percorre apenas 1,5m, mas este deslocamento não provoca ataques de oportunidade. Você não pode se reposicionar se o seu deslocamento for menor do que 1,5m.</li>
        <li><i>Recuar (completa).</i> Você se move com cuidado; você percorre metade do seu deslocamento, mas este movimento não provoca ataques de oportunidade. Você não pode recuar se o seu deslocamento for menor do que 3m.</li>
        <li><i>Conjuração defensiva.</i> Você lança uma magia concentrado-se em sua defesa. Você não provoca ataques de oportunidade com essa magia, mas precisa passar em um teste de Vontade (CD 20 + custo em PM da magia). Se falhar, a magia é perdida, mas os PM são gastos mesmo assim.</li>
        </ul>
        <p><b>Habilidades Existentes.</b> As seguintes habilidades possuem interações especiais ou clarificações sobre seu uso com ataques de oportunidade.</p>
        <ul>
        <li><i>Ataque Reflexo e Piqueiro (Tormenta20, pp. 65 e 128).</i> Os gatilhos pra usar estes poderes são diferentes das situações que causam ataques de oportunidade, por isso eles não se relacionam com esta regra. Você ainda pode usá-los mesmo que seu inimigo use as ações reposicionar ou recuar.</li>
        <li><i>Bater e Correr e Carga de Cavalaria (Tormenta20, pp. 65 e 124).</i> Seu movimento adicional após o ataque não provoca ataques de oportunidade.</li>
        <li><i>Disparo Preciso (Tormenta20, p. 125).</i> Seus ataques à distância não provocam ataques de oportunidade.</li>
        </ul>
        <p>A critério do mestre, habilidades com efeitos semelhantes podem ser modificadas da mesma forma.</p>
        <p><b>Ameaças.</b> Ameaças podem realizar mais ataques de oportunidade por rodada do que personagens jogadores, conforme seu patamar (mas ainda estão limitadas a um ataque por instância do evento que lhes permitiu realizá-lo).</p>
        <table>
          <thead>
            <tr>
              <th>Patamar da Ameaça</th>
              <th>Ataques de Oportunidade/Rodada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Iniciante (ND 1 a 4)</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Veterano (ND 5 a 10)</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Campeão (ND 11 a 16)</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Lenda (ND 17 a 20)</td>
              <td>4</td>
            </tr>
            <tr>
              <td>S/S+</td>
              <td>Ilimitados</td>
            </tr>
          </tbody>
        </table>
        `,
        referencia: `Heróis de Arton - páginas 296 e 297`,
      },
      {
        id: 307,
        nome: 'COMBATE AVANÇADO: ATAQUES MIRADOS',
        descricao: `
        <p>Com esta regra, sempre que faz um ataque, você pode mirar em uma parte específica do corpo do oponente para causar um efeito adicional. Se fizer isso, você sofre uma penalidade no teste de ataque de –5 para pernas, braços, tronco, asas e outros membros locomotores, e de –10 para cabeça ou equivalente (veja “Efeitos Críticos”, p. 298).</p>
        <p>Se o ataque acertar e causar dano, você impõe um efeito adicional ao alvo, equivalente ao efeito crítico de menor severidade (veja “Efeitos Críticos”, p. 298) para a parte do corpo atingida. Se o ataque for um acerto crítico, use a severidade seguinte (ou resolva como um efeito crítico normal, se estiver usando a regra opcional Efeitos Críticos).</p>
        `,
        referencia: `Heróis de Arton - página 297`,
      },
      {
        id: 308,
        nome: 'COMBATE AVANÇADO: COBERTURA LEVE E EFEITOS',
        descricao: `
        <p>Nesta regra, cobertura leve fornece +5 em testes de Reflexos contra efeitos com alvo que tenham origem no lado oposto da cobertura e contra efeitos de área cujo centro esteja do lado oposto da cobertura.</p>
        `,
        referencia: `Heróis de Arton - página 297`,
      },
      {
        id: 309,
        nome: 'COMBATE AVANÇADO: DEFESA ÉPICA',
        descricao: `
        <p>Com esta regra, sua Defesa aumenta em +1 para cada nível par (mesma progressão das perícias). Indicada para campanhas de ação exagerada!</p>
        `,
        referencia: `Heróis de Arton - página 297`,
      },
      {
        id: 310,
        nome: 'COMBATE AVANÇADO: DESAFIANDO A MORTE',
        descricao: `
        <p>Esta opção se inspira em conceitos narrativistas, colocando mais controle nas mãos dos jogadores. Com esta regra, os personagens não morrem. Simples assim. Caso um personagem “morra”, ou seja, alcance o limite de pontos de vida negativos, em vez disso fica fora do jogo até a próxima cena (mesmo que alguém tente curá-lo, ele estará muito ferido para voltar à ativa). Se o mestre quiser ser mais cruel, pode fazer com que cada personagem que “morra” em vez disso perca 1 ponto permanente num atributo (role 1d6, sendo 1 Força, 2 Destreza e assim por diante).</p>
        <p>A qualquer momento, um personagem pode declarar que está “desafiando a morte”. Quando faz isso, seu limite de gasto de pontos de mana aumenta em +2 e ele recebe 2d6 PM temporários por patamar que duram até o fim da cena. Porém, durante essa cena, se chegar ao limite de pontos de vida negativos, irá morrer de verdade. O jogador só pode “desafiar a morte” em uma cena na qual tenha uma chance real de morrer! O mestre pode vetar qualquer uso abusivo desta opção (como usá-la para ganhar PM em uma cena claramente inofensiva).</p>
        <p>Esta opção coloca o controle da vida e da morte de seus personagens nas mãos dos jogadores. Um jogador sempre poderá escolher entre lutar normalmente, tendo mais chance de ser derrotado e sofrer algum revés, como ser preso ou ver seu reino ser destruído, ou desafiar a morte para ter mais chance de vencer, mas arriscando ser morto caso tudo dê errado. Isso pode ser muito tentador numa luta contra um vilão odiado, ou caso um ente querido esteja em perigo — nesta regra, os personagens não podem morrer, mas não falamos nada de NPCs...</p>
        <p>Esta opção garante que os personagens não morram em cenas secundárias — nada de perder um herói querido para um ataque de glops aleatórios — ao mesmo tempo em que fornece a chance de os personagens realizarem feitos heroicos quando quiserem. É importante ter em mente o seguinte: um jogador nunca deve ser obrigado a desafiar a morte. Para que esta regra funcione, isso deve ser sempre uma escolha.</p>
        <p>Se o jogador arriscar, pode gravar sua marca no mundo. Se perder... bem, ele sabia dos riscos que estava correndo.</p>
        `,
        referencia: `Heróis de Arton - página 297`,
      },
      {
        id: 311,
        nome: 'COMBATE AVANÇADO: EFEITOS CRÍTICOS',
        descricao: `
        <p>Nesta regra, sempre que fizer um acerto crítico, além do dano extra, você causa um efeito adicional. Para determinar esse efeito, você faz duas rolagens de d10: uma para definar a localização e a outra para definir a severidade do ataque. Criaturas imunes a acertos críticos também são imunes a esse efeito.</p>
        <p><b>Localização.</b> Role 1d10 e consulte a tabela ao lado. Se estiver usando a regra Ataques Mirados e tiver mirado em uma parte específica, ignore esta etapa (a localização será aquela em que você mirou).</p>
        <p><b>Severidade.</b> Role 1d10 e some um modificador conforme o multiplicador de crítico do ataque: +0 para crítico x2, +2 para crítico x3, +3 para crítico x4 e +4 para crítico x5 ou maior.</p>
        <p><b>Efeito.</b> Para descobrir o efeito, veja a coluna do tipo de dano causado (se o ataque causa mais de um tipo, escolha um deles) e a linha da severidade.</p>
        <p>Efeitos críticos são cumulativos com os das severidades inferiores (para condições, use a mais severa). Sangramentos causados por efeitos críticos também são cumulativos (resolva cada um individualmente). Por fim, condições iguais podem ter efeitos mais graves quando aplicadas a várias partes do corpo. Por exemplo, um personagem com Vagaroso em ambas as pernas fica imóvel, um personagem Maneta em ambos os braços não pode empunhar nenhum item e um personagem Caolho em ambos os olhos fica cego. O mestre tem a palavra final quanto à interação de complicações iguais.</p>
        <p>Alguns efeitos impõem complicações (veja a p. 282) com as seguintes gravidades.</p>
        <ul>
        <li><i>Leve.</i> Um ferimento superficial, que pode ser tratado facilmente. A complicação é removida quando o personagem recupera uma quantidade de PV igual ao dobro do seu nível.</li>
        <li><i>Grave.</i> Um ferimento severo, que requer mais cuidados para ser curado. A complicação é removida apenas com cura mágica capaz de recuperar uma quantidade de PV igual a quatro vezes o nível do personagem ou com uma cirurgia (um teste de Cura contra CD 30 que demora 1 dia).</li>
        <li><i>Permanente.</i> Um ferimento profundo que deixa sequelas duradouras. Uma complicação permanente só pode ser removida com as magias Desejo ou Intervenção Divina.</li>
        </ul>
        `,
        referencia: `Heróis de Arton - páginas 298 à 300`,
      },
      {
        id: 312,
        nome: 'COMBATE AVANÇADO: ESCALANDO CRIATUAS',
        descricao: `
        <p>Com esta regra, um combatente audacioso pode escalar criaturas gigantes rumo à cabeça delas (ou outro ponto vulnerável, a critério do mestre). A criatura precisa ser Grande ou maior e pelo menos duas categorias de tamanho maiores que você.</p>
        <p>Para escalar uma criatura você precisa estar adjacente a ela, gastar uma ação de movimento e fazer um teste de Acrobacia ou Atletismo oposto pelo Reflexos da criatura (se você possuir deslocamento de escalada, recebe +5 nesse teste). Se você vencer, sobe rumo à cabeça da criatura. Se perder, não consegue subir. Se perder por 5 ou mais, você escorrega e cai (ou a criatura consegue derrubá-lo com um safanão ou balançando o próprio corpo), sofrendo 2d6 pontos de dano de impacto por avanço feito e ficando caído e adjacente à criatura.</p>
        <p>A quantidade de sucessos que você precisa acumular para chegar no topo da cabeça varia conforme o tamanho da criatura: um sucesso para Grande, dois para Enorme e quatro para Colossal. Uma vez na cabeça, você recebe camuflagem contra a criatura, ela conta como desprevenida contra você e seus ataques contra ela recebem +2 na margem de ameaça e +1 no multiplicador de crítico. No início de cada turno seu na cabeça da criatura, você deve fazer um teste contra ela, como se estivesse a escalando, mas como ação livre. Se perder por 5 ou mais, ela consegue derrubá-lo (veja o parágrafo anterior).</p>
        `,
        referencia: `Heróis de Arton - página 300`,
      },
      {
        id: 313,
        nome: 'COMBATE AVANÇADO: FALHAS CRÍTICAS',
        descricao: `
        <p>A vida dos heróis não é feita apenas de triunfos. Mestres que desejam trazer um toque de desastre, tragédia ou até mesmo humor às suas campanhas podem aproveitar esta regra opcional. Sempre que um personagem rolar “1 natural” em um teste de ataque, sofrerá uma falha crítica. Nesse caso, além de errar automaticamente o ataque, o personagem deve rolar 1d100 na Tabela 4-6: Falhas Críticas (p. 302) para determinar o efeito que ocorrerá nessa rodada.</p>
        <p>Nem todos os efeitos estão diretamente ligadosao ataque — muitos representam circunstâncias que emergem do caos do combate. O mestre deve adaptar as descrições da tabela para que se encaixem na cena.</p>
        <p>Sempre que você rolar um efeito que não se encaixa na situação do personagem (por exemplo, um personagem que luta desarmado obtém um resultado que dita que sua arma se quebra), ignore a falha crítica — o ataque ainda é um erro, mas nada de pior acontece.</p>
        `,
        referencia: `Heróis de Arton - página 300`,
      },
      {
        id: 314,
        nome: 'COMBATE AVANÇADO: MORTE ALTERNATIVA',
        descricao: `
        <p>Esta regra muda a forma como personagens morrem. Ela tem como objetivo equilibrar a chance de esse evento trágico acontecer ao longo da campanha — em especial, diminui a chance de morte em níveis baixos e evita completamente a chance de morte instantânea em qualquer nível.</p>
        <p>Nesta regra, não há pontos de vida negativos. Se um personagem for reduzido a 0 ou menos pontos de vida, fica com 0 PV, inconsciente e moribundo.</p>
        <p><b>Moribundo.</b> No início de seu turno, e sempre que sofrer dano estando moribundo, você deve fazer um teste de Constituição e consultar a tabela abaixo. A CD é 10 +2 para cada vez além da primeira que você ficou moribundo nessa cena e +2 para cada teste desses que já realizou nessa cena (esses aumentos são cumulativos). Você perde essa condição se recuperar 1 ou mais PV ou se receber primeiros socorros (veja a perícia Cura, mas a CD do teste de perícia é igual à CD atual do teste de Constituição).</p>
        <table>
          <thead>
            <tr>
              <th colspan="4">Tabela 4-5: Teste de Morte</th>
            </tr>
            <tr>
              <th>Teste de Constituição</th>
              <th>Efeito</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Falha por 10 ou mais</td>
              <td>Morre</td>
            </tr>
            <tr>
              <td>Falha por 5 ou mais</td>
              <td>Sofre uma lesão</td>
            </tr>
            <tr>
              <td>Falha</td>
              <td>Continua moribundo</td>
            </tr>
            <tr>
              <td>Passa</td>
              <td>Perde a condição moribundo e acorda em 1d4 horas com 1 PV</td>
            </tr>
            <tr>
              <td>Passa por 5 ou mais</td>
              <td>Perde a condição moribundo e acorda com 1 PV</td>
            </tr>
          </tbody>
        </table>
        <br />
        <ul>
        <li><i>Lesão.</i> Você sofre um ferimento mais profundo do que mera perda de vida. Uma lesão impõe uma penalidade cumulativa de –2 em testes de perícias. Lesões são recuperadas apenas com descanso — a cada noite de sono em condições normais ou melhores, você recupera uma lesão (ou duas, se tiver passado por cuidados prolongados; veja a perícia Cura).</li>
        </ul>
        <p><h5><b>FERIMENTO PERMANENTE</b></h5></p>
        <p>Esta é uma “opção da opção”. Se estiver usando a regra de Morte Alternativa e quiser um clima mais brutal para seu jogo, substitua o resultado “Lesão” na tabela de efeitos de moribundo pelo resultado “Ferimento Permanente”.</p>
        <ul><li><i>Ferimento Permanente.</i> Você perde 1 ponto permanente em um atributo (role 1d6, sendo 1 Força, 2 Destreza e assim por diante). A critério do mestre, isso pode ser substituído por uma complicação coerente. Um ferimento permanente pode ser curado pelas magias Desejo ou Intervenção Divina, mas um personagem só pode ter um ferimento permanente curado por cada uma dessas magias ao longo de sua vida.</li></ul>        
        <p>O objetivo desta regra é aumentar o risco e a tensão dos combates. Ela também transforma todas as lutas — mesmo aquelas fáceis, nas quais o grupo sabe que será vitorioso — em momentos emocionantes. Afinal, mesmo que os personagens vençam, ainda podem sair com um ferimento permanente. Isso tudo tem o efeito colateral de fazer os jogadores pensarem duas vezes antes de entrar num combate e, no geral, traz um clima mais brutal e realista para o jogo. Para campanhas que queiram essa sensação, é uma ótima regra. Mas, se você prefere um jogo mais épico e inconsequente, será melhor não usá-la.</p>

        `,
        referencia: `Heróis de Arton - páginas 300 e 301`,
      },
      {
        id: 315,
        nome: 'COMBATE AVANÇADO: LANCINANTE REVISADO',
        descricao: `
        <p>Esta regra muda o efeito do encanto lancinante.</p>
        <p><b>Lancinante.</b> A arma inflige ferimentos mortais. Quando você faz um acerto crítico, o bônus em dano fornecido pelo encanto dilacerante também é multiplicado. Por exemplo, um machado de batalha lancinante causa +30 pontos de dano em um acerto crítico. Pré-requisito: dilacerante.</p>
        `,
        referencia: `Heróis de Arton - página 304`,
      },
      {
        id: 316,
        nome: 'COMBATE AVANÇADO: LESÕES',
        descricao: `
        <p>Esta regra apresenta machucados mais profundos do que aqueles representados por dano. Sempre que os PV de um personagem são reduzidos a 0 ou menos, ele sofre uma lesão, que significa uma penalidade cumulativa de –2 em testes de perícias. Lesões são recuperadas apenas com descanso. A cada noite de sono, você recupera uma lesão (ou duas, se tiver passado por cuidados prolongados).</p>
        <p>Lesões também aparecem na regra de Morte Alternativa. Esta opção é boa se você gosta da regra padrão de morte, mas quer mais consequências para as batalhas. Para ainda mais brutalidade e realismo, substitua lesões por ferimentos permanentes (p. 301).</p>
        `,
        referencia: `Heróis de Arton - página 304`,
      },
      {
        id: 317,
        nome: 'COMBATE AVANÇADO: MAIS ARMAS ÁGEIS',
        descricao: `
        <p>Nesta regra, as seguintes armas recebem a habilidade de arma ágil: azagaia (quando empunhada corpo a corpo), bordão e lança.</p>
        `,
        referencia: `Heróis de Arton - página 304`,
      },
      {
        id: 318,
        nome: 'COMBATE AVANÇADO: MOVIMENTO INTERCALADO',
        descricao: `
        <p>Com esta regra, você pode intercalar sua ação de movimento com uma outra ação. Por exemplo, se tiver deslocamento 9m, pode usar uma ação de movimento para percorrer 6m, executar uma ação padrão e então percorrer os 3m restantes.</p>
        `,
        referencia: `Heróis de Arton - página 304`,
      },
      {
        id: 319,
        nome: 'COMBATE AVANÇADO: POSICIONAMENTO',
        descricao: `
        <p>Com esta regra, a orientação de cada combatente interfere em sua capacidade de defesa. Cada personagem possui uma fronte (o lado para o qual está voltado), uma retaguarda (o lado oposto a sua fronte) e dois flancos, direito e esquerdo (os lados restantes). No final de cada turno, o personagem deve declarar sua fronte. Isso é uma ação livre, mas a fronte se mantém a mesma até seu próximo turno.</p>
        <p><b>Escudos.</b> Escudos só fornecem seus benefícios contra ataques sofridos pela fronte ou pelo flanco da mão empunhando o escudo (incluindo os quadrados das diagonais). Você pode gastar uma ação de movimento para erguer seu escudo. Isso faz com que você receba os benefícios do escudo contra ataques em um lado adicional (retaguarda ou flanco oposto) até o início do seu próximo turno.</p>
        <p><b>Retaguarda.</b> Uma criatura fica vulnerável contra ataques em sua retaguarda, a menos que tenha erguido seu escudo para proteger este lado.</p>
        <p><b>Encurralar.</b> Uma criatura adjacente a uma parede, ou outro obstáculo grande o suficiente para fornecer cobertura leve, fica vulnerável contra ataques desferidos contra seus flancos que não estejam voltados para essa cobertura.</p>
        <p><b>Ataques em Alturas Variadas.</b> Para ataques desferidos de um quadrado diretamente acima ou abaixo do personagem (em uma linha vertical reta), considere que o ataque é contra a retaguarda.</p>
        `,
        referencia: `Heróis de Arton - página 304`,
      },
      {
        id: 320,
        nome: 'COMBATE AVANÇADO: RD COMBINADA',
        descricao: `
        <p>Nesta regra, a redução de dano fornecida por armaduras e por escudos se acumulam. Por exemplo, se estiver usando uma armadura e um escudo pesados de adamante, você tem RD 7.</p>
        `,
        referencia: `Heróis de Arton - página 304`,
      },
      {
        id: 321,
        nome: 'COMBATE AVANÇADO: SAQUE RÁPIDO LIMITADO',
        descricao: `
        <p>Com esta regra, cada efeito que permite sacar ou guardar itens como ação livre só pode ser usado uma vez por rodada. Os efeitos se acumulam. Um personagem com o poder Saque Rápido e uma bandoleira de poções, por exemplo, pode sacar ou guardar um item qualquer e um item alquímico como ação livre na mesma rodada.</p>        `,
        referencia: `Heróis de Arton - página 304`,
      },
      {
        id: 322,
        nome: 'CULINÁRIA AVANÇADA',
        descricao: `
        <p>Esta seção traz regras alternativas para culinária em Tormenta20, com mecânicas mais concretas e detalhadas para a fabricação de pratos especiais</p>
        <p>Use estas regras se quiser que a culinária seja um aspecto importante de sua campanha. Caso contrário, as regras do livro básico funcionarão melhor, por serem mais simples. Independentemente de qual versão for usada, as mecânicas básicas se mantêm: um prato especial deve ser consumido ao ser comprado ou fabricado, seu efeito dura 1 dia e você só pode receber um bônus de alimentação por dia.<p>
        <p><h5><b>FABRICANDO PRATOS ESPECIAIS</b></h5></p>
        <p>Para preparar um prato especial, você precisa saber sua receita, gastar seus ingredientes e fazer um teste de Ofício (cozinheiro).</p>
        <p><b>Receitas.</b> Quando se torna treinado em Ofício (cozinheiro), você aprende um número de receitas igual a 1 + sua Inteligência. É possível aprender novas receitas lendo livros ou estudando com outros cozinheiros. Via de regra, aprender um novo prato leva 1 dia e custa T$ 100, embora alguns cozinheiros possam estar dispostos a ensinar seus segredos em troca de serviços.</p>
        <p><b>Ingredientes.</b> Cada prato especial possui um número de ingredientes (normalmente, dois ou três). Veja mais na seção a seguir.</p>
        <p><b>Teste.</b> Se você souber a receita e possuir os ingredientes, pode preparar o prato especial. Isso exige 1 hora de trabalho, o gasto dos ingredientes e um teste de Ofício (cozinheiro), cuja CD varia conforme o prato. Se passar, você prepara comida suficiente para seu grupo inteiro (isso difere da regra padrão, em que normalmente se prepara um prato para um indivíduo).</p>
        `,
        referencia: `Heróis de Arton - página 305`,
      },
      {
        id: 323,
        nome: 'TEMPERO ESPECIAL',
        descricao: `
        <p>Um personagem treinado em Ofício (cozinheiro) pode dar um toque pessoal aos pratos que prepara. Isso exige gastar uma porção de especiarias (além dos ingredientes do prato) e aumenta a CD do teste em +5. Se você passar no teste e o prato especial fornecer um bônus numérico (incluindo rolagens de dados), esse bônus aumenta em +1. Se o prato fornecer PV ou PM temporários, esse valor aumenta em 50%. Outros efeitos de pratos especiais não são aprimorados por especiarias.</p>
        `,
        referencia: `Heróis de Arton - página 308`,
      },
      {
        id: 324,
        nome: 'FUNDAMENTALISTA',
        descricao: `
        <p>Enquanto um devoto normal às vezes questiona sua divindade, até mesmo desafiando-a, o fundamentalista é um seguidor extremo de seus ideais, beirando o fanatismo. Ele acredita que outros devotos são infiéis, que sua igreja tem sido liberal e tolerante demais! Não apenas segue as Obrigações & Restrições padrão à risca, mas também adota dogmas muito mais rígidos. A recompensa divina por tamanha lealdade é maior, assim como o castigo por falhar em cumprir essa doutrina severa.</p>
        <p>Um fundamentalista recebe um poder concedido adicional, mas, além das Obrigações & Restrições de sua divindade, deve seguir também seus dogmas. Se violar qualquer deles, perde seus pontos de mana e habilidades de classe divina, só podendo recuperá-los a partir do próximo dia (habilidades são recuperadas após um descanso). Se violar obrigações ou dogmas de novo na mesma aventura, só pode recuperar os PM e habilidades após cumprir uma penitência — que deve ser imposta por outro fundamentalista do mesmo deus. Além disso, fundamentalistas usam apenas a arma favorita de sua divindade. Utilizar qualquer outra arma configura violação de seus dogmas.</p>
        <p>Note que alguns dogmas fundamentalistas os tornam inviáveis como personagens jogadores, servindo melhor a NPCs.</p>
        `,
        referencia: `Deuses de Arton - página 11`,
      },
    ];
  }
}
