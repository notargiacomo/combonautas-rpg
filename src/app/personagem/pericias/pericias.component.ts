import { Component, OnInit } from '@angular/core';
import { OrigemService } from '../../service/origem.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Origem } from '../../model/origem';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgFor, NgIf } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { PericiasService } from '../../service/pericia.service';
import { Atributo } from '../../enum/atributo.enum';

@Component({
  selector: 'app-origens',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgIf,
    NgFor,
  ],
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
  templateUrl: './pericias.component.html',
  styleUrl: './pericias.component.scss',
})
export class PericiasComponent implements OnInit {
  objetos!: Origem[];
  columnsToDisplay = ['nome', 'atributo'];
  form!: FormGroup;
  atributos = Object.values(Atributo);
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Origem | null;
  numero_registros = 0;

  constructor(
    private readonly periciasService: PericiasService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: [],
      atributo: []
    });

    this.periciasService.listar(null).subscribe({
      next: (response) => {
        this.objetos = response;
        this.numero_registros = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  limparFiltros() {
    this.form?.get('atributo')?.setValue(null);
    this.form.reset();
    this.consultar();
  }

  selecaoAtributos(event: any): void {
    this.form.controls['atributo'].setValue(event);
    this.consultar();
  }

  consultar() {
    console.log(this.form.value);
    let filtro = this.form.value;
    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }
    this.periciasService.listar(filtro).subscribe({
      next: (response) => {
        this.objetos = response;
        this.numero_registros = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
