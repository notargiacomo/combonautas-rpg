import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DeusData } from '../data/deus.data';
import { Deus } from '../model/deus';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class DeusService extends AbstractService{

  constructor(private readonly deusData: DeusData, private readonly http: HttpClient) {
    super('deus/');
  }

  listar(filtro:any): Observable<Deus[]> {
    return this.http.get<Deus[]>(this.url,{params:this.removeBlankAttributes(filtro)})
    .pipe(map(resultado => {
      resultado.forEach((deus) => {
        this.http
          .get(`assets/doc/${deus.nome_arquivo_descricao}.txt`, {
            responseType: 'text',
          })
          .subscribe((descricao) => (deus.descricao = descricao));
        this.http
          .get(`assets/doc/${deus.nome_arquivo_poderes}.txt`, {
            responseType: 'text',
          })
          .subscribe((poderes) => (deus.poderes = poderes));
      });
  
      return resultado;

    }));
  }
}
