import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { Deus } from '@app/model/deus';
import { TipoPoder } from '@app/enum/tipo.poder.enum';
import { DeusService } from './deus.service';
import { PoderService } from './poder.service';

@Injectable({ providedIn: 'root' })
export class DeusFacadeService {
  constructor(
    private readonly deusService: DeusService,
    private readonly poderService: PoderService
  ) {}

  consult(filtro: any, searchColumn: string[] = []): Observable<Deus[]> {
    return forkJoin({
      deuses: this.deusService.consult({}),
      poderes: this.poderService.listAll(),
    }).pipe(
      map(({ deuses, poderes }) =>
        deuses.map(deus => ({
          ...deus,
          poderes: poderes.filter(p => p.id_deuses?.includes(deus.id) && p.tipo === TipoPoder.PODER_CONCEDIDO),
        }))
      ),
      switchMap(deusesEnriquecidos => this.deusService.filtrar(filtro, of(deusesEnriquecidos), searchColumn))
    );
  }
}
