import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { ItemService } from '../../service/item.service';
import { Item } from '../../model/item';
import { TipoItem } from '../../enum/tipo.item.enum';

@Component({
  selector: 'app-itens',
  imports: [
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    NgFor, //NgIf,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonModule,
  ],
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.scss',
})
export class ItensComponent {
  form!: FormGroup;
  armas!: Item[];
  numero_registros_armas = 0;

  constructor(private readonly service: ItemService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: [''],
      tracos: [''],
    });

    this.service.listar({ tipo: TipoItem.ARMA }).subscribe({
      next: (response) => {
        this.armas = response;
        this.numero_registros_armas = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  filtro_traco: string = '';

  consultarArmas(): void {
    let filtro = { ...this.form.value };
    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }

    if (filtro.tracos) {
      filtro.tracos = '';
      this.filtro_traco = this.form.value.tracos;
    }

    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.armas = response;
        this.numero_registros_armas = this.armas.length;
      },
      error: (response) => {
        console.log(response);
      },
      complete: () => {
        let armas_filtradas: Item[] = [];
        if(this.filtro_traco.length !== 0){
          this.armas.forEach((arma) => {
            arma.tracos?.forEach((traco) => {
              if(traco.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.filtro_traco.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))){
                if (!armas_filtradas.includes(arma)) {
                  armas_filtradas.push(arma);
                }
              }
            });
          });
          this.armas = armas_filtradas;
          this.numero_registros_armas = this.armas.length
        }
      },
    });
  }
}
