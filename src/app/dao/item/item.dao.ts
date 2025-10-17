import { Injectable } from '@angular/core';
import { GenericRepository} from '../generic.repository';
import { ItemSB } from '@app/model/supamodel/item.sb';

@Injectable({
  providedIn: 'root'
})
export class ItemDao extends GenericRepository<ItemSB>{

  constructor(){
    super('tb_item')
  }

  async listarItens() {
    const { data, error } = await this.client!
      .from('tb_item')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }

  async consultarPorId(id: number) {
    const { data, error } = await this.client!
      .from('tb_item')
      .select(`*`)
      .eq('id', id)
      .limit(1);
    
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    const item = data[0] ?? null;
    return item;
  }

  async consultarPorNome(nome: string) {
    const { data, error } = await this.client!
      .from('tb_item')
      .select(`*`)
      .eq('nome', nome)
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
      .from('tb_item')
      .insert([item]);

    if (error) {
      console.error('Erro ao inserir item:', error);
      throw error;
    }
    return data;
  }

  async atualizar(id: number, item: any) {
    const { data, error } = await this.client!
      .from('tb_item')
      .update(item)
      .eq('id', id); // onde o id for igual ao que você quer atualizar

    if (error) {
      console.error('Erro ao atualizar item:', error);
      throw error;
    }
    return data;
  }
}