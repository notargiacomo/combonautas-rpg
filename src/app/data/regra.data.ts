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
    ];
  }
}
