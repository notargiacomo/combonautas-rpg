import { Injectable } from '@angular/core';
import { SupabaseDao } from './supabase.dao';

@Injectable({
  providedIn: 'root'
})
export class ReferenciaDao {

  constructor(private supabase: SupabaseDao) {}

  async listar() {
    const { data, error } = await this.supabase.client!
      .from('tb_referencia')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }

  async consultarPorId(id: number) {
    const { data, error } = await this.supabase.client!
      .from('tb_referencia')
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
}