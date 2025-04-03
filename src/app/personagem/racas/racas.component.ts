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
  EventEmitter,
  Input,
  OnInit,
  Output,
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
import { MatTabsModule } from '@angular/material/tabs';
import { AcrecimoAtributo } from '../../enum/acrecimo.atributo.enum';
import { Atributo } from '../../enum/atributo.enum';
import { DecrecimoAtributo } from '../../enum/decrecimo.atributo.enum';
import { Deslocamento } from '../../enum/deslocamento.enum';
import { OpcoesSelecao } from '../../enum/opcoes.selecao';
import { Referencia } from '../../enum/referencia.enum';
import { Sentido } from '../../enum/sentido.enum';
import { Poder } from '../../model/poder';
import { Raca } from '../../model/raca';
import { PoderService } from '../../service/poder.service';
import { RacaService } from '../../service/raca.service';
import { TipoCriatura } from '../../enum/tipo.criatura.enum';
import { MatSelectModule } from '@angular/material/select';
import { Tamanho } from '../../enum/tamanho.enum';

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
    MatSelectModule,
    NgFor,
    NgIf,
    MatTabsModule,
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
  columnsToDisplay = ['nome', 'tipo', 'tamanho'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Raca | null;
  isExpandedRow = (index: number, row: any) => row === this.expandedElement;
  racas!: Raca[];
  deslocamentos = Object.values(Deslocamento);
  sentidos = Object.values(Sentido);
  tamanhos = Object.values(Tamanho);
  referencias = Object.values(Referencia);
  tipos = Object.values(TipoCriatura);
  atributo = [-2, -1, 0, 1, 2, 3];
  numero_registros = 0;
  selectedIndex: number = 0;

  form!: FormGroup;

  constructor(
    private readonly racaService: RacaService,
    private readonly poderService: PoderService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
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
      sentidos: [],
      deslocamentos: [],
      forca: [],
      destreza: [],
      constituicao: [],
      inteligencia: [],
      sabedoria: [],
      carisma: [],
      temMagia: [],
      temPoderGeral: [],
      temPericia: [],
      // referencias: new FormArray([]),
      nome: [],
      selecao: []
    });
  }

  limparFiltros() {
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
   * DAQUI PARA FRENTE É TUDO SOBRE CALCULO DE FICHA - RAÇA
   *
   */

  @Input() racaSelecionada?: Raca;
  @Input() seVeioFicha: boolean = false;
  @Output() racaSelecionadaChange = new EventEmitter<Raca>();
  atributos = Object.keys(AcrecimoAtributo);
  exibeCheckAtribuos = false;
  pontosAtributos: number = 0;
  seExceto: boolean = false;
  valoresAtributos!: Atributos;

  checkSelecionaRaca(raca: Raca, isChecked: boolean): void {
    if (isChecked) {
      this.racaSelecionada = raca;
      let poderes : Poder[] = [];
      this.racaSelecionada?.habilidades?.forEach((habilidade) => {
        this.poderService.listar({id: habilidade?.id}).subscribe({
          next: (response) => {
            poderes.push(response[0]);
          },
          error: (response) => {
            console.log(response);
          },
          complete: () => {
            this.racaSelecionada!.habilidades!.length = 0;
            this.racaSelecionada?.habilidades?.push(...poderes);
            this.cdr.detectChanges();
          }
        });
      });

      this.varreInstrucaoBuscandoAcrecimo(raca, AcrecimoAtributo.FORCA);
      this.varreInstrucaoBuscandoAcrecimo(raca, AcrecimoAtributo.DESTREZA);
      this.varreInstrucaoBuscandoAcrecimo(raca, AcrecimoAtributo.CONSTITUICAO);
      this.varreInstrucaoBuscandoAcrecimo(raca, AcrecimoAtributo.INTELIGENCIA);
      this.varreInstrucaoBuscandoAcrecimo(raca, AcrecimoAtributo.SABEDORIA);
      this.varreInstrucaoBuscandoAcrecimo(raca, AcrecimoAtributo.CARISMA);

      this.varreInstrucaoBuscandoDecrecimo(raca, DecrecimoAtributo.FORCA);
      this.varreInstrucaoBuscandoDecrecimo(raca, DecrecimoAtributo.DESTREZA);
      this.varreInstrucaoBuscandoDecrecimo(
        raca,
        DecrecimoAtributo.CONSTITUICAO
      );
      this.varreInstrucaoBuscandoDecrecimo(
        raca,
        DecrecimoAtributo.INTELIGENCIA
      );
      this.varreInstrucaoBuscandoDecrecimo(raca, DecrecimoAtributo.SABEDORIA);
      this.varreInstrucaoBuscandoDecrecimo(raca, DecrecimoAtributo.CARISMA);

      this.valoresAtributos = new Atributos();
      if (raca.instrucao) {
        if (
          raca.instrucao.includes(OpcoesSelecao.TRES_ATRIBUTOS_DIFERENTES) 
        ) {
          this.pontosAtributos = 3;
          raca.seSelecaoFinalizada = false;
        } else if (raca.instrucao.includes(OpcoesSelecao.DOIS_ATRIBUTOS_DIFERENTES) ||
        raca.instrucao.includes(OpcoesSelecao.DOIS_ATRIBUTOS)) {
          this.pontosAtributos = 2;
          raca.seSelecaoFinalizada = false;
        } else if (raca.instrucao.includes(OpcoesSelecao.UM_ATRIBUTO)) {
          this.pontosAtributos = 1;
          raca.seSelecaoFinalizada = false;
        } else {
          raca.seSelecaoFinalizada = true;
        }
      }

    } else {
      this.racaSelecionada = undefined;
      this.pontosAtributos = 0;
    }
    this.racaSelecionadaChange.emit(this.racaSelecionada); // Notifica o pai da mudança
  }

  private varreInstrucaoBuscandoAcrecimo(
    raca: Raca,
    acrecimo: AcrecimoAtributo
  ) {
    const indice = this.racaSelecionada!.instrucao!.indexOf(OpcoesSelecao.EXCETO);
    const antes = this.racaSelecionada!.instrucao!.slice(0, indice);

    antes?.forEach((instrucao) => {
      if (instrucao === acrecimo) {
        raca.resolucao?.push(acrecimo);
      }
    });
  }

  private varreInstrucaoBuscandoDecrecimo(
    raca: Raca,
    decrescimo: DecrecimoAtributo
  ) {
    raca.instrucao?.forEach((instrucao) => {
      if (instrucao === decrescimo) {
        raca.resolucao?.push(decrescimo);
      }
    });
  }

  seExibeSelecao(raca: Raca): boolean {
    this.selectedIndex = 0;
    return this.seVeioFicha &&
      this.racaSelecionada !== undefined &&
      raca.instrucao
      ? raca.instrucao.includes(OpcoesSelecao.TRES_ATRIBUTOS_DIFERENTES) ||
          raca.instrucao.includes(OpcoesSelecao.DOIS_ATRIBUTOS_DIFERENTES) ||
          raca.instrucao.includes(OpcoesSelecao.UM_ATRIBUTO) || 
          raca.instrucao.includes(OpcoesSelecao.RADIO)
      : false;
  }

  seExibeSelecaoAtributos(raca: Raca): boolean {
    return this.seVeioFicha &&
      this.racaSelecionada !== undefined &&
      raca.instrucao
      ? raca.instrucao.includes(OpcoesSelecao.DOIS_ATRIBUTOS)
      : false;
  }

  seDesabilitaCheckAtributoEspecifico(raca: Raca, key: string): boolean {
    return (
      ((this.pontosAtributos === 0 || (this.valoresAtributos && (Number(this.valoresAtributos.recuperaValorAtributo(key)) === 2 || (Number(this.valoresAtributos.recuperaValorAtributo(key)) === 0 && this.pontosAtributos === 0)) ) ) &&
        this.regraDesabilitaCheckAtributoBonusVariavel(key)) ||
      this.regraDesaBilitaAtributoExceto(key)
    );
  }

  regraDesabilitaCheckAtributoBonusVariavel(key: string): boolean {
    return !this.racaSelecionada!.resolucao!.includes(AcrecimoAtributo[key as keyof typeof AcrecimoAtributo])
    || this.racaSelecionada!.instrucao!.includes(AcrecimoAtributo[key as keyof typeof AcrecimoAtributo])
  }

  regraDesaBilitaAtributoExceto(key: string): boolean {
    let seExceto = this.racaSelecionada!.instrucao?.includes(OpcoesSelecao.EXCETO);

    if (seExceto) {
      const indice = this.racaSelecionada!.instrucao!.indexOf(OpcoesSelecao.EXCETO);
      const depois = this.racaSelecionada!.instrucao!.slice(indice + 1);
      seExceto = depois.includes(
        AcrecimoAtributo[key as keyof typeof AcrecimoAtributo]
      );
    }

    return seExceto!;
  }

  checkAtributo(key: string, check: boolean) {
    if (check) {
      this.pontosAtributos -= 1;
      this.racaSelecionada!.resolucao!.push(
        AcrecimoAtributo[key as keyof typeof AcrecimoAtributo]
      );
      this.valoresAtributos.editandoAtributo(key, check);
    } else {
      this.pontosAtributos += 1;
      this.racaSelecionada!.resolucao = this.racaSelecionada!.resolucao!.filter(
        (res) =>
          res !== AcrecimoAtributo[key as keyof typeof AcrecimoAtributo]
      );
      this.valoresAtributos.editandoAtributo(key, check);
    }

    this.racaSelecionada!.seSelecaoFinalizada = this.pontosAtributos === 0;
    this.cdr.detectChanges();
  }

    /**
   *
   * DAQUI PARA FRENTE É TUDO SOBRE CALCULO DE FICHA - HABILIDADES
   *
   */

    
  public seInstrucaoHabilidaTemMultiplaEscolha(habilidade: Poder): boolean{
    return habilidade?.instrucao? habilidade?.instrucao?.includes(OpcoesSelecao.RADIO): false;
  }

  public recuperaMultiplaEscolhaHabilidade(habilidade: Poder): any {
    const indice = habilidade.instrucao!.indexOf(OpcoesSelecao.RADIO);
    const depois = habilidade.instrucao!.slice(indice + 1);
    let lista: any[] = []
    eval('lista.push(...'+depois+')');
    return lista;
  }

  trackByChave(index: number, item: any): string {
    return item.chave; // Certifique-se de que 'chave' é único para cada item!
  }

  selecao?: string;
  public selecionaOpcaoMultiplaEscolha(event:any, habilidade: Poder){
    console.log("Entro em selecionaOpcaoMultiplaEscolha");
    this.racaSelecionada?.habilidades?.forEach( hab =>{
      if(hab === habilidade){
        let filtro = this.form.value;
        const indice = hab.instrucao!.indexOf(OpcoesSelecao.RADIO);
        const antes = hab.instrucao!.slice(0, indice);
        
        if (!hab.resolucao) hab.resolucao = [];
        hab.resolucao?.push(...antes);
        hab.resolucao?.push(event.value);
        habilidade.resolucao?.push(event);
      }
    })
  }

}
class Atributos {
  forca!: number;
  destreza!: number;
  constituicao!: number;
  inteligencia!: number;
  sabedoria!: number;
  carisma!: number;

