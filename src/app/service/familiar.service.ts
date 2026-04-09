import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Familiar } from '@app/model/familiar';

export const FILTROS_FAMILIAR = ['nome'];

@Injectable({
  providedIn: 'root',
})
export class FamiliarService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('familiar/');
  }

  listar(filtro: any): Observable<Familiar[]> {
    let listas = this.http.get<Familiar[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_FAMILIAR);
  }

  consult(filtro: any): Observable<Familiar[]> {
    let listas = this.http.get<Familiar[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_FAMILIAR);
  }
}
