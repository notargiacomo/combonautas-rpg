import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, inject, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { BalaoInterativoPadraoComponent } from '../components/caixa-informativa/balao-interativo-padrao.component';
import { Atributo } from '../enum/atributo.enum';
import { Tamanho } from '../enum/tamanho.enum';
import { Pericia } from '../model/pericia';
import { PericiaPersonagem, Personagem } from '../model/personagem';
import { Poder } from '../model/poder';
import { PericiasService } from '../service/pericia.service';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatDividerModule,
    NgIf,
    NgFor,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatExpansionModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  pericias: Pericia[] = [];
  personagens!: Personagem[];
  personagem!: Personagem;
  atributos = Object.values(Atributo);
  tamanhos = Object.values(Tamanho);
  dsPericias = new MatTableDataSource<PericiaPersonagem>();
  displayedColumns: string[] = [
    'treinado',
    'pericia',
    'total',
    'atributo',
    'outros',
  ];
  displayedColumnsEmpunhadosVestidos: string[] = ['equipamento', 'formula'];
  displayedColumnsCarregados: string[] = [
    'equipamento',
    'quantidade',
    'espaco',
  ];
  displayedColumnsItens: string[] = ['item', 'descricao'];
  displayedColumnsPoderes: string[] = ['nome', 'tipo'];

  constructor(
    private readonly router: Router,
    private readonly servicoPericia: PericiasService
  ) {}

  ngOnInit() {
    this.personagens = [];
    this.personagem = new Personagem();

    this.servicoPericia.listar(null).subscribe({
      next: (response) => {
        this.pericias = response;
        this.personagem.inicializaPericias(this.pericias);
        this.dsPericias = new MatTableDataSource(this.personagem.pericias);
      },
      error: (response) => console.log(response),
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  readonly dialog = inject(MatDialog);
  dataSourcePoderesPersonagens = new MatTableDataSource<Poder>();
  openDialog(titulo: string) {
    const dialogRef = this.dialog.open(BalaoInterativoPadraoComponent, {
      data: {
        titulo: titulo,
        raca: this.personagem.raca,
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado) {
        this.personagem.raca = resultado;
        if (this.personagem.raca === undefined) {
          resultado.resolucao = [];
          resultado.resolucao.push(...resultado.instrucao);
        }
        this.personagem.resetaAtributosRaciais();
        this.personagem.raca?.habilidades
          ? this.personagem.poderes.push(...this.personagem.raca?.habilidades)
          : '';
        this.dataSourcePoderesPersonagens = new MatTableDataSource(
          this.personagem.poderes
        );

        this.personagem.raca?.resolucao?.forEach((res) => {
          eval(res);
        });

        this.personagem.raca?.habilidades?.forEach((habilidade) => {
          console.log("habilidade.resolucao: " + habilidade.resolucao);
          habilidade.resolucao?.forEach((resolucao) => {
            eval(resolucao);
          })
        });

        this.personagem.recalculaAtributos();
      } else {
        console.log('Diálogo foi fechado sem retorno.');
      }
    });
  }

  seDesabilitaCheck(pericia: PericiaPersonagem): boolean {
    let periciaChekada = false;
    this.personagem.pericias?.forEach(per => {
      if(pericia === per ){
        periciaChekada = per.treinado? per.treinado: false;
      }
    });
    return this.personagem.numero_pericias_livre === 0 && (this.personagem.pericias && this.personagem.pericias.length > 0 ? !periciaChekada: true);
  }
}
