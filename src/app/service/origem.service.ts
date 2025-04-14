import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Origem } from '../model/origem';

@Injectable({
  providedIn: 'root',
})
export class OrigemService extends AbstractService {
  constructor(
    private readonly http: HttpClient
  ) {
    super('origem/');
  }

  listar(filtro: any): Observable<Origem[]> {
    return this.http
      .get<Origem[]>(this.url)
      .pipe(
        map((resultado) => {
          // Se não houver filtro ou todos os filtros estiverem vazios, retorna tudo
          const temFiltroValido = filtro && Object.values(filtro).some(
            (v) => v !== null && v !== undefined && v !== ''
          );
  
          let filtrados: Origem[];
  
          if (temFiltroValido) {
            filtrados = resultado.filter((Origem) => {
              return Object.keys(filtro).every((chave) => {
                const valorFiltro = filtro[chave];
                const valorOrigem = (Origem as any)[chave];
  
                if (valorFiltro === null || valorFiltro === undefined || valorFiltro === '') {
                  return true;
                }

                if(Array.isArray(valorFiltro)){
                  return valorOrigem.includes(valorFiltro);
                }
  
                // Se o valor do filtro é um número, compara numericamente
                if (!isNaN(Number(valorFiltro)) && typeof valorFiltro === 'number') {
                  return Number(valorFiltro) === valorOrigem;
                }

                if (typeof valorFiltro === 'string') {
                  return valorOrigem.toUpperCase().includes(valorFiltro.toUpperCase());
                }
  
                // Comparação padrão (string, boolean etc.)
                return valorFiltro === valorOrigem;
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
