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
    ];
  }
}
