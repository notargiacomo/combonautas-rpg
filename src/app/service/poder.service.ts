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

  private poderes: Poder[] = [];

  carregarPoderes(): void {
    this.listAll().subscribe(poderes => {
      this.poderes = poderes;
    });
  }
  getPoderesRelacionados(idPoder: number): Poder[] {
    const relacionados = new Map<number, Poder>();

    const adicionar = (poder: Poder) => {
      if (poder.id === undefined || relacionados.has(poder.id)) {
        return;
      }

      relacionados.set(poder.id, poder);

      // Pais
      const pais = this.poderes.filter(p => poder.ids_poder_pai?.includes(p.id!) ?? false);

      pais.forEach(adicionar);

      // Filhos
      const filhos = this.poderes.filter(p => p.ids_poder_pai?.includes(poder.id!) ?? false);

      filhos.forEach(adicionar);
    };

    const poder = this.poderes.find(p => p.id === idPoder);

    if (!poder) {
      return [];
    }

    adicionar(poder);

    return Array.from(relacionados.values()).filter(p => p.id !== idPoder);
  }
}
