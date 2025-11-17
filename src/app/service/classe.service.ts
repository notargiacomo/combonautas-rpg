import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoPoder } from '@app/enum/tipo.poder.enum';
import { Classe } from '@app/model/classe';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { AbstractService } from './abstract.service';
import { PoderService } from './poder.service';

@Injectable({
  providedIn: 'root',
})
export class ClasseService extends AbstractService {
  constructor(
    private readonly http: HttpClient,
    private readonly poderService: PoderService
  ) {
    super('classe/');
  }

  listar(filtro: any): Observable<Classe[]> {
    let listas = this.http.get<Classe[]>(this.url);
    return this.filtrar(filtro, listas, ['nome', 'descricao']);
  }

  getbyId(id: number | undefined) {
    return this.http.get<any>(this.url + id);
  }

  consult(filtro: any, searchColumn: string[]): Observable<Classe[]> {
    return this.http.get<Classe[]>(this.url).pipe(
      switchMap(classes =>
        forkJoin({
          poderes: this.poderService.listar({}),
        }).pipe(
          map(({ poderes }) => {
            return classes.map(classe => ({
              ...classe,
              habilidades: poderes.filter(p => p.id_classe === classe.id && p.tipo === TipoPoder.HABILIDADE_CLASSE),
              poderes: poderes.filter(p => p.id_classe === classe.id && p.tipo === TipoPoder.PODER_CLASSE),
            }));
          }),
          switchMap(racasFinal => this.filtrar(filtro, of(racasFinal), searchColumn))
        )
      )
    );
  }
}
