import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RacaData } from './raca.data';
import { Raca } from '../model/raca';
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
import { Pericia } from '../model/pericia';
import { PericiaData } from './pericia.data';
import { Acao } from '../model/acao';
import { AcaoData } from './acao.data';
import { Magia } from '../model/magia';
import { MagiaData } from './magia.data';
import { RegraData } from './regra.data';
import { Regra } from '../model/regra';
import { DistincaoData } from './distincao.data';
import { Distincao } from '../model/distincao';
import { ItemMagicoData } from './item.magico.data';
import { ItemMagico } from '../model/item.magico';
import { Condicao } from '@app/model/condicao';
import { CondicaoData } from './condicoes.data';
import { TabelaGeracaoTesouroData } from './tabela.geracao.tesouro.data';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor(
    private readonly racaData: RacaData,
    private readonly origemData: OrigemData,
    private readonly classeData: ClasseData,
    private readonly periciaData: PericiaData,
    private readonly deusData: DeusData,
    private readonly complicacaoData: ComplicacaoData,
    private readonly poderData: PoderData,
    private readonly itemData: ItemData,
    private readonly acaoData: AcaoData,
    private readonly condicaoData: CondicaoData,
    private readonly magiaData: MagiaData,
    private readonly regraData: RegraData,
    private readonly distincaoData: DistincaoData,
    private readonly itemMagicoData: ItemMagicoData,
    private readonly tabelaGeracaoTesouroData: TabelaGeracaoTesouroData
  ) {}

  createDb() {
    const raca: Raca[] = this.racaData.get();
    const origem: Origem[] = this.origemData.get();
    const classe: Classe[] = this.classeData.get();
    const condicao: Condicao[] = this.condicaoData.get();
    const pericia: Pericia[] = this.periciaData.get();
    const deus: Deus[] = this.deusData.get();
    const complicacao: Complicacao[] = this.complicacaoData.get();
    const poder: Poder[] = this.poderData.get();
    const item: Item[] = this.itemData.get();
    const acao: Acao[] = this.acaoData.get();
    const magia: Magia[] = this.magiaData.get();
    const regra: Regra[] = this.regraData.get();
    const distincao: Distincao[] = this.distincaoData.get();
    const itemMagico: ItemMagico[] = this.itemMagicoData.get();
    const tabelaGeracaoTesouroData: TabelaGeracaoTesouroData[] = this.tabelaGeracaoTesouroData.get();

    return {
      raca: raca,
      condicao: condicao,
      acao: acao,
      origem: origem,
      classe: classe,
      pericia: pericia,
      deus: deus,
      complicacao: complicacao,
      poder: poder,
      item: item,
      magia: magia,
      regra: regra,
      distincao: distincao,
      item_magico: itemMagico,
      tabelaGeracaoTesouroData: tabelaGeracaoTesouroData,
    };
  }
}
