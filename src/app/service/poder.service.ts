import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComplicacaoData } from '../data/complicacao.data';
import { Complicacao } from '../model/complicacao';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class PoderService extends AbstractService{

  constructor(private readonly complicacaoData: ComplicacaoData, private readonly http: HttpClient) {
    super('poder/');
  }

  listar(filtro:any): Observable<Complicacao[]> {
    return this.http.get<Complicacao[]>(this.url,{params:this.removeBlankAttributes(filtro)});
  }
}
