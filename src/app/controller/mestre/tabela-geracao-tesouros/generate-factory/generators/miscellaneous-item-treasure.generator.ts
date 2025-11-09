// generators/potion-treasure.generator.ts
import { Injectable } from '@angular/core';
import { TreasureGenerator } from './treasure-generator';
import { GeneratedTreasure, tabelaTesouroItens, TreasureContext } from '../model/treasure';

@Injectable({ providedIn: 'root' })
export class MiscellaneousItemsTreasureGenerator implements TreasureGenerator {
  constructor() {}

  public generate(ctx: TreasureContext): GeneratedTreasure {

    let tesouro: any[] = [];
    let gt : { items: any, return: string, notes: string, report: string };

    let randomItemDiverso = Math.floor(Math.random() * 100)+1;
    let itemDiverso = this.tabelaItensDiversos.find((item: any) => randomItemDiverso === item.id);
    tesouro.push(itemDiverso);
    gt = {items: tesouro, return: itemDiverso!.nome,  notes: '', report: this.gerarRelatorio(ctx.random!, itemDiverso)};

    return gt;
  }

  private gerarRelatorio(random: number, itemDiverso: any): string {

    return `
      <b>ITEM</b><br />
      <label><b>RESULTADO D100:</b> ${random}</label><br />
      <label><b>ITEM DIVERSO:</b> ${itemDiverso.id} - ${itemDiverso.nome}</label><br />
      `;
  }

