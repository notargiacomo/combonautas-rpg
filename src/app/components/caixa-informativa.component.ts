import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
  Input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-caixa-informativa',
  template: `
    <h2 mat-dialog-title>
      <mat-card class="card-padrao">
        <label>
          <b
            class="negrito-centralizado"
            style="text-justify: center !important"
            >{{ data.titulo }}
          </b>
        </label>
      </mat-card>
    </h2>
    <mat-dialog-content>
      <mat-card class="card-padrao">
        <div class="col-sm-12 text-justify" [innerHTML]="data.texto"></div>
      </mat-card>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close mat-flat-button>Close</button>
    </mat-dialog-actions>
  `,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogActions,
    MatButtonModule,
    MatCardModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaixaInformativaComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { titulo: string; texto: string }
  ) {}
}
