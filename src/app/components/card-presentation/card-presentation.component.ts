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
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions, MatCardSubtitle, RouterModule],
  templateUrl: './card-presentation.component.html',
  styleUrl: './card-presentation.component.scss',
})
export class CardPresentationComponent {
  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() caminho_imagem!: string;
  @Input() descricao!: string;
  @Input() links: LinkItem[] = [];
}

export interface LinkItem {
  nome: string;
  link: string;
}
