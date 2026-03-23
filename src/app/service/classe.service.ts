import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classe } from '@app/model/classe';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';

export const FILTROS_CLASSE = ['nome', 'proficiencias'];
@Injectable({
  providedIn: 'root',
})
export class ClasseService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('classe/');
  }

  listar(filtro: any): Observable<Classe[]> {
    let listas = this.http.get<Classe[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_CLASSE);
  }

  getbyId(id: number | undefined) {
    return this.http.get<any>(this.url + id);
  }

  getAll(): Observable<Classe[]> {
    return this.http.get<Classe[]>(this.url);
  }

  consult(filtro: any): Observable<Classe[]> {
    return this.filtrar(filtro, this.http.get<Classe[]>(this.url), FILTROS_CLASSE);
  }
}
