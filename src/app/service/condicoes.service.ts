import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Condicoes } from '../model/condicoes';

@Injectable({
  providedIn: 'root',
})
export class CondicoesService extends AbstractService {

  constructor(private readonly http: HttpClient) {
      super('condicoes');
  }

  listar(filtro:any): Observable<Condicoes[]> {
    return this.http.get<Condicoes[]>(this.url,{params:this.removeBlankAttributes(filtro)})
  }

}