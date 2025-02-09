import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { RacasComponent } from "../../personagem/racas/racas.component";

@Component({
  selector: 'app-balao-interativo-padrao',
  template: `
      <mat-card class="card-padrao">
        <label>
          <h2 mat-dialog-title>
          <b
            class="negrito-centralizado"
            style="text-justify: center !important"
            >{{ data.titulo }}
          </b>
        </h2>
        </label>
      </mat-card>
    <mat-dialog-content>
        <!-- <div class="col-sm-12 text-justify" [innerHTML]="data.texto"></div> -->
         <app-racas></app-racas>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-flat-button>Confirmar</button>
      <button mat-button mat-dialog-close mat-flat-button>Fechar</button>
    </mat-dialog-actions>
  `,
  styleUrl: './balao-interativo-padrao.component.scss',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogActions,
    MatButtonModule,
    MatCardModule,
    RacasComponent
],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalaoInterativoPadraoComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { titulo: string; texto: string }, private cdr: ChangeDetectorRef
  ) {}
}
