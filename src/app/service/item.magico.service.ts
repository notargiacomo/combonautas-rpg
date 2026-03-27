import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemMagico } from '../model/item.magico';
import { AbstractService } from './abstract.service';

export const FILTROS_ITEM_MAGICO = [
  'nome',
  'tipo',
  'chave'
];

@Injectable({
  providedIn: 'root',
})
export class ItemMagicoService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('item_magico/');
  }

  listar(filtro: any): Observable<ItemMagico[]> {
    return this.http.get<ItemMagico[]>(this.url, { params: this.removeBlankAttributes(filtro) });
  }

  consult(filtro: any): Observable<ItemMagico[]> {
    return this.filtrar(filtro, this.http.get<ItemMagico[]>(this.url), FILTROS_ITEM_MAGICO);
  }
}
