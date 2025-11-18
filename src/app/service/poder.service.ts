import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Poder } from '@app/model/poder';
import { DeusService } from './deus.service';

@Injectable({
  providedIn: 'root',
})
export class PoderService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('poder/');
  }

  listar(filtro: any): Observable<Poder[]> {
    let listas = this.http.get<Poder[]>(this.url).pipe(
      map(resultado => {
        // Se não houver filtro ou todos os filtros estiverem vazios, retorna tudo
        const temFiltroValido = filtro && Object.values(filtro).some(v => v !== null && v !== undefined && v !== '');

        let filtrados: Poder[];

        if (temFiltroValido) {
          filtrados = resultado.filter(Poder => {
            return Object.keys(filtro).every(chave => {
              const valorFiltro = filtro[chave];
              const valorPoder = (Poder as any)[chave];

              // Se o valor do filtro é um número, compara numericamente
              if (!isNaN(Number(valorFiltro)) && typeof valorFiltro === 'number') {
                if (Array.isArray(valorPoder)) {
                  return valorPoder.includes(Number(valorFiltro));
                } else {
                  return Number(valorFiltro) === valorPoder;
                }
              }

              if (valorFiltro === null || valorFiltro === undefined || valorFiltro === '') {
                return true;
              }

              if (Array.isArray(valorFiltro)) {
                return valorPoder.includes(valorFiltro);
              }

              if (typeof valorFiltro === 'string' && valorPoder) {
                return valorPoder.toUpperCase().includes(valorFiltro.toUpperCase());
              }
            });
          });
        } else {
          filtrados = resultado; // sem filtros = retorna tudo
        }
        // filtrados.forEach(poder => {
        //   poder.id_deuses?.forEach(id_deus => {
        //     this.deuseService.getbyId(id_deus).subscribe({
        //       next: deus => {
        //         poder.deuses === null || poder.deuses === undefined ? (poder.deuses = []) : '';
        //         poder.deuses?.push(deus);
        //       },
        //     });
        //   });
        // });

        return filtrados;
      })
    );

    return this.filtrar(filtro, listas, ['nome', 'tipo', 'referencias']);
  }

  findById(id: number): Observable<Poder | undefined> {
    return this.http.get<Poder[]>(this.url).pipe(map(lista => lista.find(p => p.id === id)));
  }
}
