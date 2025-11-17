import { Component } from '@angular/core';
import { ItemService } from '@app/service/item.service';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-armas',
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent],
  templateUrl: './armas.component.html',
  styleUrl: './armas.component.scss',
})
export class ArmasComponent {
  constructor(readonly itemService: ItemService) {}
}
