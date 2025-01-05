import { Injectable } from '@angular/core';
import { Raca } from '../model/raca';

import {
  CARISMA,
  Construtor,
  Espirito as Espirito,
  GRANDE,
  Humanoide,
  MEDIO,
  MINUSCULO,
  Monstro,
  Morto_Vivo,
  PEQUENO,
} from '../model/constantes';
import { Sentido } from '../enum/sentido.enum';
import { Deslocamento } from '../enum/deslocamento.enum';
import { Referencia } from '../enum/referencia.enum';
import { Origem } from '../model/origem';

@Injectable({
  providedIn: 'root',
})
export class OrigemData {
  private origens: Origem[] = [];

  getOrigens(): any[] {
    return this.origens;
  }

  constructor() {
    this.origens = [
      // RAÇAS BASE DO referencia BÁSICO
      {
        id: 1,
        nome: 'ACÓLITO',
        regiao: 'Geral',
        descricao: `
        <p>Neste mundo agraciado com tantos deuses e igrejas, muitos ingressam cedo em alguma ordem religiosa — o que, dependendo de quem é seu deus padroeiro, pode ser motivo de admiração ou repulsa. Talvez você tenha ouvido o chamado da fé, seguiu a tradição espiritual de sua família, ou apenas foi aban- donado quando pequeno às portas de um templo ou mosteiro. Tenha ou não se tornado um devoto, suas lembranças são carregadas de orações, evangelhos e outros ensinamentos.</p>
        <p><b>Itens.</b> Símbolo sagrado, traje de sacerdote.</p>
        <p><b>Benefícios.</b> Cura, Religião, Vontade (perícias); Medicina, Membro da Igreja, Vontade de Ferro (poderes).</p>
        <h4>Membro da Igreja</h4
        <p>Você consegue hospedagem confortável e informação em qualquer templo de sua divindade, para você e seus aliados.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'85'
      },
      {
        id: 1,
        nome: 'AMIGO DOS ANIMAIS',
        regiao: 'Geral',
        descricao: `
        <p>Você pode ter sido cavalariço no estábulo de um castelo, criador de gado em uma fazenda, ginete de Namalkah ou mesmo tratador em um zoológico ou circo — em Arton, existem espetáculos circenses com animais em jaulas, que talvez você tenha desejado libertar. Ou então nada disso: desde criança você tem facilidade em lidar com animais, sempre conversou com eles, sentiu ser capaz de compreendê-los. Em certos lugares ou tribos, alguma montaria especial seria destinada a você.</p>
        <p><b>Itens.</b> Cão de caça, cavalo, pônei ou trobo (escolha um).</p>
        <p><b>Benefícios.</b> Adestramento, Cavalgar (perícias); Amigo Especial (poder).</p>
        <h4>Amigo Especial</h4
        <p>Você recebe +5 em testes de Adestramento com animais. Além disso, possui um animal de estimação que o auxilia e o acompanha em suas aventuras. Em termos de jogo, é um parceiro que fornece +2 em uma perícia a sua escolha (exceto Luta ou Pontaria e aprovada pelo mestre) e não conta em seu limite de parceiros.</p>`,
        referencias:Referencia.BASICO ,
        paginas:'85'
      },
    ];
  }
}
