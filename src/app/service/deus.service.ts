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
    let listas = this.http.get<Deus[]>(this.url);
    return this.filtrar(filtro, listas, ['nome']);
  }

  getbyId(id: number | undefined) {
    return this.http.get<any>(this.url + id);
  }
}
