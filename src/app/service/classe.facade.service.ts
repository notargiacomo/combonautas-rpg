import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TipoPoder } from '@app/enum/tipo.poder.enum';
import { Classe } from '@app/model/classe';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { AbstractService } from './abstract.service';
import { PoderService } from './poder.service';
import { ClasseService } from './classe.service';

@Injectable({ providedIn: 'root' })
export class ClasseFacadeService {
  constructor(
    private readonly classeService: ClasseService,
    private readonly poderService: PoderService
  ) {}

  consult(filtro: any, searchColumn: string[]): Observable<any[]> {
    return forkJoin({
      classes: this.classeService.consult({}, []),
      poderes: this.poderService.listAll(),
    }).pipe(
      map(({ classes, poderes }) =>
        classes.map(classe => ({
          ...classe,
          habilidades: poderes.filter(p => p.id_classe === classe.id && p.tipo === TipoPoder.HABILIDADE_CLASSE),
          poderes: poderes.filter(p => p.id_classe === classe.id && p.tipo === TipoPoder.PODER_CLASSE),
        }))
      ),
      switchMap(result => this.classeService.filtrar(filtro, of(result), searchColumn))
    );
  }
}
