import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { PericiaItemSB } from '../../model/supamodel/pericia.item.sb';

@Injectable({
  providedIn: 'root'
})
export class PericiaServiceSupabase {

  constructor(private supabase: SupabaseService) {}

  async listar() {
    const { data, error } = await this.supabase.client!
      .from('tb_pericia')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }

  async recuperaPericiaItem(idItem: number) {
    const { data, error } = await this.supabase.client!
      .from('tb_item_pericia')
      .select('id, id_item, id_pericia, tb_pericia(nome)')
      .eq('id_item', idItem) as unknown as { data: PericiaItemSB[]; error: any };
      
    if (error) {
      console.error('Erro ao listar tipo dano item:', error);
      throw error;
    }

    return data;
  }

  async inserirPericias(idItem: any, periciasMemoria: PericiaItemSB[]) {

    const regrasBanco = await this.recuperaPericiaItem(idItem);

    // Montando Lista de Remoção
    const idsMemoria = periciasMemoria.map(r => r.id_pericia);
    const regrasParaDeletar = regrasBanco.filter(r => !idsMemoria.includes(r.id_pericia) && r.id_item === idItem);
    if(regrasParaDeletar.length > 0){
      const idsParaDeletar: any[] = regrasParaDeletar.map(r => r.id);
      await this.deletarPericiasItens(idsParaDeletar);
    }

    // Montando Lista de Adição
    const idsBanco = regrasBanco.map(r => r.id_pericia);
    const regrasParaInclusao = periciasMemoria.filter(r => !idsBanco.includes(r.id_pericia) && r.id_item === idItem);

    const { data, error } = await this.supabase.client!
      .from('tb_item_pericia')
      .insert(regrasParaInclusao); // ✅ pode ser array de objetos

    if (error) {
      console.error('Erro ao inserir regra:', error);
      throw error;
    }
    return data;
  }

    async deletarPericiasItens(ids: number[]){
    const { data, error } = await this.supabase.client!
      .from('tb_item_pericia')
      .delete()
      .in('id', ids);

      if (error) {
      console.error('Erro ao deletar:', error);
      throw error;
      }
  }
}