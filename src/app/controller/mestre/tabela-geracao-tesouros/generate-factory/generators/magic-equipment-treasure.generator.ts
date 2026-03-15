import { Injectable } from '@angular/core';
import {
  acessorioMaior,
  acessorioMedio,
  acessorioMenor,
  armaduraMagica,
  armaMagica,
  encantoArma,
  encantoArmadura,
  encantoEsoterico,
  equipamentoMagico,
  esotericoMagico,
  GeneratedTreasure,
  tabelaTesouroItens,
  TreasureContext,
} from '../model/treasure';
import { TreasureGenerator } from './treasure-generator';

@Injectable({ providedIn: 'root' })
export class MagicEquipmentTreasureGenerator implements TreasureGenerator {
  constructor() {}

  public generate(ctx: TreasureContext): GeneratedTreasure {
    let nivel = String(ctx.level).trim();
    const tabelaItemNivel = tabelaTesouroItens.filter((item: any) => item.nd === Number(nivel));
    const linhaItemNivel: any = tabelaItemNivel.find((item: any) => ctx.random! >= item.min && ctx.random! <= item.max);

    let tesouro: any[] = [];
    let gt: { items: any; return: string; notes: string; report: string };

    this.gerarArmaArmaduraEsotericoOuAcessorio(tesouro, linhaItemNivel);

    if (linhaItemNivel.valor.includes('2D')) {
      this.gerarArmaArmaduraEsotericoOuAcessorio(tesouro, linhaItemNivel);
    }

    gt = {
      items: linhaItemNivel,
      return: linhaItemNivel.nome,
      notes: linhaItemNivel.unidade,
      report: this.gerarRelatorio(ctx.random!, linhaItemNivel, tesouro),
    };

    return gt;
  }

  private gerarArmaArmaduraEsotericoOuAcessorio(tesouro: any[], linhaItemNivel: any) {
    let randomItemMagico = Math.floor(Math.random() * 6) + 1;
    let linhaItemMagico = equipamentoMagico.find((item: any) => randomItemMagico === item.id);

    if (linhaItemMagico!.nome === 'arma') {
      tesouro.push(this.gerarItemMagico(linhaItemNivel.modificador, armaMagica, encantoArma));
    } else if (linhaItemMagico!.nome === 'armadura') {
      tesouro.push(this.gerarItemMagico(linhaItemNivel.modificador, armaduraMagica, encantoArmadura));
    } else if (linhaItemMagico!.nome === 'esoterico') {
      tesouro.push(this.gerarItemMagico(linhaItemNivel.modificador, esotericoMagico, encantoEsoterico));
    } else {
      let randomAcessorioMagico = Math.floor(Math.random() * 100) + 1;
      if (linhaItemNivel.valor.includes('menor')) {
        tesouro.push(acessorioMenor.find((item: any) => randomAcessorioMagico === item.id));
      } else if (linhaItemNivel.valor.includes('médio')) {
        tesouro.push(acessorioMedio.find((item: any) => randomAcessorioMagico === item.id));
      } else if (linhaItemNivel.valor.includes('maior')) {
        tesouro.push(acessorioMaior.find((item: any) => randomAcessorioMagico === item.id));
      }
    }
  }

  private gerarItemMagico(modificador: string, tabela: any, tabelaEspecifica: any) {
    let randomItemMagico = Math.floor(Math.random() * 100) + 1;
    let linhaItemMagico = tabela.find((item: any) => randomItemMagico === item.id);
    if (!linhaItemMagico.encantos) {
      linhaItemMagico.encantos = [];
    }

    const numero = modificador.includes('menor') ? 1 : modificador.includes('maior') ? 3 : 2;

    for (let i = 1; i <= numero; i++) {
      let randomEncanto = Math.floor(Math.random() * 100) + 1;
      let encanto = tabelaEspecifica.find((item: any) => randomEncanto === item.id);
      linhaItemMagico.encantos.push(encanto);
    }

    return linhaItemMagico;
  }

  private gerarRelatorio(random: number, linha: any, linhaItem: any): string {
    const linhasHtml = linhaItem
      .map((item: any) => `<li>${item.id} - ${item.nome} ${item.encantos ? this.relatorioEncantos(item) : ''}</li>`)
      .join('');

    let labelEquipamento = linha.valor.includes('2D') ? linha.valor + ' (escolha um)' : linha.valor;

    return `
    <p><b>FÓRMULA:</b> ${linha.valor}</p>
      <p><b>RESULTADO D100:</b> ${random}</p>
      <p><b>${labelEquipamento}:</b></p>
      <ul>
          ${linhasHtml}
      </ul>
      `;
  }

  private relatorioEncantos(item: any) {
    let relatorioEncantos = item.encantos.map((p: any) => p.nome).join(', ');
    return `(${relatorioEncantos})`;
  }

  gerarIndividualEncantos(tipo: string) {
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

    if (tipo === 'arma') linhatabela = encantoArma.find((item: any) => random === item.id);
    else if (tipo === 'armadura') linhatabela = encantoArmadura.find((item: any) => random === item.id);
    else if (tipo === 'esoterico') linhatabela = encantoEsoterico.find((item: any) => random === item.id);

    const detalhe = `
          <div class="row">
              <p><b>RESULTADO D100:</b> ${random}</p>
          </div>
          <div class="row">
              <p><b>ENCANTO:</b> ${linhatabela.nome}</p>
          </div>
        <div class="row">
            <p><b>REFERÊNCIA:</b> ${linhatabela?.livro + ', página ' + linhatabela?.pagina}</p>
        </div>`;

    return detalhe;
  }

  gerarIndividualItensEspecifico(tipo: string) {
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

    if (tipo === 'arma') linhatabela = armaMagica.find((item: any) => random === item.id);
    else if (tipo === 'armadura') linhatabela = armaduraMagica.find((item: any) => random === item.id);
    else if (tipo === 'esoterico') linhatabela = esotericoMagico.find((item: any) => random === item.id);

    const detalhe = `
          <div class="row">
              <p><b>RESULTADO D100:</b> ${random}</p>
          </div>
          <div class="row">
              <p><b>EQUIPAMENTO MÁGICO ESPECÍFICO:</b> ${linhatabela.nome}</p>
          </div>
        <div class="row">
            <p><b>REFERÊNCIA:</b> ${linhatabela?.livro + ', página ' + linhatabela?.pagina}</p>
        </div>`;

    return detalhe;
  }

  gerarIndividualAcessorio(nivel: string) {
    let random = Math.floor(Math.random() * 100) + 1;
    let linhatabela: any = null;

    if (nivel === 'menor') linhatabela = acessorioMenor.find((item: any) => random === item.id);
    else if (nivel === 'medio') linhatabela = acessorioMedio.find((item: any) => random === item.id);
    else if (nivel === 'maior') linhatabela = acessorioMaior.find((item: any) => random === item.id);

    const detalhe = `
          <div class="row">
              <p><b>RESULTADO D100:</b> ${random}</p>
          </div>
          <div class="row">
              <p><b>ACESSORIO MÁGICO:</b> ${linhatabela.nome}</p>
          </div>
        <div class="row">
            <p><b>REFERÊNCIA:</b> ${linhatabela?.livro + ', página ' + linhatabela?.pagina}</p>
        </div>`;

    return detalhe;
  }
}
