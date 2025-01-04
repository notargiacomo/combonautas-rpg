export const acoes = [
  {
    id: 1,
    nome: 'AGREDIR',
    custo: 'AÇÃO PADRÃO',
    tracos: ['COMBATE', 'LUTA', 'PONTARIA'],
    descricao: `<p>Você faz um ataque com uma arma corpo a corpo ou à distância.</p>
    <p>Com uma arma corpo a corpo, você pode atacar qualquer inimigo dentro de seu alcance natural (1,5m para criaturas Pequenas e Médias ou um inimigo adjacente no mapa). Personagens maiores, ou usando certas armas, podem atacar mais longe. Você pode substituir um ataque corpo a corpo por uma manobra de combate (veja a seguir).</p>
    <p>Com uma arma de ataque à distância, você pode atacar qualquer inimigo que consiga ver e que esteja no alcance da arma (ou até o dobro do alcance, sofrendo uma penalidade de –5).</p>
    <p>Atirando em Combate Corpo a Corpo. Quando faz um ataque à distância contra uma criatura em combate corpo a corpo, você sofre –5 no teste de ataque. Uma criatura está em combate corpo a corpo se estiver dentro do alcance natural de qualquer inimigo (incluindo você).</p>`,
  },
  {
    id: 2,
    nome: 'ATROPELAR',
    custo: 'AÇÃO PADRÃO',
    tracos: ['COMBATE', 'MANOBRA', 'MOVIMENTO'],
    descricao: `<p>Você usa uma ação padrão durante um movimento para avançar pelo espaço ocupado por uma criatura (normalmente, você não pode fazer uma ação padrão durante um movimento; isto é uma exceção). A criatura pode lhe dar passagem ou resistir. Se der passagem, você avança pelo espaço dela; nenhum teste é necessário. Se resistir, faça um teste de manobra oposto; se você vencer, deixa a criatura caída e continua seu avanço. Se o alvo vencer, continua de pé e detém seu avanço. Atropelar é uma ação livre se tentada durante uma investida.</p>`,
  },
  {
    id: 3,
    nome: 'FINTAR',
    custo: 'AÇÃO PADRÃO',
    tracos: ['COMBATE', 'PERÍCIA', 'ENGANAÇÃO', 'CONDIÇÃO'],
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
    tracos: ['MAGIA', 'VARIÁVEL'],
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
];
