import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { TipoDanoServiceSupabase } from './tipo.dano.service.supabase';

@Injectable({
  providedIn: 'root'
})
export class ItemEquipamentoAventuraServiceSupabase {

  constructor(
    private supabase: SupabaseService,
  ) {}

  async listarItens() {
    const { data, error } = await this.supabase.client!
      .from('tb_item_equipamento_aventura')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }

  async consultarPorId(id: number) {
    const { data, error } = await this.supabase.client!
      .from('tb_item_equipamento_aventura')
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
    const { data, error } = await this.supabase.client!
      .from('tb_item_equipamento_aventura')
      .insert([item]);

    if (error) {
      console.error('Erro ao inserir item:', error);
      throw error;
    }
    return data;
  }

  async atualizar(id: number, item: any) {
    const { data, error } = await this.supabase.client!
      .from('tb_item_equipamento_aventura')
      .update(item)
      .eq('id', id); // onde o id for igual ao que você quer atualizar

    if (error) {
      console.error('Erro ao atualizar item:', error);
      throw error;
    }
    return data;
  }
}