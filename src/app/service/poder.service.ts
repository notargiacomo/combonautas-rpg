import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ComplicacaoData } from '../data/complicacao.data';
import { Complicacao } from '../model/complicacao';
import { AbstractService } from './abstract.service';
import { DeusService } from './deus.service';
import { PoderData } from '../data/poder.data';
import { Poder } from '../model/poder';

@Injectable({
  providedIn: 'root',
})
export class PoderService extends AbstractService{

  constructor(private readonly poderData: PoderData, private readonly http: HttpClient, private readonly deusService: DeusService
  ) {
    super('poder/');
  }

  listar(filtro:any): Observable<Poder[]> {
    return this.http.get<Poder[]>(this.url,{params:this.removeBlankAttributes(filtro)}).pipe(map(resultado => {
      resultado.forEach((poder) => {
        poder.id_deuses?.forEach((id_deus) => {
          this.deusService.getbyId(id_deus).subscribe({
            next: (deus) => {
              poder.deuses === null || poder.deuses === undefined ? poder.deuses = []: '';
              poder.deuses?.push(deus);
            }
          });
        })
      });
      return resultado;

    }));
  }
}
