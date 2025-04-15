import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DeusData } from '../data/deus.data';
import { Deus } from '../model/deus';
import { AbstractService } from './abstract.service';
import { PoderData } from '../data/poder.data';

@Injectable({
  providedIn: 'root',
})
export class DeusService extends AbstractService{

  constructor(private readonly deusData: DeusData, private readonly http: HttpClient) {
    super('deus/');
  }

  listar(filtro: any): Observable<Deus[]> {
      return this.http
        .get<Deus[]>(this.url)
        .pipe(
          map((resultado) => {
            // Se não houver filtro ou todos os filtros estiverem vazios, retorna tudo
            const temFiltroValido = filtro && Object.values(filtro).some(
              (v) => v !== null && v !== undefined && v !== ''
            );
    
            let filtrados: Deus[];
    
            if (temFiltroValido) {
              filtrados = resultado.filter((raca) => {
                return Object.keys(filtro).every((chave) => {
                  const valorFiltro = filtro[chave];
                  const valorRaca = (raca as any)[chave];
    
                  if (valorFiltro === null || valorFiltro === undefined || valorFiltro === '') {
                    return true;
                  }
  
                  if(Array.isArray(valorFiltro)){
                    return valorRaca.includes(valorFiltro);
                  }
    
                  // Se o valor do filtro é um número, compara numericamente
                  if (!isNaN(Number(valorFiltro)) && typeof valorFiltro === 'number') {
                    return Number(valorFiltro) === valorRaca;
                  }
  
                  if (typeof valorFiltro === 'string') {
                    return valorRaca.toUpperCase().includes(valorFiltro.toUpperCase());
                  }
    
                  // Comparação padrão (string, boolean etc.)
                  return valorFiltro === valorRaca;
                });
              });
            } else {
              filtrados = resultado; // sem filtros = retorna tudo
            }
    
            // Puxa os textos descritivos
            filtrados.forEach((deus) => {
              this.http
                .get(`assets/doc/${deus.nome_arquivo_descricao}.txt`, {
                  responseType: 'text',
                })
                .subscribe((descricao) => (deus.descricao = descricao));


            });
    
            return filtrados;
          })
        );
    }

  // listar(filtro:any): Observable<Deus[]> {
  //   return this.http.get<Deus[]>(this.url,{params:this.removeBlankAttributes(filtro)})
  //   .pipe(map(resultado => {
  //     resultado.forEach((deus) => {
  //       this.http
  //         .get(`assets/doc/${deus.nome_arquivo_descricao}.txt`, {
  //           responseType: 'text',
  //         })
  //         .subscribe((descricao) => (deus.descricao = descricao));
  //     });
  
  //     return resultado;

  //   }));
  // }

  getbyId(id: number|undefined){
    return this.http
    .get<any>(this.url+id )
  }
}
