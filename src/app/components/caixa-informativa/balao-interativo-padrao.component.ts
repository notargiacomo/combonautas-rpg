import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
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
         <app-racas [seVeioFicha]="true"   [racaSelecionada]="objeto"
         (racaSelecionadaChange)="atualizarObjeto($event)">></app-racas>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-flat-button [disabled]="seDesabilitaConfirmar()" (click)="confirmar()">Confirmar</button>
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
objeto: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { titulo: string; objeto: any }, private cdr: ChangeDetectorRef, private dialogRef: MatDialogRef<BalaoInterativoPadraoComponent>
  ) {
  }

  ngOnInit() {
    this.objeto = this.data.objeto;
  }

  seDesabilitaConfirmar(): boolean{
    let isDesabilita: boolean = this.objeto === undefined || this.objeto.selecao === undefined || this.objeto.selecao;
    return isDesabilita;
  }

  atualizarObjeto(novaRaca: any) {
    this.objeto = novaRaca;
    this.cdr.detectChanges(); // Atualiza a UI, já que o ChangeDetection está como OnPush
  }

  confirmar() {
    this.dialogRef.close(this.objeto); // 🔥 Fecha o dialog e retorna a raça selecionada
  }
}
