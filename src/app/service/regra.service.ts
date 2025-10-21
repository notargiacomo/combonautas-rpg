import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RegraData } from '../data/regra.data';
import { Regra } from '../model/regra';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class RegraService extends AbstractService {
  constructor(
    private readonly http: HttpClient
  ) {
    super('regra/');
  }

  listar(filtro:any): Observable<Regra[]> {
    return this.http.get<Regra[]>(this.url,{params:this.removeBlankAttributes(filtro)})
  }
}
