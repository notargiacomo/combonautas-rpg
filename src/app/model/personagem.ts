import { Raca } from './raca';

export class Personagem {
  id?: number;
  nome?: string;
  raca?: Raca;
  nivel?:number;
  pontos!: number;
  atributos!: {
        for: number;
        for_comprada: number;
        for_racial: number;
        for_bonus: number;
        des: number;
        con: number;
        int: number;
        sab: number;
        car: number;
    };

  constructor() {
    this.pontos ? this.pontos : this.pontos = 10;
    this.nivel ? this.nivel : this.nivel = 1;
    this.inicializaAtributos();
  }

  inicializaAtributos() {
    if (this.atributos) {
      this.atributos.for ? this.atributos.for : 0;
      this.atributos.des ? this.atributos.des : 0;
      this.atributos.con ? this.atributos.con : 0;
      this.atributos.int ? this.atributos.int : 0;
      this.atributos.sab ? this.atributos.sab : 0;
    } else {
      this.atributos = {
        for: 0,
        for_comprada: 0,
        for_racial: 0,
        for_bonus: 0,
        des: 0,
        con: 0,
        int: 0,
        sab: 0,
        car: 0,
      };
    }
  }

  calculaPontos(atributo: string, novoValor: number) {
    switch(atributo){
        case 'for': {
            this.pontos += this.calculandoValorPonto(this.atributos.for_comprada);
            this.pontos -= this.calculandoValorPonto(novoValor);
            this.atributos.for_comprada = novoValor;
            this.atributos.for = this.atributos.for_comprada + this.atributos.for_racial + this.atributos.for_bonus;
            break;
        }
        case 'des': {
            this.pontos += this.calculandoValorPonto(this.atributos.des);
            this.pontos -= this.calculandoValorPonto(novoValor);
            this.atributos.des = novoValor;
            break;
        }
        case 'con': {
            this.pontos += this.calculandoValorPonto(this.atributos.con);
            this.pontos -= this.calculandoValorPonto(novoValor);
            this.atributos.con = novoValor;
            break;
        }
        case 'int': {
            this.pontos += this.calculandoValorPonto(this.atributos.int);
            this.pontos -= this.calculandoValorPonto(novoValor);
            this.atributos.int = novoValor;
            break;
        }
        case 'sab': {
            this.pontos += this.calculandoValorPonto(this.atributos.sab);
            this.pontos -= this.calculandoValorPonto(novoValor);
            this.atributos.sab = novoValor;
            break;
        }
        case 'car': {
            this.pontos += this.calculandoValorPonto(this.atributos.car);
            this.pontos -= this.calculandoValorPonto(novoValor);
            this.atributos.car = novoValor;
            break;
        }
        default:{}
    }
  }

  calculandoValorPonto(atributo: number):number {
    return this.fatorialRecursivo(atributo) - (atributo === 0 ? 0 : atributo - 1);
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
