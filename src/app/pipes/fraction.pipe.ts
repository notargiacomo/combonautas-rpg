// fraction.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fraction',
  standalone: true,
  pure: true,
})
export class FractionPipe implements PipeTransform {
  transform(value: number | string, maxDenominator = 64): string {
    if (value === null || value === undefined || value === '') return '';
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num)) return String(value);

    // Trata inteiros
    if (Math.abs(num - Math.round(num)) < 1e-12) return String(Math.round(num));

    // Método de fração por aproximação (continuação simples)
    let lower_n = 0,
      lower_d = 1;
    let upper_n = 1,
      upper_d = 0;
    let n = 1,
      d = 1;
    const target = num;
    while (true) {
      n = lower_n + upper_n;
      d = lower_d + upper_d;
      if (d > maxDenominator) break;
      if (n / d < target) {
        lower_n = n;
        lower_d = d;
      } else {
        upper_n = n;
        upper_d = d;
      }
    }
    // escolha o melhor entre lower e upper
    const lowerDiff = Math.abs(target - lower_n / lower_d);
    const upperDiff = Math.abs(target - upper_n / upper_d);
    const bestN = lowerDiff <= upperDiff ? lower_n : upper_n;
    const bestD = lowerDiff <= upperDiff ? lower_d : upper_d;

    // se fração for má aproximacao, mostra decimal com 4 casas
    if (Math.abs(target - bestN / bestD) > 1e-3) {
      return num.toFixed(4).replace(/\.?0+$/, '');
    }

    // simplifica sinal e parte inteira
    const sign = bestN * bestD < 0 ? '-' : '';
    const absN = Math.abs(bestN);
    const absD = Math.abs(bestD);
    const whole = Math.floor(absN / absD);
    const rem = absN % absD;

    if (whole === 0) return `${sign}${rem}/${absD}`;
    if (rem === 0) return `${sign}${whole}`;
    return `${sign}${whole} ${rem}/${absD}`;
  }
}
