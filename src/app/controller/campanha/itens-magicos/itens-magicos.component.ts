import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { CombonautasBase } from '@app/components/combonautas-base';
import { ArmasMunicoesService } from '@app/service/armas.municoes.service';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { ItemMagicoService } from '@app/service/item.magico.service';

@Component({
  selector: 'app-itens-magicos',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, NgFor, MatTabGroup, MatTab, NgIf],
  templateUrl: './itens-magicos.component.html',
  styleUrl: './itens-magicos.component.scss',
})
export class ItensMagicosComponent extends CombonautasBase {
  constructor(readonly service: ItemMagicoService) {
    super();
  }
}
