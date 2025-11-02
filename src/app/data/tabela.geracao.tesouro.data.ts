import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TabelaGeracaoTesouroData {
  private tabelaGeracaoTesouroData: any[] = [];

  get(): any[] {
    return this.tabelaGeracaoTesouroData;
  }

  constructor() {
    this.tabelaGeracaoTesouroData = 
    [
      [
        { nd: '1/4', min: 1,  max: 30,  faixa: '01-30',  dinheiro: '—',          multiplicador: 0, randomizador: 0, parcela: 0, potencializador: 0,   unidade: '', modificador: '' },
        { nd: '1/4', min: 31, max: 70,  faixa: '31-70',  dinheiro: '1d6x10 TC',  multiplicador: 1, randomizador: 6, parcela: 0, potencializador: 10,  unidade: 'TC', modificador: '' },
        { nd: '1/4', min: 71, max: 95,  faixa: '71-95',  dinheiro: '1d4x100 TC', multiplicador: 1, randomizador: 4, parcela: 0, potencializador: 100, unidade: 'TC', modificador: '' },
        { nd: '1/4', min: 96, max: 100, faixa: '96-100', dinheiro: '1d6x10 T$',  multiplicador: 1, randomizador: 6, parcela: 0, potencializador: 10,  unidade: 'T$', modificador: '' },

        { nd: '1/2', min: 1,  max: 25,  faixa: '01-25',  dinheiro: '—',          multiplicador: 0, randomizador: 0, parcela: 0, potencializador: 0,     unidade: '', modificador: '' },
        { nd: '1/2', min: 26, max: 70,  faixa: '26-70',  dinheiro: '2d6x10 TC',  multiplicador: 2, randomizador: 6, parcela: 0, potencializador: 10,    unidade: 'TC', modificador: '' },
        { nd: '1/2', min: 71, max: 95,  faixa: '71-95',  dinheiro: '2d8x10 T$',  multiplicador: 2, randomizador: 8, parcela: 0, potencializador: 10,    unidade: 'T$', modificador: '' },
        { nd: '1/2', min: 96, max: 100, faixa: '96-100', dinheiro: '1d4x100 T$', multiplicador: 1, randomizador: 4, parcela: 0, potencializador: 100,   unidade: 'T$', modificador: '' },

        { nd: '1', min: 1,  max: 20,  faixa: '01-20',  dinheiro: '—',               multiplicador: 0, randomizador: 0,  parcela: 0, potencializador: 0,    unidade: '', modificador: '' },
        { nd: '1', min: 21, max: 70,  faixa: '21-70',  dinheiro: '3d8x10 T$',       multiplicador: 3, randomizador: 8,  parcela: 0, potencializador: 10,   unidade: 'T$', modificador: '' },
        { nd: '1', min: 71, max: 95,  faixa: '71-95',  dinheiro: '4d12x10 T$',      multiplicador: 4, randomizador: 12, parcela: 0, potencializador: 10,   unidade: 'T$', modificador: '' },
        { nd: '1', min: 96, max: 100, faixa: '96-100', dinheiro: '1 riqueza menor', multiplicador: 1, randomizador: 1,  parcela: 0, potencializador: 1,    unidade: 'riqueza menor', modificador: '' },

        { nd: '2', min: 1,  max: 15,  faixa: '01-15',  dinheiro: '—',               multiplicador: 0, randomizador: 0,  parcela: 0, potencializador: 0,    unidade: '', modificador: '' },
        { nd: '2', min: 16, max: 55,  faixa: '16-55',  dinheiro: '3d10x10 T$',      multiplicador: 3, randomizador: 10, parcela: 0, potencializador: 10,   unidade: 'T$', modificador: '' },
        { nd: '2', min: 56, max: 85,  faixa: '56-85',  dinheiro: '2d4x100 T$',      multiplicador: 2, randomizador: 4,  parcela: 0, potencializador: 100,  unidade: 'T$', modificador: '' },
        { nd: '2', min: 86, max: 95,  faixa: '86-95',  dinheiro: '2d6+1x100 T$',    multiplicador: 2, randomizador: 6,  parcela: 1, potencializador: 100,    unidade: 'T$', modificador: '' },
        { nd: '2', min: 96, max: 100, faixa: '96-100', dinheiro: '1 riqueza menor', multiplicador: 1, randomizador: 1,  parcela: 0, potencializador: 1,    unidade: 'riqueza menor', modificador: '' },

        { nd: '3', min: 1,  max: 10,  faixa: '01-10',  dinheiro: '—',                    multiplicador: 0, randomizador: 0,  parcela: 0, potencializador: 0,     unidade: '', modificador: '' },
        { nd: '3', min: 11, max: 20,  faixa: '11-20',  dinheiro: '4d12x10 T$',           multiplicador: 4, randomizador: 12, parcela: 0, potencializador: 10,    unidade: 'T$', modificador: '' },
        { nd: '3', min: 21, max: 60,  faixa: '21-60',  dinheiro: '1d4x100 T$',           multiplicador: 1, randomizador: 4,  parcela: 0, potencializador: 100,   unidade: 'T$', modificador: '' },
        { nd: '3', min: 61, max: 90,  faixa: '61-90',  dinheiro: '1d8x10 TO',            multiplicador: 1, randomizador: 8,  parcela: 0, potencializador: 10,    unidade: 'TO', modificador: '' },
        { nd: '3', min: 91, max: 100, faixa: '91-100', dinheiro: '1d3 riquezas menores', multiplicador: 1, randomizador: 3,  parcela: 0, potencializador: 1,     unidade: 'riqueza menor', modificador: '' },

        { nd: '4', min: 1,  max: 10,  faixa: '01-10',  dinheiro: '—',                       multiplicador: 0, randomizador: 0,  parcela: 0,    potencializador: 0,       unidade: '', modificador: '' },
        { nd: '4', min: 11, max: 50,  faixa: '11-50',  dinheiro: '1d6x100 T$',              multiplicador: 1, randomizador: 6,  parcela: 0,    potencializador: 100,     unidade: 'T$', modificador: '' },
        { nd: '4', min: 51, max: 80,  faixa: '51-80',  dinheiro: '1d12x100 T$',             multiplicador: 1, randomizador: 12, parcela: 0,    potencializador: 100,     unidade: 'T$', modificador: '' },
        { nd: '4', min: 81, max: 90,  faixa: '81-90',  dinheiro: '1 riqueza menor +%',      multiplicador: 1, randomizador: 1,  parcela: 0,    potencializador: 1,       unidade: 'riqueza menor', modificador: '+%' },
        { nd: '4', min: 91, max: 100, faixa: '91-100', dinheiro: '1d3 riquezas menores +%', multiplicador: 1, randomizador: 3,  parcela: 0,    potencializador: 1,       unidade: 'riqueza menor', modificador: '+%' },

        { nd: '5', min: 1,  max: 15,  faixa: '01-15',  dinheiro: '—',                       multiplicador: 0, randomizador: 0, parcela: 0, potencializador: 0,     unidade: '', modificador: '' },
        { nd: '5', min: 16, max: 65,  faixa: '16-65',  dinheiro: '1d8x100 T$',              multiplicador: 1, randomizador: 8, parcela: 0, potencializador: 100,   unidade: 'T$', modificador: '' },
        { nd: '5', min: 66, max: 95,  faixa: '66-95',  dinheiro: '3d4x10 TO',               multiplicador: 3, randomizador: 4, parcela: 0, potencializador: 10,    unidade: 'TO', modificador: '' },
        { nd: '5', min: 96, max: 100, faixa: '96-100', dinheiro: '1 riqueza média',         multiplicador: 1, randomizador: 1, parcela: 0, potencializador: 1,     unidade: 'riqueza média', modificador: '' },

        { nd: '6', min: 1,  max: 15,  faixa: '01-15',  dinheiro: '—',                       multiplicador: 0, randomizador: 0,  parcela: 0, potencializador: 0,       unidade: '', modificador: '' },
        { nd: '6', min: 16, max: 60,  faixa: '16-60',  dinheiro: '2d6x100 T$',              multiplicador: 2, randomizador: 6,  parcela: 0, potencializador: 100,     unidade: 'T$', modificador: '' },
        { nd: '6', min: 61, max: 90,  faixa: '61-90',  dinheiro: '2d10x100 T$',             multiplicador: 2, randomizador: 10, parcela: 0, potencializador: 100,     unidade: 'T$', modificador: '' },
        { nd: '6', min: 91, max: 100, faixa: '91-100', dinheiro: '1d3+1 riqueza menores',   multiplicador: 1, randomizador: 3,  parcela: 1, potencializador: 0,       unidade: 'riqueza menor', modificador: '' },

        { nd: '7', min: 1,  max: 10,  faixa: '01-10',  dinheiro: '—',                       multiplicador: 0, randomizador: 0,  parcela: 0, potencializador: 0,      unidade: '', modificador: '' },
        { nd: '7', min: 11, max: 60,  faixa: '11-60',  dinheiro: '2d8x100 T$',              multiplicador: 2, randomizador: 8,  parcela: 0, potencializador: 100,    unidade: 'T$', modificador: '' },
        { nd: '7', min: 61, max: 90,  faixa: '61-90',  dinheiro: '2d12x10 TO',              multiplicador: 2, randomizador: 12, parcela: 0, potencializador: 10,     unidade: 'TO', modificador: '' },
        { nd: '7', min: 91, max: 100, faixa: '91-100', dinheiro: '1d4+1 riquezas menores',  multiplicador: 1, randomizador: 4,  parcela: 1, potencializador: 1,      unidade: 'riqueza menor', modificador: '' },

        { nd: '8', min: 1,  max: 10,  faixa: '01-10',  dinheiro: '—',                       multiplicador: 0, randomizador: 0,  parcela: 0, potencializador: 0,     unidade: '', modificador: '' },
        { nd: '8', min: 11, max: 55,  faixa: '11-55',  dinheiro: '2d10x100 T$',             multiplicador: 2, randomizador: 10, parcela: 0, potencializador: 100,   unidade: 'T$', modificador: '' },
        { nd: '8', min: 56, max: 95,  faixa: '56-95',  dinheiro: '1d4+1 riquezas menores',  multiplicador: 1, randomizador: 4,  parcela: 1, potencializador: 1,     unidade: 'riqueza menor', modificador: '' },
        { nd: '8', min: 96, max: 100, faixa: '96-100', dinheiro: '1 riqueza média +%',      multiplicador: 1, randomizador: 1,  parcela: 0, potencializador: 1,     unidade: 'riqueza média', modificador: '' },

        { nd: '9', min: 1,  max: 10,  faixa: '01-10',  dinheiro: '—',                       multiplicador: 0, randomizador: 0, parcela: 0, potencializador: 0,     unidade: '', modificador: '' },
        { nd: '9', min: 11, max: 35,  faixa: '11-35',  dinheiro: '1 riqueza média',         multiplicador: 1, randomizador: 1, parcela: 0, potencializador: 1,     unidade: 'riqueza média', modificador: '' },
        { nd: '9', min: 36, max: 85,  faixa: '36-85',  dinheiro: '4d6x100 T$',              multiplicador: 4, randomizador: 6, parcela: 0, potencializador: 100,   unidade: 'T$', modificador: '' },
        { nd: '9', min: 86, max: 100, faixa: '86-100', dinheiro: '1d3 riquezas médias',     multiplicador: 1, randomizador: 3, parcela: 0, potencializador: 1,     unidade: 'riqueza média', modificador: '' },

        { nd: '10', min: 1,  max: 10,  faixa: '01-10',  dinheiro: '—',                      multiplicador: 0, randomizador: 0,  parcela: 0, potencializador: 0,      unidade: '', modificador: '' },
        { nd: '10', min: 11, max: 30,  faixa: '11-30',  dinheiro: '4d6x100 T$',             multiplicador: 4, randomizador: 6,  parcela: 0, potencializador: 100,    unidade: 'T$', modificador: '' },
        { nd: '10', min: 31, max: 85,  faixa: '31-85',  dinheiro: '4d10x10 TO',             multiplicador: 4, randomizador: 10, parcela: 0, potencializador: 10,     unidade: 'TO', modificador: '' },
        { nd: '10', min: 86, max: 100, faixa: '86-100', dinheiro: '1d3+1 riquezas médias',  multiplicador: 1, randomizador: 3,  parcela: 1, potencializador: 1,      unidade: 'riqueza média', modificador: '' },

        { nd: '11', min: 1,  max: 10,  faixa: '01-10',  dinheiro: '—',                      multiplicador: 0, randomizador: 0, parcela: 0, potencializador: 0,        unidade: '', modificador: '' },
        { nd: '11', min: 11, max: 45,  faixa: '11-45',  dinheiro: '2d4x1000 T$',            multiplicador: 2, randomizador: 4, parcela: 0, potencializador: 1000,     unidade: 'T$', modificador: '' },
        { nd: '11', min: 46, max: 85,  faixa: '46-85',  dinheiro: '1d3 riquezas médias',    multiplicador: 1, randomizador: 3, parcela: 0, potencializador: 1,        unidade: 'riqueza média', modificador: '' },
        { nd: '11', min: 86, max: 100, faixa: '86-100', dinheiro: '2d6x100 TO',             multiplicador: 2, randomizador: 6, parcela: 0, potencializador: 100,      unidade: 'TO', modificador: '' },

        { nd: '12', min: 1,  max: 10,  faixa: '01-10',  dinheiro: '—',                      multiplicador: 0, randomizador: 0, parcela: 0, potencializador: 0,      unidade: '', modificador: '' },
        { nd: '12', min: 11, max: 45,  faixa: '11-45',  dinheiro: '1 riqueza média +%',     multiplicador: 1, randomizador: 1, parcela: 0, potencializador: 1,      unidade: 'riqueza média', modificador: '+%' },
        { nd: '12', min: 46, max: 80,  faixa: '46-80',  dinheiro: '2d6x1000 T$',            multiplicador: 2, randomizador: 6, parcela: 0, potencializador: 1000,   unidade: 'T$', modificador: '' },
        { nd: '12', min: 81, max: 100, faixa: '81-100', dinheiro: '1d4+1 riquezas médias',  multiplicador: 1, randomizador: 4, parcela: 1, potencializador: 1,      unidade: 'riqueza média', modificador: '' },

        { nd: '13', min: 1,  max: 10,  faixa: '01-10',  dinheiro: '—',                      multiplicador: 0, randomizador: 0, parcela: 0, potencializador: 0,        unidade: '', modificador: '' },
        { nd: '13', min: 11, max: 45,  faixa: '11-45',  dinheiro: '4d4x1000 +%',            multiplicador: 4, randomizador: 4, parcela: 0, potencializador: 1000,     unidade: 'T$', modificador: '+%' },
        { nd: '13', min: 46, max: 80,  faixa: '46-80',  dinheiro: '1d3+1 riquezas médias',  multiplicador: 1, randomizador: 3, parcela: 1, potencializador: 1,        unidade: 'riqueza média', modificador: '' },
        { nd: '13', min: 81, max: 100, faixa: '81-100', dinheiro: '4d6x100 TO',             multiplicador: 4, randomizador: 6, parcela: 0, potencializador: 100,      unidade: 'TO', modificador: '' },

        { nd: '14', min: 1,  max: 10,  faixa: '01-10',  dinheiro: '—',                      multiplicador: 0, randomizador: 0, parcela: 0, potencializador: 0,      unidade: '', modificador: '' },
        { nd: '14', min: 11, max: 45,  faixa: '11-45',  dinheiro: '1d3+1 riquezas médias',  multiplicador: 1, randomizador: 3, parcela: 1, potencializador: 1,      unidade: 'riqueza média', modificador: '' },
        { nd: '14', min: 46, max: 80,  faixa: '46-80',  dinheiro: '3d6x1000 T$',            multiplicador: 3, randomizador: 6, parcela: 0, potencializador: 1000,   unidade: 'T$', modificador: '' },
        { nd: '14', min: 81, max: 100, faixa: '81-100', dinheiro: '1 riqueza maior',        multiplicador: 1, randomizador: 1, parcela: 0, potencializador: 1,      unidade: 'riqueza maior', modificador: '' },

        { nd: '15', min: 1,  max: 10,  faixa: '01-10',  dinheiro: '—',                      multiplicador: 0, randomizador: 0,  parcela: 0, potencializador: 0,         unidade: '', modificador: '' },
        { nd: '15', min: 11, max: 45,  faixa: '11-45',  dinheiro: '1 riqueza média +%',     multiplicador: 1, randomizador: 1,  parcela: 0, potencializador: 1,         unidade: 'riqueza média', modificador: '+%' },
        { nd: '15', min: 46, max: 80,  faixa: '46-80',  dinheiro: '2d10x1000 T$',           multiplicador: 2, randomizador: 10, parcela: 0, potencializador: 1000,      unidade: 'T$', modificador: '' },
        { nd: '15', min: 81, max: 100, faixa: '81-100', dinheiro: '1d4x1000 TO',            multiplicador: 1, randomizador: 4,  parcela: 0, potencializador: 1000,      unidade: 'TO', modificador: '' },

        { nd: '16', min: 1,  max: 10,  faixa: '01-10',  dinheiro: '—',                      multiplicador: 0, randomizador: 0,  parcela: 0, potencializador: 0,      unidade: '', modificador: '' },
        { nd: '16', min: 11, max: 40,  faixa: '11-40',  dinheiro: '3d6x1000 T$',            multiplicador: 3, randomizador: 6,  parcela: 0, potencializador: 1000,   unidade: 'T$', modificador: '' },
        { nd: '16', min: 41, max: 75,  faixa: '41-75',  dinheiro: '3d10x100 TO',            multiplicador: 3, randomizador: 10, parcela: 0, potencializador: 100,    unidade: 'TO', modificador: '' },
        { nd: '16', min: 76, max: 100, faixa: '76-100', dinheiro: '1d3 riquezas maiores',   multiplicador: 1, randomizador: 3,  parcela: 0, potencializador: 1,      unidade: 'riqueza maior', modificador: '' },

        { nd: '17', min: 1,  max: 5,   faixa: '01-05',  dinheiro: '—',                        multiplicador: 0, randomizador: 0, parcela: 0, potencializador: 0,      unidade: '', modificador: '' },
        { nd: '17', min: 6,  max: 40,  faixa: '06-40',  dinheiro: '4d6x1000 T$',              multiplicador: 4, randomizador: 6, parcela: 0, potencializador: 1000,   unidade: 'T$', modificador: '' },
        { nd: '17', min: 41, max: 75,  faixa: '41-75',  dinheiro: '1d3 riquezas maiores +%',  multiplicador: 1, randomizador: 3, parcela: 0, potencializador: 1,      unidade: 'riqueza maior', modificador: '+%' },
        { nd: '17', min: 76, max: 100, faixa: '76-100', dinheiro: '2d4x1000 TO',              multiplicador: 2, randomizador: 4, parcela: 0, potencializador: 1000,   unidade: 'TO', modificador: '' },

        { nd: '18', min: 1,  max: 5,   faixa: '01-05',  dinheiro: '—',                        multiplicador: 0, randomizador: 0,  parcela: 0, potencializador: 0,      unidade: '', modificador: '' },
        { nd: '18', min: 6,  max: 40,  faixa: '06-40',  dinheiro: '4d10x1000 T$',             multiplicador: 4, randomizador: 10, parcela: 0, potencializador: 1000,   unidade: 'T$', modificador: '' },
        { nd: '18', min: 41, max: 75,  faixa: '41-75',  dinheiro: '1 riqueza maiores',        multiplicador: 1, randomizador: 1,  parcela: 0, potencializador: 1,      unidade: 'riqueza maior', modificador: '' },
        { nd: '18', min: 76, max: 100, faixa: '76-100', dinheiro: '1d3+1 riquezas maiores',   multiplicador: 1, randomizador: 3,  parcela: 1, potencializador: 1,      unidade: 'riqueza maior' , modificador: '' },

        { nd: '19', min: 1,  max: 5,   faixa: '01-05',  dinheiro: '—',                        multiplicador: 0, randomizador: 0,   parcela: 0, potencializador: 0,      unidade: '', modificador: '' },
        { nd: '19', min: 6,  max: 40,  faixa: '06-40',  dinheiro: '4d12x1000 T$',             multiplicador: 4, randomizador: 12,  parcela: 0, potencializador: 1000,   unidade: 'T$', modificador: '' },
        { nd: '19', min: 41, max: 75,  faixa: '41-75',  dinheiro: '1 riqueza maior +%',       multiplicador: 1, randomizador: 1,   parcela: 0, potencializador: 1,      unidade: 'riqueza maior', modificador: '+%' },
        { nd: '19', min: 76, max: 100, faixa: '76-100', dinheiro: '1d12x1000 TO',             multiplicador: 1, randomizador: 12,  parcela: 0, potencializador: 1000,   unidade: 'TO', modificador: '' },

        { nd: '20', min: 1,  max: 5,   faixa: '01-05',  dinheiro: '—',                          multiplicador: 0, randomizador: 0, parcela: 0, potencializador: 0,      unidade: '', modificador: '' },
        { nd: '20', min: 6,  max: 40,  faixa: '06-40',  dinheiro: '2d4x1000 TO',                multiplicador: 2, randomizador: 4, parcela: 0, potencializador: 1000,   unidade: 'TO', modificador: '' },
        { nd: '20', min: 41, max: 75,  faixa: '41-75',  dinheiro: '1d3 riqueza maiores',        multiplicador: 1, randomizador: 3, parcela: 0, potencializador: 1,      unidade: 'riqueza maior', modificador: '' },
        { nd: '20', min: 76, max: 100, faixa: '76-100', dinheiro: '1d3+1 riquezas maiores +%',  multiplicador: 1, randomizador: 3, parcela: 1, potencializador: 1,      unidade: 'riqueza maior', modificador: '+%' },
      ],
      [
        { min: 1,   max: 25, valor: '4d4 T$',    multiplicador: 4, randomizador: 4, potencializador: 1,  unidade: 'T$'},
        { min: 26,  max: 40, valor: '1d4x10 T$', multiplicador: 1, randomizador: 4, potencializador: 10, unidade: 'T$'},
        { min: 41,  max: 55, valor: '2d4x10 T$', multiplicador: 2, randomizador: 4, potencializador: 10, unidade: 'T$'},
        { min: 56,  max: 70, valor: '4d6x10 T$', multiplicador: 4, randomizador: 6, potencializador: 10, unidade: 'T$'},
        { min: 71,  max: 85, valor: '1d6x100 T$', multiplicador: 1, randomizador: 6, potencializador: 100, unidade: 'T$'},
        { min: 86,  max: 95, valor: '2d6x100 T$', multiplicador: 2, randomizador: 6, potencializador: 100, unidade: 'T$'},
        { min: 96,  max: 99, valor: '2d8x100 T$', multiplicador: 2, randomizador: 8, potencializador: 100, unidade: 'T$'},
        { min: 100,  max: 100, valor: '4d10x100 T$', multiplicador: 4, randomizador: 10, potencializador: 100, unidade: 'T$'},
      ],
      [
        { min: 1, max: 10, valor: '2d4x10 T$', multiplicador: 2, randomizador: 4, potencializador: 10,  unidade: 'T$'},
        { min: 11, max: 30, valor: '4d4x10 T$', multiplicador: 4, randomizador: 4, potencializador: 10,  unidade: 'T$'},
        { min: 31, max: 50, valor: '1d6x100 T$', multiplicador: 1, randomizador: 6, potencializador: 100,  unidade: 'T$'},
        { min: 51, max: 65, valor: '2d6x100 T$', multiplicador: 2, randomizador: 6, potencializador: 100,  unidade: 'T$'},
        { min: 66, max: 80, valor: '2d8x100 T$', multiplicador: 2, randomizador: 8, potencializador: 100,  unidade: 'T$'},
        { min: 81, max: 90, valor: '4d10x100 T$', multiplicador: 4, randomizador: 10, potencializador: 100,  unidade: 'T$'},
        { min: 91, max: 95, valor: '6d12x100 T$', multiplicador: 6, randomizador: 12, potencializador: 100,  unidade: 'T$'},
        { min: 96, max: 99, valor: '2d10x1000 T$', multiplicador: 2, randomizador: 10, potencializador: 1000,  unidade: 'T$'},
        { min: 100, max: 100, valor: '6d8x1000 T$', multiplicador: 6, randomizador: 8, potencializador: 1000,  unidade: 'T$'},
      ],
      [
        { min: 1, max: 5, valor: '1d6x100 T$', multiplicador: 1, randomizador: 6, potencializador: 100,  unidade: 'T$'},
        { min: 6, max: 15, valor: '2d6x100 T$', multiplicador: 2, randomizador: 6, potencializador: 100,  unidade: 'T$'},
        { min: 16, max: 25, valor: '2d8x100 T$', multiplicador: 2, randomizador: 8, potencializador: 100,  unidade: 'T$'},
        { min: 26, max: 40, valor: '4d10x100 T$', multiplicador: 4, randomizador: 10, potencializador: 100,  unidade: 'T$'},
        { min: 41, max: 60, valor: '6d12x100 T$', multiplicador: 6, randomizador: 12, potencializador: 100,  unidade: 'T$'},
        { min: 61, max: 75, valor: '2d10x1000 T$', multiplicador: 2, randomizador: 10, potencializador: 1000,  unidade: 'T$'},
        { min: 76, max: 85, valor: '6d8x1000 T$', multiplicador: 6, randomizador: 8, potencializador: 1000,  unidade: 'T$'},
        { min: 86, max: 95, valor: '1d10x10000 T$', multiplicador: 1, randomizador: 10, potencializador: 10000,  unidade: 'T$'},
        { min: 96, max: 100, valor: '4d12x10000 T$', multiplicador: 4, randomizador: 12, potencializador: 10000,  unidade: 'T$'},
      ]
    ];
  }
}
