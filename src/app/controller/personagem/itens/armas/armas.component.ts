import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { RegraTree } from '@app/model/RegraTree';
import { Chave } from '../../../../enum/chave.enum';
import { TipoItem } from '../../../../enum/tipo.item.enum';
import { Item } from '../../../../model/item';
import { AlcanceSB } from '../../../../model/supamodel/alcance.sb';
import { ItemArmaSB } from '../../../../model/supamodel/item.arma.sb';
import { ItemManutencaoSB } from '../../../../model/supamodel/item.manutencao.sb';
import { ItemResistenciaSB } from '../../../../model/supamodel/item.resistencia.sb';
import { ItemSB } from '../../../../model/supamodel/item.sb';
import { PericiaItemSB } from '../../../../model/supamodel/pericia.item.sb';
import { PericiaSB } from '../../../../model/supamodel/pericia.sb';
import { ReferenciaItemSB } from '../../../../model/supamodel/referencia.item.sb';
import { RegraItemSB } from '../../../../model/supamodel/regra.item.sb';
import { TipoDanoItemSB } from '../../../../model/supamodel/tipo.dano.item.sb';
import { TipoDanoSB } from '../../../../model/supamodel/tipo.dano.sb';
import { ItemService } from '../../../../service/item.service';
import { AlcanceDao } from '../../../../dao/alcance.dao';
import { ItemArmaDao } from '@app/dao/item/item.arma.dao'; 
import { ItemManutencaoDao } from '@app/dao/item/item.manutencao.dao';
import { ItemResistenciaDao } from '@app/dao/item/item.resistencia.dao'; 
import { ItemDao } from '@app/dao/item/item.dao'; 
import { PericiaDao } from '../../../../dao/pericia.dao';
import { ReferenciaDao } from '../../../../dao/referencia.dao';
import { RegraDao } from '../../../../dao/regra.dao';
import { TipoDanoDao } from '../../../../dao/tipo.dano.item.dao';
import { TipoItemDao } from '../../../../dao/tipo.item.dao';
import { Regra } from '@app/model/regra';

@Component({
  selector: 'app-armas',
  imports: [
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    NgFor,
    NgIf,
    NgClass,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTreeModule,
  ],
  templateUrl: './armas.component.html',
  styleUrl: './armas.component.scss',
})
export class ArmasComponent implements OnInit{
  dataSourceRegraTree: RegraTree[] = [];
  conceitos: RegraTree[] = [];
  childrenAccessor = (node: RegraTree): RegraTree[] => node.children ?? [];
  hasChild = (_: number, node: RegraTree) => !!node.children && node.children.length > 0;

  readonly panelOpenState = signal(false);
  displayedColumns: string[] = ['nome', 'acao'];
  regraSelecionada?: RegraTree;

  form!: FormGroup;
  objetos!: Item[];
  armas_simples!: Item[];
  armas_marciais!: Item[];
  armas_exoticas!: Item[];
  armas_fogo!: Item[];

  tiposItem: any[] = [];
  chaves: Chave[] = [];

  selecaoChave: boolean = false;

  numero_registros = 0;
  numero_registros_armas_simples = 0;
  numero_registros_armas_marciais = 0;
  numero_registros_armas_exoticas = 0;
  numero_registros_armas_de_fogo = 0;
  filtro_traco: string = '';

