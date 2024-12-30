import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormControl } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { CalculoDesafiosDto } from '../../dto/calculo-desafios.dto';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon'; 

@Component({
  selector: 'app-calculo-desafios',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, ReactiveFormsModule, MatDividerModule, MatCardModule, MatInputModule, MatCheckboxModule, MatRadioModule, MatSelectModule, MatListModule,MatIconModule],
  templateUrl: './calculo-desafios.component.html',
  styleUrl: './calculo-desafios.component.scss',
})
export class CalculoDesafiosComponent implements OnInit {
  formulario!: FormGroup;
  calculoDesafios = new CalculoDesafiosDto();
  resultado: string = '';

  situacoes: string[] = ['FAVORÁVEL', 'NEUTRA', 'DESFAVORÁVEL'];

  monstros:any = [
    {id:  1, nd: 1, nome:'monstro 01'},
    {id:  2, nd: 2, nome:'monstro 02'},
    {id:  3, nd: 3, nome:'monstro 03'},
    {id:  4, nd: 4, nome:'monstro 04'},
    {id:  5, nd: 5, nome:'monstro 05'},
    {id:  6, nd: 6, nome:'monstro 06'},
    {id:  7, nd: 7, nome:'monstro 07'},
    {id:  8, nd: 8, nome:'monstro 08'},
    {id:  9, nd: 9, nome:'monstro 09'},
    {id: 10, nd:10, nome:'monstro 10'},
    {id: 11, nd:11, nome:'monstro 11'},
    {id: 12, nd:12, nome:'monstro 12'},
    {id: 13, nd:13, nome:'monstro 13'},
    {id: 14, nd:14, nome:'monstro 14'},
    {id: 15, nd:15, nome:'monstro 15'},
  ]

  monstrosSelecionadosAleatoriamente: any[] = []

  constructor(private fb: FormBuilder) {}

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

    let shuffled = this.monstros
    .map((value:any) => ({ value, sort: Math.random() }))
    .sort((a:any, b:any) => a.sort - b.sort)
    .map((value:any) => value.value)

    this.encontrarMonstros (nd,shuffled);
  }

  encontrarMonstros(nd: number, lista: any[], soma:number=0, posicao:number = 0){

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
