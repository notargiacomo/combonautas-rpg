import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { AcoesService } from '@app/service/acao.service';
import { Acao } from '@app/model/acao';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
// import { NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { AcaoData } from '@app/data/acao.data';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-acoes',
  imports: [MatDividerModule, MatCardModule, MatGridListModule, NgFor,MatInputModule,FormsModule,ReactiveFormsModule, NgIf],

  templateUrl: './acoes.component.html',
  styleUrl: './acoes.component.scss',
  // encapsulation: ViewEncapsulation.None, // Remove o escopo dos estilos
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
export class AcoesComponent implements OnInit {
  isMobile = false;

  acoes!: Acao[]
  form!: FormGroup;
  numero_registros=0;

  constructor(private readonly service: AcoesService,private fb: FormBuilder, private breakpointObserver: BreakpointObserver){
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
          this.acoes = response;
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
          this.acoes = response;
          this.numero_registros = response.length;
        },
        error: response => {
          console.log(response)
        }
      })
    }
}
