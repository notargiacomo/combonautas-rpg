import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Distincao } from '../model/distincao';

@Injectable({
  providedIn: 'root',
})
export class DistincaoService extends AbstractService {
  constructor(
    private readonly http: HttpClient
  ) {
    super('distincao/');
  }

  listar(filtro: any): Observable<Distincao[]> {
    return this.http
      .get<Distincao[]>(this.url, { params: this.removeBlankAttributes(filtro) })
      .pipe(
        map((resultado) => {
          resultado.forEach((distincao) => {
            this.http
              .get(`assets/doc/${distincao.nome_arquivo_descricao}.txt`, {
                responseType: 'text',
              })
              .subscribe((descricao_distincao) => (distincao.descricao_distincao = descricao_distincao));
            this.http
              .get(`assets/doc/${distincao.nome_arquivo_admissao}.txt`, {
                responseType: 'text',
              })
              .subscribe((admissao) => (distincao.admissao = admissao));
            if(distincao.ha_informacoes_adicionais){              
              this.http
                .get(`assets/doc/${distincao.nome_arquivo_informacoes}.txt`, {
                  responseType: 'text',
                })
                .subscribe((descricao_informacoes) => (distincao.descricao_informacoes = descricao_informacoes));
            }
          });
          return resultado;
        })
      );
  }


  getbyId(id: number|undefined){
    return this.http
    .get<any>(this.url+id )
  }
}
