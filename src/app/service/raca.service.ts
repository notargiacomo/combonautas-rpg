import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { Raca } from '../model/raca';
import { AbstractService } from './abstract.service';

export const FILTROS_RACA = ['nome', 'tipo', 'tamanho', 'deslocamento', 'sentido'];
//'tamanho', 'deslocamentos', 'sentidos', 'descricao'
@Injectable({
  providedIn: 'root',
})
export class RacaService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('raca/');
  }

  listar(filtro: any): Observable<Raca[]> {
    let listas = this.getAll();
    return this.filtrar(filtro, listas, FILTROS_RACA);
  }

  consult(filtro: any): Observable<Raca[]> {
    let listas = this.getAll();
    return this.filtrar(filtro, listas, FILTROS_RACA);
  }

  getAll(): Observable<Raca[]> {
    return this.http.get<Raca[]>(this.url);
  }

  getHistoria(raca: Raca): Observable<string> {
    if (!raca.nome_arquivo_historia) {
      return of('');
    }

    return this.http.get(`assets/doc/${raca.nome_arquivo_historia}.txt`, { responseType: 'text' });
  }
}
