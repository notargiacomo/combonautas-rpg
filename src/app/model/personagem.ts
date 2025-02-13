import { Atributo } from '../enum/atributo.enum';
import { getPrefixo } from '../enum/chave.enum';
import { Proficiencia } from '../enum/proficiencia.enum';
import { Sentido } from '../enum/sentido.enum';
import { Tamanho } from '../enum/tamanho.enum';
import { Item } from './item';
import { Pericia } from './pericia';
import { Raca } from './raca';
export class Personagem {
  id?: number;
  nome?: string;
  raca?: Raca;
  nivel?: number;
  pontos!: number;
  pontos_vida_atual!: number;
  pontos_vida_total!: number;
  pontos_vida_temporarios!: number;
  pontos_mana_atual!: number;
  pontos_mana_total!: number;
  pontos_mana_temporarios!: number;
  defesa!:number;
  defesa_bonus!:number;
  atributo_defesa!: string;
  atributos!: {
    forca: number;
    forca_comprada: number;
    forca_racial: number;
    forca_bonus: number;
    destreza: number;
    destreza_comprada: number;
    destreza_racial: number;
    destreza_bonus: number;
    constituicao: number;
    constituicao_comprada: number;
    constituicao_racial: number;
    constituicao_bonus: number;
    inteligencia: number;
    inteligencia_comprada: number;
    inteligencia_racial: number;
    inteligencia_bonus: number;
    sabedoria: number;
    sabedoria_comprada: number;
    sabedoria_racial: number;
    sabedoria_bonus: number;
    carisma: number;
    carisma_comprada: number;
    carisma_racial: number;
    carisma_bonus: number;
  };
  pericias?: PericiaPersonagem[];
  equipamentos_empunhados!: Equipamento[];
  equipamentos_vestidos!: Equipamento[];
  numero_itens_vestidos_maximo!: number;
  equipamentos_carregados!: Equipamento[];
  itens?: Item[];
  carga?:number;
  proficiencia?: Proficiencia[];
  tamanho?: Tamanho;
  deslocamentos?: Deslocamento[];
  sentidos?: Sentido[];
  resistencias?: Resistencias[];
  imunidades?: Imunidade[];

  constructor() {
    this.equipamentos_empunhados = [{nome: 'Mão Direita'}, {nome: 'Mão Esquerda'}];
    this.equipamentos_vestidos = [{}, {}, {}, {}];
    this.numero_itens_vestidos_maximo = 4;
    this.carga = 0;
    this.equipamentos_carregados = [];
    this.deslocamentos = []
    this.resistencias = [];
    this.imunidades = [];
    this.deslocamentos.push(new Deslocamento('Terrestre', 9))
    this.itens = [];
    this.proficiencia = [];
    this.proficiencia.push(Proficiencia.ARMAS_SIMPLES);
    this.proficiencia.push(Proficiencia.ARMADURAS_LEVES);
    this.pontos ? this.pontos : (this.pontos = 10);
    this.nivel ? this.nivel : (this.nivel = 1);
    this.pericias = [];
    this.inicializaAtributos();
    this.pontos_vida_atual = 0;
    this.pontos_vida_total = 0;
    this.pontos_vida_temporarios = 0;
    this.pontos_mana_atual = 0;
    this.pontos_mana_total = 0;
    this.pontos_mana_temporarios = 0;
    this.defesa = 10;
    this.atributo_defesa = Atributo.DESTREZA;
    this.defesa_bonus = 0;
  }

  inicializaAtributos() {
    if (this.atributos) {
      this.atributos.forca ? this.atributos.forca : 0;
      this.atributos.destreza ? this.atributos.destreza : 0;
      this.atributos.constituicao ? this.atributos.constituicao : 0;
      this.atributos.inteligencia ? this.atributos.inteligencia : 0;
      this.atributos.sabedoria ? this.atributos.sabedoria : 0;
    } else {
      this.atributos = {
        forca: 0,
        forca_comprada: 0,
        forca_racial: 0,
        forca_bonus: 0,
        destreza: 0,
        destreza_comprada: 0,
        destreza_racial: 0,
        destreza_bonus: 0,
        constituicao: 0,
        constituicao_comprada: 0,
        constituicao_racial: 0,
        constituicao_bonus: 0,
        inteligencia: 0,
        inteligencia_comprada: 0,
        inteligencia_racial: 0,
        inteligencia_bonus: 0,
        sabedoria: 0,
        sabedoria_comprada: 0,
        sabedoria_racial: 0,
        sabedoria_bonus: 0,
        carisma: 0,
        carisma_comprada: 0,
        carisma_racial: 0,
        carisma_bonus: 0,
      };
    }
  }

