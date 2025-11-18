import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { CombonautasBase } from '@app/components/combonautas-base';
import { ArmadurasEscudosService } from '@app/service/armaduras.escudos.service';

@Component({
  selector: 'app-armaduras-escudos',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, NgFor, MatTabGroup, MatTab, NgIf],
  templateUrl: './armaduras-escudos.component.html',
  styleUrl: './armaduras-escudos.component.scss',
})
export class ArmadurasEscudosComponent extends CombonautasBase {
  constructor(readonly service: ArmadurasEscudosService) {
    super();
  }
}
