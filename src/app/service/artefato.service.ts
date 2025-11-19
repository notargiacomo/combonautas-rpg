import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artefato } from '@app/model/artefato';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class ArtefatosService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('artefato/');
  }

  listar(filtro: any): Observable<Artefato[]> {
    let listas = this.http.get<Artefato[]>(this.url);
    return this.filtrar(filtro, listas, ['nome', 'descricao']);
  }

  consult(filtro: any): Observable<Artefato[]> {
    let listas = this.http.get<Artefato[]>(this.url);
    return this.filtrar(filtro, listas, ['nome', 'descricao']);
  }
}
