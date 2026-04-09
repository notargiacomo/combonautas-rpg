import { Injectable } from '@angular/core';
import { Referencia } from '@app/enum/referencia.enum';

import { Familiar } from '@app/model/familiar';

@Injectable({
  providedIn: 'root',
})
export class FamiliarData {
  private familiar: Familiar[] = [];

  get(): any[] {
    return this.familiar;
  }

  constructor() {
    this.familiar = [
      {
        id: 1,
        nome: 'Borboleta',
        beneficio: 'A CD dos testes de Vontade para resistir a suas magias aumenta em +1.',
        referencias: Referencia.BASICO,
      },
      {
        id: 2,
        nome: 'Cobra',
        beneficio: 'A CD dos testes de Fortitude para resistir a suas magias aumenta em +1.',
        referencias: Referencia.BASICO,
      },
      {
        id: 3,
        nome: 'Coruja',
        beneficio:
          'Quando lança uma magia com alcance de toque, você pode pagar 1 PM para aumentar seu alcance para curto.',
        referencias: Referencia.BASICO,
      },
      {
        id: 4,
        nome: 'Falcão',
        beneficio:
          'Quando faz um teste de Misticismo ou Vontade, você pode pagar 1 PM para rolar dois dados e usar o melhor resultado.',
        referencias: Referencia.BASICO,
      },
      {
        id: 5,
        nome: 'Gato',
        beneficio: 'Você recebe visão no escuro e +2 em Furtividade.',
        referencias: Referencia.BASICO,
      },
      {
        id: 6,
        nome: 'Lagarto',
        beneficio: 'A CD dos testes de Reflexos para resistir a suas magias aumenta em +1.',
        referencias: Referencia.BASICO,
      },
      {
        id: 7,
        nome: 'Morcego',
        beneficio: 'Você adquire percepção às cegas em alcance curto.',
        referencias: Referencia.BASICO,
      },
      {
        id: 8,
        nome: 'Rato',
        beneficio: 'Você pode usar seu atributo-chave em Fortitude, no lugar de Constituição.',
        referencias: Referencia.BASICO,
      },
      {
        id: 9,
        nome: 'Sapo',
        beneficio: 'Você soma seu atributo-chave ao seu total de pontos de vida (cumulativo).',
        referencias: Referencia.BASICO,
      },
      {
        id: 10,
        nome: 'Dragão',
        beneficio:
          'Dragões filhotes de qualquer tipo podem ser invocados como familiares. Entretanto, isso exige obter um ovo de dragão. (Dragões filhotes são muito bestiais, e transformar um filhote já chocado em familiar é quase impossível). Se tiver um dragão filhote como familiar, suas magias que causam dano do mesmo tipo que o sopro do dragão têm a CD aumentada em +2 e custam –1 PM (cumulativo com outras reduções)',
        referencias: Referencia.BASICO,
      },
    ];
  }
}
