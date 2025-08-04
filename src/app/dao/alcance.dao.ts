import { Injectable } from '@angular/core';
import { SupabaseDao } from './supabase.dao';

@Injectable({providedIn: 'root'})
export class AlcanceDao {

  constructor(private supabase: SupabaseDao) {}

  async listar() {
    const { data, error } = await this.supabase.client!
      .from('tb_alcance')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }
}