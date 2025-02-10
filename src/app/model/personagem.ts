import { Raca } from './raca';
export class Personagem {
  id?: number;
  nome?: string;
  raca?: Raca;
  nivel?: number;
  pontos!: number;
  atributos!: {
    for: number;
    for_comprada: number;
    for_racial: number;
    for_bonus: number;
    des: number;
    des_comprada: number;
    des_racial: number;
    des_bonus: number;
    con: number;
    con_comprada: number;
    con_racial: number;
    con_bonus: number;
    int: number;
    int_comprada: number;
    int_racial: number;
    int_bonus: number;
    sab: number;
    sab_comprada: number;
    sab_racial: number;
    sab_bonus: number;
    car: number;
    car_comprada: number;
    car_racial: number;
    car_bonus: number;
  };

  constructor() {
    this.pontos ? this.pontos : (this.pontos = 10);
    this.nivel ? this.nivel : (this.nivel = 1);
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
        des_comprada: 0,
        des_racial: 0,
        des_bonus: 0,
        con: 0,
        con_comprada: 0,
        con_racial: 0,
        con_bonus: 0,
        int: 0,
        int_comprada: 0,
        int_racial: 0,
        int_bonus: 0,
        sab: 0,
        sab_comprada: 0,
        sab_racial: 0,
        sab_bonus: 0,
        car: 0,
        car_comprada: 0,
        car_racial: 0,
        car_bonus: 0,
      };
    }
  }

  calculaPontos(atributo: string, novoValor: number) {
    switch (atributo) {
      case 'for': {
        if (novoValor === -1 || novoValor === 0) {
          this.pontos += this.atributos.for_comprada - novoValor;
        } else {
          this.pontos += this.calculandoValorPonto(this.atributos.for_comprada);
          this.pontos -= this.calculandoValorPonto(novoValor);
        }
        this.atributos.for_comprada = novoValor;
        this.atributos.for =
          this.atributos.for_comprada +
          this.atributos.for_racial +
          this.atributos.for_bonus;
        break;
      }
      case 'des': {
        if (novoValor === -1 || novoValor === 0) {
          this.pontos += this.atributos.des_comprada - novoValor;
        } else {
          this.pontos += this.calculandoValorPonto(this.atributos.des_comprada);
          this.pontos -= this.calculandoValorPonto(novoValor);
        }
        this.atributos.des_comprada = novoValor;
        this.atributos.des =
          this.atributos.des_comprada +
          this.atributos.des_racial +
          this.atributos.des_bonus;
        break;
      }
      case 'con': {
        if (novoValor === -1 || novoValor === 0) {
          this.pontos += this.atributos.con_comprada - novoValor;
        } else {
          this.pontos += this.calculandoValorPonto(this.atributos.con_comprada);
          this.pontos -= this.calculandoValorPonto(novoValor);
        }
        this.atributos.con_comprada = novoValor;
        this.atributos.con =
          this.atributos.con_comprada +
          this.atributos.con_racial +
          this.atributos.con_bonus;
        break;
      }
      case 'int': {
        if (novoValor === -1 || novoValor === 0) {
          this.pontos += this.atributos.int_comprada - novoValor;
        } else {
          this.pontos += this.calculandoValorPonto(this.atributos.int_comprada);
          this.pontos -= this.calculandoValorPonto(novoValor);
        }
        this.atributos.int_comprada = novoValor;
        this.atributos.int =
          this.atributos.int_comprada +
          this.atributos.int_racial +
          this.atributos.int_bonus;
        break;
      }
      case 'sab': {
        if (novoValor === -1 || novoValor === 0) {
          this.pontos += this.atributos.sab_comprada - novoValor;
        } else {
          this.pontos += this.calculandoValorPonto(this.atributos.sab_comprada);
          this.pontos -= this.calculandoValorPonto(novoValor);
        }
        this.atributos.sab_comprada = novoValor;
        this.atributos.sab =
          this.atributos.sab_comprada +
          this.atributos.sab_racial +
          this.atributos.sab_bonus;
        break;
      }
      case 'car': {
        if (novoValor === -1 || novoValor === 0) {
          this.pontos += this.atributos.car_comprada - novoValor;
        } else {
          this.pontos += this.calculandoValorPonto(this.atributos.car_comprada);
          this.pontos -= this.calculandoValorPonto(novoValor);
        }
        this.atributos.car_comprada = novoValor;
        this.atributos.car =
          this.atributos.car_comprada +
          this.atributos.car_racial +
          this.atributos.car_bonus;
        break;
      }
      default: {
      }
    }
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

  recalcula(){
    this.atributos.for = this.atributos.for_comprada + this.atributos.for_racial + this.atributos.for_bonus;

    this.atributos.des = this.atributos.des_comprada + this.atributos.des_racial + this.atributos.des_bonus;

    this.atributos.con = this.atributos.con_comprada + this.atributos.con_racial + this.atributos.con_bonus;

    this.atributos.int = this.atributos.int_comprada + this.atributos.int_racial + this.atributos.int_bonus;

    this.atributos.sab = this.atributos.sab_comprada + this.atributos.sab_racial + this.atributos.sab_bonus;

    this.atributos.car = this.atributos.car_comprada + this.atributos.car_racial + this.atributos.car_bonus;
  }

  resetaAtributosRaciais(){
    this.atributos.for_racial = 0;
    this.atributos.des_racial = 0;
    this.atributos.con_racial = 0;
    this.atributos.int_racial = 0;
    this.atributos.sab_racial = 0;
    this.atributos.car_racial = 0;
  }
}
