import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complicacao } from '@app/model/complicacao';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { AbstractService } from './abstract.service';
import { ClasseService } from './classe.service';
import { Str } from '@app/model/str';

export const FILTROS_STR = ['nome', 'pergunta', 'resposta'];

@Injectable({
  providedIn: 'root',
})
export class StrService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('str/');
  }

  listar(filtro: any): Observable<Str[]> {
    let listas = this.http.get<Str[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_STR);
  }

  consult(filtro: any): Observable<Str[]> {
    let listas = this.http.get<Str[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_STR);
  }
}
