import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { Acao } from '../model/acao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcoesService extends AbstractService {

  constructor(private readonly http: HttpClient) {
      super('acao/');
  }

  listar(filtro: any): Observable<Acao[]> {
    let listas = this.http.get<Acao[]>(this.url);
    return this.filtrar(filtro, listas);
  }
}
