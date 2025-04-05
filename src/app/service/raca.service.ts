import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RacaData } from '../data/raca.data';
import { Raca } from '../model/raca';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class RacaService extends AbstractService {
  constructor(
    private readonly racaData: RacaData,
    private readonly http: HttpClient
  ) {
    super('raca/');
  }

  listar(filtro: any): Observable<Raca[]> {
    return this.http
      .get<Raca[]>(this.url, { params: this.removeBlankAttributes(filtro) })
      .pipe(
        map((resultado) => {
          resultado.forEach((raca) => {
            this.http
              .get(`assets/doc/${raca.nome_arquivo_descricao}.txt`, {
                responseType: 'text',
              })
              .subscribe((descricao) => (raca.descricao = descricao));
            this.http
              .get(`assets/doc/${raca.nome_arquivo_historia}.txt`, {
                responseType: 'text',
              })
              .subscribe((historia) => (raca.historia = historia));
          });

          return resultado;
        })
      );
  }
}
