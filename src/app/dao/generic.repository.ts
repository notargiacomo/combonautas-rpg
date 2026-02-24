import { Inject, Injectable } from '@angular/core';
import { Entity } from '@app/model/entity.sb';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { TABLE_NAME } from './tokens';

@Injectable()
export class GenericRepository<T extends Entity> {
  private supabase: SupabaseClient;

  constructor(@Inject(TABLE_NAME) private tableName: string) {
    this.supabase = createClient(
      'https://pfrqnmfupusrhndxabwh.supabase.co',
      'sb_publishable_gYU_k3bV-8BVU4oH5dtYXw_lXbZIhv8',
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      }
    );
    this.tableName = tableName;
  }

  async getAll(): Promise<T[]> {
    const { data, error } = await this.supabase.from(this.tableName).select('*');
    if (error) throw error;
    return data as T[];
  }

  async getById(id: number): Promise<T | null> {
    const { data, error } = await this.supabase.from(this.tableName).select('*').eq('id', id).single();
    if (error) throw error;
    return data as T;
  }

  async insert(item: T): Promise<void> {
    const { error } = await this.supabase.from(this.tableName).insert([item]);
    if (error) throw error;
  }

  async update(id: number, item: Partial<T>): Promise<void> {
    const { error } = await this.supabase.from(this.tableName).update(item).eq('id', id);
    if (error) throw error;
  }

  async delete(id: number): Promise<void> {
    const { error } = await this.supabase.from(this.tableName).delete().eq('id', id);
    if (error) throw error;
  }

  get client() {
    return this.supabase;
  }
}
