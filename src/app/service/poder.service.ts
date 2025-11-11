import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Poder } from '@app/model/poder';

@Injectable({
  providedIn: 'root',
})
export class PoderService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('poder/');
  }

  listar(filtro: any): Observable<Poder[]> {
    let listas = this.http.get<Poder[]>(this.url);
    return this.filtrar(filtro, listas, ['nome', 'tipo', 'referencias', 'descricao']);
  }
}
