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
    ];
  }
}
