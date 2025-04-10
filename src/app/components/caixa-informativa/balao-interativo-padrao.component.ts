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
import { ItensComponent } from "../../personagem/itens/itens.component";
import { NgIf } from '@angular/common';
import { MagiasComponent } from "../../personagem/magias/magias.component";
import { PoderesComponent } from "../../personagem/poderes/poderes.component";
import { ClassesComponent } from "../../personagem/classes/classes.component";
import { OrigensComponent } from "../../personagem/origens/origens.component";
import { DeusesComponent } from "../../personagem/deuses/deuses.component";

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
         <!-- <app-racas *ngIf="this.data.classe === 1"  [seVeioFicha]="true"   [racaSelecionada]="objeto"
         (racaSelecionadaChange)="atualizarObjeto($event)"></app-racas>
         <app-itens *ngIf="this.data.classe === 2" [seVeioFicha]="true"   [itemSelecionado]="objeto"
         (itemSelecionadoChange)="atualizarObjeto($event)"></app-itens>
         <app-magias *ngIf="this.data.classe === 3" [seVeioFicha]="true"   [magiaSelecionada]="objeto"
         (magiaSelecionadaChange)="atualizarObjeto($event)"></app-magias>
         <app-poderes *ngIf="this.data.classe === 4" [seVeioFicha]="true"   [poderSelecionado]="objeto"
         (poderSelecionadoChange)="atualizarObjeto($event)"></app-poderes>
         <app-origens *ngIf="this.data.classe === 5" [seVeioFicha]="true"   [origemSelecionada]="objeto"
         (origemSelecionadaChange)="atualizarObjeto($event)"></app-origens>
         <app-classes *ngIf="this.data.classe === 6" [seVeioFicha]="true"   [classeSelecionada]="objeto"
         (classeSelecionadaChange)="atualizarObjeto($event)"></app-classes>
         <app-deuses *ngIf="this.data.classe === 7" [seVeioFicha]="true"   [deusSelecionado]="objeto"
         (deusSelecionadoChange)="atualizarObjeto($event)"></app-deuses> -->
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
    RacasComponent,
    ItensComponent, NgIf,
    MagiasComponent,
    PoderesComponent,
    ClassesComponent,
    OrigensComponent,
    DeusesComponent
],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalaoInterativoPadraoComponent {
objeto: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private cdr: ChangeDetectorRef, private dialogRef: MatDialogRef<BalaoInterativoPadraoComponent>
  ) {
  }

  ngOnInit() {
    this.objeto = this.data.objeto;
  }

  seDesabilitaConfirmar(): boolean{
    let isDesabilita: boolean = 
    this.objeto === undefined 
    || !this.objeto.seSelecaoFinalizada;
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
