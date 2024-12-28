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

@Component({
  selector: 'app-calculo-desafios',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, ReactiveFormsModule, MatDividerModule, MatCardModule, MatInputModule, MatCheckboxModule, MatRadioModule, MatSelectModule],
  templateUrl: './calculo-desafios.component.html',
  styleUrl: './calculo-desafios.component.scss',
})
export class CalculoDesafiosComponent implements OnInit {
  formulario!: FormGroup;
  calculoDesafios = new CalculoDesafiosDto();
  resultado: string = '';

  situacoes: string[] = ['FAVORÁVEL', 'NEUTRA', 'DESFAVORÁVEL'];

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
    this.resultado = valores.numero_encontros + " ENCONTRO(S) DE ND " + resultado;
  }
}