  constructor() {
    this.forca = 0;
    this.destreza = 0;
    this.constituicao = 0;
    this.inteligencia = 0;
    this.sabedoria = 0;
    this.carisma = 0;
  }

  public recuperaValorAtributo(atributo: string): any {
    return this.pegarValor(
        atributo
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
    );
  }
  pegarValor(caminho: string): any {
    return caminho.split('.').reduce((obj: any, chave) => {
      if (obj && typeof obj === 'object') {
        return obj[chave];
      }
      return undefined;
    }, this);
  }

  editandoAtributo (key: string, check: boolean){
    if(Atributo[key as keyof typeof AcrecimoAtributo] === Atributo.FORCA){
      this.forca = check? this.forca + 1 : this.forca -1; 
    }
    if(Atributo[key as keyof typeof AcrecimoAtributo] === Atributo.DESTREZA){
      this.destreza = check? this.destreza + 1 : this.destreza -1; 
    }
    if(Atributo[key as keyof typeof AcrecimoAtributo] === Atributo.CONSTITUICAO){
      this.constituicao = check? this.constituicao + 1 : this.constituicao -1; 
    }
    if(Atributo[key as keyof typeof AcrecimoAtributo] === Atributo.INTELIGENCIA){
      this.inteligencia = check? this.inteligencia + 1 : this.inteligencia -1; 
    }
    if(Atributo[key as keyof typeof AcrecimoAtributo] === Atributo.SABEDORIA){
      this.sabedoria = check? this.sabedoria + 1 : this.sabedoria -1; 
    }
    if(Atributo[key as keyof typeof AcrecimoAtributo] === Atributo.CARISMA){
      this.carisma = check? this.carisma + 1 : this.carisma -1; 
    }
  }
}
