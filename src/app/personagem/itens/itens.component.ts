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
    this.service.listar(null).subscribe({
      next: (response) => {
        this.armas = response;
        this.numero_registros_armas = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarArmas() {
    this.service.listar({tipo: TipoItem.ARMA}).subscribe({
      next: (response) => {
        this.armas = response;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
