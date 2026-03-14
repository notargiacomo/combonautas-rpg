import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';

import { FractionPipe } from '@app/pipes/fraction.pipe';
import {
  equipamentoArmaduras,
  equipamentoArmas,
  equipamentoEsoterico,
  GeneratedTreasure,
  melhoriasSuperioresArmaduras,
  melhoriasSuperioresArmas,
  melhoriasSuperioresEsotericos,
  melhoriasSuperioresMaterialEspecial,
  pocoes,
  tabelaItensDiversos,
  tabelaRiquezaMaior,
  tabelaRiquezaMedia,
  tabelaRiquezaMenor,
  tabelaTesouroItens,
  TreasureContext,
} from './generate-factory/model/treasure';
import { TreasureService } from './generate-factory/service/treasure.service';

import { MatIcon } from '@angular/material/icon';
import * as htmlToImage from 'html-to-image';
import { MatInputModule } from '@angular/material/input';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { tabelaDinheiro } from './generate-factory/model/treasure';
import { MoneyTreasureGenerator } from './generate-factory/generators/money-treasure.generator';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MiscellaneousItemsTreasureGenerator } from './generate-factory/generators/miscellaneous-item-treasure.generator';
import { EquipmentTreasureGenerator } from './generate-factory/generators/equipment-treasure.generator';
import { PotionTreasureGenerator } from './generate-factory/generators/potion-treasure.generator';

