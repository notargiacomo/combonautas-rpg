import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Regra } from '../model/regra';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class RegraService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('regra/');
  }

  listar(filtro: any): Observable<Regra[]> {
    let listas = this.http.get<Regra[]>(this.url);
    return this.filtrar(filtro, listas, ['nome', 'descricao', 'regras', 'referencia']);
  }
}
