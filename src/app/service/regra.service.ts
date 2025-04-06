import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RegraData } from '../data/regra.data';
import { Regra } from '../model/regra';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class RegraService extends AbstractService {
  constructor(
    private readonly http: HttpClient
  ) {
    super('regra/');
  }

  listar(filtro: any): Observable<Regra[]> {
    return this.http
      .get<Regra[]>(this.url)
      .pipe(
        map((resultado) => {
          // Se não houver filtro ou todos os filtros estiverem vazios, retorna tudo
          const temFiltroValido = filtro && Object.values(filtro).some(
            (v) => v !== null && v !== undefined && v !== ''
          );
  
          let filtrados: Regra[];
  
          if (temFiltroValido) {
            filtrados = resultado.filter((Regra) => {
              return Object.keys(filtro).every((chave) => {
                const valorFiltro = filtro[chave];
                const valorRegra = (Regra as any)[chave];
  
                if (valorFiltro === null || valorFiltro === undefined || valorFiltro === '') {
                  return true;
                }
  
                // Se o valor do filtro é um número, compara numericamente
                if (!isNaN(Number(valorFiltro)) && typeof valorRegra === 'number') {
                  return Number(valorFiltro) === valorRegra;
                }
  
                // Comparação padrão (string, boolean etc.)
                return valorFiltro === valorRegra;
              });
            });
          } else {
            filtrados = resultado; // sem filtros = retorna tudo
          }
  
          return filtrados;
        })
      );
  }
}
