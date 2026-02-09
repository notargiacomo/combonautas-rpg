import { Injectable } from '@angular/core';
import { TipoPoder } from '@app/enum/tipo.poder.enum';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { ClasseService, FILTROS_CLASSE } from './classe.service';
import { PoderService } from './poder.service';
import { DistincaoService } from './distincao.service';
import { Classe } from '@app/model/classe';

@Injectable({ providedIn: 'root' })
export class ClasseFacadeService {
  constructor(
    private readonly classeService: ClasseService,
    private readonly poderService: PoderService
  ) {}

  consult(filtro: any, searchColumn: string[]): Observable<any[]> {
    let result = null;
    if (filtro && Object.keys(filtro).length > 0) {
      let listas = this.classeService.consult({});
      result = this.classeService.filtrar(filtro, listas, FILTROS_CLASSE);
    } else {
      result = this.classeService.consult({});
    }
    return result;
  }

  recuperaHabilidades(classe: Classe) {
    if (classe.habilidades) return;

    this.poderService.listAll().subscribe(poderes => {
      classe.habilidades = poderes.filter(
        p => p.id_classe?.includes(classe.id) && p.tipo === TipoPoder.HABILIDADE_CLASSE
      );
    });
  }

  recuperaPoderes(classe: Classe) {
    if (classe.poderes) return;

    this.poderService.listAll().subscribe(poderes => {
      classe.poderes = poderes
        .filter(
          p =>
            (p.id_classe?.includes(classe.id) || p.id_classe === classe.id_classe_pai) &&
            p.tipo === TipoPoder.PODER_CLASSE
        )
        .sort((a, b) => a.nome!.localeCompare(b.nome!));
    });
  }
}
