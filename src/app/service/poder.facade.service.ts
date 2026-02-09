import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { ClasseService } from './classe.service';
import { DeusService } from './deus.service';
import { PoderService } from './poder.service';
import { RacaService } from './raca.service';

@Injectable({ providedIn: 'root' })
export class PoderFacadeService {
  constructor(
    private readonly poderService: PoderService,
    private readonly classeService: ClasseService,
    private readonly racaService: RacaService,
    private readonly deusService: DeusService
  ) {}

  consult(filtro: any, searchColumn: string[]): Observable<any[]> {
    return this.poderService.listGeneral().pipe(
      switchMap(poderes =>
        forkJoin({
          deuses: this.deusService.consult({}),
          racas: this.racaService.consult({}),
          classes: this.classeService.consult({}),
        }).pipe(
          map(({ deuses, racas, classes }) =>
            poderes.map(poder => ({
              ...poder,
              deuses: deuses.filter(d => poder.id_deuses?.includes(d.id)),
              raca: racas.find(r => poder.id_raca?.includes(r.id)),
              classe: classes.find(c => poder.id_classe === c.id),
            }))
          ),
          switchMap(result =>
            this.poderService.filtrar(filtro, of(result), ['nome', 'descricao', 'referencias', 'tipo'])
          )
        )
      )
    );
  }
}
