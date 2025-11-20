import { Injectable } from '@angular/core';

import { TipoParceiro } from '../model/tipo.parceiro';
import { Referencia } from '@app/enum/referencia.enum';

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
        id: 2,
        nome: 'Adepto',
        descricao: 'Um conjurador capaz de ajudá-lo a lançar suas magias.',
        tracos: ['DIMINUI', 'CUSTO_MAGIA'],
        parceiro_patamar: [
          '<b>Iniciante:</b> o custo para lançar suas magias de 1º círculo diminui (-1) PM.',
          '<b>Veterano:</b> como acima, mas também reduz o custo de suas magias de 2º círculo.',
          '<b>Mestre:</b> como acima, e esta redução se torna cumulativa com outras reduções.',
        ],
        referencias: Referencia.BASICO,
        pagina: '260',
      },
      {
        id: 3,
        nome: 'Ajudante',
        descricao: 'Um bardo, nobre ou sábio que ajuda com palavras firmes ou encorajadoras.',
        tracos: ['AUMENTA', 'PERICIA'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você recebe +2 em duas perícias.',
          '<b>Veterano:</b> muda para +2 em três perícias.',
          '<b>Mestre:</b> muda para +4 em três perícias.',
          'As perícias são definidas pelo parceiro. Um ajudante não pode fornecer bônus em Luta ou Pontaria.',
        ],
        referencias: Referencia.BASICO,
        pagina: '260',
      },
      {
        id: 6,
        nome: 'Assassino',
        descricao: 'Um ladino ou outro tipo furtivo e letal.',
        tracos: ['AUMENTA', 'ATAQUE', 'DANO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você pode usar a habilidade Ataque Furtivo +1d6. Se já possui a habilidade, o bônus é cumulativo.',
          '<b>Veterano:</b> além do Ataque Furtivo, fornece bônus por flanquear contra um inimigo por rodada.',
          '<b>Mestre:</b> muda o dano do Ataque Furtivo para +2d6. Note que, além de fornecer +2 em testes de ataque corpo a corpo, o bônus por flanquear facilita que o personagem use seu Ataque Furtivo.',
        ],
        referencias: Referencia.BASICO,
        pagina: '260',
      },
      {
        id: 7,
        nome: 'Atirador',
        descricao: 'Um arqueiro, besteiro ou outro combatente à distância.',
        tracos: ['AUMENTA', 'DANO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por rodada, você recebe +1d6 em uma rolagem de dano à distância.',
          '<b>Veterano:</b> muda para +1d10.',
          '<b>Mestre:</b> muda para +2d8.',
        ],
        referencias: Referencia.BASICO,
        pagina: '261',
      },
      {
        id: 8,
        nome: 'Besta de Carga',
        descricao: 'Um animal capaz de carregar peso, como um boi, burro ou mula.',
        tracos: ['AUMENTA', 'CARGA', 'ANIMAL'],
        parceiro_patamar: [
          '<b>Iniciante:</b> pode carregar 10 espaços de itens.',
          '<b>Veterano:</b> pode carregar 15 espaços.',
          '<b>Mestre:</b> pode carregar 20 espaços de itens.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '214',
      },
      {
        id: 10,
        nome: 'Combatente',
        descricao: 'Um bucaneiro, guerreiro, paladino ou animal de caça.',
        tracos: ['AUMENTA', 'ATAQUE', 'DANO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> +2 em testes de ataque.',
          '<b>Veterano:</b> muda para +3 em testes de ataque.',
          '<b>Mestre:</b> muda para +4 em testes de ataque e, uma vez por rodada, você pode gastar 5 PM para fazer um ataque extra.',
        ],
        referencias: Referencia.BASICO,
        pagina: '261',
      },
      {
        id: 11,
        nome: 'Destruidor',
        descricao: 'Um arcanista ou inventor.',
        tracos: ['AUMENTA', 'DANO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por rodada, como uma ação livre, você pode gastar 1 PM para causar 2d6 pontos de dano de ácido, eletricidade, fogo ou frio (de acordo com o parceiro) em um alvo em alcance curto.',
          '<b>Veterano:</b> como acima, mas você também pode gastar 2 PM para causar 4d6 pontos de dano.',
          '<b>Mestre:</b> como acima, mas você também pode gastar 4 PM para causar 6d6 pontos de dano em uma área de 6m de raio em alcance médio.',
        ],
        referencias: Referencia.BASICO,
        pagina: '261',
      },
      {
        id: 14,
        nome: 'Fortão',
        descricao: 'Um bárbaro, lutador ou outro tipo que bate primeiro e pensa depois.',
        tracos: ['AUMENTA', 'DANO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por rodada, você recebe +1d8 em uma rolagem de dano corpo a corpo.',
          '<b>Veterano:</b> muda para +1d12.',
          '<b>Mestre:</b> muda para +3d6.',
        ],
        referencias: Referencia.BASICO,
        pagina: '214',
      },
      {
        id: 15,
        nome: 'Guardião',
        descricao: 'Um cavaleiro, cão de guarda ou outro NPC cuja função primária é proteger.',
        tracos: ['AUMENTA', 'DEFESA'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você recebe +2 na Defesa.',
          '<b>Veterano:</b> muda para +3.',
          '<b>Mestre:</b> muda para +4 na Defesa e +2 em testes de resistência.',
        ],
        referencias: Referencia.BASICO,
        pagina: '214',
      },
      {
        id: 16,
        nome: 'Magivocador',
        descricao: 'Um conjurador especializado em magias ofensivas.',
        tracos: ['AUMENTA', 'DANO', 'MAGIA', 'CD'],
        parceiro_patamar: [
          '<b>Iniciante:</b> o dano de suas magias aumenta em +1 dado do mesmo tipo.',
          '<b>Veterano:</b> como acima, e a CD para resistir a suas magias aumenta em +1.',
          '<b>Mestre:</b> como acima, mas dobra os bônus (para um total de +2 dados de dano e +2 na CD).',
        ],
        referencias: Referencia.BASICO,
        pagina: '215',
      },
      {
        id: 17,
        nome: 'Médico',
        descricao: 'Um clérigo, druida, herbalista ou outro NPC com capacidades curativas.',
        tracos: ['CURA', 'APOIO', 'REMOVE CONDIÇÃO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por rodada você pode gastar 1 PM para curar 1d8+1 PV de uma criatura adjacente.',
          '<b>Veterano:</b> como acima, mas você pode gastar 3 PM para curar 3d8+3 PV ou remover uma condição prejudicial (como abalado ou fatigado).',
          '<b>Mestre:</b> como acima, mas você também pode gastar 5 PM para curar 6d8+6 PV.',
        ],
        referencias: Referencia.BASICO,
        pagina: '215',
      },
      {
        id: 21,
        nome: 'Perseguidor',
        descricao: 'Um caçador, animal farejador ou outro especialista em localizar alvos.',
        tracos: ['AUMENTA', 'PERÍCIA', 'CAÇA'],
        parceiro_patamar: [
          '<b>Iniciante:</b> +2 em Percepção e Sobrevivência.',
          '<b>Veterano:</b> você pode usar Sentidos Aguçados.',
          '<b>Mestre:</b> você pode usar Percepção às Cegas.',
        ],
        referencias: Referencia.BASICO,
        pagina: '261',
      },
      {
        id: 23,
        nome: 'Vigilante',
        descricao: 'Um vigia ou animal de guarda, sempre atento aos arredores.',
        tracos: ['PERÍCIA', 'VIGILÂNCIA'],
        parceiro_patamar: [
          '<b>Iniciante:</b> +2 em Percepção e Iniciativa.',
          '<b>Veterano:</b> você pode usar Esquiva Sobrenatural.',
          '<b>Mestre:</b> você pode usar Olhos nas Costas.',
        ],
        referencias: Referencia.BASICO,
        pagina: '215',
      },
      {
        id: 100,
        id_parceiro_pai: 8, // montaria / besta de carga (inferido)
        nome: 'Capivara',
        descricao:
          'A capivara é um parceiro montaria (Médio) que fornece benefícios: Iniciante: deslocamento muda para 9m (natação 12m) e você recebe uma ação de movimento extra (apenas para se deslocar). Veterano: pode usar Aparência Inofensiva (se já possuir esse poder, a CD para resistir aumenta). Mestre: uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo.',
        tracos: ['MONTARIA', 'NATACAO', 'MOVIMENTO_EXTRA'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento muda para 9m (natação 12m) e você recebe uma ação de movimento extra (apenas para se deslocar).',
          '<b>Veterano:</b> pode usar Aparência Inofensiva; a CD para resistir a ele aumenta em +2 se possuir o poder.',
          '<b>Mestre:</b> uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '???', // página não confiável no OCR (preencher manualmente se precisar)
      }, // fonte: trecho "Capivara" no arquivo. :contentReference[oaicite:2]{index=2}

      {
        id: 101,
        id_parceiro_pai: 23, // vigilante
        nome: 'Tentacute',
        descricao:
          'Parceiro especial (vigilante). Iniciante: +2 em Percepção e, em testes de Ladinagem para punga, role dois dados e use o melhor. Veterano: ação de movimento/1 PM para tentar punga em alcance curto. Mestre: +4 em Percepção e punga em alcance médio.',
        tracos: ['VIGILANCIA', 'FAMILIAR', 'OCULTACAO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> +2 em Percepção; quando faz teste de Ladinagem para punga pode rolar 2d e usar o melhor.',
          '<b>Veterano:</b> uma vez por rodada, pode gastar ação de movimento +1 PM para tentar punga em alcance curto.',
          '<b>Mestre:</b> +4 em Percepção; alcance da punga muda para médio.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // extraído do bloco "Tentacute". :contentReference[oaicite:3]{index=3}
      },

      {
        id: 102,
        id_parceiro_pai: 6, // assassino (veneno / ataque furtivo)
        nome: 'Elemental do Veneno (Médio) - parceiro',
        descricao:
          'Parceiro que oferece vantagens relacionadas a venenos: Iniciante: CD para resistir aos efeitos de veneno aumenta em +2 e, uma vez por rodada, gastar 1 PM para envenenar arma (próximo ataque causa perda de 1d12 PV). Veterano/Mestre aumentam efeitos e PMs para aplicar venenos maiores, ignorar imunidade etc.',
        tracos: ['VENENO', 'APLICACAO_ARMA', 'ESPECIAL'],
        parceiro_patamar: [
          '<b>Iniciante:</b> CD contra veneno +2; 1 PM para envenenar arma (próximo acerto causa 1d12 PV).',
          '<b>Veterano:</b> gastar 3 PM para aplicar veneno que causa 2d12 PV.',
          '<b>Mestre:</b> efeitos de veneno ignoram imunidade; 5 PM para aplicar 3d12 PV.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Elemental do Veneno" no arquivo. :contentReference[oaicite:4]{index=4}
      },

      {
        id: 103,
        id_parceiro_pai: 8, // montaria
        nome: 'Urso das Neves',
        descricao:
          'Parceiro montaria (Grande): Iniciante: deslocamento muda e reduz dano por frio; Veterano: deslocamento de natação e aumento das proteções; Mestre: aumentos maiores de RD (redução de dano).',
        tracos: ['MONTARIA', 'RESISTENCIA_FRIO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento muda para 12m e redução de frio 5.',
          '<b>Veterano:</b> deslocamento normal e de natação 12m e RD aumenta.',
          '<b>Mestre:</b> redução de frio maior (ex.: 20).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Urso das Neves". :contentReference[oaicite:5]{index=5}
      },

      {
        id: 104,
        id_parceiro_pai: 10, // combatente (montaria que aumenta dano)
        nome: 'Gorlogg Alfa (parceiro montaria)',
        descricao:
          'Parceiro montaria (Grande): Iniciante: deslocamento 12m e +1d6 em dano corpo a corpo; Veterano: bônus de Atletismo e ação de movimento extra; Mestre: deslocamento 15m e +2d8 em dano corpo a corpo.',
        tracos: ['MONTARIA', 'AUMENTA_DANO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento 12m e +1d6 dano corpo a corpo.',
          '<b>Veterano:</b> +5 em Atletismo para saltar e ação de movimento adicional.',
          '<b>Mestre:</b> deslocamento 15m e +2d8 dano corpo a corpo.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Gorlogg" / "Gorlogg Alfa". :contentReference[oaicite:6]{index=6}
      },

      {
        id: 105,
        id_parceiro_pai: 8, // montaria
        nome: 'Cavalo Glacial',
        descricao:
          'Parceiro montaria (Grande): Iniciante: deslocamento 9m (natação 12m) e redução de frio 5; Veterano: ao fazer ataque corpo a corpo, pode gastar 1 PM; Mestre: benefícios adicionais de movimento/dano.',
        tracos: ['MONTARIA', 'NATACAO', 'RESISTENCIA_FRIO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento 9m (natação 12m) e redução de frio 5.',
          '<b>Veterano:</b> ao fazer ataque corpo a corpo, pode gastar 1 PM para efeitos extras.',
          '<b>Mestre:</b> efeitos e deslocamento aprimorados.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '213', // página indicada no trecho do cavalo glacial. :contentReference[oaicite:7]{index=7}
      },

      {
        id: 106,
        id_parceiro_pai: 8, // cavalo / montaria (Cavalo de Namalkah)
        nome: 'Cavalo de Namalkah',
        descricao:
          'Parceiro montaria (Grande) com foco em deslocamento e ação de movimento extra; patamares aumentam deslocamento e bônus em ataques corpo a corpo.',
        tracos: ['MONTARIA', 'RAPIDEZ'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento muda para 15m e uma ação de movimento extra por turno para se deslocar.',
          '<b>Veterano:</b> deslocamento 18m e +2 em ataques corpo a corpo.',
          '<b>Mestre:</b> segunda ação de movimento extra por cena e +2d6 dano extra.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Cavalo de Namalkah". :contentReference[oaicite:8]{index=8}
      },

      {
        id: 107,
        id_parceiro_pai: 8, // besta de carga / montaria
        nome: 'Cavalo de Carga',
        descricao:
          'Parceiro (besta de carga): função de carga e transporte; benefícios menores do que montarias de combate.',
        tracos: ['CARGA', 'MONTARIA'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uso como besta de carga (capacidade de carga maior).',
          '<b>Veterano:</b> melhorias na carga / deslocamento.',
          '<b>Mestre:</b> (preencher se necessário).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '212', // referência próxima no texto. :contentReference[oaicite:9]{index=9}
      },

      {
        id: 108,
        id_parceiro_pai: 10, // combatente / aumenta dano
        nome: 'Deinonico (parceiro montaria média)',
        descricao:
          'Parceiro montaria (Média): Iniciante: deslocamento 12m e +1 em margem de ameaça; Veterano: ação de movimento extra e +5 Atletismo para saltar; Mestre: deslocamento 15m e aumento de margem de ameaça +2.',
        tracos: ['MONTARIA', 'AUMENTA_MARGEM_AMEAÇA'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento 12m e +1 margem de ameaça em corpo a corpo.',
          '<b>Veterano:</b> +5 Atletismo para saltar e ação de movimento adicional (apenas para se deslocar).',
          '<b>Mestre:</b> deslocamento 15m e margem de ameaça +2.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '244', // trecho deinonico. :contentReference[oaicite:10]{index=10}
      },

      {
        id: 109,
        id_parceiro_pai: 3, // ajudante (kobold como parceiro especial: combatente, mas usa textualmente "combatente")
        nome: 'Kobold (parceiro especial)',
        descricao:
          'Parceiro especial (combatente): Iniciante: +1 em testes de ataque e rolagens de dano contra inimigos flanqueados; Veterano: aumentos em bônus de ataque; Mestre: flanquear mesmo criaturas que não podem ser flanqueadas.',
        tracos: ['PEQUENO', 'APOIO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> +1 em testes de ataque e dano quando flanqueando.',
          '<b>Veterano:</b> bônus aumentam para +2.',
          '<b>Mestre:</b> permite flanquear criaturas normalmente imunes a flanqueamento.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Kobold" / "Conjurando Kobolds". :contentReference[oaicite:11]{index=11}
      },

      {
        id: 110,
        id_parceiro_pai: 23, // vigilante / familiar
        nome: 'Verilêmur',
        descricao:
          'Parceiro especial (vigilante) — apenas devotos de Khalmyr: Iniciante: pode lançar Círculo da Justiça (redução de custo) ; Veterano: reroll de resistência gastando PM; Mestre: CD da magia aumentada.',
        tracos: ['VIGILANTE', 'AURA'],
        parceiro_patamar: [
          '<b>Iniciante:</b> pode lançar Círculo da Justiça; custo diminui em –1 PM.',
          '<b>Veterano:</b> pode gastar 2 PM para rolar novamente um teste de resistência (uma vez por teste).',
          '<b>Mestre:</b> CD para resistir ao Círculo da Justiça aumenta em +5.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Verilêmur". :contentReference[oaicite:12]{index=12}
      },

      {
        id: 111,
        id_parceiro_pai: 8, // montaria (Urso Pardo como montaria grande)
        nome: 'Urso Pardo',
        descricao:
          'Parceiro montaria (Grande): Iniciante: deslocamento 12m e +1d6 dano corpo a corpo; Veterano: manobra agarrar como ação livre (sem ocupar mãos); Mestre: bônus em rolagens de dano aumenta para +1d10.',
        tracos: ['MONTARIA', 'AGARRAR'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento 12m e +1d6 em rolagem de dano corpo a corpo.',
          '<b>Veterano:</b> pode fazer manobra agarrar como ação livre quando acerta ataque corpo a corpo.',
          '<b>Mestre:</b> bônus em dano muda para +1d10.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '223', // trecho com urso pardo/urso das cavernas. :contentReference[oaicite:13]{index=13}
      },

      {
        id: 112,
        id_parceiro_pai: 8, // montaria enorme
        nome: 'Urso das Cavernas',
        descricao:
          'Parceiro montaria (Enorme): Iniciante: deslocamento 12m e redução de dano; Veterano: manobra agarrar como ação livre; Mestre: bônus maiores (preenchimento conforme trecho).',
        tracos: ['MONTARIA', 'REDUCAO_DANO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento 12m e redução de dano 2.',
          '<b>Veterano:</b> quando acerta ataque corpo a corpo pode usar agarrar como ação livre.',
          '<b>Mestre:</b> aumento da redução de dano e benefícios adicionais.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Urso das Cavernas". :contentReference[oaicite:14]{index=14}
      },

      {
        id: 113,
        id_parceiro_pai: 10, // combatente / montaria enorme (mamute → equivalente a elefante)
        nome: 'Mamute (parceiro montaria Enorme)',
        descricao:
          'Parceiro montaria (Enorme) que fornece os mesmos benefícios que um elefante (deslocamento, força de impacto, etc.). Iniciante/Veterano/Mestre seguem perfil de um elefante montaria descrito no livro.',
        tracos: ['MONTARIA', 'ENORME', 'FORCA'],
        parceiro_patamar: [
          '<b>Iniciante:</b> benefícios equivalentes aos de um elefante montaria; deslocamento e impacto.',
          '<b>Veterano:</b> melhorias em manobras (ex.: agarrar e derrubar).',
          '<b>Mestre:</b> efeitos maiores e bonificações em combate montado.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Mamute" no arquivo. :contentReference[oaicite:15]{index=15}
      },

      {
        id: 114,
        id_parceiro_pai: 21, // perseguidor (farejador, rastreador)
        nome: 'Perdigueiro Troll',
        descricao:
          'Parceiro (perseguidor): Iniciante: +2 em Percepção e Sobrevivência; Veterano: +2 em agarrar/derrubar e capacidade de manter presa sem ocupar mão; Mestre: bônus maiores e reação de agarrar em ataque bem-sucedido.',
        tracos: ['PERSEGUIR', 'FARO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> +2 em Percepção e Sobrevivência.',
          '<b>Veterano:</b> +2 em testes para agarrar e derrubar; pode manter criatura agarrada sem ocupar mão.',
          '<b>Mestre:</b> bônus aumentam para +5 e, ao acertar ataque corpo a corpo, pode usar agarrar como reação.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Perdigueiro Troll". :contentReference[oaicite:16]{index=16}
      },

      {
        id: 115,
        id_parceiro_pai: 10, // montaria / combatente (selako)
        nome: 'Selako',
        descricao:
          'Parceiro montaria (Grande) aquático: Iniciante: deslocamento de natação e ação de movimento extra; Veterano: +1d6 em dano corpo a corpo; Mestre: deslocamento e dano ampliados (sangramentos em uso do bônus).',
        tracos: ['MONTARIA', 'NATACAO', 'SANGRAMENTO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento de natação 9m e ação de movimento extra; +1d6 em dano corpo a corpo (em alguns casos).',
          '<b>Veterano:</b> deslocamento de natação 15m e bônus de dano aumenta para +2d6.',
          '<b>Mestre:</b> deslocamento 18m; quando usa o bônus de dano, a criatura alvo fica sangrando.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho com "selako". :contentReference[oaicite:17]{index=17}
      },

      {
        id: 116,
        id_parceiro_pai: 3, // ajudante / tipo de suporte
        nome: 'Platan (parceiro montaria/apoio)',
        descricao:
          'Parceiro montaria (Grande) que fornece movimentação e utilidades; Iniciante: natação e ação extra; Veterano/Mestre: danos adicionais e usos de PM para causar dano de impacto.',
        tracos: ['MONTARIA', 'APOIO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento ajustado, ação de movimento extra.',
          '<b>Veterano:</b> pode gastar PM para causar dano adicional de impacto.',
          '<b>Mestre:</b> deslocamento e efeitos maiores.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Platan / selako / platan" - contexto múltiplo. :contentReference[oaicite:18]{index=18}
      },

      {
        id: 117,
        id_parceiro_pai: 8, // montaria/besta de carga
        nome: 'Cavalo de Guerra',
        descricao:
          'Parceiro montaria treinada para combate (montaria de guerra): estatísticas de cavalo de montaria com treinamento de combate; patamares aumentam coragem e resistência.',
        tracos: ['MONTARIA', 'GUERRA'],
        parceiro_patamar: [
          '<b>Iniciante:</b> cavalos de montaria (melhor deslocamento e ação extra).',
          '<b>Veterano:</b> treinamento adicional para combate; menor tendência a se assustar.',
          '<b>Mestre:</b> benefícios maiores dependendo do treinamento.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Cavalo de Guerra". :contentReference[oaicite:19]{index=19}
      },
      {
        id: 117,
        id_parceiro_pai: 21, // montaria/besta de carga
        nome: 'Falcão',
        descricao: 'Um falcão é um parceiro especial (perseguidor) que fornece os benefícios a seguir. ',
        tracos: ['PERSEGUIDOR'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por cena, você pode gastar uma ação de movimento e fazer um teste de Adestramento (CD 10). Se passar, o falcão concede a você +1 em testes de ataque, Percepção e Sobrevivência até o fim da cena. Para cada 10 pontos pelos quais o resultado de seu teste passar a CD, esse bônus aumenta em +1. ',
          '<b>Veterano:</b> você pode usar Sentidos Aguçados. ',
          '<b>Mestre:</b> uma vez por rodada, você pode gastar 1 PM para fazer uma criatura em alcance médio ficar cega por 1d4 rodadas (Ref CD Car evita).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Cavalo de Guerra". :contentReference[oaicite:19]{index=19}
      },
    ];
  }
}
