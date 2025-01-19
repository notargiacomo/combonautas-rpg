import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root',
})
export class ItemData {
  private itens: Item[] = [];

  getItens(): any[] {
    return this.itens;
  }

  constructor() {
    this.itens = [
    ];
  }
}
