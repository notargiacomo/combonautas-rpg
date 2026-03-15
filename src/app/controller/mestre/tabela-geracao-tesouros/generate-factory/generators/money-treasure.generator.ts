// generators/potion-treasure.generator.ts
import { Injectable } from '@angular/core';
import { TreasureGenerator } from './treasure-generator';
import {
  GeneratedTreasure,
  tabelaDinheiro,
  tabelaRiquezaMaior,
  tabelaRiquezaMedia,
  tabelaRiquezaMenor,
  TreasureContext,
} from '../model/treasure';
import { StringUtils } from '@app/util/string-utils';

@Injectable({ providedIn: 'root' })
export class MoneyTreasureGenerator implements TreasureGenerator {
  constructor() {}

  public generate(ctx: TreasureContext): GeneratedTreasure {
    let random = ctx.random!;
    let nivel = ctx.level;
    let dinheiro: number;

    const tabelaDinheiroNivel = tabelaDinheiro.filter((item: any) => item.nd === nivel);
    const linhaDinheiroNivel: any = tabelaDinheiroNivel.find((item: any) => random! >= item.min && random <= item.max);

    let tesouro: any[] = [];
    tesouro.push(linhaDinheiroNivel);
    let gt: { items: any; return: string; notes: string; report: string };
    let itens = [linhaDinheiroNivel];

    if (linhaDinheiroNivel.unidade!.includes('riqueza')) {
      dinheiro = this.calcularRiqueza(linhaDinheiroNivel.unidade, linhaDinheiroNivel.modificador.length > 0 ? 20 : 0);
      gt = {
        items: itens,
        return: dinheiro.toString(),
        notes: 'T$',
        report: this.gerarRelatorio(random, linhaDinheiroNivel, dinheiro),
      };
    } else {
      let contadorMoedas = this.contadorMoedas(linhaDinheiroNivel);
      dinheiro = ctx.notes?.includes('METADE') ? contadorMoedas / 2 : contadorMoedas;
      gt = {
        items: itens,
        return: dinheiro.toString(),
        notes: linhaDinheiroNivel.unidade,
        report: this.gerarRelatorio(random, linhaDinheiroNivel, dinheiro),
      };
    }

    return gt;
  }

  private gerarRelatorio(random: number, linhaDinheiroNivel: any, dinheiro: number): string {
    return `
      <div class="row">
          <p><b>RESULTADO D100:</b> ${random}</p>
      </div>
      <div class="row">
          <p><b>FÓRMULA:</b> ${linhaDinheiroNivel.dinheiro}</p>
      </div>
      <div class="row">
          <p><b>DINHEIRO TOTAL:</b> ${linhaDinheiroNivel.unidade} ${dinheiro}</p>
      </div>`;
  }

  calcularRiqueza(unidade: string, modificador: number): number {
    let riquezas: any[] = [];
    if (unidade.includes('menor')) riquezas = tabelaRiquezaMenor;
    if (StringUtils.removerAcentos(unidade.toLowerCase()).includes('media')) riquezas = tabelaRiquezaMedia;
    if (unidade.includes('maior')) riquezas = tabelaRiquezaMaior;

    let random = Math.floor(Math.random() * 100) + 1;
    random = random + modificador < 100 ? random + modificador : 100;
    const linhaDinheiroNivel = riquezas.find(
      (item: { min: number; max: number }) => random >= item.min && random <= item.max
    );
    return this.contadorMoedas(linhaDinheiroNivel);
  }

  contadorMoedas(linhaDinheiroNivel: any): number {
    let dinheiro = 0;
    for (let index = 0; index < linhaDinheiroNivel.multiplicador; index++) {
      dinheiro += Number(Math.floor(Math.random() * linhaDinheiroNivel.randomizador) + 1);
    }

    if (linhaDinheiroNivel.parcela) {
      dinheiro += Number(linhaDinheiroNivel.parcela);
    }

    dinheiro = dinheiro * linhaDinheiroNivel.potencializador;
    return dinheiro;
  }

  gerarIndividual(riqueza: string, random: number) {
    let linhatabela: any = null;
    if (riqueza === 'menor')
      linhatabela = tabelaRiquezaMenor.find((item: any) => random >= item.min && random <= item.max);
    else if (riqueza === 'media')
      linhatabela = tabelaRiquezaMedia.find((item: any) => random >= item.min && random <= item.max);
    else if (riqueza === 'maior')
      linhatabela = tabelaRiquezaMaior.find((item: any) => random >= item.min && random <= item.max);

    const valor = this.contadorMoedas(linhatabela);
    const detalheRiqueza = `
      <div class="row">
          <p><b>RESULTADO D100:</b> ${random}</p>
      </div>
      <div class="row">
          <p><b>FÓRMULA:</b> ${linhatabela.valor}</p>
      </div>
      <div class="row">
          <p><b>DINHEIRO TOTAL:</b> T$ ${valor}</p>
      </div>`;

    return detalheRiqueza;
  }
}
