import { map, Observable, of, isObservable } from 'rxjs';

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
    // Se objetos NÃO for observable, convertemos para observable
    const fonte$: Observable<any[]> = objetos instanceof Observable ? objetos : of(objetos);

    return fonte$.pipe(
      map((resultado: any[]) => {
        const temFiltroValido = filtro && Object.values(filtro).some(v => v !== null && v !== undefined && v !== '');

        if (!temFiltroValido) return resultado;

        return resultado.filter(item => {
          const valoresItem = campos
            .flatMap(campo => {
              const valor = item[campo];

              if (valor === null || valor === undefined) return [];
              if (Array.isArray(valor)) return valor;
              return valor.toString();
            })
            .join(' ')
            .toUpperCase();

          return Object.values(filtro).some(valorFiltro => {
            if (valorFiltro === null || valorFiltro === undefined || valorFiltro === '') return true;

            const filtroStr = String(valorFiltro).toUpperCase();
            return valoresItem.includes(filtroStr);
          });
        });
      })
    );
  }

  private normalizar(valor: string): string {
    return valor
      .toLowerCase()
      .normalize('NFD') // separa acentos
      .replace(/[\u0300-\u036f]/g, '') // remove acentos
      .replace(/[^a-z0-9]/g, ''); // remove tudo que não é letra ou número
  }
}
