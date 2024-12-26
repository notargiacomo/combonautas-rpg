export class ConsultaRacaDto {
  id?: number;
  raca: string = '';
  tipoCriatura: '';
  tamanho: '';
  sentidos: string[] = [];
  deslocamentos: string[] = [];

  constructor() {
    this.raca = '';
    this.tamanho = '';
    this.tipoCriatura = '';
    this.sentidos = [];
    this.deslocamentos = [];
  }
}
