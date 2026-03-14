// generators/potion-treasure.generator.ts
import { Injectable } from '@angular/core';
import { TreasureGenerator } from './treasure-generator';
import { GeneratedTreasure, tabelaItensDiversos, tabelaTesouroItens, TreasureContext } from '../model/treasure';

@Injectable({ providedIn: 'root' })
export class MiscellaneousItemsTreasureGenerator implements TreasureGenerator {
  constructor() {}

  public generate(ctx: TreasureContext): GeneratedTreasure {
    let tesouro: any[] = [];
    let gt: { items: any; return: string; notes: string; report: string };

    let randomItemDiverso = Math.floor(Math.random() * 100) + 1;
    let itemDiverso = tabelaItensDiversos.find((item: any) => randomItemDiverso === item.id);
    tesouro.push(itemDiverso);
    gt = {
      items: tesouro,
      return: itemDiverso!.nome,
      notes: '',
      report: this.gerarRelatorio(ctx.random!, itemDiverso),
    };

    return gt;
  }

  private gerarRelatorio(random: number, itemDiverso: any): string {
    return `
      <p><b>RESULTADO D100:</b> ${random}</p>
      <p><b>Item Diverso:</b> ${itemDiverso.id} - ${itemDiverso.nome}</p>
      `;
  }

  gerarIndividual() {
    let random = Math.floor(Math.random() * 100) + 1;
    let linhatabela = tabelaItensDiversos.find((item: any) => random == item.id);

    const detalhe = `
      <div class="row">
          <p><b>RESULTADO D100:</b> ${random}</p>
      </div>
      <div class="row">
          <p><b>FÓRMULA:</b> ${linhatabela?.nome}</p>
      </div>
      <div class="row">
          <p><b>DINHEIRO TOTAL:</b> ${linhatabela?.livro + ', página ' + linhatabela?.pagina}</p>
      </div>`;

    return detalhe;
  }
}
