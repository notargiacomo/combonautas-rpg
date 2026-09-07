import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complicacao } from '@app/model/complicacao';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { AbstractService } from './abstract.service';
import { ClasseService } from './classe.service';

export const FILTROS_COMPLICACAO = ['nome'];

@Injectable({
  providedIn: 'root',
})
export class ComplicacaoService extends AbstractService {
  constructor(
    private readonly http: HttpClient,
    private readonly classeService: ClasseService
  ) {
    super('complicacao/');
  }

  listar(filtro: any): Observable<Complicacao[]> {
    const listas = this.http.get<Complicacao[]>(this.url);

    return this.filtrar(filtro, listas, FILTROS_COMPLICACAO).pipe(
      switchMap(complicacoes => this.carregarClasses(complicacoes))
    );
  }

  consult(filtro: any, searchColumn: string[]): Observable<Complicacao[]> {
    const listas = this.http.get<Complicacao[]>(this.url);

    return this.filtrar(filtro, listas, FILTROS_COMPLICACAO).pipe(
      switchMap(complicacoes => this.carregarClasses(complicacoes))
    );
  }

  private carregarClasses(complicacoes: Complicacao[]): Observable<Complicacao[]> {
    return forkJoin(
      complicacoes.map(complicacao => {
        if (!complicacao.classe?.id) {
          return of(complicacao);
        }

        return this.classeService.getbyId(complicacao.classe.id).pipe(
          map(classe => ({
            ...complicacao,
            classe,
          }))
        );
      })
    );
  }
}
