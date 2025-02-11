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
import { Atributo } from '../../enum/atributo.enum';

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
  pontosAtributos: number = 0;
  seExceto: boolean = false;

  checkSelecionaRaca(raca: Raca, isChecked: boolean): void {
    if (isChecked) {
      this.racaSelecionada = raca;
      this.varreInstrucaoBuscandoAcrecimo(raca, AcrecimoAtributo.FORCA);
      this.varreInstrucaoBuscandoAcrecimo(raca, AcrecimoAtributo.DESTREZA);
      this.varreInstrucaoBuscandoAcrecimo(raca, AcrecimoAtributo.CONSTITUICAO);
      this.varreInstrucaoBuscandoAcrecimo(raca, AcrecimoAtributo.INTELIGENCIA);
      this.varreInstrucaoBuscandoAcrecimo(raca, AcrecimoAtributo.SABEDORIA);
      this.varreInstrucaoBuscandoAcrecimo(raca, AcrecimoAtributo.CARISMA);

      this.varreInstrucaoBuscandoDecrecimo(raca, DecrecimoAtributo.FORCA);
      this.varreInstrucaoBuscandoDecrecimo(raca, DecrecimoAtributo.DESTREZA);
      this.varreInstrucaoBuscandoDecrecimo(raca, DecrecimoAtributo.CONSTITUICAO);
      this.varreInstrucaoBuscandoDecrecimo(raca, DecrecimoAtributo.INTELIGENCIA);
      this.varreInstrucaoBuscandoDecrecimo(raca, DecrecimoAtributo.SABEDORIA);
      this.varreInstrucaoBuscandoDecrecimo(raca, DecrecimoAtributo.CARISMA);

      if (raca.instrucao) {
        if (raca.instrucao.includes(Calculo.TRES_ATRIBUTOS_DIFERENTES)) {
          this.pontosAtributos = 3;
          raca.seSelecaoFinalizada = false;
        } else if (raca.instrucao.includes(Calculo.DOIS_ATRIBUTOS_DIFERENTES)) {
          this.pontosAtributos = 2;
          raca.seSelecaoFinalizada = false;
        } else if (raca.instrucao.includes(Calculo.UM_ATRIBUTO)) {
          this.pontosAtributos = 1;
          raca.seSelecaoFinalizada = false;
        } else {
          raca.seSelecaoFinalizada = true;
        }
        console.log(
          'Raça: ' +
            raca.nome +
            ' / ' +
            this.pontosAtributos +
            ' / ' +
            raca.instrucao
        );
      } 
  
      console.log(this.racaSelecionada);
    } else {
      this.racaSelecionada = undefined;
      this.pontosAtributos = 0;
    }
    this.racaSelecionadaChange.emit(this.racaSelecionada); // Notifica o pai da mudança
  }

  private varreInstrucaoBuscandoAcrecimo(raca: Raca, acrecimo: AcrecimoAtributo) {
    const indice = this.racaSelecionada.instrucao.indexOf(Calculo.EXCETO);
    const antes = this.racaSelecionada.instrucao.slice(0, indice);

    antes?.forEach((instrucao: AcrecimoAtributo) => {
      if (instrucao === acrecimo) {
        raca.resolucao?.push(acrecimo);
      }
    });
  }

  private varreInstrucaoBuscandoDecrecimo(raca: Raca, decrescimo: DecrecimoAtributo) {
    raca.instrucao?.forEach((instrucao) => {
      if (instrucao === decrescimo) {
        raca.resolucao?.push(decrescimo);
      }
    });
  }

  seExibeCheckAtributos(raca: Raca): boolean {
    return this.seVeioFicha && this.racaSelecionada !== undefined && raca.instrucao
      ? raca.instrucao.includes(Calculo.TRES_ATRIBUTOS_DIFERENTES) ||
          raca.instrucao.includes(Calculo.DOIS_ATRIBUTOS_DIFERENTES) ||
          raca.instrucao.includes(Calculo.UM_ATRIBUTO)
      : false;
  }

  seDesabilitaCheckAtributoEspecifico(raca: Raca, key: string): boolean {
    return (this.pontosAtributos === 0 && this.regraDesabilitaCheckAtributoBonusVariavel(key)) || this.regraDesaBilitaAtributoExceto(key) ;
  }

  regraDesabilitaCheckAtributoBonusVariavel(key: string): boolean {
    return !this.racaSelecionada.resolucao.includes(AcrecimoAtributo[key as keyof typeof AcrecimoAtributo]);
  }

  regraDesaBilitaAtributoExceto(key: string): boolean{
    let seExceto = this.racaSelecionada.instrucao?.includes(Calculo.EXCETO);

    if(seExceto){
      const indice = this.racaSelecionada.instrucao.indexOf(Calculo.EXCETO);
      const depois = this.racaSelecionada.instrucao.slice(indice + 1);
      seExceto = depois.includes(AcrecimoAtributo[key as keyof typeof AcrecimoAtributo])
    }

    return seExceto  
  }

  checkAtributo(key: string, check: boolean) {
    if (check) {
      this.pontosAtributos -= 1;
      console.log(this.pontosAtributos);
      this.racaSelecionada.resolucao.push(
        AcrecimoAtributo[key as keyof typeof AcrecimoAtributo]
      );
    } else {
      this.pontosAtributos += 1;
      this.racaSelecionada.resolucao = this.racaSelecionada.resolucao.filter(
        (res: AcrecimoAtributo) =>
          res !== AcrecimoAtributo[key as keyof typeof AcrecimoAtributo]
      );
    }

    this.racaSelecionada.seSelecaoFinalizada = this.pontosAtributos === 0;
    this.cdr.detectChanges();
  }
}

export enum Calculo {
  UM_ATRIBUTO = '1 ATRIBUTO',
  DOIS_ATRIBUTOS_DIFERENTES = '2 ATRIBUTOS DIFERENTES',
  TRES_ATRIBUTOS_DIFERENTES = '3 ATRIBUTOS DIFERENTES',
  EXCETO = 'EXCETO',
}

export enum AcrecimoAtributo {
  FORCA = 'this.personagem.atributos.for_racial = this.personagem.atributos.for_racial + 1',
  DESTREZA = 'this.personagem.atributos.des_racial = this.personagem.atributos.des_racial + 1',
  CONSTITUICAO = 'this.personagem.atributos.con_racial = this.personagem.atributos.con_racial + 1',
  INTELIGENCIA = 'this.personagem.atributos.int_racial = this.personagem.atributos.int_racial + 1',
  SABEDORIA = 'this.personagem.atributos.sab_racial = this.personagem.atributos.sab_racial + 1',
  CARISMA = 'this.personagem.atributos.car_racial = this.personagem.atributos.car_racial + 1',
}

export enum DecrecimoAtributo {
  FORCA = 'this.personagem.atributos.for_racial = this.personagem.atributos.for_racial - 1',
  DESTREZA = 'this.personagem.atributos.des_racial = this.personagem.atributos.des_racial - 1',
  CONSTITUICAO = 'this.personagem.atributos.con_racial = this.personagem.atributos.con_racial - 1',
  INTELIGENCIA = 'this.personagem.atributos.int_racial = this.personagem.atributos.int_racial - 1',
  SABEDORIA = 'this.personagem.atributos.sab_racial = this.personagem.atributos.sab_racial - 1',
  CARISMA = 'this.personagem.atributos.car_racial = this.personagem.atributos.car_racial - 1',
}
