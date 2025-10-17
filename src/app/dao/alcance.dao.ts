import { Injectable } from '@angular/core';
import { GenericRepository } from './generic.repository';
import { AlcanceSB } from '@app/model/supamodel/alcance.sb';

@Injectable({providedIn: 'root'})
export class AlcanceDao extends GenericRepository<AlcanceSB>{

  constructor(){
    super('tb_alcance')
  }

  async listar() {
    const { data, error } = await this.client!
      .from('tb_alcance')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }
}