@Component({
  selector: 'app-tabela-geracao-tesouros',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCard,
    MatButtonModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatCardTitle,
    MatCardContent,
    FractionPipe,
    MatIcon,
    MatTab,
    MatTabGroup,
  ],
  templateUrl: './tabela-geracao-tesouros.component.html',
  styleUrl: './tabela-geracao-tesouros.component.scss',
})
export class TabelaGeracaoTesourosComponent {
  formulario!: FormGroup;
  tabelaTesouro: any[] = [];
  tipos: string[] = ['PADRÃO', 'METADE', 'DOBRO'];
  riquezas: string[] = ['menor', 'media', 'maior'];
  niveis: number[] = [0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  equipamentos: string[] = ['desconhecido', 'arma', 'armadura', 'esoterico'];
  melhorias: string[] = ['arma', 'armadura', 'esoterico'];

  numero_melhorias: string[] = ['Um', 'Dois', 'Três', 'Quatro'];
  resultado?: GeneratedTreasure[] = [];

  detalhesTesouroDinheiro: string[] = [];
  detalhesTesouroItens: string[] = [];
  detalhesRiquezas: string[] = [];
  detalhesItensDiversos: string[] = [];
  detalhesEquipamentos: string[] = [];
  detalhesMelhorias: string[] = [];
  detalhesPocoes: string[] = [];
  detalhesMaterialEspecial: string[] = [];
  tabelaDinheiro = tabelaDinheiro;
  tabelaTesouroItens = tabelaTesouroItens;
  tabelaRiquezaMenor = tabelaRiquezaMenor;
  tabelaRiquezaMedia = tabelaRiquezaMedia;
  tabelaRiquezaMaior = tabelaRiquezaMaior;
  tabelaItensDiversos = tabelaItensDiversos;
  equipamentoArmas = equipamentoArmas;
  equipamentoArmaduras = equipamentoArmaduras;
  equipamentoEsoterico = equipamentoEsoterico;
  melhoriasSuperioresArmas = melhoriasSuperioresArmas;
  melhoriasSuperioresArmaduras = melhoriasSuperioresArmaduras;
  melhoriasSuperioresEsotericos = melhoriasSuperioresEsotericos;
  melhoriasSuperioresMaterialEspecial = melhoriasSuperioresMaterialEspecial;
  pocoes = pocoes;

  isMobile = false;

  constructor(
    private fb: FormBuilder,
    private treasureService: TreasureService,
    private moneyTreasure: MoneyTreasureGenerator,
    private miscellaneousItemsTreasureGenerator: MiscellaneousItemsTreasureGenerator,
    private equipmentTreasureGenerator: EquipmentTreasureGenerator,
    private potionTreasureGenerator: PotionTreasureGenerator,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      tipo: [],
      nivel: [],
      dados: [1],
      percentual: [0],
      riqueza: [],
      dadosrq: [1],
      dadosid: [1],
      dadoseq: [1],
      equipamento: [],
      numero_melhorias: [0],
      dadosp: [1],
      dadosm: [1],
      melhoria: [],
      dadosme: [1],
    });
  }

  gerarTesouro() {
    this.detalhesTesouroDinheiro = [];
    this.detalhesTesouroItens = [];

    const dados = this.formulario.get('dados')?.value;

    for (let i = 1; i <= dados; i++) {
      this.gerarDinheiro();
      this.gerarItem();
    }
  }

  gerarRiqueza() {
    const riqueza = this.formulario.get('riqueza')?.value;
    const dados = this.formulario.get('dadosrq')?.value;

    this.detalhesRiquezas = [];

    for (let i = 1; i <= dados; i++) {
      this.detalhesRiquezas.push(this.moneyTreasure.gerarIndividual(riqueza));
    }
  }

  gerarItemDiverso() {
    const dados = this.formulario.get('dadosid')?.value;

    this.detalhesItensDiversos = [];

    for (let i = 1; i <= dados; i++) {
      this.detalhesItensDiversos.push(this.miscellaneousItemsTreasureGenerator.gerarIndividual());
    }
  }

  gerarEquipamento() {
    const dados = this.formulario.get('dadoseq')?.value;
    const equipamento = this.formulario.get('equipamento')?.value;

    this.detalhesEquipamentos = [];

    for (let i = 1; i <= dados; i++) {
      this.detalhesEquipamentos.push(this.equipmentTreasureGenerator.gerarIndividual(equipamento));
    }
  }

  gerarMelhoria() {
    const dados = this.formulario.get('dadosm')?.value;
    const equipamento = this.formulario.get('melhoria')?.value;

    this.detalhesMelhorias = [];

    for (let i = 1; i <= dados; i++) {
      this.detalhesMelhorias.push(this.equipmentTreasureGenerator.gerarIndividualMelhorias(equipamento));
    }
  }

  gerarPocoes() {
    const dados = this.formulario.get('dadosp')?.value;

    this.detalhesPocoes = [];

    for (let i = 1; i <= dados; i++) {
      this.detalhesPocoes.push(this.potionTreasureGenerator.gerarIndividual());
    }
  }

  private gerarDinheiro() {
    const contexto: TreasureContext = {
      type: 'money',
      level: this.formulario.get('nivel')?.value,
    };

    let retorno = this.treasureService.generate(contexto);
    this.detalhesTesouroDinheiro.push(retorno.report!);

    if (this.formulario.get('tipo')?.value === 'DOBRO') {
      this.detalhesTesouroDinheiro.push(
        this.detalhesTesouroDinheiro + '<br /><br />' + this.treasureService.generate(contexto).report!
      );
    }
  }

  gerarMaterialEspecial() {
    const dados = this.formulario.get('dadosme')?.value;

    this.detalhesMaterialEspecial = [];

    for (let i = 1; i <= dados; i++) {
      this.detalhesMaterialEspecial.push(this.equipmentTreasureGenerator.gerarIndividualMaterialEspecial());
    }
  }

  get dadosRange() {
    const n = this.formulario.get('dados')?.value || 0;
    return Array.from({ length: n }, (_, i) => i);
  }

  get dadosRangeRq() {
    const n = this.formulario.get('dadosrq')?.value || 0;
    return Array.from({ length: n }, (_, i) => i);
  }

  get dadosRangeSp() {
    const n = this.formulario.get('dadosp')?.value || 0;
    return Array.from({ length: n }, (_, i) => i);
  }

  get dadosRangeM() {
    const n = this.formulario.get('dadosm')?.value || 0;
    return Array.from({ length: n }, (_, i) => i);
  }

  get dadosRangeMe() {
    const n = this.formulario.get('dadosme')?.value || 0;
    return Array.from({ length: n }, (_, i) => i);
  }

  gerarItem() {
    let random = Math.floor(Math.random() * 100) + 1;
    let nivel = String(this.formulario.get('nivel')?.value).trim();
    const tabelaItemNivel = tabelaTesouroItens.filter((item: any) => item.nd === Number(nivel));
    const linhaItemNivel: any = tabelaItemNivel.find((item: any) => random >= item.min && random <= item.max);

    const contexto: TreasureContext = {
      type: linhaItemNivel.tipo,
      level: this.formulario.get('nivel')?.value,
      notes: linhaItemNivel.modificador,
      random: random,
    };

    if (linhaItemNivel.valor !== '—') {
      let retorno = this.treasureService.generate(contexto);
      this.detalhesTesouroItens.push(retorno.report!);
    } else {
      this.detalhesTesouroItens.push(`
      <p><b>FÓRMULA:</b> ${linhaItemNivel.valor}</p>
      <p><b>RESULTADO D100:</b>${random}</p>
      <p><b>ITEM:</b> N/A</p>
      `);
    }

    if (this.formulario.get('tipo')?.value === 'DOBRO') {
      let randomDB = Math.floor(Math.random() * 100) + 1;
      let nivelDB = String(this.formulario.get('nivel')?.value).trim();
      const tabelaItemNivelDB = tabelaTesouroItens.filter((item: any) => item.nd === Number(nivelDB));
      const linhaItemNivelDB: any = tabelaItemNivelDB.find((item: any) => randomDB >= item.min && randomDB <= item.max);

      const contextoDB: TreasureContext = {
        type: linhaItemNivelDB.tipo,
        level: this.formulario.get('nivel')?.value,
        notes: linhaItemNivelDB.modificador,
        random: randomDB,
      };

      if (linhaItemNivelDB.valor !== '—') {
        this.detalhesTesouroItens.push('<br /><br />' + this.treasureService.generate(contextoDB).report!);
      } else {
        this.detalhesTesouroItens.push(`
      <p><b>FÓRMULA:</b> ${linhaItemNivelDB.valor}</p>
      <p><b>RESULTADO D100:</b> ${randomDB}</p>
      <p><b>ITEM:</b> N/A</p>
      `);
      }
    }
  }

  @ViewChild('tesouro', { static: false })
  fichaRef!: ElementRef<HTMLDivElement>;

  /* ==========================
       MÉTODO ORQUESTRADOR
       ========================== */
  async downloadTesouro() {
    const elemento = this.pegarElementoDaFicha();
    const imagem = await this.converterElementoEmImagem(elemento);
    this.dispararDownload(imagem);
  }

  /* ==========================
       PASSO 1
       ========================== */
  private pegarElementoDaFicha(): HTMLDivElement {
    return this.fichaRef.nativeElement;
  }

  /* ==========================
       PASSO 2
       ========================== */
  private async converterElementoEmImagem(elemento: HTMLDivElement): Promise<string> {
    const width = elemento.scrollWidth;
    const height = elemento.scrollHeight;

    return await htmlToImage.toPng(elemento, {
      width,
      height,
      pixelRatio: 2,
      backgroundColor: 'transparent',
      cacheBust: true,
      style: {
        transform: 'scale(1)',
        transformOrigin: 'top left',
        width: `${width}px`,
        height: `${height}px`,
      },
    });
  }

  /* ==========================
       PASSO 3
       ========================== */
  private dispararDownload(dataUrl: string) {
    const link = document.createElement('a');
    link.download = 'tesouro.png';
    link.href = dataUrl;
    link.click();
  }
}
