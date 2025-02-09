import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { Personagem } from '../model/personagem';
import { BalaoInterativoPadraoComponent } from '../components/caixa-informativa/balao-interativo-padrao.component';
import { MatDialog } from '@angular/material/dialog';

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
      },
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado) {
        console.log('Retorno do diálogo:', resultado);
        this.selecionaRaca(resultado);
      } else {
        console.log('Diálogo foi fechado sem retorno.');
      }
    });
  }

  private selecionaRaca(resultado: any) {
    this.personagem.raca = resultado;
  }
}
