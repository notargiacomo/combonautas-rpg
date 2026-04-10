import { Injectable } from '@angular/core';

import { Referencia } from '@app/enum/referencia.enum';
import { Parceiro } from '@app/model/parceiro';

@Injectable({
  providedIn: 'root',
})
export class ParceiroData {
  private parceiro: Parceiro[] = [];

  get(): any[] {
    return this.parceiro;
  }

  constructor() {
    this.parceiro = [
      {
        id: 1,
        nome: 'Adepto',
        descricao: 'Um conjurador capaz de ajudá-lo a lançar suas magias.',
        chave: ['DIMINUI', 'CUSTO_MAGIA', 'Adepto'],
        parceiro_patamar: [
          '<b>Iniciante:</b> o custo para lançar suas magias de 1º círculo diminui (-1) PM.',
          '<b>Veterano:</b> como acima, mas também reduz o custo de suas magias de 2º círculo.',
          '<b>Mestre:</b> como acima, e esta redução se torna cumulativa com outras reduções.',
        ],
        referencias: Referencia.BASICO,
        pagina: '260',
      },
      {
        id: 2,
        nome: 'Ajudante',
        descricao: 'Um bardo, nobre ou sábio que ajuda com palavras firmes ou encorajadoras.',
        chave: ['AUMENTA', 'PERICIA', 'Ajudante'],
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
        id: 3,
        nome: 'Assassino',
        descricao: 'Um ladino ou outro tipo furtivo e letal.',
        chave: ['AUMENTA', 'ATAQUE', 'DANO', 'Assassino'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você pode usar a habilidade Ataque Furtivo +1d6. Se já possui a habilidade, o bônus é cumulativo.',
          '<b>Veterano:</b> além do Ataque Furtivo, fornece bônus por flanquear contra um inimigo por rodada.',
          '<b>Mestre:</b> muda o dano do Ataque Furtivo para +2d6. Note que, além de fornecer +2 em testes de ataque corpo a corpo, o bônus por flanquear facilita que o personagem use seu Ataque Furtivo.',
        ],
        referencias: Referencia.BASICO,
        pagina: '260',
      },
      {
        id: 4,
        nome: 'Atirador',
        descricao: 'Um arqueiro, besteiro ou outro combatente à distância.',
        chave: ['AUMENTA', 'DANO', 'Atirador'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por rodada, você recebe +1d6 em uma rolagem de dano à distância.',
          '<b>Veterano:</b> muda para +1d10.',
          '<b>Mestre:</b> muda para +2d8.',
        ],
        referencias: Referencia.BASICO,
        pagina: '261',
      },
      {
        id: 5,
        nome: 'Besta de Carga',
        descricao: 'Um animal capaz de carregar peso, como um boi, burro ou mula.',
        chave: ['AUMENTA', 'Besta de Carga', 'ANIMAL'],
        parceiro_patamar: [
          '<b>Iniciante:</b> pode carregar 10 espaços de itens.',
          '<b>Veterano:</b> pode carregar 15 espaços.',
          '<b>Mestre:</b> pode carregar 20 espaços de itens.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '214',
      },
      {
        id: 6,
        nome: 'Combatente',
        descricao: 'Um bucaneiro, guerreiro, paladino ou animal de caça.',
        chave: ['AUMENTA', 'ATAQUE', 'DANO', 'Combatente'],
        parceiro_patamar: [
          '<b>Iniciante:</b> +2 em testes de ataque.',
          '<b>Veterano:</b> muda para +3 em testes de ataque.',
          '<b>Mestre:</b> muda para +4 em testes de ataque e, uma vez por rodada, você pode gastar 5 PM para fazer um ataque extra.',
        ],
        referencias: Referencia.BASICO,
        pagina: '261',
      },
      {
        id: 7,
        nome: 'Destruidor',
        descricao: 'Um arcanista ou inventor.',
        chave: ['AUMENTA', 'DANO', 'Destruidor'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por rodada, como uma ação livre, você pode gastar 1 PM para causar 2d6 pontos de dano de ácido, eletricidade, fogo ou frio (de acordo com o parceiro) em um alvo em alcance curto.',
          '<b>Veterano:</b> como acima, mas você também pode gastar 2 PM para causar 4d6 pontos de dano.',
          '<b>Mestre:</b> como acima, mas você também pode gastar 4 PM para causar 6d6 pontos de dano em uma área de 6m de raio em alcance médio.',
        ],
        referencias: Referencia.BASICO,
        pagina: '261',
      },
      {
        id: 8,
        nome: 'Fortão',
        descricao: 'Um bárbaro, lutador ou outro tipo que bate primeiro e pensa depois.',
        chave: ['AUMENTA', 'DANO', 'Fortão'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por rodada, você recebe +1d8 em uma rolagem de dano corpo a corpo.',
          '<b>Veterano:</b> muda para +1d12.',
          '<b>Mestre:</b> muda para +3d6.',
        ],
        referencias: Referencia.BASICO,
        pagina: '214',
      },
      {
        id: 9,
        nome: 'Guardião',
        descricao: 'Um cavaleiro, cão de guarda ou outro NPC cuja função primária é proteger.',
        chave: ['AUMENTA', 'DEFESA', 'Guardião'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você recebe +2 na Defesa.',
          '<b>Veterano:</b> muda para +3.',
          '<b>Mestre:</b> muda para +4 na Defesa e +2 em testes de resistência.',
        ],
        referencias: Referencia.BASICO,
        pagina: '214',
      },
      {
        id: 10,
        nome: 'Magivocador',
        descricao: 'Um conjurador especializado em magias ofensivas.',
        chave: ['AUMENTA', 'DANO', 'MAGIA', 'CD', 'Magivocador'],
        parceiro_patamar: [
          '<b>Iniciante:</b> o dano de suas magias aumenta em +1 dado do mesmo tipo.',
          '<b>Veterano:</b> como acima, e a CD para resistir a suas magias aumenta em +1.',
          '<b>Mestre:</b> como acima, mas dobra os bônus (para um total de +2 dados de dano e +2 na CD).',
        ],
        referencias: Referencia.BASICO,
        pagina: '215',
      },
      {
        id: 11,
        nome: 'Médico',
        descricao: 'Um clérigo, druida, herbalista ou outro NPC com capacidades curativas.',
        chave: ['CURA', 'APOIO', 'REMOVE CONDIÇÃO', 'Médico'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por rodada você pode gastar 1 PM para curar 1d8+1 PV de uma criatura adjacente.',
          '<b>Veterano:</b> como acima, mas você pode gastar 3 PM para curar 3d8+3 PV ou remover uma condição prejudicial (como abalado ou fatigado).',
          '<b>Mestre:</b> como acima, mas você também pode gastar 5 PM para curar 6d8+6 PV.',
        ],
        referencias: Referencia.BASICO,
        pagina: '215',
      },
      {
        id: 12,
        nome: 'Perseguidor',
        descricao: 'Um caçador, animal farejador ou outro especialista em localizar alvos.',
        chave: ['AUMENTA', 'PERÍCIA', 'CAÇA', 'Perseguidor'],
        parceiro_patamar: [
          '<b>Iniciante:</b> +2 em Percepção e Sobrevivência.',
          '<b>Veterano:</b> você pode usar Sentidos Aguçados.',
          '<b>Mestre:</b> você pode usar Percepção às Cegas.',
        ],
        referencias: Referencia.BASICO,
        pagina: '261',
      },
      {
        id: 13,
        nome: 'Vigilante',
        descricao: 'Um vigia ou animal de guarda, sempre atento aos arredores.',
        chave: ['PERÍCIA', 'Vigilante'],
        parceiro_patamar: [
          '<b>Iniciante:</b> +2 em Percepção e Iniciativa.',
          '<b>Veterano:</b> você pode usar Esquiva Sobrenatural.',
          '<b>Mestre:</b> você pode usar Olhos nas Costas.',
        ],
        referencias: Referencia.BASICO,
        pagina: '215',
      },
      {
        id: 14,
        id_parceiro_pai: 8, // montaria / besta de carga (inferido)
        nome: 'Capivara',
        descricao:
          'A capivara é um parceiro montaria (Médio) que fornece benefícios: Iniciante: deslocamento muda para 9m (natação 12m) e você recebe uma ação de movimento extra (apenas para se deslocar). Veterano: pode usar Aparência Inofensiva (se já possuir esse poder, a CD para resistir aumenta). Mestre: uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo.',
        chave: ['Montaria', 'Natação', 'Movimento Extra'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento muda para 9m (natação 12m) e você recebe uma ação de movimento extra (apenas para se deslocar).',
          '<b>Veterano:</b> pode usar Aparência Inofensiva; a CD para resistir a ele aumenta em +2 se possuir o poder.',
          '<b>Mestre:</b> uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '???', // página não confiável no OCR (preencher manualmente se precisar)
      }, // fonte: trecho "Capivara" no arquivo. :contentReference[oaicite:2]{index=2}

      {
        id: 15,
        id_parceiro_pai: 23, // vigilante
        nome: 'Tentacute',
        descricao:
          'Parceiro especial (vigilante). Iniciante: +2 em Percepção e, em testes de Ladinagem para punga, role dois dados e use o melhor. Veterano: ação de movimento/1 PM para tentar punga em alcance curto. Mestre: +4 em Percepção e punga em alcance médio.',
        chave: ['Vigilante', 'Familiar', 'OCULTACAO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> +2 em Percepção; quando faz teste de Ladinagem para punga pode rolar 2d e usar o melhor.',
          '<b>Veterano:</b> uma vez por rodada, pode gastar ação de movimento +1 PM para tentar punga em alcance curto.',
          '<b>Mestre:</b> +4 em Percepção; alcance da punga muda para médio.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // extraído do bloco "Tentacute". :contentReference[oaicite:3]{index=3}
      },

      {
        id: 16,
        id_parceiro_pai: 6, // assassino (veneno / ataque furtivo)
        nome: 'Elemental do Veneno (Médio) - parceiro',
        descricao:
          'Parceiro que oferece vantagens relacionadas a venenos: Iniciante: CD para resistir aos efeitos de veneno aumenta em +2 e, uma vez por rodada, gastar 1 PM para envenenar arma (próximo ataque causa perda de 1d12 PV). Veterano/Mestre aumentam efeitos e PMs para aplicar venenos maiores, ignorar imunidade etc.',
        chave: ['VENENO', 'APLICACAO_ARMA', 'Especial'],
        parceiro_patamar: [
          '<b>Iniciante:</b> CD contra veneno +2; 1 PM para envenenar arma (próximo acerto causa 1d12 PV).',
          '<b>Veterano:</b> gastar 3 PM para aplicar veneno que causa 2d12 PV.',
          '<b>Mestre:</b> efeitos de veneno ignoram imunidade; 5 PM para aplicar 3d12 PV.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Elemental do Veneno" no arquivo. :contentReference[oaicite:4]{index=4}
      },

      {
        id: 17,
        id_parceiro_pai: 8, // montaria
        nome: 'Urso das Neves',
        descricao:
          'Parceiro montaria (Grande): Iniciante: deslocamento muda e reduz dano por frio; Veterano: deslocamento de natação e aumento das proteções; Mestre: aumentos maiores de RD (redução de dano).',
        chave: ['Montaria', 'Grande', 'RESISTENCIA_FRIO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento muda para 12m e redução de frio 5.',
          '<b>Veterano:</b> deslocamento normal e de natação 12m e RD aumenta.',
          '<b>Mestre:</b> redução de frio maior (ex.: 20).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Urso das Neves". :contentReference[oaicite:5]{index=5}
      },

      {
        id: 18,
        id_parceiro_pai: 10, // combatente (montaria que aumenta dano)
        nome: 'Gorlogg Alfa (parceiro montaria)',
        descricao:
          'Parceiro montaria (Grande): Iniciante: deslocamento 12m e +1d6 em dano corpo a corpo; Veterano: bônus de Atletismo e ação de movimento extra; Mestre: deslocamento 15m e +2d8 em dano corpo a corpo.',
        chave: ['Montaria', 'Grande', 'AUMENTA_DANO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento 12m e +1d6 dano corpo a corpo.',
          '<b>Veterano:</b> +5 em Atletismo para saltar e ação de movimento adicional.',
          '<b>Mestre:</b> deslocamento 15m e +2d8 dano corpo a corpo.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Gorlogg" / "Gorlogg Alfa". :contentReference[oaicite:6]{index=6}
      },

      {
        id: 19,
        id_parceiro_pai: 8, // montaria
        nome: 'Cavalo Glacial',
        descricao:
          'Parceiro montaria (Grande): Iniciante: deslocamento 9m (natação 12m) e redução de frio 5; Veterano: ao fazer ataque corpo a corpo, pode gastar 1 PM; Mestre: benefícios adicionais de movimento/dano.',
        chave: ['Montaria', 'Natação', 'Grande', 'RESISTENCIA_FRIO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento 9m (natação 12m) e redução de frio 5.',
          '<b>Veterano:</b> ao fazer ataque corpo a corpo, pode gastar 1 PM para efeitos extras.',
          '<b>Mestre:</b> efeitos e deslocamento aprimorados.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '213', // página indicada no trecho do cavalo glacial. :contentReference[oaicite:7]{index=7}
      },

      {
        id: 20,
        id_parceiro_pai: 8, // cavalo / montaria (Cavalo de Namalkah)
        nome: 'Cavalo de Namalkah',
        descricao:
          'Parceiro montaria (Grande) com foco em deslocamento e ação de movimento extra; patamares aumentam deslocamento e bônus em ataques corpo a corpo.',
        chave: ['Montaria', 'RAPIDEZ'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento muda para 15m e uma ação de movimento extra por turno para se deslocar.',
          '<b>Veterano:</b> deslocamento 18m e +2 em ataques corpo a corpo.',
          '<b>Mestre:</b> segunda ação de movimento extra por cena e +2d6 dano extra.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Cavalo de Namalkah". :contentReference[oaicite:8]{index=8}
      },

      {
        id: 21,
        id_parceiro_pai: 8, // besta de carga / montaria
        nome: 'Cavalo de Carga',
        descricao:
          'Parceiro (besta de carga): função de carga e transporte; benefícios menores do que montarias de combate.',
        chave: ['Besta de Carga', 'Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uso como besta de carga (capacidade de carga maior).',
          '<b>Veterano:</b> melhorias na carga / deslocamento.',
          '<b>Mestre:</b> (preencher se necessário).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '212', // referência próxima no texto. :contentReference[oaicite:9]{index=9}
      },

      {
        id: 22,
        id_parceiro_pai: 10, // combatente / aumenta dano
        nome: 'Deinonico (parceiro montaria média)',
        descricao:
          'Parceiro montaria (Média): Iniciante: deslocamento 12m e +1 em margem de ameaça; Veterano: ação de movimento extra e +5 Atletismo para saltar; Mestre: deslocamento 15m e aumento de margem de ameaça +2.',
        chave: ['Montaria', 'Média', 'AUMENTA_MARGEM_AMEAÇA'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento 12m e +1 margem de ameaça em corpo a corpo.',
          '<b>Veterano:</b> +5 Atletismo para saltar e ação de movimento adicional (apenas para se deslocar).',
          '<b>Mestre:</b> deslocamento 15m e margem de ameaça +2.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '244', // trecho deinonico. :contentReference[oaicite:10]{index=10}
      },

      {
        id: 23,
        id_parceiro_pai: 3, // ajudante (kobold como parceiro especial: combatente, mas usa textualmente "combatente")
        nome: 'Kobold (parceiro especial)',
        descricao:
          'Parceiro especial (combatente): Iniciante: +1 em testes de ataque e rolagens de dano contra inimigos flanqueados; Veterano: aumentos em bônus de ataque; Mestre: flanquear mesmo criaturas que não podem ser flanqueadas.',
        chave: ['Pequeno', 'APOIO', 'Combatente'],
        parceiro_patamar: [
          '<b>Iniciante:</b> +1 em testes de ataque e dano quando flanqueando.',
          '<b>Veterano:</b> bônus aumentam para +2.',
          '<b>Mestre:</b> permite flanquear criaturas normalmente imunes a flanqueamento.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Kobold" / "Conjurando Kobolds". :contentReference[oaicite:11]{index=11}
      },

      {
        id: 24,
        id_parceiro_pai: 23, // vigilante / familiar
        nome: 'Verilêmur',
        descricao:
          'Parceiro especial (vigilante) — apenas devotos de Khalmyr: Iniciante: pode lançar Círculo da Justiça (redução de custo) ; Veterano: reroll de resistência gastando PM; Mestre: CD da magia aumentada.',
        chave: ['Vigilante', 'AURA'],
        parceiro_patamar: [
          '<b>Iniciante:</b> pode lançar Círculo da Justiça; custo diminui em –1 PM.',
          '<b>Veterano:</b> pode gastar 2 PM para rolar novamente um teste de resistência (uma vez por teste).',
          '<b>Mestre:</b> CD para resistir ao Círculo da Justiça aumenta em +5.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Verilêmur". :contentReference[oaicite:12]{index=12}
      },

      {
        id: 25,
        id_parceiro_pai: 8, // montaria (Urso Pardo como montaria grande)
        nome: 'Urso Pardo',
        descricao:
          'Parceiro montaria (Grande): Iniciante: deslocamento 12m e +1d6 dano corpo a corpo; Veterano: manobra agarrar como ação livre (sem ocupar mãos); Mestre: bônus em rolagens de dano aumenta para +1d10.',
        chave: ['Montaria', 'AGARRAR', 'Grande'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento 12m e +1d6 em rolagem de dano corpo a corpo.',
          '<b>Veterano:</b> pode fazer manobra agarrar como ação livre quando acerta ataque corpo a corpo.',
          '<b>Mestre:</b> bônus em dano muda para +1d10.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '223', // trecho com urso pardo/urso das cavernas. :contentReference[oaicite:13]{index=13}
      },

      {
        id: 26,
        id_parceiro_pai: 8, // montaria enorme
        nome: 'Urso das Cavernas',
        descricao:
          'Parceiro montaria (Enorme): Iniciante: deslocamento 12m e redução de dano; Veterano: manobra agarrar como ação livre; Mestre: bônus maiores (preenchimento conforme trecho).',
        chave: ['Montaria', 'REDUCAO_DANO', 'Enorme'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento 12m e redução de dano 2.',
          '<b>Veterano:</b> quando acerta ataque corpo a corpo pode usar agarrar como ação livre.',
          '<b>Mestre:</b> aumento da redução de dano e benefícios adicionais.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Urso das Cavernas". :contentReference[oaicite:14]{index=14}
      },

      {
        id: 27,
        id_parceiro_pai: 10, // combatente / montaria enorme (mamute → equivalente a elefante)
        nome: 'Mamute (parceiro montaria Enorme)',
        descricao:
          'Parceiro montaria (Enorme) que fornece os mesmos benefícios que um elefante (deslocamento, força de impacto, etc.). Iniciante/Veterano/Mestre seguem perfil de um elefante montaria descrito no livro.',
        chave: ['Montaria', 'Enorme', 'FORCA'],
        parceiro_patamar: [
          '<b>Iniciante:</b> benefícios equivalentes aos de um elefante montaria; deslocamento e impacto.',
          '<b>Veterano:</b> melhorias em manobras (ex.: agarrar e derrubar).',
          '<b>Mestre:</b> efeitos maiores e bonificações em combate montado.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Mamute" no arquivo. :contentReference[oaicite:15]{index=15}
      },

      {
        id: 28,
        id_parceiro_pai: 21, // perseguidor (farejador, rastreador)
        nome: 'Perdigueiro Troll',
        descricao: 'O perdigueiro troll é um um parceiro especial (perseguidor) que fornece os benefícios a seguir.',
        chave: ['Perseguidor', 'FARO'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você recebe +2 em Percepção e Sobrevivência.',
          '<b>Veterano:</b> você recebe +2 em testes para agarrar e derrubar, e pode manter uma criatura Grande ou menor agarrada sem ocupar uma mão.',
          '<b>Mestre:</b> muda os bônus para +5 e, uma vez por rodada, quando acerta um ataque corpo a corpo, você pode usar a manobra agarrar como uma reação.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Perdigueiro Troll". :contentReference[oaicite:16]{index=16}
      },

      {
        id: 29,
        id_parceiro_pai: 10, // montaria / combatente (selako)
        nome: 'Selako',
        descricao:
          'Parceiro montaria (Grande) aquático: Iniciante: deslocamento de natação e ação de movimento extra; Veterano: +1d6 em dano corpo a corpo; Mestre: deslocamento e dano ampliados (sangramentos em uso do bônus).',
        chave: ['Montaria', 'Natação', 'SANGRAMENTO', 'Grande'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento de natação 9m e ação de movimento extra; +1d6 em dano corpo a corpo (em alguns casos).',
          '<b>Veterano:</b> deslocamento de natação 15m e bônus de dano aumenta para +2d6.',
          '<b>Mestre:</b> deslocamento 18m; quando usa o bônus de dano, a criatura alvo fica sangrando.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho com "selako". :contentReference[oaicite:17]{index=17}
      },

      {
        id: 30,
        id_parceiro_pai: 3, // ajudante / tipo de suporte
        nome: 'Platan (parceiro montaria/apoio)',
        descricao:
          'Parceiro montaria (Grande) que fornece movimentação e utilidades; Iniciante: natação e ação extra; Veterano/Mestre: danos adicionais e usos de PM para causar dano de impacto.',
        chave: ['Montaria', 'APOIO', 'Grande'],
        parceiro_patamar: [
          '<b>Iniciante:</b> deslocamento ajustado, ação de movimento extra.',
          '<b>Veterano:</b> pode gastar PM para causar dano adicional de impacto.',
          '<b>Mestre:</b> deslocamento e efeitos maiores.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '', // trecho "Platan / selako / platan" - contexto múltiplo. :contentReference[oaicite:18]{index=18}
      },
      {
        id: 32,
        id_parceiro_pai: 21, // montaria/besta de carga
        nome: 'Falcão',
        descricao: 'Um falcão é um parceiro especial (perseguidor) que fornece os benefícios a seguir. ',
        chave: ['Perseguidor'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por cena, você pode gastar uma ação de movimento e fazer um teste de Adestramento (CD 10). Se passar, o falcão concede a você +1 em testes de ataque, Percepção e Sobrevivência até o fim da cena. Para cada 10 pontos pelos quais o resultado de seu teste passar a CD, esse bônus aumenta em +1. ',
          '<b>Veterano:</b> você pode usar Sentidos Aguçados. ',
          '<b>Mestre:</b> uma vez por rodada, você pode gastar 1 PM para fazer uma criatura em alcance médio ficar cega por 1d4 rodadas (Ref CD Car evita).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 33,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Sapo Atroz',
        descricao: 'O sapo atroz é um parceiro montaria (Grande) que fornece os benefícios a seguir. ',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 9m (normal e de natação) e você recebe uma ação de movimento extra por turno (apenas para se deslocar) e +5 em testes de Atletismo para saltar.',
          '<b>Veterano:</b> você recebe +2 em testes para derrubar e desarmar.',
          '<b>Mestre:</b> muda o bônus de Atletismo para +10 e, uma vez por rodada, você pode gastar 1 PM para fazer uma manobra desarmar ou derrubar contra um alvo a até 3m.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 34,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Bulette',
        descricao: 'O bulette é um parceiro montaria (Grande) que fornece os benefícios a seguir. ',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 9m (escavação 6m) e, uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo. ',
          '<b>Veterano:</b> o bônus em rolagens de dano muda para +1d10.',
          '<b>Mestre:</b> o deslocamento de escavação muda para 12m e o bônus em rolagens de dano muda para +2d8.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 35,
        id_parceiro_pai: 21, // montaria/besta de carga
        nome: 'Hiena',
        descricao: 'A hiena é um parceiro especial (perseguidor) que fornece os benefícios a seguir.',
        chave: ['Perseguidor'],
        parceiro_patamar: [
          '<b>Iniciante:</b> +2 em Furtividade e Sobrevivência.',
          '<b>Veterano:</b> você pode usar Oportunismo. Se possuir esse poder, em vez disso seu custo diminui em –1 PM.',
          '<b>Mestre:</b> você pode usar Sentidos Aguçados. Alternativamente, uma hiena pode ser uma montaria Média com as estatísticas de um hienodonte (a seguir).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 36,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Hienodonte',
        descricao: 'O hienodonte é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar).',
          '<b>Veterano:</b> você pode usar Oportunismo. Se possuir esse poder, em vez disso seu custo diminui em –1 PM.',
          '<b>Mestre:</b> quando acerta um ataque corpo a corpo, você pode fazer a manobra derrubar como uma ação livre.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 37,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Corcel de Kally',
        descricao: 'O corcel de Kally é um parceiro montaria (Grande) que fornece os benefícios a seguir. ',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e, uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo.',
          '<b>Veterano:</b> o bônus na rolagem de dano muda para +1d8 e seu deslocamento muda para 12m (normal e de voo).',
          '<b>Mestre:</b> seu deslocamento normal e de voo muda para 18m e, uma vez por rodada, você pode gastar 2 PM para causar 3d8 pontos de dano de fogo em todas as criaturas em um cone de 6m (Ref CD Car reduz à metade).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 38,
        id_parceiro_pai: 9, // montaria/besta de carga
        nome: 'Ko-Kabuto',
        descricao: 'O ko-kabuto é um parceiro especial (guardião) que fornece os benefícios a seguir.',
        chave: ['Guardião'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você recebe visão na penumbra e +1 na Defesa.',
          '<b>Veterano:</b> uma vez por rodada, você recebe +1d8 em uma rolagem de dano corpo a corpo.',
          '<b>Mestre:</b> o bônus na Defesa muda para +2 e o bônus em rolagens de dano muda para +1d10. Alternativamente, um ko-kabuto pode ser uma montaria Pequena (adequada a criaturas Minúsculas) com as estatísticas de um dai-kabuto (a seguir).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 39,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Dai-Kabuto',
        descricao: 'O dai-kabuto é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 9m e você recebe +2 em testes de agarrar e derrubar e uma ação de movimento extra por turno (apenas para se deslocar).',
          '<b>Veterano:</b> você recebe deslocamento de voo 6m.',
          '<b>Mestre:</b> o bônus em agarrar se aplica a todas as manobras e você recebe +2 na Defesa.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 40,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Bogum',
        descricao:
          'O bogum é um parceiro especial (companheiro animal), exclusivo de druidas, que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você forma um elo mental com o bogum (semelhante ao de um arcanista com seu familiar) e recebe +2 em Percepção e Sobrevivência.',
          '<b>Veterano:</b> uma vez por rodada, você recebe +1d6 de ácido em uma rolagem de dano. ',
          '<b>Mestre:</b> o bogum fornece também o benefício de um dedo de ente (veja Tormenta20, p. 160)',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 41,
        id_parceiro_pai: 8, // montaria/besta de carga
        nome: 'Escudeiro',
        descricao: 'O escudeiro é um parceiro especial (fortão) que fornece os benefícios a seguir.',
        chave: ['Fortão'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você pode empunhar o escudeiro como uma lança e um escudo pesado na mesma mão; você pode atacar com a lança sem perder o bônus na Defesa com o escudo, mas não pode atacar com ela e o escudo na mesma rodada.',
          '<b>Veterano:</b> o escudeiro recebe uma melhoria de arma ou de escudo (exceto material especial).',
          '<b>Mestre:</b> o escudeiro recebe uma segunda melhoria de arma ou de escudo (exceto material especial).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 42,
        id_parceiro_pai: 9, // montaria/besta de carga
        nome: 'Escudeiro',
        descricao:
          'O fofo é um parceiro especial (guardião) que fornece os benefícios a seguir. Iniciante: você recebe redução de dano 1.',
        chave: ['Guardião'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você recebe redução de dano 1.',
          '<b>Veterano:</b> a RD aumenta para 2 e você pode vestir um item que ocupe 1 espaço ou menos sem contar em seu limite de itens vestidos.',
          '<b>Mestre:</b> a RD aumenta para 3.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 43,
        id_parceiro_pai: 13, // montaria/besta de carga
        nome: 'Gambá',
        descricao: 'O gambá é um parceiro especial (vigilante) que fornece os benefícios a seguir.',
        chave: ['Vigilante'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você recebe +2 em Iniciativa e Percepção.',
          '<b>Veterano:</b> você pode gastar uma ação de movimento e 1 PM para deixar uma criatura em alcance curto enjoada por 1d4 rodadas (Fort CD Sab evita). ',
          '<b>Mestre:</b> os bônus em perícias aumentam para +5.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 44,
        id_parceiro_pai: 2, // montaria/besta de carga
        nome: 'Homúnculo',
        descricao: 'O homúnculo é um parceiro especial (ajudante) que fornece os benefícios a seguir.',
        chave: ['Ajudante'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seus venenos causam a perda de +1 PV por dado.',
          '<b>Veterano:</b> uma vez por rodada, quando faz um ataque, você pode gastar 1 PM. Se acertar o ataque, causa a perda de 1d12 PV por veneno.',
          '<b>Mestre:</b> a perda de PV aumenta para +2 por dado.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 45,
        id_parceiro_pai: 12, // montaria/besta de carga
        nome: 'Kill’Bone',
        descricao: 'O kill’bone é um parceiro especial (perseguidor) que fornece os benefícios a seguir. ',
        chave: ['Perseguidor'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você recebe faro e, uma vez por rodada, +1d6 em uma rolagem de dano corpo a corpo (o dano extra é dobrado contra finntroll e trolls).',
          '<b>Veterano:</b> o bônus em rolagens de dano muda para +1d8 e você recebe +2 em testes de perícia contra finntroll e trolls. ',
          '<b>Mestre:</b> o bônus em rolagens de dano muda para +1d10 e você não pode ser flanqueado.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 46,
        id_parceiro_pai: 13, // montaria/besta de carga
        nome: 'Tentacute',
        descricao: 'O tentacute é um parceiro especial (vigilante) que fornece os benefícios a seguir.',
        chave: ['Vigilante'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você recebe +2 em Percepção e, quando faz um teste de Ladinagem para punga, pode rolar dois dados e usar o melhor resultado.',
          '<b>Veterano:</b> uma vez por rodada, você pode gastar uma ação de movimento e 1 PM para fazer um teste de Ladinagem para punga contra um alvo em alcance curto que possa ser alcançado pelo tentacute.',
          '<b>Mestre:</b> o bônus em Percepção se torna +4 e o alcance da punga muda para médio.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 47,
        id_parceiro_pai: 13, // montaria/besta de carga
        nome: 'Verilêmur',
        descricao: 'O verilêmur é um parceiro especial (vigilante) que fornece os benefícios a seguir.',
        chave: ['Vigilante'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você pode lançar a magia Círculo da Justiça (atributo-chave Sabedoria); se aprender essa magia, seu custo diminui em –1 PM.',
          '<b>Veterano:</b> quando falha em um teste de resistência contra uma magia, você pode gastar 2 PM para rolar novamente esse teste (apenas uma vez por teste).',
          '<b>Mestre:</b> a CD para resistir à sua magia Círculo da Justiça aumenta em +5.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 48,
        id_parceiro_pai: 2, // montaria/besta de carga
        nome: 'Verilêmur',
        descricao: 'O malafex é um parceiro especial (ajudante) que fornece os benefícios a seguir.',
        chave: ['Ajudante'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você pode usar Sorte dos Loucos. Se já tiver esse poder, a perda de PM é reduzida para 1d4.',
          '<b>Veterano:</b> você pode usar Sorte dos Loucos em aliados voluntários em alcance curto (caso falhe, o aliado perde os PM).',
          '<b>Mestre:</b> quando um inimigo em alcance curto faz um teste, você pode gastar 2 PM para forçá-lo a rolar novamente o dado. Se ainda assim ele passar, você perde 1d6 PM (ou 1d4 se tiver Sorte dos Loucos).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 49,
        id_parceiro_pai: 3, // montaria/besta de carga
        nome: 'Asa-Assassina',
        descricao: 'Uma asa-assassina é um parceiro especial (assassino) que fornece os benefícios a seguir.',
        chave: ['Assassino'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por rodada, quando causa dano com um ataque, você pode deixar a vítima sangrando.',
          '<b>Veterano:</b> a perda de PV pelo sangramento aumenta para 1d8.',
          '<b>Mestre:</b> a perda de PV aumenta para 2d8.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 50,
        id_parceiro_pai: 1, // montaria/besta de carga
        nome: 'Cocatriz',
        descricao: 'A cocatriz é um parceiro especial (adepto) que fornece os benefícios a seguir.',
        chave: ['Adepto'],
        parceiro_patamar: [
          '<b>Iniciante:</b> suas habilidades mágicas que causam condições de movimento têm o custo reduzido em –1 PM.',
          '<b>Veterano:</b> a CD para resistir a essas habilidades aumenta em +2.',
          '<b>Mestre:</b> a redução de custo se torna cumulativa com outras reduções.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 51,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Cocatriz-Real',
        descricao: 'A cocatriz-real é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você ignora terreno difícil.',
          '<b>Veterano:</b> uma vez por rodada, quando acerta um ataque corpo a corpo, você pode fazer com que a vítima fique lenta (Fort CD For evita).',
          '<b>Mestre:</b> seu deslocamento muda para 12m (normal e de voo). Entretanto, quando voa, você deve terminar seu movimento sobre o chão ou outra superfície firme.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 52,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Baleote',
        descricao: 'O baleote é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você pode gastar 1 PM para causar 2d6 pontos de dano de eletricidade em uma linha de 9m (um baleote iniciante é muito jovem para ser usado como montaria).',
          '<b>Veterano:</b>  pode ser usado como montaria, mudando seu deslocamento para 9m (voo 12m).',
          '<b>Mestre:</b> seu deslocamento de voo muda para 15m e você também pode gastar 4 PM para causar 6d6 pontos de dano de eletricidade em uma linha de 9m.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 53,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Capivara',
        descricao: 'A capivara é um parceiro montaria (Médio) que fornece os benefícios a seguir. ',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 9m (natação 12m) e você recebe uma ação de movimento extra por turno (apenas para se deslocar). ',
          '<b>Veterano:</b> você pode usar Aparência Inofensiva (se já possuir esse poder, a CD para resistir a ele aumenta em +2).',
          '<b>Mestre:</b> uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 54,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Cavalo',
        descricao:
          'A montaria mais comum do Reinado. Cavalos sem treinamento se assustam facilmente, sendo necessário um teste de Cavalgar (CD 20) por rodada para permanecer montado durante um combate.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar). ',
          '<b>Veterano:</b> como acima, mas seu deslocamento muda para 15m e você recebe +2 em ataques corpo a corpo.',
          '<b>Mestre:</b> como acima, mas você recebe uma segunda ação de movimento extra por turno (novamente, apenas para se deslocar).',
        ],
        referencias: Referencia.BASICO,
        pagina: '',
      },
      {
        id: 55,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Pônei',
        descricao: 'Como cavalo, só que de tamanho médio.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar). ',
          '<b>Veterano:</b> como acima, mas seu deslocamento muda para 15m e você recebe +2 em ataques corpo a corpo.',
          '<b>Mestre:</b> como acima, mas você recebe uma segunda ação de movimento extra por turno (novamente, apenas para se deslocar).',
        ],
        referencias: Referencia.BASICO,
        pagina: '',
      },
      {
        id: 56,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Cão de Caça',
        descricao: 'Cães de porte adequado são montarias comuns para personagens Pequenos ou Minúsculos.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 9m, você pode usar faro e recebe uma ação de movimento extra por turno (apenas para se deslocar).',
          '<b>Veterano:</b> como acima, mas seu deslocamento muda para 12m e você recebe +2 na Defesa.',
          '<b>Mestre:</b> como acima; além disso, uma vez por rodada, quando acerta um ataque corpo a corpo, você pode fazer a manobra derrubar como uma ação livre.',
        ],
        referencias: Referencia.BASICO,
        pagina: '',
      },
      {
        id: 57,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Lobo-das-Cavernas',
        descricao:
          'Primos primitivos e maiores dos lobos comuns, lobos-das-cavernas são usados como montaria por goblinoides e aventureiros selvagens.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar). ',
          '<b>Veterano:</b>  como acima, mas seu deslocamento muda para 15m e, uma vez por rodada, você recebe +1d8 em uma rolagem de dano corpo a corpo.',
          '<b>Mestre:</b> como acima; além disso, uma vez por rodada, quando acerta um ataque corpo a corpo, você pode fazer a manobra derrubar como uma ação livre.',
        ],
        referencias: Referencia.BASICO,
        pagina: '',
      },
      {
        id: 58,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Lobo',
        descricao: 'Como Lobo-das-Cavernas, mas é montaria média.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar). ',
          '<b>Veterano:</b>  como acima, mas seu deslocamento muda para 15m e, uma vez por rodada, você recebe +1d8 em uma rolagem de dano corpo a corpo.',
          '<b>Mestre:</b> como acima; além disso, uma vez por rodada, quando acerta um ataque corpo a corpo, você pode fazer a manobra derrubar como uma ação livre.',
        ],
        referencias: Referencia.BASICO,
        pagina: '',
      },
      {
        id: 59,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Grifo',
        descricao: 'Esta fera majestosa é muito cobiçada por heróis',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por rodada, você recebe +1d8 em uma rolagem de dano corpo a corpo (um grifo iniciante é um filhote e não pode ser usado como montaria).',
          '<b>Veterano:</b>como acima, mas pode ser usado como montaria, mudando seu deslocamento para voo 18m. ',
          '<b>Mestre:</b> como acima, mas você recebe uma ação de movimento extra por turno (apenas para se deslocar).',
        ],
        referencias: Referencia.BASICO,
        pagina: '',
      },
      {
        id: 60,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Gorlogg',
        descricao: 'Esta besta primitiva é usada como montaria pelos mais selvagens.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e, uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo.',
          '<b>Veterano:</b> como acima, mas o bônus em rolagens de dano corpo a corpo muda para +1d10.',
          '<b>Mestre:</b> seu deslocamento muda para 15m e o bônus em rolagens de dano corpo a corpo muda para +2d8.',
        ],
        referencias: Referencia.BASICO,
        pagina: '',
      },
      {
        id: 61,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Trobo',
        descricao: 'Usados como animais de carga e tração, trobos também servem como montarias.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 9m e você recebe uma ação de movimento extra por turno (apenas para se deslocar) e +1 em testes de resistência.',
          '<b>Veterano:</b> como acima, mas seu deslocamento muda para 12m e o bônus em testes de resistência muda para +2.',
          '<b>Mestre:</b> como acima, mas o bônus em testes de resistência muda para +5.',
        ],
        referencias: Referencia.BASICO,
        pagina: '',
      },
      {
        id: 62,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Cavalo de Guerra',
        descricao:
          'Como Cavalo normal, porém cavalo de guerra dispensam teste de Cavalgar (CD 20) por rodada para permanecer montado durante um combate.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar). ',
          '<b>Veterano:</b> como acima, mas seu deslocamento muda para 15m e você recebe +2 em ataques corpo a corpo.',
          '<b>Mestre:</b> como acima, mas você recebe uma segunda ação de movimento extra por turno (novamente, apenas para se deslocar).',
        ],
        referencias: Referencia.BASICO,
        pagina: '',
      },
      {
        id: 63,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Cavalo de Namalkah',
        descricao: 'O cavalo de Namalkah é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 15m e você recebe uma ação de movimento extra por turno (apenas para se deslocar).',
          '<b>Veterano:</b> seu deslocamento muda para 18m e você recebe +2 em ataques corpo a corpo.',
          '<b>Mestre:</b> você recebe uma segunda ação de movimento extra por turno (novamente, apenas para se deslocar) e, uma vez por rodada, +2d6 em uma rolagem de dano corpo a corpo. Esses cavalos raramente são encontrados à venda fora de Namalkah. Mesmo no reino, conquistar um deles requer mais que dinheiro — requer merecimento. Obtê-los, mesmo por meio de uma habilidade, exige algum tipo de missão ou aventura para se provar digno.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 64,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Cavalo Glacial',
        descricao: 'O cavalo de Namalkah é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> O cavalo glacial é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
          '<b>Veterano:</b> seu deslocamento muda para 9m (natação 12m) e você recebe redução de frio 5.',
          '<b>Mestre:</b> uma vez por rodada, quando faz um ataque corpo a corpo, você pode gastar 1 PM. Se fizer isso e acertar o ataque, você causa +2d6 pontos de dano de frio. Mestre: muda a redução de frio para 10 e você recebe uma ação de movimento extra (apenas para se deslocar).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 65,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Corcel do Deserto',
        descricao: 'O corcel do deserto é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você ignora terreno difícil natural.',
          '<b>Veterano:</b> uma vez por rodada, você pode gastar 1 PM para causar 2d6 pontos de dano de impacto em uma criatura adjacente. ',
          '<b>Mestre:</b> seu deslocamento muda para 15m e você recebe +5 em testes para resistir a efeitos de clima, calor e frio (veja Tormenta20, p. 267).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 66,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Dromedário',
        descricao: 'O dromedário é um parceiro montaria (Grande) que fornece os benefícios a seguir',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e ignora terreno difícil natural em desertos e terrenos similares. ',
          '<b>Veterano:</b> você recebe +2 em Percepção e Sobrevivência (este bônus é dobrado em desertos) e, uma vez por rodada, pode gastar 1 PM para causar 1d4+3 pontos de dano de impacto em uma criatura em alcance curto.',
          '<b>Mestre:</b> você recebe uma ação de movimento extra por turno (apenas para se deslocar) e +5 em testes para resistir a efeitos de clima.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 67,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Elefante',
        descricao: 'O elefante é um parceiro montaria (Enorme) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e ignora terreno difícil.',
          '<b>Veterano:</b> uma vez por rodada, você pode sacar um item ou pegar um objeto solto em alcance de 4,5m como ação livre.',
          '<b>Mestre:</b> Você recebe +5 em testes de manobra para atropelar e, uma vez por rodada, se vencer o teste para atropelar uma criatura, pode pagar 1 PM para fazer um ataque contra ela.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 68,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Leão',
        descricao: 'O leão é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e, uma vez por rodada, você recebe +1d6 em rolagens de dano corpo a corpo. ',
          '<b>Veterano:</b> quando faz uma investida, o bônus em rolagens de dano corpo a corpo dobra.',
          '<b>Mestre:</b> seu deslocamento muda para 15m e o bônus em rolagens de dano corpo a corpo muda para +1d10.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 69,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Leão',
        descricao: 'A pantera é um parceiro especial (assassino) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por rodada, quando causa dano com um ataque corpo a corpo, você pode deixar o alvo sangrando. ',
          '<b>Veterano:</b> a CD dos testes para remover um sangramento que você provoca aumenta em +2.',
          '<b>Mestre:</b> os sangramentos que você provoca exigem dois sucessos em testes para serem removidos.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 70,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Pantera',
        descricao: 'A pantera é um parceiro especial (assassino) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por rodada, quando causa dano com um ataque corpo a corpo, você pode deixar o alvo sangrando. ',
          '<b>Veterano:</b> a CD dos testes para remover um sangramento que você provoca aumenta em +2.',
          '<b>Mestre:</b> os sangramentos que você provoca exigem dois sucessos em testes para serem removidos.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 71,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Tigre',
        descricao: 'O tigre é um parceiro montaria (Grande) que fornece os benefícios a seguir. ',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe +5 em Iniciativa.',
          '<b>Veterano:</b> na primeira rodada de combate, você recebe +5 em testes de ataque e rolagens de dano com armas.',
          '<b>Mestre:</b> seu deslocamento muda para 15m e você recebe uma ação de movimento extra por turno (apenas para se deslocar).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 72,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Rinoceronte',
        descricao: 'O rinoceronte é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe +2 em testes de ataque quando faz investidas.',
          '<b>Veterano:</b> você pode usar Carga de Cavalaria. Caso possua esse poder, o bônus no dano em investida aumenta em +1d8.',
          '<b>Mestre:</b> quando faz uma investida você ignora 10 pontos de redução de dano do alvo.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 73,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Rinoceronte Lanoso',
        descricao: 'O rinoceronte lanoso é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe +2 em testes de ataque quando faz investidas.',
          '<b>Veterano:</b>  você pode usar Carga de Cavalaria. Se possui esse poder, o bônus no dano em investida aumenta em +1d8.',
          '<b>Mestre:</b> seu deslocamento não é afetado por gelo ou neve.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 74,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Brontotério',
        descricao: 'O brontotério é um parceiro montaria (Enorme) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe +1 na Defesa.',
          '<b>Veterano:</b> o bônus na Defesa muda para +2 e você recebe uma ação de movimento extra por turno (apenas para se deslocar).',
          '<b>Mestre:</b> você recebe redução de dano 5.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 75,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Tatu-Montanha',
        descricao: 'O tatu-montanha é um parceiro montaria (Enorme) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 9m (normal e de natação) e você recebe uma ação de movimento extra por turno (apenas para se deslocar).',
          '<b>Veterano:</b> você recebe +1 na Defesa e redução de ácido 5.',
          '<b>Mestre:</b> muda o bônus na Defesa para +2 e a redução de ácido para 10.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 76,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Tumarkhân',
        descricao: 'O tumarkhân é um parceiro montaria (Enorme) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e seu limite de carga aumenta em 5 espaços.',
          '<b>Veterano:</b> você recebe uma ação de movimento extra por turno (apenas para se deslocar) e, uma vez por rodada, recebe +1d8 em uma rolagem de dano corpo a corpo. ',
          '<b>Mestre:</b> o bônus no limite de carga muda para 10 espaços e, quando faz um teste de Força ou de perícia baseada em Força, você pode gastar 2 PM para rolar dois dados e usar o melhor resultado.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 77,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Urso Panda',
        descricao: 'O panda é um parceiro montaria (Médio) que fornece os benefícios a seguir. ',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 9m e você recebe +2 em Diplomacia e uma ação de movimento extra por turno (apenas para se deslocar). ',
          '<b>Veterano:</b> você pode usar Rolamento Defensivo. Caso possua esse poder, em vez disso o custo para usá-lo diminui em –1 PM.',
          '<b>Mestre:</b> você pode usar Aparência Inofensiva. Se possuir esse poder, a CD para resistir a ele aumenta em +2.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 78,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Urso Pardo',
        descricao: 'O urso pardo é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e, uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo.',
          '<b>Veterano:</b> uma vez por rodada, quando acerta um ataque corpo a corpo, você pode fazer a manobra agarrar como uma ação livre. Essa manobra não deixa sua mão ocupada, mas você só pode manter um inimigo agarrado por vez.',
          '<b>Mestre:</b> muda o bônus em rolagens de dano corpo a corpo para +1d10.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 79,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Urso das Cavernas',
        descricao: 'O urso das cavernas é um parceiro montaria (Enorme) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe redução de dano 2. ',
          '<b>Veterano:</b> uma vez por rodada, quando acerta um ataque corpo a corpo, você pode fazer a manobra agarrar como uma ação livre. Essa manobra não deixa sua mão ocupada, mas você só pode manter um inimigo agarrado desta forma.',
          '<b>Mestre:</b> muda a redução de dano para 5.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 80,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Warg',
        descricao:
          'O warg é um parceiro montaria (Grande) que não causa penalidades em Furtividade por seu tamanho e fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar).',
          '<b>Veterano:</b> você recebe +2 em Furtividade e pode usar a habilidade Ataque Furtivo +2d6 (se já possui Ataque Furtivo, o bônus de dano se acumula).',
          '<b>Mestre:</b> uma vez por rodada, quando acerta um ataque corpo a corpo, você pode fazer a manobra derrubar como uma ação livre.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 81,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Unicórnio',
        descricao: 'O unicórnio é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b>seu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar).',
          '<b>Veterano:</b> seu deslocamento muda para 15m e você pode lançar Purificação. Se aprender essa magia, seu custo é reduzido em –1 PM.',
          '<b>Mestre:</b> cada dado de seus efeitos mágicos de cura aumenta em um passo (até o máximo de d12). Unicórnios só aceitam ser cavalgados por pessoas que considerem dignas e seus critérios nem sempre são transparentes. O mestre tem a palavra final sobre se um personagem é digno de cavalgar um unicórnio..',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 82,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Unicórnio',
        descricao: 'O unicórnio é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar).',
          '<b>Veterano:</b> seu deslocamento muda para 15m e você pode lançar Purificação. Se aprender essa magia, seu custo é reduzido em –1 PM.',
          '<b>Mestre:</b> cada dado de seus efeitos mágicos de cura aumenta em um passo (até o máximo de d12). Unicórnios só aceitam ser cavalgados por pessoas que considerem dignas e seus critérios nem sempre são transparentes. O mestre tem a palavra final sobre se um personagem é digno de cavalgar um unicórnio.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 83,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Cavalo Esqueleto',
        descricao: 'O cavalo esqueleto é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe uma ação de movimento extra por turno (apenas para se deslocar).',
          '<b>Veterano:</b> você recebe +2 em Intimidação e na CD de efeitos de medo. ',
          '<b>Mestre:</b> você recebe uma segunda ação de movimento extra por turno (novamente, apenas para se deslocar) e o alcance de seus efeitos de medo aumenta em um passo (de curto para médio, de médio para longo).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 84,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Deinonico',
        descricao: 'O deinonico é um parceiro montaria (Média) que fornece os benefícios a seguir. ',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e sua margem de ameaça com armas corpo a corpo aumenta em +1. ',
          '<b>Veterano:</b> você recebe +5 em testes de Atletismo para saltar e uma ação de movimento adicional por turno (apenas para se deslocar).',
          '<b>Mestre:</b> seu deslocamento muda para 15m e o bônus na margem de ameaça aumenta para +2.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 85,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Galhada Macho',
        descricao: 'O galhada macho é um parceiro montaria (Grande) que fornece os benefícios a seguir. ',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe +2 em Sobrevivência.',
          '<b>Veterano:</b> seus ataques corpo a corpo são considerados mágicos e, uma vez por turno, você recebe +1d8 em uma rolagem de dano corpo a corpo (esse bônus é dobrado contra mortos-vivos). ',
          '<b>Mestre:</b> o bônus em rolagens de dano muda para +1d10 e você recebe uma ação de movimento extra por turno (apenas para se deslocar).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 86,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Galhada Fêmea',
        descricao: 'A galhada fêmea é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você pode gastar uma ação padrão e 1 PM para curar 1d8+1 PV. ',
          '<b>Veterano:</b> você também pode gastar uma ação padrão e 3 PM para curar 3d8+3 PV ou remover uma condição de doença, fadiga, paralisia ou veneno que o esteja afetando. ',
          '<b>Mestre:</b> você recebe uma ação de movimento extra por turno (apenas para se deslocar) e pode também gastar uma ação padrão e 5 PM para curar 6d8+6 PV.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 87,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Tuntram',
        descricao: 'O tuntram é um parceiro montaria (Enorme) que fornece os benefícios a seguir. ',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 9m e você recebe +2 em testes de ataque para derrubar e empurrar.',
          '<b>Veterano:</b> você recebe cobertura leve contra ataques à distância e uma ação de movimento extra (apenas para se deslocar).',
          '<b>Mestre:</b> você recebe +2 em testes de ataque para atropelar e, quando faz essa manobra, seu oponente não tem a opção de sair do caminho (mas ele ainda pode resistir com um teste oposto). Quando atropela uma criatura com essa manobra, você pode gastar 1 PM para fazer um ataque extra contra ela.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 88,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Corcel de Comando',
        descricao:
          'O corcel de comando é um parceiro montaria (Grande) que fornece os benefícios a seguir, e que usa Pilotagem no lugar de Cavalgar. ',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você ignora a penalidade por terreno difícil.',
          '<b>Veterano:</b> você pode lançar a magia Campo de Força (apenas o efeito básico). Se aprender essa magia, seu custo diminui em –1 PM.',
          '<b>Mestre:</b> o alcance de suas habilidades baseadas em som (como Músicas de bardo) aumenta em um passo (de curto para médio e de médio para longo).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 89,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Búfalo-de-Guerra',
        descricao: 'O búfalo-de-guerra é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 9m e seu limite de carga aumenta em 5 espaços. Uma vez por rodada, quando faz uma investida montada, você recebe +1d8 em uma rolagem de dano corpo a corpo.',
          '<b>Veterano:</b> seu deslocamento muda para 12m e ignora terreno difícil.',
          '<b>Mestre:</b> o bônus em rolagens de dano corpo a corpo muda para +2d8 e você recebe uma ação de movimento extra por turno (apenas para se deslocar).',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 90,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Platan',
        descricao: 'O platan é um parceiro montaria (Grande) que fornece os benefícios a seguir. ',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para natação 9m e e você recebe uma ação de movimento extra (apenas para se deslocar). ',
          '<b>Veterano:</b> uma vez por rodada, você pode gastar 1 PM para causar 2d6 pontos de dano de impacto em uma criatura em alcance curto.',
          '<b>Mestre:</b> seu deslocamento de natação muda para 15m e você pode também gastar 4 PM para causar 6d6 pontos de dano de impacto em uma criatura em alcance curto.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 91,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Selako',
        descricao: 'O selako é um parceiro montaria (Grande) que fornece os benefícios a seguir. ',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para natação 15m e, uma vez por rodada, você recebe +1d6 em uma rolagem de dano corpo a corpo. ',
          '<b>Veterano:</b> o bônus de dano aumenta para +2d6. ',
          '<b>Mestre:</b> seu deslocamento de natação muda para 18m e, quando você usa o bônus de dano do selako contra uma criatura, ela fica sangrando.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 92,
        id_parceiro_pai: 3, // montaria/besta de carga
        nome: 'Elemental do Veneno',
        descricao: 'O elemental é um parceiro especial (assassino) que fornece os benefícios a seguir.',
        chave: ['Assassino'],
        parceiro_patamar: [
          '<b>Iniciante:</b> a CD para resistir aos seus efeitos de veneno aumenta em +2 e, uma vez por rodada, você pode gastar 1 PM para envenenar uma arma que esteja usando. No próximo ataque que acertar com ela nesta cena, a arma causa perda de 1d12 PV. ',
          '<b>Veterano:</b> você também pode gastar 3 PM para aplicar um veneno que causa perda de 2d12 PV. ',
          '<b>Mestre:</b> seus efeitos de veneno ignoram imunidade a veneno e você também pode gastar 5 PM para aplicar um veneno que causa perda de 3d12 PV.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 93,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Troll Montaria',
        descricao: `<p>Embora trolls sejam predadores ferozes e sanguinários, os finntroll conhecem técnicas secretas para domá-los e transformá-los em montarias.</p>
        <p>Nas raras ocasiões que um cavaleiro finntroll é derrotado e seu troll sobrevive, um personagem treinado em Adestramento pode conquistar a criatura e transformá-la em uma valiosa montaria. Um troll adestrado desta forma é um parceiro montaria Grande que fornece os benefícios a seguir.</p>`,
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e, uma vez por rodada, você recebe +1d8 em uma rolagem de dano corpo a corpo.',
          '<b>Veterano:</b> o bônus em rolagens aumenta para +1d10 e você recebe +2 em testes para agarrar e derrubar',
          '<b>Mestre:</b>  o bônus em rolagens aumenta para +2d8 e o bônus para agarrar e derrubar aumenta para +5.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 94,
        id_parceiro_pai: 8, // montaria/besta de carga
        nome: 'Carcaju',
        descricao: `O carcaju é um parceiro especial (fortão) que fornece os benefícios a seguir. `,
        chave: ['Fortão'],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por rodada você recebe +1d6 em uma rolagem de dano corpo a corpo. Se rolar um 6 nesse dado extra de dano, você pode rolar +1d6 e somar ao resultado uma vez.',
          '<b>Veterano:</b> sua margem de ameaça com armas corpo a corpo aumenta em +1.',
          '<b>Mestre:</b> quando sofre dano, você recebe +2 em testes de ataque e rolagens de dano até o fim de seu próximo turno.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 95,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Mamute',
        descricao: 'O mamute é um parceiro montaria (Enorme) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e ignora terreno difícil.',
          '<b>Veterano:</b> uma vez por rodada, você pode sacar um item ou pegar um objeto solto em alcance de 4,5m como ação livre.',
          '<b>Mestre:</b> Você recebe +5 em testes de manobra para atropelar e, uma vez por rodada, se vencer o teste para atropelar uma criatura, pode pagar 1 PM para fazer um ataque contra ela.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 97,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Urso das Neves',
        descricao: 'O urso das neves é um parceiro montaria (Grande) que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você recebe redução de frio 5.',
          '<b>Veterano:</b>  seu deslocamento muda para 12m (normal e de natação) e a redução de frio aumenta para 10. ',
          '<b>Mestre:</b> a redução de frio aumenta para 20.',
        ],
        referencias: Referencia.AMEACAS,
        pagina: '',
      },
      {
        id: 98,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Pilly',
        descricao: 'Um pilly parceiro fornece os benefícios a seguir',
        chave: [''],
        parceiro_patamar: [
          '<b>Iniciante:</b> reduz o custo de magias divinas de encantamento em -1 PM.',
          '<b>Veterano:</b> como acima, e você ganha deslocamento de voo 9m.',
          '<b>Mestre:</b> como acima, mas muda a redução de custo de magias de encantamento para –2 PM.',
        ],
        referencias: Referencia.DEUSES,
        pagina: '',
      },
      {
        id: 99,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Luminar',
        descricao: 'Um luminar parceiro fornece os benefícios a seguir',
        chave: [''],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por rodada, você pode gastar 1 PM para curar 2d4 PV por luz ou causar 2d4 pontos de dano não letal de luz em uma criatura em alcance curto. ',
          '<b>Veterano:</b> como acima, mas você também pode gastar 2 PM para conceder um bônus de +2 em seus testes de ataque e de resistência, e nos de seus aliados em alcance curto, por 1 rodada. ',
          '<b>Mestre:</b> como acima, mas você pode gastar 3 PM para curar 6d4 PV ou causar 6d4 pontos de dano não letal de luz.',
        ],
        referencias: Referencia.DEUSES,
        pagina: '',
      },
      {
        id: 100,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Pégaso',
        descricao:
          'O pégaso é um parceiro montaria (Grande) que aceita apenas devotos de deuses que possuem paladinos e que fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você recebe +2 em Intuição e seu deslocamento muda para 15m (um pégaso iniciante ainda não consegue voar com um cavaleiro).',
          '<b>Veterano:</b> como acima, mas seu deslocamento muda para voo 15m e você recebe +2 em Vontade. ',
          '<b>Mestre:</b> você recebe uma ação de movimento extra por turno (apenas para se deslocar) e +2 em testes de ataque.',
        ],
        referencias: Referencia.DEUSES,
        pagina: '',
      },
      {
        id: 101,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Pégaso de Khalmyr',
        descricao:
          'O Pégaso de Khalmyr é um parceiro montaria (Grande) mestre que aceita ser montado apenas por personagens que julgue dignos ou que sejam devotos de Khalmyr. Ele fornece os seguintes benefícios: seu deslocamento muda para 18m (voo 36m) e você recebe uma ação de movimento extra por turno (apenas para se deslocar). Além disso, você pode lançar Círculo da Justiça. Caso aprenda essa magia, seu custo diminui em –1 PM.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> você recebe +2 em Intuição e seu deslocamento muda para 15m (um pégaso iniciante ainda não consegue voar com um cavaleiro).',
          '<b>Veterano:</b> como acima, mas seu deslocamento muda para voo 15m e você recebe +2 em Vontade. ',
          '<b>Mestre:</b> você recebe uma ação de movimento extra por turno (apenas para se deslocar) e +2 em testes de ataque.',
        ],
        referencias: Referencia.DEUSES,
        pagina: '',
      },
      {
        id: 102,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Dragonete',
        descricao: 'Um dragonete parceiro fornece os benefícios a seguir.',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> diminuiu o custo de magias de encantamento e ilusão em –1 PM. ',
          '<b>Veterano:</b> aumenta o alcance de magias de encantamento e ilusão em um passo (de curto para médio e de médio para longo).',
          '<b>Mestre:</b> a redução de custo em magias de encantamento e ilusão se torna cumulativa com outras reduções e você fica sempre sob o efeito básico da magia Visão Mística.',
        ],
        referencias: Referencia.DEUSES,
        pagina: '',
      },
      {
        id: 103,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Gamo',
        descricao: 'O gamo é um parceiro montaria (Grande) que fornece os benefícios a seguir. ',
        chave: ['Montaria'],
        parceiro_patamar: [
          '<b>Iniciante:</b> seu deslocamento muda para 12m e você ignora terreno difícil.',
          '<b>Veterano:</b> você ganha deslocamento de voo 12m.',
          '<b>Mestre:</b>  você pode gastar uma ação completa e 10 PM para transportar você e o gamo para o Plano etéreo (como o efeito básico da magia Forma Etérea), com duração sustentada. O efeito acaba se você desmontar do gamo.✨',
        ],
        referencias: Referencia.DEUSES,
        pagina: '',
      },
      {
        id: 104,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Yazzu',
        descricao: 'O yazzu é um parceiro que fornece os benefícios a seguir.',
        chave: [''],
        parceiro_patamar: [
          '<b>Iniciante:</b> você recebe +2 em testes contra manobras de combate e efeitos de movimento.',
          '<b>Veterano:</b> uma vez por rodada, você pode gastar uma ação de movimento e 4 PM para criar uma onda mágica de água em um cubo de 4,5m em alcance curto. Criaturas nessa área sofrem 4d4 pontos de dano de impacto e ficam caídas. ',
          '<b>Mestre:</b> como acima, mas o bônus em testes aumenta para +4 e o dano da onda aumenta para 4d6.',
        ],
        referencias: Referencia.DEUSES,
        pagina: '',
      },
      {
        id: 105,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Jairuan',
        descricao: 'O jairuan é um parceiro que fornece os benefícios a seguir.',
        chave: [''],
        parceiro_patamar: [
          '<b>Iniciante:</b> você pode lançar uma magia de encantamento ou ilusão de 1° círculo (definida pelo jairuan; atributo-chave Carisma). ',
          '<b>Veterano:</b> seu deslocamento muda para 12m (normal e de voo). ',
          '<b>Mestre:</b> seu deslocamento normal e de voo muda para 18m e, quando voa, você pode carregar uma criatura Média ou menor sem penalidades por carga.',
        ],
        referencias: Referencia.DEUSES,
        pagina: '',
      },
      {
        id: 106,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Gizzehi',
        descricao: 'O gizzehi é um parceiro que fornece os benefícios a seguir.',
        chave: [''],
        parceiro_patamar: [
          '<b>Iniciante:</b> seus ataques corpo a corpo deixam o alvo em chamas mágicas. ',
          '<b>Veterano:</b> quando você deixa uma criatura em chamas, o dano dessa condição aumenta para 1d8. ',
          '<b>Mestre:</b> quando você deixa uma criatura em chamas, ela precisa gastar uma ação completa (em vez de uma ação padrão) para tentar apagar o fogo.',
        ],
        referencias: Referencia.DEUSES,
        pagina: '',
      },
      {
        id: 107,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Allaraz',
        descricao: 'O allaraz é um parceiro que fornece os benefícios a seguir.',
        chave: [''],
        parceiro_patamar: [
          '<b>Iniciante:</b> você pode lançar uma magia de ilusão ou evocação de 1º círculo (definida pelo allaraz; atributo-chave Carisma).',
          '<b>Veterano:</b> você pode lançar Campo de Força.',
          '<b>Mestre:</b> uma vez por rodada, você pode gastar 4 PM para curar 5d8+5 PV em uma criatura em alcance curto.',
        ],
        referencias: Referencia.DEUSES,
        pagina: '',
      },
      {
        id: 108,
        id_parceiro_pai: 0, // montaria/besta de carga
        nome: 'Kemooz',
        descricao: 'O kemooz é um parceiro que fornece os benefícios a seguir. ',
        chave: [''],
        parceiro_patamar: [
          '<b>Iniciante:</b> uma vez por rodada, você pode criar um cubo de terra de 1,5m de lado em um espaço desocupado a até 9m. O cubo tem RD 5 e 30 PV e dura até o fim da cena ou até você acumular 4 cubos. ',
          '<b>Veterano:</b> você recebe +2 na Defesa. ',
          '<b>Mestre:</b> você pode lançar Controlar Terra (atributo-chave Carisma).',
        ],
        referencias: Referencia.DEUSES,
        pagina: '',
      },
    ];
  }
}