  calculaPontos(atributo: string, novoValor: number) {
    switch (atributo) {
      case 'for': {
        if (novoValor === -1 || novoValor === 0) {
          this.pontos += this.atributos.forca_comprada - novoValor;
        } else {
          this.pontos += this.calculandoValorPonto(
            this.atributos.forca_comprada
          );
          this.pontos -= this.calculandoValorPonto(novoValor);
        }
        this.atributos.forca_comprada = novoValor;
        this.atributos.forca =
          this.atributos.forca_comprada +
          this.atributos.forca_racial +
          this.atributos.forca_bonus;
        break;
      }
      case 'des': {
        if (novoValor === -1 || novoValor === 0) {
          this.pontos += this.atributos.destreza_comprada - novoValor;
        } else {
          this.pontos += this.calculandoValorPonto(
            this.atributos.destreza_comprada
          );
          this.pontos -= this.calculandoValorPonto(novoValor);
        }
        this.atributos.destreza_comprada = novoValor;
        this.atributos.destreza =
          this.atributos.destreza_comprada +
          this.atributos.destreza_racial +
          this.atributos.destreza_bonus;
        break;
      }
      case 'con': {
        if (novoValor === -1 || novoValor === 0) {
          this.pontos += this.atributos.constituicao_comprada - novoValor;
        } else {
          this.pontos += this.calculandoValorPonto(
            this.atributos.constituicao_comprada
          );
          this.pontos -= this.calculandoValorPonto(novoValor);
        }
        this.atributos.constituicao_comprada = novoValor;
        this.atributos.constituicao =
          this.atributos.constituicao_comprada +
          this.atributos.constituicao_racial +
          this.atributos.constituicao_bonus;
        break;
      }
      case 'int': {
        if (novoValor === -1 || novoValor === 0) {
          this.pontos += this.atributos.inteligencia_comprada - novoValor;
        } else {
          this.pontos += this.calculandoValorPonto(
            this.atributos.inteligencia_comprada
          );
          this.pontos -= this.calculandoValorPonto(novoValor);
        }
        this.atributos.inteligencia_comprada = novoValor;
        this.atributos.inteligencia =
          this.atributos.inteligencia_comprada +
          this.atributos.inteligencia_racial +
          this.atributos.inteligencia_bonus;
        break;
      }
      case 'sab': {
        if (novoValor === -1 || novoValor === 0) {
          this.pontos += this.atributos.sabedoria_comprada - novoValor;
        } else {
          this.pontos += this.calculandoValorPonto(
            this.atributos.sabedoria_comprada
          );
          this.pontos -= this.calculandoValorPonto(novoValor);
        }
        this.atributos.sabedoria_comprada = novoValor;
        this.atributos.sabedoria =
          this.atributos.sabedoria_comprada +
          this.atributos.sabedoria_racial +
          this.atributos.sabedoria_bonus;
        break;
      }
      case 'car': {
        if (novoValor === -1 || novoValor === 0) {
          this.pontos += this.atributos.carisma_comprada - novoValor;
        } else {
          this.pontos += this.calculandoValorPonto(
            this.atributos.carisma_comprada
          );
          this.pontos -= this.calculandoValorPonto(novoValor);
        }
        this.atributos.carisma_comprada = novoValor;
        this.atributos.carisma =
          this.atributos.carisma_comprada +
          this.atributos.carisma_racial +
          this.atributos.carisma_bonus;
        break;
      }
      default: {
      }
    }

    this.recalculaPericias();
    this.recalculaDefesa();
  }

  public recalculaDefesa(){
    this.defesa = 10;
    console.log(this.defesa);
    this.defesa +=  Number(this.defesa_bonus);
    console.log(this.defesa);
    this.defesa += Number(this.recuperaValorAtributo(this.atributo_defesa));
    console.log(this.defesa);
  };

