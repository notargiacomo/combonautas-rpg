import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { Poder } from '../../model/poder';
import { PoderService } from '../../service/poder.service';
import { MatTabsModule } from '@angular/material/tabs';
import { TipoPoder } from '../../enum/tipo.poder.enum';
import { Deus } from '../../model/deus';
import { MatRadioModule } from '@angular/material/radio';
import { DeusService } from '../../service/deus.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-poderes',
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
    MatButtonModule
  ],
  templateUrl: './poderes.component.html',
  styleUrl: './poderes.component.scss',
})
export class PoderesComponent {
  poderes_combate!: Poder[];
  poderes_destino!: Poder[];
  poderes_magia!: Poder[];
  poderes_concedido!: Poder[];
  poderes_tormenta!: Poder[];
  form!: FormGroup;
  numero_registros_combate = 0;
  numero_registros_concedido = 0;
  numero_registros_magia = 0;
  numero_registros_destino = 0;
  numero_registros_tormenta = 0;
  deuses: Deus[] = [];


  constructor(
    private readonly service: PoderService,
    private readonly serviceDeus: DeusService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {

    this.serviceDeus.listar(null).subscribe({
      next: (response) => {
        this.deuses = response;
      },
      error: (response) => {
        console.log(response);
      },
    });;

    this.form = this.fb.group({
      nome: [],
      id_deuses: []
    });

    this.service.listar({tipo: TipoPoder.COMBATE}).subscribe({
      next: (response) => {
        this.poderes_combate = response;
        this.numero_registros_combate = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({tipo: TipoPoder.DESTINO}).subscribe({
      next: (response) => {
        this.poderes_destino = response;
        this.numero_registros_destino = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({tipo: TipoPoder.MAGIA}).subscribe({
      next: (response) => {
        this.poderes_magia = response;
        this.numero_registros_magia = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.service.listar({tipo: TipoPoder.CONCEDIDO}).subscribe({
      next: (response) => {
        this.poderes_concedido = response;
        this.numero_registros_concedido = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
    this.service.listar({tipo: TipoPoder.TORMENTA}).subscribe({
      next: (response) => {
        this.poderes_tormenta = response;
        this.numero_registros_tormenta = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  consultarPoderesCombate() {
    console.log(this.form.value);
    let filtro = this.form.value;
    filtro.tipo = TipoPoder.COMBATE;
    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }
    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.poderes_combate = response;
        this.numero_registros_combate = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
    
  }

  consultarPoderesDestino() {
    console.log(this.form.value);
    let filtro = this.form.value;
    filtro.tipo = TipoPoder.DESTINO;
    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }
    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.poderes_destino = response;
        this.numero_registros_destino = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
    
  }

  consultarPoderesMagia() {
    console.log(this.form.value);
    let filtro = this.form.value;
    filtro.tipo = TipoPoder.MAGIA;
    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }
    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.poderes_magia = response;
        this.numero_registros_magia = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
    
  }

  selecaoDeuses(event: any): void {
    this.consultarPoderesConcedido(event);
  }

  consultarPoderesConcedido(event: any) {
    console.log(this.form.value);
    let filtro = this.form.value;
    filtro.tipo = TipoPoder.CONCEDIDO;
    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }
    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.poderes_concedido = response;
        this.numero_registros_concedido = response.length;
      },
      error: (response) => {
        console.log(response);
      },
      complete: () => {
        if(event){
          let poderes : Poder[] = [];
          this.poderes_concedido.forEach(
            (element) => {
                if(element.id_deuses?.includes(Number(event))) {
                  poderes.push(element);
                }
            }
          );
          this.poderes_concedido = poderes;
          this.numero_registros_concedido = this.poderes_concedido.length;
        }
      }
    });
    
  }

  consultarPoderesTormenta() {
    console.log(this.form.value);
    let filtro = this.form.value;
    filtro.tipo = TipoPoder.TORMENTA;
    if (filtro.nome) {
      // regex - in-memory-web-api
      filtro.nome = '^' + filtro.nome;
    }
    this.service.listar(filtro).subscribe({
      next: (response) => {
        this.poderes_tormenta = response;
        this.numero_registros_tormenta = response.length;
      },
      error: (response) => {
        console.log(response);
      },
    });
    
  }

  limparFiltros() {
    this.form.reset();
    this.consultarPoderesConcedido(null);
  }

  nomeDeuses(deuses?: Deus[]): string {
    return  deuses ? deuses.map(deus => deus.nome).join(' ') : '';
  }
}
