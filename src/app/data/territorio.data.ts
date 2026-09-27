import { Injectable } from '@angular/core';
import { Terreno } from '@app/enum/terreno.enum';
import { TerrenoEspecial } from '@app/enum/terreno.especiais.enum';
import { Territorio } from '@app/model/territorio';

@Injectable({
  providedIn: 'root',
})
export class TerritorioData {
  private territorio: Territorio[] = [];

  get(): any[] {
    return this.territorio;
  }

  constructor() {
    this.territorio = [
      {
        id: 1,
        nome: 'Ahlen',
        terrenos: [Terreno.PLANICIE, Terreno.COLINA, Terreno.FLORESTA],
      },
      {
        id: 2,
        nome: 'Aslothia',
        terrenos: [TerrenoEspecial.ASLOTHIA, Terreno.AQUATICO, Terreno.FLORESTA],
      },
      {
        id: 3,
        nome: 'Bielefeld',
        terrenos: [
          Terreno.PLANICIE,
          TerrenoEspecial.ESTRADAS_REINADO,
          Terreno.FLORESTA,
          TerrenoEspecial.SUPREMACIA_PURISTA,
        ],
      },
      {
        id: 4,
        nome: 'Catacumbas de Leverick',
        terrenos: [Terreno.SUBTERRANEO],
      },
      {
        id: 5,
        nome: 'Conflagração do Aço',
        terrenos: [Terreno.FLORESTA, Terreno.COLINA],
      },
      {
        id: 6,
        nome: 'Deheon',
        terrenos: [
          Terreno.FLORESTA,
          Terreno.COLINA,
          Terreno.PLANICIE,
          TerrenoEspecial.ESTRADAS_REINADO,
          Terreno.AQUATICO,
          Terreno.MONTANHA,
          Terreno.PANTANO,
        ],
      },
      {
        id: 7,
        nome: 'Doherimm',
        terrenos: [Terreno.SUBTERRANEO, Terreno.AQUATICO],
      },
      {
        id: 8,
        nome: 'Ermos Púrpuras',
        terrenos: [Terreno.FLORESTA, TerrenoEspecial.ASLOTHIA, Terreno.MONTANHA, TerrenoEspecial.SUPREMACIA_PURISTA],
      },
      {
        id: 9,
        nome: 'Feudos de Trebuck',
        terrenos: [Terreno.FLORESTA, TerrenoEspecial.SANGUINARIAS, Terreno.PLANICIE, Terreno.AREA_TORMENTA],
      },
      {
        id: 10,
        nome: 'Floresta de Tollon',
        terrenos: [Terreno.FLORESTA, Terreno.AQUATICO, Terreno.COLINA],
      },
      {
        id: 11,
        nome: 'Galrasia',
        terrenos: [TerrenoEspecial.GALRASIA, Terreno.AQUATICO, Terreno.MONTANHA],
      },
      {
        id: 12,
        nome: 'Halak-Tûr',
        terrenos: [Terreno.DESERTO, Terreno.AREA_TORMENTA, Terreno.PLANICIE],
      },
      {
        id: 13,
        nome: 'Império de Tauron',
        terrenos: [TerrenoEspecial.IMPERIO_TAURON, Terreno.AQUATICO, Terreno.FLORESTA, Terreno.MONTANHA],
      },
      {
        id: 14,
        nome: 'Lamnor',
        terrenos: [
          TerrenoEspecial.RUINAS_TYRONDIR_LAMNOR,
          Terreno.AQUATICO,
          Terreno.AREA_TORMENTA,
          Terreno.DESERTO,
          Terreno.FLORESTA,
          Terreno.MONTANHA,
          Terreno.PANTANO,
        ],
      },
      {
        id: 15,
        nome: 'Khalifor',
        terrenos: [Terreno.URBANO, Terreno.SUBTERRANEO],
      },
      {
        id: 16,
        nome: 'Khubar',
        terrenos: [Terreno.FLORESTA, Terreno.PLANICIE, Terreno.AQUATICO, Terreno.MONTANHA],
      },
      {
        id: 17,
        nome: 'Montanhas Sanguinárias',
        terrenos: [TerrenoEspecial.SANGUINARIAS, Terreno.AQUATICO, Terreno.AREA_TORMENTA],
      },
      {
        id: 18,
        nome: 'Montanhas Uivantes',
        terrenos: [
          TerrenoEspecial.IMPERIO_TAURON,
          Terreno.ARTICO,
          Terreno.MONTANHA,
          Terreno.AQUATICO,
          Terreno.FLORESTA,
        ],
      },
      {
        id: 19,
        nome: 'Moreania',
        terrenos: [Terreno.AQUATICO, Terreno.FLORESTA, Terreno.MONTANHA, Terreno.PLANICIE],
      },
      {
        id: 20,
        nome: 'Namalkah',
        terrenos: [
          Terreno.PLANICIE,
          TerrenoEspecial.ESTRADAS_REINADO,
          Terreno.AQUATICO,
          Terreno.FLORESTA,
          Terreno.MONTANHA,
          TerrenoEspecial.SUPREMACIA_PURISTA,
        ],
      },
      {
        id: 21,
        nome: 'Nova Malpetrim',
        terrenos: [Terreno.AQUATICO, Terreno.URBANO],
      },
      {
        id: 22,
        nome: 'Pondsmânia',
        terrenos: [
          Terreno.AQUATICO,
          Terreno.ARTICO,
          Terreno.COLINA,
          Terreno.DESERTO,
          Terreno.FLORESTA,
          Terreno.MONTANHA,
          Terreno.PANTANO,
          Terreno.PLANICIE,
          Terreno.SUBTERRANEO,
          Terreno.URBANO,
        ],
      },
      {
        id: 23,
        nome: 'Repúblicas Livres de Samburdia',
        terrenos: [
          Terreno.FLORESTA,
          Terreno.AQUATICO,
          TerrenoEspecial.ASLOTHIA,
          Terreno.PLANICIE,
          Terreno.MONTANHA,
          TerrenoEspecial.SANGUINARIAS,
        ],
      },
      {
        id: 24,
        nome: 'Ruínas de Tyrondir',
        terrenos: [TerrenoEspecial.RUINAS_TYRONDIR_LAMNOR, Terreno.AQUATICO, Terreno.COLINA, Terreno.MONTANHA],
      },
      {
        id: 25,
        nome: 'Salistick',
        terrenos: [
          Terreno.PLANICIE,
          Terreno.AQUATICO,
          Terreno.FLORESTA,
          Terreno.PANTANO,
          TerrenoEspecial.SUPREMACIA_PURISTA,
        ],
      },
      {
        id: 26,
        nome: 'Sckharshantallas',
        terrenos: [Terreno.PLANICIE, Terreno.AQUATICO, Terreno.AREA_TORMENTA, Terreno.FLORESTA, Terreno.MONTANHA],
      },
      {
        id: 27,
        nome: 'Smokestone',
        terrenos: [Terreno.URBANO, Terreno.COLINA, Terreno.DESERTO],
      },
      {
        id: 28,
        nome: 'Supremacia Purista',
        terrenos: [TerrenoEspecial.SUPREMACIA_PURISTA, Terreno.COLINA, Terreno.FLORESTA, Terreno.MONTANHA],
      },
      {
        id: 29,
        nome: 'Svalas',
        terrenos: [TerrenoEspecial.SUPREMACIA_PURISTA, Terreno.PLANICIE, Terreno.FLORESTA],
      },
      {
        id: 30,
        nome: 'Tamu-ra',
        terrenos: [Terreno.PLANICIE, Terreno.AQUATICO, Terreno.FLORESTA, Terreno.MONTANHA],
      },
      {
        id: 31,
        nome: 'Triunphus',
        terrenos: [Terreno.URBANO, Terreno.MONTANHA],
      },
      {
        id: 32,
        nome: 'Ubani',
        terrenos: [
          Terreno.PLANICIE,
          Terreno.AREA_TORMENTA,
          Terreno.DESERTO,
          Terreno.FLORESTA,
          TerrenoEspecial.IMPERIO_TAURON,
          TerrenoEspecial.SANGUINARIAS,
        ],
      },
      {
        id: 33,
        nome: 'Valkaria',
        terrenos: [Terreno.URBANO, Terreno.SUBTERRANEO],
      },
      {
        id: 34,
        nome: 'Vectora',
        terrenos: [Terreno.URBANO, Terreno.SUBTERRANEO],
      },
      {
        id: 35,
        nome: 'Wynlla',
        terrenos: [
          Terreno.AQUATICO,
          Terreno.FLORESTA,
          Terreno.MONTANHA,
          Terreno.URBANO,
          Terreno.PLANICIE,
          TerrenoEspecial.ESTRADAS_REINADO,
        ],
      },
      {
        id: 36,
        nome: 'Zakharov',
        terrenos: [
          Terreno.AQUATICO,
          Terreno.COLINA,
          Terreno.FLORESTA,
          TerrenoEspecial.SUPREMACIA_PURISTA,
          TerrenoEspecial.ESTRADAS_REINADO,
        ],
      },
      {
        id: 37,
        nome: 'Academia Arcana',
        terrenos: [
          Terreno.AQUATICO,
          Terreno.ARTICO,
          Terreno.COLINA,
          Terreno.DESERTO,
          Terreno.FLORESTA,
          Terreno.MONTANHA,
          Terreno.PANTANO,
          Terreno.PLANICIE,
          Terreno.SUBTERRANEO,
          Terreno.URBANO,
        ],
      },
    ];
  }
}
