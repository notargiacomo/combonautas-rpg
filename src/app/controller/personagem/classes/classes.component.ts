import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';
import { Classe } from '@app/model/classe';
import { ClasseFacadeService } from '@app/service/classe.facade.service';
import { ClasseService } from '@app/service/classe.service';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CardSearchComponent, MatCard, MatCardTitle, MatCardContent, MatTab, MatTabGroup, NgFor, NgIf],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss',
})
export class ClassesComponent {
  constructor(readonly classesService: ClasseFacadeService) {}

  carregarAbas(classe: Classe) {
    this.classesService.recuperaHabilidades(classe);
    this.classesService.recuperaPoderes(classe);
    return classe;
  }
}
