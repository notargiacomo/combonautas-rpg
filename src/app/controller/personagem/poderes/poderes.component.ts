import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, inject, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { PoderFacadeService } from '@app/service/poder.facade.service';
import { MatIcon } from '@angular/material/icon';
import { Poder } from '@app/model/poder';

@Component({
  selector: 'app-poderes',
  standalone: true,
  imports: [
    CardSearchComponent,
    MatCard,
    MatCardTitle,
    MatCardContent,
    NgIf,
    NgFor,
    // MatIcon,
  ],
  templateUrl: './poderes.component.html',
  styleUrl: './poderes.component.scss',
})
export class PoderesComponent {
  readonly dialog = inject(MatDialog);

  constructor(readonly poderesService: PoderFacadeService) {
    this.poderesService.carregarPoderes();
  }

  abrirPoderesRelacionados(poder: Poder): void {
    const poderes = this.poderesService.getPoderesRelacionados(poder.id!);

    this.dialog.open(DialogPoderes, {
      width: '700px',
      data: {
        nomePoder: poder.nome!,
        poderesRelacionados: poderes,
      } satisfies DialogPoderesData,
    });
  }

  temPoderesRelacionados(poder: Poder): boolean {
    return this.poderesService.getPoderesRelacionados(poder.id!).length > 0;
  }
}

@Component({
  selector: 'dialog.poderes.component',
  templateUrl: 'dialog.poderes.component.html',
  imports: [
    // MatFormFieldModule,
    // MatInputModule,
    // FormsModule,
    // NgTemplateOutlet,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    // MatDialogClose,
  ],
})
export class DialogPoderes {
  readonly dialogRef = inject(MatDialogRef<DialogPoderes>);
  readonly data = inject<DialogPoderesData>(MAT_DIALOG_DATA);

  close(): void {
    this.dialogRef.close();
  }
}

export interface DialogPoderesData {
  nomePoder: string;
  poderesRelacionados: Poder[];
}
