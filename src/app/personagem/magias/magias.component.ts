import { Component } from '@angular/core';
import { MagiaService } from '../../service/magia.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Magia } from '../../model/magia';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-magias',
  imports: [
    MatCardModule,
    MatGridListModule,
    // NgFor, //NgIf,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonModule,
  ],
  templateUrl: './magias.component.html',
  styleUrl: './magias.component.scss'
})
export class MagiasComponent {

    form!: FormGroup;
    objetos!: Magia[];
    numero_registros!: number;

    constructor(private readonly service: MagiaService, private fb: FormBuilder) {}
  
    ngOnInit() {
      this.form = this.fb.group({
        nome: [''],
      });

      this.consultar();
    }

    consultar() {
      console.log(this.form.value);
      let filtro = this.form.value;
      if (filtro.nome) {
        filtro.nome = '^' + filtro.nome;
      }
      this.service.listar(filtro).subscribe({
        next: (response) => {
          this.objetos = response;
          this.numero_registros = response.length;
        },
        error: (response) => {
          console.log(response);
        },
      });
  
      console.log(this.objetos);
    }

}
