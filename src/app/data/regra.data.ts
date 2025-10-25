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
        </table>`,
        referencia: `Tormenta 20 Jogo do Ano - página 17`,
      },
      {
        id: 3,
        nome: 'ATRIBUTOS MÍNIMOS',
        descricao: `
        <p>Um valor menor que –5 em um atributo gera um efeito: For ou Des (paralisado), Con (morre), Int ou Sab (inconsciente), Car (torna-se um NPC). Isso ignora imunidades.</p>`,
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
          <caption><b>Tabela 1-2: Raças</b></caption>
          <thead>
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
          <caption><b>Tabela 1-3: Classes</b></caption>
          <thead>
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
        referencia: `Tormenta 20 Jogo do Ano - página 32`,
      },
      {
        id: 6,
        nome: 'HABILIDADES DE CLASSE',
        descricao: `<p>Você começa o jogo com todas as habilidades do 1º nível da sua classe. As regras para usar habilidades são explicadas no Capítulo 5: Jogando.</p>
        <p><b>Poderes.</b> Todas as classes possuem uma habilidade “Poder” (Poder de Arcanista, Poder de Bárbaro, Poder de Bardo...) que permite que você escolha um poder de uma lista. Alguns poderes têm pré-requisitos. Para escolhê-los e usá-los, você deve possuir todos os requerimentos mencionados. Você pode escolher um poder no nível em que atinge seus pré-requisitos. A menos que especificado o contrário, você não pode escolher um mesmo poder mais de uma vez. Você sempre pode substituir um poder de classe por um poder geral (veja no Capítulo 2). Para outros propósitos, poderes funcionam como habilidades. Poderes que aumentam o custo em PM de uma magia são poderes de aprimoramento (veja a página 131).</p>`,
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
          <caption><b>Tabela 1-4: Níveis de Personagem</b></caption>
          <thead>
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
        referencia: `Tormenta 20 Jogo do Ano - página 58`,
      },
      {
        id: 17,
        nome: 'COMPANHEIRO ANIMAL',
        descricao: `<p>Um companheiro animal é um amigo valoroso e fiel. Você decide de qual espécie é seu companheiro. Vocês têm um vínculo mental, sendo capazes de entender um ao outro. Seu companheiro animal obedece a você, mesmo que isso arrisque a vida dele.</p>
        <p>Em termos de jogo, seu companheiro animal é um parceiro ajudante, assassino, atirador, combatente, fortão, guardião, perseguidor, ou uma montaria, do nível iniciante. No 7º nível ele muda para veterano e, no 15º nível, para mestre (se tiver mais de um tipo, todos mudam de nível). Se o companheiro animal morrer, você fica atordoado por uma rodada. Você pode invocar um novo companheiro após um dia inteiro de prece e meditação.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 62`,
      },
      {
        id: 18,
        nome: 'EFEITOS DO GOLPE PESSOAL',
        descricao: `<p><b>Amplo (+3 PM).</b> Seu ataque atinge todas as criaturas em alcance curto (incluindo aliados, mas não você mesmo). Faça um único teste de ataque e compare com a Defesa de cada criatura.</p>
        <p><b>Atordoante (+2 PM).</b> Uma criatura que sofra dano do ataque fica atordoada por uma rodada (apenas uma vez por cena; Fortitude CD For anula).</p>
        <p><b>Brutal (+1 PM).</b> Fornece um dado extra de dano do mesmo tipo.</p>
        <p><b>Conjurador (Custo da Magia + 1 PM).</b> Escolha uma magia de 1º ou 2º círculos que tenha como alvo uma criatura ou que afete uma área. Se acertar seu golpe, você lança a magia como uma ação livre, tendo como alvo a criatura atingida ou como centro de sua área o ponto atingido pelo ataque (atributo-chave é um mental a sua escolha). Considere que a mão da arma está livre para lançar esta magia. 🧙‍♂️</p>
        <p><b>Destruidor (+2 PM).</b> Aumenta o multiplicador de crítico em +1.</p>
        <p><b>Distante (+1 PM).</b> Aumenta o alcance em um passo (de corpo a corpo para curto, médio e longo). Outras características não mudam (um ataque corpo a corpo com alcance curto continua usando Luta e somando sua Força no dano).</p>
        <p><b>Elemental (+2 PM).</b> Causa +2d6 pontos de dano de ácido, eletricidade, fogo ou frio. Você pode escolher este efeito mais vezes para aumentar o dano em +2d6 (do mesmo tipo ou de outro), por +2 PM a cada vez. 🧙‍♂️</p>
        <p><b>Impactante (+1 PM).</b> Empurra o alvo 1,5m para cada 10 pontos de dano causado (arredondado para baixo). Por exemplo, 3m para 22 pontos de dano.</p>
        <p><b>Letal (+2 PM).</b> Aumenta a margem de ameaça em +2. Você pode escolher este efeito duas vezes para aumentar a margem de ameaça em +5.</p>
        <p><b>Penetrante (+1 PM). </b>Ignora 10 pontos de RD.</p>
        <p><b>Preciso (+1 PM). </b>Quando faz o teste de ataque, você rola dois dados e usa o melhor resultado.</p>
        <p><b>Qualquer Arma (+1 PM). </b>Você pode usar seu Golpe Pessoal com qualquer tipo de arma.</p>
        <p><b>Ricocheteante (+1 PM). </b>A arma volta pra você após o ataque. Só pode ser usado com armas de arremesso.</p>
        <p><b>Teleguiado (+1 PM). </b>Ignora penalidades por camuflagem ou cobertura leves.</p>
        <p><b>Lento (–2 PM).</b> Seu ataque exige uma ação completa para ser usado</p>
        <p><b>Perto da Morte (–2 PM). </b>O ataque só pode ser usado se você estiver com um quarto de seus PV ou menos.</p>
        <p><b>Sacrifício (–2 PM).</b> Sempre que usa seu Golpe Pessoal, você perde 10 PV.</p>
        `,
        referencia: `Tormenta 20 Jogo do Ano - página 66`,
      },
      {
        id: 19,
        nome: 'LIVRO DE FÓRMULAS',
        descricao: `<p>Quando adquire o poder Alquimista Iniciado, você recebe um livro de fórmulas. Uma “fórmula” é uma magia divina ou arcana (atributo-chave Inteligência) que serve para cumprir os pré-requisitos de fabricação de poções.</p>
        <p>Você começa com três fórmulas de 1º círculo. A cada nível além do 1º, aprende uma fórmula adicional. A partir do 6º nível, pode aprender fórmulas de 2º círculo e, se possuir o poder Mestre Alquimista, a cada quatro níveis (10º, 14º e 18º) pode aprender fórmulas de um círculo maior.</p>
        <p>Se não tiver seu livro de fórmulas, você não pode fabricar poções. Se perder seu livro, você pode preparar outro com uma semana de trabalho e o gasto de T$ 100.</p>
        `,
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
        referencia: `Tormenta 20 Jogo do Ano - página 83`,
      },
      {
        id: 21,
        nome: 'VIRTUDES PALADINESCAS',
        descricao: `<p>Este conjunto de poderes representa obediência veemente a um comportamento específico. Você recebe um bônus progressivo em seu total de pontos de mana de acordo com a quantidade de poderes desse tipo que possui: +1 PM para uma Virtude, +3 PM para duas, +6 PM para três, +10 PM para quatro e +15 PM para cinco Virtudes.</p>
        <p>Virtudes Paladinescas são poderosas, mas possuem uma contrapartida — você deve se comportar de acordo com quaisquer Virtudes que possuir. Um paladino caridoso, por exemplo, deve sempre ajudar os necessitados, enquanto um casto nunca pode cair em tentação. Não seguir uma Virtude Paladinesca que você possua conta como uma violação do Código do Herói. O mestre tem a palavra final sobre o que exatamente constitui uma violação.</p>        `,
        referencia: `Tormenta 20 Jogo do Ano - página 84`,
      },
      {
        id: 22,
        nome: 'MONTARIA SAGRADA',
        descricao: `<p>Um paladino de 5º nível pode receber uma montaria sagrada, designada pelos deuses. Este animal vai atuar como um fiel companheiro de batalhas. Normalmente será um cavalo de guerra para paladinos de tamanho Médio ou um pônei para Pequenos, mas suplementos futuros trarão outras opções de montarias.</p>
        <p>Para invocar sua montaria você gasta uma ação de movimento e 2 PM. Ela aparece com um brilho de luz dourada ao seu lado e fica até o fim da cena, quando desaparece de volta para o mundo divino de onde veio.</p>
        <p>Como opção para campanhas mais realistas, a montaria sagrada pode ser um animal mundano, em vez de invocado. Neste caso, você nunca precisa gastar uma ação ou PM para ter a montaria — que já estará com você. Por outro lado, o animal pode não ser capaz de acompanhá-lo em todos os lugares (um cavalo, por exemplo, não conseguirá entrar num túnel apertado ou escalar uma montanha).</p>
        <p>Você e sua montaria têm um vínculo mental, sendo sempre capazes de entender um ao outro (não é preciso fazer testes de Adestramento). Ela fornece os benefícios de um parceiro veterano de seu tipo. No 11º nível, passa a fornecer os benefícios de um parceiro mestre. Veja a lista de parceiros na página 260. Uma montaria cumpre qualquer ordem sua, mesmo que signifique arriscar a vida. Se a montaria sagrada morrer, você fica atordoado por uma rodada. Você pode invocar uma nova montaria após um dia de prece e meditação.</p>`,        
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
        <p><b>Efeitos que Impedem Conjuração.</b> Um efeito que especificamente impeça um personagem de lançar magias (como a Fúria de um bárbaro ou a magia Transformação de Guerra) também impede um inventor de ativar engenhocas.</p>`,
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
          <caption><b>Tabela 1-20: Deuses</b></caption>
          <thead>
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
        referencia: `Tormenta 20 Jogo do Ano - página 96 e 97`,
      },
      {
        id: 28,
        nome: 'PONTOS DE VIDA - PV',
        descricao: `<p>Pontos de vida são uma medida de seu vigor físico, tolerância a dor e experiência em combate. Eles indicam a quantidade de dano que você pode sofrer antes de cair inconsciente. Assim, o mesmo ferimento que mataria um camponês comum será “apenas um arranhão” para um bárbaro embrutecido ou um ladino esquivo.</p>
        <p>Enquanto tiver pelo menos 1 ponto de vida, você pode agir e lutar normalmente. Se ficar com 0 ou menos PV, você cai inconsciente e sangrando (veja mais sobre isso na página 236).</p>
        `,        
        referencia: `Tormenta 20 Jogo do Ano - página 106`,
      },
      {
        id: 29,
        nome: 'PONTOS DE MANA - PM',
        descricao: `<p>Pontos de mana são uma medida de sua energia, determinação e força interior. Eles indicam quantas habilidades você consegue usar.</p>
        <p>Você não pode gastar mais pontos de mana do que tem, mas não sofre penalidades por ficar com 0 ou menos PM.</p>
        `,        
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
        referencia: `Tormenta 20 Jogo do Ano - página 106`,
      },
      {
        id: 31,
        nome: `PV's e PM's Temporários`,
        descricao: `<p>Certos efeitos fornecem PV ou PM temporários. Eles são somados a seus pontos atuais, mesmo que ultrapassem o máximo. Pontos temporários são sempre os primeiros a serem gastos. Caso não seja especificado o contrário, pontos temporários desaparecem no fim do dia.</p>
        `,        
        referencia: `Tormenta 20 Jogo do Ano - página 106`,
      },
      {
        id: 32,
        nome: `DEFESA`,
        descricao: `<p>A Defesa representa o quão difícil é acertá-lo em combate. Sua Defesa é 10 + sua Destreza + seu bônus de armadura e escudo.</p>
        <p>Quando você ataca um inimigo, a CD do seu teste de ataque é à Defesa dele (veja mais sobre isso no Capítulo 5: Jogando).</p>
        `,        
        referencia: `Tormenta 20 Jogo do Ano - página 106`,
      },
      {
        id: 33,
        nome: `TAMANHO`,
        descricao: `<p>O tamanho de uma criatura é classificado em seis categorias: Minúsculo, Pequeno, Médio, Grande, Enorme e Colossal. Por padrão, seu tamanho é Médio, mas sua raça pode alterar isso. Criaturas Médias não recebem modificadores por tamanho. Criaturas menores recebem bônus em Furtividade e penalidade em manobras de combate. Para criaturas maiores, esses bônus e penalidades são invertidos.</p>
        <p>Criaturas Minúsculas usam armas reduzidas, que causam um passo a menos de dano (veja a Tabela 3-2: Dano de Armas, na página 143). Criaturas Grandes e Enormes usam armas aumentadas, que causam um passo a mais de dano, e criaturas Colossais usam armas gigantes, que causam dois passos a mais de dano. Uma criatura pode usar uma arma feita para até uma categoria de tamanho maior ou menor que a dela, mas sofre –5 nos testes de ataque e a arma ocupa um espaço a mais ou a menos, respectivamente (mínimo meio espaço).</p>
        <table style="width: 100%; border-collapse: collapse; color: black; font-family: 'Times New Roman', serif; text-align: center;">
          <caption style="font-weight: bold; text-transform: uppercase; padding: 8px 0;">
            <b>Tabela 1-21: Tamanho de Criaturas</b>
          </caption>
          <thead>
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
        referencia: `Tormenta 20 Jogo do Ano - página 106 e 107`,
      },
      {
        id: 34,
        nome: `DESLOCAMENTO`,
        descricao: `<p>Sua velocidade, medida em quantos metros você anda com uma ação de movimento. Por padrão, seu deslocamento é 9 metros (6 quadrados no mapa), mas algumas habilidades podem mudar esse valor.</p>
        `,        
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
    ];
  }
}
