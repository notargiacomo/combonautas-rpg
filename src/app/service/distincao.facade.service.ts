import { Injectable } from '@angular/core';
import { TipoPoder } from '@app/enum/tipo.poder.enum';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { ClasseService } from './classe.service';
import { PoderService } from './poder.service';
import { DistincaoService } from './distincao.service';

@Injectable({ providedIn: 'root' })
export class DistincaoFacadeService {
  constructor(
    private readonly distincaoService: DistincaoService,
    private readonly poderService: PoderService
  ) {}

  consult(filtro: any, searchColumn: string[]): Observable<any[]> {
    return forkJoin({
      distincoes: this.distincaoService.consult({}),
      poderes: this.poderService.listAll(),
    }).pipe(
      map(({ distincoes, poderes }) =>
        distincoes.map(distincao => ({
          ...distincao,
          poderes: poderes.filter(p => p.id_distincao === distincao.id && p.tipo === TipoPoder.PODER_DISTINCAO),
        }))
      ),
      switchMap(result => this.distincaoService.filtrar(filtro, of(result), ['nome', 'descricao']))
    );
  }
}
