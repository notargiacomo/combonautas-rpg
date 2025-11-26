import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-attribute',
  imports: [],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.scss',
})
export class AttributeComponent {
  @Input()
  atributo?: AtributoPersonagem = {};

  @Input()
  pontos!: number;
  pontosChange = output<number>();

  calculaPontos(novoValor: number) {
    if (novoValor === -1 || novoValor === 0) {
      this.pontos += this.atributo?.comprado! - novoValor;
    } else {
      this.pontos += this.calculandoValorPonto(this.atributo!.comprado!);
      this.pontos -= this.calculandoValorPonto(novoValor);
    }
    this.atributo!.comprado = novoValor;
    this.atributo!.total = this.atributo!.comprado + this.atributo!.racial! + this.atributo!.outros!;
    this.pontosChange.emit(this.pontos);
  }

  calculandoValorPonto(atributo: number): number {
    if (atributo === -1 || atributo === 0) {
      return 0;
    } else {
      return this.fatorialRecursivo(atributo) - (atributo - 1);
    }
  }

  fatorialRecursivo(n: number): number {
    if (n < 0) {
      throw new Error('O fatorial não está definido para números negativos.');
    }

    if (n === 0 || n === 1) {
      return n;
    }
    return n + this.fatorialRecursivo(n - 1);
  }
}

export interface AtributoPersonagem {
  nome?: string;
  comprado?: number;
  racial?: number;
  outros?: number;
  poder?: number;
  temporario?: number;
  total?: number;
}
