import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Parceiro } from '@app/model/parceiro';

export const FILTROS_PARCEIRO = [
  'nome',
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
    return this.filtrar(filtro, listas, FILTROS_PARCEIRO);
  }

  consult(filtro: any): Observable<Parceiro[]> {
    let listas = this.http.get<Parceiro[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_PARCEIRO);
  }
}
