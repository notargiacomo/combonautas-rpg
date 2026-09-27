import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { EncontroAleatorio } from '@app/model/encontro.aleatorio';

export const FILTROS_ENCONTRO_ALEATORIO = ['nome'];
@Injectable({
  providedIn: 'root',
})
export class EncontroAleatorioService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('encontroAleatorio/');
  }

  listar(filtro: any): Observable<EncontroAleatorio[]> {
    const listas = this.http.get<EncontroAleatorio[]>(this.url);

    return this.filtrar(filtro, listas, FILTROS_ENCONTRO_ALEATORIO);
  }

  consult(filtro: any): Observable<EncontroAleatorio[]> {
    const listas = this.http.get<EncontroAleatorio[]>(this.url);

    return this.filtrar(filtro, listas, FILTROS_ENCONTRO_ALEATORIO);
  }

  buscarPorRandom(nome: string, valor: number): Observable<EncontroAleatorio | undefined> {
    return this.http
      .get<EncontroAleatorio[]>(this.url)
      .pipe(
        map(encontros =>
          encontros.find(
            encontro =>
              encontro.nome?.toLocaleLowerCase() === nome.toLocaleLowerCase() &&
              valor >= (encontro.random_inicial ?? 0) &&
              valor <= (encontro.random_final ?? 0)
          )
        )
      );
  }
}
