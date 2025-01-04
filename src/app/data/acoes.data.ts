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
    tracos: ['COMBATE', 'PERÍCIA', 'ENGANAÇÃO', 'CONDIÇÃO', 'DESPREVINIDO'],
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
    tracos: ['ATAQUE', 'ATAQUE CORPO A CORPO', 'ATAQUE DESARMADO', 'ARMA NATURAL', 'LUTA', 'MANOBRA', 'CONDIÃO', 'AGARRADO', 'IMÓVEL',  'LENTO', 'ARMAS LEVES', 'CHANCE ALVEJAR ALIADO'],
    descricao: `<p>Uma manobra é um ataque corpo a corpo para fazer algo diferente de causar dano — como arrancar a arma do oponente ou empurrá-lo para um abismo. Não é possível fazer manobras de combate com ataques à distância.</p>
    <p>Faça um teste de manobra (um teste de ataque corpo a corpo) oposto com a criatura. Mesmo que ela esteja usando uma arma de ataque à distância, deve fazer o teste usando seu valor de Luta. Em caso de empate, o personagem com o maior bônus vence. Se os bônus forem iguais, outro teste deve ser feito. Em geral, você pode usar qualquer arma corpo a corpo para fazer manobras de combate.</p>
    <p><b>Agarrar.</b> Você segura uma criatura (por seu braço, sua roupa etc.). Uma criatura agarrada fica desprevenida e imóvel, sofre –2 nos testes de ataque e só pode atacar com armas leves. Ela pode se soltar com uma ação padrão, vencendo um teste de manobra oposto. Você só pode agarrar com um ataque desarmado ou arma natural e, enquanto agarra, fica com essa mão ou arma natural ocupada. Além disso, move-se metade do deslocamento normal, mas arrasta a criatura que estiver agarrando. Você pode soltá-la com uma ação livre. Você pode atacar uma criatura agarrada com sua mão livre. Se preferir, pode substituir um ataque por um teste de agarrar contra a criatura. Se vencer, causa dano de impacto igual a um ataque desarmado ou arma natural. Isso significa que você está esmagando ou sufocando o inimigo.</p>
    <p>Um personagem fazendo um ataque à distância contra um alvo envolvido na manobra agarrar tem 50% de chance de mirar no alvo errado!</p>`,
  },
  {
    id: 8,
    nome: 'DERRUBAR',
    custo: 'AÇÃO PADRÃO',
    tracos: ['ATAQUE', 'ATAQUE CORPO A CORPO', 'LUTA', 'MANOBRA', 'CONDIÃO', 'CAÍDO'],
    descricao: `<p>Uma manobra é um ataque corpo a corpo para fazer algo diferente de causar dano — como arrancar a arma do oponente ou empurrá-lo para um abismo. Não é possível fazer manobras de combate com ataques à distância.</p>
    <p>Faça um teste de manobra (um teste de ataque corpo a corpo) oposto com a criatura. Mesmo que ela esteja usando uma arma de ataque à distância, deve fazer o teste usando seu valor de Luta. Em caso de empate, o personagem com o maior bônus vence. Se os bônus forem iguais, outro teste deve ser feito. Em geral, você pode usar qualquer arma corpo a corpo para fazer manobras de combate.</p>
    <p><b>Derrubar.</b> Você deixa o alvo caído. Esta queda normalmente não causa dano. Se você vencer o teste oposto por 5 pontos ou mais, derruba o oponente com tanta força que também o empurra um quadrado em uma direção a sua escolha. Se isso o jogar além de um parapeito ou precipício, ele pode fazer um teste de Reflexos (CD 20) para se agarrar numa beirada.</p>`,
  },
  {
    id: 9,
    nome: 'DESARMAR',
    custo: 'AÇÃO PADRÃO',
    tracos: ['ATAQUE', 'ATAQUE CORPO A CORPO', 'LUTA', 'MANOBRA', 'ITEM'],
    descricao: `<p>Uma manobra é um ataque corpo a corpo para fazer algo diferente de causar dano — como arrancar a arma do oponente ou empurrá-lo para um abismo. Não é possível fazer manobras de combate com ataques à distância.</p>
    <p>Faça um teste de manobra (um teste de ataque corpo a corpo) oposto com a criatura. Mesmo que ela esteja usando uma arma de ataque à distância, deve fazer o teste usando seu valor de Luta. Em caso de empate, o personagem com o maior bônus vence. Se os bônus forem iguais, outro teste deve ser feito. Em geral, você pode usar qualquer arma corpo a corpo para fazer manobras de combate.</p>
    <p><b>Desarmar.</b> Você derruba um item que a criatura esteja segurando. Normalmente o item cai no mesmo lugar em que o alvo está (a menos que o alvo esteja voando, sobre uma ponte etc.). Se você vencer o teste oposto por 5 pontos ou mais, derruba o item com tanta força que também o empurra um quadrado em uma direção a sua escolha.</p>`,
  },
  {
    id: 10,
    nome: 'EMPURRAR',
    custo: 'AÇÃO PADRÃO',
    tracos: ['ATAQUE', 'ATAQUE CORPO A CORPO', 'LUTA', 'MANOBRA', 'MOVIMENTO'],
    descricao: `<p>Uma manobra é um ataque corpo a corpo para fazer algo diferente de causar dano — como arrancar a arma do oponente ou empurrá-lo para um abismo. Não é possível fazer manobras de combate com ataques à distância.</p>
    <p>Faça um teste de manobra (um teste de ataque corpo a corpo) oposto com a criatura. Mesmo que ela esteja usando uma arma de ataque à distância, deve fazer o teste usando seu valor de Luta. Em caso de empate, o personagem com o maior bônus vence. Se os bônus forem iguais, outro teste deve ser feito. Em geral, você pode usar qualquer arma corpo a corpo para fazer manobras de combate.</p>
    <p><b>Empurrar.</b> Você empurra a criatura 1,5m. Para cada 5 pontos de diferença entre os testes, você empurra o alvo mais 1,5m. Você pode gastar uma ação de movimento para avançar junto com a criatura (até o limite do seu deslocamento).</p>`,
  },

  {
    id: 11,
    nome: 'QUEBRAR',
    custo: 'AÇÃO PADRÃO',
    tracos: ['ATAQUE', 'ATAQUE CORPO A CORPO', 'LUTA', 'MANOBRA', 'ITEM'],
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
    tracos: ['MOVIMENTO', 'PERÍCIA', 'ATLETISMO'],
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
    descricao: `<p>J Deixar cair um item que es- teja segurando é uma ação livre. Mas deixar cair (ou jogar) um item com a intenção de acertar algo é uma ação padrão. E deixar cair (ou jogar) um item para que outra pessoa agarre é uma ação de movimento.</p>`,
  },
];
