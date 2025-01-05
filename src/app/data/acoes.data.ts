export const acoes = [
  {
    id: 1,
    nome: 'AGREDIR',
    custo: 'AÇÃO PADRÃO',
    tracos: [
      'COMBATE',
      'ATAQUE',
      'ATAQUE CORPO A CORPO',
      'LUTA',
      'ATAQUE A DISTÂNCIA',
      'PONTARIA',
    ],
    descricao: `<p>Você faz um ataque com uma arma corpo a corpo ou à distância.</p>
    <p>Com uma arma corpo a corpo, você pode atacar qualquer inimigo dentro de seu alcance natural (1,5m para criaturas Pequenas e Médias ou um inimigo adjacente no mapa). Personagens maiores, ou usando certas armas, podem atacar mais longe. Você pode substituir um ataque corpo a corpo por uma manobra de combate (veja a seguir).</p>
    <p>Com uma arma de ataque à distância, você pode atacar qualquer inimigo que consiga ver e que esteja no alcance da arma (ou até o dobro do alcance, sofrendo uma penalidade de –5).</p>
    <p>Atirando em Combate Corpo a Corpo. Quando faz um ataque à distância contra uma criatura em combate corpo a corpo, você sofre –5 no teste de ataque. Uma criatura está em combate corpo a corpo se estiver dentro do alcance natural de qualquer inimigo (incluindo você).</p>`,
  },
  {
    id: 2,
    nome: 'ATROPELAR',
    custo: 'AÇÃO PADRÃO',
    tracos: [
      'COMBATE',
      'ATAQUE',
      'ATAQUE CORPO A CORPO',
      'MANOBRA',
      'MOVIMENTO',
      'CONDIÇÃO',
      'CAÍDO',
    ],
    descricao: `<p>Você usa uma ação padrão durante um movimento para avançar pelo espaço ocupado por uma criatura (normalmente, você não pode fazer uma ação padrão durante um movimento; isto é uma exceção). A criatura pode lhe dar passagem ou resistir. Se der passagem, você avança pelo espaço dela; nenhum teste é necessário. Se resistir, faça um teste de manobra oposto; se você vencer, deixa a criatura caída e continua seu avanço. Se o alvo vencer, continua de pé e detém seu avanço. Atropelar é uma ação livre se tentada durante uma investida.</p>`,
  },
  {
    id: 3,
    nome: 'FINTAR',
    custo: 'AÇÃO PADRÃO',
    tracos: ['COMBATE', 'CARISMA','PERÍCIA','ENGANAÇÃO', 'CONDIÇÃO', 'DESPREVINIDO', 'TESTE OPOSTO'],
    descricao: `<p>Faça um teste de Enganação oposto ao teste de Reflexos de uma criatura em alcance curto. Se você passar, ela fica desprevenida contra seu próximo ataque, mas apenas até o fim de seu próximo turno.</p>`,
  },
  {
    id: 4,
    nome: 'LANÇAR UMA MAGIA',
    custo: 'VARIAVÉL',
    tracos: ['MAGIA', 'VARIÁVEL'],
    descricao: `<p>A maioria das magias exige uma ação padrão para ser executada.`,
  },
  {
    id: 5,
    nome: 'PREPARAR',
    custo: 'VARIAVÉL',
    tracos: ['VARIÁVEL', 'GATILHO', 'INICIATIVA'],
    descricao: `<p>Você prepara uma ação (padrão, de movimento ou livre) para realizar mais tarde, após seu turno, mas antes de seu turno na próxima rodada. Diga a ação que vai fazer e em quais circunstâncias (por exemplo, “disparar minha besta na primeira criatura que passar pela porta”). A qualquer momento antes de seu próximo turno, você pode fazer a ação preparada como uma reação a essas circunstâncias.</p>
    <p>Se, no seu próximo turno, você ainda não tiver realizado sua ação preparada, não pode mais realizá-la (embora possa preparar a mesma ação de novo).</p>
    <p>Pelo resto do combate, sua Iniciativa fica imediatamente acima da qual você fez a ação preparada.</p>`,
  },
  {
    id: 6,
    nome: 'USAR HABILIDADE OU ITEM MÁGICO',
    custo: 'VARIAVÉL',
    tracos: ['VARIÁVEL'],
    descricao: `<p>Algumas habilidades e itens mágicos, como poções, exigem uma ação padrão para serem usadas.</p>`,
  },
  {
    id: 7,
    nome: 'AGARRAR',
    custo: 'AÇÃO PADRÃO',
    tracos: ['ATAQUE', 'ATAQUE CORPO A CORPO', 'ATAQUE DESARMADO', 'ARMA NATURAL', 'LUTA', 'MANOBRA', 'CONDIÃO', 'AGARRADO', 'IMÓVEL',  'LENTO', 'ARMAS LEVES', 'CHANCE ALVEJAR ALIADO', 'TESTE OPOSTO'],
    descricao: `<p>Uma manobra é um ataque corpo a corpo para fazer algo diferente de causar dano — como arrancar a arma do oponente ou empurrá-lo para um abismo. Não é possível fazer manobras de combate com ataques à distância.</p>
    <p>Faça um teste de manobra (um teste de ataque corpo a corpo) oposto com a criatura. Mesmo que ela esteja usando uma arma de ataque à distância, deve fazer o teste usando seu valor de Luta. Em caso de empate, o personagem com o maior bônus vence. Se os bônus forem iguais, outro teste deve ser feito. Em geral, você pode usar qualquer arma corpo a corpo para fazer manobras de combate.</p>
    <p><b>Agarrar.</b> Você segura uma criatura (por seu braço, sua roupa etc.). Uma criatura agarrada fica desprevenida e imóvel, sofre –2 nos testes de ataque e só pode atacar com armas leves. Ela pode se soltar com uma ação padrão, vencendo um teste de manobra oposto. Você só pode agarrar com um ataque desarmado ou arma natural e, enquanto agarra, fica com essa mão ou arma natural ocupada. Além disso, move-se metade do deslocamento normal, mas arrasta a criatura que estiver agarrando. Você pode soltá-la com uma ação livre. Você pode atacar uma criatura agarrada com sua mão livre. Se preferir, pode substituir um ataque por um teste de agarrar contra a criatura. Se vencer, causa dano de impacto igual a um ataque desarmado ou arma natural. Isso significa que você está esmagando ou sufocando o inimigo.</p>
    <p>Um personagem fazendo um ataque à distância contra um alvo envolvido na manobra agarrar tem 50% de chance de mirar no alvo errado!</p>`,
  },
  {
    id: 8,
    nome: 'DERRUBAR',
    custo: 'AÇÃO PADRÃO',
    tracos: ['ATAQUE', 'ATAQUE CORPO A CORPO', 'LUTA', 'MANOBRA', 'CONDIÃO', 'CAÍDO', 'TESTE OPOSTO'],
    descricao: `<p>Uma manobra é um ataque corpo a corpo para fazer algo diferente de causar dano — como arrancar a arma do oponente ou empurrá-lo para um abismo. Não é possível fazer manobras de combate com ataques à distância.</p>
    <p>Faça um teste de manobra (um teste de ataque corpo a corpo) oposto com a criatura. Mesmo que ela esteja usando uma arma de ataque à distância, deve fazer o teste usando seu valor de Luta. Em caso de empate, o personagem com o maior bônus vence. Se os bônus forem iguais, outro teste deve ser feito. Em geral, você pode usar qualquer arma corpo a corpo para fazer manobras de combate.</p>
    <p><b>Derrubar.</b> Você deixa o alvo caído. Esta queda normalmente não causa dano. Se você vencer o teste oposto por 5 pontos ou mais, derruba o oponente com tanta força que também o empurra um quadrado em uma direção a sua escolha. Se isso o jogar além de um parapeito ou precipício, ele pode fazer um teste de Reflexos (CD 20) para se agarrar numa beirada.</p>`,
  },
  {
    id: 9,
    nome: 'DESARMAR',
    custo: 'AÇÃO PADRÃO',
    tracos: ['ATAQUE', 'ATAQUE CORPO A CORPO', 'LUTA', 'MANOBRA', 'ITEM', 'TESTE OPOSTO'],
    descricao: `<p>Uma manobra é um ataque corpo a corpo para fazer algo diferente de causar dano — como arrancar a arma do oponente ou empurrá-lo para um abismo. Não é possível fazer manobras de combate com ataques à distância.</p>
    <p>Faça um teste de manobra (um teste de ataque corpo a corpo) oposto com a criatura. Mesmo que ela esteja usando uma arma de ataque à distância, deve fazer o teste usando seu valor de Luta. Em caso de empate, o personagem com o maior bônus vence. Se os bônus forem iguais, outro teste deve ser feito. Em geral, você pode usar qualquer arma corpo a corpo para fazer manobras de combate.</p>
    <p><b>Desarmar.</b> Você derruba um item que a criatura esteja segurando. Normalmente o item cai no mesmo lugar em que o alvo está (a menos que o alvo esteja voando, sobre uma ponte etc.). Se você vencer o teste oposto por 5 pontos ou mais, derruba o item com tanta força que também o empurra um quadrado em uma direção a sua escolha.</p>`,
  },
  {
    id: 10,
    nome: 'EMPURRAR',
    custo: 'AÇÃO PADRÃO',
    tracos: ['ATAQUE', 'ATAQUE CORPO A CORPO', 'LUTA', 'MANOBRA', 'MOVIMENTO', 'TESTE OPOSTO'],
    descricao: `<p>Uma manobra é um ataque corpo a corpo para fazer algo diferente de causar dano — como arrancar a arma do oponente ou empurrá-lo para um abismo. Não é possível fazer manobras de combate com ataques à distância.</p>
    <p>Faça um teste de manobra (um teste de ataque corpo a corpo) oposto com a criatura. Mesmo que ela esteja usando uma arma de ataque à distância, deve fazer o teste usando seu valor de Luta. Em caso de empate, o personagem com o maior bônus vence. Se os bônus forem iguais, outro teste deve ser feito. Em geral, você pode usar qualquer arma corpo a corpo para fazer manobras de combate.</p>
    <p><b>Empurrar.</b> Você empurra a criatura 1,5m. Para cada 5 pontos de diferença entre os testes, você empurra o alvo mais 1,5m. Você pode gastar uma ação de movimento para avançar junto com a criatura (até o limite do seu deslocamento).</p>`,
  },

  {
    id: 11,
    nome: 'QUEBRAR',
    custo: 'AÇÃO PADRÃO',
    tracos: ['ATAQUE', 'ATAQUE CORPO A CORPO', 'LUTA', 'MANOBRA', 'ITEM', 'TESTE OPOSTO'],
    descricao: `<p>Uma manobra é um ataque corpo a corpo para fazer algo diferente de causar dano — como arrancar a arma do oponente ou empurrá-lo para um abismo. Não é possível fazer manobras de combate com ataques à distância.</p>
    <p>Faça um teste de manobra (um teste de ataque corpo a corpo) oposto com a criatura. Mesmo que ela esteja usando uma arma de ataque à distância, deve fazer o teste usando seu valor de Luta. Em caso de empate, o personagem com o maior bônus vence. Se os bônus forem iguais, outro teste deve ser feito. Em geral, você pode usar qualquer arma corpo a corpo para fazer manobras de combate.</p>
    <p><b>Quebrar.</b> Tentar quebrar ou destruir um objeto — desde uma porta fechada até uma espada empunhada por um inimigo — é similar a atacar uma criatura.</p>
    <p>Para objetos soltos, faça um ataque contra a Defesa do objeto, definida por sua categoria de ta- manho. Se o objeto estiver em movimento, recebe +5 na Defesa. Para um objeto segurado por outra criatura, veja a manobra quebrar.</p>
    <p>Se você acerta o ataque, causa dano normal. En- tretanto, objetos normalmente têm redução de dano, dependendo de seu material. Um objeto reduzido a 0 ou menos PV é destruído.</p>`,
  },
  {
    id: 12,
    nome: 'LEVANTAR-SE',
    custo: 'AÇÃO DE MOVIMENTO',
    tracos: ['MOVIMENTO'],
    descricao: `<p>Levantar do chão (ou de uma cama, cadeira...) exige uma ação de movimento.</p>`,
  },
  {
    id: 13,
    nome: 'MANIPULAR ITEM',
    custo: 'AÇÃO DE MOVIMENTO',
    tracos: ['ITEM', 'MANIPULAÇÃO'],
    descricao: `<p>Muitas vezes, manipular um item exige uma ação de movimento. Pegar um objeto em uma mochila, abrir ou fechar uma porta e atirar uma corda para alguém são ações de movimento.</p>`,
  },
  {
    id: 14,
    nome: 'MIRAR',
    custo: 'AÇÃO DE MOVIMENTO',
    tracos: ['CONCENTRAÇÃO'],
    descricao: `<p> Você mira em um alvo que possa ver, dentro do alcance de sua arma. Isso anula a pena- lidade de –5 em testes de Pontaria realizados neste turno contra aquele alvo caso ele esteja engajado em combate corpo a corpo.</p>`,
  },
  {
    id: 15,
    nome: 'MOVIMENTAR-SE',
    custo: 'AÇÃO DE MOVIMENTO',
    tracos: ['MOVIMENTO'],
    descricao: `<p>Você pode percorrer uma distância igual a seu deslocamento (tipicamente 9m para raças de tamanho Médio). Outros tipos de movimento, como nadar, escalar ou cavalgar, também usam esta ação.</p>`,
  },
  {
    id: 16,
    nome: 'SACAR OU GUARDAR ITEM',
    custo: 'AÇÃO DE MOVIMENTO',
    tracos: ['ITEM'],
    descricao: `<p>Sacar ou guardar um item exige uma ação de movimento.</p>`,
  },
  {
    id: 17,
    nome: 'CORRIDA',
    custo: 'AÇÃO COMPLETA',
    tracos: ['MOVIMENTO', 'FORÇA','PERÍCIA', 'ATLETISMO'],
    descricao: `<p>Você corre mais rapidamente que seu deslocamento normal. Gaste uma ação completa e faça um teste de Atletismo. Você avança um número de qua- drados de 1,5m igual ao resultado do teste. Assim, se somar 20 no teste, avança 20 quadrados de 1,5m. Você recebe um modificador de +/–2 para cada 1,5m de deslocamento acima ou abaixo de 9m que possua. Assim, um elfo (deslocamento 12m) recebe +4 em testes de Atletismo para correr, enquanto um anão (deslocamento 6m) sofre uma penalidade de –4. Você só pode correr em linha reta e não pode correr através de terreno difícil. Você pode correr por um número de rodadas igual a 1 + sua Constituição. Após isso, deve fazer um teste de Fortitude por rodada (CD 15 +1 por teste anterior). Se falhar, fica fatigado.</p>`,
  },
  {
    id: 18,
    nome: 'GOLPE DE MISERICÓRDIA',
    custo: 'AÇÃO COMPLETA',
    tracos: ['CONDIÇÃO', 'INDEFESO', 'CRÍTICO AUTOMÁTICO', 'CHANCE DE MORTE'],
    descricao: `<p>Você desfere um golpe letal em um oponente adjacente e indefeso. Um golpe de misericórdia é um acerto crítico automático. Além de sofrer dano, a vítima tem uma chance de morrer instantaneamente. Esta chance é de 25% (1 em 1d4) para personagens e NPCs importantes e de 75% (1 a 3 em 1d4) para NPCs secundários.</p>`,
  },
  {
    id: 19,
    nome: 'INVESTIDA',
    custo: 'AÇÃO COMPLETA',
    tracos: ['COMBATE',
      'ATAQUE',
      'ATAQUE CORPO A CORPO',
      'LUTA','MOVIMENTO'],
    descricao: `<p>Você avança até o dobro de seu deslocamento (e no mínimo 3m) em linha reta e, no fim do movimento, faz um ataque corpo a corpo. Você recebe +2 no teste de ataque, mas sofre –2 na Defesa até o seu próximo turno, porque sua guarda fica aberta. Você não pode fazer uma investida em terreno difícil. Durante uma investida, você pode fazer a manobra atropelar como uma ação livre (mas não pode atropelar e atacar o mesmo alvo).</p>`,
  },
  {
    id: 20,
    nome: 'ATRASAR',
    custo: 'AÇÃO LIVRE',
    tracos: ['COMBATE',
      'ATAQUE',
      'ATAQUE CORPO A CORPO',
      'LUTA','MOVIMENTO'],
    descricao: `<p> Escolhendo atrasar sua ação, você age mais tarde na ordem de Iniciativa, em relação à Iniciativa que rolou. Isto é o mesmo que reduzir sua Iniciativa voluntariamente pelo resto do combate. Quando sua nova Iniciativa chegar, você age normalmente. Você pode especificar este novo valor de Iniciativa ou apenas esperar até algum momento e então agir, fixando sua nova Iniciativa neste ponto. Atrasar é útil para ver o que seus amigos ou inimigos farão, antes de decidir o que você mesmo fará.</p>
    <ul>
    <li><i>Limites para atrasar.</i> Você pode atrasar sua Ini- ciativa até –10 menos seu bônus de Iniciativa. Quando a contagem de Iniciativa chega a esse ponto, você deve agir ou abrir mão de qualquer ação na rodada. Por exemplo, um personagem com um bônus de Iniciativa +3 pode esperar até a contagem de Iniciativa chegar a –13. Nesse ponto, deve agir ou desistir de seu turno. Isso importa quando vários personagens atrasam suas ações.</li>
    <li><i>Vários atrasos.</i> Se vários personagens estão atrasando suas ações, aquele com o maior bônus de Iniciativa (ou a maior Destreza, em caso de empate) tem a vantagem. Se dois ou mais personagens que estejam atrasando quiserem agir na mesma contagem de Iniciativa, aquele com o maior bônus age primeiro. Se dois ou mais personagens estão tentando agir um depois do outro, aquele com o maior bônus de Iniciativa tem o direito de agir depois.</li>
    </ul>`,
  },
  {
    id: 21,
    nome: 'FALAR',
    custo: 'AÇÃO LIVRE',
    tracos: ['FALA','AUDITIVO'],
    descricao: `<p>Em geral, falar é uma ação livre. Lançar magias ou usar habilidades de classe que dependem da voz não são ações livres. O mestre também pode limitar aquilo que você consegue falar durante uma rodada (vinte palavras são o limite padrão).</p>`,
  },
  {
    id: 22,
    nome: 'JOGAR-SE NO CHÃO',
    custo: 'AÇÃO LIVRE',
    tracos: ['MOVIMENTO','COBERTURA','CONDIÇÃO','CAÍDO'],
    descricao: `<p>Jogar-se no chão é uma ação livre. Você recebe os benefícios e penalidades normais por estar caído, mas normalmente não sofre dano ao se jogar no chão.</p>`,
  },
  {
    id: 23,
    nome: 'LARGAR ITEM',
    custo: 'AÇÃO LIVRE',
    tracos: ['ITEM'],
    descricao: `<p>Deixar cair um item que esteja segurando é uma ação livre. Mas deixar cair (ou jogar) um item com a intenção de acertar algo é uma ação padrão. E deixar cair (ou jogar) um item para que outra pessoa agarre é uma ação de movimento.</p>`,
  },
  {
    id: 24,
    nome: 'AMORTECER QUEDA',
    custo: 'REAÇÃO',
    tracos: ['DESTREZA','PERÍCIA','ACROBACIA','TREINADO', 'CD 15', 'MOVIMENTO', 'ARMADURA'],
    descricao: `<p>Quando cai, você pode gastar uma reação e fazer um teste de Acrobacia para reduzir o dano. Se passar, reduz o dano da queda em 1d6, mais 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD. Se reduzir o dano a zero, você cai de pé.</p>`,
  },
  {
    id: 25,
    nome: 'EQUILÍBRIO',
    custo: 'MOVIMENTO',
    tracos: ['DESTREZA','PERÍCIA','ACROBACIA', 'MOVIMENTO', 'ARMADURA'],
    descricao: `<p>Se estiver andando por superfícies precárias, você precisa fazer testes de Acrobacia para não cair. Cada ação de movimento exige um teste. Se passar, você avança metade do seu deslocamento. Se falhar, não avança. Se falhar por 5 ou mais, cai. A CD é 10 para piso escorregadio, 15 para uma superfície estreita (como o topo de um muro) e 20 para uma superfície muito estreita (como uma corda esticada). Você pode sofrer –5 no teste para avançar seu deslo- camento total. Quando está se equilibrando você fica desprevenido e, se sofrer dano, deve fazer um novo teste de Acrobacia; se falhar, cai.</p>`,
  },
  {
    id: 26,
    nome: 'ESCAPAR',
    custo: 'AÇÃO COMPLETA',
    tracos: ['DESTREZA','PERÍCIA','ACROBACIA', 'MOVIMENTO', 'ARMADURA'],
    descricao: `<p>Você pode escapar de amarras. A dificuldade varia: cordas (CD igual ao resultado do teste de Destreza de quem o amarrou +10), redes (CD 20), algemas (CD 30). Este uso gasta uma ação completa.</p>`,
  },
  {
    id: 27,
    nome: 'LEVANTAR-SE RAPIDAMENTO',
    custo: 'AÇÃO MOVIMENTO',
    tracos: ['DESTREZA','PERÍCIA','ACROBACIA','TREINADO', 'CD 20', 'MOVIMENTO', 'ARMADURA'],
    descricao: `<p> Se estiver caído, você pode fazer um teste de Acrobacia para ficar de pé. Você precisa ter uma ação de movimento disponível. Se passar no teste, se levanta como uma ação livre. Se falhar, gasta sua ação de movimento, mas continua caído.</p>`,
  },
  {
    id: 28,
    nome: 'PASSAR POR ESPAÇO APERTADO',
    custo: 'AÇÃO COMPLETA',
    tracos: ['DESTREZA','PERÍCIA','ACROBACIA','TREINADO', 'CD 25', 'MOVIMENTO', 'ARMADURA'],
    descricao: `<p> Você pode se espremer por espaços  estreitos,  suficientes  para  criaturas  uma categoria de tamanho menor. Você gasta uma ação completa e avança metade do deslocamento.</p>`,
  },
  {
    id: 29,
    nome: 'PASSAR POR INIMIGO',
    custo: 'AÇÃO DE MOVIMENTO',
    tracos: ['DESTREZA','PERÍCIA','ACROBACIA', 'MOVIMENTO', 'ARMADURA', 'TESTE OPOSTO'],
    descricao: `<p> Você pode atravessar um espaço ocupado por um inimigo como parte de seu movimento. Faça um teste de Acrobacia oposto ao teste de Acrobacia, Iniciativa ou Luta do oponente (o que for melhor). Se você passar, atravessa o espa- ço; se falhar, não atravessa e sua ação de movimento termina. Um espaço ocupado por um inimigo conta como terreno difícil.</p>`,
  },
  {
    id: 30,
    nome: 'ACALMAR ANIMAL',
    custo: 'AÇÃO COMPLETA',
    tracos: ['CARISMA','PERÍCIA','ADESTRAMENTO','TREINADO', 'CD 25', 'MOVIMENTO'],
    descricao: `<p> Você acalma um animal nervoso ou agressivo. Isso permite a você controlar um cavalo assustado ou convencer um lobo a não devorá-lo. Este uso gasta uma ação completa.</p>`,
  },
  {
    id: 31,
    nome: 'MANEJAR ANIMAL',
    custo: 'AÇÃO DE MOVIMENTO',
    tracos: ['CARISMA','PERÍCIA','ADESTRAMENTO','TREINADO', 'CD 15', 'MOVIMENTO'],
    descricao: `<p> Você faz um animal realizar uma tarefa para a qual foi treinado (como “atacar”,  “sentar”,  “vigiar”...).  Isso  permite  usar Adestramento como Pilotagem para veículos de tração animal. Este uso gasta uma ação de movimento</p>`,
  },
  {
    id: 32,
    nome: 'ESCALAR',
    custo: 'AÇÃO DE MOVIMENTO',
    tracos: ['FORÇA','PERÍCIA','ATLETISMO', 'MOVIMENTO'],
    descricao: `<p>  Você pode subir superfícies inclinadas ou verticais. Gaste uma ação de movimento e faça um teste de Atletismo. Se passar, você avança metade do seu deslocamento. Se falhar, não avança. Se falhar por 5 ou mais, você cai. A CD é 10 para superfícies com apoios para os pés e mãos (como o cordame de um navio), 15 para uma árvore, 20 para um muro com reentrâncias (como o de uma ruína) e 25 para um muro liso (como o de um castelo). Você pode sofrer –5 em seu teste para avançar seu deslocamento total. Quando está escalando você fica desprevenido e, se sofrer dano, deve fazer um novo teste de Atletismo; se falhar, você cai. Se um personagem adjacente a você estiver escalando e cair, você pode tentar pegá-lo. Faça um teste de Atletismo contra a CD da superfície +10. Se passar, segura o personagem. Se falhar por 5 ou mais, você também cai!</p>`,
  },
  {
    id: 33,
    nome: 'NATAÇÃO',
    custo: 'AÇÃO DE MOVIMENTO',
    tracos: ['FORÇA','PERÍCIA','ATLETISMO', 'MOVIMENTO'],
    descricao: `<p> Se iniciar seu turno na água, você precisa gastar uma ação de movimento e fazer um teste de Atletismo. A CD é 10 para água calma, 15 para agitada e 20 ou mais para tempestuosa. Se passar, você pode avançar metade de seu deslocamento. Se falhar, consegue boiar, mas não avançar. Se falhar por 5 ou mais, você afunda. Se quiser avançar mais, pode gastar uma segunda ação de movimento na mesma rodada para outro teste de Atletismo. Se você estiver submerso (seja por ter falhado no teste de Atletismo, seja por ter mergulhado de propósito), deve prender a respiração. Você pode prender a respiração por um número de rodadas igual a 1 + sua Constituição. Após isso, deve fazer um teste de Fortitude por rodada (CD 15 +1 por teste anterior). Se falhar, se afoga (é reduzido a 0 pontos de vida). Se continuar submerso, perde 3d6 pontos de vida por rodada até ser tirado da água ou morrer. Você sofre penalidade de armadura em testes de Atletismo para nadar.</p>`,
  },
  {
    id: 34,
    nome: 'SALTAR',
    custo: 'AÇÃO DE MOVIMENTO',
    tracos: ['FORÇA','PERÍCIA','ATLETISMO', 'MOVIMENTO'],
    descricao: `<p> Você pode pular sobre buracos ou obs- táculos ou alcançar algo elevado. Para um salto longo, a CD é 5 por quadrado de 1,5m (CD 10 para 3m, 15 para 4,5m, 20 para 6m e assim por diante). Para um salto em altura, a CD 15 é por quadrado de 1,5m (30 para 3m, 45 para 4,5m e assim por diante). Você deve ter pelo menos 6m para correr e pegar impulso (sem esse espaço, a CD aumenta em +10). Saltar é parte de seu movimento e não exige uma ação.</p>`,
  },
  {
    id: 35,
    nome: 'ATUAÇÃO',
    custo: 'VARIÁVEL',
    tracos: ['CARISMA','PERÍCIA','ATUAÇÃO', 'TREINADO', 'CD 20'],
    descricao: `<p>Você pode se apresentar para ganhar dinheiro. Faça um teste. Se passar, você recebe T$ 1d6, mais T$ 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD. Este uso leva um dia (ou noite...). Os valores recebidos pressupõem que você está se apresentando em um lugar propício, como o palco de uma taverna. De acordo com o mestre, você pode receber metade do valor, se estiver em um lugar inadequado (as ruas de uma cidade, um acampamento militar), ou o dobro, se estiver em um lugar especialmente propício (um festival, os salões de um palácio).</p>`,
  },
  {
    id: 36,
    nome: 'IMPRESSIONAR',
    custo: 'VARIÁVEL',
    tracos: ['CARISMA','PERÍCIA','ATUAÇÃO', 'TREINADO', 'TESTE OPOSTO'],
    descricao: `<p> Faça um teste de Atuação oposto pelo teste de Vontade de quem você quer impressionar. Se você passar, recebe +2 em testes de perícias baseadas em Carisma contra essa pessoa no mesmo dia. Se falhar, sofre –2 nesses testes e não pode tentar de novo no mesmo dia. Se estiver tentando impressionar mais de uma pessoa, o mestre faz apenas um teste pela plateia, usando o melhor bônus. Este uso leva de alguns minutos (canto ou dança) até algumas horas (apresentação teatral).</p>`,
  },
  {
    id: 37,
    nome: 'CONDUZIR',
    custo: 'AÇÃO DE MOVIMENTO',
    tracos: ['DESTREZA','PERÍCIA','CAVALGAR', 'MOVIMENTO'],
    descricao: `<p> Cavalgar através de obstáculos exi- ge testes de Cavalgar. A CD é 15 para terreno ruim e obstáculos pequenos (planície pedregosa, vala estrei- ta) e 25 para terreno perigoso ou obstáculos grandes (encosta nevada, pântano traiçoeiro). Se você falhar, cai da montaria e sofre 1d6 pontos de dano. Conduzir é parte de seu movimento e não exige uma ação.</p>`,
  },
  {
    id: 38,
    nome: 'GALOPAR',
    custo: 'AÇÃO COMPLETA',
    tracos: ['DESTREZA','PERÍCIA','CAVALGAR', 'MOVIMENTO'],
    descricao: `<p>Gaste uma ação completa e faça um teste de Cavalgar. Você avança um número de quadrados de 1,5m igual ao resultado do teste. Seu teste sofre um modificador de +/–2 para cada 1,5m de deslocamento acima ou abaixo de 9m que você possua.</p>`,
  },
  {
    id: 39,
    nome: 'MONTAR RAPIDAMENTE',
    custo: 'AÇÃO LIVRE',
    tracos: ['DESTREZA','PERÍCIA','CAVALGAR', 'MOVIMENTO', 'CD 20'],
    descricao: `<p> Você pode montar ou desmontar como uma ação livre (o normal é gastar uma ação de movimento). Se falhar por 5 ou mais, você cai no chão. Esta perícia exige uma sela. Sem ela, você sofre –5 no teste.</p>`,
  },
  {
    id: 40,
    nome: 'IDIOMAS',
    custo: 'VARIÁVEL',
    tracos: ['INTELIGÊNCIAS','PERÍCIA','CONHECIMENTO', 'TREINADO', 'CD 20'],
    descricao: `<p>Você pode entender idiomas desconhecidos. Se falhar por 5 ou mais, você tira uma conclusão falsa. Idiomas exóticos ou muito antigos têm CD 30.</p>`,
  },
  {
    id: 41,
    nome: 'INFORMAÇÃO',
    custo: 'VARIÁVEL',
    tracos: ['INTELIGÊNCIAS','PERÍCIA','CONHECIMENTO', 'TREINADO'],
    descricao: `<p>Você responde dúvidas gerais. Questões simples, como o ano de fundação de um reino, não exigem testes. Questões complexas, como saber o antídoto de um veneno, tem CD 20. Por fim, mistérios e enigmas, como a origem de uma antiga maldição, tem CD 30.</p>`,
  },
  {
    id: 42,
    nome: 'CUIDADOS PROLONGADOS',
    custo: 'VARIÁVEL',
    tracos: ['SABEDORIA','PERÍCIA','CURA', 'TREINADO', 'CD 15', 'DESCANSO','FERRAMENTA'],
    descricao: `<p>Você trata uma pessoa para que ela se recupere mais rapidamente. Se passar, ela aumenta sua recuperação de PV em +1 por nível nesse dia. Este uso leva uma hora e o número máximo de pessoas que você pode cuidar é igual ao seu nível.</p>`,
  },
  {
    id: 43,
    nome: 'NECROPSIA',
    custo: 'VARIÁVEL',
    tracos: ['SABEDORIA','PERÍCIA','CURA', 'TREINADO', 'CD 20','FERRAMENTA'],
    descricao: `<p>Você examina um cadáver para determinar a causa e o momento aproximado da morte. Causas raras ou extraordinárias, como um veneno ou maldição, possuem CD 30. Este uso leva dez minutos.</p>`,
  },
  {
    id: 44,
    nome: 'PRIMEIROS SOCORROS',
    custo: 'AÇÃO PADRÃO',
    tracos: ['SABEDORIA','PERÍCIA','CURA', 'CD 15','FERRAMENTA'],
    descricao: `<p>Você estabiliza um personagem adjacente que esteja sangrando. Este uso gasta uma ação padrão.</p>`,
  },
  {
    id: 45,
    nome: 'TRATAMENTO',
    custo: 'AÇÃO COMPLETA',
    tracos: ['SABEDORIA','PERÍCIA','CURA', 'TREINADO','FERRAMENTA'],
    descricao: `<p>Você ajuda a vítima de uma doença ou veneno com efeito contínuo. Gaste uma ação completa e faça um teste de Cura contra a CD da doença ou veneno. Se você passar, o paciente recebe +5 em seu próximo teste de Fortitude contra esse efeito.</p>`,
  },
  {
    id: 46,
    nome: 'BARGANHA',
    custo: 'VARIÁVEL',
    tracos: ['CARISMA','PERÍCIA','DIPLOMACIA', 'TESTE OPOSTO'],
    descricao: `<p>Comprando ou vendendo algo, você pode barganhar. Seu teste de Diplomacia é oposto pelo teste de Vontade do negociante. Se passar, você muda o preço em 10% a seu favor. Se passar por 10 ou mais, muda em 20%. Se falhar por 5 ou mais, você ofende o negociante — ele não voltará a tratar com você durante pelo menos uma semana. Alguns comerciantes ou estabelecimentos podem não ter permissão de baixar seus preços.</p>`,
  },
  {
    id: 47,
    nome: 'MUDAR ATITUDE',
    custo: 'UM MINUTO',
    tracos: ['CARISMA','PERÍCIA','DIPLOMACIA', 'TESTE OPOSTO'],
    descricao: `<p>Você muda a categoria de atitude de um NPC em relação a você ou a outra pes- soa (veja a página 259). Faça um teste de Diplomacia oposto pelo teste de Vontade do alvo. Se você passar, muda a atitude dele em uma categoria para cima ou para baixo, à sua escolha (ou, se passar por 10 ou mais, em duas categorias). Se falhar por 5 ou mais, a atitude do alvo muda uma categoria na direção oposta. Este uso gasta um minuto. Você pode sofrer –10 no teste para fazê-lo como uma ação completa (para evitar uma briga, por exemplo). Você só pode mudar a atitude de um mesmo alvo uma vez por dia.</p>`,
  },
  {
    id: 48,
    nome: 'PERSUASÃO',
    custo: 'VARIÁVEL',
    tracos: ['CARISMA','PERÍCIA','DIPLOMACIA', 'CD 20'],
    descricao: `<p>Você convence uma pessoa a fazer algo, como responder uma pergunta ou prestar um favor. Se essa coisa for custosa (como fornecer uma carona de navio) você sofre –5 em seu teste. Se for perigosa (como ajudar numa luta) você sofre –10 ou falha automaticamente (veja também a página 259 para modificadores por categorias de atitude). De acordo com o mestre, seu teste pode ser oposto ao teste de Vontade da pessoa. Este uso gasta um minuto ou mais, de acordo com o mestre.</p>`,
  },
  {
    id: 49,
    nome: 'DISFARCE',
    custo: 'VARIÁVEL',
    tracos: ['CARISMA','PERÍCIA','ENGANAÇÃO', 'FERRAMENTA'],
    descricao: `<p>Você muda sua aparência ou a de outra pessoa. Faça um teste de Enganação oposto pelo teste de Percepção de quem prestar atenção no disfarçado. Se você passar, a pessoa acredita no disfarce; caso contrário, percebe que há algo errado. Disfarces muito complexos (como uma raça dife- rente) impõem –5 no seu teste. Se o disfarce é de uma pessoa específica, quem conhecer essa pessoa recebe  +10  no  teste  de  Percepção.  Um  disfarce exige dez minutos e um estojo de disfarces. Sem ele, você sofre –5 no teste.</p>`,
  },
  {
    id: 50,
    nome: 'FALSIFICAÇÃO',
    custo: 'VARIÁVEL',
    tracos: ['CARISMA','PERÍCIA','ENGANAÇÃO', 'TESTE OPOSTO'],
    descricao: `<p>Você falsifica um documento. Faça um teste de Enganação oposto pelo teste de Percepção de quem examinar o documento. Se você passar, a pessoa acredita na falsificação; caso con- trário, percebe que é falso. Se o documento é muito complexo, ou inclui uma assinatura ou carimbo es- pecífico, você sofre –10 no teste. Usada em conjunto com Ofício, você pode falsificar outros objetos (como joias e armas). Use Ofício para fabricar a peça e então um teste de Enganação para que ela pareça genuína</p>`,
  },
  {
    id: 51,
    nome: 'INSINUAÇÃO',
    custo: 'VARIÁVEL',
    tracos: ['CARISMA','PERÍCIA','ENGANAÇÃO', 'CD 20', 'TESTE OPOSTO'],
    descricao: `<p>Você fala algo para alguém sem que outras pessoas entendam do que você está falando. Se você passar, o receptor entende sua mensagem. Se você falhar por 5 ou mais, ele entende algo diferente do que você queria. Outras pessoas podem fazer um teste de Intuição oposto ao seu teste de Enganação. Se passarem, entendem o que você está dizendo.</p>`,
  },
  {
    id: 52,
    nome: 'INTRIGA',
    custo: 'VARIÁVEL',
    tracos: ['CARISMA','PERÍCIA','ENGANAÇÃO', 'CD 20', 'TESTE OPOSTO'],
    descricao: `<p> Você espalha uma fofoca. Por exemplo, pode dizer que o dono da taverna está aguando a cerveja, para enfurecer o povo contra ele. Intrigas muito improváveis têm CD 30. Se você falhar por 5 ou mais, o alvo da intriga descobre que você está fofocando a respeito dele. Mesmo que você passe, uma pessoa pode investigar a fonte da intriga e chegar até você. Isso exige um teste de Investigação por parte dela (CD igual ao seu teste para a intriga). Este uso exige um dia ou mais, de acordo com o mestre.</p>`,
  },
  {
    id: 53,
    nome: 'MENTIR',
    custo: 'VARIÁVEL',
    tracos: ['CARISMA','PERÍCIA','ENGANAÇÃO', 'TESTE OPOSTO'],
    descricao: `<p> Você faz uma pessoa acreditar em algo que não é verdade. Seu teste é oposto pelo teste de Intuição da vítima. Mentiras muito implausíveis impõem uma penalidade de –10 em seu teste.</p>`,
  },
  {
    id: 54,
    nome: 'ESCONDER-SE',
    custo: 'AÇÃO LIVRE',
    tracos: ['DESTREZA','PERÍCIA','FURTIVIDADE', 'ARMADURA','TESTE OPOSTO'],
    descricao: `<p>Faça um teste de Furtividade oposto pelos testes de Percepção de qualquer um que possa notá-lo. Todos que falharem não conseguem percebê-lo (você tem camuflagem total contra eles)</p>
    <p>Esconder-se é uma ação livre que você só pode fazer no final do seu turno e apenas se terminar seu turno em um lugar onde seja possível se esconder (atrás de uma porta, num quarto escuro, numa mata densa, no meio de uma multidão...). Se tiver se movido durante o turno, você sofre –5 no teste (você pode se mover à metade do deslocamento normal para não sofrer essa penalidade). Se tiver atacado ou feito outra ação muito chamativa, sofre –20.</p>`,
  },
  {
    id: 55,
    nome: 'SEGUIR',
    custo: 'VARIÁVEL',
    tracos: ['DESTREZA','PERÍCIA','FURTIVIDADE', 'ARMADURA','TESTE OPOSTO'],
    descricao: `<p>Faça um teste de Furtividade oposto ao teste de Percepção da pessoa sendo seguida. Você sofre –5 se estiver em um lugar sem esconderijos ou sem movimento, como um descampado ou rua de- serta. A vítima recebe +5 em seu teste de Percepção se estiver tomando precauções para não ser seguida (como olhar para trás de vez em quando). Se você passar, segue a pessoa até ela chegar ao seu destino. Se falhar, a pessoa o percebe na metade do caminho.</p>`,
  },
  {
    id: 56,
    nome: 'ANALISAR TERRENO',
    custo: 'AÇÃO DE MOVIMENTO',
    tracos: ['INTELIGÊNCIA','PERÍCIA','GUERRA','TREINADO','CD 20'],
    descricao: `<p>Faça um teste de Furtividade oposto ao teste de Percepção da pessoa sendo seguida. Você sofre –5 se estiver em um lugar sem esconderijos ou sem movimento, como um descampado ou rua de- serta. A vítima recebe +5 em seu teste de Percepção se estiver tomando precauções para não ser seguida (como olhar para trás de vez em quando). Se você passar, segue a pessoa até ela chegar ao seu destino. Se falhar, a pessoa o percebe na metade do caminho.</p>`,
  },
  {
    id: 57,
    nome: 'PLANO DE AÇÃO',
    custo: 'AÇÃO PADRÃO',
    tracos: ['INTELIGÊNCIA','PERÍCIA','GUERRA','TREINADO','CD 20'],
    descricao: `<p>Como uma ação padrão, você orienta um aliado em alcance médio. Se passar, fornece +5 na Iniciativa dele. Se ele ficar com uma Iniciativa maior do que a sua e ainda não tiver agido nesta rodada, age imediatamente após seu turno. Nas próximas rodadas, ele age de acordo com a nova ordem.</p>`,
  },
  {
    id: 58,
    nome: 'ASSUSTAR',
    custo: 'AÇÃO PADRÃO',
    tracos: ['CARISMA','PERÍCIA','INTIMIDAÇÃO', 'TESTE OPOSTO', 'CONDIÇÃO', 'ABALADO', 'APAVORADO'],
    descricao: `<p>Gaste uma ação padrão e faça um teste de Intimidação oposto pelo teste de Vontade de uma criatura em alcance curto. Se você passar, ela fica abalada pelo resto da cena. Se você passar por 10 ou mais, ela fica apavorada por uma rodada e então abalada pelo resto da cena.</p>`,
  },
  {
    id: 59,
    nome: 'COAGIR',
    custo: 'UM MINUTO',
    tracos: ['CARISMA','PERÍCIA','INTIMIDAÇÃO', 'TESTE OPOSTO'],
    descricao: `<p> Faça um teste de Intimidação oposto pelo teste de Vontade de uma criatura inteligente (Int –3 ou maior) adjacente. Se você passar, ela obedece uma ordem sua (como fazer uma pequena tarefa, deixar que você passe por um lugar que ela estava protegendo...). Se você mandá-la fazer algo perigoso ou que vá contra a natureza dela, ela recebe +5 no teste ou passa auto- maticamente. Este uso gasta um minuto ou mais, de acordo com o mestre, e deixa o alvo hostil contra você.</p>`,
  },
  {
    id: 60,
    nome: 'PERCEBER MENTIRA',
    custo: 'AÇÃO LIVRE',
    tracos: ['SABEDORIA','PERÍCIA','INTUIÇÃO', 'TESTE OPOSTO'],
    descricao: `<p> Você descobre se alguém está mentindo.</p>`,
  },
  {
    id: 61,
    nome: 'PRESSENTIMENTO',
    custo: 'VARIÁVEL',
    tracos: ['SABEDORIA','PERÍCIA','INTUIÇÃO', 'TREINADO','CD 20'],
    descricao: `<p>Você analisa uma pessoa, para ter uma noção de sua índole ou caráter, ou uma situação, para saber se há algo anormal (por exemplo, se os habitantes de uma vila estão agindo de forma estranha). Este uso apenas indica se há algo anormal, mas não revela a causa.</p>`,
  },
  {
    id: 62,
    nome: 'INTERROGAR',
    custo: 'UMA HORA',
    tracos: ['INTELIGÊNCIA','PERÍCIA','INVESTIGAÇÃO', 'TIBARES'],
    descricao: `<p>Você descobre informações perguntando ou indo para um lugar movimentado e mantendo os ouvidos atentos. Informações gerais (“Quem é o guerreiro mais forte da aldeia?”) não exi- gem teste. Informações restritas, que poucas pessoas conhecem (“Quem é o ancião que está sempre ao lado do rei?”), têm CD 20. Informações confidenciais ou que podem colocar em risco quem falar sobre elas (“Quem é o líder da guilda dos ladrões?”), têm CD 30. Este uso gasta uma hora e T$ 3d6 (para comprar bebidas, subornar oficiais etc.), mas esses valores podem variar de acordo com o mestre.</p>`,
  },
  {
    id: 63,
    nome: 'PROCURAR',
    custo: 'AÇÃO COMPLETA/UM DIA',
    tracos: ['INTELIGÊNCIA','PERÍCIA','INVESTIGAÇÃO'],
    descricao: `<p> Você examina um local em busca de algo. A CD varia: 15 para um item ou no meio de uma bagunça, mas não necessariamente escondido; 20 para um item escondido (cofre atrás de um quadro, documento no fundo falso de uma gaveta); 30 para um item muito bem escondido (passagem secreta ativada por um botão, documento escrito com tinta invisível). Este uso gasta desde uma ação completa (examinar uma escrivaninha) até um dia (pesquisar uma biblioteca). Você também pode encontrar armadilhas (CD de acordo com a armadilha) e rastros (mas para segui-los deve usar Sobrevivência).</p>`,
  },
  {
    id: 64,
    nome: 'APOSTAR',
    custo: 'UMA NOITE DE JOGATINA',
    tracos: ['CARISMA','PERÍCIA','JOGATINA','TIBARES'],
    descricao: `<p>Para resolver uma noite de jogatina, pague T$ 1d10, faça um teste de perícia e consulte 
    a tabela abaixo para determinar quanto você ganha.</p>
    <table>
      <tr>
        <th><center><b>Teste</b></center></th>
        <th><center><b>Ganho</b></center></th>
      </tr>
      <tr>
        <td><center>9 ou menos</center></td>
        <td><center>Nenhum</center></td>
      </tr>
      <tr>
        <td><center>10 a 14</center></td>
        <td><center>Metade da Aposta</center></td>
      </tr>
      <tr>
        <td><center>15 a 19</center></td>
        <td><center>Valor da aposta (você “empata”).</center></td>
      </tr>
      <tr>
        <td><center>20 a 29</center></td>
        <td><center>Dobro da Aposta</center></td>
      </tr>
      <tr>
        <td><center>30 a 39</center></td>
        <td><center>Tríplo da Aposta</center></td>
      </tr>
        <tr>
        <td><center>40 ou mais</center></td>
        <td><center>Quíntuplo da aposta.</center></td>
      </tr>
    </table>
    </br>
    <p>O mestre pode variar o valor da aposta básica. De T$ 1d3, para uma taverna no porto frequentada por marujos e estivadores, a 1d10 x T$ 1.000, para um cassino de luxo em Valkaria.</p>
    `,
  },
  {
    id: 65,
    nome: 'ABRIR FECHADURA',
    custo: 'AÇÃO COMPLETA',
    tracos: ['DESTREZA','PERÍCIA','LADINAGEM', 'TREINADO', 'ARMADURA', 'FERRAMENTA'],
    descricao: `<p>Você abre uma fechadura trancada. A CD é 20 para fechaduras simples (porta de loja), 25 para fechaduras médias (prisão, baú) e 30 para fechaduras superiores (cofre, câmara do tesou- ro). Este uso exige uma ação completa e uma gazua. Sem ela, você sofre –5 em seu teste.</p>`,
  },
  {
    id: 66,
    nome: 'OCULTAR',
    custo: 'AÇÃO PADRAO',
    tracos: ['DESTREZA','PERÍCIA','LADINAGEM','TREINADO', 'ARMADURA', 'TESTE OPOSTO'],
    descricao: `<p>Você esconde um objeto em você mesmo. Gaste uma ação padrão e faça um teste de Ladinagem oposto pelo teste de Percepção de qualquer um que possa vê-lo. Objetos discretos ou pequenos fornecem +5 no teste; objetos desajeitados ou grandes impõem –5. Se uma pessoa revistar você, recebe +10 no teste de Percepção.</p>`,
  },
  {
    id: 67,
    nome: 'PUNGA',
    custo: 'AÇÃO PADRAO',
    tracos: ['DESTREZA','PERÍCIA','LADINAGEM','TREINADO', 'ARMADURA', 'CD 20'],
    descricao: `<p> Você pega um objeto de outra pessoa (ou planta um objeto nas posses dela). Gaste uma ação padrão e faça um teste de Ladinagem.  Se  passar,  você  pega  (ou  coloca)  o que queria. A vítima tem direito a um teste de Percepção (CD igual ao resultado de seu teste de Ladinagem). Se passar, ela percebe sua tentativa, tenha você conseguido ou não.</p>`,
  },
  {
    id: 68,
    nome: 'SABOTAR',
    custo: '1d4 rodadas',
    tracos: ['DESTREZA','PERÍCIA','LADINAGEM','TREINADO','ARMADURA'],
    descricao: `<p> Você desabilita um dispositivo mecânico. Uma ação simples (emperrar uma fechadura, desativar uma armadilha básica, sabotar uma roda de carroça para que quebre 1d4 rodadas após o uso) tem CD 20. Uma ação complexa (desativar uma armadilha avançada, sabotar um canhão para explodir quando utilizado) tem CD 30. Se você falhar por 5 ou mais, alguma coisa sai errada — a armadilha se ativa, você acha que o mecanismo está desabilitado, mas na verdade ele ainda funciona... Usar esta perícia leva 1d4 rodadas. Você pode sofrer –5 em seu teste para fazê-lo como uma ação completa.</p>`,
  },
  {
    id: 69,
    nome: 'DETECTAR MAGIA',
    custo: 'AÇÃO COMPLETA',
    tracos: ['INTELIGÊNCIA','PERÍCIA','MISTICISMO','TREINADO','CD 15','MAGIA'],
    descricao: `<p>Como uma ação completa, você detecta a presença e intensidade de auras mágicas em alcance curto (mas não suas loca- lizações exatas). A intensidade de uma aura depende do círculo da magia ou categoria do item mágico que a gerou. Magias de 1º e 2º círculos e itens mágicos menores geram uma aura tênue, magias de 3º e 4º círculos e itens mágicos médios geram uma aura mo- derada e magias de 5º círculo e itens mágicos maiores geram uma aura poderosa. Magias lançadas por um deus maior e artefatos geram uma aura avassaladora. Caso a aura esteja atrás de uma barreira, você sofre uma penalidade em seu teste (–5 para madeira ou pedra, –10 para ferro ou chumbo).</p>`,
  },
  {
    id: 70,
    nome: 'IDENTIFICAR CRIATURA',
    custo: 'AÇÃO PADRÃO',
    tracos: ['INTELIGÊNCIA','PERÍCIA','MISTICISMO','TREINADO','CD 15 + ND'],
    descricao: `<p>Você analisa uma criatura mágica (construto, dragão, fada, morto-vivo etc.) que possa ver. Se passar, lembra uma característica da criatura, como um poder ou vulnerabilidade. Para cada 5 pontos pelos quais o resultado do teste superar a CD, você lembra outra característica. Se falhar por 5 ou mais, tira uma conclusão errada (por exemplo, acredita que a criatura é vulnerável a fogo, quando na verdade é vulnerável a frio). Este uso gasta uma ação padrão.</p>`,
  },
  {
    id: 71,
    nome: 'IDENTIFICAR ITEM MÁGICO',
    custo: 'UMA HORA',
    tracos: ['INTELIGÊNCIA','PERÍCIA','MISTICISMO','TREINADO','MAGIA','ITEM'],
    descricao: `<p>Você analisa uma criatura mágica (cons- truto, dragão, fada, morto-vivo etc.) que possa ver. Se passar, lembra uma característica da criatura, como um poder ou vulnerabilidade. Para cada 5 pontos pelos quais o resultado do teste superar a CD, você lembra outra característica. Se falhar por 5 ou mais, tira uma conclusão errada (por exemplo, acredita que a criatura é vulnerável a fogo, quando na verdade é vulnerável a frio). Este uso gasta uma ação padrão.</p>`,
  },
  {
    id: 72,
    nome: 'IDENTIFICAR MAGIA',
    custo: 'REAÇÃO',
    tracos: ['INTELIGÊNCIA','PERÍCIA','MISTICISMO','TREINADO','MAGIA'],
    descricao: `<p> Quando alguém lança uma magia, você pode adivinhar qual é através de seus gestos e palavras. Este uso é uma reação.</p>`,
  },
  {
    id: 73,
    nome: 'INFORMAÇÃO',
    custo: 'VARIÁVEL',
    tracos: ['INTELIGÊNCIA','PERÍCIA','MISTICISMO','TREINADO'],
    descricao: `<p>Você responde dúvidas relativas a magias, itens mágicos, fenômenos sobrenaturais, runas, profecias, planos de existência etc. Questões simples não exigem teste. Questões complexas tem CD 20. Por fim, mistérios e enigmas tem CD 30.</p>`,
  },
  {
    id: 74,
    nome: 'LANÇAR MAGIA DE ARMADURA',
    custo: 'VARIÁVEL',
    tracos: ['INTELIGÊNCIA','PERÍCIA','MISTICISMO','TREINADO', 'ITEM', 'ARMADURA', 'CD 20 + MANA'],
    descricao: `<p>Lançar uma magia arcana usando armadura exige um teste. Esse teste sofre penalidade de armadura. Se falhar, a magia não funciona, mas gasta pontos de mana mesmo assim.</p>`,
  },
  {
    id: 75,
    nome: 'ETIQUETA',
    custo: 'VARIÁVEL',
    tracos: ['INTELIGÊNCIA','PERÍCIA','NOBREZA','TREINADO','CD 15'],
    descricao: `<p>Você sabe se portar em ambientes aristocráticos, como bailes e audiências.</p>`,
  },
  {
    id: 76,
    nome: 'INFORMAÇÃO',
    custo: 'VARIÁVEL',
    tracos: ['INTELIGÊNCIA','PERÍCIA','NOBREZA','TREINADO'],
    descricao: `<p>Você responde dúvidas relativas a leis, tradições, linhagens e heráldica. Questões simples não exigem teste. Questões complexas tem CD 20. Por fim, mistérios e enigmas tem CD 30.</p>`,
  },
  {
    id: 77,
    nome: 'CONSERTAR',
    custo: 'VARIÁVEL',
    tracos: ['INTELIGÊNCIA','PERÍCIA','OFÍCIO','TREINADO', 'FERRAMENTA'],
    descricao: `<p>Reparar um item destruído tem a mesma CD para fabricá-lo. Cada tentativa consome uma hora de trabalho e um décimo do preço original do item. Em caso de falha, o tempo e o dinheiro são perdidos (mas você pode tentar novamente).</p>`,
  },
  {
    id: 78,
    nome: 'FABRICAR',
    custo: 'VARIÁVEL',
    tracos: ['INTELIGÊNCIA','PERÍCIA','OFÍCIO','TREINADO', 'FERRAMENTA'],
    descricao: `<p> Você produz um item gastando maté- ria-prima e tempo de trabalho. A matéria-prima custa um terço do preço do item. O tempo de trabalho de- pende do tipo de item: um dia para consumíveis (itens alquímicos, pergaminhos, poções, munições...); uma semana para não consumíveis comuns (armas, ferramentas...) e um mês para não consumíveis superiores e/ou mágicos. Para consumíveis, você pode sofrer –5 no teste para fabricar duas unidades do item no mesmo tempo (pagando o custo de ambas). A critério do mestre, itens muito simples e sem efeito mecânico podem levar menos tempo. Da mesma forma, itens muito grandes ou complexos, como uma casa ou ponte, podem demorar vários meses.</p>
    <p>A CD do teste é 15 para itens simples (equipamentos de aventura, armas simples, munições, armaduras leves, escudos, preparados, catalisadores e outros a critério do mestre) e 20 para itens complexos (armas marciais, exóticas ou de fogo, armaduras pesadas, ferramentas, vestuários, esotéricos, venenos...)</p>`,
  },
  {
    id: 79,
    nome: 'IDENTIFICAR',
    custo: 'AÇÃO COMPLETA',
    tracos: ['INTELIGÊNCIA','PERÍCIA','OFÍCIO','TREINADO', 'CD 20', 'FERRAMENTA'],
    descricao: `<p>Você pode identificar itens raros e exóticos ligados ao seu Ofício. Se passar, descobre as propriedades do item e seu preço. Este uso gasta uma ação completa.</p>`,
  },
  {
    id: 80,
    nome: 'SUSTENTO',
    custo: 'AÇÃO COMPLETA',
    tracos: ['INTELIGÊNCIA','PERÍCIA','OFÍCIO','TREINADO', 'CD 15', 'FERRAMENTA'],
    descricao: `<p>. Com uma semana de tra- balho e um teste de Ofício, você ganha T$ 1, mais T$ 1 por ponto que seu teste exceder a CD. Por exem- plo, com um resultado 20, ganha T$ 6 pela semana de trabalho. Trabalhadores sem treinamento usam testes de atributo para sustento. De acordo com o mestre, outras perícias podem ser usadas para sus- tento, como Adestramento, Cura ou Sobrevivência.</p>`,
  },
  {
    id: 81,
    nome: 'OBSERVAR',
    custo: 'VARIÁVEL',
    tracos: ['SABEDORIA','PERÍCIA','PERCEPÇÃO','VISUAL'],
    descricao: `<p>. Você vê coisas discretas ou escondidas. A CD varia de 15, para algo difícil de ser visto (um livro específico em uma estante) a 30, para algo quase invisível (uma gota de sangue em uma folha no meio de uma floresta à noite). Para pessoas ou itens escondidos, a CD é o resultado do teste de Fur- tividade ou Ladinagem feito para esconder a pessoa ou o item. Você também pode ler lábios (CD 20).</p>`,
  },
  {
    id: 82,
    nome: 'OUVIR',
    custo: 'VARIÁVEL',
    tracos: ['SABEDORIA','PERÍCIA','PERCEPÇÃO','AUDITIVO'],
    descricao: `<p>.  Você escuta barulhos sutis. Uma con- versa casual próxima tem CD 0 — ou seja, a menos que exista alguma penalidade, você passa automa- ticamente. Ouvir pessoas sussurrando tem CD 15. Ouvir do outro lado de uma porta aumenta a CD em +10. Você pode fazer testes de Percepção para ouvir mesmo que esteja dormindo, mas sofre –10 no teste; um sucesso faz você acordar. Perceber criaturas que não possam ser vistas tem CD 20, ou +10 no teste de Furtividade da criatura, o que for maior. Mesmo que você passe no teste, ainda sofre penalidades normais por lutar sem ver o inimigo.</p>`,
  },
  {
    id: 83,
    nome: 'PILOTAR',
    custo: 'AÇÃO DE MOVIMENTO',
    tracos: ['DESTREZA','PERÍCIA','PILOTAGEM'],
    descricao: `<p>.Você sabe operar veículos como carroças, barcos e balões. Ações simples não exigem testes — você pode atrelhar seus trobos a sua carroça e conduzi-la pela estrada, ou levantar âncora e velejar seu navio em águas tranquilas, automaticamente. Porém, conduzir um veículo em situações ruins (terreno aci- dentado para veículos terrestres, chuva ou ventania para veículos aquáticos ou aéreos), exige uma ação de movimento e um teste de Pilotagem contra CD 15 por turno ou cena, de acordo com o mestre. Se falhar, você avança metade do deslocamento. Se falhar por 5 ou mais, se acidenta de alguma forma. Situações extremas  (terreno  com  obstáculos,  tempestade...) aumentam a CD para 25.</p>`,
  },
  {
    id: 84,
    nome: 'IDENTIFICAR CRIATURA',
    custo: 'AÇÃO PADRÃO',
    tracos: ['SABEDORIA','PERÍCIA','RELIGIÃO', 'TREINADO', 'CD 15 + ND'],
    descricao: `<p>. Você pode identificar uma criatura com origem divina (anjos, demônios, alguns mortos-vivos e construtos etc.). Veja a perícia Misticismo.</p>`,
  },
  {
    id: 85,
    nome: 'IDENTIFICAR ITEM MÁGICO',
    custo: 'UMA HORA',
    tracos: ['SABEDORIA','PERÍCIA','RELIGIÃO', 'TREINADO','MAGIA','ITEM'],
    descricao: `<p>Você pode identificar um item mágico de origem divina. Veja a perícia Misticismo.</p>`,
  },
  {
    id: 86,
    nome: 'INFORMAÇÃO',
    custo: 'VARIÁVEL',
    tracos: ['SABEDORIA','PERÍCIA','RELIGIÃO', 'TREINADO'],
    descricao: `<p>Você responde dúvidas relativas a deuses, profecias, planos de existência etc. Questões simples não exigem teste. Questões complexas tem CD 20. Por fim, mistérios e enigmas tem CD 30.</p>`,
  },
  {
    id: 87,
    nome: 'RITO',
    custo: 'VARIÁVEL',
    tracos: ['SABEDORIA','PERÍCIA','RELIGIÃO', 'TREINADO', 'ND 20'],
    descricao: `<p>Você realiza uma cerimônia religiosa, como um batizado, casamento ou funeral. Isso inclui a cerimônia de penitência para redimir um devoto que tenha descumprido as Obrigações & Restrições de sua divindade. Uma cerimônia de penitência exige um sacrifício de T$ 100 por nível de personagem do devoto ou a realização de uma missão sagrada, de acordo com o mestre.</p>`,
  },
  {
    id: 88,
    nome: 'ACAMPAMENTO',
    custo: 'VARIÁVEL',
    tracos: ['SABEDORIA','PERÍCIA','SOBREVIVÊNCIA', 'FERRAMENTA'],
    descricao: `<p>Você consegue abrigo e ali- mento para você e seu grupo por um dia (caçando, pescando,  colhendo  frutos...).  A  CD  depende  do terreno: 15 para planícies e colinas, 20 para florestas e pântanos, 25 para desertos ou montanhas e 30 para regiões planares perigosas ou áreas de Tormenta. Regiões muito áridas ou estéreis e clima ruim (neve, tempestade etc.) impõem penalidade cumulativa de –5. Dormir ao relento sem um acampamento e um saco de dormir diminui sua recuperação de PV e PM (veja a página 106). Este uso exige equipamento de viagem. Sem ele, você sofre –5 em seu teste.</p>`,
  },
  {
    id: 89,
    nome: 'IDENTIFICAR CRIATURA',
    custo: 'AÇÃO PADRÃO',
    tracos: ['SABEDORIA','PERÍCIA','SOBREVIVÊNCIA', 'CD 15 + ND'],
    descricao: `<p>Você pode identificar um animal ou monstro. Veja a perícia Misticismo.</p>`,
  },
  {
    id: 90,
    nome: 'ORIENTAR-SE',
    custo: 'VARIÁVEL',
    tracos: ['SABEDORIA','PERÍCIA','SOBREVIVÊNCIA'],
    descricao: `<p> Um personagem viajando pelos ermos precisa fazer um teste de Sobrevivência por dia para avançar. A CD depende do tipo de terreno (veja em “Acampamento”). Se passar, você avança seu deslocamento normal. Se falhar, avança apenas metade. Se falhar por 5 ou mais, se perde e não avança pelo dia. Num grupo, um personagem deve ser escolhido como guia. Personagens treinados em Sobrevivência podem ajudá-lo. Entretanto, se mais de um personagem quiser fazer o teste por si só, todos deverão rolar em segredo. Os jogadores devem decidir qual guia seguir antes de verem o resultado! Este teste é exigido apenas em jornadas perigosas (de acordo com o mestre).</p>`,
  },
  {
    id: 91,
    nome: 'RASTREAR',
    custo: 'VARIÁVEL',
    tracos: ['SABEDORIA','PERÍCIA','SOBREVIVÊNCIA', 'TREINADO'],
    descricao: `<p> Você pode identificar e seguir rastros. A CD é 15 para solo macio (neve, lama), 20 para solo comum (grama, terra) e 25 para solo duro (rocha ou piso de interiores). A CD diminui em –5 se você estiver rastreando um grupo grande (dez ou mais indivíduos) ou cria- turas Enormes ou Colossais, mas aumenta em +5 em visibilidade precária (noite, chuva, neblina...). Enquanto rastreia, seu deslocamento é reduzido à metade. Se falhar, pode tentar novamente gastando mais um dia. Porém, a cada dia desde a criação dos rastros, a CD aumenta em +1.</p>`,
  },
];
