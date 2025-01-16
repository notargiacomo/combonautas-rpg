import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { Condicao } from '../../model/condicao';
import { ComplicacaoService } from '../../service/complicacao.service';
import { Complicacao } from '../../model/complicacao';

@Component({
  selector: 'app-complicacoes',
  imports: [MatDividerModule, MatCardModule, MatGridListModule, NgFor,MatInputModule,FormsModule,ReactiveFormsModule],
  templateUrl: './complicacoes.component.html',
  styleUrl: './complicacoes.component.scss'
})
export class ComplicacoesComponent {

  complicacoes!: Complicacao[]
  form!: FormGroup;
  numero_registros=0;

  constructor(private readonly service: ComplicacaoService,private fb: FormBuilder){}

  ngOnInit() {
      this.form = this.fb.group({
        nome: [],
      });
  
      this.service.listar(null).subscribe({
        next: response =>{
          this.complicacoes = response;
          this.numero_registros = response.length;
        },
        error: response => {
          console.log(response)
        }
      })
  
    }

    consultar(){
      console.log(this.form.value)
      let filtro = this.form.value
      if(filtro.nome){
        // regex - in-memory-web-api
        filtro.nome = '^'+ filtro.nome 
      }
      this.service.listar( filtro ).subscribe({
        next: response =>{
          this.complicacoes = response;
          this.numero_registros = response.length;
        },
        error: response => {
          console.log(response)
        }
      })
    }


}
