import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classe } from '@app/model/classe';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class ClasseService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('classe/');
  }

  listar(filtro: any): Observable<Classe[]> {
    let listas = this.http.get<Classe[]>(this.url);
    return this.filtrar(filtro, listas, [
      'nome',
      'tipo',
      'tamanho',
      'deslocamentos',
      'sentidos',
      'descricao',
      'devotos',
    ]);
  }

  getbyId(id: number | undefined) {
    return this.http.get<any>(this.url + id);
  }
}
