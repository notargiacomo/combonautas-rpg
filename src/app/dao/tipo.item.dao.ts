import { Injectable } from '@angular/core';
import { SupabaseDao } from './supabase.dao';

@Injectable({
  providedIn: 'root'
})
export class TipoItemDao {

  constructor(private supabase: SupabaseDao) {}

  async listarTiposItens() {
    const { data, error } = await this.supabase.client!
      .from('tb_tipo_item')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }
}