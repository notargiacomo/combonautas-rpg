import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { Poder } from '@app/model/poder';

@Injectable({
  providedIn: 'root',
})
export class PoderService extends AbstractService {
  constructor(private readonly http: HttpClient) {
    super('poder/');
  }

  findById(id: number): Observable<Poder | undefined> {
    return this.http.get<Poder[]>(this.url).pipe(map(lista => lista.find(p => p.id === id)));
  }

  listAll(): Observable<Poder[]> {
    return this.http.get<Poder[]>(this.url);
  }

  consult(filtro: any, searchColumn: string[]): Observable<Poder[]> {
    let listas = this.http.get<Poder[]>(this.url);
    return this.filtrar(filtro, listas, searchColumn);
  }
}
