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
import { DeusData } from './deus.data';
import { Deus } from '../model/deus';
import { Complicacao } from '../model/complicacao';
import { ComplicacaoData } from './complicacao.data';
import { Poder } from '../model/poder';
import { PoderData } from './poder.data';
import { Item } from '../model/item';
import { ItemData } from './item.data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor(private readonly racaData: RacaData,
    private readonly origemData: OrigemData,
    private readonly classeData: ClasseData,
    private readonly deusData: DeusData,
    private readonly complicacaoData: ComplicacaoData,
    private readonly poderData: PoderData,
    private readonly itemData: ItemData
  ) {}

  createDb() {
    const raca: Raca[] = this.racaData.getRacas();
    const origem: Origem[] = this.origemData.getOrigens();
    const classe: Classe[] = this.classeData.getClasses();
    const deus: Deus[] = this.deusData.getDeuses();
    const complicacao: Complicacao[] = this.complicacaoData.getComplicacoes();
    const poder: Poder[] = this.poderData.getPoderes();
    const item: Item[] = this.itemData.getItens();
    return { raca: raca, condicoes:condicoes, acoes:acoes, origem:origem, classe:classe, deus:deus, complicacao:complicacao, poder:poder, item:item};
  }

}
