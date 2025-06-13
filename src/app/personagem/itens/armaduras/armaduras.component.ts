import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  signal,
  ViewChild
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
import { ItemArmaduraSB } from '@app/model/supamodel/item.armadura.sb';
import { ItemArmaduraServiceSupabase } from '@app/service/supaservice/item.armadura.service.supabase';
import { Chave } from '../../../enum/chave.enum';
import { TipoItem } from '../../../enum/tipo.item.enum';
import { Item } from '../../../model/item';
import { ItemManutencaoSB } from '../../../model/supamodel/item.manutencao.sb';
import { ItemResistenciaSB } from '../../../model/supamodel/item.resistencia.sb';
import { ItemSB } from '../../../model/supamodel/item.sb';
import { PericiaItemSB } from '../../../model/supamodel/pericia.item.sb';
import { PericiaSB } from '../../../model/supamodel/pericia.sb';
import { ReferenciaItemSB } from '../../../model/supamodel/referencia.item.sb';
import { RegraItemSB } from '../../../model/supamodel/regra.item.sb';
import { ItemService } from '../../../service/item.service';
import { AlcanceServiceSupabase } from '../../../service/supaservice/alcance.service.supabase';
import { ItemManutencaoServiceSupabase } from '../../../service/supaservice/item.manutencao.service.supabase';
import { ItemResistenciaServiceSupabase } from '../../../service/supaservice/item.resistencia.service.supabase';
import { ItemServiceSupabase } from '../../../service/supaservice/item.service.supabase';
import { PericiaServiceSupabase } from '../../../service/supaservice/pericia.service.supabase';
import { ReferenciaServiceSupabase } from '../../../service/supaservice/referencia.service.supabase';
import { RegraServiceSupabase } from '../../../service/supaservice/regra.service.supabase';
import { TipoDanoServiceSupabase } from '../../../service/supaservice/tipo.dano.service.supabase';
import { TipoItemServiceSupabase } from '../../../service/supaservice/tipo.item.service.supabase';
@Component({
  selector: 'app-armaduras',
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
  templateUrl: './armaduras.component.html',
  styleUrl: './armaduras.component.scss'
})
export class ArmadurasComponent {
  dataSourceRegraTree: RegraTree[] = [];
  conceitos: RegraTree[] = [];

  childrenAccessor = (node: RegraTree): RegraTree[] => node.children ?? [];
  hasChild = (_: number, node: RegraTree) => !!node.children && node.children.length > 0;

  readonly panelOpenState = signal(false);
  displayedColumns: string[] = ['nome', 'acao'];
  regraSelecionada?: RegraTree;

  form!: FormGroup;
  objetos!: Item[];

  armadura_leve!: Item[];
  armadura_pesada!: Item[];

  tiposItem: any[] = [];
  chaves: Chave[] = [];

  selecaoChave: boolean = false;

  numero_registros = 0;
  numero_registros_armadura_leve = 0;
  numero_registros_armadura_pesada = 0;

  filtro_traco: string = '';

  dataSource = new MatTableDataSource<Item>();
  dataSourceAL = new MatTableDataSource<Item>();
  dataSourceAP = new MatTableDataSource<Item>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  edicao: boolean = false;

  objeto: Item | undefined;

  itemSB?: ItemSB;
  itemArmadura?: ItemArmaduraSB;
  itemResistencia?: ItemResistenciaSB;
  itemManutencao?: ItemManutencaoSB;

  referencia!: { id: number; nome: string };
  referencias: any[] = [];

  regras: any[] = [];
  regrasItem: RegraItemSB[] = [];

  pericias: PericiaSB[] = [];
  periciasItem: PericiaItemSB[] = [];

  referenciaItem?: ReferenciaItemSB;

  tempos: any[] = [8, 40, 160];

