import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MagiaData } from '../data/magia.data';
import { Magia } from '../model/magia';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class MagiaService extends AbstractService{

  constructor(private readonly magiaData: MagiaData, private readonly http: HttpClient
  ) {
    super('magia/');
  }

  listar(filtro:any): Observable<Magia[]> {
    return this.http.get<Magia[]>(this.url,{params:this.removeBlankAttributes(filtro)});
  }
}
