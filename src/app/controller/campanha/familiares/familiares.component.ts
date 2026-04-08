import { Component } from '@angular/core';
import { FamiliarService } from '@app/service/familiar.service';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-familiares',
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent],
  templateUrl: './familiares.component.html',
  styleUrl: './familiares.component.scss',
})
export class FamiliaresComponent {
  constructor(readonly service: FamiliarService) {}
}
