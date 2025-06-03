import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
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
import { Chave } from '../../enum/chave.enum';
import { TipoItem } from '../../enum/tipo.item.enum';
import { Item } from '../../model/item';
import { AlcanceSB } from '../../model/supamodel/alcance.sb';
import { ItemArmaSB } from '../../model/supamodel/item.arma.sb';
import { ItemManutencaoSB } from '../../model/supamodel/item.manutencao.sb';
import { ItemResistenciaSB } from '../../model/supamodel/item.resistencia.sb';
import { ItemSB } from '../../model/supamodel/item.sb';
import { PericiaItemSB } from '../../model/supamodel/pericia.item.sb';
import { PericiaSB } from '../../model/supamodel/pericia.sb';
import { RegraItemSB } from '../../model/supamodel/regra.item.sb';
import { TipoDanoItemSB } from '../../model/supamodel/tipo.dano.item.sb';
import { TipoDanoSB } from '../../model/supamodel/tipo.dano.sb';
import { ItemService } from '../../service/item.service';
import { AlcanceServiceSupabase } from '../../service/supaservice/alcance.service.supabase';
import { ItemArmaServiceSupabase } from '../../service/supaservice/item.arma.service.supabase';
import { ItemManutencaoServiceSupabase } from '../../service/supaservice/item.manutencao.service.supabase';
import { ItemResistenciaServiceSupabase } from '../../service/supaservice/item.resistencia.service.supabase';
import { ItemServiceSupabase } from '../../service/supaservice/item.service.supabase';
import { PericiaServiceSupabase } from '../../service/supaservice/pericia.service.supabase';
import { ReferenciaServiceSupabase } from '../../service/supaservice/referencia.service.supabase';
import { RegraServiceSupabase } from '../../service/supaservice/regra.service.supabase';
import { TipoDanoServiceSupabase } from '../../service/supaservice/tipo.dano.service.supabase';
import { TipoItemServiceSupabase } from '../../service/supaservice/tipo.item.service.supabase';

@Component({
  selector: 'app-itens',
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
  ],
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.scss',
})
export class ItensComponent implements AfterViewInit {
  displayedColumns: string[] = ['nome', 'tipo', 'acao'];

  form!: FormGroup;
  objetos!: Item[];
  objeto: Item | undefined;
  itemSB!: ItemSB;
  itemArma?: ItemArmaSB;
  itemResistencia?: ItemResistenciaSB;
  itemManutencao?: ItemManutencaoSB;
  tiposItem: any[] = [];
  chaves: Chave[] = [];

  selecaoChave: boolean = false;

  numero_registros = 0;
  filtro_traco: string = '';

  dataSource = new MatTableDataSource<Item>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  edicao: boolean = false;
  referencia!: { id: number; nome: string };
  referencias: any[] = [];
  regras: any[] = [];
  regrasItem: RegraItemSB[] = [];
  pericias: PericiaSB[] = [];
  periciasItem: PericiaItemSB[] = [];
  alcances: AlcanceSB[] = [];
  tiposDano: TipoDanoSB[] = [];
  tiposDanoItem: TipoDanoItemSB[] = [];
  tempos: any[] = [8, 40, 160];

