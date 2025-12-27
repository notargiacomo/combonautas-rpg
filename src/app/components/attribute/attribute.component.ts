import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, output } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.scss',
})
export class AttributeComponent implements OnInit {
  @Input()
  attribute?: AtributoPersonagem = {};

  @Input()
  points!: number;
  changePoints = output<number>();

  ngOnInit(): void {}

  calculaPontos(novoValor: number) {
    if (novoValor === -1 || novoValor === 0) {
      this.points += this.attribute?.comprado! + novoValor;
    } else {
      this.points -= this.calculandoValorPonto(this.attribute!.comprado!);
      this.points += this.calculandoValorPonto(novoValor);
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

  onRacialChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);

    this.attribute!.racial = isNaN(value) ? 0 : value;
    this.recalcularTotal();
  }

  onOutroChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);

    this.attribute!.outros = isNaN(value) ? 0 : value;
    this.recalcularTotal();
  }

  recalcularTotal(): void {
    this.attribute!.total = this.attribute!.racial! + this.attribute!.comprado! + this.attribute!.outros!;
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
