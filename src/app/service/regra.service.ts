import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Regra } from '../model/regra';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class RegraService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('regra/');
  }

  listar(filtro: any): Observable<Regra[]> {
    console.log(filtro + ' chegou na consulta');
    return this.http.get<Regra[]>(this.url).pipe(
      map((resultado) => {
        // Se não houver filtro ou todos os filtros estiverem vazios, retorna tudo
        const temFiltroValido =
          filtro &&
          Object.values(filtro).some(
            (v) => v !== null && v !== undefined && v !== ''
          );

        let filtrados: Regra[];

        if (temFiltroValido) {
          filtrados = resultado.filter((regra) => {
            return Object.keys(filtro).every((chave) => {
              const valorFiltro = filtro[chave];
              const valorRegra = (regra as any)[chave];

              if (
                valorFiltro === null ||
                valorFiltro === undefined ||
                valorFiltro === ''
              ) {
                return true;
              }

              if (Array.isArray(valorFiltro)) {
                return valorRegra.includes(valorFiltro);
              }

              // Se o valor do filtro é um número, compara numericamente
              if (
                !isNaN(Number(valorFiltro)) &&
                typeof valorFiltro === 'number'
              ) {
                return Number(valorFiltro) === valorRegra;
              }

              if (typeof valorFiltro === 'string') {
                return valorRegra
                  .toUpperCase()
                  .includes(valorFiltro.toUpperCase());
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

  // listar(filtro:any): Observable<Regra[]> {
  //   return this.http.get<Regra[]>(this.url,{params:this.removeBlankAttributes(filtro)})
  // }
}
