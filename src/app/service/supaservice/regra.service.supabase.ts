import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { RegraItemSB } from '../../model/supamodel/regra.item.sb';

@Injectable({
  providedIn: 'root'
})
export class RegraServiceSupabase {

  constructor(private supabase: SupabaseService) {}

  async listar() {
    const { data, error } = await this.supabase.client!
      .from('tb_regra')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }

  async inserirRegras(idItem: any, regrasMemoria: RegraItemSB[]) {

    const regrasBanco = await this.recuperaRegrasDoItem(idItem);

    // Montando Lista de Remoção
    const idsMemoria = regrasMemoria.map(r => r.id_regra);
    const regrasParaDeletar = regrasBanco.filter(r => !idsMemoria.includes(r.id_regra) && r.id_item === idItem);
    if(regrasParaDeletar.length > 0){
      const idsParaDeletar: any[] = regrasParaDeletar.map(r => r.id);
      await this.deletarRegrasItens(idsParaDeletar);
    }

    // Montando Lista de Adição
    const idsBanco = regrasBanco.map(r => r.id_regra);
    const regrasParaInclusao = regrasMemoria.filter(r => !idsBanco.includes(r.id_regra) && r.id_item === idItem);

    const { data, error } = await this.supabase.client!
      .from('tb_regra_item')
      .insert(regrasParaInclusao); // ✅ pode ser array de objetos

    if (error) {
      console.error('Erro ao inserir regra:', error);
      throw error;
    }
    return data;
  }

  async recuperaRegrasDoItem(idItem: number) {
    const { data, error } = await this.supabase.client!
      .from('tb_regra_item')
      .select('id, id_item, id_regra, tb_regra(nome)')
      .eq('id_item', idItem) as unknown as { data: RegraItemSB[]; error: any };
      
    if (error) {
      console.error('Erro ao listar regras de item:', error);
      throw error;
    }

    return data;
  }

  async deletarRegrasItens(ids: number[]){
    const { data, error } = await this.supabase.client!
      .from('tb_regra_item')
      .delete()
      .in('id', ids);

      if (error) {
      console.error('Erro ao deletar:', error);
      throw error;
      }
  }
  
}