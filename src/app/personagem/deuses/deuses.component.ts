import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Deus } from '../../model/deus';
import { DeusService } from '../../service/deus.service';
import { MatTabsModule } from '@angular/material/tabs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-deuses',
  imports: [
      MatTableModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      MatRadioModule,
      MatInputModule,
      MatFormFieldModule,
      ReactiveFormsModule,
        MatTabsModule],
  templateUrl: './deuses.component.html',
  styleUrl: './deuses.component.scss',
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
export class DeusesComponent implements OnInit {

  deuses!: Deus[];
  columnsToDisplay = ['nome', 'referencias', 'paginas'];
  form!: FormGroup;
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Deus | null;
  numero_registros = 0;

  constructor(
    private readonly deusService: DeusService,
    private fb: FormBuilder,

  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: [],
    });

    this.deusService.listar(null).subscribe({
      next: (response) => {
        this.deuses = response;
        this.numero_registros = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultar() {
    let filtro = this.form.value;
    this.deusService.listar(filtro).subscribe({
      next: (response) => {
        this.deuses = response;
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

  @Input() deusSelecionado?: Deus;
  @Input() seVeioFicha: boolean = false;
  @Output() deusSelecionadoChange = new EventEmitter<Deus>();
}
