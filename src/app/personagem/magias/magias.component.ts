import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { AlvoMagia } from '../../enum/alvo.magia.enum';
import { TipoAlquimico } from '../../enum/tipo.alquimico.enum';
import { Magia } from '../../model/magia';
import { MagiaService } from '../../service/magia.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CirculoMagia } from '../../enum/circulo.magia.enum';

@Component({
  selector: 'app-magias',
  imports: [
    MatCardModule,
    MatGridListModule,
    NgIf,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: './magias.component.html',
  styleUrl: './magias.component.scss',
})
export class MagiasComponent {
  form!: FormGroup;
  objetos!: Magia[];
  numero_registros!: number;

  constructor(
    private readonly service: MagiaService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: [''],
    });
    1 ** 2;
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

  calculaTudo(objeto: Magia) {
    objeto.custo_total = 0;
    objeto.custo_material_total = 0;
    objeto.aprimoramentos?.forEach(aprimoramento => {
      aprimoramento.checkado = false;
    })

    this.calculaPreco(objeto);
  }

  calculoCusto(objeto: Magia): number {
    let material = objeto.custo_material_total? objeto.custo_material_total : 0;
    let custo = objeto.custo_total ? (objeto.custo_total-material) / 3 : 0;
    custo += material;
    return  Math.floor(custo);
  }

  calculaPreco(objeto: Magia) {
    let preco = 0;
    let custo_material = 0;

    preco += objeto.custo? objeto.custo: 0;
    preco += objeto.custo_material ? objeto.custo_material : 0;

    objeto.aprimoramentos?.forEach((aprimoramento) => {
      if (aprimoramento.checkado) {
        preco += aprimoramento.custo;
        custo_material += aprimoramento.custo_material
          ? aprimoramento.custo_material
          : 0;
      } else if (aprimoramento.e_aumenta) {
        preco += aprimoramento.aumenta
          ? aprimoramento.aumenta * aprimoramento.custo
          : 0;
          custo_material += aprimoramento.custo_material
          ? aprimoramento.aumenta? aprimoramento.aumenta * aprimoramento.custo_material : 0
          : 0;
      }
    });

    objeto.total_pm = preco;
    objeto.custo_total = preco ? (preco ** 2) * 30 : 0;
    objeto.custo_material_total = custo_material;
    objeto.custo_total += custo_material;
  }

  calculaCD(objeto: Magia): number {
    return objeto.total_pm ? objeto.total_pm + 20 : 0;
  }

  calculaCDEngenhoqueiro(objeto: Magia): number {
    return objeto.custo ? objeto.custo + 20 : 0;
  }

  calculaPMEngenhoqueiro(objeto: Magia) :number {
      let tipo: string = '';
  
      switch (objeto.circulo) {
        case CirculoMagia.PRIMEIRO_CIRCULO: {
          return objeto.total_pm? objeto.total_pm - 1 : 0 ;
        }
        case CirculoMagia.SEGUNDO_CIRCULO: {
          return objeto.total_pm? objeto.total_pm - 3 : 0 ;
        }
        case CirculoMagia.TERCEIRO_CIRCULO: {
          return objeto.total_pm? objeto.total_pm - 6 : 0 ;
        }
        case CirculoMagia.QUARTO_CIRCULO: {
          return objeto.total_pm? objeto.total_pm - 10 : 0 ;
        }
        case CirculoMagia.QUINTO_CIRCULO: {
          return objeto.total_pm? objeto.total_pm - 15 : 0 ;
        }
        default: {
          return 0;
        }
      }
  }

  descobreTipoAlquimico(objeto: Magia): string {
    let tipo: string = '';

    switch (objeto.alvo) {
      case AlvoMagia.CRIATURA: {
        return TipoAlquimico.POCAO;
      }
      case AlvoMagia.OBJETO: {
        return TipoAlquimico.OLEO;
      }
      case AlvoMagia.AREA: {
        return TipoAlquimico.GRANADA;
      }
      default: {
        return '';
      }
    }
  }

  aumentaAprimoramento(aprimoramento: any, objeto: Magia): Magia {
    objeto.aprimoramentos?.forEach((indice) => {
      if (indice.id === aprimoramento.id) {
        aprimoramento.aumenta += 1;
        this.calculaPreco(objeto);
      }
    });
    return objeto;
  }

  diminuiAprimoramento(aprimoramento: any, objeto: Magia): Magia {
    objeto.aprimoramentos?.forEach((indice) => {
      if (aprimoramento.aumenta !== 0 && indice.id === aprimoramento.id) {
        aprimoramento.aumenta -= 1;
        this.calculaPreco(objeto);
      }
    });
    return objeto;
  }

  calculaCheck(aprimoramento: any, objeto: Magia) : boolean {
    aprimoramento.checkado = !aprimoramento.checkado;
    this.calculaPreco(objeto);
    return aprimoramento.checkado;
  }
}
