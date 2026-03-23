import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complicacao } from '@app/model/complicacao';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';

export const FILTROS_COMPLICACAO = ['nome'];

@Injectable({
  providedIn: 'root',
})
export class ComplicacaoService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('complicacao/');
  }

  listar(filtro: any): Observable<Complicacao[]> {
    let listas = this.http.get<Complicacao[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_COMPLICACAO);
  }

  consult(filtro: any, searchColumn: string[]): Observable<Complicacao[]> {
    let listas = this.http.get<Complicacao[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_COMPLICACAO);
  }
}
