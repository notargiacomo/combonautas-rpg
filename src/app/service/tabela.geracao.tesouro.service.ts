import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabelaGeracaoTesouroDataDinheiroService extends AbstractService {

  constructor(private readonly http: HttpClient) {
      super('tabelaGeracaoTesouroData/');
  }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
  }
}
