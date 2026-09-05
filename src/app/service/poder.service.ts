import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Poder } from '@app/model/poder';
import { TipoPoder } from '@app/enum/tipo.poder.enum';

export const FILTROS_PODER = ['nome', 'tipo'];
@Injectable({
  providedIn: 'root',
})
export class PoderService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('poder/');
  }

  findById(id: number): Observable<Poder | undefined> {
    return this.http.get<Poder[]>(this.url).pipe(map(lista => lista.find(p => p.id === id)));
  }

  listAll(): Observable<Poder[]> {
    return this.http.get<Poder[]>(this.url);
  }

  listGeneral(): Observable<Poder[]> {
    return this.http
      .get<Poder[]>(this.url)
      .pipe(
        map(poderes =>
          poderes.filter(p =>
            [
              TipoPoder.PODER_COMBATE.toString(),
              TipoPoder.PODER_DESTINO.toString(),
              TipoPoder.PODER_MAGIA.toString(),
              TipoPoder.PODER_CONCEDIDO.toString(),
              TipoPoder.PODER_TORMENTA.toString(),
              TipoPoder.PODER_RACA.toString(),
              TipoPoder.PODER_GRUPO.toString(),
            ].includes(p.tipo!)
          )
        )
      );
  }

  consult(filtro: any, searchColumn: string[]): Observable<Poder[]> {
    let listas = this.http.get<Poder[]>(this.url);
    return this.filtrar(filtro, listas, FILTROS_PODER);
  }

  getArvore(idPoder: number): Observable<PoderArvore | undefined> {
    return this.listAll().pipe(
      map(poderes => {
        const poder = poderes.find(p => p.id === idPoder);

        if (!poder) {
          return undefined;
        }

        return this.montarArvore(poder, poderes);
      })
    );
  }

  private montarArvore(poder: Poder, poderes: Poder[], caminho = new Set<number>()): PoderArvore {
    const pais: PoderArvore[] = [];
    const filhos: PoderArvore[] = [];

    if (poder.id === undefined) {
      return {
        poder,
        pais,
        filhos,
      };
    }

    // Evita ciclos
    const novoCaminho = new Set(caminho);
    novoCaminho.add(poder.id);

    // =========================
    // PAIS
    // =========================

    const poderesPais = poderes.filter(p => poder.ids_poder_pai?.includes(p.id!) ?? false);

    for (const pai of poderesPais) {
      if (pai.id !== undefined && !novoCaminho.has(pai.id)) {
        pais.push(this.montarArvore(pai, poderes, novoCaminho));
      }
    }

    // =========================
    // FILHOS
    // =========================

    const poderesFilhos = poderes.filter(p => p.ids_poder_pai?.includes(poder.id!) ?? false);

    for (const filho of poderesFilhos) {
      if (filho.id !== undefined && !novoCaminho.has(filho.id)) {
        filhos.push(this.montarArvore(filho, poderes, novoCaminho));
      }
    }

    return {
      poder,
      pais,
      filhos,
    };
  }
}

export interface PoderArvore {
  poder: Poder;
  pais: PoderArvore[];
  filhos: PoderArvore[];
}
