import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parceiro } from '@app/model/tipo.parceiro';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';

export const FILTROS_PARCEIRO = [
  'nome',
  'tipo',
  'chave',
];

@Injectable({
  providedIn: 'root',
})
export class ParceiroService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('parceiro/');
  }

  listar(filtro: any): Observable<Parceiro[]> {
    let listas = this.http.get<Parceiro[]>(this.url);
    return this.filtrar(filtro, listas, ['nome', 'descricao']);
  }

  consult(filtro: any): Observable<Parceiro[]> {
    let listas = this.http.get<Parceiro[]>(this.url);
    return this.filtrar(filtro, listas, ['nome', 'descricao']);
  }
}
