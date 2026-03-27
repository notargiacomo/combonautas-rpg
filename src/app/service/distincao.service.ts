import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Distincao } from '../model/distincao';

export const FILTROS_DISTINCAO = [
  'nome'
];

@Injectable({
  providedIn: 'root',
})
export class DistincaoService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('distincao/');
  }

  listar(filtro: any): Observable<Distincao[]> {
    return this.http.get<Distincao[]>(this.url, { params: this.removeBlankAttributes(filtro) });
  }

  getbyId(id: number | undefined) {
    return this.http.get<any>(this.url + id);
  }

  getAll(): Observable<Distincao[]> {
    return this.http.get<Distincao[]>(this.url);
  }

  consult(filtro: any): Observable<Distincao[]> {
    let listas = this.http.get<Distincao[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_DISTINCAO);
  }
}
