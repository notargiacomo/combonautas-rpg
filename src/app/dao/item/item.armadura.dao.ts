import { Injectable } from '@angular/core';
import { GenericRepository } from '../generic.repository';
import { ItemArmaduraSB } from '@app/model/supamodel/item.armadura.sb';

@Injectable({
  providedIn: 'root'
})
export class ItemArmaduraDao extends GenericRepository<ItemArmaduraSB>{

  constructor(){
    super('tb_item_armadura')
  }

  async listarItens() {
    const { data, error } = await this.client!
      .from('tb_item_armadura')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }

  async consultarPorId(id: number) {
    const { data, error } = await this.client!
      .from('tb_item_armadura')
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
      .from('tb_item_armadura')
      .insert([item]);

    if (error) {
      console.error('Erro ao inserir item:', error);
      throw error;
    }
    return data;
  }

  async atualizar(id: number, item: any) {
    const { data, error } = await this.client!
      .from('tb_item_armadura')
      .update(item)
      .eq('id', id); // onde o id for igual ao que você quer atualizar

    if (error) {
      console.error('Erro ao atualizar item:', error);
      throw error;
    }
    return data;
  }
}