    tabelaItensDiversos =  [
        {id: 1, nome: 'Ácido', livro: 'Tormenta20', pagina: 160},
        {id: 2, nome: 'Água benta', livro: 'Tormenta20', pagina: 155},
        {id: 3, nome: 'Alaúde élfico', livro: 'Tormenta20', pagina: 158},
        {id: 4, nome: 'Algemas', livro: 'Tormenta20', pagina: 155},
        {id: 5, nome: 'Baga-de-fogo', livro: 'Tormenta20', pagina: 160},
        {id: 6, nome: 'Bálsamo restaurador', livro: 'Tormenta20', pagina: 160},
        {id: 7, nome: 'Bálsamo restaurador', livro: 'Tormenta20', pagina: 160},
        {id: 8, nome: 'Bálsamo restaurador', livro: 'Tormenta20', pagina: 160},
        {id: 9, nome: 'Bandana', livro: 'Tormenta20', pagina: 159},
        {id: 10, nome: 'Bandoleira de poções', livro: 'Tormenta20', pagina: 155},
        {id: 11, nome: 'Bomba', livro: 'Tormenta20', pagina: 160},
        {id: 12, nome: 'Botas reforçadas', livro: 'Tormenta20', pagina: 159},
        {id: 13, nome: 'Camisa bufante', livro: 'Tormenta20', pagina: 159},
        {id: 14, nome: 'Capa esvoaçante', livro: 'Tormenta20', pagina: 159},
        {id: 15, nome: 'Capa pesada', livro: 'Tormenta20', pagina: 159},
        {id: 16, nome: 'Casaco longo', livro: 'Tormenta20', pagina: 159},
        {id: 17, nome: 'Chapéu arcano', livro: 'Tormenta20', pagina: 159},
        {id: 18, nome: 'Coleção de livros', livro: 'Tormenta20', pagina: 158},
        {id: 19, nome: 'Cosmético', livro: 'Tormenta20', pagina: 160},
        {id: 20, nome: 'Dente-de-dragão', livro: 'Tormenta20', pagina: 161},
        {id: 21, nome: 'Enfeite de elmo', livro: 'Tormenta20', pagina: 159},
        {id: 22, nome: 'Elixir do amor', livro: 'Tormenta20', pagina: 160},
        {id: 23, nome: 'Equipamento de viagem', livro: 'Tormenta20', pagina: 155},
        {id: 24, nome: 'Essência de mana', livro: 'Tormenta20', pagina: 160},
        {id: 25, nome: 'Essência de mana', livro: 'Tormenta20', pagina: 160},
        {id: 26, nome: 'Essência de mana', livro: 'Tormenta20', pagina: 160},
        {id: 27, nome: 'Estojo de disfarces', livro: 'Tormenta20', pagina: 158},
        {id: 28, nome: 'Farrapos de ermitão', livro: 'Tormenta20', pagina: 159},
        {id: 29, nome: 'Flauta mística', livro: 'Tormenta20', pagina: 158},
        {id: 30, nome: 'Fogo alquímico', livro: 'Tormenta20', pagina: 160},
        {id: 31, nome: 'Gorro de ervas', livro: 'Tormenta20', pagina: 159},
        {id: 32, nome: 'Líquen lilás', livro: 'Tormenta20', pagina: 161},
        {id: 33, nome: 'Luneta', livro: 'Tormenta20', pagina: 158},
        {id: 34, nome: 'Luva de pelica', livro: 'Tormenta20', pagina: 159},
        {id: 35, nome: 'Maleta de medicamentos', livro: 'Tormenta20', pagina: 158},
        {id: 36, nome: 'Manopla', livro: 'Tormenta20', pagina: 159},
        {id: 37, nome: 'Manto eclesiástico', livro: 'Tormenta20', pagina: 159},
        {id: 38, nome: 'Mochila de aventureiro', livro: 'Tormenta20', pagina: 155},
        {id: 39, nome: 'Musgo púrpura', livro: 'Tormenta20', pagina: 161},
        {id: 40, nome: 'Organizador de pergaminhos', livro: 'Tormenta20', pagina: 155},
        {id: 41, nome: 'Ossos de monstro', livro: 'Tormenta20', pagina: 161},
        {id: 42, nome: 'Pó de cristal', livro: 'Tormenta20', pagina: 161},
        {id: 43, nome: 'Pó de giz', livro: 'Tormenta20', pagina: 161},
        {id: 44, nome: 'Pó do desaparecimento', livro: 'Tormenta20', pagina: 160},
        {id: 45, nome: 'Robe místico', livro: 'Tormenta20', pagina: 159},
        {id: 46, nome: 'Saco de sal', livro: 'Tormenta20', pagina: 161},
        {id: 47, nome: 'Sapatos de camurça', livro: 'Tormenta20', pagina: 159},
        {id: 48, nome: 'Seixo de âmbar', livro: 'Tormenta20', pagina: 161},
        {id: 49, nome: 'Sela', livro: 'Tormenta20', pagina: 158},
        {id: 50, nome: 'Tabardo', livro: 'Tormenta20', pagina: 159},
        {id: 51, nome: 'Traje da corte', livro: 'Tormenta20', pagina: 159},
        {id: 52, nome: 'Terra de cemitério', livro: 'Tormenta20', pagina: 161},
        {id: 53, nome: 'Veste de seda', livro: 'Tormenta20', pagina: 159},
        {id: 54, nome: 'Corda de teia', livro: 'Ameaças de Arton', pagina: 396},
        {id: 55, nome: 'Dente de wisphago', livro: 'Ameaças de Arton', pagina: 396},
        {id: 56, nome: 'Bomba de fumaça', livro: 'Ameaças de Arton', pagina: 396},
        {id: 57, nome: 'Elixir quimérico', livro: 'Ameaças de Arton', pagina: 396},
        {id: 58, nome: 'Éter elemental', livro: 'Ameaças de Arton', pagina: 396},
        {id: 59, nome: 'Óleo de besouro', livro: 'Ameaças de Arton', pagina: 397},
        {id: 60, nome: 'Água benta concentrada', livro: 'Deuses de Arton', pagina: 48},
        {id: 61, nome: 'Aspersório', livro: 'Deuses de Arton', pagina: 48},
        {id: 62, nome: 'Patuá', livro: 'Deuses de Arton', pagina: 49},
        {id: 63, nome: 'Panfleto de aforismos', livro: 'Deuses de Arton', pagina: 49},
        {id: 64, nome: 'Texto sagrado', livro: 'Deuses de Arton', pagina: 49},
        {id: 65, nome: 'Hábito sacerdotal', livro: 'Deuses de Arton', pagina: 49},
        {id: 66, nome: 'Manto de alto sacerdote', livro: 'Deuses de Arton', pagina: 49},
        {id: 67, nome: 'Sandálias', livro: 'Deuses de Arton', pagina: 51},
        {id: 68, nome: 'Piercing de umbigo', livro: 'Deuses de Arton', pagina: 51},
        {id: 69, nome: 'Incenso', livro: 'Deuses de Arton', pagina: 52},
        {id: 70, nome: 'Santa granada de mão', livro: 'Deuses de Arton', pagina: 52},
        {id: 71, nome: 'Fitilho consagrado', livro: 'Deuses de Arton', pagina: 52},
        {id: 72, nome: 'Pena de anjo', livro: 'Deuses de Arton', pagina: 52},
        {id: 73, nome: 'Ábaco', livro: 'Heróis de Arton', pagina: 227},
        {id: 74, nome: 'Ampulheta', livro: 'Heróis de Arton', pagina: 227},
        {id: 75, nome: 'Astrolábio', livro: 'Heróis de Arton', pagina: 227},
        {id: 76, nome: 'Bainha adornada', livro: 'Heróis de Arton', pagina: 227},
        {id: 77, nome: 'Bússola', livro: 'Heróis de Arton', pagina: 227},
        {id: 78, nome: 'Diagrama anatômico', livro: 'Heróis de Arton', pagina: 230},
        {id: 79, nome: 'Estrepes', livro: 'Heróis de Arton', pagina: 230},
        {id: 80, nome: 'Lampião de foco', livro: 'Heróis de Arton', pagina: 230},
        {id: 81, nome: 'Leque', livro: 'Heróis de Arton', pagina: 230},
        {id: 82, nome: 'Lupa', livro: 'Heróis de Arton', pagina: 230},
        {id: 83, nome: 'Mapa (mestre define de qual região)', livro: 'Heróis de Arton', pagina: 230},
        {id: 84, nome: 'Mecanismo de mola', livro: 'Heróis de Arton', pagina: 230},
        {id: 85, nome: 'Mochila discreta', livro: 'Heróis de Arton', pagina: 230},
        {id: 86, nome: 'Sinete', livro: 'Heróis de Arton', pagina: 231},
        {id: 87, nome: 'Apito de caça', livro: 'Heróis de Arton', pagina: 231},
        {id: 88, nome: 'Baralho marcado', livro: 'Heróis de Arton', pagina: 231},
        {id: 89, nome: 'Clarim deheoni', livro: 'Heróis de Arton', pagina: 231},
        {id: 90, nome: 'Pandeiro das estradas', livro: 'Heróis de Arton', pagina: 231},
        {id: 91, nome: 'Camisolão', livro: 'Heróis de Arton', pagina: 232},
        {id: 92, nome: 'Casaca de apetrechos', livro: 'Heróis de Arton', pagina: 232},
        {id: 93, nome: 'Chapéu emplumado', livro: 'Heróis de Arton', pagina: 232},
        {id: 94, nome: 'Elmo leve', livro: 'Heróis de Arton', pagina: 232},
        {id: 95, nome: 'Elmo pesado', livro: 'Heróis de Arton', pagina: 232},
        {id: 96, nome: 'Rondel', livro: 'Heróis de Arton', pagina: 233},
        {id: 97, nome: 'Sapatos confortáveis', livro: 'Heróis de Arton', pagina: 233},
        {id: 98, nome: 'Sapatos de salto alto', livro: 'Heróis de Arton', pagina: 233},
        {id: 99, nome: 'Ácido concentrado', livro: 'Heróis de Arton', pagina: 234},
        {id: 100, nome: 'Frasco abissal', livro: 'Heróis de Arton', pagina: 234}
    ]
}





