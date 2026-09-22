import { Injectable } from '@angular/core';
import { Complicacao } from '../model/complicacao';
import { Str } from '@app/model/str';

@Injectable({
  providedIn: 'root',
})
export class StrData {
  private str: Str[] = [];

  get(): any[] {
    return this.str;
  }

  constructor() {
    this.str = [
      {
        id: 1,
        nome: 'Gustavo Samuel',
        pergunta: `<p>Como funciona a regra de execução de magias no caso de bardos? Sendo utilizado um instrumento ou uma arma, ele ainda precisa ter a mão livre? A única penalidade ignorada para as magias arcanas dele é a de armaduras leves? Se um bardo usar uma arma e um escudo, ele ainda pode lançar magias?</p>`,
        resposta: `<p>Artístico sr. Samuel, conforme consta nas regras de magia do Livro Básico de Tormenta20 (página 160), lançar uma magia envolve pronunciar palavras mágicas e gesticular com pelo menos uma mão livre. Essa regra vale tanto para magias arcanas quanto divinas, independentemente da classe do personagem.</p>
        <p>Se ele segura um instrumento musical com as duas mãos, pode soltar uma delas para fazer os gestos mágicos, considerando que instrumentos maiores, como um alaúde, podem ter uma bandoleira para apoiar nos ombros. No entanto, empunhar uma arma e um escudo pesado deixa as mãos ocupadas, impossibilitando os gestos. Note ainda que um bardo não é obrigado a ter um instrumento musical para usar suas habilidades, inclusive magias.</p>
        <p>A relação do bardo com armaduras leves é eliminar a necessidade de testes de misticismo para lançar uma magia arcana vestindo uma armadura leve (pág. 161 – Armaduras e Magia Arcana), mas ele não ignora a penalidade de armadura em si (para outros fins, como sua aplicação em certas perícias). Ele ainda pode lançar magias usando uma arma e um escudo leve que, conforme indicado em sua descrição, possibilita o uso da mão para empunhar objetos e fazer os gestos e não requer testes adicionais (a regra da página 161 é só para armaduras, não para escudos), mas não poderia fazer isso empunhando uma arma e um escudo pesado.</p>`,
        data: 'abril/2022',
        db: '178',
        pagina: '10',
      },
      {
        id: 2,
        nome: 'Joel Coelho',
        pergunta: `<p>Como é feito o cálculo para os passos de dano de armas? A tabela mostra até +3 passos, mas caso precise aumentar em mais, como calculo? Exemplo: Lutador com 9 poderes da Tormenta, sendo um deles corpo aberrante (+3 passos de dano) e usando uma manopla de adamante (+1 passo de dano) ficaria com +4 passos de dano. Isso sem falar se estiver usando uma manopla aumentada (+1 passo de dano) ou ser beneficiado com a magia aumentar tamanho.</p>`,
        resposta: `<p>Pugilíssimo sr Coelho, a tabela de aumento de dano para armas é uma progressão linear organizada em forma de tabela para facilitar a consulta rápida. Caso precise aumentar em mais de três passos o dano de uma arma, consulte sempre a progressão do valor na linha de baixo.</p>
        <p>Usando seu próprio exemplo, temos um lutador de décimo nível (no mínimo) que tem total desapego por seu carisma, usando uma manopla grande de adamante e afetado pela magia alterar tamanho, somando um total de cinco passos de aumento no dano. Seu ataque desarmado padrão é 1d10, aumentando então para 1d12, depois 3d6, 4d6, 4d8, e então para 4d12. Lembrando que 4d12 é o limite de aumento de passos de dano para qualquer arma.</p>
        <p>Importante observar que usar manoplas de um tamanho maior não aumentam seu dano, apenas fazem o que mesmo que fariam para uma criatura Grande: tornam o dano de seu ataque desarmado letal.</p>`,
        data: 'abril/2022',
        db: '178',
        pagina: '11',
      },
      {
        id: 3,
        nome: 'Lucas Waterkemper Alberton',
        pergunta: `<p>Com relação à magia controlar o tempo usada com o efeito de congelar o tempo:</p>
        <p>1) O que acontece se objetos em minha posse deixarem de tocar meu corpo? Eles continuam se movendo ou ficam congelados? Se eles ficam congelados, como isso interage com itens disparados ou arremessados?</p>
        <p>2) É dito que magias de área com duração maior que o efeito do congelar o tempo agem normalmente após congelar o tempo acabar, porém caso eu lance uma magia com duração de 5 rodadas por exemplo, no primeiro turno com o tempo congelado, ao término dos 3 turnos com o tempo parado essa magia irá perdurar por 5 turnos ou por apenas mais 2? Em suma, a duração da magia continua contando com o tempo parado?</p>
        <p>3) Também é dito que criaturas e objetos em posse de criaturas ficam imunes a meus ataques e magias. Contudo eu ainda posso interagir com eles? Eu poderia mover uma criatura paralisada por congelar o tempo para outro local, isso acarretando em uma situação perigosa para a mesma, como deixa-la em queda livre? Caso eu tenha deixado a ação preparada para usar a magia quando um inimigo atacar, eu poderia tirar um aliado da frente do ataque? Eu queria saber se eu poderia afetar criaturas com algo que não fosse considerado um ataque ou magia, como por exemplo, usar balsamos restauradores e essência de mana nos meus aliados.</p>
        <p>4) Posso usar venenos, poções e engenhocas durante o efeito da magia?</p>`,
        resposta: `<p>1) Cérele sr. Alberton, como todos os efeitos não mecânicos em magias, seu mestre sempre tem a palavra final sobre a interação da magia com o ambiente de jogo — no caso, a claríssima intenção de posicionar uma bigorna sobre a cabeça de um adversário.</p>
        <p>1) A interpretação mais comum seria que objetos largados por você ficariam igualmente congelados no tempo, passando a se mover assim que o efeito da magia terminar. No entanto, leve em consideração que arremessar qualquer objeto contra um alvo é uma ação de ataque a distância, que é terminantemente vetada durando os efeitos de congelar o tempo. Mesmo objetos largados a grandes alturas precisam ser mirados usando um teste de pontaria para acertar um alvo e, por isso, são considerados ataques. No entanto, você poderia usar uma ou mais de suas ações para arremessar uma bomba ou poção-granada, que ficaria congelada no ar, atingindo o ponto de impacto escolhido assim que o efeito de congelar o tempo terminar.</p>
        <p>2) Sobre a duração de magias, ela passa a ser contada depois que o efeito de congelar o tempo terminar, já que durante esse período é como se nenhum tempo tivesse passado. É como se a magia também ficasse congelada no tempo.</p>
        <p>3) Não é possível mover criaturas durante o efeito de congelar o tempo porque, em termos de regra, essas são manobras de combate (agarrar, empurrar, etc.), que são realizadas através de ataques corpo a corpo. Também não é possível fazer criaturas beberem poções, já que essa seria uma ação da criatura ou uma ação agarrar, como dito na página 327. Sobre o uso de outros itens, que não dependem de ações da criatura ou manobras de combate, como o caso do bálsamo, fica a critério do mestre. Aplicar o bálsamo numa ferida por debaixo de uma armadura completa, por exemplo, pode ser impossível por conta da limitação de interagir com o objeto em posse de outra criatura.</p>
        <p>4) Você pode aplicar venenos em suas armas ou mesmo em objetos que não estão em posse de nenhum outro personagem, como um caldeirão de comida no centro da mesa. Você pode beber poções, mas não usá-las em outras criaturas, conforme falamos anteriormente. Você pode ativar engenhocas, mas não pode ter outras criaturas como alvo. Como diz o texto de engenhocas (pg. 71): para outros custos e limitações, o efeito gerado pela engenhoca funciona exatamente como uma magia. Neste caso, a imunidade contra suas magias se extende para suas engenhocas.</p>`,
        data: 'abril/2022',
        db: '178',
        pagina: '11 e 12',
      },
      {
        id: 4,
        nome: 'João Portilho',
        pergunta: `<p>Quais itens exatamente são possíveis de se utilizar punga? Posso roubar a mochila do inimigo com todos os itens dele ? Posso roubar a arma que está na bainha? Posso roubar a roupa dele? Posso roubar o escudo que está na mão? Posso roubar a armadura que está com suas peças encaixadas nele as desencaixando ? Poderia roubar a arma dele?</p>`,
        resposta: `<p>Larapiante sr. Portilho, mais uma vez este tribunal evoca a máxima declarada pelo excelentíssimo Ministro Leonel Caldela, imortalizada na página 228 do Livro Básico:</p>
        <p>Quando um jogador declara uma ação, você (o mestre) deve decidir o resultado dela, usando as mecânicas ou seu bom senso. Também deve julgar as reações dos NPCs com base no comportamento dos heróis. Este equilíbrio entre julgamento de interpretação arbitragem de regras é a essência do “poder” do mestre.</p>
        <p>Por definição, uma punga é um furto despercebido de um pequeno objeto que possa ser pego (esteja solto, seja fácil de remover, etc, a critério do mestre). Pungar objetos grandes como um escudo ou arma pode até ser possível em níveis mais fantasiosos mas, em termos gerais, é praticamente impossível e uma óbvia condição desfavorável, que pode e deve acarretar em penalidades para o personagem no teste de punga (a critério do mestre, mas algo mais suave do que -20 não seria adequado).</p>
        <p>Já objetos vestidos, como roupas e armaduras, requerem um movimento específico e complexo demais para ser realizado em uma única ação padrão, muito menos de forma despercebida. Remover uma armadura leve, por exemplo, requer uma ação completa. Este é um bom exemplo de quando o bom senso do mestre vale mais do que qualquer descrição de regra.</p>`,
        data: 'abril/2022',
        db: '178',
        pagina: '12',
      },
      {
        id: 5,
        nome: 'Gabriel Moreira',
        pergunta: `<p>Bom dia, tarde ou noite! Meus queridos balanceadores do bonk nosso de cada dia, podem me chamar de Kasu.</p>
        <p>Eu gostaria de botar para jogo algumas dúvidas a respeito do estilo de combate mais esquecido de todos, mas um dos mais ESTILOSOS entre todos os estilos: o Estilo de Arremesso.</p>
        <p>O texto do poder Estilo de Arremesso dita que " Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas. Pré-requisito: treinado em Pontaria." Pag 125.</p>
        <p>1) O que são "armas de arremesso"? Não existe essa categoria na lista de armas, e nem essa habilidade para armas visto na Pag. 147. Existem algumas armas onde está escrito "pode ser arremessada" no fim das descrições, mas arremessar uma arma é uma manobra que se pode fazer com qualquer arma, assumindo um -5 no acerto, como visto na pag 141 sobre Alcance.</p>
        <p>Isso significa que se eu arremessar um machado táurico, ganho o bonus de +2 no dano? Um machado táurico arremessado, vira uma "arma de arremesso"? Eu entendo que essa "categoria" de armas sejam todas aquelas que tenham "alcance curto" na tabela de armas, ou todas que tenham em sua descrição o texto de "pode ser arremessada", mas gostaria de uma confirmação de como definir uma "arma de arremesso".</p>
        <p>2) Da forma como está escrito, eu recebo esse bônus de +2 em qualquer ataque usando uma "arma de arremesso", não apenas quando eu, de fato, arremesso ela. Era essa a intenção? Eu entendo que sim, pois o intuito desse estilo me parece ser um mix entre ataques corpo a corpo e a distância, a depender da situação, e por isso o bônus deve funcionar independente do tipo de ataque, mas gostaria de uma confirmação.</p>
        <p>3) Estilos como duas armas ou ambidestria funcionam com armas de arremesso em conjunto com o estilo de arremesso? Eles funcionam em conjunto com Disparo Rápido? Disparo Rápido funciona com armas de arremesso (já que pede estilo de arremesso como requisito)? Se sim, isso significa que Disparo Rápido pede o mesmo tipo de arma, e não a mesma arma, para ser usado?</p>
        <p>Enfim, obrigado desde já! E parabéns pelo programa, ele está perfeito no novo formato!</p>`,
        resposta: `<p>Belicosíssimo sr. Kasu, antes de mais nada, esse tribunal agradece os elogios. Vamos aos pareceres divididos entre suas dúvidas.</p>
        <p>1) Por definição, armas de arremesso são todas aquelas que, em sua descrição, especificam que podem ser arremessadas. Armas que se enquadram nessa descrição são beneficiadas pelo poder Estilo de Arremesso. Arremessar armas sem alcance é possível, assim como arremessar qualquer objeto, como um tijolo, mas isso não torna esse objeto uma arma de arremesso, ja que ele não foi construído para essa finalidade</p>
        <p>2) Embora eu entenda seu raciocínio, neste caso o sr. não está correto. "Arremesso" não é uma habilidade de arma. É um tipo de arma de ataque à distância. Uma adaga (e machadinha, lança…) é uma arma corpo a corpo que pode ser usada como uma arma de ataque à distância de arremesso. Se ela é usada no corpo a corpo, é de corpo a corpo. Se ela é arremessada, é de arremesso. Ela pode ser sacada com ação livre por quem tem o Estilo de Arremesso, porque ela é uma arma de arremesso. Mas se for usada para um ataque corpo a corpo, não ganha o bônus de dano porque não está sendo usada como uma arma de arremesso (naquele momento, ela não é uma arma de arremesso).</p>
        <p>3) Sobre a interação com outros estilos, se você cumprir os requisitos de Estilo de Duas Armas — estar usando duas armas e pelo menos uma delas ser leve, mesmo que sejam armas de arremesso —, pode fazer dois ataques (sejam corpo a corpo ou à distância) um com cada arma, sem a penalidade caso possua Ambidestria. Da mesma forma, se cumprir as condições de Disparo Rápido, você pode fazer dois ataques (seja com um arco longo ou arremessando duas adagas, por exemplo). E mais uma vez o sr. está correto; Disparo Rápido pede que o ataque adicional seja feito com o mesmo tipo de arma – uma arma de ataque à distância – não exatamente com a mesma arma. No entanto, não é possível fazer três ataques combinando Disparo Rápido e Estilo de Duas Armas pois este último poder requer que você faça uma ação atacar para ser ativado, enquanto que o primeiro não é uma ação deste tipo, mas sim uma ação completa especifica.</p>
        <p>Na prática, ambos os poderes são úteis, mas para coisas diferentes; Disparo Rápido permite o uso de poderes como Estilo de Uma Mão ao usar armas de arremesso, por exemplo, enquanto Estilo de Duas Armas combina bem com Ambidestria.</p>`,
        data: 'abril/2022',
        db: '178',
        pagina: '12 e 13',
      },
    ];
  }
}
