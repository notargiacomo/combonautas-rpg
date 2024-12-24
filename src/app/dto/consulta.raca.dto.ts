export class ConsultaRacaDto {
  id?: number;
  raca: string = '';
  tipo_criatura: '';
  tamanho: '';
  sentidos: string[] = [];
  deslocamentos: string[] = [];

  constructor() {
    this.raca = '';
    this.tamanho = '';
    this.tipo_criatura = '';
    this.sentidos = [];
    this.deslocamentos = [];
  }
}
