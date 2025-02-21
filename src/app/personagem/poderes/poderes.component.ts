import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { Poder } from '../../model/poder';
import { PoderService } from '../../service/poder.service';
import { MatTabsModule } from '@angular/material/tabs';
import { TipoPoder } from '../../enum/tipo.poder.enum';
import { Deus } from '../../model/deus';
import { MatRadioModule } from '@angular/material/radio';
import { DeusService } from '../../service/deus.service';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-poderes',
  imports: [
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    NgFor,
    NgIf,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './poderes.component.html',
  styleUrl: './poderes.component.scss',
})
export class PoderesComponent {
  objeto: Poder | undefined;
  objetos!: Poder[];
  form!: FormGroup;
  numero_registros = 0;
  deuses: Deus[] = [];
  dataSource = new MatTableDataSource<Poder>();
  displayedColumns: string[] = ['nome', 'tipo', 'acao'];
  tipos = Object.values(TipoPoder);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private readonly service: PoderService,
    private readonly serviceDeus: DeusService,
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
      tipo: [],
      id_deuses: [],
    });

    this.consultar(null);

    
    this.serviceDeus.listar(null).subscribe({
      next: (response) => {
        this.deuses = response;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultar(event: any) {
    if(this.form.value.tipo !== TipoPoder.CONCEDIDO){
      this.form.value.id_deuses = null;
    }
    let filtro = this.form.value;
    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }
    this.service.listar(filtro).subscribe({
      next: (response) => {
        response.sort((a, b) => {
          let nome_a = a.nome ? a.nome : 'a';
          let nome_b = b.nome ? b.nome : 'b';
          return nome_a.localeCompare(nome_b);
        });
        this.objetos = response;
        this.numero_registros = response.length;
      },
      error: (response) => {
        console.log(response);
      },
      complete: () => {
        if (event) {
          console.log(event);
          let poderes: Poder[] = [];
          this.objetos.forEach((element) => {
            if (element.id_deuses?.some((id) => id === Number(event))) {
              poderes.push(element);
            }
          });
          this.objetos = poderes;
          this.numero_registros = this.objetos.length;
        }
        this.dataSource = new MatTableDataSource(this.objetos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }

  seExibeDeuses(){
    return this.form.value.tipo === TipoPoder.CONCEDIDO;
  }

  // selecaoDeuses(event: any): void {
  //   this.consultarPoderesConcedido(event);
  // }

  // consultarPoderesConcedido(event: any) {
  //   console.log(this.form.value);
  //   let filtro = this.form.value;
  //   filtro.tipo = TipoPoder.CONCEDIDO;
  //   if (filtro.nome) {
  //     // regex - in-memory-web-api
  //     filtro.nome = '^' + filtro.nome;
  //   }
  //   this.service.listar(filtro).subscribe({
  //     next: (response) => {
  //       this.poderes_concedido = response;
  //       this.numero_registros_concedido = response.length;
  //     },
  //     error: (response) => {
  //       console.log(response);
  //     },
  //     complete: () => {
  //       if(event){
  //         let poderes : Poder[] = [];
  //         this.poderes_concedido.forEach(
  //           (element) => {
  //               if(element.id_deuses?.includes(Number(event))) {
  //                 poderes.push(element);
  //               }
  //           }
  //         );
  //         this.poderes_concedido = poderes;
  //         this.numero_registros_concedido = this.poderes_concedido.length;
  //       }
  //     }
  //   });

  // }

  seleciona(objeto: Poder) {
    this.objeto = objeto;
  }

  limparFiltros() {
    this.form.reset();
    this.consultar(null);
  }

  nomeDeuses(deuses?: Deus[]): string {
    return deuses ? deuses.map((deus) => deus.nome).join(' ') : '';
  }

  /**
   *
   * DAQUI PARA FRENTE É TUDO SOBRE CALCULO DE FICHA - PODER
   *
   */

  @Input() poderSelecionado?: Poder;
  @Input() seVeioFicha: boolean = false;
  @Output() poderSelecionadoChange = new EventEmitter<Poder>();
}
