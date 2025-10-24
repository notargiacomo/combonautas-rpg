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
        <h5><p><b>IDADE INICIAL</b></p></h5></p>
        <p>Você pode escolher a idade inicial de seu personagem ou determiná-la aleatoriamente, com uma rolagem que varia conforme sua classe.</p>
        <p><b>Bárbaro, Bucaneiro, Ladino, Lutador.</b> 1d6+15 anos (para um resultado entre 16 e 21 anos).</p>
        <p><b>Bardo, Caçador, Cavaleiro, Guerreiro, Nobre, Paladino.</b> 2d4+15 anos (para um resultado entre 17 e 23 anos).</p>
        <p><b>Arcanista, Clérigo, Druida, Inventor.</b> 2d6+15 anos (para um resultado entre 17 e 27 anos).</p>
        <h5><p><b>ENVELHECENDO</b></p></h5></p>
        <p>Conforme envelhecem, personagens recebem os seguintes modificadores.</p>
        <p><b>Maduro (45 Anos).</b> For –1, Des –1, Con –1, Int +1, Sab +1, Car +1.</p>
        <p><b>Velho (70 Anos).</b> For –2, Des –2, Con –2, Int +1, Sab +1, Car +1.</p>
        <p><b>Longevidade Máxima.</b> 70 + 2d20 anos.</p>
        <p>Os modificadores são cumulativos. Assim, um personagem velho recebe um total de For –3, Des –3, Con –3, Int +2, Sab +2, Car +2.</p>
        <h5><p><b>RAÇAS LONGEVAS</b></p></h5></p>
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
        <h5><p><b>ESCOLHENDO PERÍCIAS</b></p></h5></p>
        <p>Ao escolher sua classe, você recebe um número de perícias treinadas (ou seja, nas quais é mais competente). Você também recebe um número de perícias treinadas igual a sua Inteligência. Perícias ganhas por Inteligência não precisam pertencer à lista de sua classe.</p>
        <p>Você pode ganhar novas perícias treinadas com o poder Treinamento em Perícia ou aumentando sua Inteligência (exceto aumentos temporários).</p>
        <h5><p><b>USANDO PERÍCIAS</b></p></h5></p>
        <p>A descrição de cada perícia explica o que você pode fazer com ela, junto com exemplos de usos e suas respectivas regras. Testes de perícia seguem a mecânica básica do jogo, apresentada na Introdução e detalhada no Capítulo 5: Jogando.</p>
        <h5><p><b>BÔNUS PERÍCIA</b></p></h5></p>
        <p>Quando faz um teste de perícia, você soma seu bônus de perícia ao resultado do d20. Esse número é uma medida de sua competência com a perícia em questão. Ele é igual à metade do seu nível (arredondado para baixo) + o atributo-chave da perícia (veja a seguir). Nas perícias treinadas, você recebe um bônus de +2. No 7º nível, esse bônus aumenta para +4. No 15º nível, aumenta para +6.</p>
        <p>Por exemplo, um personagem de 3º nível com Força 4 terá um bônus de +5 nas perícias baseadas em Força, no caso, Atletismo e Luta (+1 da metade do nível, +4 da Força). Se for treinado numa dessas perícias, seu bônus com ela será +7 (+1 da metade do nível, +4 de Força, +2 do treinamento).</p>
        <p><b><center>Bônus de Perícia = Metade do Nível + Atributo-chave + Bônus de Treinamento (se for treinado)*</center></b>
        <center>*O bônus de treinamento é +2 do 1º ao 6º níveis, +4 do 7º ao 14º níveis e +6 do 15º nível em diante</center></p><br />
        <h5><p><b>ATRIBUTO-CHAVE</b></p></h5></p>
        <p>O atributo usado com a perícia. Por exemplo, Diplomacia envolve lábia e capacidade de argumentação, por isso seu atributo-chave é Carisma. Já Conhecimento envolve estudo e memória, por isso seu atributo-chave é Inteligência. O atributo-chave afeta seu bônus de perícia (veja acima).</p>
        <h5><p><b>TREINAMENTOS E TESTES</b></p></h5></p>
        <p>Algumas perícias só podem ser usadas quando você é treinado nelas. Por exemplo, se você não é treinado em Ladinagem, não tem o conhecimento necessário para desarmar uma armadilha, independentemente de seu nível ou Destreza. Quando a palavra “treinada” aparece após o nome da perícia, você só poderá usá-la se for treinado nela. Além disso, algumas perícias possuem usos específicos que exigem treinamento.</p>
        <h5><p><b>PENALIDADE DE ARMADURA</b></p></h5></p>
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
        nome: `PODERES DE MAGIA`,
        descricao: `<p>Todos os poderes deste grupo possuem como pré-requisito lançar magias.</p>
        `,        
        referencia: `Tormenta 20 Jogo do Ano - página 131`,
      },
      {
        id: 42,
        nome: `PODERES CONCEDIDOS`,
        descricao: `<p>Todos os poderes desta seção possuem como pré-requisito ser devoto de um dos deuses indicados. O atributo-chave desses poderes é Sabedoria.</p>
        `,        
        referencia: `Tormenta 20 Jogo do Ano - página 132`,
      },
      {
        id: 43,
        nome: `PODERES DA TORMENTA`,
        descricao: `<p>Estes poderes oferecem habilidades ligadas à tempestade rubra. Quando escolhe um poder da Tormenta, você perde 1 de Carisma. Para cada dois outros poderes da Tormenta, você perde mais 1 de Carisma. Essa perda representa deformidades físicas e o desaparecimento gradual de sua própria identidade. Um personagem reduzido a menos que Car –5 torna-se um NPC sob controle do mestre.</p>
        `,        
        referencia: `Tormenta 20 Jogo do Ano - página 136`,
      },
      {
        id: 44,
        nome: `PODERES DE COMBATE`,
        descricao: `<p>Poderes que melhoram características relacionadas a combate.</p>
        `,        
        referencia: `Tormenta 20 Jogo do Ano - página 124`,
      },
      {
        id: 45,
        nome: `PODERES DE DESTINO`,
        descricao: `<p>Poderes que melhoram características não relacionadas a combate.</p>
        `,        
        referencia: `Tormenta 20 Jogo do Ano - página 124`,
      },
    ];
  }
}
