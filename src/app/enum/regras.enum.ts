export enum Regras {
  MONTARIA = `<p>Montarias são um tipo específico de parceiro. Elas usam as seguintes regras especiais.</p>
  <ul>
  <li>Para usar um parceiro montaria você precisa montar nele. Para passá-lo para outro aliado, precisa desmontar antes. Ambas são ações de movimento.</li>
  <li>Uma vez montado, você precisa gastar uma ação de movimento e fazer um teste de Cavalgar (CD 10) por turno para guiar a montaria. Se passar, recebe os benefícios dela. Se falhar, perde a ação de movimento. Se falhar por 5 ou mais, cai da montaria e sofre 1d6 pontos de dano. Se for treinado em Cavalgar, você recebe os bônus da montaria automaticamente, sem precisar gastar a ação ou fazer o teste.</li> <li>Se você sofrer dano, deve fazer um teste de Cavalgar (CD igual ao dano). Se falhar, cai da montaria e sofre 1d6 pontos de dano. Se possuir o poder Ginete, você não precisa fazer esse teste.</li>
  <li>Cada parceiro montaria possui uma categoria de tamanho (indicada ao lado do nome do parceiro). Um personagem só pode montar uma montaria maior do que ele mesmo, e enquanto estiver montado usa o tamanho da montaria para efeitos do espaço que ocupa e para modificador de Furtividade.</li>
  <li>O balanço da montaria em movimento torna mais difícil atacar à distância (–2 em testes de ataque) e conta como condição ruim para lançar magias. Se possuir o poder Ginete, você não sofre nenhuma dessas penalidades.</li>
  </ul>
  <p>Montarias podem ser compradas ou recebidas por habilidades. No primeiro caso, são sempre parceiros iniciantes. No segundo, seu poder é definido pela habilidade em questão. Note que embora alguns animais sejam facilmente comprados, como cavalos e trobos, outros são raros. Encontrar um grifo à venda é quase impossível!</p>`,
  ARMAS_NATURAIS_ATAQUES_DESARMADOS = `<p>Um ataque desarmado é um soco, chute ou qualquer outro golpe que use seu  próprio corpo. Um ataque desarmado é considerado uma arma leve corpo a corpo que causa dano de impacto não letal (1d3 pontos de dano para criaturas Pequenas e Médias) e não é afetado por efeitos que mencionem especificamente objetos ou armas empunhadas. Uma criatura só possui um único ataque desarmado (mas pode escolher qual parte do corpo utiliza cada vez que o desfere).</p>
  <p>Armas naturais representam partes específicas do corpo de uma criatura que podem ser usadas para desferir ataques, como chifres, garras ou uma poderosa mordida. Armas naturais são consideradas armas leves corpo a corpo e, assim como ataques desarmados, não são afetadas por efeitos que afetem especificamente objetos (uma arma natural não pode ser desarmada ou quebrada, por exemplo) ou que afetem armas que precisam ser empunhadas. A quantidade e tipo de dano de cada arma natural é apresentada em sua descrição.</p>`,
  ARMAS_IMPROVISADAS = `<p>Atacar com um objeto que não tenha sido feito para lutar (cadeiras, garrafas quebradas...) provoca penalidade de –2 no teste de ataque. Via de regra, armas improvisadas causam 1d6 pontos de dano, com crítico x2, mas esses valores podem mudar de acordo com o mestre. O tipo de dano é determinado pelo mestre (impacto para cadeira, corte para garrafa quebrada...).</p>`,
  INSTRUMENTOS_MUSICAIS = `<p>Alguns itens da categoria ferramentas são instrumentos musicais. Tais itens são de grande importância para bardos e possuem as regras a seguir</p>
  <ul>
  <li>Você precisa empunhar um instrumento musical com as duas mãos para receber seus benefícios e para usar Músicas de Bardo (veja a página 45).</li>
  <li>Instrumentos musicais podem ser usados como esotéricos por bardos (permitindo que lance magias usando a mão que empunha o instrumento).</li>
  <li>Instrumentos musicais podem receber melhorias de ferramentas (contam como itens ligados a Atuação) e de esotéricos (mas afetam apenas magias lançadas por bardos).</li>
  </ul>`,
  REGRAS_VENENO = `<p>Venenos são classificados de acordo com o método de inoculação.</p>
  <p><b>Contato.</b> Inoculados via um ataque que acerte (ou se a vítima toca o objeto envenenado). Aplicar um veneno em uma arma exige uma ação de movimento e uma rolagem de 1d6. Se você rolar 1, se envenena acidentalmente (mas veja o poder Venefício). O veneno permanece na arma até acertar um ataque ou até o fim da cena (o que acontecer primeiro).</p>
  <p><b>Inalação.</b> Inoculados via respiração. São armazenados em frascos que podem ser arremessados em alcance curto. Quando o frasco se quebra, libera o veneno num cubo com 3m de lado. Todas as criaturas na área são expostas — prender a respiração não impede a inoculação, pois o veneno pode entrar por canais lacrimais, membranas nasais e outras partes do corpo.</p>
  <p><b>Ingestão.</b>Inoculados através da ingestão de comida ou bebida.</p>
  <p>Uma criatura exposta a um veneno deve fazer um teste de Fortitude (CD definida pelo aplicador do veneno, atributo-chave Int). Se falhar, sofre o efeito do veneno (efeitos em parênteses afetam vítimas que passem no teste de resistência). Efeitos que não sejam instantâneos, como perda de PV recorrente ou condições, deixam a vítima com a condição envenenada, e curar esta condição encerra quaisquer efeitos de veneno (mas não recupera PV perdidos).</p>`,
  PRATOS_ESPECIAIS = `<p>A seção Alimentação traz pratos especiais, refeições feitas com ingredientes selecionados e que fornecem um benefício. Um prato especial deve ser consumido ao ser comprado ou fabricado. Seu bônus dura um dia e você só pode receber um bônus de alimentação por dia.</p>
  <p>Note que, se estiver usando a regra de custo de vida (veja a página 277), você não precisa se preocupar com a alimentação de seu personagem — refeições corriqueiras são apenas pano de fundo. Assim, use pratos especiais apenas quando quiser um benefício — e estiver disposto a pagar por ele!</p>
  <p>Fabricar um prato especial leva 1 hora e exige um teste de Ofício (cozinheiro) contra CD 15). Você pode sofrer –5 no teste para fabricar até cinco pratos (pagando o custo de todos).</p>`,
  TREINANDO_MONTARIAS_SELVAGENS = `<p>As duas formas mais comuns para um personagem obter uma montaria é por meio de uma habilidade, como Companheiro Animal e Montaria Sagrada, ou usando tibares para comprar um cavalo, trobo ou outra das montarias comumente disponíveis nos mercados de Arton. Entretanto, existe outra maneira: treinar uma criatura selvagem.</p>
  <p>O primeiro passo para treinar uma criatura é domá-la. Para isso, você precisa capturar a criatura (por meio de uma armadilha, magia etc.) ou derrotá-la em combate. Após isso, deve fazer um teste de Adestramento (CD 15 + ND da criatura). Se passar, você doma a criatura e pode começar a treiná-la. Se falhar, a criatura é muito selvagem para ser treinada.</p>
  <p>Uma vez que a criatura seja domada, é hora de começar seu treinamento. Isso é um teste estendido de Adestramento (CD 15 + ND da criatura), no qual é necessário um total de sucessos igual a 3 + ND da criatura antes de 3 falhas. Cada teste representa um dia de trabalho e você recebe um bônus cumulativo de +1 para cada sucesso consecutivo. Se passar no teste estendido, transforma a criatura em um parceiro montaria iniciante. Se falhar, precisa começar o treinamento do início.</p>
  <p>Treinar uma criatura selvagem exige tempo e dedicação. O treinador se torna responsável pela criatura e deve cuidar de sua alimentação, saúde e segurança. Além disso, precisa passar tempo suficiente a seu lado para que ela se acostume com sua presença. Por isso, durante o período de treinamento, você sofre uma penalidade de –2 em testes de perícia e sua recuperação de PM por descanso diminui em um nível.</p>
  <p>A critério do mestre, estas regras também podem ser usadas para treinar outros tipos de parceiros irracionais (como um animal perseguidor ou vigilante).</p>`,
  ITENS_SUPERIORES = `<p>Itens superiores são equipamentos de alta qualidade, fabricados com as melhores técnicas e matérias-primas. Em termos de jogo, itens superiores possuem de uma a quatro melhorias. Cada melhoria fornece um benefício, mas aumenta o preço do item. Por exemplo, uma espada longa normal custa T$ 15. Uma espada longa superior com uma melhoria custa T$ 315. Já uma espada longa com quatro melhorias custa incríveis T$ 18.015!</p>
  <p>Itens com uma melhoria são caros, mas ainda relativamente comuns. Por exemplo, um castelo poderoso e próspero pode equipar seus guardas com armas com uma melhoria. Itens com duas melhorias são muito valiosos, e nunca são produzidos em grande quantidade. O capitão da guarda do mesmo castelo pode ter um item com duas melhorias. Já itens com três ou quatro melhorias são obras-primas, tão ou mais famosos quanto seus portadores. O senhor ou a senhora do castelo do exemplo talvez tenha um item assim, e ele provavelmente terá sido uma herança passada de geração em geração.</p>`,

  
  FABRICANDO_ITENS_SUPERIORES = `<p>Itens superiores só podem ser fabricados por personagens com a habilidade Fabricar Item Superior (veja a página 68). A fabricação deles segue a mesma regra de itens normais, porém, de acordo com o número de melhorias, o preço e a CD do teste de Ofício aumentam (veja a tabela abaixo). </p>
    <hr>
    <p>
  <table style="border-collapse: collapse; width: 100%; text-align: center; font-family: Arial, sans-serif;">
    <thead>
      <tr style="background-color: #b22222; color: white;">
        <th>Número de Melhorias</th>
        <th>Aumento no Preço</th>
        <th>Aumento na CD</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>+ T$ 300</td>
        <td>+5</td>
      </tr>
      <tr>
        <td>2</td>
        <td>+ T$ 3.000</td>
        <td>+10</td>
      </tr>
      <tr>
        <td>3</td>
        <td>+ T$ 9.000</td>
        <td>+15</td>
      </tr>
      <tr>
        <td>4</td>
        <td>+ T$ 18.000</td>
        <td>+20</td>
      </tr>
    </tbody>
  </table>
      <hr>
  </p>
  <p>Por exemplo, o preço de uma couraça é T$ 500. Fabricá-la exige um gasto de T$ 166 (um terço do preço) e um teste de Ofício contra CD 15. Já o preço de uma couraça com duas melhorias é T$ 3.500 (T$ 500 + T$ 3.000 das duas melhorias). Fabricá-la exige um gasto de T$ 1.166 (um terço do preço) e um teste de Ofício contra CD 25 (15 da CD base + 10 das duas melhorias).</p>
  <p>É possível adicionar melhorias a um item. Você paga a diferença de acordo com o novo número de melhorias. Por exemplo, para adicionar a terceira melhoria a um item que já possui duas, você precisa pagar mais T$ 2.000 (um terço da diferença de três para duas melhorias). Além disso, deve fazer um teste de Ofício contra a CD do número de melhorias que o item passará a ter e, se falhar por 5 ou mais, estraga o item.</p>`,
}
