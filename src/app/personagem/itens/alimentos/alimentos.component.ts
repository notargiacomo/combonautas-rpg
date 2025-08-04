import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, signal, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { Chave } from '@app/enum/chave.enum';
import { TipoItem } from '@app/enum/tipo.item.enum';
import { Item } from '@app/model/item';
import { Regra } from '@app/model/regra';
import { RegraTree } from '@app/model/RegraTree';
import { ItemAlimentoSB } from '@app/model/supamodel/item.alimento.sb';
import { ItemManutencaoSB } from '@app/model/supamodel/item.manutencao.sb';
import { ItemSB } from '@app/model/supamodel/item.sb';
import { PericiaItemSB } from '@app/model/supamodel/pericia.item.sb';
import { PericiaSB } from '@app/model/supamodel/pericia.sb';
import { ReferenciaItemSB } from '@app/model/supamodel/referencia.item.sb';
import { RegraItemSB } from '@app/model/supamodel/regra.item.sb';
import { TipoDanoItemSB } from '@app/model/supamodel/tipo.dano.item.sb';
import { ItemService } from '@app/service/item.service';
import { ItemAlimentoDao } from '@app/service/dao/item/item.alimento.dao';
import { ItemManutencaoDao } from '@app/service/dao/item/item.manutencao.dao';
import { ItemDao } from '@app/service/dao/item/item.dao';
import { PericiaDao } from '@app/service/dao/pericia.dao';
import { ReferenciaDao } from '@app/service/dao/referencia.dao';
import { RegraDao } from '@app/service/dao/regra.dao';
import { TipoDanoDao } from '@app/service/dao/tipo.dano.dao';
import { TipoItemDao } from '@app/service/dao/tipo.item.dao';

@Component({
  selector: 'app-alimentos',
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
  templateUrl: './alimentos.component.html',
  styleUrl: './alimentos.component.scss'
})
export class AlimentosComponent implements OnInit{
  dataSourceRegraTree: RegraTree[] = [];
  conceitos: RegraTree[] = [];
  childrenAccessor = (node: RegraTree): RegraTree[] => node.children ?? [];
  hasChild = (_: number, node: RegraTree) =>
    !!node.children && node.children.length > 0;

  readonly panelOpenState = signal(false);
  displayedColumns: string[] = ['nome', 'acao'];
  regraSelecionada?: RegraTree;

  form!: FormGroup;
  objetos!: Item[];
  pratos_especiais!: Item[];
  pratos_especiais_divinos!: Item[];
  bebidas!: Item[];

  tiposItem: any[] = [];
  chaves: Chave[] = [];

  selecaoChave: boolean = false;

  numero_registros = 0;
  numero_registros_pratos_especiais = 0;
  numero_registros_pratos_especiais_divinos = 0;
  numero_registros_bebidas = 0;
  filtro_traco: string = '';

  dataSource = new MatTableDataSource<Item>();
  dataSourcePE = new MatTableDataSource<Item>();
  dataSourcePED = new MatTableDataSource<Item>();
  dataSourceB = new MatTableDataSource<Item>();

  @ViewChild('paginator') paginator!: MatPaginator;

  edicao: boolean = false;

  objeto: Item | undefined;
  itemSB?: ItemSB;
  itemManutencao?: ItemManutencaoSB;
  itemAlimento?: ItemAlimentoSB;
  referencia!: { id: number; nome: string };
  referencias: any[] = [];
  regras: any[] = [];
  regrasItem: RegraItemSB[] = [];
  pericias: PericiaSB[] = [];
  periciasItem: PericiaItemSB[] = [];
  referenciaItem?: ReferenciaItemSB;
  tiposDanoItem: TipoDanoItemSB[] = [];
  tempos: any[] = [8, 40, 160];

