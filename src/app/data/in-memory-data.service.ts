import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { RacaData } from './raca.data';
import { Raca } from '../model/raca';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  items = [
    { id: 1, nome: 'Item 1' },
    { id: 2, nome: 'Item 2' },
  ];

  constructor(private readonly racaData: RacaData) {}

  createDb() {
    const raca: Raca[] = this.racaData.getRacas();
    return { items: this.items, raca: raca };
  }

}
