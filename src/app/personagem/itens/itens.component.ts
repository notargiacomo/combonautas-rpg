import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { ItemService } from '../../service/item.service';
import { Item } from '../../model/item';
import { TipoItem } from '../../enum/tipo.item.enum';
import { CaixaInformativaComponent } from '../../components/caixa-informativa.component';
import { MatDialog } from '@angular/material/dialog';
import { Regras } from '../../enum/regras.enum';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Chave } from '../../enum/chave.enum';

@Component({
  selector: 'app-itens',
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
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.scss',
})
export class ItensComponent implements AfterViewInit {
  displayedColumns: string[] = ['nome', 'tipo', 'acao'];

  form!: FormGroup;
  objetos!: Item[];
  objeto: Item | undefined;
  tipos = Object.values(TipoItem);
  chaves: Chave[] = [];

  numero_registros = 0;
  filtro_traco: string = '';

  dataSource = new MatTableDataSource<Item>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private readonly service: ItemService, private fb: FormBuilder) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    

    // console.log(Object.keys(Chave).filter(chave => chave.startsWith("ARMA_")));
    

    this.form = this.fb.group({
      nome: [''],
      chave: [''],
      tipo: [''],
    });

    this.consultar();
  }

  seleciona(objeto: Item) {
    this.objeto = objeto;
  }

  consultar(): void {
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
      next: (response) => {
        response.sort((a, b) => {
          let nome_a = a.nome ? a.nome : 'a';
          let nome_b = b.nome ? b.nome : 'b';
          return nome_a.localeCompare(nome_b);
        });
        this.objetos = response;
        this.numero_registros = response.length;
        this.carregaChaves();
      },
      error: (response) => {
        console.log(response);
      },
      complete: () => {
        this.dataSource = new MatTableDataSource(this.objetos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }

  carregaChaves(){
    this.chaves = [];
    this.chaves = [...new Set(this.objetos.flatMap(item => item.chave))];
    this.chaves = this.chaves.sort((a, b) => {
      return a.localeCompare(b);
    });
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

  readonly dialog = inject(MatDialog);

  openDialog(titulo: string, idTexto: number) {
    this.dialog.open(CaixaInformativaComponent, {
      data: {
        titulo: titulo,
        texto: Object.values(Regras)[idTexto],
      },
    });
  }

    chaveToString(chave:Chave): string{
      let chaveEncontrada = Object.keys(Chave).find(key => Chave[key as keyof typeof Chave] === chave);
      return chaveEncontrada? chaveEncontrada.split("_").join(" "): "";
    }

  limparFiltros() {
    this.objeto = undefined;
    this.form.reset();
    this.consultar();
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

  eMaterialEspecial(objeto: Item): boolean {
    return objeto.tipo === TipoItem.MATERIAL_ESPECIAL;
  }
}
