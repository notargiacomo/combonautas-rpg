import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemMagicoData } from '../data/item.magico.data';
import { ItemMagico } from '../model/item.magico';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class ItemMagicoService extends AbstractService{

  constructor(private readonly itemData: ItemMagicoData, private readonly http: HttpClient
  ) {
    super('item_magico/');
  }

  listar(filtro:any): Observable<ItemMagico[]> {
    return this.http.get<ItemMagico[]>(this.url,{params:this.removeBlankAttributes(filtro)});
  }
}
