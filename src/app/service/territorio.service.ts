import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Territorio } from '@app/model/territorio';

export const FILTROS_TERRITORIO = ['nome', 'descricao'];
@Injectable({
  providedIn: 'root',
})
export class TerritorioService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('territorio/');
  }

  listar(filtro: any): Observable<Territorio[]> {
    let listas = this.http.get<Territorio[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_TERRITORIO);
  }

  consult(filtro: any): Observable<Territorio[]> {
    let listas = this.http.get<Territorio[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_TERRITORIO);
  }
}
