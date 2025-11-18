import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { PoderFacadeService } from '@app/service/poder.facade.service';

@Component({
  selector: 'app-poderes',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, NgIf, NgFor],
  templateUrl: './poderes.component.html',
  styleUrl: './poderes.component.scss',
})
export class PoderesComponent {
  constructor(readonly poderesService: PoderFacadeService) {}
}
