import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoPoder } from '@app/enum/tipo.poder.enum';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { Raca } from '../model/raca';
import { AbstractService } from './abstract.service';
import { PoderService } from './poder.service';

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
    return this.http.get<Raca[]>(this.url).pipe(
      switchMap(racas =>
        forkJoin({
          poderes: this.poderService.listar({}),
          historias: forkJoin(
            racas.map(r => this.http.get(`assets/doc/${r.nome_arquivo_historia}.txt`, { responseType: 'text' }))
          ),
        }).pipe(
          map(({ poderes, historias }) => {
            return racas.map((raca, index) => ({
              ...raca,
              historia: historias[index],
              habilidades: poderes.filter(
                p => raca.habilidades?.some(h => h.id === p.id) && p.tipo === TipoPoder.HABILIDADE_RACA
              ),
              poderes: poderes.filter(p => p.id_raca?.includes(raca.id) && p.tipo === TipoPoder.PODER_RACA),
            }));
          }),
          switchMap(racasFinal => this.filtrar(filtro, of(racasFinal), searchColumn))
        )
      )
    );
  }
}
