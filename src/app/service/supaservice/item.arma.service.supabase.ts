import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { TipoDanoServiceSupabase } from './tipo.dano.service.supabase';

@Injectable({
  providedIn: 'root'
})
export class ItemArmaServiceSupabase {

  constructor(
    private supabase: SupabaseService,
  ) {}

  async listarItens() {
    const { data, error } = await this.supabase.client!
      .from('tb_item_arma')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }

  async consultarPorId(id: number) {
    const { data, error } = await this.supabase.client!
      .from('tb_item_arma')
      .select('*')
      .eq('id', id);
    
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }

    return data;
  }

  async inserir(item: any) {
    const { data, error } = await this.supabase.client!
      .from('tb_item_arma')
      .insert([item]);

    if (error) {
      console.error('Erro ao inserir item:', error);
      throw error;
    }
    return data;
  }

  async atualizar(id: number, item: any) {
    const { data, error } = await this.supabase.client!
      .from('tb_item_arma')
      .update(item)
      .eq('id', id); // onde o id for igual ao que você quer atualizar

    if (error) {
      console.error('Erro ao atualizar item:', error);
      throw error;
    }
    return data;
  }
}