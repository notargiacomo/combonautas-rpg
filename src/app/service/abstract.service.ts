import { map, Observable, of } from 'rxjs';

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

  filtrar(filtro: string, objetos: any, campos: string[]): Observable<any[]> {
    const fonte$: Observable<any[]> = objetos instanceof Observable ? objetos : of(objetos);

    return fonte$.pipe(
      map((resultado: any[]) => {
        if (!filtro || String(filtro).trim() === '') return resultado;

        const clausulas = String(filtro)
          .split(';')
          .map(c => this.normalizar(c))
          .filter(c => c.length > 0);

        if (clausulas.length === 0) return resultado;

        return resultado.filter(item => {
          const valoresItem = campos
            .flatMap(campo => {
              const valor = item[campo];

              if (valor === null || valor === undefined) return [];

              if (Array.isArray(valor)) return valor;

              return [valor];
            })
            .map(v => this.normalizar(String(v)))
            .join(' ');

          return clausulas.every(clausula => valoresItem.includes(clausula));
        });
      })
    );
  }

  private normalizar(valor: string): string {
    return valor
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '');
  }
}