  dataSource = new MatTableDataSource<Item>();
  dataSourceAS = new MatTableDataSource<Item>();
  dataSourceAM = new MatTableDataSource<Item>();
  dataSourceAE = new MatTableDataSource<Item>();
  dataSourceAF = new MatTableDataSource<Item>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatPaginator)
  paginatorAS!: MatPaginator;

  @ViewChild(MatPaginator)
  paginatorAM!: MatPaginator;

  @ViewChild(MatPaginator)
  paginatorAE!: MatPaginator;

  @ViewChild(MatPaginator)
  paginatorAF!: MatPaginator;

  edicao: boolean = false;

  objeto: Item | undefined;
  itemSB?: ItemSB;
  itemArma?: ItemArmaSB;
  itemResistencia?: ItemResistenciaSB;
  itemManutencao?: ItemManutencaoSB;
  referencia!: { id: number; nome: string };
  referencias: any[] = [];
  regras: any[] = [];
  regrasItem: RegraItemSB[] = [];
  pericias: PericiaSB[] = [];
  periciasItem: PericiaItemSB[] = [];
  referenciaItem?: ReferenciaItemSB;
  alcances: AlcanceSB[] = [];
  tiposDano: TipoDanoSB[] = [];
  tiposDanoItem: TipoDanoItemSB[] = [];
  tempos: any[] = [8, 40, 160];

  constructor(
    private readonly service: ItemService,
    private readonly itemServiceSB: ItemDao,
    private readonly tipoItemServiceSB: TipoItemDao,
    private readonly referenciaServiceSB: ReferenciaDao,
    private readonly regraServiceSB: RegraDao,
    private readonly tiposDanoServiceSB: TipoDanoDao,
    private readonly alcanceServiceSB: AlcanceDao,
    private readonly periciaServiceSB: PericiaDao,
    private itemManutencaoSB: ItemManutencaoDao,
    private itemArmaSB: ItemArmaDao,
    private itemResistenciaSB: ItemResistenciaDao,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  async ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Item>();
    this.dataSource.paginator = this.paginator;

    this.dataSourceAS = new MatTableDataSource<Item>();
    this.dataSourceAS.paginator = this.paginatorAS;

    this.dataSourceAM = new MatTableDataSource<Item>();
    this.dataSourceAM.paginator = this.paginatorAM;

    this.dataSourceAE = new MatTableDataSource<Item>();
    this.dataSourceAE.paginator = this.paginatorAE;

    this.dataSourceAF = new MatTableDataSource<Item>();
    this.dataSourceAF.paginator = this.paginatorAF;
  }
  
  ngOnInit() {

        this.form = this.fb.group({
      id: [],
      nome: [],
      nomeSb: [],
      descricao: [],
      chave: [],
      idTipo: [],
      tipo: [],
      tipoSb: [],
      idReferencia: [],
      referencia: [],
      idRegra: [],
      regra: [],
      idPericia: [],
      pericia: [],
      caminhoImagem: [],
      paginas: [],
      dano: [],
      margem: [],
      multiplicador: [],
      idAlcance: [],
      idTipoDano: [],
      tipoDano: [],
      espaco: [],
      rd: [],
      pv: [],
      idArma: [],
      idResistencia: [],
      idManutencao: [],
      preco: [],
      cd: [],
      tempo: [],
      tela: ([] = ['ALFABETICA']),
    });

    this.itemSB = new ItemSB();
    if (typeof window !== 'undefined' && sessionStorage) {
      const logado = sessionStorage.getItem('logado') || '';
  
      if (logado) {
        this.edicao = true;
        const login = sessionStorage.getItem('login') || '';
        console.log('Usuário logado:', login);
      } else {
        console.log('Usuário não está logado');
      }
    }

    this.consultar(false, null);
    this.carregarTabelasDominio();

    this.pericias.sort((a, b) => {
      let nome_a = a ? a.nome : 'a';
      let nome_b = b ? b.nome : 'b';
      return nome_a!.localeCompare(nome_b!);
    });

    this.carregaArvoreConceitos();

  }
  
  async carregaArvoreConceitos(){
    this.dataSourceRegraTree.push(await this.regraServiceSB.carregarMenusConceito({ id: 21 }));
    this.cdr.detectChanges();

  }

  visao(visao: string){
    let seVisao = false;
    if(this.form != undefined) {
      seVisao = this.form.get('tela')?.value == visao;
    }

    return seVisao;
  }

  selecionaRegra(regraSelecionada: any){
    this.regraSelecionada = regraSelecionada;
  }

  async carregarTabelasDominio() {
    try {
      this.tiposItem = await this.tipoItemServiceSB.listarTiposItens();
      this.tiposItem = this.ordenacaoAlfabetica(this.tiposItem);

      this.referencias = await this.referenciaServiceSB.listar();
      this.referencias = this.ordenacaoAlfabetica(this.referencias);

      this.regraServiceSB.carregarCombo(21).then((regras: Regra[]) => {
        regras.forEach((r) => {
          this.regras.push(r);
        });
        this.regras = this.ordenacaoAlfabetica(this.regras);
      })
      .catch((error) => {
        console.error('Erro ao carregar regras', error);
      });

      this.regraServiceSB.carregarCombo(48).then((regras: Regra[]) => {
        regras.forEach((r) => {
          this.regras.push(r);
        });
        this.regras = this.ordenacaoAlfabetica(this.regras);
      })
      .catch((error) => {
        console.error('Erro ao carregar regras', error);
      });

      this.regraServiceSB.carregarCombo(49).then((regras: Regra[]) => {
        regras.forEach((r) => {
          this.regras.push(r);
        });
        this.regras = this.ordenacaoAlfabetica(this.regras);
      })
      .catch((error) => {
        console.error('Erro ao carregar regras', error);
      });

      this.alcances = await this.alcanceServiceSB.listar();

      this.pericias = await this.periciaServiceSB.listar();

      this.tiposDano = await this.tiposDanoServiceSB.listar();
      this.tiposDano = this.ordenacaoAlfabetica(this.tiposDano);
    } catch (err) {
      console.error('Erro ao carregar tipos de item', err);
    }
  }

  ordenacaoAlfabetica(lista: any[]) {
    lista.sort((a, b) => {
      let nome_a = a.nome ? a.nome : 'a';
      let nome_b = b.nome ? b.nome : 'b';
      return nome_a.localeCompare(nome_b);
    });
    return lista;
  }

  async consultarItemPorNome(nome: string) {
    try {
      this.itemSB = await this.itemServiceSB.consultarPorNome(nome);
      if (this.itemSB) {
        this.regrasItem = await this.regraServiceSB.recuperaRegrasDoItem(
          this.itemSB.id!
        );
        this.tiposDanoItem =
          await this.tiposDanoServiceSB.recuperaTipoDanoDoItem(this.itemSB.id!);
        this.periciasItem = await this.periciaServiceSB.recuperaPericiaItem(
          this.itemSB.id!
        );
        this.referenciaItem = await this.referenciaServiceSB.consultarPorId(
          this.itemSB.id_referencia!
        );
      }
      this.cdr.detectChanges();
    } catch (err) {
      console.error('Erro ao carregar tipos de item', err);
    }
  }

  isOdd(element: any): boolean {
    const index = this.dataSource.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  isOddAS(element: any): boolean {
    const index = this.dataSourceAS.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  isOddAM(element: any): boolean {
    const index = this.dataSourceAM.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  isOddAE(element: any): boolean {
    const index = this.dataSourceAE.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  isOddAF(element: any): boolean {
    const index = this.dataSourceAF.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  limparSelecao() {
    const tela = this.form.get('tela')?.value;
    this.form.reset();
    this.form.get('tela')?.setValue(tela);
    this.objeto = undefined;
    this.itemSB = undefined;
    this.itemArma = undefined;
    this.itemResistencia = undefined;
    this.itemManutencao = undefined;
    this.regrasItem = [];
    this.periciasItem = [];
    this.tiposDanoItem = [];
  }

  seleciona(objeto: Item) {
    this.limparSelecao();

    this.consultarItemPorNome(objeto.nome!);
    this.objeto = this.objetos.find((i) => i.nome === objeto.nome);
    setTimeout(() => {
      if (this.itemSB) {
        this.form.get('id')?.setValue(this.itemSB.id);
        this.form.get('idArma')?.setValue(this.itemSB.id);
        this.form.get('idResistencia')?.setValue(this.itemSB.id);
        this.form.get('idManutencao')?.setValue(this.itemSB.id);
        this.form.get('idTipo')?.setValue(this.itemSB.id_tipo);
        this.form.get('idReferencia')?.setValue(this.itemSB.id_referencia);
        this.form.get('nomeSb')?.setValue(this.itemSB.nome);
        this.form.get('descricao')?.setValue(this.itemSB.descricao);
        this.form.get('paginas')?.setValue(this.itemSB.paginas);
      } else {
        this.form.get('nomeSb')?.setValue(objeto.nome);
        this.form.get('tipoSb')?.setValue(objeto.tipo);
        this.form.get('descricao')?.setValue(objeto.descricao);
        this.form.get('paginas')?.setValue(objeto.paginas);
      }
      this.selecionaArma(objeto);
      this.selecionaManutencao(objeto);
      this.selecionaResistencia(objeto);
    }, 1000);
    this.cdr.detectChanges();
  }

  async selecionaManutencao(objeto: Item) {
    if (this.form.get('idManutencao')?.value) {
      try {
        this.itemManutencao = await this.itemManutencaoSB.consultarPorId(
          this.form.get('idManutencao')?.value
        );
      } catch (err) {
        console.error('Erro ao carregar Item Arma', err);
      }
    }

    if (this.itemManutencao) {
      this.form.get('preco')?.setValue(this.itemManutencao.preco);
      this.form.get('cd')?.setValue(this.itemManutencao.cd_fabricacao);
      this.form
        .get('tempo')
        ?.setValue(this.itemManutencao.tempo_fabricacao_em_horas);
    } else {
      this.form.get('preco')?.setValue(objeto.preco);
      this.form.get('cd')?.setValue(objeto.cd_fabricacao);
      this.form.get('tempo')?.setValue(objeto.tempo_fabricacao_em_horas);
    }
  }

  async selecionaResistencia(objeto: Item) {
    if (this.form.get('idResistencia')?.value) {
      try {
        this.itemResistencia = await this.itemResistenciaSB.consultarPorId(
          this.form.get('idResistencia')?.value
        );
      } catch (err) {
        console.error('Erro ao carregar Item Arma', err);
      }
    }

    if (this.itemResistencia) {
      this.form.get('rd')?.setValue(this.itemResistencia?.reducao_dano);
      this.form.get('pv')?.setValue(this.itemResistencia?.pontos_vida);
    } else {
      this.form.get('rd')?.setValue(objeto.rd);
      this.form.get('pv')?.setValue(objeto.pv);
    }
  }

  async selecionaArma(objeto: Item) {
    if (this.form.get('idArma')?.value) {
      try {
        this.itemArma = await this.itemArmaSB.consultarPorId(
          this.form.get('idArma')?.value
        );
      } catch (err) {
        console.error('Erro ao carregar Item Arma', err);
      }
    }

    if (this.itemArma) {
      this.form.get('dano')?.setValue(this.itemArma.dano);
      this.form.get('margem')?.setValue(this.itemArma.margem_ameaca);
      this.form
        .get('multiplicador')
        ?.setValue(this.itemArma.multiplicador_critico);
      this.form.get('espaco')?.setValue(this.itemArma.espaco);
      this.form
        .get('idAlcance')
        ?.setValue(
          this.alcances.find((i) => i.id === this.itemArma?.id_alcance)?.id
        );
    } else {
      this.form.get('dano')?.setValue(objeto.dano);
      this.form.get('margem')?.setValue(objeto.margem_ameaca);
      this.form.get('multiplicador')?.setValue(objeto.multiplicador_critico);
      this.form
        .get('idAlcance')
        ?.setValue(
          this.alcances.find(
            (i) =>
              i.medida === objeto?.alcance ||
              (objeto?.alcance === 0 && i.medida === 1.5)
          )?.id
        );
      this.form.get('espaco')?.setValue(objeto.espaco);
    }
  }

  async salvar() {
    this.itemSB = {
      id_tipo: this.form.get('idTipo')?.value,
      id_referencia: this.form.get('idReferencia')?.value,
      nome: this.form.get('nomeSb')?.value,
      descricao: this.form.get('descricao')?.value,
      paginas: this.form.get('paginas')?.value,
      caminho_imagem: this.objeto?.imagem,
    };

    this.itemArma = {
      dano: this.form.get('dano')?.value,
      margem_ameaca: this.form.get('margem')?.value,
      multiplicador_critico: this.form.get('multiplicador')?.value,
      espaco: this.form.get('espaco')?.value,
      id_alcance: this.form.get('idAlcance')?.value,
    };

    this.itemResistencia = {
      pontos_vida: this.form.get('pv')?.value,
      reducao_dano: this.form.get('rd')?.value,
    };

    this.itemManutencao = {
      cd_fabricacao: this.form.get('cd')?.value,
      preco: this.form.get('preco')?.value,
      tempo_fabricacao_em_horas: this.form.get('tempo')?.value,
    };

    let id = this.form.get('id')?.value;

    try {
      let resultado = null;
      if (id) {
        resultado = await this.itemServiceSB.atualizar(id, this.itemSB);
        this.itemSB = await this.itemServiceSB.consultarPorNome(
          this.itemSB!.nome!
        );
        id = this.itemSB?.id;
      } else {
        resultado = await this.itemServiceSB.inserir(this.itemSB);
        this.itemSB = await this.itemServiceSB.consultarPorNome(
          this.itemSB!.nome!
        );
        id = this.itemSB?.id;
      }

      if (this.form.get('idResistencia')?.value) {
        await this.itemResistenciaSB.atualizar(id, this.itemResistencia);
      } else {
        this.itemResistencia.id = id;
        await this.itemResistenciaSB.inserir(this.itemResistencia);
      }

      if (this.form.get('idManutencao')?.value) {
        await this.itemManutencaoSB.atualizar(id, this.itemManutencao);
      } else {
        this.itemManutencao.id = id;
        await this.itemManutencaoSB.inserir(this.itemManutencao);
      }

      if (this.form.get('idArma')?.value) {
        await this.itemArmaSB.atualizar(id, this.itemArma);
      } else {
        this.itemArma.id = id;
        this.itemArma.id_item_manutencao = id;
        this.itemArma.id_item_resistencia = id;
        await this.itemArmaSB.inserir(this.itemArma);
      }

      const ri: { id_item: number; id_regra: number }[] = [];
      this.regrasItem.forEach((regraItem) => {
        ri.push({ id_item: id, id_regra: regraItem.id_regra! });
      });

      await this.regraServiceSB.inserirRegras(id, ri);

      const ip: { id_item: number; id_pericia: number }[] = [];
      this.periciasItem.forEach((pericia) => {
        ip.push({ id_item: id, id_pericia: pericia.id_pericia! });
      });

      await this.periciaServiceSB.inserirPericias(id, ip);

      const td: { id_item: number; id_tipo: number }[] = [];
      this.tiposDanoItem.forEach((tipoDano) => {
        td.push({ id_item: id, id_tipo: tipoDano.id_tipo! });
      });

      await this.tiposDanoServiceSB.inserirDanos(id, td);

      alert(this.itemSB!.nome + ' salvo no Banco com sucesso');
      console.log('Retorno do Supabase:', resultado);
    } catch (err) {
      console.error('Erro ao inserir:', err);
    }

    this.objeto = undefined;
  }

  consultar(selecaoChave: boolean, tipo: any): void {
    this.selecaoChave = selecaoChave;
    let filtro = { ...this.form.value };
    if (filtro.nome) {
      filtro.nome = '^' + filtro.nome;
    }

    if (filtro.tracos) {
      filtro.tracos = '';
      this.filtro_traco = this.form.value.tracos;
    }

    filtro.tela = null;
    filtro.tipo = TipoItem.ARMA;
    this.consultarTodos(filtro);
  }

  consultarTodos(filtro: string) {
    this.service.listar(filtro).subscribe({
      next: (response: any[]) => {
        response.sort((a, b) => {
          let nome_a = a.nome ? a.nome : 'a';
          let nome_b = b.nome ? b.nome : 'b';
          return nome_a.localeCompare(nome_b);
        });
        this.objetos = response;
        this.numero_registros = response.length;
        this.cdr.detectChanges();
      },
      error: (response) => {
        console.log(response);
      },
      complete: () => {
        const naoMagico = this.objetos.filter(
          (p) =>
            !(
              p.chave.includes(Chave.ITEM_MAGICO_MENOR) ||
              p.chave.includes(Chave.ITEM_MAGICO_MEDIO) ||
              p.chave.includes(Chave.ITEM_MAGICO_MAIOR)
            )
        );

        this.dataSource = new MatTableDataSource(naoMagico);
        this.dataSource.paginator = this.paginator;
        this.numero_registros = naoMagico.length;

        setTimeout(async () => {
          this.armas_simples = (
          await Promise.all(
            naoMagico.map(async (simples) => {
              const item = await this.itemServiceSB.consultarPorNome(simples.nome!);
              const regrasItem = item && item.id ? await this.regraServiceSB.recuperaRegrasDoItem(item.id) : null;

              const possuiArmasSimples = (regrasItem !== null ? regrasItem!.some((ri) => ri.tb_regra?.nome === Chave.PROFICIENCIA_ARMA_SIMPLES) : false) || (item === null && simples.chave.includes(Chave.PROFICIENCIA_ARMA_SIMPLES))

              return possuiArmasSimples ? simples : null;
            }))
          ).filter((inst) => inst !== null);
          
          this.dataSourceAS = new MatTableDataSource(this.armas_simples);
          this.numero_registros_armas_simples = this.armas_simples.length;

          this.armas_marciais = (
          await Promise.all(
            naoMagico.map(async (marciais) => {
              const item = await this.itemServiceSB.consultarPorNome(marciais.nome!);
              const regrasItem = item && item.id ? await this.regraServiceSB.recuperaRegrasDoItem(item.id) : null;

              const possuiArmaMarcial = (regrasItem !== null ? regrasItem!.some((ri) => ri.tb_regra?.nome === Chave.PROFICIENCIA_ARMA_MARCIAL) : false) || (item === null && marciais.chave.includes(Chave.PROFICIENCIA_ARMA_MARCIAL))

              return possuiArmaMarcial ? marciais : null;
            }))
          ).filter((fer) => fer !== null);
          
          this.dataSourceAM = new MatTableDataSource(this.armas_marciais);
          this.numero_registros_armas_marciais = this.armas_marciais.length;

        this.armas_exoticas = (
          await Promise.all(
            naoMagico.map(async (exoticas) => {
              const item = await this.itemServiceSB.consultarPorNome(exoticas.nome!);
              const regrasItem = item && item.id ? await this.regraServiceSB.recuperaRegrasDoItem(item.id) : null;

              const possuiArmaExotica = (regrasItem !== null ? regrasItem!.some((ri) => ri.tb_regra?.nome === Chave.PROFICIENCIA_ARMA_EXOTICA) : false) || (item === null && exoticas.chave.includes(Chave.PROFICIENCIA_ARMA_EXOTICA))

              return possuiArmaExotica ? exoticas : null;
            }))
          ).filter((fer) => fer !== null);
          
          this.dataSourceAE = new MatTableDataSource(this.armas_exoticas);
          this.numero_registros_armas_exoticas = this.armas_exoticas.length;

        this.armas_fogo = (
          await Promise.all(
            naoMagico.map(async (fogo) => {
              const item = await this.itemServiceSB.consultarPorNome(fogo.nome!);
              const regrasItem = item && item.id ? await this.regraServiceSB.recuperaRegrasDoItem(item.id) : null;

              const possuiArmaFogo = (regrasItem !== null ? regrasItem!.some((ri) => ri.tb_regra?.nome === Chave.PROFICIENCIA_ARMA_DE_FOGO) : false) || (item === null && fogo.chave.includes(Chave.PROFICIENCIA_ARMA_DE_FOGO))

              return possuiArmaFogo ? fogo : null;
            }))
          ).filter((fer) => fer !== null);
          
          this.dataSourceAF = new MatTableDataSource(this.armas_fogo);
          this.numero_registros_armas_de_fogo = this.armas_fogo.length;

        }, 4000);

        this.carregaChaves();
      },
    });
  }

  carregaChaves() {
    if (!this.selecaoChave) {
      this.chaves = [];
      this.chaves = [...new Set(this.objetos.flatMap((item) => item.chave))];
      this.chaves = this.chaves.sort((a, b) => {
        return a.localeCompare(b);
      });
    }
  }

  adicionarPericia(pericia: any) {
    const periciaParaAdicionar = this.pericias.find(
      (r) => r.id === pericia.value
    );
    if (
      !this.periciasItem.find((r) => r.id_pericia === periciaParaAdicionar?.id)
    ) {
      let pericia: PericiaItemSB = {
        id_item: this.form.get('id')?.value,
        id_pericia: periciaParaAdicionar?.id,
        tb_pericia: {
          nome: periciaParaAdicionar?.nome,
        },
      };
      this.periciasItem.push(pericia);
    }
    this.form.get('idPericia')?.setValue(null);
  }

  adicionarRegra(regra: any) {
    const regraParaAdicionar = this.regras.find((r) => r.id === regra.value);
    if (!this.regrasItem.find((r) => r.id_regra === regraParaAdicionar.id)) {
      let regra: RegraItemSB = {
        id_item: this.form.get('id')?.value,
        id_regra: regraParaAdicionar.id,
        tb_regra: {
          nome: regraParaAdicionar.nome,
        },
      };
      this.regrasItem.push(regra);
    }
    this.form.get('idRegra')?.setValue(null);
  }

  adicionarTipoDano(tipoDano: any) {
    const tipoDanoParaAdicionar = this.tiposDano.find(
      (r) => r.id === tipoDano.value
    );
    if (
      !this.tiposDanoItem.find((r) => r.id_tipo === tipoDanoParaAdicionar?.id)
    ) {
      let tipoDano: TipoDanoItemSB = {
        id_item: this.form.get('id')?.value,
        id_tipo: tipoDanoParaAdicionar?.id,
        tb_tipo_dano: {
          nome: tipoDanoParaAdicionar?.nome,
        },
      };
      this.tiposDanoItem.push(tipoDano);
    }
    this.form.get('idTipoDano')?.setValue(null);
  }

  removerRegra(regra: any) {
    this.regrasItem = this.regrasItem.filter(
      (r) => r.id_regra !== regra.id_regra
    );
  }

  removerTipoDano(tipoDanoItem: any) {
    this.tiposDanoItem = this.tiposDanoItem.filter(
      (r) => r.id_tipo !== tipoDanoItem.id_tipo
    );
  }

  removerPericia(periciaItem: any) {
    this.periciasItem = this.periciasItem.filter(
      (r) => r.id_pericia !== periciaItem.id_pericia
    );
  }

  umTerco(preco: number) {
    return Number((preco / 3).toFixed(1));
  }

  umDecimo(preco: number) {
    return Number((preco / 10).toFixed(1));
  }

  novo() {
    this.form.get('idTipo')?.setValue(1);
    this.objeto = {
      id: 1,
      tipo: TipoItem.ARMA,
    } as Item;
  }

  limparFiltros() {
    this.objeto = undefined;
    this.form.reset();
    this.consultar(false, null);
  }
}
