import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { Personagem } from '../model/personagem';
import { BalaoInterativoPadraoComponent } from '../components/caixa-informativa/balao-interativo-padrao.component';
import { MatDialog } from '@angular/material/dialog';
import { Raca } from '../model/raca';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  personagens: Personagem[] = [];
  personagem: Personagem = new Personagem();

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
        console.log('Retorno do diálogo:', resultado);
        this.personagem.raca = resultado;
        this.personagem.raca?.resolucao?.forEach(res =>{
          eval(res);
        })
        this.personagem.recalcula();
      } else {
        console.log('Diálogo foi fechado sem retorno.');
      }
    });
  }
}
