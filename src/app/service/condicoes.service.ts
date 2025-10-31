import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Condicao } from '../model/condicao';

@Injectable({
  providedIn: 'root',
})
export class CondicoesService extends AbstractService {

  constructor(private readonly http: HttpClient) {
      super('condicao/');
  }

  listar(filtro: any): Observable<Condicao[]> {
    let listas = this.http.get<Condicao[]>(this.url);
    return this.filtrar(filtro, listas);
  }

}