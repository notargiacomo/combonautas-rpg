import { Injectable } from '@angular/core';
import { TipoDanoItemSB } from '../model/supamodel/tipo.dano.item.sb';
import { GenericRepository } from './generic.repository';

@Injectable({
  providedIn: 'root'
})
export class TipoDanoDao extends GenericRepository<TipoDanoItemSB>{

  constructor(){
    super('tb_tipo_dano_item')
  }

  async listar() {
    const { data, error } = await this.client!
      .from('tb_tipo_dano')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }

  async inserirDanos(idItem: any, tipoDanoItem: TipoDanoItemSB[]) {
  
      const tipoItemBanco = await this.recuperaTipoDanoDoItem(idItem);
  
      // Montando Lista de Remoção
      const idsMemoria = tipoDanoItem.map(tdi => tdi.id_tipo);
      const tipoItemParaDeletar = tipoItemBanco.filter(tdi => !idsMemoria.includes(tdi.id_tipo) && tdi.id_item === idItem);
      if(tipoItemParaDeletar.length > 0){
        const idsParaDeletar: any[] = tipoItemParaDeletar.map(tdi => tdi.id);
        await this.deletarTipoDanoItem(idsParaDeletar);
      }
  
      // Montando Lista de Adição
      const idsBanco = tipoItemBanco.map(tdi => tdi.id_tipo);
      const tipoItemParaInclusao = tipoDanoItem.filter(tdi => !idsBanco.includes(tdi.id_tipo) && tdi.id_item === idItem);
  
      const { data, error } = await this.client!
        .from('tb_tipo_dano_item')
        .insert(tipoItemParaInclusao); // ✅ pode ser array de objetos
  
      if (error) {
        console.error('Erro ao inserir tipo dano item:', error);
        throw error;
      }
      return data;
    }
  
    async recuperaTipoDanoDoItem(idItem: number) {
      const { data, error } = await this.client!
        .from('tb_tipo_dano_item')
        .select('id, id_item, id_tipo, tb_tipo_dano(nome)')
        .eq('id_item', idItem) as unknown as { data: TipoDanoItemSB[]; error: any };
        
      if (error) {
        console.error('Erro ao listar tipo dano item:', error);
        throw error;
      }
  
      return data;
    }
  
    async deletarTipoDanoItem(ids: number[]){
      const { data, error } = await this.client!
        .from('tb_tipo_dano_item')
        .delete()
        .in('id', ids);
  
        if (error) {
        console.error('Erro ao deletar:', error);
        throw error;
        }
    }


}