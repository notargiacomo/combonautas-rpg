import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { ItemManutencaoServiceSupabase } from './item.manutencao.service.supabase';
import { ItemArmaServiceSupabase } from './item.arma.service.supabase';
import { ItemResistenciaServiceSupabase } from './item.resistencia.service.supabase';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceSupabase {

  constructor(
    private supabase: SupabaseService,
    private itemManutencaoSB: ItemManutencaoServiceSupabase,
    private itemArmaSB: ItemArmaServiceSupabase,
    private itemResistenciaSB: ItemResistenciaServiceSupabase,
  ) {}

  async listarItens() {
    const { data, error } = await this.supabase.client!
      .from('tb_item')
      .select('*');
      
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }
    return data;
  }

  async consultarPorId(id: number) {
    const { data, error } = await this.supabase.client!
      .from('tb_item')
      .select(`*, 
        tb_item_arma(dano, multiplicador_critico, margem_ameaca, alcance_metros), 
        tb_item_manutencao(preco, cd_fabricacao, cd_identificar_item, tempo_fabricacao_em_horas, pericia_manutencao, custo_permanente_pontos_mana),
        tb_item_resistencia(reducao_dano, pontos_vida) `)
      .eq('id', id);
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }

    return data;
  }

  async consultarPorNome(nome: string) {
    const { data, error } = await this.supabase.client!
      .from('tb_item')
      .select(`*, 
        tb_item_arma(dano, multiplicador_critico, margem_ameaca, alcance_metros), 
        tb_item_manutencao(preco, cd_fabricacao, cd_identificar_item, tempo_fabricacao_em_horas, pericia_manutencao, custo_permanente_pontos_mana),
        tb_item_resistencia(reducao_dano, pontos_vida) `)
      .eq('nome', nome)
      .limit(1);
    
    if (error) {
      console.error('Erro ao listar itens:', error);
      throw error;
    }

    return data[0];
  }

  async inserir(item: any) {
    const { data, error } = await this.supabase.client!
      .from('tb_item')
      .insert([item]);
    
    await this.itemArmaSB.inserir(item.itemArma);
    await this.itemResistenciaSB.inserir(item.itemResistencia);   
    await this.itemManutencaoSB.inserir(item.itemManutencao);   
    

    if (error) {
      console.error('Erro ao inserir item:', error);
      throw error;
    }
    return data;
  }

  async atualizar(id: number, item: any) {
    const { data, error } = await this.supabase.client!
      .from('tb_item')
      .update(item)
      .eq('id', id); // onde o id for igual ao que você quer atualizar

    await this.itemArmaSB.atualizar(item.itemArma.id, item.itemArma);
    await this.itemResistenciaSB.atualizar(item.itemResistencia.id, item.itemResistencia);   
    await this.itemManutencaoSB.atualizar(item.itemManutencao.id, item.itemManutencao);   

    if (error) {
      console.error('Erro ao atualizar item:', error);
      throw error;
    }
    return data;
  }
}