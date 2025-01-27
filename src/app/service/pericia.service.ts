import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pericia } from '../model/pericia';

@Injectable({
  providedIn: 'root'
})
export class PericiasService extends AbstractService {

  constructor(private readonly http: HttpClient) {
      super('pericia/');
  }

  listar(filtro:any): Observable<Pericia[]> {
    return this.http.get<Pericia[]>(this.url,{params:this.removeBlankAttributes(filtro)})
  }
}
