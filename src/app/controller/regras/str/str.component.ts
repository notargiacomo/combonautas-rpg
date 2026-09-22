import { Component } from '@angular/core';
import { StrService } from '@app/service/str.service';
import { MatCardTitle, MatCard, MatCardContent } from '@angular/material/card';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';

@Component({
  selector: 'app-str',
  imports: [MatCardTitle, MatCard, MatCardContent, CardSearchComponent],
  templateUrl: './str.component.html',
  styleUrl: './str.component.scss',
})
export class StrComponent {
  constructor(readonly strService: StrService) {}
}
