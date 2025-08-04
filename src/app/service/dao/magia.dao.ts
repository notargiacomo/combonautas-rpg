import { Injectable } from '@angular/core';
import { SupabaseDao } from './supabase.dao';
import { TipoDanoDao } from './tipo.dano.dao';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MagiaDao {

  constructor(
    private supabase: SupabaseDao,
  ) {}

listarItens(): Observable<any[]> {
  const promise = this.supabase.client!
    .from('tb_magia')
    .select('*')
    .then(({ data, error }) => {
      if (error) {
        throw error;
      }
      return data ?? [];
    });

  return from(promise);
}

  consultarPorId(id: number): Observable<any> {
    const promise = this.supabase.client!
      .from('tb_magia')
      .select('*')
      .eq('id', id)
      .limit(1)
      .then(({ data, error }) => {
      if (error) {
        throw error;
      }
      return data ?? [];
    });
    
    return from(promise);
  }

  async consultarPorNome(nome: string) {
    const { data, error } = await this.supabase.client!
      .from('tb_magia')
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
    const { data, error } = await this.supabase.client!
      .from('tb_magia')
      .insert([item]);

    if (error) {
      console.error('Erro ao inserir item:', error);
      throw error;
    }
    return data;
  }

  async atualizar(id: number, item: any) {
    const { data, error } = await this.supabase.client!
      .from('tb_magia')
      .update(item)
      .eq('id', id); // onde o id for igual ao que você quer atualizar

    if (error) {
      console.error('Erro ao atualizar item:', error);
      throw error;
    }
    return data;
  }
}