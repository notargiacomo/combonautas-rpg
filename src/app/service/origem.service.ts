import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { OrigemData } from '../data/origem.data';
import { Origem } from '../model/origem';

@Injectable({
  providedIn: 'root',
})
export class OrigemService extends AbstractService{

  constructor(private readonly origemData: OrigemData, private readonly http: HttpClient) {
    super('origem');
  }

  listar(filtro:any): Observable<Origem[]> {
    return this.http.get<Origem[]>(this.url,{params:this.removeBlankAttributes(filtro)});
  }
}
