import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { Raca } from '../model/raca';
import { AbstractService } from './abstract.service';
import { PoderService } from './poder.service';
import { Poder } from '@app/model/poder';

@Injectable({
  providedIn: 'root',
})
export class RacaService extends AbstractService {
  constructor(
    private readonly http: HttpClient,
    private readonly poderService: PoderService
  ) {
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
              map(historia => {
                raca.historia = historia;
                return raca;
              })
            )
          );

          return forkJoin(requests);
        })
      ),
      ['nome', 'tipo', 'tamanho', 'deslocamentos', 'sentidos', 'descricao', 'devotos']
    );
  }

  consult(filtro: any, searchColumn: string[]): Observable<Raca[]> {
    let lista = this.http.get<Raca[]>(this.url);
    lista = this.carregarHistoria(lista);
    lista = this.carregaHabilidades(lista);
    lista = this.carregaPoderesRaciais(lista);

    return this.filtrar(filtro, lista, searchColumn).pipe(
      switchMap((racas: Raca[]) => {
        const requests = racas.map(raca =>
          this.http.get(`assets/doc/${raca.nome_arquivo_historia}.txt`, { responseType: 'text' }).pipe(
            map(historia => {
              raca.historia = historia;
              return raca;
            })
          )
        );

        return forkJoin(requests);
      })
    );
  }

  carregarHistoria(lista: Observable<Raca[]>) {
    return lista.pipe(
      switchMap((racas: Raca[]) => {
        const requests = racas.map(raca =>
          this.http.get(`assets/doc/${raca.nome_arquivo_historia}.txt`, { responseType: 'text' }).pipe(
            map(historia => {
              raca.historia = historia;
              return raca;
            })
          )
        );

        return forkJoin(requests);
      })
    );
  }

  carregaHabilidades(lista: Observable<Raca[]>): Observable<Raca[]> {
    return lista.pipe(
      switchMap(racas =>
        this.poderService.listar({}).pipe(
          map(poderes =>
            racas.map(raca => ({
              ...raca,
              habilidades: poderes.filter(p => raca.habilidades?.some(h => h.id === p.id)),
            }))
          )
        )
      )
    );
  }

  carregaPoderesRaciais(lista: Observable<Raca[]>): Observable<Raca[]> {
    return lista.pipe(
      switchMap(racas =>
        this.poderService.listar({}).pipe(
          map(poderes =>
            racas.map(raca => ({
              ...raca,
              poderes: poderes.filter(p => p.id_raca?.includes(raca.id)),
            }))
          )
        )
      )
    );
  }
}
