import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { CombonautasBase } from '@app/components/combonautas-base';
import { ArmadurasEscudosService } from '@app/service/armaduras.escudos.service';
import { ItensSuperioresService } from '@app/service/itens.superiores.service';

@Component({
  selector: 'app-itens-superiores',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, NgFor],
  templateUrl: './itens-superiores.component.html',
  styleUrl: './itens-superiores.component.scss',
})
export class ItensSuperioresComponent extends CombonautasBase {
  constructor(readonly service: ItensSuperioresService) {
    super();
  }
}
