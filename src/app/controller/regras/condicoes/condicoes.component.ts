import { Component, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { CondicoesService } from '@app/service/condicoes.service'; 
import { Condicao } from '@app/model/condicao'; 
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-condicoes',
  imports: [MatDividerModule, MatCardModule, MatGridListModule, NgFor,MatInputModule,FormsModule,ReactiveFormsModule, NgIf],
  templateUrl: './condicoes.component.html',
  styleUrl: './condicoes.component.scss'
})
export class CondicoesComponent  implements OnInit {
  isMobile = false;

  condicoes!: Condicao[]
  form!: FormGroup;
  numero_registros=0;

  constructor(private readonly service: CondicoesService,private fb: FormBuilder, private breakpointObserver: BreakpointObserver){
    this.breakpointObserver.observe([Breakpoints.Handset])
    .subscribe(result => {
      this.isMobile = result.matches;
      console.log('É celular?', this.isMobile);
    });
  }

  ngOnInit() {
      this.form = this.fb.group({
        nome: [],
      });
  
      this.service.listar(null).subscribe({
        next: response =>{
          this.condicoes = response;
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
          this.condicoes = response;
          this.numero_registros = response.length;
        },
        error: response => {
          console.log(response)
        }
      })
    }

}
