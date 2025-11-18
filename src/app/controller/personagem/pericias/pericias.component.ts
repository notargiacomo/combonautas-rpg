import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { PericiaService } from '@app/service/pericia.service';

@Component({
  selector: 'app-pericias',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, NgIf],
  templateUrl: './pericias.component.html',
  styleUrl: './pericias.component.scss',
})
export class PericiasComponent {
  constructor(readonly periciasService: PericiaService) {}
}
