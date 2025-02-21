import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
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
import { Classe } from '../../model/classe';
import { ClasseService } from '../../service/classe.service';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-classes',
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
    MatTabsModule,
    NgIf
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
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss',
})
export class ClassesComponent implements OnInit {
  classes!: Classe[];
  columnsToDisplay = ['nome', 'referencias', 'paginas'];
  form!: FormGroup;
  referencias = Object.values(Referencia);
  checkboxState: { [key: string]: boolean } = {};
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Classe | null;
  numero_registros=0;

  constructor(
    private readonly classeService: ClasseService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: [],
      referencias: new FormArray([]),
    });

    this.classeService.listar(null).subscribe({
      next: (response) => {
        this.classes = response;
        this.numero_registros = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
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
    this.classeService.listar(filtro).subscribe({
      next: (response) => {
        this.classes = response;
        this.numero_registros = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

      /**
       *
       * DAQUI PARA FRENTE É TUDO SOBRE CALCULO DE FICHA - CLASSE
       *
       */
    
      @Input() classeSelecionada?: Classe;
      @Input() seVeioFicha: boolean = false;
      @Output() classeSelecionadaChange = new EventEmitter<Classe>();
}
