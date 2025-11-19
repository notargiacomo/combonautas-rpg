import { Injectable } from '@angular/core';
import { TipoPoder } from '@app/enum/tipo.poder.enum';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { PoderService } from './poder.service';
import { RacaService } from './raca.service';

@Injectable({ providedIn: 'root' })
export class RacaFacadeService {
  constructor(
    private readonly racaService: RacaService,
    private readonly poderService: PoderService
  ) {}

  consult(filtro: any, searchColumn: string[]): Observable<any[]> {
    return forkJoin({
      racas: this.racaService.consult({}),
      poderes: this.poderService.listAll(),
    }).pipe(
      map(({ racas, poderes }) =>
        racas.map(raca => ({
          ...raca,
          habilidades: poderes.filter(
            p => raca.habilidades?.some(h => h.id === p.id) && p.tipo === TipoPoder.HABILIDADE_RACA
          ),
          poderes: poderes.filter(p => p.id_raca?.includes(raca.id) && p.tipo === TipoPoder.PODER_RACA),
        }))
      ),
      switchMap(result =>
        this.racaService.filtrar(filtro, of(result), [
          'nome',
          'tipo',
          'tamanho',
          'deslocamentos',
          'sentidos',
          'descricao',
        ])
      )
    );
  }
}
