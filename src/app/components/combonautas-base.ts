import { TipoItem } from '@app/enum/tipo.item.enum';
import * as htmlToImage from 'html-to-image';

export abstract class CombonautasBase {
  async downloadComoImagem(elemento: HTMLDivElement) {
    const imagem = await this.converterElementoEmImagem(elemento);
    this.dispararDownload(imagem);
  }

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

  private dispararDownload(dataUrl: string) {
    const link = document.createElement('a');
    link.download = 'tesouro.png';
    link.href = dataUrl;
    link.click();
  }

  public async copiarComoImagem(elemento: HTMLDivElement): Promise<void> {
    const width = elemento.scrollWidth;
    const height = elemento.scrollHeight;

    const blob = await htmlToImage.toBlob(elemento, {
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

    if (!blob) {
      throw new Error('Não foi possível gerar a imagem.');
    }

    await navigator.clipboard.write([
      new ClipboardItem({
        'image/png': blob,
      }),
    ]);
  }

  getTipoItemLabel(tipo: any): string {
    // 1) tratamento rápido de nulos/vazios
    if (tipo === null || tipo === undefined || tipo === '') return '';

    // 2) transformar em string e limpar espaços/brancos
    const raw = String(tipo).trim();

    // 3) se for exatamente a chave do enum (ex: "ARMA"), retorna direto
    if ((TipoItem as any)[raw]) {
      return (TipoItem as any)[raw];
    }

    // 4) tentar extrair apenas o número (ex: "1", "1. Arma", " 1 ")
    const onlyDigits = raw.replace(/\D+/g, ''); // "1. Arma" -> "1"
    const n = Number(onlyDigits);
    if (Number.isFinite(n) && n >= 1) {
      const labels = Object.values(TipoItem); // mantém a ordem de declaração
      const idx = n - 1;
      return labels[idx] ?? '';
    }

    // 5) tentativa final: se raw for exatamente um valor do enum (ex: "1. Arma")
    const found = Object.values(TipoItem).find(v => v === raw);
    if (found) return found;

    // 6) se nada bater, retorna string vazia (ou um fallback)
    return '';
  }

  getTipoItemKey(tipo: any): string {
    const value = this.getTipoItemLabel(tipo);
    return (
      Object.keys(TipoItem)
        .find(key => TipoItem[key as keyof typeof TipoItem] === value)!
        .replace(/_/g, ' ') ?? ''
    );
  }

  umTerco(preco: number) {
    return Number((preco / 3).toFixed(1));
  }

  umDecimo(preco: number) {
    return Number((preco / 10).toFixed(1));
  }

  eTipo<T extends { tipo: U }, U>(objeto: T, tipo: U): boolean {
    return objeto.tipo === tipo;
  }
}
