import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';

import { NgIf } from '@angular/common';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { GeneratedTreasure, tabelaTesouroItens, TreasureContext } from './generate-factory/model/treasure';
import { TreasureService } from './generate-factory/service/treasure.service';
import { Console } from 'console';
import { FractionPipe } from '@app/pipes/fraction.pipe';

import * as htmlToImage from 'html-to-image';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-tabela-geracao-tesouros',
  imports: [
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCard,
    MatButtonModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatCardTitle,
    MatCardContent,
    NgIf,
    FractionPipe,
    MatIcon,
  ],
  templateUrl: './tabela-geracao-tesouros.component.html',
  styleUrl: './tabela-geracao-tesouros.component.scss',
})
export class TabelaGeracaoTesourosComponent {
  formulario!: FormGroup;
  tabelaTesouro: any[] = [];
  tipos: string[] = ['PADRÃO', 'METADE', 'DOBRO'];
  niveis: number[] = [0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  resultado?: GeneratedTreasure[] = [];

  detalhesTesouroDinheiro: string = '';
  detalhesTesouroItens: string = '';

  constructor(
    private fb: FormBuilder,
    private treasureService: TreasureService
  ) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      tipo: [],
      nivel: [],
    });
  }

  gerarTesouro() {
    this.gerarDinheiro();
    this.gerarItem();
  }

  private gerarDinheiro() {
    const contexto: TreasureContext = {
      type: 'money',
      level: this.formulario.get('nivel')?.value,
    };

    let retorno = this.treasureService.generate(contexto);
    this.detalhesTesouroDinheiro! = retorno.report!;

    if (this.formulario.get('tipo')?.value === 'DOBRO') {
      this.detalhesTesouroDinheiro =
        this.detalhesTesouroDinheiro + '<br /><br />' + this.treasureService.generate(contexto).report!;
    }
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
      this.detalhesTesouroItens! = retorno.report!;
    } else {
      this.detalhesTesouroItens! = `
      <label><b>FÓRMULA:</b> ${linhaItemNivel.valor}</label><br />
      <label><b>RESULTADO D100:</b> ${random}</label><br />
      <label><b>ITEM:</b> N/A </label>
      `;
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
        this.detalhesTesouroItens =
          this.detalhesTesouroItens + '<br /><br />' + this.treasureService.generate(contextoDB).report!;
      } else {
        this.detalhesTesouroItens! =
          this.detalhesTesouroItens +
          `<br /><br />
      <label><b>FÓRMULA:</b> ${linhaItemNivelDB.valor}</label><br />
      <label><b>RESULTADO D100:</b> ${randomDB}</label><br />
      <label><b>ITEM:</b> N/A </label>
      `;
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
