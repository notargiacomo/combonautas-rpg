import { Component, Input, output } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-attribute',
  imports: [MatIcon],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.scss',
})
export class AttributeComponent {
  @Input()
  attribute?: AtributoPersonagem = {};

  @Input()
  points!: number;
  changePoints = output<number>();

  calculaPontos(novoValor: number) {
    if (novoValor === -1 || novoValor === 0) {
      this.points += this.attribute?.comprado! - novoValor;
    } else {
      this.points += this.calculandoValorPonto(this.attribute!.comprado!);
      this.points -= this.calculandoValorPonto(novoValor);
    }
    this.attribute!.comprado = novoValor;
    this.attribute!.total = this.attribute!.comprado + this.attribute!.racial! + this.attribute!.outros!;
    this.changePoints.emit(this.points);
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
