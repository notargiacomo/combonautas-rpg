import { Injectable } from '@angular/core';
import { TipoCondicao } from '../enum/tipo.condicao.enum';
import { Condicao } from '@app/model/condicao';

@Injectable({
  providedIn: `root`,
})
export class CondicaoData {
  private condicao: Condicao[] = [];

  get(): any[] {
    return this.condicao;
  }

  constructor() {
    this.condicao = [
      {
        id: 1,
        nome: `ABALADO`,
        descricao: `O personagem sofre –2 em testes de perícia. Se ficar abalado novamente, em vez disso fica apavorado.`,
        tipo: TipoCondicao.MEDO,
      },
      {
        id: 2,
        nome: `AGARRADO`,
        descricao: `O personagem fica desprevenido e imóvel, sofre –2 em testes de ataque e só pode atacar com armas leves. Ataques à distância contra um alvo envolvido em uma manobra agarrar têm 50% de chance de acertar o alvo errado.`,
        tipo: TipoCondicao.MOVIMENTO,
      },
      {
        id: 3,
        nome: `ALQUEBRADO`,
        descricao: `O custo em pontos de mana das habilidades do personagem aumenta em +1.`,
        tipo: TipoCondicao.MENTAL,
      },
      {
        id: 4,
        nome: `APAVORADO`,
        descricao: `O personagem sofre –5 em testes de perícia e não pode se aproximar voluntariamente da fonte do medo.`,
        tipo: TipoCondicao.MEDO,
      },
      {
        id: 5,
        nome: `ATORDOADO`,
        descricao: `O personagem fica desprevenido e não pode fazer ações.`,
        tipo: TipoCondicao.MENTAL,
      },
      {
        id: 6,
        nome: `CAÍDO`,
        descricao: ` O personagem sofre –5 em ataques corpo a corpo e seu deslocamento é reduzido a 1,5m. Além disso, sofre –5 na Defesa contra ataques corpo a corpo e recebe +5 na Defesa contra ataques à distância (cumulativos com outras condições).`,
      },
      {
        id: 7,
        nome: `CEGO`,
        descricao: `O personagem fica desprevenido e lento, não pode fazer testes de Percepção para observar e sofre –5 em testes de perícias baseadas em Força ou Destreza. Todos os alvos de seus ataques recebem camuflagem total. Você é considerado cego enquanto estiver em uma área de escuridão total, a menos que algo lhe permita perceber no escuro.`,
        tipo: TipoCondicao.SENTIDOS,
      },
      {
        id: 8,
        nome: `CONFUSO`,
        descricao: `O personagem comporta-se de modo aleatório. Role 1d6 no início de seus turnos: 1) Movimenta-se em uma direção escolhida por uma rolagem de 1d8; 2-3) Não pode fazer ações, e fica balbuciando incoerentemente; 4-5) Usa a arma que estiver empunhando para atacar a criatura mais próxima, ou a si mesmo se estiver sozinho (nesse caso, apenas role o dano); 6) A condição termina e pode agir normalmente.`,
        tipo: TipoCondicao.MENTAL,
      },
      {
        id: 9,
        nome: `DEBILITADO`,
        descricao: `O personagem sofre –5 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se o personagem ficar debilitado novamente, em vez disso fica inconsciente.`,
      },
      {
        id: 10,
        nome: `DESPREVINIDO`,
        descricao: `O personagem sofre –5 na Defesa e em Reflexos. Você fica desprevenido contra inimigos que não possa perceber.`,
      },
      {
        id: 11,
        nome: `DOENTE`,
        descricao: `Sob efeito de uma doença.`,
        tipo: TipoCondicao.METABOLISMO,
      },
      {
        id: 12,
        nome: `EM CHAMAS`,
        descricao: `O personagem está pegando fogo. No início de seus turnos, sofre 1d6 pontos de dano de fogo. O personagem pode gastar uma ação padrão para apagar o fogo com as mãos. Imersão em água também apaga as chamas.
        
        DB 219
        O personagem está pegando fogo. No início de seus turnos, sofre 1d6 pontos de dano de fogo. O personagem pode gastar uma ação padrão para apagar o fogo com as mãos. Se ficar arrefecido ou molhado, em vez disso perde as duas condições. Se ficar congelado, em vez disso perde as duas condições e fica arrefecido.`,
      },
      {
        id: 13,
        nome: `ENFEITIÇADO`,
        descricao: `O personagem se torna prestativo em relação à fonte da condição. Ele não fica sob controle da fonte, mas percebe suas palavras e ações da maneira mais favorável possível. A fonte da condição recebe +10 em testes de Diplomacia com o personagem.`,
        tipo: TipoCondicao.MENTAL,
      },
      {
        id: 14,
        nome: `ENJOADO`,
        descricao: `O personagem só pode realizar uma ação padrão ou de movimento (não ambas) por rodada. Ele pode gastar uma ação padrão para fazer uma investida, mas pode avançar no máximo seu deslocamento (e não o dobro). Metabolismo.`,
        tipo: TipoCondicao.METABOLISMO,
      },
      {
        id: 15,
        nome: `ENREDADO`,
        descricao: `O personagem fica lento, vulnerável e sofre –2 em testes de ataque.`,
        tipo: TipoCondicao.MOVIMENTO,
      },
      {
        id: 16,
        nome: `ENVENENADO`,
        descricao: `O efeito desta condição varia de acordo com o veneno. Pode ser perda de vida recorrente ou outra condição (como fraco ou enjoado). Perda de vida recorrente por venenos é cumulativa.`,
        tipo: TipoCondicao.VENENO,
      },

      {
        id: 17,
        nome: `ESMORECIDO`,
        descricao: `O personagem sofre –5 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos.`,
        tipo: TipoCondicao.MENTAL,
      },
      {
        id: 18,
        nome: `EXAUSTO`,
        descricao: `O personagem fica debilitado, lento e vulnerável. Se ficar exausto novamente, em vez disso fica inconsciente.`,
        tipo: TipoCondicao.CANSACO,
      },
      {
        id: 19,
        nome: `FASCINADO`,
        descricao: `Com a atenção presa em alguma coisa. O personagem sofre –5 em Percepção e não pode fazer ações, exceto observar aquilo que o fascinou. Esta condição é anulada por ações hostis contra o personagem ou se o que o fascinou não estiver mais visível. Balançar uma criatura fascinada para tirá-la desse estado gasta uma ação padrão.`,
        tipo: TipoCondicao.MENTAL,
      },
      {
        id: 20,
        nome: `FATIGADO`,
        descricao: `O personagem fica fraco e vulnerável. Se ficar fatigado novamente, em vez disso fica exausto.`,
        tipo: TipoCondicao.CANSACO,
      },
      {
        id: 21,
        nome: `FRACO`,
        descricao: `O personagem sofre –2 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se ficar fraco novamente, em vez disso fica debilitado.`,
      },
      {
        id: 22,
        nome: `FRUSTRADO`,
        descricao: `O personagem sofre –2 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos. Se ficar frustrado novamente, em vez disso fica esmorecido.`,
        tipo: TipoCondicao.MENTAL,
      },
      {
        id: 23,
        nome: `IMÓVEL`,
        descricao: `Todas as formas de deslocamento do personagem são reduzidas a 0m.`,
        tipo: TipoCondicao.MOVIMENTO,
      },
      {
        id: 24,
        nome: `INCONSCIENTE`,
        descricao: `O personagem fica indefeso e não pode fazer ações, incluindo reações (mas ainda pode fazer testes que sejam naturalmente feitos quando se está inconsciente, como testes de Constituição para estabilizar sangramento). Balançar uma criatura para acordá-la gasta uma ação padrão.`,
      },
      {
        id: 25,
        nome: `INDEFESO`,
        descricao: `O personagem fica desprevenido, mas sofre –10 na Defesa, falha automaticamente em testes de Reflexos e pode sofrer golpes de misericórdia`,
      },
      {
        id: 26,
        nome: `LENTO`,
        descricao: `Todas as formas de deslocamento do personagem são reduzidas à metade (arredonde para baixo para o primeiro incremento de 1,5m) e ele não pode correr ou fazer investidas.`,
        tipo: TipoCondicao.MOVIMENTO,
      },
      {
        id: 27,
        nome: `OFUSCADO`,
        descricao: `O personagem sofre –2 em testes de ataque e de Percepção.`,
        tipo: TipoCondicao.SENTIDOS,
      },
      {
        id: 28,
        nome: `PARALISADO`,
        descricao: `Fica imóvel e indefeso e só pode realizar ações puramente mentais. Movimento.`,
        tipo: TipoCondicao.MOVIMENTO,
      },
      {
        id: 29,
        nome: `PASMO`,
        descricao: `Não pode fazer ações.`,
        tipo: TipoCondicao.MENTAL,
      },
      {
        id: 30,
        nome: `PETRIFICADO`,
        descricao: `O personagem fica inconsciente e recebe redução de dano 8.`,
        tipo: TipoCondicao.METAMORFOSE,
      },
      {
        id: 31,
        nome: `SANGRANDO`,
        descricao: `No início de seu turno, o personagem deve fazer um teste de Constituição (CD 15). Se falhar, perde 1d6 pontos de vida e continua sangrando. Se passar, remove essa condição.`,
        tipo: TipoCondicao.METABOLISMO,
      },
      {
        id: 32,
        nome: `SOBRECARREGADO`,
        descricao: `O personagem sofre penalidade de armadura –5 e seu deslocamento é reduzido –3m.`,
        tipo: TipoCondicao.MOVIMENTO,
      },
      {
        id: 33,
        nome: `SURDO`,
        descricao: `O personagem não pode fazer testes de Percepção para ouvir e sofre –5 em testes de Iniciativa. Além disso, é considerado em condição ruim para lançar magias.`,
        tipo: TipoCondicao.SENTIDOS,
      },
      {
        id: 34,
        nome: `SURPREENDIDO`,
        descricao: `O personagem fica desprevenido e não pode fazer ações.`,
      },
      {
        id: 35,
        nome: `VULNERÁVEL`,
        descricao: `O personagem sofre –2 na Defesa.`,
      },
      {
        id: 36,
        nome: `ABENÇOADO`,
        descricao: `O personagem foi momentaneamente tocado por uma força divina, se torna imune a efeitos de metabolismo, metamorfose, trevas e veneno. Se ficar decaído, em vez disso perde as duas condições.`,
      },
      {
        id: 37,
        nome: `ABSORVENDO`,
        descricao: `O personagem recupera PV em uma quantidade igual à metade de todo dano que causa (limitado pelo nível).`,
      },
      {
        id: 38,
        nome: `ALENTADO`,
        descricao: `O personagem recebe +5 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos.`,
        tipo: TipoCondicao.MENTAL,
      },
      {
        id: 39,
        nome: `ARREFECIDO`,
        descricao: `O personagem tem a temperatura corporal reduzida, tem seu movimento reduzido em –1,5m, não pode usar habilidades que exijam liberdade de movimentos e tem vulnerabilidade a frio, mas também recebe resistência a fogo +2. Se ficar molhado ou for arrefecido uma segunda vez, fica congelado. Se ficar em chamas enquanto estiver arrefecido, em vez disso perde as duas condições.`,
        tipo: TipoCondicao.METABOLISMO,
      },
      {
        id: 40,
        nome: `AUDACIOSO`,
        descricao: `O personagem recebe +2 em testes de perícia. Se ficar audacioso novamente, em vez disso fica intrépido.`,
        tipo: TipoCondicao.MENTAL,
      },
      {
        id: 41,
        nome: `CONGELADO`,
        descricao: `O personagem é coberto por uma camada grossa de gelo que o deixa paralisado e concede vulnerabilidade a frio, mas também concede resistência a fogo +2 e imunidade a arrefecido, cansaço, eletrizado, enfeitiçado, medo, sangrando e veneno. Se ficar em chamas enquanto estiver congelado, perde as duas condições e fica arrefecido.`,
      },
      {
        id: 42,
        nome: `DECAÍDO`,
        descricao: `O personagem sofre dano por efeitos mágicos de cura de luz, mas dano de trevas recupera seus PV. Em mortos-vivos, tem o efeito inverso (dano de trevas causa dano normal e efeitos mágicos de cura de luz recuperam PV). Se ficar abençoado, em vez disso perde as duas condições.`,
      },
      {
        id: 43,
        nome: `DISPOSTO`,
        descricao: `O personagem recebe +2 em testes de Inteligência, Sabedoria e Carisma e de perícias baseadas nesses atributos. Se ficar disposto novamente, em vez disso fica alentado.`,
        tipo: TipoCondicao.MENTAL,
      },
      {
        id: 44,
        nome: `ELETRIFICADO`,
        descricao: `O personagem tem correntes elétricas poderosas correndo pelo seu corpo. No início de seus turnos, sofre 1d6 pontos de dano de eletricidade. O personagem pode gastar uma ação padrão para descarregar a eletricidade ao tocar em metais ou no chão de terra. Se ficar molhado ou for eletrificado uma segunda vez, fica eletrizado.`,
      },
      {
        id: 45,
        nome: `ELETRIZADO`,
        descricao: `O personagem fica paralisado por uma corrente elétrica, o que concede vulnerabilidade a eletricidade, mas também resistência a ácido +2 e imunidade a cansaço, congelado, eletrificado, enfeitiçado, medo, sangrando e veneno. Esta condição permanece até o fim da cena ou até que o personagem tenha contato com um objeto livre de metal ou algum tipo de óleo (como pela magia Área Escorregadia), o que acontecer primeiro.`,
      },
      {
        id: 46,
        nome: `ELETRIZADO`,
        descricao: `O personagem fica paralisado por uma corrente elétrica, o que concede vulnerabilidade a eletricidade, mas também resistência a ácido +2 e imunidade a cansaço, congelado, eletrificado, enfeitiçado, medo, sangrando e veneno. Esta condição permanece até o fim da cena ou até que o personagem tenha contato com um objeto livre de metal ou algum tipo de óleo (como pela magia Área Escorregadia), o que acontecer primeiro.`,
      },
      {
        id: 47,
        nome: `FEDIDO`,
        descricao: `O personagem sofre –5 em testes de Carisma e de perícias baseadas nesse atributo, pois está exalando um cheiro forte e é quase impossível ficar perto dele.`,
      },
      {
        id: 48,
        nome: `FORTALECIDO`,
        descricao: `O personagem recebe +2 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos. Se ficar fortalecido novamente, em vez disso fica vigoroso.`,
      },
      {
        id: 49,
        nome: `INTRÉPIDO`,
        descricao: `O personagem sofre +5 em testes de perícias e recebe imunidade a medo.`,
      },
      {
        id: 50,
        nome: `LEVE`,
        descricao: `O personagem não aplica penalidade de armadura em testes de Acrobacia e Furtividade e seu deslocamento é aumentado em +3m. Movimento.`,
      },
      {
        id: 51,
        nome: `LEVE`,
        descricao: `O personagem não aplica penalidade de armadura em testes de Acrobacia e Furtividade e seu deslocamento é aumentado em +3m. Movimento.`,
      },
      {
        id: 52,
        nome: `MOLHADO`,
        descricao: `O personagem se torna vulnerável a eletricidade e frio, mas recebe resistência a fogo. Qualquer criatura fica molhada se estiver imersa ou em contato com uma superfície de água. Se ficar arrefecido, fica congelado. Se ficar eletrificado, fica eletrizado. Se ficar em chamas enquanto estiver molhado, em vez disso perde as duas condições.`,
      },
      {
        id: 53,
        nome: `PODEROSO`,
        descricao: `O custo em pontos de mana das habilidades do personagem diminui em –1. Mental.`,
      },
      {
        id: 54,
        nome: `PREVENIDO`,
        descricao: `O personagem recebe +2 na Defesa durante a primeira rodada de combate.`,
      },
      {
        id: 55,
        nome: `RELAXADO`,
        descricao: `O personagem fica fortalecido, prevenido e veloz durante uma rodada.`,
      },
      {
        id: 56,
        nome: `RESTAURANDO`,
        descricao: `O personagem recebe cura acelerada igual aos PV que recebe por nível da sua classe com mais níveis.`,
      },
      {
        id: 57,
        nome: `VELOZ`,
        descricao: `Todas as formas de deslocamento do personagem são duplicadas (arredonde para baixo para o primeiro incremento de 1,5m) e ele recebe imunidade a efeitos negativos de movimento.`,
        tipo: TipoCondicao.MOVIMENTO,
      },
      {
        id: 58,
        nome: `VIGOROSO`,
        descricao: `O personagem recebe +5 em testes de Força, Destreza e Constituição e de perícias baseadas nesses atributos.`,
      },
    ];
  }
}
