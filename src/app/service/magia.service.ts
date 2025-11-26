import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Magia } from '../model/magia';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class MagiaService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('magia/');
  }

  listar(filtro: any): Observable<Magia[]> {
    return this.http.get<Magia[]>(this.url, { params: this.removeBlankAttributes(filtro) });
  }

  consult(filtro: any): Observable<Magia[]> {
    let listas = this.http.get<Magia[]>(this.url);
    return this.filtrar(filtro, listas, ['nome', 'regiao', 'descricao', 'referencias']);
  }
}
