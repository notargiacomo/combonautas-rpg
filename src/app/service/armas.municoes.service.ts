import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Item } from '../model/item';
import { AbstractService } from './abstract.service';
import { TipoItem } from '@app/enum/tipo.item.enum';
import { Chave } from '@app/enum/chave.enum';

export const FILTROS_ARMAS_MUNICOES = ['nome', 'descricao', 'tipo', 'referencias', 'tipo_dano', 'chave'];
@Injectable({
  providedIn: 'root',
})
export class ArmasMunicoesService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('item/');
  }

  listar(filtro: any): Observable<Item[]> {
    return this.http.get<Item[]>(this.url, { params: this.removeBlankAttributes(filtro) });
  }

  consult(filtro: any): Observable<Item[]> {
    let listas = this.http.get<Item[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_ARMAS_MUNICOES).pipe(
      map(itens =>
        itens.filter(
          i =>
            [TipoItem.ARMA.toString(), TipoItem.MUNICAO.toString()].includes(i.tipo!) &&
            !i.chave.includes(Chave.ITEM_MAGICO_MAIOR, Chave.ITEM_MAGICO_MEDIO, Chave.ITEM_MAGICO_MENOR)
        )
      )
    );
  }
}
