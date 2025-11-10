import { map, Observable } from 'rxjs';

const baseUrl = 'api/';

export class AbstractService {
  url!: string;

  constructor(endPoint: string = '') {
    this.url = baseUrl + endPoint;
  }

  removeBlankAttributes(obj: any) {
    const result: any = {};
    for (const key in obj) {
      if (obj[key] !== null && obj[key] !== undefined) {
        result[key] = !isNaN(Number(obj[key])) ? Number(obj[key]) : obj[key];
      }
    }
    return result;
  }

  filtrar(filtro: any, objetos: any): Observable<any[]> {
    return objetos.pipe(
      map((resultado: any[]) => {
        // Se não houver filtro ou estiver vazio, retorna tudo
        const temFiltroValido = filtro && Object.values(filtro).some(v => v !== null && v !== undefined && v !== '');

        if (!temFiltroValido) return resultado;

        // Caso exista um filtro, filtra cada item do resultado
        return resultado.filter(item => {
          // Concatena todos os valores do objeto em uma única string
          const valoresItem = Object.values(item)
            .map(valorItem => {
              if (Array.isArray(valorItem)) return valorItem.join(' ');
              else if (!isNaN(Number(valorItem)) && typeof valorItem === 'number') return valorItem.toString();
              else return String(valorItem).toUpperCase();
            })
            .join(' ');

          // Para cada valor de filtro, verifica se está presente em algum campo do item
          return Object.values(filtro).some(valorFiltro => {
            if (valorFiltro === null || valorFiltro === undefined || valorFiltro === '') {
              return true;
            }

            const filtroStr = String(valorFiltro).toUpperCase();
            return valoresItem.includes(filtroStr);
          });
        });
      })
    );
  }

  // filtrar(filtro: any, objetos: any): Observable<any[]> {
  //   return objetos.pipe(
  //     map((resultado: any[]) => {

  //       Object.values(resultado).forEach((valor) => {});

  //       // Se não houver filtro ou todos os filtros estiverem vazios, retorna tudo
  //       const temFiltroValido =
  //         filtro &&
  //         Object.values(filtro).some(
  //           (v) => v !== null && v !== undefined && v !== ''
  //         );

  //       let filtrados: any[];

  //       if (temFiltroValido) {
  //         filtrados = resultado.filter((val: any) => {
  //           return Object.keys(filtro).every((chave) => {
  //             const valorFiltro = filtro[chave];

  //             const valorDado = (val as any)[chave];

  //             // Verifica se filtro é inválido, se for, retorna o dado sem filtrar
  //             if (
  //               valorFiltro === null ||
  //               valorFiltro === undefined ||
  //               valorFiltro === ''
  //             ) {
  //               return true;
  //             }

  //             // Se for um array
  //             if (Array.isArray(valorFiltro)) {
  //               return valorDado.includes(valorFiltro);
  //             }

  //             // Se o valor do filtro é um número, compara numericamente
  //             if (
  //               !isNaN(Number(valorFiltro)) &&
  //               typeof valorFiltro === 'number'
  //             ) {
  //               return Number(valorFiltro) === valorDado;
  //             }

  //             // Se o valor do filtro é uma string, compara com uppercase
  //             if (typeof valorFiltro === 'string') {
  //               return valorDado
  //                 .toUpperCase()
  //                 .includes(valorFiltro.toUpperCase());
  //             }

  //             // Comparação padrão (string, boolean etc.)
  //             return valorFiltro === valorDado;
  //           });
  //         });
  //       } else {
  //         filtrados = resultado; // sem filtros = retorna tudo
  //       }

  //       return filtrados;
  //     })
  //   );
  // }
}
