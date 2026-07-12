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

    let tesouroObj = new Tesouro();
    let riqueza = new Riqueza();
    riqueza.valores = [];

    if (linhaDinheiroNivel.unidade!.includes('riqueza')) {
      const numeroriquezas = Number(Math.floor(Math.random() * linhaDinheiroNivel.randomizador) + 1);

      for (let index = 0; index < numeroriquezas; index++) {
        let valorCalculado = this.calcularRiqueza(
          linhaDinheiroNivel.unidade,
          linhaDinheiroNivel.modificador.length > 0 ? 20 : 0
        );
        tesouroObj.valor += valorCalculado;
        let valorRiqueza = new ValorRiqueza();
        valorRiqueza.valor = valorCalculado;
        riqueza.valores.push(valorRiqueza);
      }

      riqueza.quantidade = numeroriquezas;
      tesouroObj.riqueza = riqueza;

      gt = {
        items: itens,
        return: tesouroObj.valor.toString(),
        notes: 'T$',
        report: this.gerarRelatorio(random, linhaDinheiroNivel, tesouroObj),
      };
    } else {
      let contadorMoedas = this.contadorMoedas(linhaDinheiroNivel);
      dinheiro = ctx.notes?.includes('METADE')
        ? contadorMoedas / 2
        : ctx.notes?.includes('DOBRO')
          ? contadorMoedas * 2
          : contadorMoedas;

      tesouroObj.valor = contadorMoedas;

      gt = {
        items: itens,
        return: dinheiro.toString(),
        notes: linhaDinheiroNivel.unidade,
        report: this.gerarRelatorio(random, linhaDinheiroNivel, tesouroObj),
      };
    }

    return gt;
  }

  private gerarRelatorio(random: number, linhaDinheiroNivel: any, tesouroObj: Tesouro): string {
    let retorno: string = `<div class="row">
          <p><b>RESULTADO D100:</b> ${random}</p>
      </div>
      <div class="row">
          <p><b>FÓRMULA:</b> ${linhaDinheiroNivel.dinheiro}</p>
      </div>`;

    if (linhaDinheiroNivel.unidade.includes('riqueza')) {
      if (linhaDinheiroNivel.dinheiro.includes('1d')) {
        retorno =
          retorno +
          `<div class="row">
          <p><b>QTD RIQUEZAS:</b> ${tesouroObj.riqueza.quantidade}</p>
      </div>`;
        for (let index = 0; index < tesouroObj.riqueza.quantidade; index++) {
          retorno =
            retorno +
            `<div class="row">
          <p><b>Riqueza ${index + 1}:</b> T$ ${tesouroObj.riqueza.valores[index].valor}</p>
      </div>`;
        }
      }
    } else {
      retorno =
        retorno +
        `<div class="row">
          <p><b>DINHEIRO TOTAL:</b> ${linhaDinheiroNivel.unidade} ${tesouroObj.valor}</p>
        </div>`;
    }

    return retorno;
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
          <p><b>DINHEIRO TOTAL:</b> T$${valor}</p>
      </div>`;

    return detalheRiqueza;
  }
}

class Tesouro {
  valor!: number;
  unidade!: number;
  riqueza!: Riqueza;
}

class Riqueza {
  quantidade!: number;
  valores!: ValorRiqueza[];
}

class ValorRiqueza {
  valor!: number;
  volume!: string;
}
