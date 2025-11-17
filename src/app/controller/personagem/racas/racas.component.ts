import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { RacaService } from '@app/service/raca.service';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-racas',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, MatTab, MatTabGroup, NgFor],
  templateUrl: './racas.component.html',
  styleUrl: './racas.component.scss',
})
export class RacasComponent {
  constructor(readonly racaService: RacaService) {}
}
