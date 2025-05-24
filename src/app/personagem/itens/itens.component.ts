import { NgClass, NgFor, NgIf } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
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
import { ItemService } from '../../service/item.service';
import { ItemServiceSupabase } from '../../service/supaservice/item.service.supabase';
import { TipoItemServiceSupabase } from '../../service/supaservice/tipo.item.service.supabase';
import { ReferenciaServiceSupabase } from '../../service/supaservice/referencia.service.supabase';
import { ItemSB } from '../../model/supamodel/item.sb';
import { RegraServiceSupabase } from '../../service/supaservice/regra.service.supabase';
import { RegraItemSB } from '../../model/supamodel/regra.item.sb';

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
  itemSB: ItemSB = {};
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
  referencia!: {id:number;nome:string};
  referencias: any[] = [];
  regras: any[] = [];
  regrasItem: RegraItemSB[] = [];

  constructor(
    private readonly service: ItemService, 
    private readonly itemServiceSB: ItemServiceSupabase, 
    private readonly tipoItemServiceSB: TipoItemServiceSupabase,
    private readonly referenciaServiceSB: ReferenciaServiceSupabase,
    private readonly regraServiceSB: RegraServiceSupabase,
    private fb: FormBuilder, 
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
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
      descricao: [],
      chave: [],
      idTipo: [],
      tipo: [],
      tipoSb: [],
      idReferencia: [],
      referencia: [],
      idRegra: [],
      regra: [],
      caminhoImagem: [],
      paginas: []
    });

    this.consultar(false);
    this.carregarItens();
    this.carregarTabelasDominio();
  }

  async carregarTabelasDominio(){
    try {
      this.tiposItem = await this.tipoItemServiceSB.listarTiposItens();
      this.tiposItem = this.ordenacaoAlfabetica(this.tiposItem);

      this.referencias = await this.referenciaServiceSB.listarReferencias();
      this.referencias = this.ordenacaoAlfabetica(this.referencias);

      this.regras = await this.regraServiceSB.listarRegras();
      this.regras = this.ordenacaoAlfabetica(this.regras);
    } catch (err) {
      console.error('Erro ao carregar tipos de item', err);
    }
  }

  ordenacaoAlfabetica(lista: any[]){
    lista.sort((a, b) => {
        let nome_a = a.nome ? a.nome : 'a';
        let nome_b = b.nome ? b.nome : 'b';
        return nome_a.localeCompare(nome_b);
    });
    return lista;
  }

  async consultarItemPorNome(nome: string){
    try {
      this.itemSB = await this.itemServiceSB.consultarPorNome(nome);
      this.regrasItem = await this.regraServiceSB.recuperaRegrasDoItem(this.itemSB.id!);
    } catch (err) {
      console.error('Erro ao carregar tipos de item', err);
    }
  }

  isOdd(element: any): boolean {
    const index = this.dataSource.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  seleciona(objeto: Item) {
    this.objeto = this.objetos.find(i => i.nome === objeto.nome);
    this.consultarItemPorNome(objeto.nome!);
    if(this.itemSB?.id!) {
      this.form.get('id')?.setValue(this.itemSB.id);
      this.form.get('idTipo')?.setValue(this.itemSB.id_tipo);
      this.form.get('idReferencia')?.setValue(this.itemSB.id_referencia);
      this.cdr.detectChanges();
      this.form.get('nome')?.setValue(this.itemSB.nome);
      this.form.get('descricao')?.setValue(this.itemSB.descricao);
      this.form.get('paginas')?.setValue(this.itemSB.paginas);
    } else {
      this.form.get('nome')?.setValue(objeto.nome);
      this.form.get('tipoSb')?.setValue(objeto.tipo);
      this.form.get('descricao')?.setValue(objeto.descricao);
      this.form.get('paginas')?.setValue(objeto.paginas);
    }

  }

  async  salvar(){
    this.itemSB!.id_tipo = this.form.get('idTipo')?.value;
    this.itemSB!.id_referencia = this.form.get('idReferencia')?.value;
    this.itemSB!.nome = this.form.get('nome')?.value;
    this.itemSB!.descricao = this.form.get('descricao')?.value;
    this.itemSB!.paginas = this.form.get('paginas')?.value;
    this.itemSB!.caminho_imagem = this.objeto?.imagem;
    const id = this.form.get('id')?.value

    try {
      let resultado = null;
      if(id) {
        resultado = await this.itemServiceSB.atualizar(id, this.itemSB);        
      } else {
        resultado = await this.itemServiceSB.inserir(this.itemSB);
      }

      const idItem = this.form.get('id')?.value;
      const ri: {id_item:number; id_regra:number;}[] = []
      this.regrasItem.forEach((regraItem) => {
        ri.push({id_item: idItem, id_regra: regraItem.id_regra! })
      });

      await this.regraServiceSB.inserirRegras(idItem, ri);

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

  adicionarRegra(regra: any){
    const regraParaAdicionar = this.regras.find(r  => r.id === regra.value)
    if(!this.regrasItem.find(r  => r.id === regraParaAdicionar.id)){
      let regra: RegraItemSB = {
        id_item: this.form.get('id')?.value,
        id_regra: regraParaAdicionar.id,
        tb_regra: {
        nome: regraParaAdicionar.nome
        }
      } 
      this.regrasItem.push(regra);
    }
    this.form.get('idRegra')?.setValue(null)
  }

  removerRegra(regra: any){
    this.regrasItem = this.regrasItem.filter(r  => r.id_regra !== regra.id_regra);
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
