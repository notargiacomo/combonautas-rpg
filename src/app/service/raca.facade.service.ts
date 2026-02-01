import { Injectable } from '@angular/core';
import { TipoPoder } from '@app/enum/tipo.poder.enum';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { PoderService } from './poder.service';
import { FILTROS_RACA, RacaService } from './raca.service';
import { Raca } from '@app/model/raca';

@Injectable({ providedIn: 'root' })
export class RacaFacadeService {
  constructor(
    private readonly racaService: RacaService,
    private readonly poderService: PoderService
  ) {}

  consult(filtro: any, searchColumn: string[]): Observable<any[]> {
    let result = null;
    if (filtro && Object.keys(filtro).length > 0) {
      let listas = this.racaService.consult({});
      result = this.racaService.filtrar(filtro, listas, FILTROS_RACA);
    } else {
      result = this.racaService.consult({});
    }
    return result;
  }

  recuperaHabilidades(raca: Raca) {
    if (raca.habilidades) return;

    this.poderService.listAll().subscribe(poderes => {
      raca.habilidades = poderes.filter(p => p.id_raca?.includes(raca.id) && p.tipo === TipoPoder.HABILIDADE_RACA);
    });
  }

  recuperaPoderes(raca: Raca) {
    if (raca.poderes) return;

    this.poderService.listAll().subscribe(poderes => {
      raca.poderes = poderes.filter(p => p.id_raca?.includes(raca.id) && p.tipo === TipoPoder.PODER_RACA);
    });
  }

  abrirHistoria(raca: Raca) {
    if (raca.historia) return;

    this.racaService.getHistoria(raca).subscribe(historia => {
      raca.historia = historia;
    });
  }
}
