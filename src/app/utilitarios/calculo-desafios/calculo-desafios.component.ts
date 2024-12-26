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




@Component({
  selector: 'app-calculo-desafios',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, ReactiveFormsModule, MatDividerModule, MatCardModule, MatInputModule, MatCheckboxModule, MatRadioModule, MatSelectModule],
  templateUrl: './calculo-desafios.component.html',
  styleUrl: './calculo-desafios.component.scss',
})
export class CalculoDesafiosComponent implements OnInit {
  formulario!: FormGroup;

  situacoes: string[] = ['FAVORÁVEL', 'NEUTRA', 'DESFAVORÁVEL'];

  constructor(private fb: FormBuilder) {}
  ngOnInit(){
    this.formulario = this.fb.group({
      nivel:Number,
      numero_jogadores: Number,
      experientes: Boolean,
      entrosados: Boolean,
      situacao: String,
      numero_encontros: Number
    });
  }

  calcular(){

  }
}
