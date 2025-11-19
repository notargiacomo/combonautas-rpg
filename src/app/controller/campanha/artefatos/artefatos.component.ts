import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { ArtefatosService } from '@app/service/artefato.service';

@Component({
  selector: 'app-artefatos',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent],
  templateUrl: './artefatos.component.html',
  styleUrl: './artefatos.component.scss',
})
export class ArtefatosComponent {
  constructor(readonly service: ArtefatosService) {}
}
