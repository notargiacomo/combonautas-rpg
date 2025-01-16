import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ComplicacaoData } from '../data/complicacao.data';
import { Complicacao } from '../model/complicacao';
import { AbstractService } from './abstract.service';
import { ClasseService } from './classe.service';

@Injectable({
  providedIn: 'root',
})
export class ComplicacaoService extends AbstractService{

  constructor(private readonly complicacaoData: ComplicacaoData, private readonly http: HttpClient, private readonly classeService: ClasseService) {
    super('complicacao');
  }

  listar(filtro:any): Observable<Complicacao[]> {
    return this.http.get<Complicacao[]>(this.url,{params:this.removeBlankAttributes(filtro)})
        .pipe(map(resultado => {
          resultado.forEach((complicacao) => {
            // this.classeService.listar(complicacao.classe);
          });
          return resultado;
    
        }));
  }
}
