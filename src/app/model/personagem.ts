import { Alcance } from '../enum/alcance.enum';
import { AlcanceMagia } from '../enum/alcance.magia.enum';
import { Atributo } from '../enum/atributo.enum';
import { Chave } from '../enum/chave.enum';
import { Proficiencia } from '../enum/proficiencia.enum';
import { Regras } from '../enum/regras.enum';
import { Sentido } from '../enum/sentido.enum';
import { Tamanho } from '../enum/tamanho.enum';
import { Item } from './item';
import { Magia } from './magia';
import { Pericia } from './pericia';
import { Poder } from './poder';
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
  bonus_vida_total!: number;
  bonus_vida_nivel!: number;
  pontos_mana_atual!: number;
  pontos_mana_total!: number;
  pontos_mana_temporarios!: number;
  bonus_mana_total!: number;
  bonus_mana_nivel!: number;
  defesa!: DefesaPersonagem;
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
  numero_pericias_livre!: number;
  poderes!: PoderPersonagem[];
  pericias?: PericiaPersonagem[];
  posse?: Posse;
  proficiencia?: Proficiencia[];
  tamanho?: string;
  deslocamentos?: Deslocamento[];
  sentidos?: Sentido[];
  resiliencia?: Resiliencia;
  magias!: MagiaPersonagem[];

  constructor() {
    this.resetaPersonagem();
  }

  resetaPersonagem() {
    this.sentidos = [];
    this.poderes = [];
    this.magias = [];
    this.defesa = new DefesaPersonagem(10, 'Destreza');
    this.tamanho = Tamanho.MEDIO;
    this.resiliencia = new Resiliencia();

    this.inicializaNivel();
    this.inicializaAtributos();
    this.inicializaPontosVida();
    this.inicializaPontosMana();
    this.defesa.inicializaDefesa();
    this.inicializaProficiencias();
    this.inicializaDeslocamentos();
  }

  resetarRaca() {
    this.atributos.forca_racial = 0;
    this.atributos.destreza_racial = 0;
    this.atributos.constituicao_racial = 0;
    this.atributos.inteligencia_racial = 0;
    this.atributos.sabedoria_racial = 0;
    this.atributos.carisma_racial = 0;
  }

  private inicializaNivel() {
    this.pontos ? this.pontos : (this.pontos = 10);
    this.nivel ? this.nivel : (this.nivel = 1);
  }

  private inicializaDeslocamentos() {
    this.deslocamentos = [];
    this.deslocamentos.push(new Deslocamento('Terrestre', 9));
  }

  private inicializaProficiencias() {
    this.proficiencia = [];
    this.proficiencia.push(Proficiencia.ARMAS_SIMPLES);
    this.proficiencia.push(Proficiencia.ARMADURAS_LEVES);
  }

  private inicializaPontosMana() {
    this.pontos_mana_atual = 0;
    this.pontos_mana_total = 0;
    this.pontos_mana_temporarios = 0;
    this.bonus_mana_total = 0;
    this.bonus_mana_nivel = 0;
  }

  private inicializaPontosVida() {
    this.pontos_vida_atual = 0;
    this.pontos_vida_total = 0;
    this.pontos_vida_temporarios = 0;
    this.bonus_vida_total = 0;
    this.bonus_vida_nivel = 0;
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
    this.inicializaPosses();
  }

  public inicializaPosses() {
    this.posse = new Posse(this);
    this.posse!.atualizaCarga();
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
        this.recalculaVida();
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
        this.adicionaNumeroPericiasLivres(
          novoValor > this.atributos.inteligencia_comprada ? 1 : -1
        );
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

    this.atualizaPericias();
    this.defesa.atualizaDefesa(this);
    this.posse?.atualizaPosses(this);
  }

  public diminuirNivel() {
    this.nivel!--;
    this.atualizaPericias();
  }

  public adicionarAtributoForca(valor: number) {
    this.atributos.forca_racial += valor;
    this.recalculaAtributos();
  }

  public adicionarAtributoDestreza(valor: number) {
    this.atributos.destreza_racial += valor;
    this.recalculaAtributos();
  }

  public adicionarAtributoConstituicao(valor: number) {
    this.atributos.constituicao_racial += valor;
    this.recalculaAtributos();
  }

  public adicionarAtributoInteligencia(valor: number) {
    this.atributos.inteligencia_racial += valor;
    this.recalculaAtributos();
  }

  public adicionarAtributoSabedoria(valor: number) {
    this.atributos.sabedoria_racial += valor;
    this.recalculaAtributos();
  }

  public adicionarAtributoCarisma(valor: number) {
    this.atributos.carisma_racial += valor;
    this.recalculaAtributos();
  }

  public adicionarPontosAtributoLivres(valor: number, idPoder: number) {
    this.poderes.forEach((poder) => {
      if (poder.poder?.id === idPoder) {
        poder.pontos_atributos_unicos_livres
          ? (poder.pontos_atributos_unicos_livres += valor)
          : valor;
        poder.decisao = true;
      }
    });
  }

  public aumentarNivel() {
    this.nivel!++;
    this.atualizaPericias();
  }

  adicionaBonusTotalVida(bonusTotal: number) {
    this.bonus_vida_total += bonusTotal;
    this.recalculaVida();
  }

  adicionaBonusNivelVida(bonusNivel: number) {
    this.bonus_vida_nivel += bonusNivel;
    this.recalculaVida();
  }

  adicionaBonusTotalMana(bonusTotal: number) {
    this.bonus_mana_total += bonusTotal;
    this.recalculaVida();
  }

  adicionaBonusNivelMana(bonusNivel: number) {
    this.bonus_mana_nivel += bonusNivel;
    this.recalculaMana();
  }

  recalculaVida() {
    this.pontos_vida_total =
      this.atributos.constituicao * this.nivel! +
      this.bonus_vida_total +
      this.bonus_vida_nivel * this.nivel!;
  }

  recalculaMana() {
    this.pontos_mana_atual =
      this.bonus_mana_total + this.bonus_mana_nivel * this.nivel!;
  }

  public adicionaSentido(sentido: Sentido) {
    this.sentidos?.push(sentido);
  }

  public adicionaImunidade(imunidade: string, tipo: string) {
    let objetoImunidade = new Imunidade(imunidade, tipo);
    this.resiliencia?.imunidades?.push(objetoImunidade);
  }

  public adicionaImunidadeLivre(imunidade: string, tipo: string) {
    let objetoImunidade = new Imunidade(imunidade, tipo);
    this.resiliencia?.imunidades?.push(objetoImunidade);
  }

  public adicionaNumeroPericiasLivres(numeroPericiasExtras: number) {
    this.numero_pericias_livre =
      numeroPericiasExtras + this.numero_pericias_livre;
  }

  adicionaBonusPericiaPoderNaoLocalizado?(bonus: number, idPoder: number) {
    this.poderes.forEach((poder) => {
      if (poder.poder?.id === idPoder) {
        poder.bonus_pericia_poder_nao_localizado?.push(...[{ bonus: bonus }]);
        poder.decisao = true;
      }
    });
  }

  public adicionaResistenciaElementalLivre?(redutor: number) {
    this.resiliencia?.resistencias_elementais_livre?.push({
      fonte: 'Selecione um Elemento',
      redutor: redutor,
    });
  }

  public adicionaResistenciaElemental?(elemento: string, redutor: number) {
    this.resiliencia?.resistencias?.push({ fonte: elemento, redutor: redutor });
  }

  public adicionaDeslocamento(nome: string, valor: number) {
    this.deslocamentos?.push(new Deslocamento(nome, valor));
  }

  public atualizaPericias() {
    this.pericias?.forEach((pericia) => {
      let valorAtributo = Number.parseInt(
        this.recuperaValorAtributo(pericia.atributo_selecionado_descricao!)
      );
      pericia.atualiza(this.nivel!, valorAtributo, pericia.outros!);
    });
    this.posse?.atualizaPosses(this);
  }

  public atualizarDeslocamento(deslocamento: string, valor: number) {
    if (this.deslocamentos?.find((desloc) => desloc.nome === deslocamento)) {
      this.deslocamentos?.forEach((element) => {
        if (element.nome === deslocamento) {
          element.valor = valor;
        }
      });
    } else {
      this.deslocamentos?.push({ nome: deslocamento, valor: valor });
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

    this.atualizaPericias();
    this.defesa.atualizaDefesa(this);
  }

  inicializaPericias(pericias: Pericia[]) {
    this.pericias = [];
    this.numero_pericias_livre = this.atributos.inteligencia;

    pericias?.forEach((pericia) => {
      let valor = this.recuperaValorAtributo(pericia.atributo!.toString());
      var periciaPersonagem = new PericiaPersonagem();

      periciaPersonagem.inicializa(
        pericia,
        pericia.nome!,
        pericia.descricao!,
        this.nivel!,
        pericia.atributo!.toString(),
        Number.parseInt(valor)
      );

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
      .toLowerCase();
  }

  pegarValor(caminho: string): any {
    return caminho.split('.').reduce((obj: any, chave) => {
      if (obj && typeof obj === 'object') {
        return obj[chave];
      }
      return undefined;
    }, this);
  }

  adicionarEspacoSelecaoPoder(descricao: string) {
    this.poderes.push({ poder: { id: 0, nome: descricao } });
  }

  atualizaBonusExtraPericia(
    nome: string,
    condicao: {
      origem?: string;
      bonus?: number;
      condicao?: string[];
      ativo: boolean;
    }[]
  ) {
    this.pericias
      ?.find(
        (p) =>
          p.pericia
            ?.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase() ===
          nome
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
      )
      ?.adicionaBonusExtra(condicao);
    this.atualizaPericias();
  }

  public adicionarArmaNatural(
    mediator: Personagem,
    nome: string,
    dano: string,
    margem_ameaca: number,
    multiplicador_critico: number,
    alcance: number
  ) {
    this.posse!.equipamentos_empunhados!.push(
      new Equipamento(
        nome,
        `+${
          mediator.pericias?.find((pericia) => pericia.pericia === 'Luta')
            ?.total
        } 1d3+${mediator.atributos.forca} 20x2`,
        Regras.ARMAS_NATURAIS,
        {
          ataque: 0,
          atributo_descricao_ataque: Atributo.FORCA,
          pericia_descricao_ataque:
            Chave.PERICIA_LUTA.charAt(0).toUpperCase() +
            Chave.PERICIA_LUTA.slice(1).toLowerCase(),
          atributo_descricao_dano: Atributo.FORCA,
          total_bonus_ataque: 0,
          margem_ameaca: margem_ameaca,
          multiplicador_critico: multiplicador_critico,
          proficiencia: Proficiencia.ARMAS_SIMPLES,
          distancia: 'Corpo a Corpo',
          empunhadura: 'Arma Natural',
          alcance: alcance,
          dano: dano,
          bonus_ataque: [],
          custo: 1,
          tipo_custo: 'mana',
        },
        undefined
      )
    );
    this.posse!.atualizaPosses(mediator);
  }

  public adicionaBonusDefesa(
    bonus: number,
    descricao: string,
    duracao: string
  ) {
    if (this.defesa.defesa_bonus === undefined) this.defesa.defesa_bonus = [];
    this.defesa.defesa_bonus.push({
      bonus: bonus,
      descricao: descricao,
      duracao: duracao,
    });
  }

  adicionaAumentoPasso(condicao: string[]){
    this.posse?.condicao_aumento_passo_arma?.push(...condicao);
  }

  atualizaTamanho(tamanho:string){
    this.tamanho = tamanho;
  }

}
export class PericiaPersonagem {
  objeto?: Pericia;
  pericia?: string;
  descricao?: string;
  treinado?: boolean;
  total?: number;
  nivel?: number;
  atributo?: number;
  atributo_descricao?: string;
  atributo_selecionado?: number;
  atributo_selecionado_descricao?: string;
  outros?: number;
  bonus_treinado: number = 2;
  bonus_extras?: {
    origem?: string;
    bonus?: number;
    condicao?: string[];
    ativo?: boolean;
  }[];

  adicionaBonusExtra(
    condicao: {
      origem?: string;
      bonus?: number;
      condicao?: string[];
      ativo: boolean;
    }[]
  ) {
    if (!this.bonus_extras) this.bonus_extras = condicao;
    else this.bonus_extras.push(...condicao);
  }

  constructor() {}

  inicializa(
    objeto: Pericia,
    pericia: string,
    descricao: string,
    nivel: number,
    atributo_descricao: string,
    atributo: number
  ) {
    this.objeto = objeto;
    this.outros = 0;
    this.pericia = pericia;
    this.descricao = descricao;
    this.nivel = nivel;
    this.atributo_descricao = atributo_descricao;
    this.atributo_selecionado_descricao = atributo_descricao;
    this.atributo_selecionado = atributo;
    this.atributo = atributo;
    this.total =
      this.atributo_selecionado +
      Math.floor(nivel / 2) +
      this.outros +
      (this.treinado ? this.bonus_treinado : 0);
  }

  rolarDado() {
    alert('Rolou o dado');
  }

  getBonusNivel() {
    return Math.floor(Number(this.nivel!) / 2);
  }

  ativaDesativaBonusExtra(bonus: {
    origem?: string;
    bonus?: number;
    condicao?: string[];
    ativo: boolean;
  }) {
    this.bonus_extras?.forEach((element) => {
      if (bonus === element) {
        element.ativo = !element.ativo;
      }
    });

    this.atualizaPericia();
  }

  public atualizaPericia(valorAtributo?: number) {
    this.atributo_selecionado =
      valorAtributo !== undefined ? valorAtributo : this.atributo_selecionado;
    this.atributo = this.atributo_selecionado;

    let bonus_extra_total = 0;
    this.bonus_extras?.forEach((bonus) => {
      if (bonus.ativo) {
        bonus_extra_total += bonus.bonus!;
      }
    });

    this.bonus_treinado = this.nivel! >= 15 ? 6 : this.nivel! >= 7 ? 4 : 2;

    this.total =
      Number(this.atributo_selecionado) +
      Math.floor(Number(this.nivel!) / 2) +
      Number(this.outros) +
      Number(this.treinado ? this.bonus_treinado : 0) +
      bonus_extra_total;
  }

  atualiza(bonus_nivel: number, atributo: number, outros: number) {
    this.nivel = bonus_nivel;
    this.atributo_selecionado = atributo;
    this.atributo = atributo;
    this.outros = outros;
    this.atualizaPericia();
  }

  checkTreinamento(isChecked: boolean, personagem: Personagem) {
    this.treinado = isChecked;
    this.bonus_treinado = 0;
    if (this.treinado) {
      personagem.adicionaNumeroPericiasLivres(-1);
      this.bonus_treinado = this.nivel! >= 15 ? 6 : this.nivel! >= 7 ? 4 : 2;
    } else {
      personagem.adicionaNumeroPericiasLivres(1);
    }
    this.atualizaPericia();
    personagem.posse!.atualizaPosses(personagem);
  }
}
export class Equipamento {
  nome?: string;
  formula?: string;
  quantidade?: number;
  espaco?: number;
  descricao?: string;
  item?: Item;
  ataque?: {
    ataque?: number;
    atributo_descricao_ataque?: string;
    atributo_valor_ataque?: number;
    pericia_descricao_ataque?: string;
    pericia_valor_ataque?: number;
    bonus_ataque?: {
      origem?: string;
      bonus?: number;
      condicao?: string;
      ativo?: boolean;
    }[];
    total_bonus_ataque?: number;
    dano?: string;
    atributo_descricao_dano?: string;
    atributo_valor_dano?: number;
    dano_extra?: {
      valor_dano_extra?: number;
      tipo_dano_extra?: string;
      condicao?: string[];
      ativo?: boolean;
    }[];
    margem_ameaca?: number;
    multiplicador_critico?: number;
    melhorias?: string[];
    material_especial?: string;
    encantamentos?: string[];
    proficiencia?: string;
    distancia?: string;
    alcance?: number;
    empunhadura?: string;
    custo?: number;
    tipo_custo?: string;
  };

  constructor(
    nome: string,
    formula: string,
    descricao: string,
    ataque: {
      ataque?: number;
      atributo_descricao_ataque?: string;
      atributo_valor_ataque?: number;
      pericia_descricao_ataque?: string;
      pericia_valor_ataque?: number;
      bonus_ataque?: {
        origem?: string;
        bonus?: number;
        condicao?: string;
        ativo?: boolean;
      }[];
      total_bonus_ataque?: number;
      dano?: string;
      atributo_descricao_dano?: string;
      atributo_valor_dano?: number;
      dano_extra?: {
        valor_dano_extra?: number;
        tipo_dano_extra?: string;
        condicao?: string[];
        ativo?: boolean;
      }[];
      margem_ameaca?: number;
      multiplicador_critico?: number;
      melhorias?: string[];
      material_especial?: string;
      encantamentos?: string[];
      proficiencia?: string;
      distancia?: string;
      alcance?: number;
      empunhadura?: string;
      custo?: number;
      tipo_custo?: string;
    },
    item?: Item
  ) {
    this.item = item;
    this.nome = item ? item.nome : nome;
    this.formula = formula;
    this.descricao = descricao;
    this.ataque = ataque;
  }

  public ativaDesativaBonusCondicionalPermanente?(bonus: {
    origem?: string;
    bonus?: number;
    condicao?: string[];
    ativo: boolean;
  }) {
    this.ataque?.bonus_ataque?.forEach((element) => {
      if (bonus === element) {
        element.ativo = !element.ativo;
      }
    });
  }

  public getBonusPericiaAtaque(personagem: Personagem) {
    let pericia = personagem.pericias?.find(
      (pericia) => pericia.pericia === this.ataque?.pericia_descricao_ataque
    );
    return pericia?.total
      ? pericia?.total - Number(personagem.recuperaValorAtributo('forca'))
      : 0;
  }

  public getBonusAtributoAtaque(personagem: Personagem): number {
    return Number(personagem.recuperaValorAtributo('forca'));
  }
}

export class Deslocamento {
  nome?: string;
  valor?: number;

  constructor(nome: string, valor: number) {
    this.nome = nome;
    this.valor = valor;
  }
}

export class Resistencia {
  fonte?: string;
  redutor?: number;

  constructor(fonte: string, redutor: number) {
    this.fonte = fonte;
    this.redutor = redutor;
  }
}

export class Imunidade {
  nome?: string;
  tipo?: string;

  constructor(nome: string, tipo: string) {
    this.nome = nome;
    this.tipo = tipo;
  }
}

export class Posse {
  equipamentos_empunhados?: Equipamento[];
  equipamentos_vestidos?: Equipamento[];
  numero_itens_vestidos_maximo?: number;
  equipamentos_carregados?: Equipamento[];
  itens?: Item[];
  condicao_aumento_passo_arma?: string[];
  carga_atual?: number;
  total_carga?: number;
  bonus_carga?: number;
  moedas_cobre?: number;
  moedas_prata?: number;
  moedas_ouro?: number;
  moedas_plantina?: number;
  resolucao?: string[];

  constructor(private mediator: Personagem) {
    this.atualizaPosses(mediator);
  }

  public aumentaPassoArma() {
    this.equipamentos_empunhados?.forEach(equip => {
      this.condicao_aumento_passo_arma?.forEach(condicao => {
        if(equip.nome?.includes(condicao) || equip.item?.chave.toString().includes(condicao)){
          for (let i = 0; i < passoDano.length; i++) {
            if (passoDano[i][0] === equip.ataque?.dano) {
              equip.ataque.dano = passoDano[i][1];
            }
          }
        }
      })
    });

    this.atualizaPosses(this.mediator);
  }

  adicionarEquipamentoEmpunhado(equipamento: Equipamento) {
    if (!this.equipamentos_empunhados![0].item) {
      this.equipamentos_empunhados![0] = equipamento;
    } else if (!this.equipamentos_empunhados![1].item) {
      this.equipamentos_empunhados![1] = equipamento;
    } else {
    }
  }

  public atualizaPosses(mediator: Personagem) {
    if (!this.equipamentos_empunhados) {
      this.equipamentos_empunhados = [];
      this.equipamentos_empunhados.push(
        new Equipamento(
          'Mão Direita',
          `+${
            mediator.pericias?.find((pericia) => pericia.pericia === 'Luta')
              ?.total
          } 1d3+${mediator.atributos.forca} 20x2`,
          Regras.ATAQUES_DESARMADOS,
          {
            ataque: 0,
            atributo_descricao_ataque: Atributo.FORCA,
            pericia_descricao_ataque:
              Chave.PERICIA_LUTA.charAt(0).toUpperCase() +
              Chave.PERICIA_LUTA.slice(1).toLowerCase(),
            atributo_descricao_dano: Atributo.FORCA,
            total_bonus_ataque: 0,
            margem_ameaca: 1,
            multiplicador_critico: 2,
            proficiencia: Proficiencia.ARMAS_SIMPLES,
            distancia: 'Corpo a Corpo',
            empunhadura: 'Uma mão',
            alcance: Alcance.CORPO_A_CORPO,
            dano: '1d3',
            bonus_ataque: [],
          },
          undefined
        )
      );

      this.equipamentos_empunhados.push(
        new Equipamento(
          'Mão Esquerda',
          `+${
            mediator.pericias?.find((pericia) => pericia.pericia === 'Luta')
              ?.total
          } 1d3+${mediator.atributos.forca} 20x2`,
          Regras.ATAQUES_DESARMADOS,
          {
            ataque: 0,
            atributo_descricao_ataque: Atributo.FORCA,
            pericia_descricao_ataque:
              Chave.PERICIA_LUTA.charAt(0).toUpperCase() +
              Chave.PERICIA_LUTA.slice(1).toLowerCase(),
            atributo_descricao_dano: Atributo.FORCA,
            total_bonus_ataque: 0,
            margem_ameaca: 1,
            multiplicador_critico: 2,
            proficiencia: Proficiencia.ARMAS_SIMPLES,
            distancia: 'Corpo a Corpo',
            empunhadura: 'Uma mão',
            alcance: Alcance.CORPO_A_CORPO,
            dano: '1d3',
            bonus_ataque: [],
          },
          undefined
        )
      );

      this.numero_itens_vestidos_maximo = 4;
      this.total_carga = 0;
      this.bonus_carga = 0;
      this.carga_atual = 0;
      this.equipamentos_carregados = [];
      this.itens = [];
      this.moedas_plantina = 0;
      this.moedas_ouro = 0;
      this.moedas_prata = 0;
      this.moedas_cobre = 0;
      this.condicao_aumento_passo_arma = [];
      this.atualizaCarga();
    }

    this.equipamentos_empunhados.forEach((equip) => {
      equip.ataque?.bonus_ataque?.forEach((bonus) => {
        equip.ataque!.total_bonus_ataque! += bonus.bonus!;
      });

      equip.ataque!.ataque =
        Number(equip.getBonusPericiaAtaque(mediator)) +
        Number(equip.getBonusAtributoAtaque(mediator)) +
        equip.ataque!.total_bonus_ataque!;

      equip.formula = `+${
        mediator.pericias?.find((pericia) => pericia.pericia === 'Luta')?.total
      } 1d3+${mediator.atributos.forca} 20x2`;
    });
  }

  public atualizaCarga() {
    this.total_carga =
      10 +
      (this.mediator.atributos ? this.mediator.atributos.forca * 2 : 0) +
      this.bonus_carga!;
  }
}
export class MagiaPersonagem {
  magia?: Magia;
  numero_vezes_aprendida?: number;
  memorizada?: boolean;
  total_pms_gastos?: number;
  raca?: string;
  origem?: string;
  classe?: string;
  nivel_classe?: number;
}

export class PoderPersonagem {
  poder?: Poder;
  ativo?: boolean;
  bonus_pericia_poder_nao_localizado?: { bonus: number; pericia?: string }[];
  pontos_atributos_unicos_livres?: number;
  decisao?: boolean;

  constructor(poder: Poder, ativo: boolean) {
    this.poder = poder;
    this.ativo = ativo;
    this.bonus_pericia_poder_nao_localizado = [];
    this.decisao = false;
  }
}

export class DefesaPersonagem {
  defesa!: number;
  defesa_bonus!: {
    bonus?: number;
    descricao?: string;
    duracao?: string;
  }[];
  bonus_total!: number;
  atributo_defesa!: string;

  constructor(defesa: number, atributo_defesa: string) {
    this.defesa = defesa;
    this.atributo_defesa = atributo_defesa;
  }

  public inicializaDefesa() {
    this.defesa = 10;
    this.atributo_defesa = Atributo.DESTREZA;
    this.defesa_bonus = [];
    this.bonus_total = 0;
  }

  public atualizaDefesa(mediator: Personagem) {
    this.defesa = 10;
    this.defesa_bonus.forEach((bonus) => {
      this.bonus_total += bonus.bonus!;
    });
    this.defesa += Number(this.bonus_total);
    this.defesa += Number(mediator.recuperaValorAtributo(this.atributo_defesa));
    console.log(this.defesa_bonus);
  }
}

export class Resiliencia {
  resistencias?: Resistencia[];
  resistencias_elementais_livre?: Resistencia[];
  imunidades?: Imunidade[];
  imunidades_elementais_livre?: Imunidade[];

  constructor() {
    this.inicializaResiliencias();
  }

  public inicializaResiliencias() {
    this.resistencias = [];
    this.imunidades = [];
    this.resistencias_elementais_livre = [];
    this.imunidades_elementais_livre = [];
  }
}

const passoDano = [
  ['1', '1d2'],
  ['1d2', '1d3'],
  ['1d3', '1d4'],
  ['1d4', '1d6'],
  ['1d6', '1d8'],
  ['1d8', '1d10'],
  ['2d4', '1d10'],
  ['1d10', '1d12'],
  ['1d12', '3d6'],
  ['2d6', '3d6'],
  ['3d4', '3d6'],
  ['3d6', '4d6'],
  ['4d6', '4d8'],
  ['4d6', '4d8'],
  ['2d8', '3d8'],
  ['3d8', '4d8'],
  ['4d8', '4d10'],
  ['2d10', '3d10'],
  ['3d10', '4d10'],
  ['4d10', '4d12'],
];