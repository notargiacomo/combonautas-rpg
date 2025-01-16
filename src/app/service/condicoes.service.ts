import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Condicao } from '../model/condicao';

@Injectable({
  providedIn: 'root',
})
export class CondicoesService extends AbstractService {

  constructor(private readonly http: HttpClient) {
      super('condicoes/');
  }

  listar(filtro:any): Observable<Condicao[]> {
    return this.http.get<Condicao[]>(this.url,{params:this.removeBlankAttributes(filtro)})
  }

}