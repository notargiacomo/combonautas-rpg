import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Raca } from '../../model/raca';
import { RacaService } from '../../service/raca.service';
import { ConsultaRacaDto } from '../../dto/consulta.raca.dto';
import { Deslocamento } from '../../enum/deslocamento.enum';
import { Sentido } from '../../enum/sentido.enum';
import { NgFor, NgIf } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Referencia } from '../../enum/referencia.enum';

@Component({
  selector: 'app-racas',
  standalone: true,
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
    NgIf,
  ],
  templateUrl: './racas.component.html',
  styleUrl: './racas.component.scss',
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
export class RacasComponent implements OnInit {
  raca = '';
  columnsToDisplay = ['nome', 'tipo', 'tamanho', 'referencias', 'paginas'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Raca | null;
  racas!: Raca[];
  consultaRacaDto: ConsultaRacaDto = new ConsultaRacaDto();
  deslocamentos = Object.values(Deslocamento);
  sentidos = Object.values(Sentido);
  referencias = Object.values(Referencia);
  checkboxState: { [key: string]: boolean } = {};

  form!: FormGroup;

  constructor(
    private readonly racaService: RacaService,
    private fb: FormBuilder
  ) {
    this.deslocamentos.forEach((deslocamento) => {
      this.checkboxState[deslocamento] = false;
    });
    this.sentidos.forEach((sentidos) => {
      this.checkboxState[sentidos] = false;
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      tipo: [],
      tamanho: [],
      sentidos: new FormArray([]),
      deslocamentos: new FormArray([]),
      referencias: new FormArray([]),
      nome: [],
    });

    this.racaService.listar(null).subscribe({
      next: (response) => {
        this.racas = response;
      },
      error: (response) => {
        console.log(response);
      },
    });

    // this.racas = this.racaService.getRacas();
    this.consultaRacaDto = new ConsultaRacaDto();
  }

  get sentidosFormArray(): FormArray {
    return this.form.controls['sentidos'] as FormArray;
  }

  limparFiltros() {
    this.consultaRacaDto = new ConsultaRacaDto();
    this.deslocamentos.forEach((deslocamento) => {
      this.checkboxState[deslocamento] = false;
    });
    this.sentidos.forEach((sentidos) => {
      this.checkboxState[sentidos] = false;
    });
    // this.racas = this.racaService.getRacas();
    (this.form.controls['deslocamentos'] as FormArray).clear();
    //   let arr = this.sentidosFormArray;

    //   while (this.sentidosFormArray.length) {
    //     this.sentidosFormArray.removeAt(0);
    //  }

    this.sentidosFormArray.clear();

    this.form.reset();
    this.consultar();
  }

  selecaoTamanho(event: any): void {
    this.consultaRacaDto.tamanho = event?.value;
    console.log('Tamanho selecionado:', this.consultaRacaDto.tamanho);
    this.consultar();
  }

  selecaoTipoCriatura(event: any): void {
    this.consultaRacaDto.tipoCriatura = event?.value;
    console.log(
      'Tipo de Criatura selecionado:',
      this.consultaRacaDto.tipoCriatura
    );
    this.consultar();
  }

  checkDeslocamento(deslocamento: Deslocamento, isChecked: boolean): void {
    if (isChecked) {
      this.consultaRacaDto.deslocamentos.push(deslocamento);
    } else {
      this.consultaRacaDto.deslocamentos =
        this.consultaRacaDto.deslocamentos.filter(
          (item) => item !== deslocamento
        );
    }

    const formArray = this.form.controls['deslocamentos'] as FormArray;
    if (isChecked) {
      formArray.push(new FormControl(deslocamento));
    } else {
      const index = formArray.controls.findIndex(
        (item) => item.value === deslocamento
      );
      formArray.removeAt(index);
    }

    this.consultar();
  }

  checkSentido(sentido: Sentido, isChecked: boolean): void {
    if (isChecked) {
      this.consultaRacaDto.sentidos.push(sentido);
    } else {
      this.consultaRacaDto.sentidos = this.consultaRacaDto.sentidos.filter(
        (item) => item !== sentido
      );
    }

    const formArray = this.sentidosFormArray;
    if (isChecked) {
      formArray.push(new FormControl(sentido));
    } else {
      const index = formArray.controls.findIndex(
        (item) => item.value === sentido
      );
      formArray.removeAt(index);
    }

    this.consultar();
  }

  checkReferencia(referencia: Referencia, isChecked: boolean): void {
    if (isChecked) {
      this.consultaRacaDto.referencia.push(referencia);
    } else {
      this.consultaRacaDto.referencia = this.consultaRacaDto.referencia.filter(
        (item) => item !== referencia
      );
    }

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

  consultar() {
    console.log(this.form.value);
    let filtro = this.form.value;
    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }
    this.racaService.listar(filtro).subscribe({
      next: (response) => {
        this.racas = response;
      },
      error: (response) => {
        console.log(response);
      },
    });

    // this.racas = this.racaService.getRacas(this.consultaRacaDto);
    console.log(this.racas);
    // alert("chamou consultar");
  }
}