  public recalculaPericias() {
    this.pericias?.forEach(pericia => {
      let valorAtributo = Number.parseInt(this.recuperaValorAtributo(pericia.atributo_descricao!));
      pericia.atualiza(this.nivel!, valorAtributo, pericia.outros!);
    });
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

  recalculaAtributos() {
    this.atributos.forca =
      this.atributos.forca_comprada +
      this.atributos.forca_racial +
      this.atributos.forca_bonus;
    this.atributos.destreza =
      this.atributos.destreza_comprada +
      this.atributos.destreza_racial +
      this.atributos.destreza_bonus;
    this.atributos.constituicao =
      this.atributos.constituicao_comprada +
      this.atributos.constituicao_racial +
      this.atributos.constituicao_bonus;
    this.atributos.inteligencia =
      this.atributos.inteligencia_comprada +
      this.atributos.inteligencia_racial +
      this.atributos.inteligencia_bonus;
    this.atributos.sabedoria =
      this.atributos.sabedoria_comprada +
      this.atributos.sabedoria_racial +
      this.atributos.sabedoria_bonus;
    this.atributos.carisma =
      this.atributos.carisma_comprada +
      this.atributos.carisma_racial +
      this.atributos.carisma_bonus;
      this.recalculaPericias();
  }

  resetaAtributosRaciais() {
    this.atributos.forca_racial = 0;
    this.atributos.destreza_racial = 0;
    this.atributos.constituicao_racial = 0;
    this.atributos.inteligencia_racial = 0;
    this.atributos.sabedoria_racial = 0;
    this.atributos.carisma_racial = 0;
  }

  inicializaPericias(pericias: Pericia[]) {
    pericias?.forEach((pericia) => {
      // transforma valor de Enum em string
      // coloca em minúsculo com - toLowerCase
      // remove acentos ortograficos - normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      let valor = this.recuperaValorAtributo(pericia
        .atributo!.toString());
      var periciaPersonagem = new PericiaPersonagem();

      periciaPersonagem.inicializa(
        pericia.nome!,
        pericia.descricao!,
        this.nivel!,
        pericia.atributo!.toString(),
        Number.parseInt(valor)
      )

      this.pericias?.push(periciaPersonagem);
    });
  }

  public recuperaValorAtributo(atributo: string) {
    return this.pegarValor(
      'atributos.' +
        atributo
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
    );
  }

  public recuperaValor(texto: string) {
    return texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
  }

  pegarValor(caminho: string): any {
    return caminho.split('.').reduce((obj: any, chave) => {
      if (obj && typeof obj === 'object') {
        return obj[chave];
      }
      return undefined;
    }, this);
  }
}
export class PericiaPersonagem {
  pericia?: string;
  descricao?: string;
  treinado?: boolean;
  total?: number;
  nivel?: number;
  atributo_descricao?: string;
  atributo?: number;
  outros?: number;

  constructor() {
  }

  inicializa(
    pericia: string,
    descricao: string,
    nivel: number,
    atributo_descricao: string,
    atributo: number,
  ) {
    this.outros = 0;
    this.pericia = pericia;
    this.descricao = descricao;
    this.treinado = false;
    this.nivel = nivel;
    this.atributo_descricao = atributo_descricao;
    this.atributo = atributo;
    this.total = atributo + Math.floor(nivel/2) + this.outros;
  }

  atualiza(bonus_nivel: number,
    atributo: number,  outros: number){
    this.nivel = bonus_nivel;
    this.atributo = atributo;
    this.outros = outros;
    this.total = Number(atributo) + Math.floor(Number(this.nivel!)/2) + Number(outros);
  }

  checkTreinamento(isChecked: boolean) {
    this.treinado = isChecked;
    let bonus_treinado = 0;
    if(this.treinado){
      bonus_treinado = this.nivel! >= 7 ? 4 : this.nivel! >= 15 ? 6: 2;

    }
    this.total = Number(this.atributo!) + Math.floor(Number(this.nivel!)/2) + Number(this.outros!) + Number(bonus_treinado);
  }

}
export class Equipamento {
  nome?:string;
  formula?:string;
  quantidade?:number;
  espaco?:number;
  descricao?:string;
  item?: Item;
  constructor(item: Item) {
    this.item = item;
    this.nome = item.nome;
  }
}

export class Deslocamento {
  nome?: string;
  valor?: number;

  constructor(nome: string, valor: number){
    this.nome = nome;
    this.valor = valor;
  }
}

export class Resistencias {
  fonte?: string;
  redutor?: number;

  constructor(fonte: string, redutor: number){
    this.fonte = fonte;
    this.redutor = redutor;
  }
}

export enum Imunidade {
}
