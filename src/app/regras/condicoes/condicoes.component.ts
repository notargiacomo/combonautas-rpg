import { Component, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { CondicoesService } from '../../service/condicoes.service';
import { Condicoes } from '../../model/condicoes';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-condicoes',
  imports: [MatDividerModule, MatCardModule, MatGridListModule, NgFor,MatInputModule,FormsModule,ReactiveFormsModule],
  templateUrl: './condicoes.component.html',
  styleUrl: './condicoes.component.scss'
})
export class CondicoesComponent  implements OnInit {

  condicoes!: Condicoes[]
  form!: FormGroup;

  constructor(private readonly service: CondicoesService,private fb: FormBuilder){}

  ngOnInit() {
      this.form = this.fb.group({
        nome: [],
      });
  
      this.service.listar(null).subscribe({
        next: response =>{
          this.condicoes = response
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
          this.condicoes = response
        },
        error: response => {
          console.log(response)
        }
      })
    }

}
