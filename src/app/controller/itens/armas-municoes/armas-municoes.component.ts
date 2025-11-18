import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { CombonautasBase } from '@app/components/combonautas-base';
import { ArmasMunicoesService } from '@app/service/armas.municoes.service';
import { MatTabGroup, MatTab } from '@angular/material/tabs';

@Component({
  selector: 'app-armas-municoes',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, NgFor, MatTabGroup, MatTab, NgIf],
  templateUrl: './armas-municoes.component.html',
  styleUrl: './armas-municoes.component.scss',
})
export class ArmasMunicoesComponent extends CombonautasBase {
  constructor(readonly service: ArmasMunicoesService) {
    super();
  }
}
