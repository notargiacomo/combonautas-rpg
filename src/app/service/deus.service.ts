import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Deus } from '@app/model/deus';

@Injectable({
  providedIn: 'root',
})
export class DeusService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('deus/');
  }

  listar(filtro: any): Observable<Deus[]> {
    const lista = this.http.get<Deus[]>(this.url);
    return this.filtrar(filtro, lista, ['nome']);
  }

  getById(id: number): Observable<Deus> {
    return this.http.get<Deus>(`${this.url}${id}`);
  }

  consult(filtro: any): Observable<Deus[]> {
    return this.filtrar(filtro, this.http.get<Deus[]>(this.url), ['nome', 'descricao', 'referencias']);
  }
}
