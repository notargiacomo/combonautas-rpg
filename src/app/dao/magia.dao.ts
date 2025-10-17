import { Injectable } from '@angular/core';
import { MagiaSB } from '@app/model/supamodel/magia.sb';
import { GenericRepository } from './generic.repository';

@Injectable({
  providedIn: 'root'
})
export class MagiaDao extends GenericRepository<MagiaSB>{

  constructor(){
    super('tb_magia')
  }

  async consultarPorNome(nome: string) {
    const { data, error } = await this.client
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
}