import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { Raca } from '../model/raca';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class RacaService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('raca/');
  }

  listar(filtro: any): Observable<Raca[]> {
    let listas = this.http.get<Raca[]>(this.url);

    return this.filtrar(
      filtro,
      listas.pipe(
        switchMap((racas: Raca[]) => {
          const requests = racas.map(raca =>
            this.http.get(`assets/doc/${raca.nome_arquivo_historia}.txt`, { responseType: 'text' }).pipe(
              map(historia => ({
                ...raca,
                historia,
              }))
            )
          );
          return forkJoin(requests);
        })
      ),
      ['nome', 'tipo', 'tamanho', 'deslocamentos', 'sentidos', 'descricao']
    );
  }

  consult(filtro: any): Observable<Raca[]> {
    let listas = this.http.get<Raca[]>(this.url).pipe(
      switchMap((racas: Raca[]) => {
        const requests = racas.map(raca =>
          this.http.get(`assets/doc/${raca.nome_arquivo_historia}.txt`, { responseType: 'text' }).pipe(
            map(historia => ({
              ...raca,
              historia,
            }))
          )
        );
        return forkJoin(requests);
      })
    );
    return this.filtrar(filtro, listas, ['nome', 'tipo', 'tamanho', 'deslocamentos', 'sentidos', 'descricao']);
  }
}
