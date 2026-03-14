// generators/potion-treasure.generator.ts
import { Injectable } from '@angular/core';
import { GeneratedTreasure, pocoes, tabelaTesouroItens, TreasureContext } from '../model/treasure';
import { TreasureGenerator } from './treasure-generator';

@Injectable({ providedIn: 'root' })
export class PotionTreasureGenerator implements TreasureGenerator {
  constructor() {}

  generate(ctx: TreasureContext): GeneratedTreasure {
    let nivel = String(ctx.level).trim();
    const tabelaItemNivel = tabelaTesouroItens.filter((item: any) => item.nd === Number(nivel));
    const linhaItemNivel: any = tabelaItemNivel.find((item: any) => ctx.random! >= item.min && ctx.random! <= item.max);

    let tesouro: any[] = [];
    let gt: { items: any; return: string; notes: string; report: string };

    let iteracoes: number = 1;
    const indiceRandom = linhaItemNivel.modificador.indexOf('d');

    if (indiceRandom !== -1 && indiceRandom + 1 < linhaItemNivel.modificador.length) {
      const proximoCaractere = linhaItemNivel.modificador[indiceRandom + 1];
      iteracoes = Number(proximoCaractere);
    }

    let randomQtdPocoes = Math.floor(Math.random() * iteracoes) + 1;
    const indiceSoma = linhaItemNivel.modificador.indexOf('+');
    let soma: number = 0;

    if (indiceSoma !== -1 && indiceSoma + 1 < linhaItemNivel.modificador.length) {
      const proximoCaractere = linhaItemNivel.modificador[indiceSoma + 1];
      soma = Number(proximoCaractere);
    }

    iteracoes = randomQtdPocoes + soma > 0 ? randomQtdPocoes + soma : 1;

    for (let i = 1; i <= iteracoes; i++) {
      let randomPocoes = Math.floor(Math.random() * 120) + 1;

      if (linhaItemNivel.modificador.includes('+%')) {
        randomPocoes = randomPocoes + 20 <= 120 ? randomPocoes + 20 : 120;
      }

      tesouro.push(pocoes.find((item: any) => randomPocoes === item.id));
    }

    gt = {
      items: tesouro,
      return: linhaItemNivel.nome,
      notes: linhaItemNivel.unidade,
      report: this.gerarRelatorio(ctx.random!, linhaItemNivel, tesouro),
    };

    return gt;
  }

  private gerarRelatorio(random: number, linha: any, pocoes: any): string {
    const linhasHtml = pocoes.map((item: any) => `<li>${item.id} - ${item.nome}</li>`).join('');

    return `
    <p><b>FÓRMULA:</b> ${linha.valor}</p>
    <p><b>RESULTADO D100:</b> ${random}</p>
      <b>${linha.valor}:</b>
      <ul>
          ${linhasHtml}
      </ul>
      `;
  }

  gerarIndividual() {
    let random = Math.floor(Math.random() * 120) + 1;
    let linhatabela: any = null;

    linhatabela = pocoes.find((item: any) => random === item.id);

    const detalhe = `
          <div class="row">
              <p><b>RESULTADO D100:</b> ${random}</p>
          </div>
          <div class="row">
              <p><b>POÇÃO:</b> ${linhatabela.nome}</p>
          </div>
        <div class="row">
            <p><b>DINHEIRO TOTAL:</b> ${linhatabela?.livro + ', página ' + linhatabela?.pagina}</p>
        </div>`;

    return detalhe;
  }
}
