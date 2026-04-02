import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { CondicoesService } from '@app/service/condicoes.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';

@Component({
  selector: 'app-condicoes',
  imports: [MatDividerModule, MatCardModule, MatGridListModule, MatInputModule, CardSearchComponent],
  templateUrl: './condicoes.component.html',
  styleUrl: './condicoes.component.scss',
})
export class CondicoesComponent {
  constructor(readonly service: CondicoesService) {}
}
