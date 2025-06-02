import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AlcanceServiceSupabase {

  constructor(private supabase: SupabaseService) {}

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