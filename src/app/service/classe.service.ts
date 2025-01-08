import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { ClasseData } from '../data/classe.data';
import { Classe } from '../model/classe';

@Injectable({
  providedIn: 'root',
})
export class ClasseService extends AbstractService{

  constructor(private readonly classeData: ClasseData, private readonly http: HttpClient) {
    super('classe');
  }

  listar(filtro:any): Observable<Classe[]> {
    return this.http.get<Classe[]>(this.url,{params:this.removeBlankAttributes(filtro)});
  }
}
