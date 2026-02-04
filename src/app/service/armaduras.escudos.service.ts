import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Item } from '../model/item';
import { AbstractService } from './abstract.service';
import { TipoItem } from '@app/enum/tipo.item.enum';
import { Chave } from '@app/enum/chave.enum';

export const FILTROS_ARMADURAS_ESCUDOS = ['nome', 'descricao', 'tipo', 'referencias', 'chave'];

@Injectable({
  providedIn: 'root',
})
export class ArmadurasEscudosService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('item/');
  }

  listar(filtro: any): Observable<Item[]> {
    return this.http.get<Item[]>(this.url, { params: this.removeBlankAttributes(filtro) });
  }

  consult(filtro: any): Observable<Item[]> {
    let listas = this.http.get<Item[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_ARMADURAS_ESCUDOS).pipe(
      map(itens =>
        itens.filter(
          i =>
            [TipoItem.ARMADURA.toString(), TipoItem.ESCUDO.toString()].includes(i.tipo!) &&
            !i.chave.includes(Chave.ITEM_MAGICO_MAIOR, Chave.ITEM_MAGICO_MEDIO, Chave.ITEM_MAGICO_MENOR)
        )
      )
    );
  }
}
