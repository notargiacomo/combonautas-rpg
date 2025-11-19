import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoParceiro } from '@app/model/tipo.parceiro';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class ParceiroService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('parceiro/');
  }

  listar(filtro: any): Observable<TipoParceiro[]> {
    let listas = this.http.get<TipoParceiro[]>(this.url);
    return this.filtrar(filtro, listas, ['nome', 'descricao']);
  }

  consult(filtro: any): Observable<TipoParceiro[]> {
    let listas = this.http.get<TipoParceiro[]>(this.url);
    return this.filtrar(filtro, listas, ['nome', 'descricao']);
  }
}
