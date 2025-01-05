import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { RacaData } from './raca.data';
import { Raca } from '../model/raca';
import { condicoes } from './condicoes.data';
import { acoes } from './acoes.data';
import { OrigemData } from './origem.data';
import { Origem } from '../model/origem';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor(private readonly racaData: RacaData,
    private readonly origemData: OrigemData
  ) {}

  createDb() {
    const raca: Raca[] = this.racaData.getRacas();
    const origem: Origem[] = this.origemData.getOrigens();
    return { raca: raca, condicoes:condicoes, acoes:acoes, origem:origem};
  }

}