  constructor(
    private readonly service: ItemService,
    private readonly itemServiceSB: ItemDao,
    private readonly tipoItemServiceSB: TipoItemDao,
    private readonly referenciaServiceSB: ReferenciaDao,
    private readonly regraServiceSB: RegraDao,
    private readonly tiposDanoServiceSB: TipoDanoDao,
    private readonly periciaServiceSB: PericiaDao,
    private readonly itemAlimentoServiceSupabase: ItemAlimentoDao,
    private itemManutencaoSB: ItemManutencaoDao,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
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
      espaco: [],
      rd: [],
      pv: [],
      idAlimento: [],
      idManutencao: [],
      preco: [],
      cd: [],
      tempo: [],
      tela: ([] = ['ALFABETICA']),
    });

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
    this.dataSourceRegraTree.push(await this.regraServiceSB.carregarMenusConceito({ id: 60 }));
    this.cdr.detectChanges();

  }

  selecionaRegra(regraSelecionada: any) {
    this.regraSelecionada = regraSelecionada;
  }

  async carregarTabelasDominio() {
    try {
      this.tiposItem = await this.tipoItemServiceSB.listarTiposItens();
      this.tiposItem = this.ordenacaoAlfabetica(this.tiposItem);

      this.referencias = await this.referenciaServiceSB.listar();
      this.referencias = this.ordenacaoAlfabetica(this.referencias);

      this.regraServiceSB.carregarCombo(60).then((regras: Regra[]) => {
        regras.forEach((r) => {
          this.regras.push(r);
        });
        this.regras = this.ordenacaoAlfabetica(this.regras);
      })
      .catch((error) => {
        console.error('Erro ao carregar regras', error);
      });

      this.regraServiceSB.carregarCombo(52).then((regras: Regra[]) => {
        regras.forEach((r) => {
          this.regras.push(r);
        });
        this.regras = this.ordenacaoAlfabetica(this.regras);
      })
      .catch((error) => {
        console.error('Erro ao carregar regras', error);
      });

      this.pericias = await this.periciaServiceSB.listar();

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

  isOddPE(element: any): boolean {
    const index = this.dataSourcePE.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  isOddPED(element: any): boolean {
    const index = this.dataSourcePED.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  isOddB(element: any): boolean {
    const index = this.dataSourceB.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  limparSelecao() {
    const tela = this.form.get('tela')?.value;
    this.form.reset();
    this.form.get('tela')?.setValue(tela);
    this.objeto = undefined;
    this.itemSB = undefined;
    this.itemAlimento = undefined;
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
        this.form.get('idAlimento')?.setValue(this.itemSB.id);
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
      this.selecionaAlimento(objeto);
      this.selecionaManutencao(objeto);
    }, 2000);
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

  async selecionaAlimento(objeto: Item) {
    if (this.form.get('idAlimento')?.value) {
      try {
        this.itemAlimento = await this.itemAlimentoServiceSupabase.consultarPorId(
          this.form.get('idAlimento')?.value
        );
      } catch (err) {
        console.error('Erro ao carregar Item Arma', err);
      }
    }

    if (this.itemAlimento) {
      this.form.get('espaco')?.setValue(this.itemAlimento.espaco);
    } else {
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

    this.itemAlimento = {
      espaco: this.form.get('espaco')?.value,
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

      if (this.form.get('idManutencao')?.value) {
        await this.itemManutencaoSB.atualizar(id, this.itemManutencao);
      } else {
        this.itemManutencao.id = id;
        await this.itemManutencaoSB.inserir(this.itemManutencao);
      }

      if (this.form.get('idAlimento')?.value) {
        await this.itemAlimentoServiceSupabase.atualizar(id, this.itemAlimento);
      } else {
        this.itemAlimento.id = id;
        this.itemAlimento.id_item_manutencao = id;
        await this.itemAlimentoServiceSupabase.inserir(this.itemAlimento);
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
    filtro.tipo = TipoItem.ALIMENTACAO;
    this.consultarTodos(filtro);
  }

  async carregarItens() {
    try {
      this.objetos = await this.itemServiceSB.listarItens();
      this.numero_registros = this.objetos.length;
    } catch (err) {
      console.error('Erro ao carregar itens', err);
    }
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

        this.pratos_especiais = naoMagico.filter((p) =>
          p.chave.includes(Chave.PRATO_ESPECIAL)
        );

        setTimeout(async () => {
          this.pratos_especiais = (
          await Promise.all(
            naoMagico.map(async (prato_especial) => {
              const item = await this.itemServiceSB.consultarPorNome(prato_especial.nome!);
              const regrasItem = item && item.id ? await this.regraServiceSB.recuperaRegrasDoItem(item.id) : null;

              const possuiPratoEspecial = (regrasItem !== null ? regrasItem!.some((ri) => ri.tb_regra?.nome === Chave.PRATO_ESPECIAL) : false) || (item === null &&prato_especial.chave.includes(Chave.PRATO_ESPECIAL))

              return possuiPratoEspecial ? prato_especial : null;
            }))
          ).filter((ped) => ped !== null);
          
          this.dataSourcePE = new MatTableDataSource(this.pratos_especiais);
          this.numero_registros_pratos_especiais = this.pratos_especiais.length;

          this.pratos_especiais_divinos = (
          await Promise.all(
            naoMagico.map(async (prato_especial_divino) => {
              const item = await this.itemServiceSB.consultarPorNome(prato_especial_divino.nome!);
              const regrasItem = item && item.id ? await this.regraServiceSB.recuperaRegrasDoItem(item.id) : null;

              const possuiPratoEspecialDivino = (regrasItem !== null ? regrasItem!.some((ri) => ri.tb_regra?.nome === Chave.PRATO_ESPECIAL_DIVINO) : false) || (item === null && prato_especial_divino.chave.includes(Chave.PRATO_ESPECIAL_DIVINO))

              return possuiPratoEspecialDivino ? prato_especial_divino : null;
            }))
          ).filter((ped) => ped !== null);
          
          this.dataSourcePED = new MatTableDataSource(this.pratos_especiais_divinos);
          this.numero_registros_pratos_especiais_divinos = this.pratos_especiais_divinos.length;

          this.bebidas = (
          await Promise.all(
            naoMagico.map(async (bebidas) => {
              const item = await this.itemServiceSB.consultarPorNome(bebidas.nome!);
              const regrasItem = item && item.id ? await this.regraServiceSB.recuperaRegrasDoItem(item.id) : null;

              const possuiBebidas = (regrasItem !== null ? regrasItem!.some((ri) => ri.tb_regra?.nome === Chave.BEBIDA) : false) || (item === null && bebidas.chave.includes(Chave.BEBIDA))

              return possuiBebidas ? bebidas : null;
            }))
          ).filter((ped) => ped !== null);
          
          this.dataSourceB = new MatTableDataSource(this.bebidas);
          this.numero_registros_bebidas = this.bebidas.length;

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

  removerRegra(regra: any) {
    this.regrasItem = this.regrasItem.filter(
      (r) => r.id_regra !== regra.id_regra
    );
  }

  removerPericia(periciaItem: any) {
    this.periciasItem = this.periciasItem.filter(
      (r) => r.id_pericia !== periciaItem.id_pericia
    );
  }

  consultarTracosTodosItens(itens: Item[]): Item[] {
    let itens_filtrado: Item[] = [];
    if (this.filtro_traco.length !== 0) {
      itens.forEach((arma) => {
        arma.chave?.forEach((traco) => {
          if (
            traco
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .includes(
                this.filtro_traco
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
              )
          ) {
            if (!itens_filtrado.includes(arma)) {
              itens_filtrado.push(arma);
            }
          }
        });
      });
    }

    return itens_filtrado;
  }

  umTerco(preco: number) {
    return Number((preco / 3).toFixed(1));
  }

  novo() {
    this.form.get('idTipo')?.setValue(10);
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

  visao(visao: string){
    let seVisao = false;
    if(this.form != undefined) {
      seVisao = this.form.get('tela')?.value == visao;
    }

    return seVisao;
  }
}
