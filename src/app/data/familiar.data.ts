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
        referencias: Referencia.AMEACAS,
      },
      {
        id: 11,
        nome: 'Aquin’ne',
        beneficio:
          'Um aquin’ne familiar concede deslocamento de natação 9m e permite lançar magias e respirar debaixo d’água.',
        referencias: Referencia.AMEACAS,
      },
      {
        id: 12,
        nome: 'T’Peel',
        beneficio: 'Um t’peel familiar pode carregar 2 espaços de itens e permite que você lance Queda Suave.',
        referencias: Referencia.AMEACAS,
      },
      {
        id: 13,
        nome: 'Pakk',
        beneficio:
          'Um pakk familiar permite que você lance Explosão de Chamas. Caso aprenda novamente essa magia, seu custo diminui em –1 PM.',
        referencias: Referencia.AMEACAS,
      },
      {
        id: 14,
        nome: 'Terrier',
        beneficio: 'Um terrier familiar concede redução de dano 2/impacto.',
        referencias: Referencia.AMEACAS,
      },
      {
        id: 15,
        nome: 'Estirge',
        beneficio:
          'Um estirge pode ser invocado como familiar, mas isso requer uma ova de estirge. Um estirge familiar permite que você receba 1 PV temporário cumulativo (até o limite de seu nível) sempre que causa dano a uma criatura viva com uma magia.',
        referencias: Referencia.AMEACAS,
      },
      {
        id: 16,
        nome: 'Chibi-Kabuto',
        beneficio: 'Um chibi-kabuto familiar aumenta em +1 o bônus na Defesa que você recebe por suas magias.',
        referencias: Referencia.AMEACAS,
      },
      {
        id: 17,
        nome: 'Homúnculo',
        beneficio:
          ' O homúnculo fornece +1 PM para gastar em aprimoramentos sempre que você lança uma magia de transmutação ou veneno.',
        referencias: Referencia.AMEACAS,
      },
      {
        id: 18,
        nome: 'Homúnculo',
        beneficio:
          'O homúnculo fornece +1 PM para gastar em aprimoramentos sempre que você lança uma magia de transmutação ou veneno.',
        referencias: Referencia.AMEACAS,
      },
      {
        id: 19,
        nome: 'Homúnculo',
        beneficio:
          'Um tentacute familiar pode ser usado, uma vez por rodada, para sacar ou guardar um item, ou para pegar um item solto Pequeno ou menor (1 espaço ou menos) em alcance curto e que ele consiga alcançar.',
        referencias: Referencia.AMEACAS,
      },
      {
        id: 20,
        nome: 'Asa-Assassina',
        beneficio:
          'Uma asa-assassina permite que você gaste 1 PM quando causa dano de corte ou perfuração a uma criatura para deixá-la sangrando.',
        referencias: Referencia.AMEACAS,
      },
      {
        id: 21,
        nome: 'Stagh',
        beneficio: 'Um stagh concede +1 na CD de suas magias de frio',
        referencias: Referencia.AMEACAS,
      },
      {
        id: 22,
        nome: 'Diabrete',
        beneficio:
          'Um diabrete fornece +1 PM para gastar em aprimoramentos sempre que você lança uma magia de ilusão ou veneno',
        referencias: Referencia.AMEACAS,
      },
    ];
  }
}
