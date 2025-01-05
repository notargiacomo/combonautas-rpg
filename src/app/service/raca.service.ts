import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RacaData } from '../data/raca.data';
import { Raca } from '../model/raca';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root',
})
export class RacaService extends AbstractService{

  constructor(private readonly racaData: RacaData, private readonly http: HttpClient) {
    super('raca');
  }

  listar(filtro:any): Observable<Raca[]> {
    return this.http.get<Raca[]>(this.url,{params:this.removeBlankAttributes(filtro)})
    .pipe(map(resultado => {
      resultado.forEach((raca) => {

        raca.descricao = "assets/doc/${raca.nome_arquivo_descricao}.txt"
        raca.historia = 'assets/doc/${raca.nome_arquivo_historia}.txt'
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
      });
  
      return resultado;

    }));
    
  }

  // getRacas(consultaRacaDto?: ConsultaRacaDto): any[] {
  //   const racas = this.racaData.getRacas();
  //   let resultado: any[] = [];
    
  //   if (consultaRacaDto) {
  //     racas.forEach((raca) => {
  //       // consulta por nome
  //       var temNome = consultaRacaDto?.raca.length > 0 ? !raca.nome.toLowerCase().indexOf(consultaRacaDto?.raca.toLowerCase()): true;
  //       var eTipo = consultaRacaDto.tipoCriatura?.length > 0 ? raca.tipo === consultaRacaDto.tipoCriatura : true;
  //       var eTamanho = consultaRacaDto.tamanho?.length > 0 ? raca.tamanho === consultaRacaDto.tamanho: true;
  //       var temSentidos = consultaRacaDto.sentidos.length > 0 ? consultaRacaDto.sentidos.every((elemento) => raca.sentidos.includes(elemento)): true;
  //       var temDeslocamentos = consultaRacaDto.deslocamentos.length > 0 ? consultaRacaDto.deslocamentos.every
  //       ((elemento) => raca.deslocamentos.includes(elemento)): true;
  //       // var temReferencias = consultaRacaDto.referencias.length > 0 ? consultaRacaDto.referencias.find(raca.referencia): true;

  //       if (temNome && eTipo && eTamanho && temSentidos && temDeslocamentos) {
  //         resultado.push(raca);
  //       } else if(consultaRacaDto.referencias.find(raca.referencia)){
  //         resultado.push(raca);
  //       }

  //     });
  //   } else {
  //     resultado = racas;
  //   }

  //   resultado.forEach((raca) => {
  //     this.http
  //       .get(`assets/doc/${raca.nome_arquivo_descricao}.txt`, {
  //         responseType: 'text',
  //       })
  //       .subscribe((descricao) => (raca.descricao = descricao));
  //     this.http
  //       .get(`assets/doc/${raca.nome_arquivo_historia}.txt`, {
  //         responseType: 'text',
  //       })
  //       .subscribe((historia) => (raca.historia = historia));
  //   });

  //   return resultado;
  // }
}
