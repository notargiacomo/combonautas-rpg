import { map, Observable } from 'rxjs';

const baseUrl = 'api/';

export class AbstractService {

  url!: string

  constructor(endPoint: string = ''){
    this.url = baseUrl +  endPoint;
  }

  removeBlankAttributes(obj:any) {
      const result:any = {};
      for (const key in obj) {
          if (obj[key] !== null && obj[key] !== undefined) {
              result[key] = !isNaN(Number(obj[key]))? Number(obj[key]): obj[key];
          }
      }
      return result;
  }

  filtrar(filtro: any, objetos: any) : Observable<any[]>{
    return objetos.pipe(
      map((resultado: any[]) => {

        // Se não houver filtro ou todos os filtros estiverem vazios, retorna tudo
        const temFiltroValido = filtro &&
          Object.values(filtro).some(
            (v) => v !== null && v !== undefined && v !== ''
          );

        let filtrados: any[];

        if (temFiltroValido) {
          filtrados = resultado.filter((val: any) => {
            return Object.keys(filtro).every((chave) => {
              const valorFiltro = filtro[chave];
              const valor = (val as any)[chave];

              // Verifica se filtro é inválido e retorna o dado
              if (valorFiltro === null ||
                valorFiltro === undefined ||
                valorFiltro === '') {
                return true;
              }

              // Se for um array
              if (Array.isArray(valorFiltro)) {
                return valor.includes(valorFiltro);
              }

              // Se o valor do filtro é um número, compara numericamente
              if (!isNaN(Number(valorFiltro)) &&
                typeof valorFiltro === 'number') {
                return Number(valorFiltro) === valor;
              }

              // Se o valor do filtro é uma string, compara com uppercase
              if (typeof valorFiltro === 'string') {
                return valor
                  .toUpperCase()
                  .includes(valorFiltro.toUpperCase());
              }

              // Comparação padrão (string, boolean etc.)
              return valorFiltro === valor;
            });
          });
        } else {
          filtrados = resultado; // sem filtros = retorna tudo
        }

        return filtrados;
      }));
  }
  
}