import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { Personagem } from '../model/personagem';
import { BalaoInterativoPadraoComponent } from '../components/caixa-informativa/balao-interativo-padrao.component';
import { MatDialog } from '@angular/material/dialog';
import { Raca } from '../model/raca';
import { NgIf } from '@angular/common';
import { Chave, getPrefixo } from '../enum/chave.enum';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatDividerModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  personagens: Personagem[] = [];
  personagem: Personagem = new Personagem();
  pericias: string[] = getPrefixo('PERICIA_');

  constructor(private readonly router: Router) {}

  ngOnInit() {}

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
