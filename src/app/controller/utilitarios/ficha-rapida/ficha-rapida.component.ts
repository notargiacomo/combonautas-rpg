import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { AtributoPersonagem, AttributeComponent } from '@app/components/attribute/attribute.component';
import { CombonautasBase } from '@app/components/combonautas-base';

@Component({
  selector: 'app-ficha-rapida',
  imports: [MatCard, AttributeComponent],
  templateUrl: './ficha-rapida.component.html',
  styleUrl: './ficha-rapida.component.scss',
})
export class FichaRapidaComponent extends CombonautasBase {
  points: number = 10;
  attributes: AtributoPersonagem[] = [];

  constructor() {
    super();
  }
}
