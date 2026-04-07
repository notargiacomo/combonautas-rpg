import { Component } from '@angular/core';
import { AmeacaService } from '@app/service/ameaca.service';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatTabGroup, MatTab } from '@angular/material/tabs';

@Component({
  selector: 'app-ameacas',
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, MatTabGroup, MatTab],
  templateUrl: './ameacas.component.html',
  styleUrl: './ameacas.component.scss',
})
export class AmeacasComponent {
  constructor(readonly service: AmeacaService) {}
}
