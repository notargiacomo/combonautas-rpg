import { Injectable } from '@angular/core';
import { GenericRepository } from '../generic.repository';
import { ItemManutencaoSB } from '@app/model/supamodel/item.manutencao.sb';
@Injectable({
  providedIn: 'root'
})
export class ItemManutencaoDao extends GenericRepository<ItemManutencaoSB>{

  constructor(){
    super('tb_item_manutencao')
  }

  async listarItens() {
    const { data, error } = await this.client!
      .from('tb_item_manutencao')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }

  async consultarPorId(id: number) {
    const { data, error } = await this.client!
      .from('tb_item_manutencao')
      .select('*')
      .eq('id', id)
      .limit(1);
    
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }

    const item = data[0] ?? null;
    return item;
  }

  async inserir(item: any) {
    const { data, error } = await this.client!
      .from('tb_item_manutencao')
      .insert([item]);

    if (error) {
      console.error('Erro ao inserir item:', error);
      throw error;
    }
    return data;
  }

  async atualizar(id: number, item: any) {
    const { data, error } = await this.client!
      .from('tb_item_manutencao')
      .update(item)
      .eq('id', id); // onde o id for igual ao que você quer atualizar

    if (error) {
      console.error('Erro ao atualizar item:', error);
      throw error;
    }
    return data;
  }
}