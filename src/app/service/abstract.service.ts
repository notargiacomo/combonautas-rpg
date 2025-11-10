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

  filtrar(filtro: any, objetos: any, campos: string[]): Observable<any[]> {
    return objetos.pipe(
      map((resultado: any[]) => {
        // Se não houver filtro ou estiver vazio, retorna tudo
        const temFiltroValido = filtro && Object.values(filtro).some(v => v !== null && v !== undefined && v !== '');

        if (!temFiltroValido) return resultado;

        // Caso exista um filtro, filtra cada item do resultado
        return resultado.filter(item => {
          // Juntamos apenas os campos desejados
          const valoresItem = campos
            .flatMap(campo => {
              const valor = item[campo];

              if (valor === null || valor === undefined) return []; // ignora campo vazio
              if (Array.isArray(valor)) return valor; // array: expande
              return valor.toString(); // outros valores
            })
            .join(' ')
            .toUpperCase();

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
}
