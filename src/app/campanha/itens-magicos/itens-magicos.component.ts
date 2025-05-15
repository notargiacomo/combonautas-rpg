import { NgIf } from '@angular/common';
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
import { ItemMagicoService } from '../../service/item.magico.service';
import { ItemMagico } from '../../model/item.magico';

@Component({
  selector: 'app-itens-magiscos',
  imports: [
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    //NgFor,
    NgIf,
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
  templateUrl: './itens-magicos.component.html',
  styleUrl: './itens-magicos.component.scss',
})
export class ItensMagicosComponent implements AfterViewInit {
  displayedColumns: string[] = ['nome', 'tipo', 'acao'];

  form!: FormGroup;
  objetos!: ItemMagico[];
  objeto: ItemMagico | undefined;
  tipos = Object.values(TipoItem);
  chaves: Chave[] = [];

  selecaoChave: boolean = false;

  numero_registros = 0;
  filtro_traco: string = '';

  dataSource = new MatTableDataSource<ItemMagico>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private readonly service: ItemMagicoService, private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

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

  eAcessorio(objeto: Item): boolean {
    return objeto.tipo === TipoItem.ACESSORIO;
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

  eEsoterico(objeto: Item): boolean {
    return objeto.tipo === TipoItem.ESOTERICO;
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
  eEncanto(objeto: Item): boolean {
    return objeto.tipo === TipoItem.ENCANTO;
  }

  eMaterialEspecial(objeto: Item): boolean {
    return objeto.tipo === TipoItem.MATERIAL_ESPECIAL;
  }


}
