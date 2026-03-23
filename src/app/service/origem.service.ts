import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Origem } from '../model/origem';

export const FILTROS_ORIGEM = ['nome'];
@Injectable({
  providedIn: 'root',
})
export class OrigemService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('origem/');
  }

  listar(filtro: any): Observable<Origem[]> {
    let listas = this.http.get<Origem[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_ORIGEM);
  }

  consult(filtro: any): Observable<Origem[]> {
    let listas = this.http.get<Origem[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_ORIGEM);
  }
}
