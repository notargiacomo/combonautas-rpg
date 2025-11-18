import { TipoItem } from '@app/enum/tipo.item.enum';

export abstract class CombonautasBase {
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
    const value = this.getTipoItemLabel(tipo); // reaproveita sua função que já converte número
    return Object.keys(TipoItem).find(key => TipoItem[key as keyof typeof TipoItem] === value) ?? '';
  }

  umTerco(preco: number) {
    return Number((preco / 3).toFixed(1));
  }

  umDecimo(preco: number) {
    return Number((preco / 10).toFixed(1));
  }
}
