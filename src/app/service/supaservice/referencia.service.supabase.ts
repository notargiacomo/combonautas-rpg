import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class ReferenciaServiceSupabase {

  constructor(private supabase: SupabaseService) {}

  async listarReferencias() {
    const { data, error } = await this.supabase.client!
      .from('tb_referencia')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }
}