  constructor(
    private readonly service: ItemService,
    private readonly itemServiceSB: ItemServiceSupabase,
    private readonly tipoItemServiceSB: TipoItemServiceSupabase,
    private readonly referenciaServiceSB: ReferenciaServiceSupabase,
    private readonly regraServiceSB: RegraServiceSupabase,
    private readonly tiposDanoServiceSB: TipoDanoServiceSupabase,
    private readonly alcanceServiceSB: AlcanceServiceSupabase,
    private readonly periciaServiceSB: PericiaServiceSupabase,
    private itemManutencaoSB: ItemManutencaoServiceSupabase,
    private itemArmaSB: ItemArmaServiceSupabase,
    private itemResistenciaSB: ItemResistenciaServiceSupabase,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.itemSB = new ItemSB(this.cdr);
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
      idArma: [],
      dano: [],
      margem: [],
      multiplicador: [],
      idAlcance: [],
      idTipoDano: [],
      tipoDano: [],
      espaco: [],
      idResistencia: [],
      rd: [],
      pv: [],
      idManutencao: [],
      preco: [],
      cd: [],
      tempo: [],
    });

    this.consultar(false);
    this.carregarItens();
    this.carregarTabelasDominio();

    this.pericias.sort((a, b) => {
      let nome_a = a ? a.nome : 'a';
      let nome_b = b ? b.nome : 'b';
      return nome_a!.localeCompare(nome_b!);
    });
  }

  async carregarTabelasDominio() {
    try {
      this.tiposItem = await this.tipoItemServiceSB.listarTiposItens();
      this.tiposItem = this.ordenacaoAlfabetica(this.tiposItem);

      this.referencias = await this.referenciaServiceSB.listar();
      this.referencias = this.ordenacaoAlfabetica(this.referencias);

      this.regras = await this.regraServiceSB.listar();
      this.regras = this.ordenacaoAlfabetica(this.regras);

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
      this.regrasItem = await this.regraServiceSB.recuperaRegrasDoItem(
        this.itemSB.id!
      );
      this.tiposDanoItem = await this.tiposDanoServiceSB.recuperaTipoDanoDoItem(
        this.itemSB.id!
      );
      this.periciasItem = await this.periciaServiceSB.recuperaPericiaItem(
        this.itemSB.id!
      );
    } catch (err) {
      console.error('Erro ao carregar tipos de item', err);
    }
  }

  isOdd(element: any): boolean {
    const index = this.dataSource.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  seleciona(objeto: Item) {
    this.consultarItemPorNome(objeto.nome!);
    this.objeto = this.objetos.find((i) => i.nome === objeto.nome);
    setTimeout(() => {
      if (this.itemSB?.id!) {
        this.form.get('id')?.setValue(this.itemSB.id);
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
    }, 1000);
    this.selecionaArma(objeto);
    this.selecionaManutencao(objeto);
    this.selecionaResistencia(objeto);
    this.cdr.detectChanges();
  }

  selecionaManutencao(objeto: Item) {
    if (this.itemManutencao?.id) {
      this.form.get('preco')?.setValue(this.itemManutencao.preco);
      this.form.get('cd')?.setValue(this.itemManutencao.cd_fabricacao);
      this.form.get('tempo')?.setValue(this.itemManutencao.tempo_fabricacao_em_horas);
    } else {
      this.form.get('preco')?.setValue(objeto.preco);
      this.form.get('cd')?.setValue(objeto.cd_fabricacao);
      this.form.get('tempo')?.setValue(objeto.tempo_fabricacao_em_horas);
      this.form.get('pericia')?.setValue(objeto.pericia);
    }
  }

  selecionaResistencia(objeto: Item) {
    if (this.itemResistencia?.id) {
      this.form.get('rd')?.setValue(this.itemResistencia?.reducao_dano);
      this.form.get('pv')?.setValue(this.itemResistencia?.pontos_vida);
    } else {
      this.form.get('rd')?.setValue(objeto.rd);
      this.form.get('pv')?.setValue(objeto.pv);
    }
  }

  selecionaArma(objeto: Item) {
    if (this.itemArma?.id) {
      this.form.get('dano')?.setValue(this.itemArma.dano);
      this.form.get('margem')?.setValue(this.itemArma.margem_ameaca);
      this.form
        .get('multiplicador')
        ?.setValue(this.itemArma.multiplicador_critico);
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
    this.itemSB!.id_tipo = this.form.get('idTipo')?.value;
    this.itemSB!.id_referencia = this.form.get('idReferencia')?.value;
    this.itemSB!.nome = this.form.get('nomeSb')?.value;
    this.itemSB!.descricao = this.form.get('descricao')?.value;
    this.itemSB!.paginas = this.form.get('paginas')?.value;
    this.itemSB!.caminho_imagem = this.objeto?.imagem;

    const id = this.form.get('id')?.value;

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

    try {
      let resultado = null;
      if (id) {
        resultado = await this.itemServiceSB.atualizar(id, this.itemSB);
      } else {
        resultado = await this.itemServiceSB.inserir(this.itemSB);
      }

      const itemResistencia = await this.itemResistenciaSB.consultarPorId(id);
      if (itemResistencia.length > 0) {
        await this.itemResistenciaSB.atualizar(id, this.itemResistencia);
      } else {
        this.itemResistencia.id = id;
        await this.itemResistenciaSB.inserir(this.itemResistencia);
      }

      const itemManutencao = await this.itemManutencaoSB.consultarPorId(id);
      if (itemManutencao.length > 0) {
        await this.itemManutencaoSB.atualizar(id, this.itemManutencao);
      } else {
        this.itemManutencao.id = id;
        await this.itemManutencaoSB.inserir(this.itemManutencao);
      }

      const itemArma = await this.itemArmaSB.consultarPorId(id);
      if (itemArma.length > 0) {
        this.itemArma.id_item_manutencao = id;
        this.itemArma.id_item_resistencia = id;
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
  }

  consultar(selecaoChave: boolean): void {
    this.selecaoChave = selecaoChave;
    let filtro = { ...this.form.value };
    if (filtro.nome) {
      filtro.nome = '^' + filtro.nome;
    }

    if (filtro.tracos) {
      filtro.tracos = '';
      this.filtro_traco = this.form.value.tracos;
    }
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
        this.dataSource = new MatTableDataSource(this.objetos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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

  limparFiltros() {
    this.objeto = undefined;
    this.form.reset();
    this.consultar(false);
  }

  eArma(objeto: Item): boolean {
    return objeto.tipo === TipoItem.ARMA;
  }

  eMunicao(objeto: Item): boolean {
    return objeto.tipo === TipoItem.MUNICAO;
  }

  eArmadura(objeto: Item): boolean {
    return objeto.tipo === TipoItem.ARMADURA;
  }

  eEscudo(objeto: Item): boolean {
    return objeto.tipo === TipoItem.ESCUDO;
  }

  eEquipamento(objeto: Item): boolean {
    return objeto.tipo === TipoItem.EQUIPAMENTO_AVENTURA;
  }

  eFerramenta(objeto: Item): boolean {
    return objeto.tipo === TipoItem.FERRAMENTA;
  }

  eVestuario(objeto: Item): boolean {
    return objeto.tipo === TipoItem.VESTUARIO;
  }

  eAcessorio(objeto: Item): boolean {
    return objeto.tipo === TipoItem.ACESSORIO;
  }

  eEsoterico(objeto: Item): boolean {
    return objeto.tipo === TipoItem.ESOTERICO;
  }

  eEncanto(objeto: Item): boolean {
    return objeto.tipo === TipoItem.ENCANTO;
  }

  eAlquimico(objeto: Item): boolean {
    return objeto.tipo === TipoItem.ALQUIMICO;
  }

  eAlimentacao(objeto: Item): boolean {
    return objeto.tipo === TipoItem.ALIMENTACAO;
  }

  eAnimal(objeto: Item): boolean {
    return objeto.tipo === TipoItem.ANIMAL;
  }

  eVeiculo(objeto: Item): boolean {
    return objeto.tipo === TipoItem.VEICULO;
  }

  eServico(objeto: Item): boolean {
    return objeto.tipo === TipoItem.SERVICO;
  }

  eMelhoria(objeto: Item): boolean {
    return objeto.tipo === TipoItem.MELHORIA;
  }

  eMaterialEspecial(objeto: Item): boolean {
    return objeto.tipo === TipoItem.MATERIAL_ESPECIAL;
  }
}
