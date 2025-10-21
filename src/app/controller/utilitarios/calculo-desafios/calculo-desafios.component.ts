import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ameacas } from '@app/data/ameacas.data'; 
import { CalculoDesafiosDto } from '@app/dto/calculo-desafios.dto'; 
import { Ameaca } from '@app/model/ameaca';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-calculo-desafios',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, ReactiveFormsModule, MatDividerModule, MatCardModule, MatInputModule, MatCheckboxModule, MatRadioModule, MatSelectModule, MatListModule,MatIconModule, MatButtonModule, MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calculo-desafios.component.html',
  styleUrl: './calculo-desafios.component.scss',
})
export class CalculoDesafiosComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  formulario!: FormGroup;
  calculoDesafios = new CalculoDesafiosDto();
  resultado: string = '';

  situacoes: string[] = ['FAVORÁVEL', 'NEUTRA', 'DESFAVORÁVEL'];

  monstros:Ameaca[] = ameacas

  monstrosSelecionadosAleatoriamente: any[] = []

  constructor(private fb: FormBuilder) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  ngOnInit(){
    this.formulario = this.fb.group({
      nivel: new FormControl(this.calculoDesafios.nivel),
      numero_jogadores: new FormControl(this.calculoDesafios.numero_jogadores),
      experientes: new FormControl(this.calculoDesafios.experientes),
      entrosados: new FormControl(this.calculoDesafios.entrosados),
      situacao: new FormControl(this.calculoDesafios.situacao),
      numero_encontros: new FormControl(this.calculoDesafios.numero_encontros)
    });
    this.calcular();
  }

  calcular(){
    // console.log(this.formulario.get("entrosados")?.value);
    const valores : CalculoDesafiosDto = this.formulario.value;
    var resultado: number = valores.nivel;
    resultado += valores.numero_jogadores - 4;
    resultado += valores.experientes ? 1 : 0;
    resultado += valores.entrosados ? 1 : 0;
    resultado += valores.situacao;
    resultado += -(valores.numero_encontros-1);
    this.listaResultado(resultado)
    this.resultado = valores.numero_encontros + " ENCONTRO(S) DE ND " + resultado;

  }

  listaResultado(nd: number){
    this.monstrosSelecionadosAleatoriamente = []

    let shuffled: Ameaca[] = this.monstros
    .map((value:Ameaca) => ({ value, sort: Math.random() }))
    .sort((a:any, b:any) => a.sort - b.sort)
    .map((value:any) => value.value)

    this.encontrarMonstros (nd,shuffled);
  }

  encontrarMonstros(nd: number, lista: Ameaca[], soma:number=0, posicao:number = 0){

    for (let index = posicao; index < lista.length; index++) {
      const element = lista[index];
      
      if (soma + element.nd <= nd) {
        this.monstrosSelecionadosAleatoriamente.push(element);
        this.encontrarMonstros (nd, lista, soma + element.nd, index++, );
        break
      }
      
    }
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatDialogActions, MatButtonModule, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogElementsExampleDialog {}
