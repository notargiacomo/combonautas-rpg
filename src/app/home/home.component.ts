import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { PericiaPersonagem, Personagem } from '../model/personagem';
import { BalaoInterativoPadraoComponent } from '../components/caixa-informativa/balao-interativo-padrao.component';
import { MatDialog } from '@angular/material/dialog';
import { Raca } from '../model/raca';
import { NgIf } from '@angular/common';
import { Chave, getPrefixo } from '../enum/chave.enum';
import { PericiasService } from '../service/pericia.service';
import { Pericia } from '../model/pericia';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatDividerModule, NgIf, MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  pericias: Pericia[] = [];
  personagens!: Personagem[];
  personagem!: Personagem ;
  dataSource = new MatTableDataSource<PericiaPersonagem>();
  displayedColumns: string[] = ['pericia', 'total', 'atributo', 'outros'];

  constructor(private readonly router: Router
            , private readonly servicoPericia: PericiasService) {}

  ngOnInit() {
    this.personagens = [];
    this.personagem = new Personagem();

    this.servicoPericia.listar(null).subscribe({
      next: (response) => {
        this.pericias = response; 
        this.personagem.inicializaPericias(this.pericias)
        this.dataSource = new MatTableDataSource(this.personagem.pericias);
      },
      error: (response) => console.log(response),
    });

  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  readonly dialog = inject(MatDialog);
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
        console.log('Retorno do diálogo:', resultado.resolucao);
        if (this.personagem.raca === undefined) {
          resultado.resolucao = [];
          resultado.resolucao.push(...resultado.instrucao);
        }
        this.personagem.resetaAtributosRaciais();
        this.personagem.raca?.resolucao?.forEach((res) => {
          eval(res);
        });
        this.personagem.recalculaAtributos();
      } else {
        console.log('Diálogo foi fechado sem retorno.');
      }
    });
  }
}
