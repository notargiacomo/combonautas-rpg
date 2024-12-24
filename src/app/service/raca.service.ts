import { Injectable } from '@angular/core';
import { RacaData } from '../data/raca.data';
import { HttpClient } from '@angular/common/http';
import { ConsultaRacaDto } from '../dto/consulta.raca.dto';
import { Raca } from '../model/raca';

@Injectable({
  providedIn: 'root',
})
export class RacaService {
  constructor(private racaData: RacaData, private http: HttpClient) {}

  getRacas(consultaRacaDto?: ConsultaRacaDto): any[] {
    const racas = this.racaData.getRacas();
    let resultado: any[] = [];
    
    if (consultaRacaDto) {
      racas.forEach((raca) => {
        // consulta por nome
        var temNome = consultaRacaDto?.raca.length > 0 ? !raca.nome.toLowerCase().indexOf(consultaRacaDto?.raca.toLowerCase()): true;
        var eTipo = consultaRacaDto.tipo_criatura?.length > 0 ? raca.tipo === consultaRacaDto.tipo_criatura : true;
        var eTamanho = consultaRacaDto.tamanho?.length > 0 ? raca.tamanho === consultaRacaDto.tamanho: true;
        var temSentidos = consultaRacaDto.sentidos.length > 0 ? consultaRacaDto.sentidos.every((elemento) => raca.sentidos.includes(elemento)): true;
        var temDeslocamentos = consultaRacaDto.deslocamentos.length > 0 ? consultaRacaDto.deslocamentos.every((elemento) => raca.deslocamentos.includes(elemento)): true;

        if (temNome && eTipo && eTamanho && temSentidos && temDeslocamentos) {
          resultado.push(raca);
        }

      });
    } else {
      resultado = racas;
    }

    resultado.forEach((raca) => {
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
  }
}
