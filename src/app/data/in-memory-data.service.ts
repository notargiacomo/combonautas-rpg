import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RacaData } from './raca.data';
import { Raca } from '../model/raca';
import { condicoes } from './condicoes.data';
import { acoes } from './acoes.data';
import { OrigemData } from './origem.data';
import { Origem } from '../model/origem';
import { Classe } from '../model/classe';
import { ClasseData } from './classe.data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor(private readonly racaData: RacaData,
    private readonly origemData: OrigemData,
    private readonly classeData: ClasseData
  ) {}

  createDb() {
    const raca: Raca[] = this.racaData.getRacas();
    const origem: Origem[] = this.origemData.getOrigens();
    const classe: Classe[] = this.classeData.getClasses();
    return { raca: raca, condicoes:condicoes, acoes:acoes, origem:origem, classe:classe};
  }

}
