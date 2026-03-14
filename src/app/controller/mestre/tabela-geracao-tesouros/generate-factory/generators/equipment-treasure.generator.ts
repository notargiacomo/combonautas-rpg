import { Injectable } from '@angular/core';
import { TreasureGenerator } from './treasure-generator';
import {
  equipamentoArmaduras,
  equipamentoArmas,
  equipamentoEsoterico,
  GeneratedTreasure,
  melhoriasSuperioresArmaduras,
  melhoriasSuperioresArmas,
  melhoriasSuperioresEsotericos,
  melhoriasSuperioresMaterialEspecial,
  tabelaTesouroItens,
  tipoEquipamento,
  TreasureContext,
} from '../model/treasure';

@Injectable({ providedIn: 'root' })
export class EquipmentTreasureGenerator implements TreasureGenerator {
  constructor() {}

  public generate(ctx: TreasureContext): GeneratedTreasure {
    let nivel = String(ctx.level).trim();
    const tabelaItemNivel = tabelaTesouroItens.filter((item: any) => item.nd === Number(nivel));
    const linhaItemNivel: any = tabelaItemNivel.find((item: any) => ctx.random! >= item.min && ctx.random! <= item.max);

    let tesouro: any[] = [];
    let gt: { items: any; return: string; notes: string; report: string };

    this.gerarArmaArmaduraOuEsoterico(tesouro, linhaItemNivel);

    if (linhaItemNivel.valor.includes('2D')) {
      this.gerarArmaArmaduraOuEsoterico(tesouro, linhaItemNivel);
    }

    gt = {
      items: linhaItemNivel,
      return: linhaItemNivel.nome,
      notes: linhaItemNivel.unidade,
      report: this.gerarRelatorio(ctx.random!, linhaItemNivel, tesouro),
    };

    return gt;
  }

  private gerarArmaArmaduraOuEsoterico(tesouro: any[], linhaItemNivel: any) {
    let randomEquipamento = Math.floor(Math.random() * 6) + 1;
    let linhaEquipamento = tipoEquipamento.find((item: any) => randomEquipamento === item.id);

    if (linhaEquipamento!.nome === 'Arma') {
      tesouro.push(this.gerarEquipamento(linhaItemNivel, equipamentoArmas, melhoriasSuperioresArmas, 66, 74));
    } else if (linhaEquipamento!.nome === 'Armadura') {
      tesouro.push(this.gerarEquipamento(linhaItemNivel, equipamentoArmaduras, melhoriasSuperioresArmaduras, 50, 59));
    } else {
      tesouro.push(this.gerarEquipamento(linhaItemNivel, equipamentoEsoterico, melhoriasSuperioresEsotericos, 62, 70));
    }
  }

  private gerarEquipamento(
    linhaItemNivel: any,
    tabelaEquipamento: any,
    tabelaMelhoria: any,
    inicio: number,
    fim: number
  ) {
    let randomEquipamento = Math.floor(Math.random() * 100) + 1;
    let equipamento = tabelaEquipamento.find((item: any) => randomEquipamento === item.id);
    equipamento.melhorias = [];

    if (linhaItemNivel.valor.includes('Superior')) {
      const numero = Number(linhaItemNivel.modificador.match(/\d+/)?.[0] || 0);
      let materialEspecial = false;
      for (let i = 1; i <= numero; i++) {
        let randomMelhoriaSuperior = Math.floor(Math.random() * 100) + 1;
        let melhoria = tabelaMelhoria.find((item: any) => randomMelhoriaSuperior === item.id);

        if (melhoria.nome === 'Material especial' && !materialEspecial) {
          materialEspecial = true;
          let randomMaterialEspecial = Math.floor(Math.random() * 6) + 1;
          melhoria = melhoriasSuperioresMaterialEspecial.find((item: any) => randomMaterialEspecial === item.id);
        } else {
          randomMelhoriaSuperior = this.randomIntervaloBanido(inicio, fim);
          melhoria = tabelaMelhoria.find((item: any) => randomMelhoriaSuperior === item.id);
        }

        equipamento.melhorias.push(melhoria);
      }
    }

    return equipamento;
  }

  randomIntervaloBanido(inicio: number, fim: number) {
    let numero;

    do {
      numero = Math.floor(Math.random() * 100) + 1; // 1 a 100
    } while (numero >= 66 && numero <= 75); // intervalo proibido

    return numero;
  }

  private gerarRelatorio(random: number, linha: any, equipamentos: any): string {
    const linhasHtml = equipamentos
      .map((item: any) => `<li>${item.id} - ${item.nome} ${this.relatorioMelhorias(item)}</li>`)
      .join('');

    let labelEquipamento = linha.valor.includes('2D') ? linha.valor + '(escolha um)' : linha.valor;

    return `
      <p><b>FÓRMULA:</b> ${linha.valor}</p>
      <p><b>RESULTADO D100:</b> ${random}</p>
      <p><b>${labelEquipamento}:</b></p>
      <ul>
          ${linhasHtml}
      </ul>
      `;
  }

  private relatorioMelhorias(item: any) {
    let relatorioMelhoria = item.melhorias.map((p: any) => p.nome).join(', ');
    return relatorioMelhoria ? `(${relatorioMelhoria})` : '';
  }

  gerarIndividual(tipo: string) {
    let random = Math.floor(Math.random() * 100) + 1;
    let linhatabela: any = null;

    if (tipo === 'desconhecido' || tipo == undefined) {
      let randomTipo = Math.floor(Math.random() * 6) + 1;
      tipo =
        randomTipo === 1 || randomTipo === 2 || randomTipo === 3
          ? 'arma'
          : randomTipo === 3 || randomTipo === 4
            ? 'armadura'
            : 'esoterico';
    }

    if (tipo === 'arma') linhatabela = equipamentoArmas.find((item: any) => random === item.id);
    else if (tipo === 'armadura') linhatabela = equipamentoArmaduras.find((item: any) => random === item.id);
    else if (tipo === 'esoterico') linhatabela = equipamentoEsoterico.find((item: any) => random === item.id);

    const detalhe = `
        <div class="row">
            <p><b>RESULTADO D100:</b> ${random}</p>
        </div>
        <div class="row">
            <p><b>Equipamento:</b> ${linhatabela.nome}</p>
        </div>
      <div class="row">
          <p><b>DINHEIRO TOTAL:</b> ${linhatabela?.livro + ', página ' + linhatabela?.pagina}</p>
      </div>`;

    return detalhe;
  }
}
