import { TipoCondicao } from '../enum/tipo.condicao.enum';

export const condicoes = [
  {
    id: 1,
    nome: 'ABALADO',
    descricao:
      ' O personagem sofre –2 em testes de perícia. Se ficar abalado novamente, em vez disso fica apavorado.',
    tipo: TipoCondicao.MEDO,
  },
  {
    id: 2,
    nome: 'AGARRADO',
    descricao:
      '. O personagem fica desprevenido e imóvel, sofre –2 em testes de ataque e só pode atacar com armas leves. Ataques à distância contra um alvo envolvido em uma manobra agarrar têm 50% de chance de acertar o alvo errado.',
    tipo: TipoCondicao.MOVIMENTO,
  },
  {
    id: 3,
    nome: 'ALQUEBRADO',
    descricao:
      'O custo em pontos de mana das habilidades do personagem aumenta em +1.',
    tipo: TipoCondicao.MENTAL,
  },
  {
    id: 4,
    nome: 'APAVORADO',
    descricao:
      'O personagem sofre –5 em testes de perícia e não pode se aproximar voluntariamente da fonte do medo.',
    tipo: TipoCondicao.MEDO,
  },
  {
    id: 5,
    nome: 'ATORDOADO',
    descricao: 'O personagem fica desprevenido e não pode fazer ações.',
    tipo: TipoCondicao.MENTAL,
  },
  {
    id: 6,
    nome: 'CAÍDO',
    descricao:
      ' O personagem sofre –5 em ataques corpo a corpo e seu deslocamento é reduzido a 1,5m. Além disso, sofre –5 na Defesa contra ataques corpo a corpo e recebe +5 na Defesa contra ataques à distância (cumulativos com outras condições).',
  },
  {
    id: 7,
    nome: 'CEGO',
    descricao:
      'O personagem fica desprevenido e lento, não pode fazer testes de Percepção para observar e sofre –5 em testes de perícias baseadas em Força ou Destreza. Todos os alvos de seus ataques recebem camuflagem total. Você é considerado cego enquanto estiver em uma área de escuridão total, a menos que algo lhe permita perceber no escuro.',
    tipo: TipoCondicao.SENTIDOS,
  },
  {
    id: 8,
    nome: 'CONFUSO',
    descricao:
      'O personagem comporta-se de modo aleatório. Role 1d6 no início de seus turnos: 1) Movimenta-se em uma direção escolhida por uma rolagem de 1d8; 2-3) Não pode fazer ações, e fica balbuciando incoerentemente; 4-5) Usa a arma que estiver empunhando para atacar a criatura mais próxima, ou a si mesmo se estiver sozinho (nesse caso, apenas role o dano); 6) A condição termina e pode agir normalmente.',
    tipo: TipoCondicao.MENTAL,
  },
  {
    id: 9,
    nome: 'DEBILITADO',
    descricao:
      'O personagem sofre –5 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se o personagem ficar debilitado novamente, em vez disso fica inconsciente.',
  },
  {
    id: 10,
    nome: 'DESPREVINIDO',
    descricao:
      'O personagem sofre –5 na Defesa e em Reflexos. Você fica desprevenido contra inimigos que não possa perceber.',
  },
  {
    id: 11,
    nome: 'DOENTE',
    descricao: 'Sob efeito de uma doença.',
    tipo: TipoCondicao.METABOLISMO,
  },
  {
    id: 12,
    nome: 'EM CHAMAS',
    descricao:
      'O personagem está pegando fogo. No início de seus turnos, sofre 1d6 pontos de dano de fogo. O personagem pode gastar uma ação padrão para apagar o fogo com as mãos. Imersão em água também apaga as chamas.',
  },
  {
    id: 13,
    nome: 'ENFEITIÇADO',
    descricao:
      'O personagem se torna prestativo em relação à fonte da condição. Ele não fica sob controle da fonte, mas percebe suas palavras e ações da maneira mais favorável possível. A fonte da condição recebe +10 em testes de Diplomacia com o personagem.',
    tipo: TipoCondicao.MENTAL,
  },
  {
    id: 14,
    nome: 'ENJOADO',
    descricao:
      'O personagem só pode realizar uma ação padrão ou de movimento (não ambas) por rodada. Ele pode gastar uma ação padrão para fazer uma investida, mas pode avançar no máximo seu deslocamento (e não o dobro). Metabolismo.',
    tipo: TipoCondicao.METABOLISMO,
  },
  {
    id: 15,
    nome: 'ENREDADO',
    descricao:
      'O personagem fica lento, vulnerável e sofre –2 em testes de ataque.',
    tipo: TipoCondicao.MOVIMENTO,
  },
  {
    id: 16,
    nome: 'ENVENENADO',
    descricao:
      `O efeito desta condição varia de acordo com o veneno. Pode ser perda de vida recorrente ou outra condição (como fraco ou enjoado). Perda de vida recorrente por venenos é cumulativa.`,
    tipo: TipoCondicao.VENENO,
  },

  {
    id: 17,
    nome: 'ESMORECIDO',
    descricao:
      'O personagem sofre –5 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos.',
    tipo: TipoCondicao.MENTAL,
  },
  {
    id: 18,
    nome: 'EXAUSTO',
    descricao:
      'O personagem fica debilitado, lento e vulnerável. Se ficar exausto novamente, em vez disso fica inconsciente.',
    tipo: TipoCondicao.CANSACO,
  },
  {
    id: 19,
    nome: 'FASCINADO',
    descricao:
      'Com a atenção presa em alguma coisa. O personagem sofre –5 em Percepção e não pode fazer ações, exceto observar aquilo que o fascinou. Esta condição é anulada por ações hostis contra o personagem ou se o que o fascinou não estiver mais visível. Balançar uma criatura fascinada para tirá-la desse estado gasta uma ação padrão.',
    tipo: TipoCondicao.MENTAL,
  },
  {
    id: 20,
    nome: 'FATIGADO',
    descricao:
      'O personagem fica fraco e vulnerável. Se ficar fatigado novamente, em vez disso fica exausto.',
    tipo: TipoCondicao.CANSACO,
  },
  {
    id: 21,
    nome: 'FRACO',
    descricao:
      'O personagem sofre –2 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se ficar fraco novamente, em vez disso fica debilitado.',
  },
  {
    id: 22,
    nome: 'FRUSTRADO',
    descricao:
      'O personagem sofre –2 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos. Se ficar frustrado novamente, em vez disso fica esmorecido.',
    tipo: TipoCondicao.MENTAL,
  },
  {
    id: 23,
    nome: 'IMÓVEL',
    descricao:
      'Todas as formas de deslocamento do personagem são reduzidas a 0m.',
    tipo: TipoCondicao.MOVIMENTO,
  },
  {
    id: 24,
    nome: 'INCONSCIENTE',
    descricao:
      'O personagem fica indefeso e não pode fazer ações, incluindo reações (mas ainda pode fazer testes que sejam naturalmente feitos quando se está inconsciente, como testes de Constituição para estabilizar sangramento). Balançar uma criatura para acordá-la gasta uma ação padrão.',
  },
  {
    id: 25,
    nome: 'INDEFESO',
    descricao:
      'O personagem fica desprevenido, mas sofre –10 na Defesa, falha automaticamente em testes de Reflexos e pode sofrer golpes de misericórdia',
  },
  {
    id: 26,
    nome: 'LENTO',
    descricao:
      'Todas as formas de deslocamento do personagem são reduzidas à metade (arredonde para baixo para o primeiro incremento de 1,5m) e ele não pode correr ou fazer investidas.',
    tipo: TipoCondicao.MOVIMENTO,
  },
  {
    id: 27,
    nome: 'OFUSCADO',
    descricao: 'O personagem sofre –2 em testes de ataque e de Percepção.',
    tipo: TipoCondicao.SENTIDOS,
  },
  {
    id: 28,
    nome: 'PARALISADO',
    descricao:
      'Fica imóvel e indefeso e só pode realizar ações puramente mentais. Movimento.',
  },
  {
    id: 29,
    nome: 'PASMO',
    descricao: 'Não pode fazer ações.',
    tipo: TipoCondicao.MENTAL,
  },
  {
    id: 30,
    nome: 'PETRIFICADO',
    descricao: 'O personagem fica inconsciente e recebe redução de dano 8.',
    tipo: TipoCondicao.METAMORFOSE,
  },
  {
    id: 31,
    nome: 'SANGRANDO',
    descricao:
      'No início de seu turno, o personagem deve fazer um teste de Constituição (CD 15). Se falhar, perde 1d6 pontos de vida e continua sangrando. Se passar, remove essa condição.',
    tipo: TipoCondicao.METABOLISMO,
  },
  {
    id: 32,
    nome: 'SOBRECARREGADO',
    descricao:
      'O personagem sofre penalidade de armadura –5 e seu deslocamento é reduzido –3m.',
    tipo: TipoCondicao.MOVIMENTO,
  },
  {
    id: 33,
    nome: 'SURDO',
    descricao:
      'O personagem não pode fazer testes de Percepção para ouvir e sofre –5 em testes de Iniciativa. Além disso, é considerado em condição ruim para lançar magias.',
    tipo: TipoCondicao.SENTIDOS,
  },
  {
    id: 34,
    nome: 'SURPREENDIDO',
    descricao: 'O personagem fica desprevenido e não pode fazer ações.',
  },
  { id: 35, nome: 'VULNERÁVEL', descricao: 'O personagem sofre –2 na Defesa.' },
];
