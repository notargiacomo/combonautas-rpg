import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { Acao } from '../model/acoes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcoesService extends AbstractService {

  constructor(private readonly http: HttpClient) {
      super('acoes');
  }

  listar(filtro:any): Observable<Acao[]> {
    return this.http.get<Acao[]>(this.url,{params:this.removeBlankAttributes(filtro)})
  }
}
