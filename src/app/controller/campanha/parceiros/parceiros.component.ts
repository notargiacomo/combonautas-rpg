import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { ParceiroService } from '@app/service/parceiro.service';

@Component({
  selector: 'app-parceiros',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, NgFor],
  templateUrl: './parceiros.component.html',
  styleUrl: './parceiros.component.scss',
})
export class ParceirosComponent {
  constructor(readonly service: ParceiroService) {}
}
