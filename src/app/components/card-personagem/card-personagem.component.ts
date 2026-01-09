import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-card-personagem',
  standalone: true,
  imports: [],
  templateUrl: './card-personagem.component.html',
  styleUrls: ['./card-personagem.component.scss'],
})
export class CardPersonagemComponent {
  /* IMAGENS */
  @Input() fundoImg = 'assets/img/ficha/ficha_molde_base.png';
  @Input() topoImg = 'assets/img/ficha/ficha_molde_topo.png';
  @Input() personagemImg = '';
  @Input() tokenImg = '';

  @Input() nome_jogador = '';
  @Input() nome_personagem = '';

  /* CAMPOS SUPERIORES */
  @Input() raca = '';
  @Input() origem = '';
  @Input() classe = 0;
  @Input() devocao = 0;

  /* ATRIBUTOS */
  @Input() forca = 0;
  @Input() destreza = 0;
  @Input() constituicao = 0;
  @Input() inteligencia = 0;
  @Input() sabedoria = 0;
  @Input() carisma = 0;

  /* RECURSOS */
  @Input() pontos_vida = 0;
  @Input() pontos_mana = 0;

  /* METADADOS */
  @Input() defesa = 0;
  @Input() faixa_etaria = 0;
  @Input() idade = 0;
  @Input() tamanho = 0;
  @Input() tipo = 0;
  @Input() pontos_gastos = 0;

  /* TEXTO LIVRE */
  @Input() historia = '';

  @ViewChild('ficha', { static: false })
  fichaRef!: ElementRef<HTMLDivElement>;

  /* ==========================
     MÉTODO ORQUESTRADOR
     ========================== */
  async exportFicha() {
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
    return await htmlToImage.toPng(elemento, {
      pixelRatio: 2,
      backgroundColor: 'transparent',
      cacheBust: true,
    });
  }

  /* ==========================
     PASSO 3
     ========================== */
  private dispararDownload(dataUrl: string) {
    const link = document.createElement('a');
    link.download = 'ficha-personagem.png';
    link.href = dataUrl;
    link.click();
  }
}
