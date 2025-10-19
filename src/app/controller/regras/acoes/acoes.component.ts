import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { AcoesService } from '@app/service/acao.service';
import { Acao } from '@app/model/acao';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
// import { NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-acoes',
  imports: [
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    // NgFor, NgIf,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    NgClass
  ],
  templateUrl: './acoes.component.html',
  styleUrl: './acoes.component.scss',
  // encapsulation: ViewEncapsulation.None, // Remove o escopo dos estilos
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class AcoesComponent implements OnInit {
  columnsToDisplay = ['nome', 'custo'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Acao | null;
  acoes!: Acao[];
  dataSource = new MatTableDataSource<Acao>();
  form!: FormGroup;
  numero_registros = 0;

  constructor(
    private readonly service: AcoesService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: [],
    });

    this.service.listar(null).subscribe({
      next: (response) => {
        this.acoes = response;
        this.numero_registros = response.length;
      },
      error: (response) => {
        console.log(response);
      },
      complete: () => {
        this.dataSource = new MatTableDataSource(this.acoes);
      },
    });
  }

  isOdd(element: any): boolean {
    const index = this.dataSource.data.indexOf(element);
    return index % 2 !== 0; // Vai adicionar a classe zebra APENAS nas linhas ímpares
  }

  isExpanded(element: Acao) {
    return this.expandedElement === element;
  }

  /** Toggles the expanded state of an element. */
  toggle(element: Acao) {
    this.expandedElement = this.isExpanded(element) ? null : element;
  }

  consultar() {
    console.log(this.form.value);
    let filtro = this.form.value;
    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }
    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.acoes = response;
        this.numero_registros = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
