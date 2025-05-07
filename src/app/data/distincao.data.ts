import { Injectable } from '@angular/core';

import { Referencia } from '../enum/referencia.enum';
import { Proficiencia } from '../enum/proficiencia.enum';
import { Distincao } from '../model/distincao';

@Injectable({
  providedIn: 'root',
})
export class DistincaoData {
  private distincoes: Distincao[] = [];

  get(): any[] {
    return this.distincoes;
  }

  constructor() {
    this.distincoes = [
      {
        id: 1,
        nome: `Aeronauta Goblin`,
        nome_arquivo_descricao: `distincao_aeronauta_goblins_descricao`,
        nome_arquivo_admissao: `distincao_aeronauta_goblins_admissao`,
        nome_arquivo_informacoes: `distincao_aeronauta_goblins_informacoes`,
        marca_distincao: `
        <h4>Marca da Distinção</h4>
        <h5>Combate Aéreo</h5>
        <p><i><b>O aeronauta goblin sabe se virar contra inimigos nas alturas.</b></i></p>
        <p>Você recebe uma ação de movimento extra por rodada, que só pode ser usada para pilotar sua aeronave, e não sofre penalidades para atacar à distância ou lançar magias por estar a bordo de uma aeronave.</p>
        `,
        ha_informacoes_adicionais: true,
        imagem: 'assets/img/distincao_aeronauta_goblin.png',
        referencias: Referencia.HEROIS,
        paginas: '106, 107 e 108'
      }
    ];
  }
}
