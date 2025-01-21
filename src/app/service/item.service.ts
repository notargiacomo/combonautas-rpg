import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemData } from '../data/item.data';
import { Item } from '../model/item';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService extends AbstractService{

  constructor(private readonly itemData: ItemData, private readonly http: HttpClient
  ) {
    super('item/');
  }

  listar(filtro:any): Observable<Item[]> {
    return this.http.get<Item[]>(this.url,{params:this.removeBlankAttributes(filtro)});
  }
}
