import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { RacaData } from './raca.data';
import { Raca } from '../model/raca';
import { condicoes } from './condicoes.data';
import { acoes } from './acoes.data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor(private readonly racaData: RacaData) {}

  createDb() {
    const raca: Raca[] = this.racaData.getRacas();
    return { raca: raca, condicoes:condicoes, acoes:acoes };
  }

}
