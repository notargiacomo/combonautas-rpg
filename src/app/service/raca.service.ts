import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RacaData } from '../data/raca.data';
import { Raca } from '../model/raca';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class RacaService extends AbstractService {
  constructor(
    private readonly http: HttpClient
  ) {
    super('raca/');
  }

  listar(filtro: any): Observable<Raca[]> {
    return this.http
      .get<Raca[]>(this.url)
      .pipe(
        map((resultado) => {
          // Se não houver filtro ou todos os filtros estiverem vazios, retorna tudo
          const temFiltroValido = filtro && Object.values(filtro).some(
            (v) => v !== null && v !== undefined && v !== ''
          );
  
          let filtrados: Raca[];
  
          if (temFiltroValido) {
            filtrados = resultado.filter((raca) => {
              return Object.keys(filtro).every((chave) => {
                const valorFiltro = filtro[chave];
                const valorRaca = (raca as any)[chave];
  
                if (valorFiltro === null || valorFiltro === undefined || valorFiltro === '') {
                  return true;
                }

                if(Array.isArray(valorRaca)){
                  return valorRaca.includes(valorFiltro);
                }
  
                // Se o valor do filtro é um número, compara numericamente
                if (!isNaN(Number(valorFiltro)) && typeof valorRaca === 'number') {
                  return Number(valorFiltro) === valorRaca;
                }
  
                // Comparação padrão (string, boolean etc.)
                return valorFiltro === valorRaca;
              });
            });
          } else {
            filtrados = resultado; // sem filtros = retorna tudo
          }
  
          // Puxa os textos descritivos
          filtrados.forEach((raca) => {
            this.http
              .get(`assets/doc/${raca.nome_arquivo_descricao}.txt`, {
                responseType: 'text',
              })
              .subscribe((descricao) => (raca.descricao = descricao));
  
            this.http
              .get(`assets/doc/${raca.nome_arquivo_historia}.txt`, {
                responseType: 'text',
              })
              .subscribe((historia) => (raca.historia = historia));

              this.http
              .get(`assets/doc/${raca.nome_arquivo_poderes_gerais}.txt`, {
                responseType: 'text',
              })
              .subscribe((poderes_gerais) => (raca.poderes_gerais = poderes_gerais));
          });
  
          return filtrados;
        })
      );
  }
}
