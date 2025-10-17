import { Inject, Injectable } from '@angular/core';
import { Entity } from '@app/model/supamodel/entity.sb';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { TABLE_NAME } from './tokens';

@Injectable()
export class GenericRepository<T extends Entity> {
  private supabase: SupabaseClient;

  constructor(@Inject(TABLE_NAME) private tableName: string) {
    this.supabase = createClient(
      'https://wayuqqjsfdlilckjgtfo.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndheXVxcWpzZmRsaWxja2pndGZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1MDkyNzEsImV4cCI6MjA2MzA4NTI3MX0.-QR2FYVfI72zlhZE6n90ex58G0YT-joFtoqMVARFydw',
      {
        auth: {
          persistSession: false, // <- Isso impede que ele tente acessar o localStorage e locks
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
    const { data, error } = await this.supabase
      .from(this.tableName)
      .select('*')
      .eq('id', id)
      .single();
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
