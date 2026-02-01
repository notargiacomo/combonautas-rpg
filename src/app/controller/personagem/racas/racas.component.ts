import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { Raca } from '@app/model/raca';
import { RacaFacadeService } from '@app/service/raca.facade.service';

@Component({
  selector: 'app-racas',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, MatTab, MatTabGroup, NgFor],
  templateUrl: './racas.component.html',
  styleUrl: './racas.component.scss',
})
export class RacasComponent {
  constructor(readonly racaService: RacaFacadeService) {}

  carregarAbas(raca: Raca) {
    this.racaService.abrirHistoria(raca);
    this.racaService.recuperaHabilidades(raca);
    this.racaService.recuperaPoderes(raca);
    return raca;
  }
}
