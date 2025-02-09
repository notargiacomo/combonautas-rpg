import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { Deslocamento } from '../../enum/deslocamento.enum';
import { Referencia } from '../../enum/referencia.enum';
import { Sentido } from '../../enum/sentido.enum';
import { Raca } from '../../model/raca';
import { RacaService } from '../../service/raca.service';

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


  columnsToDisplay = ['nome', 'tipo', 'tamanho', 'referencias', 'paginas'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Raca | null;
  racas!: Raca[];
  deslocamentos = Object.values(Deslocamento);
  sentidos = Object.values(Sentido);
  referencias = Object.values(Referencia);
  checkboxState: { [key: string]: boolean } = {};
  numero_registros = 0;

  form!: FormGroup;

  constructor(
    private readonly racaService: RacaService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.deslocamentos.forEach((deslocamento) => {
      this.checkboxState[deslocamento] = false;
    });
    this.sentidos.forEach((sentidos) => {
      this.checkboxState[sentidos] = false;
    });
  }

  ngOnInit() {
    this.reiniciaFormulario();

    this.racaService.listar(null).subscribe({
      next: (response) => {
        this.racas = response;
        this.numero_registros = response.length;
        this.cdr.detectChanges();
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  private reiniciaFormulario() {
    this.form = this.fb.group({
      tipo: [],
      tamanho: [],
      sentidos: new FormArray([]),
      deslocamentos: new FormArray([]),
      referencias: new FormArray([]),
      nome: [],
    });
  }

  limparFiltros() {
    this.checkboxState = {};
    this.reiniciaFormulario();
    this.consultar();
  }

  checkDeslocamento(deslocamento: Deslocamento, isChecked: boolean): void {
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
    var sentidosFormArray = this.form.controls['sentidos'] as FormArray;
    const formArray = sentidosFormArray;
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
        this.numero_registros = response.length;
        this.cdr.detectChanges();
      },
      error: (response) => {
        console.log(response);
      },
    });

    console.log(this.racas);
  }

  /**
   * 
   * DAQUI PARA FRENTE É TUDO SOBRE CALCULO DE FICHA
   *  
   */

  @Input() racaSelecionada?: any;
  @Input() seVeioFicha: boolean = false;
  @Output() racaSelecionadaChange = new EventEmitter<Raca>();
  atributos = Object.keys(AcrecimoAtributo);
  exibeCheckAtribuos = false;
  contadorAtributos : number = 0;

  checkSelecionaRaca(raca: Raca, isChecked: boolean): void {
    if(isChecked){
      this.racaSelecionada = raca;
    } else {
      this.racaSelecionada.resolucao = null;
      this.racaSelecionada = undefined
    }

    this.racaSelecionadaChange.emit(this.racaSelecionada); // Notifica o pai da mudança
  }

  exibeCheckAtributo(raca: Raca): boolean{
    return this.seVeioFicha && this.racaSelecionada !== undefined && raca.instrucao? raca.instrucao.includes(Calculo.TRES_ATRIBUTOS_DIFERENTES): false;
  }

  checkAtributo(key: string, check: boolean) {
    if(!this.racaSelecionada.resolucao){
      this.racaSelecionada.resolucao = [];
    }

    // if(this.racaSelecionada.instrucao.includes(Calculo.TRES_ATRIBUTOS_DIFERENTES)){
    //   this.contadorAtributos = 3;
    // }

    check ? this.racaSelecionada.resolucao.push(AcrecimoAtributo[key as keyof typeof AcrecimoAtributo]): this.racaSelecionada.resolucao.splice(AcrecimoAtributo[key as keyof typeof AcrecimoAtributo]);
    console.log(this.racaSelecionada);
  }
}

export enum Calculo {
  MAIS_UM = '+1',
  MAIS_DOIS = '+2',
  DOIS_ATRIBUTOS_DIFERENTES = '2 ATRIBUTOS DIFERENTES',
  TRES_ATRIBUTOS_DIFERENTES = '3 ATRIBUTOS DIFERENTES',
  EXCETO = 'EXCETO',
}

export enum AcrecimoAtributo {
  FORCA = 'personagem.for_racial += personagem.for_racial',
  DESTREZA = 'personagem.des_racial += personagem.des_racial',
  CONSTITUICAO = 'personagem.con_racial += personagem.con_racial',
  INTELIGENCIA = 'personagem.int_racial += personagem.int_racial',
  SABEDORIA = 'personagem.sab_racial += personagem.sab_racial',
  CARISMA = 'personagem.car_racial += personagem.car_racial',
}

export enum DecrecimoAtributo {
  FORCA = 'personagem.for_racial -= personagem.for_racial',
  DESTREZA = 'personagem.des_racial -= personagem.des_racial',
  CONSTITUICAO = 'personagem.con_racial -= personagem.con_racial',
  INTELIGENCIA = 'personagem.int_racial -= personagem.int_racial',
  SABEDORIA = 'personagem.sab_racial -= personagem.sab_racial',
  CARISMA = 'personagem.car_racial -= personagem.car_racial',
}
