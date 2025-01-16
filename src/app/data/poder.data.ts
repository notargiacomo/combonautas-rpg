import { Injectable } from '@angular/core';

import { Poder } from '../model/poder';
import { TipoPoder } from '../enum/tipopoder.enum';

@Injectable({
  providedIn: 'root',
})
export class PoderData {
  private poderes: Poder[] = [];

  getPoderes(): any[] {
    return this.poderes;
  }

  constructor() {
    this.poderes = [
      {
        id: 1,
        nome: 'Acuidade com Arma',
        descricao: 'Quando usa uma arma corpo a corpo leve ou uma arma de arremesso, você pode usar sua Destreza em vez de Força nos testes de ataque e rolagens de dano.',
        prerequisito: 'Pré-requisito: Des 1.',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 2,
        nome: 'Estilo de Duas Armas',
        descricao: 'Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Se possuir Ambidestria, em vez disso não sofre penalidade para usá-lo.',
        prerequisito: 'Pré-requisitos: Des 2, treinado em Luta.',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 3,
        ids_poder_pai: [2],
        nome: 'Arma Secundária Grande',
        descricao: 'Você pode empunhar duas armas de uma mão com o poder Estilo de Duas Armas.',
        prerequisito: 'Pré-requisito: Estilo de Duas Armas.',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 4,
        nome: 'Estilo de Arremesso',
        descricao: 'Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas. Se também possuir o poder Saque Rápido, também recebe +2 nos testes de ataque com essas armas.',
        prerequisito: 'Pré-requisito: treinado em Pontaria.',
        tipo: TipoPoder.COMBATE
      },
      {
        id: 5,
        ids_poder_pai: [4],
        nome: 'Arremesso Potente',
        descricao: 'Quando usa uma arma de arremesso, você pode usar sua Força em vez de Destreza nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo com armas de arremesso.',
        prerequisito: 'Pré-requisitos: For 1, Estilo de Arremesso.',
        tipo: TipoPoder.COMBATE
      }
    ];
  }
}
