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
import { Referencia } from '../../enum/referencia.enum';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgFor, NgIf } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
  templateUrl: './origens.component.html',
  styleUrl: './origens.component.scss',
})
export class OrigensComponent implements OnInit {
  origens!: Origem[];
  columnsToDisplay = ['nome', 'regiao', 'referencias', 'paginas'];
  form!: FormGroup;
  referencias = Object.values(Referencia);
  checkboxState: { [key: string]: boolean } = {};
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Origem | null;
  numero_registros = 0;

  constructor(
    private readonly origemService: OrigemService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: [],
      referencias: new FormArray([]),
    });

    this.origemService.listar(null).subscribe({
      next: (response) => {
        this.origens = response;
        this.numero_registros = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  checkReferencia(referencia: Referencia, isChecked: boolean): void {
    const formArray = this.form.controls['referencias'] as FormArray;
    if (isChecked) {
      formArray.push(new FormControl(referencia));
    } else {
      const index = formArray.controls.findIndex(
        (item) => item.value === referencia
      );
      formArray.removeAt(index);
    }

    this.consultar();
  }

  limparFiltros() {
    this.referencias.forEach((referencia) => {
      this.checkboxState[referencia] = false;
    });

    this.form.reset();
    this.consultar();
  }

  consultar() {
    console.log(this.form.value);
    let filtro = this.form.value;
    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }
    this.origemService.listar(filtro).subscribe({
      next: (response) => {
        this.origens = response;
        this.numero_registros = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
