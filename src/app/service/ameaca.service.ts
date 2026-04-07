import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ameaca } from '@app/model/ameaca';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';

export const FILTROS_AMEACA = ['nome', 'grupo'];
@Injectable({
  providedIn: 'root',
})
export class AmeacaService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('ameaca/');
  }

  listar(filtro: any): Observable<Ameaca[]> {
    let listas = this.http.get<Ameaca[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_AMEACA);
  }

  consult(filtro: any): Observable<Ameaca[]> {
    let listas = this.http.get<Ameaca[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_AMEACA);
  }
}
