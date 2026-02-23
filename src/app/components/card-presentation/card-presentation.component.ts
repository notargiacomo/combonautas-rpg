import { Component, Input } from '@angular/core';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardContent,
  MatCardActions,
  MatCardSubtitle,
} from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-presentation',
  standalone: true,
  imports: [MatCard, MatCardTitle, MatCardActions, RouterModule, MatCardContent],
  templateUrl: './card-presentation.component.html',
  styleUrl: './card-presentation.component.scss',
})
export class CardPresentationComponent {
  @Input() titulo!: string;
  @Input() caminho_imagem!: string;
  @Input() descricao!: string;
  @Input() links: LinkItem[] = [];
}

export interface LinkItem {
  nome: string;
  link: string;
}
