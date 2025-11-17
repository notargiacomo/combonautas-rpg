import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { OrigemService } from '@app/service/origem.service';

@Component({
  selector: 'app-origens',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent],
  templateUrl: './origens.component.html',
  styleUrl: './origens.component.scss',
})
export class OrigensComponent {
  constructor(readonly origemService: OrigemService) {}
}
