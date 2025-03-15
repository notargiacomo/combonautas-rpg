import { Injectable } from '@angular/core';

import { TipoParceiro } from '../model/tipo.parceiro';

@Injectable({
  providedIn: 'root',
})
export class TipoParceiroData {
  private tipoParceiro: TipoParceiro[] = [];

  get(): any[] {
    return this.tipoParceiro;
  }

  constructor() {
    this.tipoParceiro = [
      {
        id: 1,
        nome: 'Aberrante',
        descricao: 'Apenas devotos de Aharadak podem ter esse parceiro.',
        tracos: ['DEVOTO', 'AHARADAK','AUMENTA','DANO', 'DIMINUI','MANA'],
        parceiro_patamar: [
          'Iniciante: Uma vez por rodada, você pode gastar 2d6 de dano psíquico ou causar a perca de 1d4 PMs em uma criatura (9m).', 
          'Veterano: Pode gastar até 2 PMs para causar 4d6 de dano ou perca de 1d6 PMs.', 
          'Mestre: Você pode gastar 4 PMs para causar 4d6 de dano ou perca de 1d8 PMs.'
        ],
        referencias: 'Referencia.DRAGAOBRASIL',
        pagina: 'DB 190',
      },
      {
        id: 2,
        nome: 'Adepto',
        descricao: 'Um conjurador capaz de ajudá-lo a lançar suas magias.',
        tracos: ['DIMINUI', 'CUSTO_MAGIA'],
        parceiro_patamar: [
          'Iniciante: o custo para lançar suas magias de 1º círculo diminui (-1) PM.',
          'Veterano: como acima, mas também reduz o custo de suas magias de 2º círculo.',
          'Mestre: como acima, e esta redução se torna cumulativa com outras reduções.'
        ],
        referencias: 'Referencia.BASICO',
        pagina: '260',
      },
      {
        id: 3,
        nome: 'Ajudante',
        descricao: 'Um bardo, nobre ou sábio que ajuda com palavras firmes ou encorajadoras.',
        tracos: ['AUMENTA','PERICIA'],
        parceiro_patamar: [
          'Iniciante: você recebe +2 em duas perícias.',
    'Veterano: muda para +2 em três perícias.',
    'Mestre: muda para +4 em três perícias.' ,
    'As perícias são definidas pelo parceiro. Um ajudante não pode fornecer bônus em Luta ou Pontaria.',
        ],
        referencias: 'Referencia.BASICO',
        pagina: '260',
      },
      {
        id: 4,
        nome: 'Arauto',
        descricao: 'Um bardo, nobre ou outro NPC versado em assuntos de etiqueta e diplomacia.',
        tracos: ['AUMENTA', 'PERICIA', 'CARISMA'],
        parceiro_patamar: [
          'Iniciante: você recebe +2 em Diplomacia, Intuição e Nobreza e pode fazer testes destas perícias mesmo sem ser treinado.',
          'Veterano: como acima, mas você recebe também Jogo da Corte.',
          'Mestre: como acima, e no início de cada cena, você pode gastar 2 PM para conceder +2 em testes de perícias baseadas em Carisma para você e seus aliados até o final da cena.'
        ],
        referencias: 'Referencia.DRAGAOBRASIL',
        pagina: 'DB 190',
      },
      {
        id: 5,
        nome: 'Artesão',
        descricao: 'Um artesão, como um alquimista ou um ferreiro.',
        tracos: ['AUMENTA', 'OFICIO', 'FABRICACAO'],
        parceiro_patamar: [
          'Iniciante: você recebe +2 em um Ofício (definido pelo aliado) e pode fazer testes desta perícia mesmo sem ser treinado.',
          'Veterano: como acima, mas para dois tipos de Ofício.',
          'Mestre: como acima, mas você fabrica itens em uma categoria de tempo menor (mínimo de 1 hora, não cumulativo com outros efeitos que reduzam o tempo de fabricação).'
        ],
        referencias: 'Referencia.DRAGAOBRASIL',
        pagina: 'DB 190',
      },
      {
        id: 6,
        nome: 'Assassino',
        descricao: 'Um ladino ou outro tipo furtivo e letal.',
        tracos: ['AUMENTA', 'ATAQUE', 'DANO'],
        parceiro_patamar: [
          'Iniciante: você pode usar a habilidade Ataque Furtivo +1d6. Se já possui a habilidade, o bônus é cumulativo.',
          'Veterano: além do Ataque Furtivo, fornece bônus por flanquear contra um inimigo por rodada.',
          'Mestre: muda o dano do Ataque Furtivo para +2d6. Note que, além de fornecer +2 em testes de ataque corpo a corpo, o bônus por flanquear facilita que o personagem use seu Ataque Furtivo.'
        ],
        referencias: 'Referencia.BASICO',
        pagina: '260',
      },
      {
        id: 7,
        nome: 'Atirador',
        descricao: 'Um arqueiro, besteiro ou outro combatente à distância.',
        tracos: ['AUMENTA', 'DANO'],
        parceiro_patamar: [
          'Iniciante: uma vez por rodada, você recebe +1d6 em uma rolagem de dano à distância.',
          'Veterano: muda para +1d10.',
          'Mestre: muda para +2d8.'
        ],
        referencias: 'Referencia.BASICO',
        pagina: '261',
      },
      {
        id: 8,
        nome: 'Besta de Carga',
        descricao: 'Um animal capaz de carregar peso, como um boi, burro ou mula.',
        tracos: ['AUMENTA', 'CARGA','ANIMAL'],
        parceiro_patamar: [
          'Iniciante: pode carregar 10 espaços de itens.',
          'Veterano: pode carregar 15 espaços.',
          'Mestre: pode carregar 20 espaços de itens.'
        ],
        referencias: 'Referencia.RUFFGHANOR',
        pagina: '214',
      },
      {
        id: 9,
        nome: 'Carregador',
        descricao: 'Alguém forte e corajoso para acompanhá-lo em suas aventuras enquanto carrega seu equipamento.',
        tracos: ['AUMENTA', 'CARGA', 'HUMANOIDE'],
        parceiro_patamar: [
          'Iniciante: pode carregar 2 espaços e usar qualquer item que esteja carregando e não exija um teste (como empunhar uma tocha ou aplicar um bálsamo restaurador).',
          'Veterano: como acima, mas pode carregar 5 espaços.',
          'Mestre: como acima, mas pode carregar 10 espaços.'
        ],
        referencias: 'Referencia.RUFFGHANOR',
        pagina: '214'
      },
      {
        id: 10,
        nome: 'Combatente',
        descricao: 'Um bucaneiro, guerreiro, paladino ou animal de caça.',
        tracos: ['AUMENTA', 'ATAQUE', 'DANO'],
        parceiro_patamar: [
          'Iniciante: +2 em testes de ataque.',
          'Veterano: muda para +3 em testes de ataque.',
          'Mestre: muda para +4 em testes de ataque e, uma vez por rodada, você pode gastar 5 PM para fazer um ataque extra.'
        ],
        referencias: 'Referencia.BASICO',
        pagina: '261'
      },
      {
        id: 11,
        nome: 'Destruidor',
        descricao: 'Um arcanista ou inventor.',
        tracos: ['AUMENTA', 'DANO'],
        parceiro_patamar: [
          'Iniciante: uma vez por rodada, como uma ação livre, você pode gastar 1 PM para causar 2d6 pontos de dano de ácido, eletricidade, fogo ou frio (de acordo com o parceiro) em um alvo em alcance curto.',
          'Veterano: como acima, mas você também pode gastar 2 PM para causar 4d6 pontos de dano.',
          'Mestre: como acima, mas você também pode gastar 4 PM para causar 6d6 pontos de dano em uma área de 6m de raio em alcance médio.'
        ],
        referencias: 'Referencia.BASICO',
        pagina: '261'
      },
      {
        id: 12,
        nome: 'Emissário',
        descricao: 'Um menestrel ou cortesão treinado em apresentações solenes.',
        tracos: ['AUMENTA', 'PERÍCIA'],
        parceiro_patamar: [
          'Iniciante: você recebe +2 em Diplomacia e Intuição.',
          'Veterano: no início de cada cena, você pode gastar 2 PM para fornecer +2 em testes de perícias baseadas em Carisma para você e seus aliados até o final da cena.',
          'Mestre: você pode usar o poder Jogo da Corte.'
        ],
        referencias: 'Referencia.RUFFGHANOR',
        pagina: '214'
      },
      {
        id: 13,
        nome: 'Espião',
        descricao: 'Um indivíduo discreto e de ouvidos abertos.',
        tracos: ['AUMENTA', 'PERÍCIA'],
        parceiro_patamar: [
          'Iniciante: você recebe +2 em Furtividade e Investigação.',
          'Veterano: você faz testes de Investigação na metade do tempo e não sofre penalidade em testes de Furtividade por se mover no seu deslocamento normal.',
          'Mestre: quando faz um teste de Furtividade ou Investigação, você pode gastar 2 PM para rolar dois dados e usar o melhor resultado.'
        ],
        referencias: 'Referencia.RUFFGHANOR',
        pagina: '214'
      },
      {
        id: 14,
        nome: 'Fortão',
        descricao: 'Um bárbaro, lutador ou outro tipo que bate primeiro e pensa depois.',
        tracos: ['AUMENTA', 'DANO'],
        parceiro_patamar: [
          'Iniciante: uma vez por rodada, você recebe +1d8 em uma rolagem de dano corpo a corpo.',
          'Veterano: muda para +1d12.',
          'Mestre: muda para +3d6.'
        ],
        referencias: 'Referencia.RUFFGHANOR',
        pagina: '214'
      },
      {
        id: 15,
        nome: 'Guardião',
        descricao: 'Um cavaleiro, cão de guarda ou outro NPC cuja função primária é proteger.',
        tracos: ['AUMENTA', 'DEFESA'],
        parceiro_patamar: [
          'Iniciante: você recebe +2 na Defesa.',
          'Veterano: muda para +3.',
          'Mestre: muda para +4 na Defesa e +2 em testes de resistência.'
        ],
        referencias: 'Referencia.BASICO',
        pagina: '214'
      },
      {
        id: 16,
        nome: 'Magivocador',
        descricao: 'Um conjurador especializado em magias ofensivas.',
        tracos: ['AUMENTA', 'DANO', 'MAGIA', 'CD'],
        parceiro_patamar: [
          'Iniciante: o dano de suas magias aumenta em +1 dado do mesmo tipo.',
          'Veterano: como acima, e a CD para resistir a suas magias aumenta em +1.',
          'Mestre: como acima, mas dobra os bônus (para um total de +2 dados de dano e +2 na CD).'
        ],
        referencias: 'Referencia.BASICO',
        pagina: '215'
      },
      {
        id: 17,
        nome: 'Médico',
        descricao: 'Um clérigo, druida, herbalista ou outro NPC com capacidades curativas.',
        tracos: ['CURA', 'APOIO','REMOVE CONDIÇÃO'],
        parceiro_patamar: [
          'Iniciante: uma vez por rodada você pode gastar 1 PM para curar 1d8+1 PV de uma criatura adjacente.',
          'Veterano: como acima, mas você pode gastar 3 PM para curar 3d8+3 PV ou remover uma condição prejudicial (como abalado ou fatigado).',
          'Mestre: como acima, mas você também pode gastar 5 PM para curar 6d8+6 PV.'
        ],
        referencias: 'Referencia.BASICO',
        pagina: '215'
      },
      {
        id: 18,
        nome: 'Menestrel',
        descricao: 'Um bardo que acompanha o grupo durante suas aventuras e cria canções e poemas sobre suas aventuras, com a finalidade de aumentar sua fama.',
        tracos: ['FAMA', 'APOIO'],
        parceiro_patamar: [
          'Iniciante: +1 em ajustes de recompensa e 1 ponto de fama bônus sempre que ganha fama.',
          'Veterano: +1 em ajustes de recompensa e 2 pontos de fama bônus sempre que ganha fama.',
          'Mestre: +2 em ajustes de recompensa e 3 pontos de fama bônus sempre que ganha fama.'
        ],
        referencias: 'Referencia.DB',
        pagina: 'XX'
      },
      {
        id: 19,
        nome: 'Mentor',
        descricao: 'Um notório conhecedor de determinada área, versado na arte de transmitir o que sabe adiante.',
        tracos: ['PERÍCIA', 'CONHECIMENTO'],
        parceiro_patamar: [
          'Iniciante: escolha uma perícia. Você recebe +5 em testes dessa perícia para buscas e +2 em testes dessa perícia para treinamento.',
          'Veterano: como iniciante, mas você escolhe uma perícia adicional.',
          'Mestre: como veterano, mas você escolhe uma terceira perícia.'
        ],
        referencias: 'Referencia.DB',
        pagina: 'XX'
      },
      {
        id: 20,
        nome: 'Místico',
        descricao: 'Um mago, estudioso ou outro NPC com conhecimento arcano.',
        tracos: ['MAGIA', 'CONHECIMENTO'],
        parceiro_patamar: [
          'Iniciante: o máximo de PM que você pode gastar em suas magias aumenta em +1.',
          'Veterano: você aprende uma magia adicional de qualquer tipo e círculo que possa lançar.',
          'Mestre: o máximo de PM que você pode gastar em suas magias aumenta em +1 (para um total de +2) e você aprende uma segunda magia adicional de qualquer tipo e círculo que possa lançar.'
        ],
        referencias: 'Referencia.RUFFGHANOR',
        pagina: '215'
      },
      {
        id: 21,
        nome: 'Perseguidor',
        descricao: 'Um caçador, animal farejador ou outro especialista em localizar alvos.',
        tracos: ['AUMENTA','PERÍCIA','CAÇA'],
        parceiro_patamar: [
          'Iniciante: +2 em Percepção e Sobrevivência.',
          'Veterano: você pode usar Sentidos Aguçados.',
          'Mestre: você pode usar Percepção às Cegas.'
        ],
        referencias: 'Referencia.BASICO',
        pagina: '261'
      },
      {
        id: 22,
        nome: 'Sábio',
        descricao: 'Um estudioso de assuntos diversos.',
        tracos: ['AUMENTA','PERÍCIA','CONHECIMENTO'],
        parceiro_patamar: [
          'Iniciante: você recebe +2 em Conhecimento, Misticismo e Nobreza e pode fazer testes destas perícias mesmo sem ser treinado.',
          'Veterano: o bônus se aplica a uma perícia adicional, a sua escolha (exceto Luta ou Pontaria).',
          'Mestre: o bônus muda para +3.'
        ],
        referencias: 'Referencia.RUFFGHANOR',
        pagina: '215'
      },
      {
        id: 23,
        nome: 'Vigilante',
        descricao: 'Um vigia ou animal de guarda, sempre atento aos arredores.',
        tracos: ['PERÍCIA', 'VIGILÂNCIA'],
        parceiro_patamar: [
          'Iniciante: +2 em Percepção e Iniciativa.',
          'Veterano: você pode usar Esquiva Sobrenatural.',
          'Mestre: você pode usar Olhos nas Costas.'
        ],
        referencias: 'Referencia.BASICO',
        pagina: '215'
      }
    ];
  }
}
