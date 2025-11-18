import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { ComplicacaoService } from '@app/service/complicacao.service';

@Component({
  selector: 'app-deuses',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, NgIf],
  templateUrl: './complicacoes.component.html',
  styleUrl: './complicacoes.component.scss',
})
export class ComplicacoesComponent {
  constructor(readonly complicacoesService: ComplicacaoService) {}
}
