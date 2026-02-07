import { Injectable } from '@angular/core';

import { Referencia } from '../enum/referencia.enum';
import { Classe } from '../model/classe';
import { Proficiencia } from '../enum/proficiencia.enum';

@Injectable({
  providedIn: 'root',
})
export class ClasseData {
  private classes: Classe[] = [];

  get(): any[] {
    return this.classes;
  }

  constructor() {
    this.classes = [
      {
        id: 1,
        nome: 'Arcanista',
        descricao_classe: `
        <h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b> Um arcanista começa com 8 pontos de vida (+ Constituição) e ganha 2 PV (+ Constituição) por nível.</p>
        <p><b>Pontos de Mana.</b> 6 PM por nível.</p>
        <p><b>Perícias.</b>  Misticismo  (Int)  e  Vontade  (Sab), mais  2  a  sua  escolha  entre  Conhecimento  (Int), Diplomacia (Car), Enganação (Car), Guerra (Int), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação  (Int),  Nobreza  (Int),  Ofício  (Int)  e Percepção (Sab).</p>
        <p><b>Proficiências.</b> Nenhuma.</p>
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1º</td>
      <td>Caminho do arcanista, magias (1º círculo)</td>
    </tr>
    <tr>
      <td>2º</td>
      <td>Poder de arcanista</td>
    </tr>
    <tr>
      <td>3º</td>
      <td>Poder de arcanista</td>
    </tr>
    <tr>
      <td>4º</td>
      <td>Poder de arcanista</td>
    </tr>
    <tr>
      <td>5º</td>
      <td>Magias (2º círculo), poder de arcanista</td>
    </tr>
    <tr>
      <td>6º</td>
      <td>Poder de arcanista</td>
    </tr>
    <tr>
      <td>7º</td>
      <td>Poder de arcanista</td>
    </tr>
    <tr>
      <td>8º</td>
      <td>Poder de arcanista</td>
    </tr>
    <tr>
      <td>9º</td>
      <td>Magias (3º círculo), poder de arcanista</td>
    </tr>
    <tr>
      <td>10º</td>
      <td>Poder de arcanista</td>
    </tr>
    <tr>
      <td>11º</td>
      <td>Poder de arcanista</td>
    </tr>
    <tr>
      <td>12º</td>
      <td>Poder de arcanista</td>
    </tr>
    <tr>
      <td>13º</td>
      <td>Magias (4º círculo), poder de arcanista</td>
    </tr>
    <tr>
      <td>14º</td>
      <td>Poder de arcanista</td>
    </tr>
    <tr>
      <td>15º</td>
      <td>Poder de arcanista</td>
    </tr>
    <tr>
      <td>16º</td>
      <td>Poder de arcanista</td>
    </tr>
    <tr>
      <td>17º</td>
      <td>Magias (5º círculo), poder de arcanista</td>
    </tr>
    <tr>
      <td>18º</td>
      <td>Poder de arcanista</td>
    </tr>
    <tr>
      <td>19º</td>
      <td>Poder de arcanista</td>
    </tr>
    <tr>
      <td>20º</td>
      <td>Alta arcana, poder de arcanista</td>
    </tr>
  </tbody>
</table>
`,
        ha_informacoes_adicionais: true,
        ha_poderes_db: true,
        ha_complicacoes: true,
        descricao_informacoes: `<h5>Linhagens Sobrenaturais</h5>
        <p>O poder de um feiticeiro vem de seu sangue — mais precisamente, do sangue de um antepassado sobrenatural, como um dragão ou uma fada. Além da capacidade de lançar magias, o feiticeiro herda desse antepassado uma fração de seu poder natural, que ele pode desenvolver ao longo de sua vida. Ao escolher o caminho do feiticeiro, escolha uma linhagem da lista a seguir. Você recebe a herança básica de sua linhagem e pode desenvolver as demais através de poderes de arcanista.</p>

        <p><b>Linhagem Dracônica</b></p>
        <p>Um de seus antepassados foi um majestoso dragão. Escolha um tipo de dano entre ácido, eletricidade, fogo ou frio.</p>
        <ul>
        <li><b>Básica.</b> Você soma seu Carisma em seus pontos de vida iniciais e recebe redução de dano 5 ao tipo escolhido.</li>
        <li><b>Aprimorada.</b> Suas magias do tipo escolhido custam –1 PM e causam +1 ponto de dano por dado.</li>
        <li><b>Superior.</b> Você passa a somar o dobro do seu Carisma em seus pontos de vida iniciais e se torna imune a dano do tipo escolhido. Além disso, sempre que reduz um ou mais inimigos a 0 PV ou menos com uma magia do tipo escolhido, você recebe uma quantidade de PM temporários igual ao círculo da magia.</li>
        </ul>

        <p><b>Linhagem Feérica</b></p>
        <p>Seu sangue foi tocado pelas fadas.</p>
        <ul>
        <li><b>Básica.</b> Você se torna treinado em Enganação e aprende uma magia de 1º círculo de encantamento ou ilusão, arcana ou divina, a sua escolha.</li>
        <li><b>Aprimorada.</b> A CD para resistir a suas magias de encantamento e ilusão aumenta em +2 e suas magias dessas escolas custam –1 PM.</li>
        <li><b>Superior.</b> Você recebe +2 em Carisma. Se uma criatura passar no teste de resistência contra uma magia de encantamento ou ilusão lançada por você, você fica alquebrado até o final da cena.</li>
        </ul>

        <p><b>Linhagem Rubra</b></p>
        <p>Seu sangue foi corrompido pela Tormenta.</p>
        <ul>
        <li><b>Básica.</b> Você recebe um poder da Tormenta. Além disso, pode perder outro atributo em vez de Carisma por poderes da Tormenta.</li>
        <li><b>Aprimorada.</b> Escolha uma magia para cada poder da Tormenta que você possui. Essas magias custam –1 PM. Sempre que recebe um novo 
        poder da Tormenta, você pode escolher uma nova magia. Esta herança 
        conta como um poder da Tormenta (exceto para perda de Carisma).</li>
        <li><b>Superior.</b> Você recebe +4 PM para cada poder da Tormenta que tiver. Esta herança conta como um poder da Tormenta (exceto para perda de Carisma).</li>
        </ul>

        <p><b>Linhagem Rubra</b></p>
        <p>Seu sangue foi corrompido pela Tormenta.</p>
        <ul>
        <li><b>Básica.</b> Você recebe um poder da Tormenta. Além disso, pode perder outro atributo em vez de Carisma por poderes da Tormenta.</li>
        <li><b>Aprimorada.</b> Escolha uma magia para cada poder da Tormenta que você possui. Essas magias custam –1 PM. Sempre que recebe um novo 
        poder da Tormenta, você pode escolher uma nova magia. Esta herança 
        conta como um poder da Tormenta (exceto para perda de Carisma).</li>
        <li><b>Superior.</b> Você recebe +4 PM para cada poder da Tormenta que tiver. Esta herança conta como um poder da Tormenta (exceto para perda de Carisma).</li>
        </ul>

        <p><b>Linhagem Abençoada</b></p>
        <p>É consenso que devotos têm pactos sagrados com seus deuses. Recebem poderes miraculosos em troca de servir a seus objetivos com grande esforço e dedicação. Certos indivíduos, contudo, parecem violar essa regra suprema. São contemplados com dons divinos, sem a necessidade de praticar nenhuma devoção. Já nascem com a centelha divina em seu sangue.</p>
        <ul>
        <li><b>Básica.</b> Escolha um deus maior. Uma vez feita, esta escolha não pode ser mudada. Você recebe um poder concedido do deus escolhido, sem precisar ser devoto dele (mas você ainda pode ser devoto desse ou de outro deus) e pode aprender magias divinas de 1º círculo como se fossem arcanas.</li>
        <li><b>Aprimorada.</b> Suas magias divinas de círculo igual ou menor que sua Sabedoria custam –1 PM e você pode aprender magias divinas de 2º e 3º círculo como se fossem arcanas.</li>
        <li><b>Superior.</b> Você recebe +1 em Sabedoria e aprende uma magia divina de cada círculo igual ou menor que sua Sabedoria. A cada dia, após descansar, você pode trocar essas magias por outras magias divinas dos mesmos círculos. Por fim, pode aprender magias divinas de 4º e 5º círculo como se fossem arcanas.</li>
        </ul>

        <hr>

        <h5>Anulando Magias</h5>
        <p>Você pode anular uma magia conjurada por outra pessoa, fazendo uma contramágica. Para isso, use a ação preparar para agir quando uma criatura lançar uma magia. Nesse instante, você deve lançar uma magia que possa anular a magia original.</p>
        <p>Normalmente, uma magia só pode ser anulada por outra igual — se um inimigo lança Bola de Fogo, você deve lançar outra Bola de Fogo para anulá-la. Mas algumas magias podem anular outras: por exemplo, Luz anula Escuridão (e vice-versa). Em caso de dúvida, cabe ao mestre julgar se uma magia anula outra. Como regra geral, uma magia nunca pode anular outra de círculo maior.</p>
        <p>Dissipar Magia é uma exceção — pode ser usada para anular qualquer magia (mesmo de círculos maiores), mas você deve fazer um teste de Misticismo oposto por Misticismo ou Vontade de quem está lançando a magia (o que for maior). Se você vencer, seu Dissipar Magia funciona como contramágica.</p>
        <p>Tanto a magia anulada quanto a usada como contramágica encerram-se instantaneamente.</p>

        <hr>

        <h5>Familiares Arcanos</h5>
        <p>Um familiar é uma criatura mágica. Em termos de jogo, é um parceiro especial com o qual você pode se comunicar telepaticamente em alcance longo. Ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de sua espécie pode fazer. Se ele morrer, você fica atordoado por uma rodada. Você pode invocar um novo familiar com um ritual que exige um dia e T$ 100 em ingredientes.</p>
        <ul>
        <li><b>Borboleta.</b> A CD dos testes de Vontade para resistir a suas magias aumenta em +1.</li>
        <li><b>Cobra.</b> A CD dos testes de Fortitude para resistir a suas magias aumenta em +1.</li>
        <li><b>Coruja.</b> Quando lança uma magia com alcance de toque, você pode pagar 1 PM para aumentar seu alcance para curto.</li>
        <li><b>Corvo.</b> Quando faz um teste de Misticismo ou Vontade, você pode pagar 1 PM para rolar dois dados e usar o melhor resultado.</li>
        <li><b>Falcão.</b> Você não pode ser surpreendido e nunca fica desprevenido.</li>
        <li><b>Gato.</b> Você recebe visão no escuro e +2 em Furtividade.</li>
        <li><b>Lagarto.</b> A CD dos testes de Reflexos para resistir a suas magias aumenta em +1.</li>
        <li><b>Morcego.</b> Você adquire percepção às cegas em alcance curto.</li>
        <li><b>Rato.</b> Você pode usar seu atributo-chave em Fortitude, no lugar de Constituição.</li>
        <li><b>Sapo.</b> Você soma seu atributo-chave ao seu total de pontos de vida (cumulativo).</li>
        `,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Diplomacia',
          'Enganação',
          'Guerra',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/classe_arcanista.png',
        tabela: 'assets/img/tabela_classe_arcanista.png',
        referencias: Referencia.BASICO,
        paginas: '36, 37, 38 e 39',
      },
      {
        id: 2,
        nome: 'Bárbaro',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um bárbaro começa com 24 pontos de vida + Constituição e ganha 6 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 3 PM por nível.</p>
        <p><b>Perícias.</b>  Fortitude (Con) e Luta (For), mais 4 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Iniciativa (Des), Intimidação (Car), Ofício (Int), Percepção (Sab), Pontaria (Des), Sobrevivência (Sab) e Vontade (Sab).</p>
        <p><b>Proficiências.</b> Armas marciais e escudos.</p>
        
        <!-- Imagem de referência -->

<table border="1" cellpadding="4" cellspacing="0">
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Fúria +2</td></tr>
    <tr><td>2º</td><td>Poder de bárbaro</td></tr>
    <tr><td>3º</td><td>Instinto selvagem +1, poder de bárbaro</td></tr>
    <tr><td>4º</td><td>Poder de bárbaro</td></tr>
    <tr><td>5º</td><td>Poder de bárbaro, redução de dano 2</td></tr>
    <tr><td>6º</td><td>Fúria +3, poder de bárbaro</td></tr>
    <tr><td>7º</td><td>Poder de bárbaro</td></tr>
    <tr><td>8º</td><td>Poder de bárbaro, redução de dano 4</td></tr>
    <tr><td>9º</td><td>Instinto selvagem +2, poder de bárbaro</td></tr>
    <tr><td>10º</td><td>Poder de bárbaro</td></tr>
    <tr><td>11º</td><td>Fúria +4, poder de bárbaro, redução de dano 6</td></tr>
    <tr><td>12º</td><td>Poder de bárbaro</td></tr>
    <tr><td>13º</td><td>Poder de bárbaro</td></tr>
    <tr><td>14º</td><td>Poder de bárbaro, redução de dano 8</td></tr>
    <tr><td>15º</td><td>Instinto selvagem +3, poder de bárbaro</td></tr>
    <tr><td>16º</td><td>Fúria +5, poder de bárbaro</td></tr>
    <tr><td>17º</td><td>Poder de bárbaro, redução de dano 10</td></tr>
    <tr><td>18º</td><td>Poder de bárbaro</td></tr>
    <tr><td>19º</td><td>Poder de bárbaro</td></tr>
    <tr><td>20º</td><td>Fúria titânica, poder de bárbaro</td></tr>
  </tbody>
</table>

        `,
        ha_informacoes_adicionais: true,
        ha_poderes_db: true,
        ha_complicacoes: true,
        descricao_informacoes: `<h5>Animais Totêmicos</h5>
        <p>A seguir está uma lista de animais venerados por tribos bárbaras de Arton.</p>
        <ul>
        <li><b>Coruja.</b> A sábia coruja guia seus discípulos. Você pode lançar Orientação.</li>
        <li><b>Corvo.</b> Um seguidor do corvo enxerga além do véu. Você pode lançar Visão Mística.</li>
        <li><b>Falcão.</b> Sempre atento, o falcão permite que você lance Detectar Ameaças.</li>
        <li><b>Grifo.</b> O mais veloz dos animais, o grifo permite que você lance Primor Atlético.</li>
        <li><b>Lobo.</b> O lobo é feroz e letal. Você pode lançar Concentração de Combate.</li>
        <li><b>Raposa.</b> A sagaz raposa nunca está onde se espera. Você pode lançar Imagem Espelhada.</li>
        <li><b>Tartaruga.</b> A tartaruga protege os seus. Você pode lançar Armadura Arcana.</li>
        <li><b>Urso.</b> O vigoroso urso permite que você lance Vitalidade Fantasma e possa usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um druida de seu nível.</li>
        <li><b>Dragão.</b> Dragões não são animais, mas algumas tribos bárbaras veneram dragões e os adotam como seu totem. Isso os torna uma opção para animal totêmico. Implacável, o dragão permite que seus bárbaros lancem Arma Mágica. <b>(Dragão Brasil 200, Pag. 71)</b></li>
        <li><b>Texugo.</b> O corajoso texugo permite que você lance Arma Espiritual. A arma se manifesta como um texugo espectral que causa dano de perfuração com sua mordida. <b>(Dragão Brasil 208, Pag. 56)</b></li>
        </ul>
        <hr>
        <h5>Poderes de Brado</h5>
        <p>Alguns poderes do bárbaro são poderes de brado. Esses poderes compartilham as seguintes regras.</p>
        <ul>
        <li>Emitir um brado gasta uma ação de movimento e 1 PM, a menos que a descrição diga o contrário.</li>
        <li>Brados têm alcance curto.</li>
        </ul>
        <p>A critério do mestre, habilidades raciais baseadas em gritos, como o Rugido Imponente do moreau do leão (Ameaças de Arton, p. 305), podem ser consideradas poderes de brado para um bárbaro.</p>`,
        fator_vida: 6,
        fator_mana: 3,
        proficiencias: [
          Proficiencia.ARMAS_SIMPLES,
          Proficiencia.ARMADURAS_LEVES,
          Proficiencia.ARMAS_MARCIAIS,
          Proficiencia.ESCUDOS,
        ],
        pericia_obrigatoria: 'Luta',
        pericia_escolha_entre_duas: ['Fortitude'],
        pericias_escolha_grupo: [
          'Adestramento',
          'Atletismo',
          'Cavalgar',
          'Iniciativa',
          'Intimidação',
          'Ofício',
          'Percepção',
          'Pontaria',
          'Sobrevivência',
          'Vontade',
        ],
        numero_pericias_escolha_grupo: 4,
        imagem: 'assets/img/classe_barbaro.png',
        tabela: 'assets/img/tabela_classe_barbaro.png',
        referencias: Referencia.BASICO,
        paginas: '40, 41 e 42',
      },
      {
        id: 3,
        nome: 'Bardo',
        descricao_classe: `
        <h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um bardo começa com 12 pontos de vida + Constituição e ganha 3 PV + Con por nível.</p>
        <p><b>Pontos de Mana.</b> 4 PM por nível.</p>
        <p><b>Perícias.</b>   Atuação (Car) e Reflexos (Des) mais 6 a sua escolha entre Acrobacia (Des), Cavalgar (Des), Conhecimento  (Int),  Diplomacia  (Car),  Enganação (Car), Furtividade (Des), Iniciativa (Des), Intuição (Sab), Investigação (Int), Jogatina (Car), Ladinagem (Des), Luta (For), Misticismo (Int), Nobreza (Int), Percepção (Sab), Pontaria (Des) e Vontade (Sab).</p>
        <p><b>Proficiências.</b> Armas marciais.</p>
        
<table border="1" cellpadding="4" cellspacing="0">
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Inspiração +1, magias (1º círculo)</td></tr>
    <tr><td>2º</td><td>Poder de bardo, eclético</td></tr>
    <tr><td>3º</td><td>Poder de bardo</td></tr>
    <tr><td>4º</td><td>Poder de bardo</td></tr>
    <tr><td>5º</td><td>Inspiração +2, poder de bardo</td></tr>
    <tr><td>6º</td><td>Magias (2º círculo), poder de bardo</td></tr>
    <tr><td>7º</td><td>Poder de bardo</td></tr>
    <tr><td>8º</td><td>Poder de bardo</td></tr>
    <tr><td>9º</td><td>Inspiração +3, poder de bardo</td></tr>
    <tr><td>10º</td><td>Magias (3º círculo), poder de bardo</td></tr>
    <tr><td>11º</td><td>Poder de bardo</td></tr>
    <tr><td>12º</td><td>Poder de bardo</td></tr>
    <tr><td>13º</td><td>Inspiração +4, poder de bardo</td></tr>
    <tr><td>14º</td><td>Magias (4º círculo), poder de bardo</td></tr>
    <tr><td>15º</td><td>Poder de bardo</td></tr>
    <tr><td>16º</td><td>Poder de bardo</td></tr>
    <tr><td>17º</td><td>Inspiração +5, poder de bardo</td></tr>
    <tr><td>18º</td><td>Poder de bardo</td></tr>
    <tr><td>19º</td><td>Poder de bardo</td></tr>
    <tr><td>20º</td><td>Artista completo, poder de bardo</td></tr>
  </tbody>
</table>

        `,
        ha_informacoes_adicionais: true,
        ha_poderes_db: true,
        ha_complicacoes: true,
        descricao_informacoes: `
        <div class="row">
        <div class="col-sm-12 text-justify">
        <h5>Músicas de Bardo</h5>
        <p>Alguns poderes do bardo são Músicas. Esses poderes compartilham as seguintes regras.</p>
        <ul>
        <li>Para ativar uma música, você precisa ser treinado em Atuação e empunhar um instrumento musical.</li>
        <li>Ativar uma música gasta uma ação padrão e 1 PM.</li>
        <li>Efeitos de músicas têm alcance curto.</li>
        </ul>
        <hr>
        <h5>Performances</h5>
        <p>Alguns poderes de bardo são Performances. Esses poderes compartilham as seguintes regras.</p>
        <ul>
            <li>Usar uma performance gasta uma ação de movimento e exige um teste de Atuação (CD 15 + 5 para cada performance usada anteriormente na mesma cena) usando um instrumento musical.</li>
            <li> Uma performance tem o mesmo alcance de sua Inspiração e afeta todos os aliados sob efeito de sua Inspiração.</li>
        </ul>
        </div>
        </div>`,
        fator_vida: 3,
        fator_mana: 4,
        proficiencias: [Proficiencia.ARMAS_SIMPLES, Proficiencia.ARMADURAS_LEVES, Proficiencia.ARMAS_MARCIAIS],
        pericia_obrigatoria: 'Reflexos',
        pericia_escolha_entre_duas: ['Atuação'],
        pericias_escolha_grupo: [
          'Acrobacia',
          'Cavalgar',
          'Conhecimento',
          'Diplomacia',
          'Enganação',
          'Furtividade',
          'Iniciativa',
          'Intuição',
          'Investigação',
          'Jogatina',
          'Ladinagem',
          'Luta',
          'Misticismo',
          'Nobreza',
          'Percepção',
          'Pontaria',
          'Vontade',
        ],
        numero_pericias_escolha_grupo: 6,
        imagem: 'assets/img/classe_bardo.png',
        tabela: 'assets/img/tabela_classe_bardo.png',
        referencias: Referencia.BASICO,
        paginas: '43, 44 e 45',
      },
      {
        id: 4,
        nome: 'Bucaneiro',
        descricao_classe: `
        <h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um bucaneiro começa com 16 pontos de vida + Constituição e ganha 4 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 3 PM por nível.</p>
        <p><b>Perícias.</b>   Luta (For) ou Pontaria (Des), Reflexos (Des), mais 4 a sua escolha entre Acrobacia (Des), Atletismo (For), Atuação (Car), Enganação (Car), Fortitude (Con), Furtividade (Des), Iniciativa (Des), Intimidação (Car), Jogatina (Car), Luta (For), Ofício  (Int),  Percepção  (Sab),  Pilotagem  (Des)  e Pontaria (Des).</p>
        <p><b>Proficiências.</b> Armas marciais.</p>

<table border="1" cellpadding="4" cellspacing="0">
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Audácia, insolência</td></tr>
    <tr><td>2º</td><td>Evasão, poder de bucaneiro</td></tr>
    <tr><td>3º</td><td>Esquiva sagaz +1, poder de bucaneiro</td></tr>
    <tr><td>4º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>5º</td><td>Panache, poder de bucaneiro</td></tr>
    <tr><td>6º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>7º</td><td>Esquiva sagaz +2, poder de bucaneiro</td></tr>
    <tr><td>8º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>9º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>10º</td><td>Evasão aprimorada, poder de bucaneiro</td></tr>
    <tr><td>11º</td><td>Esquiva sagaz +3, poder de bucaneiro</td></tr>
    <tr><td>12º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>13º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>14º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>15º</td><td>Esquiva sagaz +4, poder de bucaneiro</td></tr>
    <tr><td>16º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>17º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>18º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>19º</td><td>Esquiva sagaz +5, poder de bucaneiro</td></tr>
    <tr><td>20º</td><td>Poder de bucaneiro, sorte de Nimb</td></tr>
  </tbody>
</table>

        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: true,
        ha_complicacoes: true,
        descricao_informacoes: `
        <div class="row">
        <div class="col-sm-12 text-justify">
        <h5>Bravatas</h5>
        <p>Audazes e imprudentes, bucaneiros têm o costume da bravata — a promessa pública de realizar uma façanha, às vezes atrelada a uma restrição, como “Navegarei até Galrasia com um barco furado!”. Todas as Bravatas compartilham as seguintes regras.</p>
        <ul>
        <li>Uma Bravata deve envolver um desafio real. Em termos de jogo, deve ser uma ação com ND igual ou maior que o nível do bucaneiro.</li>
        <li>Você só pode ter uma Bravata de cada tipo ativa por vez. Caso falhe em uma Bravata ou desista dela, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia.</li>
        <li>Quando você cumpre uma Bravata, recebe um benefício que dura até o fim da aventura. De acordo com o mestre, caso isso aconteça perto do fim da aventura, o benefício pode se estender até a próxima.</li>
        </div>
        </div>`,
        fator_vida: 4,
        fator_mana: 3,
        proficiencias: [Proficiencia.ARMAS_SIMPLES, Proficiencia.ARMADURAS_LEVES, Proficiencia.ARMAS_MARCIAIS],
        pericia_obrigatoria: 'Reflexos',
        pericia_escolha_entre_duas: ['Luta', 'Pontaria'],
        pericias_escolha_grupo: [
          'Acrobacia',
          'Atletismo',
          'Atuação',
          'Enganação',
          'Fortitude',
          'Furtividade',
          'Iniciativa',
          'Intimidação',
          'Jogatina',
          'Luta',
          'Ofício',
          'Percepção',
          'Pilotagem',
          'Pontaria',
        ],
        numero_pericias_escolha_grupo: 4,
        imagem: 'assets/img/classe_bucaneiro.png',
        tabela: 'assets/img/tabela_classe_bucaneiro.png',
        referencias: Referencia.BASICO,
        paginas: '46, 47 e 48',
      },
      {
        id: 5,
        nome: 'Caçador',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>   Um caçador começa com 16 pontos de vida + Constituição e ganha 4 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 4 PM por nível.</p>
        <p><b>Perícias.</b> Luta (For) ou Pontaria (Des), Sobrevivência (Sab), mais 6 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Cura (Sab), Fortitude (Con), Furtividade (Des), Iniciativa (Des), Investigação (Int), Luta (For), Ofício (Int), Percepção (Sab), Pontaria (Des) e Reflexos (Des).</p>
        <p><b>Proficiências.</b>  Armas marciais e escudos.</p>
        
<table border="1" cellpadding="4" cellspacing="0">
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Marca da presa +1d4, rastreador</td></tr>
    <tr><td>2º</td><td>Poder de caçador</td></tr>
    <tr><td>3º</td><td>Explorador, poder de caçador</td></tr>
    <tr><td>4º</td><td>Poder de caçador</td></tr>
    <tr><td>5º</td><td>Caminho do explorador, marca da presa +1d8, poder de caçador</td></tr>
    <tr><td>6º</td><td>Poder de caçador</td></tr>
    <tr><td>7º</td><td>Explorador, poder de caçador</td></tr>
    <tr><td>8º</td><td>Poder de caçador</td></tr>
    <tr><td>9º</td><td>Marca da presa +1d12, poder de caçador</td></tr>
    <tr><td>10º</td><td>Poder de caçador</td></tr>
    <tr><td>11º</td><td>Explorador, poder de caçador</td></tr>
    <tr><td>12º</td><td>Poder de caçador</td></tr>
    <tr><td>13º</td><td>Marca da presa +2d8, poder de caçador</td></tr>
    <tr><td>14º</td><td>Poder de caçador</td></tr>
    <tr><td>15º</td><td>Explorador, poder de caçador</td></tr>
    <tr><td>16º</td><td>Poder de caçador</td></tr>
    <tr><td>17º</td><td>Marca da presa +2d10, poder de caçador</td></tr>
    <tr><td>18º</td><td>Poder de caçador</td></tr>
    <tr><td>19º</td><td>Explorador, poder de caçador</td></tr>
    <tr><td>20º</td><td>Mestre caçador, poder de caçador</td></tr>
  </tbody>
</table>

        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: true,
        ha_complicacoes: true,
        descricao_informacoes: `
        <div class="row">
        <h5>Armadilhas</h5>
        <p>Alguns poderes do caçador são Armadilhas. Esses poderes compartilham as seguintes regras.</p>
        <ul>
        <li>Preparar uma armadilha gasta uma ação completa e 3 PM.</li>
        <li>Uma armadilha afeta uma área de 3m.</li>
        de lado adjacente a você e é acionada pela primeira criatura que entrar na área.
        <li>Uma criatura que o veja preparando a armadilha saberá que ela está lá. Uma 
        criatura que não o veja preparando a armadilha pode encontrá-la se gastar uma 
        ação padrão procurando e passar em um teste de Investigação (CD Sab).</li>
        <li>É possível aplicar veneno a uma armadilha, como se ela fosse uma arma. Você não precisa de nenhum item para criar a armadilha, pois usa materiais naturais, 
        como galhos e cipós. Porém, precisa estar em um ambiente propício, como uma 
        floresta, um beco repleto de entulhos etc.</li>
        </ul>

        <hr>

        <h5>Companheiro Animal</h5>
        <p>Um companheiro animal é um amigo valoroso e fiel. Você decide de qual espécie 
        é seu companheiro. Vocês têm um vínculo mental, sendo capazes de entender um ao outro. Seu companheiro animal obedece a você, mesmo que isso arrisque a vida dele.</p>
        <p>Em termos de jogo, seu companheiro animal é um parceiro ajudante, assassino, atirador, combatente, fortão, guardião, perseguidor, ou uma montaria, do nível iniciante. No 7º nível ele muda para veterano e, no 15º nível, para mestre (se 
        tiver mais de um tipo, todos mudam de nível). Se o companheiro animal morrer, 
        você fica atordoado por uma rodada. Você pode invocar um novo companheiro após 
        um dia inteiro de prece e meditação.</p>
        <p>A seguir, alguns exemplos de animais (mas você é livre para escolher outros). Veja a página 260 para as regras de parceiros.</p>
        <ul>
        <li>Ajudante. Corvo, macaco, raposa, serpente ou outro animal ágil ou esperto.</li>
        <li>Assassino. Lince, onça ou outro animal treinado para abater presas.</li>
        <li>Atirador. Águia, falcão ou outro animal capaz de mergulhar rapidamente nos alvos de seus ataques à distância. </li>
        <li>Fortão. Crocodilo, javali, leão, lobo ou outro animal capaz de lutar ao seu lado.</li>
        <li>Guardião. Alce, cão, coruja, tartaruga, urso ou outro animal pesado ou atento.</li>
        <li>Perseguidor. Gambá, sabujo ou outro animal farejador.</li>
        </ul>
        </div>`,
        fator_vida: 4,
        fator_mana: 4,
        proficiencias: [
          Proficiencia.ARMAS_SIMPLES,
          Proficiencia.ARMADURAS_LEVES,
          Proficiencia.ARMAS_MARCIAIS,
          Proficiencia.ESCUDOS,
        ],
        pericia_obrigatoria: 'Sobrevivência',
        pericia_escolha_entre_duas: ['Luta', 'Pontaria'],
        pericias_escolha_grupo: [
          'Adestramento',
          'Atletismo',
          'Cavalgar',
          'Cura',
          'Fortitude',
          'Furtividade',
          'Iniciativa',
          'Investigação',
          'Luta',
          'Ofício',
          'Percepção',
          'Pontaria',
          'Reflexos',
        ],
        numero_pericias_escolha_grupo: 6,
        imagem: 'assets/img/classe_cacador.png',
        tabela: 'assets/img/tabela_classe_cacador.png',
        referencias: Referencia.BASICO,
        paginas: '49, 50 e 51',
      },
      {
        id: 6,
        nome: 'Cavaleiro',
        descricao_classe: `
        <h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um cavaleiro começa com 20 pontos de vida + Constituição e ganha 5 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 3 PM por nível.</p>
        <p><b>Perícias.</b>  Fortitude (Con) e Luta (For), mais 2 a sua escolha entre Adestramento (Car), Atletismo (For),  Cavalgar  (Des),  Diplomacia  (Car),  Guerra (Int), Iniciativa (Des), Intimidação (Car), Nobreza (Int), Percepção (Sab) e Vontade (Sab).</p>
        <p><b>Proficiências.</b>  Armas marciais, armaduras pesadas e escudos.</p>
        
<table border="1" cellpadding="4" cellspacing="0">
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Baluarte +2, código de honra</td></tr>
    <tr><td>2º</td><td>Duelo +2, poder de cavaleiro</td></tr>
    <tr><td>3º</td><td>Poder de cavaleiro</td></tr>
    <tr><td>4º</td><td>Poder de cavaleiro</td></tr>
    <tr><td>5º</td><td>Caminho do cavaleiro, baluarte +4, poder de cavaleiro</td></tr>
    <tr><td>6º</td><td>Poder de cavaleiro</td></tr>
    <tr><td>7º</td><td>Baluarte (aliados adjacentes), duelo +3, poder de cavaleiro</td></tr>
    <tr><td>8º</td><td>Poder de cavaleiro</td></tr>
    <tr><td>9º</td><td>Baluarte +6, poder de cavaleiro</td></tr>
    <tr><td>10º</td><td>Poder de cavaleiro</td></tr>
    <tr><td>11º</td><td>Poder de cavaleiro, resoluto</td></tr>
    <tr><td>12º</td><td>Poder de cavaleiro</td></tr>
    <tr><td>13º</td><td>Duelo +4, poder de cavaleiro</td></tr>
    <tr><td>14º</td><td>Poder de cavaleiro</td></tr>
    <tr><td>15º</td><td>Baluarte (aliados em alcance curto), poder de cavaleiro</td></tr>
    <tr><td>16º</td><td>Poder de cavaleiro</td></tr>
    <tr><td>17º</td><td>Baluarte +10, duelo +5, poder de cavaleiro</td></tr>
    <tr><td>18º</td><td>Poder de cavaleiro</td></tr>
    <tr><td>19º</td><td>Poder de cavaleiro</td></tr>
    <tr><td>20º</td><td>Bravura final, poder de cavaleiro</td></tr>
  </tbody>
</table>


        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: true,
        ha_complicacoes: true,
        descricao_informacoes: `<div class="row">
        <h5>Posturas de Combate</h5>
        <p>Alguns poderes do cavaleiro são Posturas de Combate. Esses poderes compartilham as seguintes regras.</p>
        <ul>
        <li>Assumir uma postura gasta uma ação de movimento e 2 PM.</li>
        <li>Os efeitos de uma postura duram até o final da cena, a menos que sua descrição diga o contrário.</li>
        <li>Você só pode manter uma postura por vez.</li>
        </ul>
        </div>
        <hr>
        <h5>Poderes de Paixão</h5>
        <p>Paixões são aspectos da vida de um cavaleiro aos quais ele se entrega com dedicação total. São crenças tão importantes que, em nome delas, ele é capaz de se inspirar e sobrepujar quaisquer limitações. Contudo, se um cavaleiro é derrotado enquanto inspirado por sua paixão, a vergonha pode abalá-lo profundamente. Esses poderes compartilham as seguintes regras.</p>
        <ul>
        <li>Evocar uma Paixão é uma ação livre.</li>
        <li>Quando evoca uma paixão, você faz um teste de Carisma (CD 10 +2 por teste dessa Paixão na mesma aventura). Se passar, recebe o benefício da Paixão. Se falhar, não pode mais usá-la até o fim da aventura.</li>
        <li>Paixões que não têm um efeito instantâneo duram até o fim da cena.</li>
        <li>Sempre que rola um 20 natural em um teste de Paixão, ou obtém uma vitória significativa sob efeito da Paixão, você recebe um bônus permanente e cumulativo de +1 nos testes de atributo para ativá-la.</li>
        <li>Sempre que rola um 1 natural em um teste de Paixão, ou sofre uma falha significativa sob efeito da paixão, você recebe uma penalidade permanente e cumulativa de –1 nos testes de atributo para ativá-la.</li>
        </ul>
        <h5>Paixões e Resultados Significativos</h5>
        <p>Sempre que o cavaleiro evoca uma Paixão, está colocando à prova um sentimento que faz parte das fundações de sua alma. Nenhum cavaleiro que tenha uma Paixão ousa tratá-la como uma mera ferramenta, nem espera que o objeto de sua Paixão o defenda. Pelo contrário, ele está disposto a entregar a vida pelo objeto da Paixão.</p>
        <p>Assim, uma “vitória significativa” ao usar uma Paixão nunca se refere ao próprio cavaleiro. Para que uma vitória seja significativa, deve beneficiar diretamente o alvo da Paixão e não pode servir a interesses pessoais ou egoístas do cavaleiro. Por exemplo, uma cavaleira que tenha Paixão: Amor (sua esposa) pode obter uma vitória significativa ao salvá-la de um vilão, mas não ao derrotar esse mesmo vilão se ela não estiver sendo ameaçada por ele. Se a mesma cavaleira tiver Paixão: Lealdade (a Ordem da Luz), pode obter uma vitória significativa ao defender o Castelo da Luz contra uma invasão, mas não ao vencer os mesmos inimigos em uma circunstância na
        qual a Ordem não esteja ameaçada</p>
        <p>Da mesma forma, uma “falha significativa” é uma circunstância em que o cavaleiro não consegue proteger o alvo de sua Paixão e, por omissão ou incompetência, permite que ele seja prejudicado. A mesma cavaleira teria uma falha significativa se sua esposa fosse aprisionada e levada embora pelo vilão, ou se o Castelo da Luz fosse invadido.</p>
        <p>O mestre tem a palavra final sobre o que é uma vitória ou uma falha significativas no uso de uma Paixão. Como regra geral, o jogador deve se esforçar ao máximo para proteger e beneficiar o alvo da Paixão. Se negligenciá-la ou colocá-la em segundo lugar, atrás de coisas como sua própria segurança, uma recompensa ou o grupo de aventureiros, pode sofrer uma penalidade, como se tivesse rolado 1 natural em um teste de Paixão.</p>`,
        fator_vida: 5,
        fator_mana: 3,
        proficiencias: [
          Proficiencia.ARMAS_SIMPLES,
          Proficiencia.ARMADURAS_LEVES,
          Proficiencia.ARMADURAS_PESADAS,
          Proficiencia.ARMAS_MARCIAIS,
          Proficiencia.ESCUDOS,
        ],
        pericia_obrigatoria: 'Luta',
        pericia_escolha_entre_duas: ['Fortitude'],
        pericias_escolha_grupo: [
          'Adestramento',
          'Atletismo',
          'Cavalgar',
          'Diplomacia',
          'Guerra',
          'Iniciativa',
          'Intimidação',
          'Nobreza',
          'Percepção',
          'Vontade',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/classe_cavaleiro.png',
        tabela: 'assets/img/tabela_classe_cavaleiro.png',
        referencias: Referencia.BASICO,
        paginas: '52, 53, 54 e 55',
      },
      {
        id: 7,
        nome: 'Clérigo',
        descricao_classe: `
        <h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um clérigo começa com 16 pontos de vida + Constituição e ganha 4 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 5 PM por nível.</p>
        <p><b>Perícias.</b> Religião (Sab) e Vontade (Sab), mais 2  a  sua  escolha  entre  Conhecimento  (Int),  Cura (Sab), Diplomacia (Car), Fortitude (Con), Iniciativa (Des), Intuição (Sab), Luta (For), Misticismo (Int), Nobreza (Int), Ofício (Int) e Percepção (Sab).</p>
        <p><b>Proficiências.</b>  Armaduras pesadas e escudos.</p>

        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Devoto, magias (1º círculo)</td></tr>
    <tr><td>2º</td><td>Poder de clérigo</td></tr>
    <tr><td>3º</td><td>Poder de clérigo</td></tr>
    <tr><td>4º</td><td>Poder de clérigo</td></tr>
    <tr><td>5º</td><td>Magias (2º círculo), poder de clérigo</td></tr>
    <tr><td>6º</td><td>Poder de clérigo</td></tr>
    <tr><td>7º</td><td>Poder de clérigo</td></tr>
    <tr><td>8º</td><td>Poder de clérigo</td></tr>
    <tr><td>9º</td><td>Magias (3º círculo), poder de clérigo</td></tr>
    <tr><td>10º</td><td>Poder de clérigo</td></tr>
    <tr><td>11º</td><td>Poder de clérigo</td></tr>
    <tr><td>12º</td><td>Poder de clérigo</td></tr>
    <tr><td>13º</td><td>Magias (4º círculo), poder de clérigo</td></tr>
    <tr><td>14º</td><td>Poder de clérigo</td></tr>
    <tr><td>15º</td><td>Poder de clérigo</td></tr>
    <tr><td>16º</td><td>Poder de clérigo</td></tr>
    <tr><td>17º</td><td>Magias (5º círculo), poder de clérigo</td></tr>
    <tr><td>18º</td><td>Poder de clérigo</td></tr>
    <tr><td>19º</td><td>Poder de clérigo</td></tr>
    <tr><td>20º</td><td>Mão da divindade, poder de clérigo</td></tr>
  </tbody>
</table>

        
        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: true,
        descricao_informacoes: `<div class="row">
        <div class="col-sm-12 text-justify">
        <h5>Missas</h5>
        <p>Alguns poderes do clérigo são Missas. Esses poderes compartilham as seguintes regras.</p>
        <ul>
        <li>Rezar uma Missa exige uma hora e o gasto de materiais especiais (como velas, incensos, água benta...) no valor de T$ 25. Um mesmo celebrante pode aplicar mais de um poder de Missa na mesma celebração. Cada poder adicional aumenta o custo da Missa em T$ 25.</li>
        <li>Uma Missa afeta um número máximo de pessoas igual a 1 + sua Sabedoria. Todas as pessoas precisam estar presentes durante toda a Missa.</li>
        <li>Os efeitos de uma Missa duram um dia. Uma mesma criatura só pode receber os benefícios da mesma Missa uma vez por dia.</li>
        </ul>
        </div>
        </div>`,
        fator_vida: 4,
        fator_mana: 5,
        proficiencias: [
          Proficiencia.ARMAS_SIMPLES,
          Proficiencia.ARMADURAS_LEVES,
          Proficiencia.ARMAS_MARCIAIS,
          Proficiencia.ARMADURAS_PESADAS,
          Proficiencia.ESCUDOS,
        ],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Religião'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Fortitude',
          'Iniciativa',
          'Intuição',
          'Luta',
          'Misticismo',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/classe_clerigo.png',
        tabela: 'assets/img/tabela_classe_clerigo.png',
        referencias: Referencia.BASICO,
        paginas: '56, 57, 58 e 59',
      },
      {
        id: 8,
        nome: 'Druida',
        descricao_classe: `
        <h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b> Um druida começa com 16 pontos de vida + Constituição e ganha 4 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 4 PM por nível.</p>
        <p><b>Perícias.</b>  Sobrevivência (Sab) e Vontade (Sab), mais  4  a  sua  escolha  entre  Adestramento  (Car), Atletismo  (For),  Cavalgar  (Des),  Conhecimento (Int), Cura (Sab), Fortitude (Con), Iniciativa (Des), Intuição (Sab), Luta (For), Misticismo (Int), Ofício (Int), Percepção (Sab) e Religião (Sab).</p>
        <p><b>Proficiências.</b> Escudos.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Devoto, empatia selvagem, magias (1º círculo)</td></tr>
    <tr><td>2º</td><td>Caminho dos ermos, poder de druida</td></tr>
    <tr><td>3º</td><td>Poder de druida</td></tr>
    <tr><td>4º</td><td>Poder de druida</td></tr>
    <tr><td>5º</td><td>Poder de druida</td></tr>
    <tr><td>6º</td><td>Magias (2º círculo), poder de druida</td></tr>
    <tr><td>7º</td><td>Poder de druida</td></tr>
    <tr><td>8º</td><td>Poder de druida</td></tr>
    <tr><td>9º</td><td>Poder de druida</td></tr>
    <tr><td>10º</td><td>Magias (3º círculo), poder de druida</td></tr>
    <tr><td>11º</td><td>Poder de druida</td></tr>
    <tr><td>12º</td><td>Poder de druida</td></tr>
    <tr><td>13º</td><td>Poder de druida</td></tr>
    <tr><td>14º</td><td>Magias (4º círculo), poder de druida</td></tr>
    <tr><td>15º</td><td>Poder de druida</td></tr>
    <tr><td>16º</td><td>Poder de druida</td></tr>
    <tr><td>17º</td><td>Poder de druida</td></tr>
    <tr><td>18º</td><td>Poder de druida</td></tr>
    <tr><td>19º</td><td>Poder de druida</td></tr>
    <tr><td>20º</td><td>Força da natureza, poder de druida</td></tr>
  </tbody>
</table>


        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: true,
        ha_complicacoes: true,
        descricao_informacoes: `
        <div class="row">
        <div class="col-sm-12 text-justify">

        <h5>Companheiro Animal</h5>
        <p>Um companheiro animal é um amigo valoroso e fiel. Você decide de qual espécie 
        é seu companheiro. Vocês têm um vínculo mental, sendo capazes de entender um ao outro. Seu companheiro animal obedece a você, mesmo que isso arrisque a vida dele.</p>
        <p>Em termos de jogo, seu companheiro animal é um parceiro ajudante, assassino, atirador, combatente, fortão, guardião, perseguidor, ou uma montaria, do nível iniciante. No 7º nível ele muda para veterano e, no 15º nível, para mestre (se 
        tiver mais de um tipo, todos mudam de nível). Se o companheiro animal morrer, 
        você fica atordoado por uma rodada. Você pode invocar um novo companheiro após 
        um dia inteiro de prece e meditação.</p>
        <p>A seguir, alguns exemplos de animais (mas você é livre para escolher outros). Veja a página 260 para as regras de parceiros.</p>
        <ul>
        <li>Ajudante. Corvo, macaco, raposa, serpente ou outro animal ágil ou esperto.</li>
        <li>Assassino. Lince, onça ou outro animal treinado para abater presas.</li>
        <li>Atirador. Águia, falcão ou outro animal capaz de mergulhar rapidamente nos alvos de seus ataques à distância. </li>
        <li>Fortão. Crocodilo, javali, leão, lobo ou outro animal capaz de lutar ao seu lado.</li>
        <li>Guardião. Alce, cão, coruja, tartaruga, urso ou outro animal pesado ou atento.</li>
        <li>Perseguidor. Gambá, sabujo ou outro animal farejador.</li>
        </ul>
        <hr>
        <h5>Forma Selvagem</h5>
        <p>Você pode gastar uma ação completa e 3 PM para adquirir a forma de uma criatura selvagem. Em termos de jogo, quando usa esta habilidade você adquire os modificadores de uma das formas abaixo. Características não mencionadas não mudam.</p>
        <p>Na forma selvagem você não pode falar, empunhar itens ou lançar magias. Seu equipamento desaparece (mas você mantém os benefícios de quaisquer itens vestidos), ressurgindo quando você volta ao normal. Outras criaturas podem fazer um teste de Percepção oposto pelo seu teste de Enganação para perceber que você não é um animal comum (você recebe +10 neste teste). Cada transformação dura pelo tempo que você quiser, mas você reverte à forma normal se ficar inconsciente ou morrer.</p>

        <b>Forma Ágil</b>
        <p>Você recebe Destreza +2 e duas armas naturais que causam 1d6 pontos de dano e possuem margem de ameaça 19. Se atacar com ambas, sofre –2 em todos os testes de ataque até o seu próximo turno.</p>
        <ul>
        <li><i>Aprimorada.</i> Você recebe Destreza +4, deslocamento +3m e duas armas naturais (como acima, mas com dano de 1d8). Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</li>
        <li><i>Superior.</i> Você recebe Destreza +6, deslocamento +6m e duas armas naturais (como acima, mas com dano de 1d10). Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</li>
        </ul>

        <b>Forma Feroz</b>
        <p>Você recebe Força +3, +2 na Defesa e uma arma natural que causa 1d8 pontos de dano.</p>
        <ul>
        <li><i>Aprimorada.</i> Você  recebe  Força  +5,  +4  na Defesa e uma arma natural que causa 2d6 pontos de dano. Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</li>
        <li><i>Superior.</i> Você recebe Força +10, +6 na Defesa e uma arma natural que causa 4d6 pontos de dano. Seu tamanho muda para Enorme (–5 em Furtividade, +5 em testes de manobra).</li>
        </ul>

        <b>Forma Resistente</b>
        <p>Você recebe +5 na Defesa, redução de dano 5 e uma arma natural que causa 1d6 pontos de dano.</p>
        <ul>
        <li><i>Aprimorada.</i> Você recebe Força +3, +8 na Defesa, redução de dano 8 e uma arma natural que causa 1d8 pontos de dano. Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</li>
        <li><i>Superior.</i> Você recebe Força +5, +10 na Defesa, redução de dano 10 e uma arma natural que causa 2d6 pontos de dano. Seu tamanho muda para Enorme (–5 em Furtividade, +5 em testes de manobra).</li>
        </ul>

        <b>Forma Sorrateira</b>
        <p>Você recebe Destreza +2 e uma arma natural que causa 1d4 pontos de dano. Seu tamanho muda para Pequeno (+2 em Furtividade, –2 em testes de manobra).</p>
        <ul>
        <li><i>Aprimorada.</i> Você  recebe  Destreza  +4.  Seu tamanho muda para Minúsculo (+5 em Furtividade, –5 em testes de manobra).</li>
        <li><i>Superior.</i> Você recebe Destreza +6 e deslocamento de voo 18m. Seu tamanho muda para Minúsculo (+5 em Furtividade, –5 em testes de manobra).</li>
        </ul>

        <b>Forma Veloz</b>
        <p>Você recebe Destreza +2, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento 15m, deslocamento de escalada 9m ou deslocamento de natação 9m.</p>
        <ul>
        <li><i>Aprimorada.</i> Você recebe Destreza +4, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento 18m, deslocamento de escalada 12m ou deslocamento de natação 12m.</li>
        <li><i>Superior.</i> Você recebe Destreza +6, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento de natação 18m ou deslocamento de voo 24m.</li>
        </ul>

        <hr>

        <h5>NOVO TIPO DE PARCEIRO: ABERRANTE</h5>
        <b> (Dragão Brasil 204, Pag. 78)</b>
        <p>Uma criatura corrompida pela Tormenta, de aparência perturbadora. Apenas devotos de Aharadak podem ter esse tipo de parceiro.</p>
        <p>Uma vez por rodada, você pode gastar 1 PM para causar 2d6 pontos de dano psíquico ou causar a perda de 1d4 PM em uma criatura em alcance curto (este é um efeito mental).</p>
        <ul>
        <li><b>Veterano:</b> você também pode gastar 2 PM para causar 4d6 de dano ou perda de 1d6 PM.</li>
        <li><b>Mestre:</b> você também pode gastar 4 PM para causar 6d6 de dano ou perda de 1d8 PM.</li>
        </ul>

        <hr>

        <h5>Forma Elemental</h5>
        (Dragão Brasil 204, Pag. 83, 84 e 85)
        <p>O druida de Arton pode escolher substituir sua habilidade de Forma Selvagem por Forma Elemental. Uma vez escolhida, a troca é permanente.</p>
        <p>Esta habilidade funciona como Forma Selvagem (Tormenta20, p. 63) mas, em vez de um animal, você assume a forma de um elemental escolhido entre as opções a seguir no momento da transformação.</p>
        <p>Forma Elemental conta como Forma Selvagem para efeitos de pré-requisitos, itens e outras habilidades. Por exemplo Forma Selvagem Aprimorada também permite assumir a forma elemental aprimorada, e Magia Natural permite lançar magias enquanto estiver em Forma Elemental.</p>

        <b>Forma Aquosa</b>
        <p>Você recebe Força +2, deslocamento de natação 12m, imunidade a frio, vulnerabilidade a fogo e uma arma natural que ataca inimigos a até 3m, causa 1d8 pontos de dano de frio e é uma arma versátil (+2 em testes para desarmar e derrubar).</p>
        <ul>
        <li><i>Aprimorada.</i> Você recebe Força +4, deslocamento de natação 18m, imunidade a frio, vulnerabilidade a fogo e uma arma natural que ataca inimigos a até 6m, causa 1d10 pontos de dano de frio e é uma arma versátil (+4 em testes para desarmar e derrubar). Seu tamanho muda para Grande.</li>
        <li><i>Superior.</i> Você recebe Força +6, deslocamento de natação 24m, imunidade a frio, vulnerabilidade a fogo e uma arma natural que ataca inimigos a até 9m, causa 1d12 pontos de dano de frio e é uma arma versátil (+6 em testes para desarmar e derrubar). Seu tamanho muda para Grande.</li>
        </ul>

        <b>Forma Eólica</b>
        <p>Você recebe Destreza +2, deslocamento de voo 12m, imunidade a elétrico, vulnerabilidade a ácido e duas armas naturais à distância, que causam 1d6 pontos de dano de eletricidade com alcance curto. Se atacar com ambas, sofre –2 em todos os testes de ataque até seu próximo turno.</p>
        <ul>
        <li><i>Aprimorada.</i> Você recebe Destreza +4, deslocamento de voo 18m, imunidade a elétrico, vulnerabilidade a ácido e duas armas naturais à distância (como acima, mas dano Fofo? Sim,e
        letal também! de 1d8). Se atacar com ambas, sofre –2 em todos os testes de ataque até seu próximo turno. Seu tamanho muda para Grande.</li>
        <li><i>Superior.</i> Você recebe Destreza +6, deslocamento de voo 24m, imunidade a elétrico, vulnerabilidade a ácido e duas armas naturais à distância (como acima, mas dano de 1d10 e alcance médio). Se atacar com ambas, sofre –2 em todos os testes de ataque até seu próximo turno. Seu tamanho
        muda para Grande.</li>
        </ul>

        <b>Forma Ígnea</b>
        <p>Você recebe Destreza +2, imunidade a fogo, vulnerabilidade a frio e uma arma natural à distância, que causa 1d8 pontos de dano em alcance curto. Você pode gastar uma ação de movimento para concentrar as chamas; se fizer isso, seu próximo ataque atinge todas as criaturas em um cone de 6m (faça um ataque à distância e compare com a Defesa de cada criatura).</p>
        <ul>
        <li><i>Aprimorada.</i> Você recebe Destreza +4, imunidade a fogo, vulnerabilidade a frio e uma arma natural à distância, que causa 1d10 pontos de dano em alcance curto. Você pode gastar uma ação de movimento para concentrar as chamas; se fizer isso, seu próximo ataque atinge todas as criaturas
        em um cone de 6m (faça um ataque à distância e compare com a Defesa de cada criatura). Além disso, quando sofre dano por um ataque corpo a corpo adjacente, o atacante sofre 2d6 pontos de dano de fogo.
        Seu tamanho muda para Grande.</li>
        <li><i>Superior.</i> Você recebe Destreza +6, imunidade a fogo, vulnerabilidade a frio e uma arma natural à distância que causa 1d12 pontos de dano em alcance curto. Você pode gastar uma ação de movimento para concentrar as chamas. Se fizer isso, seu próximo ataque atinge todas as criaturas em um
        cone de 6m, faça um ataque à distância e compare com a Defesa de cada criatura. Além disso, quando sofre dano por um ataque corpo a corpo adjacente, o atacante sofre 4d6 pontos de dano de fogo. Seu tamanho muda para Grande.</li>
        </ul>

        <b>Forma Rochosa</b>
        <p>Você recebe Força +2, deslocamento de escalada 9m, imunidade a ácido, redução de corte, impacto e perfuração 5, vulnerabilidade a elétrico e uma arma natural à distância (1d6 pontos de dano de ácido
        em alcance curto). Você soma Força nos ataques com essa arma, e ela é afetada por poderes que afetam armas de arremesso (mas não de disparo).</p>
        <ul>
        <li><i>Aprimorada.</i> Você recebe Força +4, deslocamento de escalada 9m e escavação 3m, imunidade a ácido, redução de corte, impacto e perfuração 10, vulnerabilidade a elétrico e uma arma natural à distância (1d10 pontos de dano de ácido em alcance curto). Você soma Força nos ataques com essa arma e ela é afetada por poderes que afetam armas de arremesso (mas não de disparo). Seu tamanho muda para Grande.</li>
        <li><i>Superior.</i> Você recebe Força +6, deslocamento de escalada 12m e escavação 6m, imunidade a ácido, redução de corte, impacto e perfuração 20, vulnerabilidade a elétrico e uma arma natural à distância (3d6 pontos de dano de ácido em alcance curto). Você soma Força nos ataques com essa arma e ela é afetada por poderes que afetam armas de arremesso (mas não de disparo). Seu tamanho muda para Enorme.</li>
        </ul>

        </div>
        </div>`,
        fator_vida: 4,
        fator_mana: 4,
        proficiencias: [Proficiencia.ARMAS_SIMPLES, Proficiencia.ARMADURAS_LEVES, Proficiencia.ESCUDOS],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Sobrevivência'],
        pericias_escolha_grupo: [
          'Adestramento',
          'Atletismo',
          'Cavalgar',
          'Conhecimento',
          'Cura',
          'Fortitude',
          'Iniciativa',
          'Intuição',
          'Luta',
          'Misticismo',
          'Ofício',
          'Percepção',
          'Religião',
        ],
        numero_pericias_escolha_grupo: 4,
        imagem: 'assets/img/classe_druida.png',
        tabela: 'assets/img/tabela_classe_druida.png',
        referencias: Referencia.BASICO,
        paginas: '56, 57, 58 e 59',
      },
      {
        id: 9,
        nome: 'Guerreiro',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b> Um guerreiro começa com 20 pontos de vida + Constituição e ganha 5 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 3 PM por nível.</p>
        <p><b>Perícias.</b>. Luta (For) ou Pontaria (Des), Fortitude (Con), mais 2 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Guerra (Int), Iniciativa (Des), Intimidação (Car), Luta (For), Ofício (Int), Percepção (Sab), Pontaria (Des) e Reflexos (Des)</p>
        <p><b>Proficiências.</b> Armas marciais, armaduras pesadas e escudos.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Ataque especial +4</td></tr>
    <tr><td>2º</td><td>Poder de guerreiro</td></tr>
    <tr><td>3º</td><td>Durão, poder de guerreiro</td></tr>
    <tr><td>4º</td><td>Poder de guerreiro</td></tr>
    <tr><td>5º</td><td>Ataque especial +8, poder de guerreiro</td></tr>
    <tr><td>6º</td><td>Ataque extra, poder de guerreiro</td></tr>
    <tr><td>7º</td><td>Poder de guerreiro</td></tr>
    <tr><td>8º</td><td>Poder de guerreiro</td></tr>
    <tr><td>9º</td><td>Ataque especial +12, poder de guerreiro</td></tr>
    <tr><td>10º</td><td>Poder de guerreiro</td></tr>
    <tr><td>11º</td><td>Poder de guerreiro</td></tr>
    <tr><td>12º</td><td>Poder de guerreiro</td></tr>
    <tr><td>13º</td><td>Ataque especial +16, poder de guerreiro</td></tr>
    <tr><td>14º</td><td>Poder de guerreiro</td></tr>
    <tr><td>15º</td><td>Poder de guerreiro</td></tr>
    <tr><td>16º</td><td>Poder de guerreiro</td></tr>
    <tr><td>17º</td><td>Ataque especial +20, poder de guerreiro</td></tr>
    <tr><td>18º</td><td>Poder de guerreiro</td></tr>
    <tr><td>19º</td><td>Poder de guerreiro</td></tr>
    <tr><td>20º</td><td>Campeão, poder de guerreiro</td></tr>
  </tbody>
</table>


        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: true,
        descricao_informacoes: `<div class="row">
        <h5>Efeitos do Golpe Pessoal</h5>
        <p><b>Amplo (+3 PM).</b> Seu ataque atinge todas as criaturas em alcance curto (incluindo aliados, mas não você mesmo). Faça um único teste de ataque e compare com a Defesa de cada criatura. Atordoante (+2 PM). Uma criatura que sofra dano do ataque fica atordoada por uma rodada (apenas uma vez por cena; Fortitude CD For anula).</p> 
        <p><b>Brutal (+1 PM).</b> Fornece um dado extra de dano do mesmo tipo.
        <p><b>Conjurador (Custo da Magia + 1 PM).</b> Escolha uma magia de 1º ou 2º círculos que tenha como alvo uma criatura ou que afete uma área. Se acertar seu golpe, você lança a magia como uma ação livre, tendo como alvo a criatura atingida ou como centro de sua área o ponto atingido pelo ataque (atributo-chave é um mental a sua escolha). Considere que a mão da arma está livre para lançar esta magia. <i><b>e</b></i></p>
        <p><b>Destruidor (+2 PM).</b> Aumenta o multiplicador de crítico em +1.</p>
        <p><b>Distante (+1 PM).</b> Aumenta o alcance em um passo (de corpo a corpo para curto, médio e longo). Outras características não mudam (um ataque corpo a corpo com alcance curto continua usando Luta e somando sua Força no dano).</p>
        <p><b>Elemental (+2 PM).</b> Causa +2d6 pontos de dano de ácido, eletricidade, fogo ou frio. Você pode escolher este efeito mais vezes para aumentar o dano em +2d6 (do mesmo tipo ou de outro), por +2 PM a cada vez. <i><b>e</b></i></p>
        <p><b>Impactante (+1 PM).</b> Empurra o alvo 1,5m para cada 10 pontos de dano causado (arredondado para baixo). Por exemplo, 3m para 22 pontos de dano. Letal (+2 PM). Aumenta a margem de ameaça em +2. Você pode escolher este efeito duas vezes para aumentar a margem de ameaça em +5.</p>
        <p><b>Letal (+2 PM).</b> Aumenta a margem de ameaça em +2. Você pode escolher este efeito duas vezes para aumentar a margem de ameaça em +5</p>
        <p><b>Penetrante (+1 PM).</b> Ignora 10 pontos de RD.</p>
        <p><b>Preciso (+1 PM).</b> Quando faz o teste de ataque, você rola dois dados e usa o melhor resultado.</p>
        <p><b>Qualquer Arma (+1 PM).</b> Você pode usar seu Golpe Pessoal com qualquer tipo de arma. Ricocheteante (+1 PM). A arma volta pra você após o ataque. Só pode ser usado com armas de arremesso.</p>
        <p><b>Teleguiado (+1 PM).</b> Ignora penalidades por camuflagem ou cobertura leves.</p>
        <p><b>Lento (–2 PM).</b> Seu ataque exige uma ação completa para ser usado.</p>
        <p><b>Perto da Morte (–2 PM).</b> O ataque só pode ser usado se você estiver com um quarto de seus PV ou menos.</p>
        <p><b>Sacrifício (–2 PM).</b> Sempre que usa seu Golpe Pessoal, você perde 10 PV.</p>
        <p><b>Anunciado (–1 PM).</b> Você precisa gastar uma ação de movimento gritando o nome de seu golpe para usá-lo. Isso significa que não pode usá-lo furtivamente ou quando estiver impedido de falar, como amordaçado ou debaixo d’água. Uma vez que grite, deve usar o golpe até o fim de seu próximo turno. <b>(Dragão Brasil 159, Pag. 38)</b></p>
        <p><b>Desconcertante (+1 PM).</b> Uma criatura que sofra dano do ataque fica Vulnerável por uma rodada. <b>(Dragão Brasil 159, Pag. 38)</b></p>
        <p><b>Desgastante (–1 PM).</b> Você fica fatigado após usar o golpe. <b>(Dragão Brasil 159, Pag. 38)</b></p>
        <p><b>Paralisante (+2 PM).</b> Uma criatura que sofra dano do ataque fica Paralisada por uma rodada (Fortitude CD For anula). <b>(Dragão Brasil 159, Pag. 38)</b></p>

        <h5>Novos Efeitos de Golpe Pessoal</h5>
        <p><b>Avanço (+1 PM).</b> Você pode percorrer até o seu deslocamento em linha reta antes de desferir o golpe.</p>
        <p><b>Brando (+0 PM).</b> Seu golpe causa dano não letal.</p>
        <p><b>Carregado (+1 PM).</b> Você pode gastar uma ação padrão para energizar seu ataque. Se você fizer isso e atacar até a próxima rodada, seu ataque causa +2d8 pontos de dano.
        <p><b>Sequencial (+2 PM).</b> Seu golpe causa +1d6 pontos de dano. A cada vez que você acerta o golpe na mesma cena, esse bônus aumenta em um passo.</p>
        <p><b>Sifão (+2 PM).</b> Você recebe 1 PM temporário para cada 10 pontos da rolagem de dano. Você pode receber um máximo de PM temporários por cena igual ao seu nível e eles desaparecem no fim da cena.</p>
        <p><b>Golpe de Abertura (–2 PM).</b> Seu golpe só pode ser usado em seu primeiro turno do combate.</p>
        <p><b>Truque Secreto (–2 PM).</b> Seu golpe só pode ser usado uma vez contra cada alvo por cena.</p>
        <div>`,
        fator_vida: 5,
        fator_mana: 3,
        proficiencias: [
          Proficiencia.ARMAS_SIMPLES,
          Proficiencia.ARMADURAS_LEVES,
          Proficiencia.ARMAS_MARCIAIS,
          Proficiencia.ARMADURAS_PESADAS,
          Proficiencia.ESCUDOS,
        ],
        pericia_obrigatoria: 'Fortitude',
        pericia_escolha_entre_duas: ['Luta', 'Pontaria'],
        pericias_escolha_grupo: [
          'Adestramento',
          'Atletismo',
          'Cavalgar',
          'Guerra',
          'Iniciativa',
          'Intimidação',
          'Luta',
          'Ofício',
          'Percepção',
          'Pontaria',
          'Reflexos',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/classe_guerreiro.png',
        tabela: 'assets/img/tabela_classe_guerreiro.png',
        referencias: Referencia.BASICO,
        paginas: '64, 65 e 66',
      },
      {
        id: 10,
        nome: 'Inventor',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um inventor começa com 12 pontos de vida + Constituição e ganha 3 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 4 PM por nível.</p>
        <p><b>Perícias.</b>.  Ofício (Int) e Vontade (Sab), mais 4 a sua escolha entre Conhecimento (Int), Cura (Sab), Diplomacia (Car), Fortitude (Con), Iniciativa (Des), Investigação  (Int),  Luta  (For),  Misticismo  (Int), Ofício  (Int),  Pilotagem  (Des),  Percepção  (Sab)  e Pontaria (Des).</p>
        <p><b>Proficiências.</b> Armas marciais, armaduras pesadas e escudos.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Engenhosidade, protótipo</td></tr>
    <tr><td>2º</td><td>Fabricar item superior (1 melhoria), poder de inventor</td></tr>
    <tr><td>3º</td><td>Comerciante, poder de inventor</td></tr>
    <tr><td>4º</td><td>Poder de inventor</td></tr>
    <tr><td>5º</td><td>Fabricar item superior (2 melhorias), poder de inventor</td></tr>
    <tr><td>6º</td><td>Poder de inventor</td></tr>
    <tr><td>7º</td><td>Encontrar fraqueza, poder de inventor</td></tr>
    <tr><td>8º</td><td>Fabricar item superior (3 melhorias), poder de inventor</td></tr>
    <tr><td>9º</td><td>Fabricar item mágico (menor), poder de inventor</td></tr>
    <tr><td>10º</td><td>Olho do dragão, poder de inventor</td></tr>
    <tr><td>11º</td><td>Fabricar item superior (4 melhorias), poder de inventor</td></tr>
    <tr><td>12º</td><td>Poder de inventor</td></tr>
    <tr><td>13º</td><td>Fabricar item mágico (médio), poder de inventor</td></tr>
    <tr><td>14º</td><td>Poder de inventor</td></tr>
    <tr><td>15º</td><td>Poder de inventor</td></tr>
    <tr><td>16º</td><td>Poder de inventor</td></tr>
    <tr><td>17º</td><td>Fabricar item mágico (maior), poder de inventor</td></tr>
    <tr><td>18º</td><td>Poder de inventor</td></tr>
    <tr><td>19º</td><td>Poder de inventor</td></tr>
    <tr><td>20º</td><td>Obra-prima, poder de inventor</td></tr>
  </tbody>
</table>


        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: true,
        ha_complicacoes: true,
        descricao_informacoes: `<div class="row">
        <h5>Livro de Fórmulas</h5>
        <p>Quando adquire o poder Alquimista Iniciado, você recebe um livro de fórmulas. Uma “fórmula” é uma magia divina ou arcana (atributo-chave Inteligência) que serve para cumprir os pré-requisitos de fabricação de poções.</p>
        <p>Você começa com três fórmulas de 1º círculo. A cada nível além do 1º, aprende uma fórmula adicional. A partir do 6º nível, pode aprender fórmulas de 2º círculo e, se possuir o poder Mestre Alquimista, a cada quatro níveis (10º, 14º e 18º) pode aprender fórmulas de um círculo maior.</p>
        <p>Se não tiver seu livro de fórmulas, você não pode fabricar poções. Se perder seu livro, você pode preparar outro com uma semana de trabalho e o gasto de T$ 100.</p>
        <hr>
        <h5>Engenhocas</h5>
        <p>Uma engenhoca é uma invenção que simula o efeito de uma magia. Exemplos incluem um canhão (simula o efeito da magia <i>Bola de Fogo</i>), uma arma de raios (<i>Relâmpago</i>), um casaco blindado (<i>Armadura Arcana</i>), um emplastro curativo (<i>Curar Ferimentos</i>), um guarda-costas mecânico (<i>Conjurar Monstro</i>), um projetor de imagens (<i>Criar Ilusão</i>), um veículo a vapor (<i>Montaria Arcana</i>) etc.</p>
        <p>Uma engenhoca é um item mundano Minúsculo que ocupa 1 espaço e possui Defesa 15, pontos de vida iguais à metade dos PV de seu fabricante e RD 5. Quando é fabricada, escolha se ela será empunhada (precisa estar na sua mão para ser ativada) ou vestida (precisa estar vestida para ser ativada, conta para seu limite de itens vestidos). Ao ser ativada, uma engenhoca pode assumir outra forma. Por exemplo, uma engenhoca que simula Montaria Arcana pode ser uma caixinha de engrenagens que se desdobra na forma de uma moto de madeira. Suas estatísticas não mudam.</p>
        <p><b>Fabricação.</b> Para fabricar uma engenhoca, escolha uma magia arcana ou divina de 1º círculo. Essa será a magia que a engenhoca irá simular. A partir do 6º nível, você pode criar engenhocas com magias de 2º círculo e, a cada quatro níveis, pode criar engenhocas de um círculo maior.</p>
        <p>O custo de fabricação da engenhoca é T$ 100 x o custo em PM da magia que ela simula e a CD do teste é 20 + o custo em PM da magia. Assim, para fabricar uma engenhoca que simula o efeito de uma magia de 2º círculo (3 PM) você precisa gastar T$ 300 e passar em um teste de Ofício (engenhoqueiro) contra CD 23. O tempo de fabricação é uma semana</p>
        <p><i>Limite de Engenhocas.</i> Engenhocas são itens complexos e delicados, que exigem manutenção constante. O máximo de engenhocas que você pode ter ao mesmo tempo é igual a sua Inteligência.</p>
        <p><b>Ativação.</b> Apenas o fabricante de uma engenhoca pode ativá-la. Ativar uma engenhoca exige uma ação padrão (ou a execução da magia, o que for maior) e um teste de Ofício (engenhoqueiro) contra CD 15 + custo em PM da magia. Se você passar, a engenhoca gera o efeito da magia (atributo-chave Int). Se falhar, ela enguiça e não pode ser utilizada até ser consertada, o que exige uma hora de trabalho. Cada nova ativação da engenhoca no mesmo dia aumenta a CD do teste de Ofício em +5.</p>
        <p>Quando ativa uma engenhoca, você pode usar quaisquer aprimoramentos da magia que ela simula, até um custo igual a sua Inteligência. A CD para ativar a engenhoca aumenta em +1 por PM e você paga o custo em PM dos aprimoramentos.</p>
        <p>Se a engenhoca simula o efeito de uma magia com custo especial, esse custo deve ser pago a cada ativação. Para outros custos e limitações, o efeito gerado pela engenhoca funciona como uma magia. Por exemplo, para manter um efeito com duração sustentada gerado por uma engenhoca, o inventor deve pagar 1 PM no início de cada um de seus turnos. Da mesma forma, só pode manter um efeito sustentado de engenhoca por vez. Se a magia simulada exigir um teste de Misticismo, use Ofício (engenhoqueiro) em seu lugar.</p>
        <p><b>Efeito Mundano.</b> O efeito de uma engenhoca não é mágico. Isso significa que ele não pode ser dissipado, funciona em áreas de antimagia etc.</p>
        <p><b>Penalidade de Armadura.</b> A ativação de uma engenhoca exige movimentos rápidos e precisos. Por isso, o teste de Ofício (engenhoqueiro) para ativar engenhocas sofre penalidade de armadura. Porém, você pode ativar engenhocas que geram magias arcanas enquanto usa armadura sem precisar fazer testes de Misticismo.</p>
        <p><b>Efeitos que Impedem Conjuração.</b> Um efeito que especificamente impeça um personagem de lançar magias (como a Fúria de um bárbaro ou a magia Transformação de Guerra) também impede um inventor de ativar engenhocas.</p>
        </div>`,
        fator_vida: 3,
        fator_mana: 4,
        proficiencias: [Proficiencia.ARMAS_SIMPLES, Proficiencia.ARMADURAS_LEVES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Ofício'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Fortitude',
          'Iniciativa',
          'Investigação',
          'Luta',
          'Misticismo',
          'Ofício',
          'Pilotagem',
          'Percepção',
          'Pontaria',
        ],
        numero_pericias_escolha_grupo: 4,
        imagem: 'assets/img/classe_inventor.png',
        tabela: 'assets/img/tabela_classe_inventor.png',
        referencias: Referencia.BASICO,
        paginas: '67, 68, 69, 70 e 71',
      },
      {
        id: 11,
        nome: 'Ladino',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um ladino começa com 12 pontos de vida + Constituição e ganha 3 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 4 PM por nível.</p>
        <p><b>Perícias.</b>.  Ladinagem (Des) e Reflexos (Des), mais 8 a sua escolha entre Acrobacia (Des), Atletismo (For), Atuação (Car), Cavalgar (Des), Conhecimento (Int),  Diplomacia  (Car),  Enganação  (Car),  Furtividade (Des), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Jogatina (Car), Luta (For), Ofício (Int), Percepção (Sab), Pilotagem (Des) e Pontaria (Des).</p>
        <p><b>Proficiências.</b> Nenhuma.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Ataque furtivo +1d6, especialista</td></tr>
    <tr><td>2º</td><td>Evasão, poder de ladino</td></tr>
    <tr><td>3º</td><td>Ataque furtivo +2d6, poder de ladino</td></tr>
    <tr><td>4º</td><td>Esquiva sobrenatural, poder de ladino</td></tr>
    <tr><td>5º</td><td>Ataque furtivo +3d6, poder de ladino</td></tr>
    <tr><td>6º</td><td>Poder de ladino</td></tr>
    <tr><td>7º</td><td>Ataque furtivo +4d6, poder de ladino</td></tr>
    <tr><td>8º</td><td>Olhos nas costas, poder de ladino</td></tr>
    <tr><td>9º</td><td>Ataque furtivo +5d6, poder de ladino</td></tr>
    <tr><td>10º</td><td>Evasão aprimorada, poder de ladino</td></tr>
    <tr><td>11º</td><td>Ataque furtivo +6d6, poder de ladino</td></tr>
    <tr><td>12º</td><td>Poder de ladino</td></tr>
    <tr><td>13º</td><td>Ataque furtivo +7d6, poder de ladino</td></tr>
    <tr><td>14º</td><td>Poder de ladino</td></tr>
    <tr><td>15º</td><td>Ataque furtivo +8d6, poder de ladino</td></tr>
    <tr><td>16º</td><td>Poder de ladino</td></tr>
    <tr><td>17º</td><td>Ataque furtivo +9d6, poder de ladino</td></tr>
    <tr><td>18º</td><td>Poder de ladino</td></tr>
    <tr><td>19º</td><td>Ataque furtivo +10d6, poder de ladino</td></tr>
    <tr><td>20º</td><td>A pessoa certa para o trabalho, poder de ladino</td></tr>
  </tbody>
</table>

        
        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: true,
        ha_complicacoes: true,
        descricao_informacoes: `<div class="row">
        <h5>Esquemas</h5>
        <p>É comum aos personagens mencionados anteriormente um certo grau de planejamento, mas também de improviso. Os livros de Locke Lamora, principalmente, são estruturados como filmes de assalto. Abordar planejamento dentro do RPG, porém, é desafiador por alguns motivos. O primeiro é por já existir essa questão na esfera dos jogadores. Todas as ações podem ser planejadas, seja coordenando com os demais membros do grupo ou apenas pensando com antecedência. Isso significa que quaisquer elementos mecânicos
        relacionados a planejamento precisam ser relativamente sutis e pouco intrusivos.</p>
        <p>Assim, vamos considerar esquemas um novo tipo de poder para a classe Ladino. Um esquema é um plano rápido, feito quase que de improviso, determinando ações desse turno e do próximo. Quando se concretiza, um esquema oferece bônus adicionais.</p>
        <p>Esses novos poderes são baseados em Destreza, por dependerem de reflexos e escolhas súbitas muito mais que de qualquer planejamento prévio.</p>
        <hr>
        <h5>Ferramentas</h5>
        <p>Os mestres incondicionais de equipamentos em Tormenta20 são os inventores. Porém, ao ladino cabe o papel de usar ferramentas de forma incomum, de obter vantagens inesperadas e especializadas de objetos aparentemente inócuos. Deixe o lutador usar cadeiras ou pedras como armas improvisadas; ao ladino cabe aproveitar moedas para distrair, capas para se esconder e toda sorte de item ou vestimenta para enganar e obter vantagem. Por mais que não entenda completamente os meandros da engenharia e da magia que geram itens superiores ou mágicos, o ladino pode encontrar alguma forma de explorar essas características por um viés torto que escapa aos mais honestos.</p>
        <p>Alguns dos poderes apresentados nesse artigo abordam esse uso de ferramentas, seja expandindo o repertório do Truque Mágico ou gerando novas habilidades.</p>
        </div>`,
        fator_vida: 3,
        fator_mana: 4,
        proficiencias: [Proficiencia.ARMAS_SIMPLES, Proficiencia.ARMADURAS_LEVES],
        pericia_obrigatoria: 'Reflexos',
        pericia_escolha_entre_duas: ['Ladinagem'],
        pericias_escolha_grupo: [
          'Acrobacia',
          'Atletismo',
          'Atuação',
          'Cavalgar',
          'Conhecimento',
          'Diplomacia',
          'Enganação',
          'Furtividade',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Jogatina',
          'Luta',
          'Ofício',
          'Percepção',
          'Pilotagem',
          'Pontaria',
        ],
        numero_pericias_escolha_grupo: 8,
        imagem: 'assets/img/classe_ladino.png',
        tabela: 'assets/img/tabela_classe_ladino.png',
        referencias: Referencia.BASICO,
        paginas: '72, 73 e 74',
      },
      {
        id: 12,
        nome: 'Lutador',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um lutador começa com 20 pontos de vida + Constituição e ganha 5 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 3 PM por nível.</p>
        <p><b>Perícias.</b> Fortitude (Con) e Luta (For), mais 4 a sua escolha entre Acrobacia (Des), Adestramento (Car), Atletismo (For), Enganação (Car), Furtividade (Des), Iniciativa (Des), Intimidação (Car), Ofício (Int), Percepção (Sab), Pontaria (Des) e Reflexos (Des)</p>
        <p><b>Proficiências.</b> Nenhuma.</p>
        
        <table border="1" cellpadding="4" cellspacing="0">
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Briga (1d6), golpe relâmpago</td></tr>
    <tr><td>2º</td><td>Poder de lutador</td></tr>
    <tr><td>3º</td><td>Casca grossa (Con), poder de lutador</td></tr>
    <tr><td>4º</td><td>Poder de lutador</td></tr>
    <tr><td>5º</td><td>Briga (1d8), golpe cruel, poder de lutador</td></tr>
    <tr><td>6º</td><td>Poder de lutador</td></tr>
    <tr><td>7º</td><td>Casca grossa (Con+1), poder de lutador</td></tr>
    <tr><td>8º</td><td>Poder de lutador</td></tr>
    <tr><td>9º</td><td>Briga (1d10), golpe violento, poder de lutador</td></tr>
    <tr><td>10º</td><td>Poder de lutador</td></tr>
    <tr><td>11º</td><td>Casca grossa (Con+2), poder de lutador</td></tr>
    <tr><td>12º</td><td>Poder de lutador</td></tr>
    <tr><td>13º</td><td>Briga (2d6), poder de lutador</td></tr>
    <tr><td>14º</td><td>Poder de lutador</td></tr>
    <tr><td>15º</td><td>Casca grossa (Con+3), poder de lutador</td></tr>
    <tr><td>16º</td><td>Poder de lutador</td></tr>
    <tr><td>17º</td><td>Briga (2d8), poder de lutador</td></tr>
    <tr><td>18º</td><td>Poder de lutador</td></tr>
    <tr><td>19º</td><td>Casca grossa (Con+4), poder de lutador</td></tr>
    <tr><td>20º</td><td>Dono da rua (2d10), poder de lutador</td></tr>
  </tbody>
</table>

        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: true,
        ha_complicacoes: true,
        descricao_informacoes: `<h5>Combinações Desarmadas</h5>
        <p>Poderes de Combinação representam golpes que se aproveitam dos efeitos de ataques anteriores sobre seu oponente. Eles compartilham as seguintes regras.</p>
        <ul>
        <li>Combinações só podem ser usadas com ataques desarmados.</li>
        <li>Cada Combinação só pode ser usada uma vez por rodada, e apenas uma Combinação pode ser usada por ataque.</li>
        <li>Quando acerta um ataque usando um poder de Combinação, você começa uma contagem (individual por oponente). O próximo ataque de Combinação recebe um bônus de contagem (descrito em cada poder). A contagem zera se você passar uma rodada sem acertar um ataque usando um poder de combinação.</li>`,
        fator_vida: 5,
        fator_mana: 3,
        proficiencias: [Proficiencia.ARMAS_SIMPLES, Proficiencia.ARMADURAS_LEVES],
        pericia_obrigatoria: 'Luta',
        pericia_escolha_entre_duas: ['Fortitude'],
        pericias_escolha_grupo: [
          'Acrobacia',
          'Adestramento',
          'Atletismo',
          'Enganação',
          'Furtividade',
          'Iniciativa',
          'Intimidação',
          'Ofício',
          'Percepção',
          'Pontaria',
          'Reflexos',
        ],
        numero_pericias_escolha_grupo: 4,
        imagem: 'assets/img/classe_lutador.png',
        tabela: 'assets/img/tabela_classe_lutador.png',
        referencias: Referencia.BASICO,
        paginas: '75, 76 e 77',
      },
      {
        id: 13,
        nome: 'Nobre',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um nobre começa com 16 pontos de vida + Constituição e ganha 4 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b>  4 PM por nível.</p>
        <p><b>Perícias.</b>  Diplomacia  (Car)  ou  Intimidação (Car), Vontade (Sab), mais 4 a sua escolha entre Adestramento (Car), Atuação (Car), Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car),  Fortitude  (Con),  Guerra  (Int),  Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Jogatina (Car), Luta (For), Nobreza (Int), Ofício (Int), Percepção (Sab) e Pontaria (Des).</p>
        <p><b>Proficiências.</b> Armas marciais, armaduras pesadas e escudos.</p>
        
        <table border="1" cellpadding="4" cellspacing="0">
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Autoconfiança, espólio, orgulho</td></tr>
    <tr><td>2º</td><td>Palavras afiadas (2d6), poder de nobre</td></tr>
    <tr><td>3º</td><td>Poder de nobre, riqueza</td></tr>
    <tr><td>4º</td><td>Gritar ordens, poder de nobre</td></tr>
    <tr><td>5º</td><td>Poder de nobre, presença aristocrática</td></tr>
    <tr><td>6º</td><td>Palavras afiadas (4d6), poder de nobre</td></tr>
    <tr><td>7º</td><td>Poder de nobre</td></tr>
    <tr><td>8º</td><td>Poder de nobre</td></tr>
    <tr><td>9º</td><td>Poder de nobre</td></tr>
    <tr><td>10º</td><td>Palavras afiadas (6d6), poder de nobre</td></tr>
    <tr><td>11º</td><td>Poder de nobre</td></tr>
    <tr><td>12º</td><td>Poder de nobre</td></tr>
    <tr><td>13º</td><td>Poder de nobre</td></tr>
    <tr><td>14º</td><td>Palavras afiadas (8d6), poder de nobre</td></tr>
    <tr><td>15º</td><td>Poder de nobre</td></tr>
    <tr><td>16º</td><td>Poder de nobre</td></tr>
    <tr><td>17º</td><td>Poder de nobre</td></tr>
    <tr><td>18º</td><td>Palavras afiadas (10d6), poder de nobre</td></tr>
    <tr><td>19º</td><td>Poder de nobre</td></tr>
    <tr><td>20º</td><td>Realeza, poder de nobre</td></tr>
  </tbody>
</table>


        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: false,
        ha_poderes_db: true,
        ha_complicacoes: true,
        descricao_informacoes: '',
        fator_vida: 4,
        fator_mana: 4,
        proficiencias: [
          Proficiencia.ARMAS_SIMPLES,
          Proficiencia.ARMADURAS_LEVES,
          Proficiencia.ARMAS_MARCIAIS,
          Proficiencia.ARMADURAS_PESADAS,
          Proficiencia.ESCUDOS,
        ],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Diplomacia', 'Intimidação'],
        pericias_escolha_grupo: [
          'Adestramento',
          'Atuação',
          'Cavalgar',
          'Conhecimento',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Guerra',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Jogatina',
          'Luta',
          'Nobreza',
          'Ofício',
          'Percepção',
          'Pontaria',
        ],
        numero_pericias_escolha_grupo: 4,
        imagem: 'assets/img/classe_nobre.png',
        tabela: 'assets/img/tabela_classe_nobre.png',
        referencias: Referencia.BASICO,
        paginas: '78, 79 e 80',
      },
      {
        id: 14,
        nome: 'Paladino',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b> Um paladino começa com 20 pontos de vida + Constituição e ganha 5 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 3 PM por nível.</p>
        <p><b>Perícias.</b> Diplomacia  (Car)  ou  Intimidação (Car), Vontade (Sab), mais 4 a sua escolha entre Adestramento (Car), Atuação (Car), Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car),  Fortitude  (Con),  Guerra  (Int),  Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Jogatina (Car), Luta (For), Nobreza (Int), Ofício (Int), Percepção (Sab) e Pontaria (Des).</p>
        <p><b>Proficiências.</b> Armas marciais, armaduras pesadas e escudos.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Abençoado, código do herói, golpe divino (+1d8)</td></tr>
    <tr><td>2º</td><td>Cura pelas mãos (1d8+1 PV), poder de paladino</td></tr>
    <tr><td>3º</td><td>Aura sagrada, poder de paladino</td></tr>
    <tr><td>4º</td><td>Poder de paladino</td></tr>
    <tr><td>5º</td><td>Bênção da justiça, golpe divino (+2d8), poder de paladino</td></tr>
    <tr><td>6º</td><td>Cura pelas mãos (2d8+2 PV), poder de paladino</td></tr>
    <tr><td>7º</td><td>Poder de paladino</td></tr>
    <tr><td>8º</td><td>Poder de paladino</td></tr>
    <tr><td>9º</td><td>Golpe divino (+3d8), poder de paladino</td></tr>
    <tr><td>10º</td><td>Cura pelas mãos (3d8+3 PV), poder de paladino</td></tr>
    <tr><td>11º</td><td>Poder de paladino</td></tr>
    <tr><td>12º</td><td>Poder de paladino</td></tr>
    <tr><td>13º</td><td>Golpe divino (+4d8), poder de paladino</td></tr>
    <tr><td>14º</td><td>Cura pelas mãos (4d8+4 PV), poder de paladino</td></tr>
    <tr><td>15º</td><td>Poder de paladino</td></tr>
    <tr><td>16º</td><td>Poder de paladino</td></tr>
    <tr><td>17º</td><td>Golpe divino (+5d8), poder de paladino</td></tr>
    <tr><td>18º</td><td>Cura pelas mãos (5d8+5 PV), poder de paladino</td></tr>
    <tr><td>19º</td><td>Poder de paladino</td></tr>
    <tr><td>20º</td><td>Poder de paladino, vingador sagrado</td></tr>
  </tbody>
</table>

        
        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: true,
        descricao_informacoes: `<div class="row">
        <div class="col-sm-12 text-justify">
        <h5>Julgamentos Divinos</h5>
        <p>Alguns poderes do paladino são Julgamentos Divinos. Esses poderes compartilham as seguintes regras.</p>
        <ul>
        <li>Proferir um julgamento gasta uma ação de movimento, a menos que a descrição diga o contrário.</li>
        <li>Julgamentos que não têm um efeito instantâneo duram até o fim da cena.</li>
        <li>Uma mesma criatura pode ser alvo de vários julgamentos diferentes, mas efeitos do mesmo julgamento não se acumulam.</li>
        </ul>
        <hr>
        <h5>Virtudes Paladinescas</h5>
        <p>Este conjunto de poderes representa obediência veemente a um comportamento específico. Você recebe um bônus progressivo em seu total de pontos de mana de acordo com a quantidade de poderes desse tipo que possui: +1 PM para uma Virtude, +3 PM para duas, +6 PM para três, +10 PM para quatro e +15 PM para cinco Virtudes.</p>
        <p>Virtudes Paladinescas são poderosas, mas possuem uma contrapartida — você deve se comportar de acordo com quaisquer Virtudes que possuir. Um paladino caridoso, por exemplo, deve sempre ajudar os necessitados, enquanto um casto nunca pode cair em tentação. Não seguir uma Virtude Paladinesca que você possua conta como uma violação do Código do Herói. O mestre tem a palavra final sobre o que exatamente constitui uma violação.</p>
        <hr>
        <h5>Montaria Sagrada</h5>
        <p>Um paladino de 5º nível pode receber uma montaria sagrada, designada pelos deuses. Este animal vai atuar como um fiel companheiro de batalhas. Normalmente será um cavalo de guerra para paladinos de tamanho Médio ou um pônei para Pequenos, mas suplementos futuros trarão outras opções de montarias.</p>
        <p>Para invocar sua montaria você gasta uma ação de movimento e 2 PM. Ela aparece com um brilho de luz dourada ao seu lado e fica até o fim da cena, quando desaparece de volta para o mundo divino de onde veio.</p>
        <p>Como opção para campanhas mais realistas, a montaria sagrada pode ser um animal mundano, em vez de invocado. Neste caso, você nunca precisa gastar uma ação ou PM para ter a montaria — que já estará com você. Por outro lado, o animal pode não ser capaz de acompanhá-lo em todos os lugares (um cavalo, por exemplo, não conseguirá entrar num túnel apertado ou escalar uma montanha).</p>
        <p>Você e sua montaria têm um vínculo mental, sendo sempre capazes de entender um ao outro (não é preciso fazer testes de Adestramento). Ela fornece os benefícios de um parceiro veterano de seu tipo. No 11º nível, passa a fornecer os benefícios de um parceiro mestre. Veja a lista de parceiros na página 260. Uma montaria cumpre qualquer ordem sua, mesmo que signifique arriscar a vida. Se a montaria sagrada morrer, você fica atordoado por uma rodada. Você pode invocar uma nova montaria após um dia de prece e meditação.</p>
        </div>
        </div>`,
        fator_vida: 5,
        fator_mana: 3,
        proficiencias: [
          Proficiencia.ARMAS_SIMPLES,
          Proficiencia.ARMADURAS_LEVES,
          Proficiencia.ARMAS_MARCIAIS,
          Proficiencia.ARMADURAS_PESADAS,
          Proficiencia.ESCUDOS,
        ],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Luta', 'Pontaria'],
        pericias_escolha_grupo: [
          'Adestramento',
          'Atletismo',
          'Cavalgar',
          'Cura',
          'Diplomacia',
          'Fortitude',
          'Guerra',
          'Iniciativa',
          'Intuição',
          'Nobreza',
          'Percepção',
          'Religião',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/classe_paladino.png',
        tabela: 'assets/img/tabela_classe_paladino.png',
        referencias: Referencia.BASICO,
        paginas: '81, 82, 83 e 84',
      },
      {
        id: 19,
        id_classe_pai: 1,
        nome: 'Necromante',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um arcanista começa com 8 pontos de vida (+ Constituição) e ganha 2 PV (+ Constituição) por nível.</p>
        <p><b>Pontos de Mana.</b> 6 PM por nível.</p>
        <p><b>Perícias.</b> Misticismo (Int) e Vontade (Sab), mais 2 a sua escolha entre Conhecimento (Int), Cura (Sab), Diplomacia (Car), Enganação (Car), Fortitude(Con), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Nobreza (Int), Ofício (Int) e Percepção (Sab).</p>
        <p><b>Proficiências.</b> Nenhuma.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Caminho do necromante, falar com mortos, magias (1º círculo)</td></tr>
    <tr><td>2º</td><td>Animar cadáver, poder de arcanista</td></tr>
    <tr><td>3º</td><td>Necrologia +2, poder de arcanista</td></tr>
    <tr><td>4º</td><td>Distorção necrótica, poder de arcanista</td></tr>
    <tr><td>5º</td><td>Magias (2º círculo), necropotência, poder de arcanista</td></tr>
    <tr><td>6º</td><td>Poder de arcanista</td></tr>
    <tr><td>7º</td><td>Poder de arcanista</td></tr>
    <tr><td>8º</td><td>Necrologia +3, poder de arcanista</td></tr>
    <tr><td>9º</td><td>Magias (3º círculo), poder de arcanista</td></tr>
    <tr><td>10º</td><td>Poder de arcanista</td></tr>
    <tr><td>11º</td><td>Poder de arcanista</td></tr>
    <tr><td>12º</td><td>Poder de arcanista</td></tr>
    <tr><td>13º</td><td>Magias (4º círculo), necrologia +4, poder de arcanista</td></tr>
    <tr><td>14º</td><td>Poder de arcanista</td></tr>
    <tr><td>15º</td><td>Poder de arcanista</td></tr>
    <tr><td>16º</td><td>Poder de arcanista</td></tr>
    <tr><td>17º</td><td>Magias (5º círculo), poder de arcanista</td></tr>
    <tr><td>18º</td><td>Necrologia +5, poder de arcanista</td></tr>
    <tr><td>19º</td><td>Poder de arcanista</td></tr>
    <tr><td>20º</td><td>Domínio sobre a morte, poder de arcanista</td></tr>
  </tbody>
</table>


        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        usa_poderes_variantes: false,
        descricao_informacoes: `<h5>Linhagens Sobrenaturais</h5>
        <p>O poder de um feiticeiro vem de seu sangue — mais precisamente, do sangue de um antepassado sobrenatural, como um dragão ou uma fada. Além da capacidade de lançar magias, o feiticeiro herda desse antepassado uma fração de seu poder natural, que ele pode desenvolver ao longo de sua vida. Ao escolher o caminho do feiticeiro, escolha uma linhagem da lista a seguir. Você recebe a herança básica de sua linhagem e pode desenvolver as demais através de poderes de arcanista.</p>

        <p><b>Linhagem Dracônica</b></p>
        <p>Um de seus antepassados foi um majestoso dragão. Escolha um tipo de dano entre ácido, eletricidade, fogo ou frio.</p>
        <ul>
        <li><b>Básica.</b> Você soma seu Carisma em seus pontos de vida iniciais e recebe redução de dano 5 ao tipo escolhido.</li>
        <li><b>Aprimorada.</b> Suas magias do tipo escolhido custam –1 PM e causam +1 ponto de dano por dado.</li>
        <li><b>Superior.</b> Você passa a somar o dobro do seu Carisma em seus pontos de vida iniciais e se torna imune a dano do tipo escolhido. Além disso, sempre que reduz um ou mais inimigos a 0 PV ou menos com uma magia do tipo escolhido, você recebe uma quantidade de PM temporários igual ao círculo da magia.</li>
        </ul>

        <p><b>Linhagem Feérica</b></p>
        <p>Seu sangue foi tocado pelas fadas.</p>
        <ul>
        <li><b>Básica.</b> Você se torna treinado em Enganação e aprende uma magia de 1º círculo de encantamento ou ilusão, arcana ou divina, a sua escolha.</li>
        <li><b>Aprimorada.</b> A CD para resistir a suas magias de encantamento e ilusão aumenta em +2 e suas magias dessas escolas custam –1 PM.</li>
        <li><b>Superior.</b> Você recebe +2 em Carisma. Se uma criatura passar no teste de resistência contra uma magia de encantamento ou ilusão lançada por você, você fica alquebrado até o final da cena.</li>
        </ul>

        <p><b>Linhagem Rubra</b></p>
        <p>Seu sangue foi corrompido pela Tormenta.</p>
        <ul>
        <li><b>Básica.</b> Você recebe um poder da Tormenta. Além disso, pode perder outro atributo em vez de Carisma por poderes da Tormenta.</li>
        <li><b>Aprimorada.</b> Escolha uma magia para cada poder da Tormenta que você possui. Essas magias custam –1 PM. Sempre que recebe um novo 
        poder da Tormenta, você pode escolher uma nova magia. Esta herança 
        conta como um poder da Tormenta (exceto para perda de Carisma).</li>
        <li><b>Superior.</b> Você recebe +4 PM para cada poder da Tormenta que tiver. Esta herança conta como um poder da Tormenta (exceto para perda de Carisma).</li>
        </ul>

        <p><b>Linhagem Rubra</b></p>
        <p>Seu sangue foi corrompido pela Tormenta.</p>
        <ul>
        <li><b>Básica.</b> Você recebe um poder da Tormenta. Além disso, pode perder outro atributo em vez de Carisma por poderes da Tormenta.</li>
        <li><b>Aprimorada.</b> Escolha uma magia para cada poder da Tormenta que você possui. Essas magias custam –1 PM. Sempre que recebe um novo 
        poder da Tormenta, você pode escolher uma nova magia. Esta herança 
        conta como um poder da Tormenta (exceto para perda de Carisma).</li>
        <li><b>Superior.</b> Você recebe +4 PM para cada poder da Tormenta que tiver. Esta herança conta como um poder da Tormenta (exceto para perda de Carisma).</li>
        </ul>

        <p><b>Linhagem Abençoada</b></p>
        <p>É consenso que devotos têm pactos sagrados com seus deuses. Recebem poderes miraculosos em troca de servir a seus objetivos com grande esforço e dedicação. Certos indivíduos, contudo, parecem violar essa regra suprema. São contemplados com dons divinos, sem a necessidade de praticar nenhuma devoção. Já nascem com a centelha divina em seu sangue.</p>
        <ul>
        <li><b>Básica.</b> Escolha um deus maior. Uma vez feita, esta escolha não pode ser mudada. Você recebe um poder concedido do deus escolhido, sem precisar ser devoto dele (mas você ainda pode ser devoto desse ou de outro deus) e pode aprender magias divinas de 1º círculo como se fossem arcanas.</li>
        <li><b>Aprimorada.</b> Suas magias divinas de círculo igual ou menor que sua Sabedoria custam –1 PM e você pode aprender magias divinas de 2º e 3º círculo como se fossem arcanas.</li>
        <li><b>Superior.</b> Você recebe +1 em Sabedoria e aprende uma magia divina de cada círculo igual ou menor que sua Sabedoria. A cada dia, após descansar, você pode trocar essas magias por outras magias divinas dos mesmos círculos. Por fim, pode aprender magias divinas de 4º e 5º círculo como se fossem arcanas.</li>
        </ul>

        <hr>

        <h5>Anulando Magias</h5>
        <p>Você pode anular uma magia conjurada por outra pessoa, fazendo uma contramágica. Para isso, use a ação preparar para agir quando uma criatura lançar uma magia. Nesse instante, você deve lançar uma magia que possa anular a magia original.</p>
        <p>Normalmente, uma magia só pode ser anulada por outra igual — se um inimigo lança Bola de Fogo, você deve lançar outra Bola de Fogo para anulá-la. Mas algumas magias podem anular outras: por exemplo, Luz anula Escuridão (e vice-versa). Em caso de dúvida, cabe ao mestre julgar se uma magia anula outra. Como regra geral, uma magia nunca pode anular outra de círculo maior.</p>
        <p>Dissipar Magia é uma exceção — pode ser usada para anular qualquer magia (mesmo de círculos maiores), mas você deve fazer um teste de Misticismo oposto por Misticismo ou Vontade de quem está lançando a magia (o que for maior). Se você vencer, seu Dissipar Magia funciona como contramágica.</p>
        <p>Tanto a magia anulada quanto a usada como contramágica encerram-se instantaneamente.</p>

        <hr>

        <h5>Familiares Arcanos</h5>
        <p>Um familiar é uma criatura mágica. Em termos de jogo, é um parceiro especial com o qual você pode se comunicar telepaticamente em alcance longo. Ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de sua espécie pode fazer. Se ele morrer, você fica atordoado por uma rodada. Você pode invocar um novo familiar com um ritual que exige um dia e T$ 100 em ingredientes.</p>
        <ul>
        <li><b>Borboleta.</b> A CD dos testes de Vontade para resistir a suas magias aumenta em +1.</li>
        <li><b>Cobra.</b> A CD dos testes de Fortitude para resistir a suas magias aumenta em +1.</li>
        <li><b>Coruja.</b> Quando lança uma magia com alcance de toque, você pode pagar 1 PM para aumentar seu alcance para curto.</li>
        <li><b>Corvo.</b> Quando faz um teste de Misticismo ou Vontade, você pode pagar 1 PM para rolar dois dados e usar o melhor resultado.</li>
        <li><b>Falcão.</b> Você não pode ser surpreendido e nunca fica desprevenido.</li>
        <li><b>Gato.</b> Você recebe visão no escuro e +2 em Furtividade.</li>
        <li><b>Lagarto.</b> A CD dos testes de Reflexos para resistir a suas magias aumenta em +1.</li>
        <li><b>Morcego.</b> Você adquire percepção às cegas em alcance curto.</li>
        <li><b>Rato.</b> Você pode usar seu atributo-chave em Fortitude, no lugar de Constituição.</li>
        <li><b>Sapo.</b> Você soma seu atributo-chave ao seu total de pontos de vida (cumulativo).</li>
`,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/variante_necromante.png',
        tabela: 'assets/img/tabela_variante_necromante.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 20,
        id_classe_pai: 2,
        nome: 'Machado de Pedra',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b> Um Machado de Pedra começa com 24 pontos de vida + Constituição e ganha 6 PV + Constituição por nível.
        <p><b>Pontos de Mana.</b> 3 PM por nível.</p>
        <p><b>Perícias.</b> Fortitude (Con) e Luta (For), mais 4 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Iniciativa (Des), Intimidação (Car), Ofício (Int), Percepção (Sab), Pontaria (Des), Sobrevivência (Sab) e Vontade (Sab).</p>
        <p><b>Proficiências.</b> Escudos.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Fúria +2, grunhidos, machado de pedra, tanga de peles (Con)</td></tr>
    <tr><td>2º</td><td>Fúria primitiva, poder de bárbaro</td></tr>
    <tr><td>3º</td><td>Instinto selvagem +1, poder de bárbaro, tanga de peles (Def +1)</td></tr>
    <tr><td>4º</td><td>Poder de bárbaro</td></tr>
    <tr><td>5º</td><td>Poder de bárbaro, resiliência primal 3</td></tr>
    <tr><td>6º</td><td>Fúria +3, poder de bárbaro</td></tr>
    <tr><td>7º</td><td>Poder de bárbaro, tanga de peles (Def +2)</td></tr>
    <tr><td>8º</td><td>Poder de bárbaro, resiliência primal 6</td></tr>
    <tr><td>9º</td><td>Instinto selvagem +2, poder de bárbaro</td></tr>
    <tr><td>10º</td><td>Poder de bárbaro</td></tr>
    <tr><td>11º</td><td>Fúria +4, poder de bárbaro, resiliência primal 9, tanga de peles (Def +3)</td></tr>
    <tr><td>12º</td><td>Poder de bárbaro</td></tr>
    <tr><td>13º</td><td>Poder de bárbaro</td></tr>
    <tr><td>14º</td><td>Poder de bárbaro, resiliência primal 12</td></tr>
    <tr><td>15º</td><td>Instinto selvagem +3, poder de bárbaro, tanga de peles (Def +4)</td></tr>
    <tr><td>16º</td><td>Fúria +5, poder de bárbaro</td></tr>
    <tr><td>17º</td><td>Poder de bárbaro</td></tr>
    <tr><td>18º</td><td>Poder de bárbaro, tanga de peles (Def +5)</td></tr>
    <tr><td>19º</td><td>Poder de bárbaro</td></tr>
    <tr><td>20º</td><td>Fúria rústica, poder de bárbaro</td></tr>
  </tbody>
</table>


        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        usa_poderes_variantes: false,
        descricao_informacoes: `
        <h5>Animais Totêmicos</h5>
        <p>A seguir está uma lista de animais venerados por tribos bárbaras de Arton.</p>
        <ul>
        <li><b>Coruja.</b> A sábia coruja guia seus discípulos. Você pode lançar Orientação.</li>
        <li><b>Corvo.</b> Um seguidor do corvo enxerga além do véu. Você pode lançar Visão Mística.</li>
        <li><b>Falcão.</b> Sempre atento, o falcão permite que você lance Detectar Ameaças.</li>
        <li><b>Grifo.</b> O mais veloz dos animais, o grifo permite que você lance Primor Atlético.</li>
        <li><b>Lobo.</b> O lobo é feroz e letal. Você pode lançar Concentração de Combate.</li>
        <li><b>Raposa.</b> A sagaz raposa nunca está onde se espera. Você pode lançar Imagem Espelhada.</li>
        <li><b>Tartaruga.</b> A tartaruga protege os seus. Você pode lançar Armadura Arcana.</li>
        <li><b>Urso.</b> O vigoroso urso permite que você lance Vitalidade Fantasma e possa usar seus aprimoramentos como se tivesse acesso aos mesmos círculos de magia que um druida de seu nível.</li>
        <li><b>Dragão.</b> Dragões não são animais, mas algumas tribos bárbaras veneram dragões e os adotam como seu totem. Isso os torna uma opção para animal totêmico. Implacável, o dragão permite que seus bárbaros lancem Arma Mágica. <b>(Dragão Brasil 200, Pag. 71)</b></li>
        <li><b>Texugo.</b> O corajoso texugo permite que você lance Arma Espiritual. A arma se manifesta como um texugo espectral que causa dano de perfuração com sua mordida. <b>(Dragão Brasil 208, Pag. 56)</b></li>
        </ul>
        <hr>
        <h5>Poderes de Brado</h5>
        <p>Alguns poderes do bárbaro são poderes de brado. Esses poderes compartilham as seguintes regras.</p>
        <ul>
        <li>Emitir um brado gasta uma ação de movimento e 1 PM, a menos que a descrição diga o contrário.</li>
        <li>Brados têm alcance curto.</li>
        </ul>
        <p>A critério do mestre, habilidades raciais baseadas em gritos, como o Rugido Imponente do moreau do leão (Ameaças de Arton, p. 305), podem ser consideradas poderes de brado para um bárbaro.</p>`,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/variante_machado_pedra.png',
        tabela: 'assets/img/tabela_variante_machado_pedra.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 21,
        id_classe_pai: 3,
        nome: 'Magimarcialista',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b> Um magimarcialista começa com 16 pontos de vida + Constituição e ganha 4 PV
        + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 4 PM por nível.</p>
        <p><b>Perícias.</b> Atuação (Car) e Luta (For), mais 6 a sua escolha entre Acrobacia (Des), Atletismo (For), Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car), Fortitude (Con), Guerra (Int), Iniciativa (Des), Jogatina (Car), Misticismo (Int) e Reflexos (Des).</p> 
        <p><b>Proficiências.</b> Armas marciais.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Cadência magicamarcal, magificação +2, magias (1º círculo)</td></tr>
    <tr><td>2º</td><td>Bravado magicamarcal, poder de bardo</td></tr>
    <tr><td>3º</td><td>Dança defensiva, poder de bardo</td></tr>
    <tr><td>4º</td><td>Poder de bardo</td></tr>
    <tr><td>5º</td><td>Poder de bardo</td></tr>
    <tr><td>6º</td><td>Magias (2º círculo), magificação +3, poder de bardo</td></tr>
    <tr><td>7º</td><td>Arte sublime, poder de bardo</td></tr>
    <tr><td>8º</td><td>Poder de bardo</td></tr>
    <tr><td>9º</td><td>Poder de bardo</td></tr>
    <tr><td>10º</td><td>Magias (3º círculo), poder de bardo</td></tr>
    <tr><td>11º</td><td>Magificação +4, poder de bardo</td></tr>
    <tr><td>12º</td><td>Poder de bardo</td></tr>
    <tr><td>13º</td><td>Poder de bardo</td></tr>
    <tr><td>14º</td><td>Magias (4º círculo), poder de bardo</td></tr>
    <tr><td>15º</td><td>Poder de bardo</td></tr>
    <tr><td>16º</td><td>Magificação +5, poder de bardo</td></tr>
    <tr><td>17º</td><td>Poder de bardo</td></tr>
    <tr><td>18º</td><td>Poder de bardo</td></tr>
    <tr><td>19º</td><td>Poder de bardo</td></tr>
    <tr><td>20º</td><td>Crescendo vitorioso, poder de bardo</td></tr>
  </tbody>
</table>


        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        usa_poderes_variantes: false,
        descricao_informacoes: `
        <div class="row">
        <div class="col-sm-12 text-justify">
        <h5>Músicas de Bardo</h5>
        <p>Alguns poderes do bardo são Músicas. Esses poderes compartilham as seguintes regras.</p>
        <ul>
        <li>Para ativar uma música, você precisa ser treinado em Atuação e empunhar um instrumento musical.</li>
        <li>Ativar uma música gasta uma ação padrão e 1 PM.</li>
        <li>Efeitos de músicas têm alcance curto.</li>
        </ul>
        <hr>
        <h5>Performances</h5>
        <p>Alguns poderes de bardo são Performances. Esses poderes compartilham as seguintes regras.</p>
        <ul>
            <li>Usar uma performance gasta uma ação de movimento e exige um teste de Atuação (CD 15 + 5 para cada performance usada anteriormente na mesma cena) usando um instrumento musical.</li>
            <li> Uma performance tem o mesmo alcance de sua Inspiração e afeta todos os aliados sob efeito de sua Inspiração.</li>
        </ul>
        </div>
        </div>`,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/variante_magimarcialista.png',
        tabela: 'assets/img/tabela_variante_magimarcialista.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 22,
        id_classe_pai: 4,
        nome: 'Duelista',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um duelista começa com 16 pontos de vida + Constituição e ganha 4 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 3 PM por nível.</p>
        <p><b>Perícias.</b>   Luta (For) ou Pontaria (Des), Reflexos (Des), mais 2 a sua escolha entre Acrobacia (Des), Atletismo (For), Atuação (Car), Diplomacia (Car), Fortitude (Con), Iniciativa (Des), Intimidação (Car), Luta (For), Ofício (Int), Percepção (Sab), Pilotagem (Des) e Pontaria (Des).</p>
        <p><b>Proficiências.</b> Armas marciais.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Duelo +2, insolência</td></tr>
    <tr><td>2º</td><td>Escola de duelo, poder de bucaneiro</td></tr>
    <tr><td>3º</td><td>Esquiva sagaz +1, poder de bucaneiro</td></tr>
    <tr><td>4º</td><td>Poder de bucaneiro, truques de capa</td></tr>
    <tr><td>5º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>6º</td><td>Duelo +3, poder de bucaneiro</td></tr>
    <tr><td>7º</td><td>Esquiva sagaz +2, poder de bucaneiro</td></tr>
    <tr><td>8º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>9º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>10º</td><td>Poder de bucaneiro, técnica avançada</td></tr>
    <tr><td>11º</td><td>Duelo +4, esquiva sagaz +3, poder de bucaneiro</td></tr>
    <tr><td>12º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>13º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>14º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>15º</td><td>Esquiva sagaz +4, poder de bucaneiro</td></tr>
    <tr><td>16º</td><td>Duelo +5, poder de bucaneiro</td></tr>
    <tr><td>17º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>18º</td><td>Poder de bucaneiro</td></tr>
    <tr><td>19º</td><td>Esquiva sagaz +5, poder de bucaneiro</td></tr>
    <tr><td>20º</td><td>Duelista lendário, poder de bucaneiro</td></tr>
  </tbody>
</table>

        
        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        usa_poderes_variantes: false,
        descricao_informacoes: `<div class="row">
        <div class="col-sm-12 text-justify">
        <h5>Bravatas</h5>
        <p>Audazes e imprudentes, bucaneiros têm o costume da bravata — a promessa pública de realizar uma façanha, às vezes atrelada a uma restrição, como “Navegarei até Galrasia com um barco furado!”. Todas as Bravatas compartilham as seguintes regras.</p>
        <ul>
        <li>Uma Bravata deve envolver um desafio real. Em termos de jogo, deve ser uma ação com ND igual ou maior que o nível do bucaneiro.</li>
        <li>Você só pode ter uma Bravata de cada tipo ativa por vez. Caso falhe em uma Bravata ou desista dela, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia.</li>
        <li>Quando você cumpre uma Bravata, recebe um benefício que dura até o fim da aventura. De acordo com o mestre, caso isso aconteça perto do fim da aventura, o benefício pode se estender até a próxima.</li>
        </div>
        </div>`,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/variante_duelista.png',
        tabela: 'assets/img/tabela_variante_duelista.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 23,
        id_classe_pai: 5,
        nome: 'Seteiro',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>   Um seteiro começa com 16 pontos de vida + Constituição e ganha 4 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 4 PM por nível.</p>
        <p><b>Perícias.</b> Pontaria (Des) e Sobrevivência (Sab), mais 6 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Cura (Sab), Fortitude (Con), Furtividade (Des), Iniciativa (Des), Investigação (Int), Luta (For), Ofício (Int), Percepção (Sab) e Reflexos (Des).</p>
        <p><b>Proficiências.</b> Armas marciais.</p>

        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Caminho do atirador, marca da presa +1d4, tiro de supressão</td></tr>
    <tr><td>2º</td><td>Poder de caçador</td></tr>
    <tr><td>3º</td><td>Evasão, poder de caçador</td></tr>
    <tr><td>4º</td><td>Poder de caçador</td></tr>
    <tr><td>5º</td><td>Disparo constritor, marca da presa +1d8, poder de caçador</td></tr>
    <tr><td>6º</td><td>Poder de caçador</td></tr>
    <tr><td>7º</td><td>Poder de caçador</td></tr>
    <tr><td>8º</td><td>Marca da presa +1d12, poder de caçador</td></tr>
    <tr><td>9º</td><td>Poder de caçador, rajada de flechas</td></tr>
    <tr><td>10º</td><td>Poder de caçador</td></tr>
    <tr><td>11º</td><td>Poder de caçador</td></tr>
    <tr><td>12º</td><td>Evasão aprimorada, marca da presa +2d8, poder de caçador</td></tr>
    <tr><td>13º</td><td>Poder de caçador</td></tr>
    <tr><td>14º</td><td>Poder de caçador, sentinela</td></tr>
    <tr><td>15º</td><td>Poder de caçador</td></tr>
    <tr><td>16º</td><td>Marca da presa +2d10, poder de caçador</td></tr>
    <tr><td>17º</td><td>Poder de caçador</td></tr>
    <tr><td>18º</td><td>Poder de caçador</td></tr>
    <tr><td>19º</td><td>Poder de caçador</td></tr>
    <tr><td>20º</td><td>Poder de caçador, mestre do disparo</td></tr>
  </tbody>
</table>


        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        usa_poderes_variantes: false,
        descricao_informacoes: `<div class="row">
        <h5>Armadilhas</h5>
        <p>Alguns poderes do caçador são Armadilhas. Esses poderes compartilham as seguintes regras.</p>
        <ul>
        <li>Preparar uma armadilha gasta uma ação completa e 3 PM.</li>
        <li>Uma armadilha afeta uma área de 3m.</li>
        de lado adjacente a você e é acionada pela primeira criatura que entrar na área.
        <li>Uma criatura que o veja preparando a armadilha saberá que ela está lá. Uma 
        criatura que não o veja preparando a armadilha pode encontrá-la se gastar uma 
        ação padrão procurando e passar em um teste de Investigação (CD Sab).</li>
        <li>É possível aplicar veneno a uma armadilha, como se ela fosse uma arma. Você não precisa de nenhum item para criar a armadilha, pois usa materiais naturais, 
        como galhos e cipós. Porém, precisa estar em um ambiente propício, como uma 
        floresta, um beco repleto de entulhos etc.</li>
        </ul>

        <hr>

        <h5>Companheiro Animal</h5>
        <p>Um companheiro animal é um amigo valoroso e fiel. Você decide de qual espécie 
        é seu companheiro. Vocês têm um vínculo mental, sendo capazes de entender um ao outro. Seu companheiro animal obedece a você, mesmo que isso arrisque a vida dele.</p>
        <p>Em termos de jogo, seu companheiro animal é um parceiro ajudante, assassino, atirador, combatente, fortão, guardião, perseguidor, ou uma montaria, do nível iniciante. No 7º nível ele muda para veterano e, no 15º nível, para mestre (se 
        tiver mais de um tipo, todos mudam de nível). Se o companheiro animal morrer, 
        você fica atordoado por uma rodada. Você pode invocar um novo companheiro após 
        um dia inteiro de prece e meditação.</p>
        <p>A seguir, alguns exemplos de animais (mas você é livre para escolher outros). Veja a página 260 para as regras de parceiros.</p>
        <ul>
        <li>Ajudante. Corvo, macaco, raposa, serpente ou outro animal ágil ou esperto.</li>
        <li>Assassino. Lince, onça ou outro animal treinado para abater presas.</li>
        <li>Atirador. Águia, falcão ou outro animal capaz de mergulhar rapidamente nos alvos de seus ataques à distância. </li>
        <li>Fortão. Crocodilo, javali, leão, lobo ou outro animal capaz de lutar ao seu lado.</li>
        <li>Guardião. Alce, cão, coruja, tartaruga, urso ou outro animal pesado ou atento.</li>
        <li>Perseguidor. Gambá, sabujo ou outro animal farejador.</li>
        </ul>
        </div>`,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/variante_seteiro.png',
        tabela: 'assets/img/tabela_variante_seteiro.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 24,
        id_classe_pai: 6,
        nome: 'Vassalo',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um vassalo começa com 20 pontos de vida + Constituição e ganha 5 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 3 PM por nível.</p>
        <p><b>Perícias.</b>  Fortitude (Con) e Luta (For), mais 2 a sua escolha entre Adestramento (Car), Atletismo (For),  Cavalgar  (Des),  Diplomacia  (Car),  Guerra (Int), Iniciativa (Des), Intimidação (Car), Nobreza (Int), Percepção (Sab) e Vontade (Sab).</p>
        <p><b>Proficiências.</b>  Armas marciais e escudos.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Baluarte +2, código de honra, jovem pajem, suserano</td></tr>
    <tr><td>2º</td><td>Valete</td></tr>
    <tr><td>3º</td><td>Escudeiro aprendiz</td></tr>
    <tr><td>4º</td><td>Guarda do castelo</td></tr>
    <tr><td>5º</td><td>Baluarte +4, vigilante das estradas</td></tr>
    <tr><td>6º</td><td>Cavaleiro do reino</td></tr>
    <tr><td>7º</td><td>Sargento do reino</td></tr>
    <tr><td>8º</td><td>Capitão do reino</td></tr>
    <tr><td>9º</td><td>Baluarte +6, lorde</td></tr>
    <tr><td>10º</td><td>Barão</td></tr>
    <tr><td>11º</td><td>Visconde</td></tr>
    <tr><td>12º</td><td>Conde</td></tr>
    <tr><td>13º</td><td>Baluarte +8, marquês</td></tr>
    <tr><td>14º</td><td>Duque</td></tr>
    <tr><td>15º</td><td>Arquiduque</td></tr>
    <tr><td>16º</td><td>Conselheiro real</td></tr>
    <tr><td>17º</td><td>Baluarte +10, rei mercenário</td></tr>
    <tr><td>18º</td><td>Rei</td></tr>
    <tr><td>19º</td><td>Alto rei</td></tr>
    <tr><td>20º</td><td>Imperador</td></tr>
  </tbody>
</table>

        
        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        usa_poderes_variantes: false,
        descricao_informacoes: `
        <div class="row">
        <h5>Vassalo em Campanha</h5>
        <p>O vassalo é uma classe variante diferente. Em vez de oferecer muitos poderes abertos, que podem ser escolhidos pelo jogador, tem uma lista em grande parte fixa e imutável. Em vez de se encaixar em quase qualquer campanha, exige uma progressão narrativa para o personagem — determinando parcialmente os rumos da história. Como lidar com toda essa esquisitice?</p>
        <p>Antes de escolher um personagem vassalo, o jogador deve conversar com o mestre, garantindo que essa variante tem espaço na campanha. Por sua vez, o mestre deve trabalhar com o jogador para que sua ascensão na aristocracia artoniana aconteça em jogo. Simulando o lado mais tradicional e até antiquado da nobreza de Arton, o vassalo também é uma variante mais estanque
        em termos de regras. Empurra o personagem e a campanha como um todo para um certo lado. Por isso, todos precisam estar de acordo para que ele funcione. Se você prefere um personagem mais solto, que tenha mais opções de poderes e liberdade na campanha, talvez um cavaleiro básico ou um nobre se encaixem mais com seu conceito.</p>
        <p>Para um exemplo de como um personagem vassalo funciona na mesa, você pode assistir à Guilda do Macaco — na campanha, Lothar Algherulff seguiu essa variante do 1º ao 17º nível. O sistema de jogo era outro, mas a classe era muito parecida e os ajustes necessários na campanha não dependeram de regras, mas de história.</p>
        <h5>O Treinamento de um Vassalo</h5>
        <p>Ao longo de sua carreira, o vassalo se torna treinado em diversas perícias. Sempre que receber um desses treinamentos por uma habilidade de vassalo, se já for treinado na perícia, em vez disso você recebe +2 nela.</p>`,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        sem_poderes: true,
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/variante_vassalo.png',
        tabela: 'assets/img/tabela_variante_vassalo.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 25,
        id_classe_pai: 7,
        nome: 'Usurpador',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um clérigo começa com 16 pontos de vida + Constituição e ganha 4 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 5 PM por nível.</p>
        <p><b>Perícias.</b> Enganação (Car) e Vontade (Sab), mais 2 a sua escolha entre Atuação (Car), Conhecimento (Int), Cura (Sab), Diplomacia (Car), Furtividade (Des), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Misticismo (Int), Nobreza (Int), Ofício (Int), Percepção
        (Sab), Reflexos (Des) e Religião (Sab).</p>
        <p><b>Proficiências.</b> Nenhuma.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Inimigo dos deuses, magias (1º círculo), usurpar</td></tr>
    <tr><td>2º</td><td>Canalização falsa, poder de clérigo</td></tr>
    <tr><td>3º</td><td>Discrição divina +1, poder de clérigo</td></tr>
    <tr><td>4º</td><td>Poder capturado, poder de clérigo</td></tr>
    <tr><td>5º</td><td>Magias (2º círculo), poder de clérigo</td></tr>
    <tr><td>6º</td><td>Poder de clérigo</td></tr>
    <tr><td>7º</td><td>Poder de clérigo</td></tr>
    <tr><td>8º</td><td>Poder de clérigo</td></tr>
    <tr><td>9º</td><td>Discrição divina +2, magias (3º círculo), poder de clérigo</td></tr>
    <tr><td>10º</td><td>Poder de clérigo</td></tr>
    <tr><td>11º</td><td>Poder de clérigo</td></tr>
    <tr><td>12º</td><td>Poder de clérigo</td></tr>
    <tr><td>13º</td><td>Magias (4º círculo), poder de clérigo</td></tr>
    <tr><td>14º</td><td>Poder de clérigo</td></tr>
    <tr><td>15º</td><td>Discrição divina +3, poder de clérigo</td></tr>
    <tr><td>16º</td><td>Poder de clérigo</td></tr>
    <tr><td>17º</td><td>Magias (5º círculo), poder de clérigo</td></tr>
    <tr><td>18º</td><td>Poder de clérigo</td></tr>
    <tr><td>19º</td><td>Poder de clérigo</td></tr>
    <tr><td>20º</td><td>Poder de clérigo, roubo divino</td></tr>
  </tbody>
</table>


        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        usa_poderes_variantes: false,
        descricao_informacoes: `<div class="row">
        <div class="col-sm-12 text-justify">
        <h5>Missas</h5>
        <p>Alguns poderes do clérigo são Missas. Esses poderes compartilham as seguintes regras.</p>
        <ul>
        <li>Rezar uma Missa exige uma hora e o gasto de materiais especiais (como velas, incensos, água benta...) no valor de T$ 25. Um mesmo celebrante pode aplicar mais de um poder de Missa na mesma celebração. Cada poder adicional aumenta o custo da Missa em T$ 25.</li>
        <li>Uma Missa afeta um número máximo de pessoas igual a 1 + sua Sabedoria. Todas as pessoas precisam estar presentes durante toda a Missa.</li>
        <li>Os efeitos de uma Missa duram um dia. Uma mesma criatura só pode receber os benefícios da mesma Missa uma vez por dia.</li>
        </ul>
        </div>
        </div>`,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/variante_usurpador.png',
        tabela: 'assets/img/tabela_variante_usurpador.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 26,
        id_classe_pai: 8,
        nome: 'Ermitão',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b> Um ermitão começa com 12 pontos de vida + Constituição e ganha 3 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 4 PM por nível.</p>
        <p><b>Perícias.</b> Sobrevivência (Sab) e Vontade (Sab), mais 2 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Conhecimento (Int), Cura (Sab), Fortitude (Con), Iniciativa (Des), Intuição (Sab), Luta (For), Misticismo (Int), Ofício (Int), Percepção (Sab) e Religião (Sab).</p>
        <p><b>Proficiências.</b> Nenhuma.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Devoto fiel, empatia selvagem, magias (1º círculo)</td></tr>
    <tr><td>2º</td><td>Poder de druida</td></tr>
    <tr><td>3º</td><td>Poder de druida, sítio sagrado</td></tr>
    <tr><td>4º</td><td>Poder de druida</td></tr>
    <tr><td>5º</td><td>Poder de druida, vínculo com a terra</td></tr>
    <tr><td>6º</td><td>Magias (2º círculo), poder de druida</td></tr>
    <tr><td>7º</td><td>Poder de druida</td></tr>
    <tr><td>8º</td><td>Poder de druida</td></tr>
    <tr><td>9º</td><td>Poder de druida</td></tr>
    <tr><td>10º</td><td>Magias (3º círculo), poder de druida</td></tr>
    <tr><td>11º</td><td>Poder de druida, temperado pelo clima</td></tr>
    <tr><td>12º</td><td>Poder de druida</td></tr>
    <tr><td>13º</td><td>Poder de druida</td></tr>
    <tr><td>14º</td><td>Magias (4º círculo), poder de druida</td></tr>
    <tr><td>15º</td><td>Poder de druida</td></tr>
    <tr><td>16º</td><td>Poder de druida</td></tr>
    <tr><td>17º</td><td>Poder de druida</td></tr>
    <tr><td>18º</td><td>Poder de druida</td></tr>
    <tr><td>19º</td><td>Poder de druida</td></tr>
    <tr><td>20º</td><td>Eixo de pedras, poder de druida</td></tr>
  </tbody>
</table>


        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        usa_poderes_variantes: false,
        descricao_informacoes: `<div class="row">
        <div class="col-sm-12 text-justify">

        <h5>Companheiro Animal</h5>
        <p>Um companheiro animal é um amigo valoroso e fiel. Você decide de qual espécie 
        é seu companheiro. Vocês têm um vínculo mental, sendo capazes de entender um ao outro. Seu companheiro animal obedece a você, mesmo que isso arrisque a vida dele.</p>
        <p>Em termos de jogo, seu companheiro animal é um parceiro ajudante, assassino, atirador, combatente, fortão, guardião, perseguidor, ou uma montaria, do nível iniciante. No 7º nível ele muda para veterano e, no 15º nível, para mestre (se 
        tiver mais de um tipo, todos mudam de nível). Se o companheiro animal morrer, 
        você fica atordoado por uma rodada. Você pode invocar um novo companheiro após 
        um dia inteiro de prece e meditação.</p>
        <p>A seguir, alguns exemplos de animais (mas você é livre para escolher outros). Veja a página 260 para as regras de parceiros.</p>
        <ul>
        <li>Ajudante. Corvo, macaco, raposa, serpente ou outro animal ágil ou esperto.</li>
        <li>Assassino. Lince, onça ou outro animal treinado para abater presas.</li>
        <li>Atirador. Águia, falcão ou outro animal capaz de mergulhar rapidamente nos alvos de seus ataques à distância. </li>
        <li>Fortão. Crocodilo, javali, leão, lobo ou outro animal capaz de lutar ao seu lado.</li>
        <li>Guardião. Alce, cão, coruja, tartaruga, urso ou outro animal pesado ou atento.</li>
        <li>Perseguidor. Gambá, sabujo ou outro animal farejador.</li>
        </ul>

        <hr>

        <h5>O Sítio Sagrado</h5>
        <p>Uma área erma com 5 km de raio, o sítio sagrado é um refúgio para o ermitão e fornece diversas habilidades a ele, algumas das quais o acompanham para além das fronteiras deste local. Caso o sítio sagrado seja destruído, você perde todos os seus PM e só pode recuperá-los ao criar um novo sítio. Fazer isso ocupa um tempo entre aventuras.</p>
        <p><b>Aliados da Natureza.</b> Dentro do sítio, criaturas não inteligentes (Int –4 ou –5) têm atitude melhor com você, conforme seu tipo: no 7º nível, animais são amistosos e espíritos e monstros, indiferentes. No 15º nível suas categorias de atitude melhoram um passo. Você pode comandar criaturas prestativas para lutar ao seu lado e ajudar a defender o sítio sagrado, mas elas não irão segui-lo para fora dele. O mestre decide quais criaturas estão presentes no sítio (de forma geral, a qualquer momento há um número de criaturas com ND total somado igual ao seu nível).</p>
        <p><b>Terreno Associado.</b> Ao receber seu sítio sagrado, escolha um terreno entre aquático, ártico, colina, deserto, floresta, montanha, pântano, planície ou subterrâneo. Esse será o tipo de terreno associado ao seu sítio sagrado. Sempre que estiver em um terreno desse tipo, você soma sua Sabedoria (mínimo +1) em Furtividade, Percepção, Misticismo, Religião e Sobrevivência. No 7º nível, e a cada quatro níveis subsequentes, escolha mais um tipo de terreno para associar ao seu sítio ou aumente o bônus de perícias de um tipo de terreno já escolhido em +2.</p>
        <p>Você também é capaz de atingir uma conexão mais forte com sua divindade dentro do sítio sagrado. Dentro dele, seu redutor de PM por Vínculo com a Terra muda para –2.</p>
        <p><b>Caminhos Sagrados.</b> Quando está em um terreno de um tipo associado ao seu sítio, você não sofre redução de deslocamento por terreno difícil natural e a CD para rastreá-lo aumenta em +10.</p>
        <p><b>Base.</b> O sítio sagrado conta como uma base (veja p. 244) básica. Você paga apenas a metade do custo para aumentar o porte dessa base e para construir cômodos nela.</p>
        </div>
        </div>`,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/variante_ermitao.png',
        tabela: 'assets/img/tabela_variante_ermitao.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 27,
        id_classe_pai: 9,
        nome: 'Inovador',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b> Um inovador começa com 20 pontos de vida + Constituição e ganha 5 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 3 PM por nível.</p>
        <p><b>Perícias.</b>. Luta (For) ou Pontaria (Des) e Acrobacia (Des), mais 2 a sua escolha entre Adestramento (Car), Atletismo (For), Conhecimento (Int), Fortitude (Con), Guerra (Int), Iniciativa (Des), Intimidação (Car), Investigação (Int), Luta (For), Ofício (Int), Pontaria (Des) e Reflexos (Des).</p>
        <p><b>Proficiências.</b> Armas marciais, armaduras pesadas e escudos.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Do bom e do melhor, sequência especial +2</td></tr>
    <tr><td>2º</td><td>Bombardeio sequencial, poder de guerreiro</td></tr>
    <tr><td>3º</td><td>Poder de guerreiro</td></tr>
    <tr><td>4º</td><td>Acrobacia defensiva, poder de guerreiro</td></tr>
    <tr><td>5º</td><td>Domínio excêntrico, poder de guerreiro, sequência especial +4</td></tr>
    <tr><td>6º</td><td>Poder de guerreiro</td></tr>
    <tr><td>7º</td><td>Poder de guerreiro, técnica excêntrica</td></tr>
    <tr><td>8º</td><td>Poder de guerreiro</td></tr>
    <tr><td>9º</td><td>Poder de guerreiro, sequência especial +6</td></tr>
    <tr><td>10º</td><td>Poder de guerreiro</td></tr>
    <tr><td>11º</td><td>Poder de guerreiro</td></tr>
    <tr><td>12º</td><td>Poder de guerreiro</td></tr>
    <tr><td>13º</td><td>Poder de guerreiro, sequência especial +8</td></tr>
    <tr><td>14º</td><td>Poder de guerreiro</td></tr>
    <tr><td>15º</td><td>Poder de guerreiro</td></tr>
    <tr><td>16º</td><td>Poder de guerreiro, sequência especial +10</td></tr>
    <tr><td>17º</td><td>Poder de guerreiro</td></tr>
    <tr><td>18º</td><td>Poder de guerreiro</td></tr>
    <tr><td>19º</td><td>Poder de guerreiro</td></tr>
    <tr><td>20º</td><td>Estilo único, poder de guerreiro</td></tr>
  </tbody>
</table>
`,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        usa_poderes_variantes: false,
        descricao_informacoes: `
        <div class="row">
        <h5>Efeitos do Golpe Pessoal</h5>
        <p><b>Amplo (+3 PM).</b> Seu ataque atinge todas as criaturas em alcance curto (incluindo aliados, mas não você mesmo). Faça um único teste de ataque e compare com a Defesa de cada criatura. Atordoante (+2 PM). Uma criatura que sofra dano do ataque fica atordoada por uma rodada (apenas uma vez por cena; Fortitude CD For anula).</p> 
        <p><b>Brutal (+1 PM).</b> Fornece um dado extra de dano do mesmo tipo.
        <p><b>Conjurador (Custo da Magia + 1 PM).</b> Escolha uma magia de 1º ou 2º círculos que tenha como alvo uma criatura ou que afete uma área. Se acertar seu golpe, você lança a magia como uma ação livre, tendo como alvo a criatura atingida ou como centro de sua área o ponto atingido pelo ataque (atributo-chave é um mental a sua escolha). Considere que a mão da arma está livre para lançar esta magia. <i><b>e</b></i></p>
        <p><b>Destruidor (+2 PM).</b> Aumenta o multiplicador de crítico em +1.</p>
        <p><b>Distante (+1 PM).</b> Aumenta o alcance em um passo (de corpo a corpo para curto, médio e longo). Outras características não mudam (um ataque corpo a corpo com alcance curto continua usando Luta e somando sua Força no dano).</p>
        <p><b>Elemental (+2 PM).</b> Causa +2d6 pontos de dano de ácido, eletricidade, fogo ou frio. Você pode escolher este efeito mais vezes para aumentar o dano em +2d6 (do mesmo tipo ou de outro), por +2 PM a cada vez. <i><b>e</b></i></p>
        <p><b>Impactante (+1 PM).</b> Empurra o alvo 1,5m para cada 10 pontos de dano causado (arredondado para baixo). Por exemplo, 3m para 22 pontos de dano. Letal (+2 PM). Aumenta a margem de ameaça em +2. Você pode escolher este efeito duas vezes para aumentar a margem de ameaça em +5.</p>
        <p><b>Letal (+2 PM).</b> Aumenta a margem de ameaça em +2. Você pode escolher este efeito duas vezes para aumentar a margem de ameaça em +5</p>
        <p><b>Penetrante (+1 PM).</b> Ignora 10 pontos de RD.</p>
        <p><b>Preciso (+1 PM).</b> Quando faz o teste de ataque, você rola dois dados e usa o melhor resultado.</p>
        <p><b>Qualquer Arma (+1 PM).</b> Você pode usar seu Golpe Pessoal com qualquer tipo de arma. Ricocheteante (+1 PM). A arma volta pra você após o ataque. Só pode ser usado com armas de arremesso.</p>
        <p><b>Teleguiado (+1 PM).</b> Ignora penalidades por camuflagem ou cobertura leves.</p>
        <p><b>Lento (–2 PM).</b> Seu ataque exige uma ação completa para ser usado.</p>
        <p><b>Perto da Morte (–2 PM).</b> O ataque só pode ser usado se você estiver com um quarto de seus PV ou menos.</p>
        <p><b>Sacrifício (–2 PM).</b> Sempre que usa seu Golpe Pessoal, você perde 10 PV.</p>
        <p><b>Anunciado (–1 PM).</b> Você precisa gastar uma ação de movimento gritando o nome de seu golpe para usá-lo. Isso significa que não pode usá-lo furtivamente ou quando estiver impedido de falar, como amordaçado ou debaixo d’água. Uma vez que grite, deve usar o golpe até o fim de seu próximo turno. <b>(Dragão Brasil 159, Pag. 38)</b></p>
        <p><b>Desconcertante (+1 PM).</b> Uma criatura que sofra dano do ataque fica Vulnerável por uma rodada. <b>(Dragão Brasil 159, Pag. 38)</b></p>
        <p><b>Desgastante (–1 PM).</b> Você fica fatigado após usar o golpe. <b>(Dragão Brasil 159, Pag. 38)</b></p>
        <p><b>Paralisante (+2 PM).</b> Uma criatura que sofra dano do ataque fica Paralisada por uma rodada (Fortitude CD For anula). <b>(Dragão Brasil 159, Pag. 38)</b></p>

        <h5>Novos Efeitos de Golpe Pessoal</h5>
        <p><b>Avanço (+1 PM).</b> Você pode percorrer até o seu deslocamento em linha reta antes de desferir o golpe.</p>
        <p><b>Brando (+0 PM).</b> Seu golpe causa dano não letal.</p>
        <p><b>Carregado (+1 PM).</b> Você pode gastar uma ação padrão para energizar seu ataque. Se você fizer isso e atacar até a próxima rodada, seu ataque causa +2d8 pontos de dano.
        <p><b>Sequencial (+2 PM).</b> Seu golpe causa +1d6 pontos de dano. A cada vez que você acerta o golpe na mesma cena, esse bônus aumenta em um passo.</p>
        <p><b>Sifão (+2 PM).</b> Você recebe 1 PM temporário para cada 10 pontos da rolagem de dano. Você pode receber um máximo de PM temporários por cena igual ao seu nível e eles desaparecem no fim da cena.</p>
        <p><b>Golpe de Abertura (–2 PM).</b> Seu golpe só pode ser usado em seu primeiro turno do combate.</p>
        <p><b>Truque Secreto (–2 PM).</b> Seu golpe só pode ser usado uma vez contra cada alvo por cena.</p>
        <div>`,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/variante_inovador.png',
        tabela: 'assets/img/tabela_variante_inovador.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 28,
        id_classe_pai: 10,
        nome: 'Alquimista',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um alquimista começa com 12 pontos de vida + Constituição e ganha 3 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 4 PM por nível.</p>
        <p><b>Perícias.</b>.  Ofício Alquimista (Int) e Vontade (Sab), mais 4 a sua escolha entre Conhecimento (Int), Cura (Sab), Diplomacia (Car), Fortitude (Con), Iniciativa (Des), Investigação  (Int),  Luta  (For),  Misticismo  (Int), Ofício  (Int),  Pilotagem  (Des),  Percepção  (Sab)  e Pontaria (Des).</p>
        <p><b>Proficiências.</b> Armas marciais, armaduras pesadas e escudos.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Engenhosidade, laboratório pessoal</td></tr>
    <tr><td>2º</td><td>Alquimista iniciado, poder de inventor</td></tr>
    <tr><td>3º</td><td>Mistura básica, poder de inventor</td></tr>
    <tr><td>4º</td><td>Poder de inventor</td></tr>
    <tr><td>5º</td><td>Aplicação rápida, poder de inventor</td></tr>
    <tr><td>6º</td><td>Poder de inventor</td></tr>
    <tr><td>7º</td><td>Magia engarrafada, poder de inventor</td></tr>
    <tr><td>8º</td><td>Odores alquímicos, poder de inventor</td></tr>
    <tr><td>9º</td><td>Fabricar emulsão (1 encanto), poder de inventor</td></tr>
    <tr><td>10º</td><td>Mestre alquimista, poder de inventor</td></tr>
    <tr><td>11º</td><td>Bombardeio eficiente, poder de inventor</td></tr>
    <tr><td>12º</td><td>Poder de inventor</td></tr>
    <tr><td>13º</td><td>Fabricar emulsão (2 encantos), poder de inventor</td></tr>
    <tr><td>14º</td><td>Poder de inventor</td></tr>
    <tr><td>15º</td><td>Poder de inventor</td></tr>
    <tr><td>16º</td><td>Poder de inventor</td></tr>
    <tr><td>17º</td><td>Fabricar emulsão (3 encantos), poder de inventor</td></tr>
    <tr><td>18º</td><td>Poder de inventor</td></tr>
    <tr><td>19º</td><td>Poder de inventor</td></tr>
    <tr><td>20º</td><td>Pedra filosofal, poder de inventor</td></tr>
  </tbody>
</table>

        
        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        usa_poderes_variantes: false,
        descricao_informacoes: `<div class="row">
        <h5>Livro de Fórmulas</h5>
        <p>Quando adquire o poder Alquimista Iniciado, você recebe um livro de fórmulas. Uma “fórmula” é uma magia divina ou arcana (atributo-chave Inteligência) que serve para cumprir os pré-requisitos de fabricação de poções.</p>
        <p>Você começa com três fórmulas de 1º círculo. A cada nível além do 1º, aprende uma fórmula adicional. A partir do 6º nível, pode aprender fórmulas de 2º círculo e, se possuir o poder Mestre Alquimista, a cada quatro níveis (10º, 14º e 18º) pode aprender fórmulas de um círculo maior.</p>
        <p>Se não tiver seu livro de fórmulas, você não pode fabricar poções. Se perder seu livro, você pode preparar outro com uma semana de trabalho e o gasto de T$ 100.</p>
        <hr>
        <h5>Engenhocas</h5>
        <p>Uma engenhoca é uma invenção que simula o efeito de uma magia. Exemplos incluem um canhão (simula o efeito da magia <i>Bola de Fogo</i>), uma arma de raios (<i>Relâmpago</i>), um casaco blindado (<i>Armadura Arcana</i>), um emplastro curativo (<i>Curar Ferimentos</i>), um guarda-costas mecânico (<i>Conjurar Monstro</i>), um projetor de imagens (<i>Criar Ilusão</i>), um veículo a vapor (<i>Montaria Arcana</i>) etc.</p>
        <p>Uma engenhoca é um item mundano Minúsculo que ocupa 1 espaço e possui Defesa 15, pontos de vida iguais à metade dos PV de seu fabricante e RD 5. Quando é fabricada, escolha se ela será empunhada (precisa estar na sua mão para ser ativada) ou vestida (precisa estar vestida para ser ativada, conta para seu limite de itens vestidos). Ao ser ativada, uma engenhoca pode assumir outra forma. Por exemplo, uma engenhoca que simula Montaria Arcana pode ser uma caixinha de engrenagens que se desdobra na forma de uma moto de madeira. Suas estatísticas não mudam.</p>
        <p><b>Fabricação.</b> Para fabricar uma engenhoca, escolha uma magia arcana ou divina de 1º círculo. Essa será a magia que a engenhoca irá simular. A partir do 6º nível, você pode criar engenhocas com magias de 2º círculo e, a cada quatro níveis, pode criar engenhocas de um círculo maior.</p>
        <p>O custo de fabricação da engenhoca é T$ 100 x o custo em PM da magia que ela simula e a CD do teste é 20 + o custo em PM da magia. Assim, para fabricar uma engenhoca que simula o efeito de uma magia de 2º círculo (3 PM) você precisa gastar T$ 300 e passar em um teste de Ofício (engenhoqueiro) contra CD 23. O tempo de fabricação é uma semana</p>
        <p><i>Limite de Engenhocas.</i> Engenhocas são itens complexos e delicados, que exigem manutenção constante. O máximo de engenhocas que você pode ter ao mesmo tempo é igual a sua Inteligência.</p>
        <p><b>Ativação.</b> Apenas o fabricante de uma engenhoca pode ativá-la. Ativar uma engenhoca exige uma ação padrão (ou a execução da magia, o que for maior) e um teste de Ofício (engenhoqueiro) contra CD 15 + custo em PM da magia. Se você passar, a engenhoca gera o efeito da magia (atributo-chave Int). Se falhar, ela enguiça e não pode ser utilizada até ser consertada, o que exige uma hora de trabalho. Cada nova ativação da engenhoca no mesmo dia aumenta a CD do teste de Ofício em +5.</p>
        <p>Quando ativa uma engenhoca, você pode usar quaisquer aprimoramentos da magia que ela simula, até um custo igual a sua Inteligência. A CD para ativar a engenhoca aumenta em +1 por PM e você paga o custo em PM dos aprimoramentos.</p>
        <p>Se a engenhoca simula o efeito de uma magia com custo especial, esse custo deve ser pago a cada ativação. Para outros custos e limitações, o efeito gerado pela engenhoca funciona como uma magia. Por exemplo, para manter um efeito com duração sustentada gerado por uma engenhoca, o inventor deve pagar 1 PM no início de cada um de seus turnos. Da mesma forma, só pode manter um efeito sustentado de engenhoca por vez. Se a magia simulada exigir um teste de Misticismo, use Ofício (engenhoqueiro) em seu lugar.</p>
        <p><b>Efeito Mundano.</b> O efeito de uma engenhoca não é mágico. Isso significa que ele não pode ser dissipado, funciona em áreas de antimagia etc.</p>
        <p><b>Penalidade de Armadura.</b> A ativação de uma engenhoca exige movimentos rápidos e precisos. Por isso, o teste de Ofício (engenhoqueiro) para ativar engenhocas sofre penalidade de armadura. Porém, você pode ativar engenhocas que geram magias arcanas enquanto usa armadura sem precisar fazer testes de Misticismo.</p>
        <p><b>Efeitos que Impedem Conjuração.</b> Um efeito que especificamente impeça um personagem de lançar magias (como a Fúria de um bárbaro ou a magia Transformação de Guerra) também impede um inventor de ativar engenhocas.</p>
        </div>`,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/variante_alquimista.png',
        tabela: 'assets/img/tabela_variante_alquimista.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 29,
        id_classe_pai: 11,
        nome: 'Ventanista',
        descricao_classe: `
        <h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um ventanista começa com 12 pontos de vida + Constituição e ganha 3 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 4 PM por nível.</p>
        <p><b>Perícias.</b>.  Ladinagem (Des) e Reflexos (Des), mais 8 a sua escolha entre Acrobacia (Des), Atletismo (For), Atuação (Car), Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car), Furtividade (Des), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Jogatina (Car), Nobreza (Int), Ofício (Int), Percepção (Sab) e Pilotagem (Des).</p>
        <p><b>Proficiências.</b> Nenhuma.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1º</td>
      <td>Charme, truques do ofício</td>
    </tr>
    <tr>
      <td>2º</td>
      <td>Evasão, poder de ladino</td>
    </tr>
    <tr>
      <td>3º</td>
      <td>Disfarce elaborado (1 poder), poder de ladino</td>
    </tr>
    <tr>
      <td>4º</td>
      <td>Esquiva sobrenatural, poder de ladino</td>
    </tr>
    <tr>
      <td>5º</td>
      <td>Poder de ladino</td>
    </tr>
    <tr>
      <td>6º</td>
      <td>Poder de ladino</td>
    </tr>
    <tr>
      <td>7º</td>
      <td>Poder de ladino, virar a casaca</td>
    </tr>
    <tr>
      <td>8º</td>
      <td>Olhos nas costas, poder de ladino</td>
    </tr>
    <tr>
      <td>9º</td>
      <td>Disfarce elaborado (2 poderes), poder de ladino</td>
    </tr>
    <tr>
      <td>10º</td>
      <td>Evasão aprimorada, poder de ladino</td>
    </tr>
    <tr>
      <td>11º</td>
      <td>Poder de ladino, provocação ousada</td>
    </tr>
    <tr>
      <td>12º</td>
      <td>Poder de ladino</td>
    </tr>
    <tr>
      <td>13º</td>
      <td>Poder de ladino</td>
    </tr>
    <tr>
      <td>14º</td>
      <td>Poder de ladino</td>
    </tr>
    <tr>
      <td>15º</td>
      <td>Disfarce elaborado (3 poderes), poder de ladino</td>
    </tr>
    <tr>
      <td>16º</td>
      <td>Poder de ladino</td>
    </tr>
    <tr>
      <td>17º</td>
      <td>Poder de ladino</td>
    </tr>
    <tr>
      <td>18º</td>
      <td>Poder de ladino</td>
    </tr>
    <tr>
      <td>19º</td>
      <td>Poder de ladino</td>
    </tr>
    <tr>
      <td>20º</td>
      <td>O grande golpe, poder de ladino</td>
    </tr>
  </tbody>
</table>

        
        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        usa_poderes_variantes: false,
        descricao_informacoes: `
        <div class="row">
        <h5>Esquemas</h5>
        <p>É comum aos personagens mencionados anteriormente um certo grau de planejamento, mas também de improviso. Os livros de Locke Lamora, principalmente, são estruturados como filmes de assalto. Abordar planejamento dentro do RPG, porém, é desafiador por alguns motivos. O primeiro é por já existir essa questão na esfera dos jogadores. Todas as ações podem ser planejadas, seja coordenando com os demais membros do grupo ou apenas pensando com antecedência. Isso significa que quaisquer elementos mecânicos
        relacionados a planejamento precisam ser relativamente sutis e pouco intrusivos.</p>
        <p>Assim, vamos considerar esquemas um novo tipo de poder para a classe Ladino. Um esquema é um plano rápido, feito quase que de improviso, determinando ações desse turno e do próximo. Quando se concretiza, um esquema oferece bônus adicionais.</p>
        <p>Esses novos poderes são baseados em Destreza, por dependerem de reflexos e escolhas súbitas muito mais que de qualquer planejamento prévio.</p>
        <hr>
        <h5>Ferramentas</h5>
        <p>Os mestres incondicionais de equipamentos em Tormenta20 são os inventores. Porém, ao ladino cabe o papel de usar ferramentas de forma incomum, de obter vantagens inesperadas e especializadas de objetos aparentemente inócuos. Deixe o lutador usar cadeiras ou pedras como armas improvisadas; ao ladino cabe aproveitar moedas para distrair, capas para se esconder e toda sorte de item ou vestimenta para enganar e obter vantagem. Por mais que não entenda completamente os meandros da engenharia e da magia que geram itens superiores ou mágicos, o ladino pode encontrar alguma forma de explorar essas características por um viés torto que escapa aos mais honestos.</p>
        <p>Alguns dos poderes apresentados nesse artigo abordam esse uso de ferramentas, seja expandindo o repertório do Truque Mágico ou gerando novas habilidades.</p>
        </div>`,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/variante_ventanista.png',
        tabela: 'assets/img/tabela_variante_ventanista.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 30,
        id_classe_pai: 12,
        nome: 'Atleta',
        descricao_classe: `
        <h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um atleta começa com 20 pontos de vida + Constituição e ganha 5 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 3 PM por nível.</p>
        <p><b>Perícias.</b> Atletismo (For) e Luta (For), mais 4 a sua escolha entre Acrobacia (Des), Adestramento (Car), Cavalgar (Des), Cura (Sab), Fortitude (Con), Iniciativa (Des), Intimidação (Car), Ofício (Int), Percepção (Sab), Pilotagem (Des), Pontaria (Des) e Reflexos (Des).</p>
        <p><b>Proficiências.</b> Nenhuma.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Briga (1d6), façanha atlética</td></tr>
    <tr><td>2º</td><td>Arremesso atlético, poder de lutador, poderio muscular</td></tr>
    <tr><td>3º</td><td>Casca grossa (Con), poder de lutador</td></tr>
    <tr><td>4º</td><td>Poder de lutador</td></tr>
    <tr><td>5º</td><td>Briga (1d8), mais alto e mais rápido, poder de lutador</td></tr>
    <tr><td>6º</td><td>Poder de lutador</td></tr>
    <tr><td>7º</td><td>Casca grossa (Con +1), poder de lutador</td></tr>
    <tr><td>8º</td><td>Poder de lutador</td></tr>
    <tr><td>9º</td><td>Briga (1d10), disciplina atlética, poder de lutador</td></tr>
    <tr><td>10º</td><td>Poder de lutador</td></tr>
    <tr><td>11º</td><td>Casca grossa (Con +2), poder de lutador</td></tr>
    <tr><td>12º</td><td>Poder de lutador</td></tr>
    <tr><td>13º</td><td>Briga (2d6), poder de lutador</td></tr>
    <tr><td>14º</td><td>Poder de lutador</td></tr>
    <tr><td>15º</td><td>Casca grossa (Con +3), poder de lutador</td></tr>
    <tr><td>16º</td><td>Poder de lutador</td></tr>
    <tr><td>17º</td><td>Briga (2d8), poder de lutador</td></tr>
    <tr><td>18º</td><td>Poder de lutador</td></tr>
    <tr><td>19º</td><td>Casca grossa (Con +4), poder de lutador</td></tr>
    <tr><td>20º</td><td>Corpo ideal (2d10), poder de lutador</td></tr>
  </tbody>
</table>

        
        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        usa_poderes_variantes: false,
        descricao_informacoes: `
        <h5>Combinações Desarmadas</h5>
        <p>Poderes de Combinação representam golpes que se aproveitam dos efeitos de ataques anteriores sobre seu oponente. Eles compartilham as seguintes regras.</p>
        <ul>
        <li>Combinações só podem ser usadas com ataques desarmados.</li>
        <li>Cada Combinação só pode ser usada uma vez por rodada, e apenas uma Combinação pode ser usada por ataque.</li>
        <li>Quando acerta um ataque usando um poder de Combinação, você começa uma contagem (individual por oponente). O próximo ataque de Combinação recebe um bônus de contagem (descrito em cada poder). A contagem zera se você passar uma rodada sem acertar um ataque usando um poder de combinação.</li>`,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/variante_atleta.png',
        tabela: 'assets/img/tabela_variante_atleta.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 31,
        id_classe_pai: 13,
        nome: 'Burguês',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b>  Um burguês começa com 12 pontos de vida + Constituição e ganha 3 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b>  4 PM por nível.</p>
        <p><b>Perícias.</b>  Diplomacia (Car) e Vontade (Sab), mais 6 a sua escolha entre Adestramento (Car), Atuação (Car), Cavalgar
        (Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car), Fortitude (Con), Guerra (Int), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Jogatina (Car), Luta (For), Nobreza (Int), Ofício (Int), Percepção (Sab) e Pontaria (Des).</p>
        <p><b>Proficiências.</b> Nenhuma.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Meios de produção, orgulho, poder monetário</td></tr>
    <tr><td>2º</td><td>Desmoralizar –1, poder de nobre</td></tr>
    <tr><td>3º</td><td>Negociante nato, poder de nobre</td></tr>
    <tr><td>4º</td><td>Poder de nobre, suborno</td></tr>
    <tr><td>5º</td><td>Ostentação, poder de nobre</td></tr>
    <tr><td>6º</td><td>Desmoralizar –2, poder de nobre</td></tr>
    <tr><td>7º</td><td>Poder de nobre</td></tr>
    <tr><td>8º</td><td>Poder de nobre</td></tr>
    <tr><td>9º</td><td>Novo rico, poder de nobre</td></tr>
    <tr><td>10º</td><td>Desmoralizar –3, poder de nobre</td></tr>
    <tr><td>11º</td><td>Poder de nobre</td></tr>
    <tr><td>12º</td><td>Poder de nobre</td></tr>
    <tr><td>13º</td><td>Poder de nobre</td></tr>
    <tr><td>14º</td><td>Desmoralizar –4, poder de nobre</td></tr>
    <tr><td>15º</td><td>Poder de nobre</td></tr>
    <tr><td>16º</td><td>Poder de nobre</td></tr>
    <tr><td>17º</td><td>Poder de nobre</td></tr>
    <tr><td>18º</td><td>Desmoralizar –5, poder de nobre</td></tr>
    <tr><td>19º</td><td>Poder de nobre</td></tr>
    <tr><td>20º</td><td>Magnata</td></tr>
  </tbody>
</table>

        
        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        usa_poderes_variantes: false,
        descricao_informacoes: '',
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/variante_burgues.png',
        tabela: 'assets/img/tabela_variante_burgues.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 32,
        id_classe_pai: 14,
        nome: 'Santo',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b> Um paladino começa com 20 pontos de vida + Constituição e ganha 5 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 4 PM por nível.</p>
        <p><b>Perícias.</b>  (Sab) e Vontade (Sab), mais 2 a sua escolha entre Adestramento (Car), Atletismo (For), Conhecimento (Int), Cura (Sab), Diplomacia (Car), Fortitude (Con), Guerra (Int), Iniciativa (Des), Intuição (Sab), Luta (For) Ofício (Int) e Percepção (Sab).</p>
        <p><b>Proficiências.</b> Armas marciais, armaduras pesadas e escudos.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1º</td><td>Abençoado, código do herói, ladainha de combate (+1)</td></tr>
    <tr><td>2º</td><td>Poder de paladino, santo curandeiro</td></tr>
    <tr><td>3º</td><td>Poder de paladino, vaso sagrado</td></tr>
    <tr><td>4º</td><td>Poder de paladino</td></tr>
    <tr><td>5º</td><td>Ladainha de combate (+2, sacra), poder de paladino</td></tr>
    <tr><td>6º</td><td>Mártir, poder de paladino</td></tr>
    <tr><td>7º</td><td>Poder de paladino</td></tr>
    <tr><td>8º</td><td>Pira santa, poder de paladino</td></tr>
    <tr><td>9º</td><td>Ladainha de combate (+3, veloz), poder de paladino</td></tr>
    <tr><td>10º</td><td>Poder de paladino</td></tr>
    <tr><td>11º</td><td>Poder de paladino</td></tr>
    <tr><td>12º</td><td>Poder de paladino</td></tr>
    <tr><td>13º</td><td>Ladainha de combate (+4), poder de paladino</td></tr>
    <tr><td>14º</td><td>Poder de paladino</td></tr>
    <tr><td>15º</td><td>Poder de paladino</td></tr>
    <tr><td>16º</td><td>Poder de paladino</td></tr>
    <tr><td>17º</td><td>Ladainha de combate (+5), poder de paladino</td></tr>
    <tr><td>18º</td><td>Poder de paladino</td></tr>
    <tr><td>19º</td><td>Poder de paladino</td></tr>
    <tr><td>20º</td><td>Poder de paladino, vingador santificado</td></tr>
  </tbody>
</table>


        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        usa_poderes_variantes: false,
        descricao_informacoes: `<div class="row">
        <div class="col-sm-12 text-justify">
        <h5>Julgamentos Divinos</h5>
        <p>Alguns poderes do paladino são Julgamentos Divinos. Esses poderes compartilham as seguintes regras.</p>
        <ul>
        <li>Proferir um julgamento gasta uma ação de movimento, a menos que a descrição diga o contrário.</li>
        <li>Julgamentos que não têm um efeito instantâneo duram até o fim da cena.</li>
        <li>Uma mesma criatura pode ser alvo de vários julgamentos diferentes, mas efeitos do mesmo julgamento não se acumulam.</li>
        </ul>
        <hr>
        <h5>Virtudes Paladinescas</h5>
        <p>Este conjunto de poderes representa obediência veemente a um comportamento específico. Você recebe um bônus progressivo em seu total de pontos de mana de acordo com a quantidade de poderes desse tipo que possui: +1 PM para uma Virtude, +3 PM para duas, +6 PM para três, +10 PM para quatro e +15 PM para cinco Virtudes.</p>
        <p>Virtudes Paladinescas são poderosas, mas possuem uma contrapartida — você deve se comportar de acordo com quaisquer Virtudes que possuir. Um paladino caridoso, por exemplo, deve sempre ajudar os necessitados, enquanto um casto nunca pode cair em tentação. Não seguir uma Virtude Paladinesca que você possua conta como uma violação do Código do Herói. O mestre tem a palavra final sobre o que exatamente constitui uma violação.</p>
        <hr>
        <h5>Montaria Sagrada</h5>
        <p>Um paladino de 5º nível pode receber uma montaria sagrada, designada pelos deuses. Este animal vai atuar como um fiel companheiro de batalhas. Normalmente será um cavalo de guerra para paladinos de tamanho Médio ou um pônei para Pequenos, mas suplementos futuros trarão outras opções de montarias.</p>
        <p>Para invocar sua montaria você gasta uma ação de movimento e 2 PM. Ela aparece com um brilho de luz dourada ao seu lado e fica até o fim da cena, quando desaparece de volta para o mundo divino de onde veio.</p>
        <p>Como opção para campanhas mais realistas, a montaria sagrada pode ser um animal mundano, em vez de invocado. Neste caso, você nunca precisa gastar uma ação ou PM para ter a montaria — que já estará com você. Por outro lado, o animal pode não ser capaz de acompanhá-lo em todos os lugares (um cavalo, por exemplo, não conseguirá entrar num túnel apertado ou escalar uma montanha).</p>
        <p>Você e sua montaria têm um vínculo mental, sendo sempre capazes de entender um ao outro (não é preciso fazer testes de Adestramento). Ela fornece os benefícios de um parceiro veterano de seu tipo. No 11º nível, passa a fornecer os benefícios de um parceiro mestre. Veja a lista de parceiros na página 260. Uma montaria cumpre qualquer ordem sua, mesmo que signifique arriscar a vida. Se a montaria sagrada morrer, você fica atordoado por uma rodada. Você pode invocar uma nova montaria após um dia de prece e meditação.</p>
        </div>
        </div>`,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/variante_santo.png',
        tabela: 'assets/img/tabela_variante_santo.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 33,
        nome: 'Treinador',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b> Um treinador começa com 12 pontos de vida + Constituição e ganha 3 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b>  4 PM por nível.</p>
        <p><b>Perícias.</b>  Adestramento (Car) e Vontade (Sab), mais 4 a sua escolha entre Atletismo (For), Cavalgar (Des), Diplomacia (Car), Guerra (Int), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Luta (For), Ofício (Int), Percepção (Sab), Pontaria (Des), Reflexos (Des), Religião (Sab) e Sobrevivência (Sab).</p>
        <p><b>Proficiências.</b> Nenhuma.</p>
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1º</td>
      <td>Direcionar, melhor amigo (2 truques)</td>
    </tr>
    <tr>
      <td>2º</td>
      <td>Domar criatura (2d8), poder de treinador</td>
    </tr>
    <tr>
      <td>3º</td>
      <td>Poder de treinador</td>
    </tr>
    <tr>
      <td>4º</td>
      <td>Melhor amigo (3 truques), poder de treinador</td>
    </tr>
    <tr>
      <td>5º</td>
      <td>Domar criatura (cena), poder de treinador, treino especializado</td>
    </tr>
    <tr>
      <td>6º</td>
      <td>Domar criatura (4d8), poder de treinador</td>
    </tr>
    <tr>
      <td>7º</td>
      <td>Melhor amigo (4 truques), poder de treinador, sincronia de combate</td>
    </tr>
    <tr>
      <td>8º</td>
      <td>Domar criatura (dia), poder de treinador</td>
    </tr>
    <tr>
      <td>9º</td>
      <td>Poder de treinador</td>
    </tr>
    <tr>
      <td>10º</td>
      <td>Domar criatura (6d8), melhor amigo (5 truques), poder de treinador</td>
    </tr>
    <tr>
      <td>11º</td>
      <td>Poder de treinador</td>
    </tr>
    <tr>
      <td>12º</td>
      <td>Poder de treinador</td>
    </tr>
    <tr>
      <td>13º</td>
      <td>Melhor amigo (6 truques), poder de treinador</td>
    </tr>
    <tr>
      <td>14º</td>
      <td>Domar criatura (8d8), poder de treinador</td>
    </tr>
    <tr>
      <td>15º</td>
      <td>Poder de treinador</td>
    </tr>
    <tr>
      <td>16º</td>
      <td>Melhor amigo (7 truques), poder de treinador</td>
    </tr>
    <tr>
      <td>17º</td>
      <td>Poder de treinador</td>
    </tr>
    <tr>
      <td>18º</td>
      <td>Poder de treinador</td>
    </tr>
    <tr>
      <td>19º</td>
      <td>Melhor amigo (8 truques), poder de treinador</td>
    </tr>
    <tr>
      <td>20º</td>
      <td>Poder de treinador, sincronia perfeita</td>
    </tr>
  </tbody>
</table>


        `,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        usa_poderes_variantes: false,
        descricao_informacoes: `<h5>Mascotes</h5>
        <p>Um mascote é uma criatura com a qual você desenvolveu uma grande afinidade. Em termos de jogo, é um parceiro especial que não conta em seu limite de parceiros e com o qual você pode se comunicar através de gestos em alcance médio. Ele obedece a seus comandos, mas ainda está limitado ao que uma criatura de sua espécie pode fazer. Mascotes fornecem seus benefícios tanto para você quanto para seus melhores amigos. Se perder um de seus mascotes, você pode treinar um novo com uma semana de trabalho e T$ 100</p>
        <ul>
        <li>Águia Real. Uma vez por rodada, fornece +1d6 em uma rolagem de dano com arma.</li>
        <li>Bicho Preguiça. Agarrado às costas (suas ou de seu melhor amigo), este animal ocupa o espaço de um item vestido, mas fornece um ataque natural de garra (dano 1d6, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com essa garra.</li>
        <li>Camundongo Espiritual. Aumenta a CD para resistir a habilidades mágicas em +1.</li>
        <li>Fada-Borboleta. Diminui o custo de habilidades mágicas em –1.</li>
        <li>Gekko Malhado. Fornece +2 na Defesa e em Reflexos.</li>
        <li>Mico-Leão Dourado. Permite usar Ladinagem para punga em alcance curto.</li>
        <li>Minivaca. Fornece +1 em testes de ataque. Esse bônus dobra em investidas.</li>
        <li>Ossinhos. O esqueleto de um animal reanimado. Fornece redução de corte, frio e perfuração 2.</li>
        </ul>

        <hr>
        <h5>O Melhor Amigo</h5>
        <p>Seu melhor amigo é uma criatura com a qual você possui uma afinidade única. Pode ser um animal que você criou desde filhote, um construto que você fabricou ou mesmo o espírito de um antepassado que decidiu protegê-lo! Em termos de regras, é um parceiro iniciante de um tipo a sua escolha condizente com suas características e aprovado pelo mestre. Se você receber um parceiro não inteligente por outra habilidade, como o poder Companheiro Animal (Tormenta20, p. 62) ou a origem Irmão sem Esporas (Atlas de Arton, p. 476), pode fazer esse parceiro ser seu melhor amigo, usando todos os bônus de parceiros (bônus iguais não se acumulam; use os melhores). Seu melhor amigo só fornece seus benefícios de parceiro se estiver em alcance curto de você.</p>
        <p>Ao contrário de outros parceiros, seu melhor amigo possui uma ficha completa, com as características a seguir — mesmo que sejam diferentes da ficha de sua espécie. Por exemplo, se você escolher um melhor amigo gorlogg, ele terá as características abaixo, não aquelas descritas em Tormenta20, p. 291. Da mesma forma, se escolher um melhor amigo elefante (Ameaças de Arton, p. 216), ele não será Enorme. Talvez o seu ainda seja um filhote que ainda não cresceu totalmente? Se achar isso sem graça, lembre-se de que você ainda pode escolher o truque Amigão para fazê-lo crescer!</p>
        <p><b>Tamanho.</b> Escolha entre Pequeno, Médio ou Grande.</p>
        <p><b>Atributos.</b> For 1, Des 1, Con 1, Int –4, Sab 1, Car 0.</p>
        <p><b>Pontos de Vida.</b> Começa com 16 pontos de vida + Constituição e ganha 4 PV + Con por nível.</p>
        <p><b>Pontos de Mana.</b> Seu melhor amigo não possui pontos de mana. Você usa os seus próprios PM para ativar as habilidades dele.</p>
        <p><b>Perícias Treinadas.</b> Escolha 3 entre Acrobacia (Des), Atletismo (For), Fortitude (Con), Furtividade (Des), Luta (For), Percepção (Sab), Pontaria (Des), Reflexos (Des), Sobrevivência (Sab) e Vontade (Sab).</p>
        <p><b>Defesa.</b> 10 + Destreza + Carisma do treinador + metade do nível do treinador.</p>
        <p><b>Deslocamento.</b> 12m (8q). Se o seu melhor amigo for uma montaria, em vez disso use os deslocamentos que ele fornece.</p>
        <p><b>Ataques.</b> Possui uma arma natural (dano 1d8, crítico x2, corte, impacto ou perfuração, escolhido ao criar o melhor amigo). Se você tiver o suplemento Ameaças de Arton, pode escolher uma das armas naturais descritas na p. 374.</p>
        <p><b>Tipo.</b> Escolha entre animal, construto, espírito, monstro ou morto-vivo. Conforme o tipo, ele recebe os benefícios a seguir.</p>
        <ul>
        <li><i>Animal.</i> +1 em Força, Destreza e Sabedoria, faro, visão na penumbra, treinamento em Percepção e Sobrevivência e +1 na margem de ameaça com suas armas naturais.</li>
        <li><i>Construto.</i> +2 em Constituição, visão no escuro e imunidade a efeitos de cansaço, metabólicos e de veneno. Não respira, alimenta-se ou dorme; não é afetado por condições de descanso, não se beneficia de cura mundana e itens de alimentação e a perícia Cura não funciona com ele, mas Ofício (artesão) pode ser usada com os mesmos efeitos.</li>
        <li><i>Espírito.</i> +1 em Sabedoria e Carisma. Pode assumir uma forma incorpórea Minúscula de energia positiva ou negativa (escolhida ao ser criado) com deslocamento de voo 9m, que não pode atacar ou usar habilidades. Nessa forma, fornece +2 em
        perícias baseadas em Sabedoria (energia positiva) ou +2 em perícias baseadas em Carisma (energia negativa). Você pode gastar uma ação de movimento para fazê-lo mudar entre sua forma normal e sua forma incorpórea.</li>
        <li><i>Monstro.</i> +1 em Força e Destreza, visão no escuro e uma segunda arma natural (quando o melhor amigo faz a ação agredir com outra arma, você pode gastar 1 PM para que ele faça um ataque corpo a corpo extra com essa arma).</li>
        <li><i>Morto-Vivo.</i> +2 em Constituição, visão no escuro e imunidade a efeitos de cansaço, metabólicos, de trevas e de veneno; não respira, alimenta-se ou dorme; não é afetado por condições de descanso, sofre dano por efeitos mágicos de cura de luz e recupera PV com dano de trevas.</li>
        </ul>
        <p><b>Ações.</b> Seu amigo depende de suas instruções para agir. Em termos de regras, a cada turno você pode gastar suas ações com seu personagem (o treinador) ou com seu melhor amigo, em qualquer combinação. Por exemplo, pode gastar sua ação de movimento para percorrer seu deslocamento e sua ação padrão para que seu melhor amigo faça uma ação agredir. Ações adicionais, como aquelas concedidas pela magia Velocidade, também podem ser distribuídas dessa forma.</p>
        <p><b>Nível.</b> Para efeitos baseados no nível do melhor amigo, use o nível do treinador.</p>
        <p><b>Equipamento.</b> Um melhor amigo não pode empunhar nem carregar itens, mas pode vestir até dois itens que, a critério do mestre, sejam adequados a sua forma e natureza.</p>

        <hr>
        <h5>Truques</h5>
        <ul>
        <li><i>Alado.</i> Seu melhor amigo ganha deslocamento de voo 15m. Pré-requisitos: Asas, 5º nível de treinador.</li>
        <li><i>Amigão.</i> Seu melhor amigo recebe +1 em Força e o tamanho dele muda para Enorme. Isso aumenta o dano de suas armas naturais em um passo e afeta seu modificador de Furtividade e manobras (Tormenta20, p. 107). Pré-requisito: melhor amigo Grande, 7º nível de treinador.</li>
        <li><i>Amigo Feroz.</i> Seu melhor amigo recebe +2 em testes de ataque e na margem de ameaça com suas armas naturais, e o dano delas aumenta em um passo.</li>
        <li><i>Amigo Protetor.</i> Quando você sofre dano, caso seu melhor amigo esteja em alcance curto, você pode gastar 2 PM para que ele salte em sua defesa. Se fizer isso, você sofre apenas metade do dano e o melhor amigo sofre o restante.</li>
        <li><i>Amigo Veterano.</i> Seu amigo vira um parceiro veterano de seu tipo. Pré-requisito: 5º nível de treinador.</li>
        <li><i>Amigo Mestre.</i> Seu amigo veterano vira um parceiro mestre de seu tipo. Pré-requisito: Amigo Veterano, 11º nível de treinador.</li>
        <li><i>Anatomia Humanoide.</i> Seu melhor amigo tem uma forma humanoide e Int –2 (em vez de –4). Ele não recebe uma arma natural inicial, mas tem proficiência com armas simples e armaduras leves, pode empunhar dois itens e vestir um item adicional,
        e tem um limite de carga de 10 espaços. Este truque só pode ser escolhido na criação do melhor amigo. Pré-requisito: construto ou morto-vivo.</li>
        <li><i>Arma Natural Adicional.</i> Seu melhor amigo recebe uma arma natural adicional. Quando ele faz a ação agredir com outra arma, você pode gastar 1 PM para que ele faça um ataque corpo a corpo extra com essa arma. Pré-requisito: animal ou monstro.</li>
        <li><i>Asas.</i> Seu melhor amigo possui asas que podem ser usadas para pairar a 1,5m do chão com deslocamento 12m. Isso permite que ele ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Você pode gastar 1 PM por rodada para que ele voe com deslocamento 12m.</li>
        <li><i>Bote.</i> Quando faz uma investida, seu melhor amigo pode atacar com todas as suas armas naturais. Todos os ataques recebem o bônus de +2 da investida, mas devem ser feitos contra o mesmo alvo. Pré-requisito: duas armas naturais.</li>
        <li><i>Condicionamento Especial.</i> O melhor amigo recebe +2 em um atributo e +1 em outro atributo, exceto Inteligência. Você pode escolher este truque uma vez por patamar.</li>
        <li><i>Deslocamento Especial.</i> Seu melhor amigo recebe deslocamento de escalada ou de natação igual a seu deslocamento base. Você pode escolher este truque uma segunda vez para que ele tenha ambos os deslocamentos.</li>
        <li><i>Magia Inata.</i> Escolha uma magia de 1º círculo, arcana ou divina. Seu melhor amigo aprende e pode lançar essa magia (atributo-chave Carisma do treinador). Você pode escolher este truque outras vezes para magias diferentes. Pré-requisito: espírito. e</li>
        <li><i>Manobra Ensaiada.</i> Escolha uma manobra de combate. Seu melhor amigo recebe +2 em testes de ataque para executar essa manobra e, uma vez por rodada, quando ele acerta um ataque com uma arma natural, você pode gastar 1 PM para que ele faça essa
        manobra contra o alvo do ataque como uma ação livre. </li>
        <li><i>Reanimação Sombria.</i> Uma vez por cena, se seu melhor amigo estiver com 0 PV ou menos, você pode gastar 3 PM por patamar para reanimá-lo. Se você fizer isso, ele é reerguido com pontos de vida iguais à metade do seu máximo. Pré-requisito: morto-vivo.</li>
        <li><i>Redução de Dano.</i> Seu melhor amigo recebe redução de dano 5. Pré-requisito: 5º nível de treinador.</li>
        <li><i>Sopro.</i> Seu melhor amigo recebe um sopro de um tipo a sua escolha entre ácido, fogo, frio ou eletricidade. Você pode gastar uma ação padrão e uma quantidade de PM limitada pelo seu Carisma para que seu melhor amigo sopre um cone de 6m de energia do tipo escolhido. Para cada PM gasto, criaturas na área sofrem 2d8 pontos de dano do tipo escolhido
        (Reflexos CD Car do treinador reduz à metade). Pré-requisito: construto, espírito ou monstro.</li>
        <li><i>Táticas de Matilha.</i> Se seu melhor amigo estiver flanqueando um inimigo, além do bônus normal por flanquear, recebe +2 nos testes de ataque (total +4) e nas rolagens de dano contra ele. Se você estiver flanqueando com ele, recebe os mesmos bônus.</li>
        <li><i>Treinamento de Companhia.</i> Seu melhor amigo recebe uma ação de movimento adicional nos turnos dele (apenas para se deslocar). Pré-requisito: animal.</li>
        <li><i>Treinamento Defensivo.</i> Seu melhor amigo passa a receber um bônus na Defesa igual ao seu nível (em vez de metade do nível).</li>
        <li><i>Treinamento Marcial.</i> Seu melhor amigo recebe +2 em testes de ataque e rolagens de dano. Para cada patamar acima de iniciante, esse bônus aumenta em +1. Se ele possuir o truque Anatomia Humanoide, também recebe proficiência com armas marciais,
        armaduras pesadas e escudos. </li>
        <li><i>Veloz.</i> Seu melhor amigo recebe +2 na Defesa e +3m em seus deslocamentos e se torna treinado em Atletismo (se já for, recebe +2 nessa perícia).</li>
        </ul>`,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Enganação',
          'Fortitude',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/classe_treinador.png',
        tabela: 'assets/img/tabela_classe_treinador.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 18,
        nome: 'Frade',
        descricao_classe: `<h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b> Um frade começa com 12 pontos de vida (+ Constituição) e ganha 3 PV (+
        Constituição) por nível.</p>
        <p><b>Pontos de Mana.</b> 6 PM por nível.</p>
        <p><b>Perícias.</b> Religião (Sab) e Vontade (Sab), mais 4 a sua escolha entre Adestramento (Car), Atuação (Car), Conhecimento (Int), Cura (Sab), Diplomacia (Car), Fortitude (Con), Guerra (Int), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Misticismo (Int), Ofício (Int), Percepção (Sab) e Nobreza (Int).
        
        <table>
  <thead>
    <tr>
      <th>Nível</th>
      <th>Habilidades de Classe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1º</td>
      <td>Devoto fiel, erudição, magias (1º círculo)</td>
    </tr>
    <tr>
      <td>2º</td>
      <td>Poder de frade, versiculário</td>
    </tr>
    <tr>
      <td>3º</td>
      <td>Poder de frade</td>
    </tr>
    <tr>
      <td>4º</td>
      <td>Poder de frade</td>
    </tr>
    <tr>
      <td>5º</td>
      <td>Dádiva da fé, magias (2º círculo), poder de frade</td>
    </tr>
    <tr>
      <td>6º</td>
      <td>Poder de frade</td>
    </tr>
    <tr>
      <td>7º</td>
      <td>Poder de frade</td>
    </tr>
    <tr>
      <td>8º</td>
      <td>Poder de frade</td>
    </tr>
    <tr>
      <td>9º</td>
      <td>Magias (3º círculo), poder de frade</td>
    </tr>
    <tr>
      <td>10º</td>
      <td>Poder de frade</td>
    </tr>
    <tr>
      <td>11º</td>
      <td>Poder de frade</td>
    </tr>
    <tr>
      <td>12º</td>
      <td>Poder de frade</td>
    </tr>
    <tr>
      <td>13º</td>
      <td>Magias (4º círculo), poder de frade</td>
    </tr>
    <tr>
      <td>14º</td>
      <td>Poder de frade</td>
    </tr>
    <tr>
      <td>15º</td>
      <td>Poder de frade</td>
    </tr>
    <tr>
      <td>16º</td>
      <td>Poder de frade</td>
    </tr>
    <tr>
      <td>17º</td>
      <td>Magias (5º círculo), poder de frade</td>
    </tr>
    <tr>
      <td>18º</td>
      <td>Poder de frade</td>
    </tr>
    <tr>
      <td>19º</td>
      <td>Poder de frade</td>
    </tr>
    <tr>
      <td>20º</td>
      <td>Poder de frade, solo santificado</td>
    </tr>
  </tbody>
</table>

        
        </p>`,
        descricao_habilidades: '',
        descricao_poderes: '',
        ha_informacoes_adicionais: true,
        ha_poderes_db: false,
        ha_complicacoes: false,
        descricao_informacoes: `<div class="row">
        <div class="col-sm-12 text-justify">
        <h5>Missas</h5>
        <p>Assim como o clérigo, o frade pode aprender poderes de missa. Esses poderes são descritos a seguir e compartilham as seguintes regras.</p>
        <ul>
        <li>Rezar uma Missa exige uma hora e o gasto de materiais especiais (como velas, incensos, água benta...) no valor de T$ 25. Um mesmo celebrante pode aplicar mais de um poder de Missa na mesma celebração. Cada poder adicional aumenta o custo da Missa em T$ 25.</li>
        <li>Uma Missa afeta um número máximo de pessoas igual a 1 + sua Sabedoria. Todas as pessoas precisam estar presentes durante toda a Missa.</li>
        <li>Os efeitos de uma Missa duram um dia. Uma mesma criatura só pode receber os benefícios da mesma Missa uma vez por dia.</li>
        </ul>

        <hr>

        <h5>Sacrários</h5>
        <p>Alguns poderes de frade são Sacrários – uma área consagrada pelo poder divino. Esses poderes compartilham as seguintes regras.</p>
        <ul>
        <li>Ativar um sacrário gasta uma ação padrão e 3 PM.</li>
        <li>Um sacrário ocupa uma esfera de 3m de raio em alcance curto e dura até o fim da cena.</li>
        <li>Você pode ter um número de sacrários ativos simultâneos igual à sua Sabedoria.</li>
        <li>Um sacrário não pode ser ativado em uma área afetada por outro sacrário.</li>
        </ul>
        </div>
        </div>`,
        fator_vida: 3,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES, Proficiencia.ARMADURAS_LEVES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Religião'],
        pericias_escolha_grupo: [
          'Adestramento',
          'Atuação',
          'Conhecimento',
          'Cura',
          'Diplomacia',
          'Fortitude',
          'Guerra',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Misticismo',
          'Ofício',
          'Percepção',
          'Nobreza',
        ],
        numero_pericias_escolha_grupo: 4,
        imagem: 'assets/img/classe_frade.png',
        tabela: 'assets/img/tabela_classe_frade.png',
        referencias: Referencia.HEROIS,
        paginas: '',
      },
      {
        id: 34,
        nome: 'Miragem',
        descricao_classe: `
        <h5>Características de Classe</h5>
        <p><b>Pontos de Vida.</b> Um miragem começa com 16 pontos de vida + Constituição e ganha 4 PV + Constituição por nível.</p>
        <p><b>Pontos de Mana.</b> 3 PM por nível.</p>
        <p><b>Perícias.</b>  Luta (For) ou Pontaria (Des), Reflexos (Des), mais 2 a sua escolha entre Acrobacia (Des), Adestramento (Car), Atletismo (For), Fortitude (Con), Furtividade (Des), Guerra (Int), Iniciativa (Des), Intimidação (Car), Luta (For), Ofício (Int), Percepção (Sab), Pontaria (Des) e Sobrevivência (Sab).</p>
        <p><b>Proficiências.</b> Armas marciais e escudos.</p>
        <table>
            <thead>
              <tr>
                <th>Nível</th>
                <th>Habilidade de Classe</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1º</td><td>Dança da areia +1d4, Movimento furtivo</td></tr>
              <tr><td>2º</td><td>Poder de miragem</td></tr>
              <tr><td>3º</td><td>Investida acrobática, Poder de miragem</td></tr>
              <tr><td>4º</td><td>Poder de miragem</td></tr>
              <tr><td>5º</td><td>Cortina de poeira, Dança da areia +1d6, Poder de miragem</td></tr>
              <tr><td>6º</td><td>Poder de miragem</td></tr>
              <tr><td>7º</td><td>Guerrilheiro das dunas, Poder de miragem</td></tr>
              <tr><td>8º</td><td>Poder de miragem</td></tr>
              <tr><td>9º</td><td>Dança da areia +1d8, Mergulho terrestre, Poder de miragem</td></tr>
              <tr><td>10º</td><td>Poder de miragem</td></tr>
              <tr><td>11º</td><td>Poder de miragem</td></tr>
              <tr><td>12º</td><td>Poder de miragem</td></tr>
              <tr><td>13º</td><td>Dança da areia +1d10, Poder de miragem</td></tr>
              <tr><td>14º</td><td>Poder de miragem</td></tr>
              <tr><td>15º</td><td>Poder de miragem</td></tr>
              <tr><td>16º</td><td>Poder de miragem</td></tr>
              <tr><td>17º</td><td>Dança da areia +1d12, Poder de miragem</td></tr>
              <tr><td>18º</td><td>Poder de miragem</td></tr>
              <tr><td>19º</td><td>Poder de miragem</td></tr>
              <tr><td>20º</td><td>Corpo de areia, Poder de miragem</td></tr>
            </tbody>
          </table>
`,
        ha_informacoes_adicionais: true,
        ha_poderes_db: true,
        ha_complicacoes: false,
        descricao_informacoes: `<div class="row">
<div class="col-sm-12 text-justify">
<h5>Demônios de Areia</h5>
<p>Um demônio de areia é um espírito menor que se manifesta na forma de um pequeno animal do deserto feito de areia. Em termos de jogo, é um aliado especial com o qual você pode se comunicar telepaticamente em alcance médio. Ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de sua forma pode fazer. Se ele morrer, você fica atordoado por uma rodada. Você pode invocar um novo demônio de areia com um ritual que exige um dia e T$ 100 em ingredientes.</p>
<ul>
<li>Coiote. Quando faz um teste de Acrobacia ou Sobrevivência, você pode pagar 1 PM para rolar dois dados e usar o melhor resultado.</li>
<li>Escorpião. Você pode gastar uma ação de movimento e 1 PM para envenenar uma arma que esteja empunhando. A arma causa perda de 1d12 pontos de vida. O veneno dura até você acertar um ataque ou até o fim da cena (o que acontecer primeiro). Veneno.</li>
<li>Falcão. Você não pode ser surpreendido e nunca fica desprevenido.</li>
<li>Raposa. Seu deslocamento aumenta em +3m.</li>
<li>Serpente. Você adquire percepção às cegas em alcance curto.</li>
<li>Urubu. Você soma sua Sabedoria em Fortitude e em seu total de pontos de vida.</li>
</ul>
</div>
</div>
        `,
        fator_vida: 2,
        fator_mana: 6,
        proficiencias: [Proficiencia.ARMAS_SIMPLES],
        pericia_obrigatoria: 'Vontade',
        pericia_escolha_entre_duas: ['Misticismo'],
        pericias_escolha_grupo: [
          'Conhecimento',
          'Diplomacia',
          'Enganação',
          'Guerra',
          'Iniciativa',
          'Intimidação',
          'Intuição',
          'Investigação',
          'Nobreza',
          'Ofício',
          'Percepção',
        ],
        numero_pericias_escolha_grupo: 2,
        imagem: 'assets/img/classe_miragem.png',
        referencias: Referencia.DB,
        paginas: '199, pag. 78 à 81',
      },
    ];
  }
}
