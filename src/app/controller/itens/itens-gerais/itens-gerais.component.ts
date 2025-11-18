import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { CombonautasBase } from '@app/components/combonautas-base';
import { ArmasMunicoesService } from '@app/service/armas.municoes.service';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { ItensGeraisService } from '@app/service/itens.gerais.service';

@Component({
  selector: 'app-itens-gerais',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, NgFor, MatTabGroup, MatTab, NgIf],
  templateUrl: './itens-gerais.component.html',
  styleUrl: './itens-gerais.component.scss',
})
export class ItensGeraisComponent extends CombonautasBase {
  constructor(readonly service: ItensGeraisService) {
    super();
  }
}
