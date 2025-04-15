import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PoderData } from '../data/poder.data';
import { Poder } from '../model/poder';
import { AbstractService } from './abstract.service';
import { DeusService } from './deus.service';

@Injectable({
  providedIn: 'root',
})
export class PoderService extends AbstractService{

  constructor(private readonly poderData: PoderData, private readonly http: HttpClient, private readonly deusService: DeusService
  ) {
    super('poder/');
  }

  listar(filtro: any): Observable<Poder[]> {
      return this.http
        .get<Poder[]>(this.url)
        .pipe(
          map((resultado) => {
            // Se não houver filtro ou todos os filtros estiverem vazios, retorna tudo
            const temFiltroValido = filtro && Object.values(filtro).some(
              (v) => v !== null && v !== undefined && v !== ''
            );
    
            let filtrados: Poder[];
    
            if (temFiltroValido) {
              filtrados = resultado.filter((Poder) => {
                return Object.keys(filtro).every((chave) => {
                  const valorFiltro = filtro[chave];
                  const valorPoder = (Poder as any)[chave];
                  
                  // Se o valor do filtro é um número, compara numericamente
                  if (!isNaN(Number(valorFiltro)) && typeof valorFiltro === 'number') {
                    if(Array.isArray(valorPoder)){
                      return valorPoder.includes(Number(valorFiltro));
                    }
                    else { 
                      return Number(valorFiltro) === valorPoder;
                    }
                  }


                  if (valorFiltro === null || valorFiltro === undefined || valorFiltro === '') {
                    return true;
                  }
  
                  if(Array.isArray(valorFiltro)){
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
            filtrados.forEach(
              (poder) => {
                poder.id_deuses?.forEach((id_deus) => {
                this.deusService.getbyId(id_deus).subscribe({
                  next: (deus) => {
                    poder.deuses === null || poder.deuses === undefined ? poder.deuses = []: '';
                    poder.deuses?.push(deus);
                  }
                });
              })
            });

            return filtrados;
          })
        );
    }
}
