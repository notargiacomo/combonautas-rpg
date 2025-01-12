import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { ClasseData } from '../data/classe.data';
import { Classe } from '../model/classe';

@Injectable({
  providedIn: 'root',
})
export class ClasseService extends AbstractService {
  constructor(
    private readonly classeData: ClasseData,
    private readonly http: HttpClient
  ) {
    super('classe');
  }

  listar(filtro: any): Observable<Classe[]> {
    return this.http
      .get<Classe[]>(this.url, { params: this.removeBlankAttributes(filtro) })
      .pipe(
        map((resultado) => {
          resultado.forEach((classe) => {
            this.http
              .get(`assets/doc/${classe.nome_arquivo_descricao_classe}.txt`, {
                responseType: 'text',
              })
              .subscribe((descricao_classe) => (classe.descricao_classe = descricao_classe));
            this.http
              .get(`assets/doc/${classe.nome_arquivo_descricao_habilidades}.txt`, {
                responseType: 'text',
              })
              .subscribe((descricao_habilidades) => (classe.descricao_habilidades = descricao_habilidades));
            this.http
              .get(`assets/doc/${classe.nome_arquivo_descricao_poderes}.txt`, {
                responseType: 'text',
              })
              .subscribe((descricao_poderes) => (classe.descricao_poderes = descricao_poderes));
            this.http
              .get(`assets/doc/${classe.nome_arquivo_descricao_informacoes}.txt`, {
                responseType: 'text',
              })
              .subscribe((descricao_informacoes) => (classe.descricao_informacoes = descricao_informacoes));
            this.http
              .get(`assets/doc/${classe.nome_arquivo_descricao_complicacoes}.txt`, {
                responseType: 'text',
              })
              .subscribe((descricao_complicacoes) => (classe.descricao_complicacoes = descricao_complicacoes));
            this.http
              .get(`assets/doc/${classe.nome_arquivo_descricao_poderes_db}.txt`, {
                responseType: 'text',
              })
              .subscribe((descricao_poderes_db) => (classe.descricao_poderes_db = descricao_poderes_db));
          });
          return resultado;
        })
      );
  }
}
