import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TabelaGeracaoTesouroData {
  private tabelaGeracaoTesouroData: any[] = [];

  get(): any[] {
    return this.tabelaGeracaoTesouroData;
  }

  constructor() {
    
  }
}
