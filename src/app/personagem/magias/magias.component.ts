import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { AlvoMagia } from '../../enum/alvo.magia.enum';
import { TipoAlquimico } from '../../enum/tipo.alquimico.enum';
import { Magia } from '../../model/magia';
import { MagiaService } from '../../service/magia.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CirculoMagia } from '../../enum/circulo.magia.enum';
import { TipoMagia } from '../../enum/tipo.magia.enum';
import { EscolasMagia } from '../../enum/escolas.magia.enum';
import { Resistencia } from '../../enum/resistencia.enum';
import { AlcanceMagia } from '../../enum/alcance.magia.enum';
import { ExecucaoMagia } from '../../enum/execucao.magia.enum';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-magias',
  imports: [
    MatCardModule,
    MatGridListModule,
    NgIf,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSelectModule,
    MatSortModule, MatPaginatorModule,
    MatFormFieldModule,
  ],
  templateUrl: './magias.component.html',
  styleUrl: './magias.component.scss',
})
export class MagiasComponent implements AfterViewInit {
  displayedColumns: string[] = ['nome', 
    'tipo', 'escola', 'circulo', 
    'acao'];

  form!: FormGroup;
  objetos!: Magia[];
  numero_registros!: number;
  tipos = Object.values(TipoMagia);
  escolas = Object.values(EscolasMagia);
  circulos = Object.values(CirculoMagia);
  resistencias = Object.values(Resistencia);
  alcances = Object.values(AlcanceMagia);
  execucoes = Object.values(ExecucaoMagia);
  objeto: Magia | undefined;

  dataSource = new MatTableDataSource<Magia>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(
    private readonly service: MagiaService,
    private fb: FormBuilder
  ) {
        // Assign the data to the data source for the table to render

  }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [],
      tipo: [],
      escola: [],
      circulo: [],
      pericia_resistencia: [],
      alcance: [],
      execucao: [],
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
        response.sort((a, b) => {
          let nome_a = a.nome ? a.nome : 'a';
          let nome_b = b.nome ? b.nome : 'b';
          return nome_a.localeCompare(nome_b);
        }
      );
        this.objetos = response;
      },
      error: (response) => {
        console.log(response);
      },
      complete:() => {
          filtro.tipo = 'Universal'
          this.service.listar(filtro).subscribe({
          next: (response) => {
            response.forEach((r)=>{
              this.objetos.push(r);
            })
            
            this.objetos.sort((a, b) => {
              let nome_a = a.nome ? a.nome : 'a';
              let nome_b = b.nome ? b.nome : 'b';
              return nome_a.localeCompare(nome_b);
            }
          );
            this.numero_registros = this.objetos.length;
          },
          error: (response) => {
            console.log(response);
          },
          complete:() => {
            this.dataSource = new MatTableDataSource(this.objetos);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        });

        this.dataSource = new MatTableDataSource(this.objetos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
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
    custo_material += objeto.custo_material ? objeto.custo_material : 0;

    objeto.aprimoramentos?.forEach((aprimoramento) => {
      let custo = aprimoramento.custo? aprimoramento.custo: 0;
      if (aprimoramento.checkado) {
        preco += custo;
        custo_material += aprimoramento.custo_material
          ? aprimoramento.custo_material
          : 0;
      } else if (aprimoramento.e_aumenta) {
        preco += aprimoramento.aumenta
          ? aprimoramento.aumenta * custo
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
        return 'INTERPRETATIVO';
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

  seFazPocao(objeto:Magia): boolean {
    return objeto.alvo == AlvoMagia.CRIATURA || objeto.alvo == AlvoMagia.OBJETO || objeto.alvo == TipoAlquimico.GRANADA;
  }

  calculaCheck(aprimoramento: any, objeto: Magia) : boolean {
    aprimoramento.checkado = !aprimoramento.checkado;
    this.calculaPreco(objeto);
    return aprimoramento.checkado;
  }

    limparFiltros() {
      this.form.reset();
      this.consultar();
    }

    selecionaMagia(objeto: Magia){
      this.objeto = objeto;
    }
}