  constructor(
    private readonly service: ItemService,
    private readonly itemServiceSB: ItemServiceSupabase,
    private readonly tipoItemServiceSB: TipoItemServiceSupabase,
    private readonly referenciaServiceSB: ReferenciaServiceSupabase,
    private readonly regraServiceSB: RegraServiceSupabase,
    private readonly tiposDanoServiceSB: TipoDanoServiceSupabase,
    private readonly periciaServiceSB: PericiaServiceSupabase,
    private itemManutencaoSB: ItemManutencaoServiceSupabase,
    private itemArmaduraSB: ItemArmaduraServiceSupabase,
    private itemResistenciaSB: ItemResistenciaServiceSupabase,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  async ngAfterViewInit() {
    this.dataSourceAL = new MatTableDataSource<Item>();
    this.dataSourceAL.paginator = this.paginator;
    this.dataSourceAL.sort = this.sort;

    this.dataSourceAP = new MatTableDataSource<Item>();
    this.dataSourceAP.paginator = this.paginator;
    this.dataSourceAP.sort = this.sort;
  }
  
  async ngOnInit() {

    this.itemSB = new ItemSB();
    const logado = sessionStorage.getItem('logado') || '';

    if (logado) {
      this.edicao = true;
      const login = sessionStorage.getItem('login') || '';
      console.log('Usuário logado:', login);
    } else {
      console.log('Usuário não está logado');
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
      defesa: [],
      penalidade: [],
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


    this.consultar(false, null);
    this.carregarItens();
    this.carregarTabelasDominio();

    this.pericias.sort((a, b) => {
      let nome_a = a ? a.nome : 'a';
      let nome_b = b ? b.nome : 'b';
      return nome_a!.localeCompare(nome_b!);
    });

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

      this.regras = await this.regraServiceSB.carregarCombo(38);
      // this.regras = this.ordenacaoAlfabetica(this.regras);

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

  isOddAL(element: any): boolean {
    const index = this.dataSourceAL.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  isOddAP(element: any): boolean {
    const index = this.dataSourceAP.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  limparSelecao() {
    const tela = this.form.get('tela')?.value;
    this.form.reset();
    this.form.get('tela')?.setValue(tela);
    this.objeto = undefined;
    this.itemSB = undefined;
    this.itemArmadura = undefined;
    this.itemResistencia = undefined;
    this.itemManutencao = undefined;
    this.regrasItem = [];
    this.periciasItem = [];
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
        this.itemArmadura = await this.itemArmaduraSB.consultarPorId(
          this.form.get('idArma')?.value
        );
      } catch (err) {
        console.error('Erro ao carregar Item Arma', err);
      }
    }

    if (this.itemArmadura) {
      this.form.get('defesa')?.setValue(this.itemArmadura.defesa);
      this.form.get('penalidade')?.setValue(this.itemArmadura.penalidade);
      this.form.get('espaco')?.setValue(this.itemArmadura.espaco);
      this.form
    } else {
      this.form.get('defesa')?.setValue(objeto.defesa);
      this.form.get('penalidade')?.setValue(objeto.penalidade);
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

    this.itemArmadura = {
      defesa: this.form.get('defesa')?.value,
      penalidade: this.form.get('penalidade')?.value,
      espaco: this.form.get('espaco')?.value,
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
        await this.itemArmaduraSB.atualizar(id, this.itemArmadura);
      } else {
        this.itemArmadura.id = id;
        this.itemArmadura.id_item_manutencao = id;
        this.itemArmadura.id_item_resistencia = id;
        await this.itemArmaduraSB.inserir(this.itemArmadura);
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
    filtro.tipo = TipoItem.ARMADURA;
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
        this.dataSource.sort = this.sort;
        this.numero_registros = naoMagico.length;

        this.armadura_leve = naoMagico.filter((p) =>
          p.chave.includes(Chave.PROFICIENCIA_ARMADURA_LEVE)
        );
        this.armadura_pesada = naoMagico.filter((p) =>
          p.chave.includes(Chave.PROFICIENCIA_ARMADURA_PESADA)
        );

        this.dataSourceAL = new MatTableDataSource(this.armadura_leve);
        this.dataSourceAL.paginator = this.paginator;
        this.dataSourceAL.sort = this.sort;
        this.numero_registros_armadura_leve = this.armadura_leve.length;

        this.dataSourceAP = new MatTableDataSource(this.armadura_pesada);
        this.dataSourceAP.paginator = this.paginator;
        this.dataSourceAP.sort = this.sort;
        this.numero_registros_armadura_pesada = this.armadura_pesada.length;

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

  umDecimo(preco: number) {
    return Number((preco / 10).toFixed(1));
  }

  limparFiltros() {
    this.objeto = undefined;
    this.form.reset();
    this.consultar(false, null);
  }

}
