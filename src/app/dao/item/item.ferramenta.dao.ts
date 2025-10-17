import { Injectable } from '@angular/core';
import { GenericRepository } from '../generic.repository';
import { ItemFerramentaSB } from '@app/model/supamodel/item.ferramenta.sb';
@Injectable({
  providedIn: 'root'
})
export class ItemFerramentaDao extends GenericRepository<ItemFerramentaSB>{

  constructor(){
    super('tb_item_ferramenta')
  }

  async listarItens() {
    const { data, error } = await this.client!
      .from('tb_item_ferramenta')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }

  async consultarPorId(id: number) {
    const { data, error } = await this.client!
      .from('tb_item_ferramenta')
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
      .from('tb_item_ferramenta')
      .insert([item]);

    if (error) {
      console.error('Erro ao inserir item:', error);
      throw error;
    }
    return data;
  }

  async atualizar(id: number, item: any) {
    const { data, error } = await this.client!
      .from('tb_item_ferramenta')
      .update(item)
      .eq('id', id); // onde o id for igual ao que você quer atualizar

    if (error) {
      console.error('Erro ao atualizar item:', error);
      throw error;
    }
    return data;
  }
}