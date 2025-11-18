import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Deus } from '@app/model/deus';
import { TipoPoder } from '@app/enum/tipo.poder.enum';
import { PoderService } from './poder.service';

@Injectable({
  providedIn: 'root',
})
export class DeusService extends AbstractService {
  constructor(
    private readonly http: HttpClient,
    private readonly poderService: PoderService
  ) {
    super('deus/');
  }

  listar(filtro: any): Observable<Deus[]> {
    let listas = this.http.get<Deus[]>(this.url);
    return this.filtrar(filtro, listas, ['nome']);
  }

  getbyId(id: number | undefined) {
    return this.http.get<any>(this.url + id);
  }

  consult(filtro: any, searchColumn: string[]): Observable<Deus[]> {
    return this.http.get<Deus[]>(this.url).pipe(
      switchMap(deuses =>
        forkJoin({
          poderes: this.poderService.listar({}),
        }).pipe(
          map(({ poderes }) => {
            return deuses.map(deus => ({
              ...deus,
              poderes: poderes.filter(p => p.id_deuses?.includes(deus.id) && p.tipo === TipoPoder.PODER_CONCEDIDO),
            }));
          }),
          switchMap(deusFinal => this.filtrar(filtro, of(deusFinal), searchColumn))
        )
      )
    );
  }
}
