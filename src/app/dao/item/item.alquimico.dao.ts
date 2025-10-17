import { Injectable } from '@angular/core';
import { GenericRepository } from '../generic.repository';
import { ItemAlimentoSB } from '@app/model/supamodel/item.alimento.sb';
import { ItemAlquimicoSB } from '@app/model/supamodel/item.alquimico.sb';

@Injectable({
  providedIn: 'root'
})
export class ItemAlquimicoDao extends GenericRepository<ItemAlquimicoSB>{

  constructor(){
    super('tb_item_alquimico')
  }

  async listarItens() {
    const { data, error } = await this.client!
      .from('tb_item_alquimico')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }

  async consultarPorId(id: number) {
    const { data, error } = await this.client!
      .from('tb_item_alquimico')
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
      .from('tb_item_alquimico')
      .insert([item]);

    if (error) {
      console.error('Erro ao inserir item:', error);
      throw error;
    }
    return data;
  }

  async atualizar(id: number, item: any) {
    const { data, error } = await this.client!
      .from('tb_item_alquimico')
      .update(item)
      .eq('id', id); // onde o id for igual ao que você quer atualizar

    if (error) {
      console.error('Erro ao atualizar item:', error);
      throw error;
    }
    return data;
  }
}