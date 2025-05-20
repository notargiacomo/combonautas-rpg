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

  constructor(
    private readonly service: ItemService, 
    private readonly itemServiceSB: ItemServiceSupabase, 
    private readonly tipoItemServiceSB: TipoItemServiceSupabase,
    private fb: FormBuilder, 
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [],
      chave: [],
      tipo: [],
    });

    this.consultar(false);
    this.carregarItens();
    this.carregarTiposItem();
  }

  async carregarTiposItem(){
    try {
      this.tiposItem = await this.tipoItemServiceSB.listarTiposItens();
      this.cdr.detectChanges();
    } catch (err) {
      console.error('Erro ao carregar tipos de item', err);
    }
  }

  isOdd(element: any): boolean {
    const index = this.dataSource.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  seleciona(objeto: Item) {
    this.objeto = objeto;
  }

  consultar(selecaoChave: boolean): void {
    this.selecaoChave = selecaoChave;
    let filtro = { ...this.form.value };
    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    if (filtro.tracos) {
      filtro.tracos = '';
      this.filtro_traco = this.form.value.tracos;
    }

    // this.carregarItens();
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
