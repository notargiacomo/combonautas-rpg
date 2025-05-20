import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceSupabase {

  constructor(private supabase: SupabaseService) {}

  async listarItens() {
    const { data, error } = await this.supabase.client!
      .from('tb_item')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }
}