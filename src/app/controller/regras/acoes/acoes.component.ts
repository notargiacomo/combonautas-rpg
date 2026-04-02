import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardModule, MatCardTitle } from '@angular/material/card';
import { AcoesService } from '@app/service/acao.service';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-acoes',
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, MatCardModule],
  templateUrl: './acoes.component.html',
  styleUrl: './acoes.component.scss',
})
export class AcoesComponent {
  constructor(readonly servico: AcoesService) {}
}
