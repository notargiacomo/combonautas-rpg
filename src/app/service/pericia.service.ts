import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Pericia } from '@app/model/pericia';

@Injectable({
  providedIn: 'root',
})
export class PericiaService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('pericia/');
  }

  listar(filtro: any): Observable<Pericia[]> {
    let listas = this.http.get<Pericia[]>(this.url);
    return this.filtrar(filtro, listas, ['nome', 'descricao']);
  }
}
