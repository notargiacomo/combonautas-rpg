import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { DistincaoFacadeService } from '@app/service/distincao.facade.service';

@Component({
  selector: 'app-distincoes',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, MatTab, MatTabGroup, NgFor, NgIf],
  templateUrl: './distincoes.component.html',
  styleUrl: './distincoes.component.scss',
})
export class DistincoesComponent {
  constructor(readonly service: DistincaoFacadeService) {}
}
