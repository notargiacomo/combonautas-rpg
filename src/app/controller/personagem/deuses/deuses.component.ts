import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { DeusService } from '@app/service/deus.service';
import { MatTabGroup, MatTab } from '@angular/material/tabs';

@Component({
  selector: 'app-deuses',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, NgIf, NgFor, MatTabGroup, MatTab],
  templateUrl: './deuses.component.html',
  styleUrl: './deuses.component.scss',
})
export class DeusesComponent {
  constructor(readonly deusesService: DeusService) {}
}
