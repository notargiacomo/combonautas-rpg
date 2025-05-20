import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { User } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabase: SupabaseClient;
  user: User | null | undefined;

  constructor() {
    this.supabase = createClient(
      'https://wayuqqjsfdlilckjgtfo.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndheXVxcWpzZmRsaWxja2pndGZvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzUwOTI3MSwiZXhwIjoyMDYzMDg1MjcxfQ.rH2wFIzdK0eDqOvlXHBcdrIrWCnqTFy-CxWsChVA89U'
    );
  }

  async loginComGoogle() {
    await this.supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
      redirectTo: 'http://localhost:4200/'  // ou localhost em dev
  }
    });
  }

  async logout() {
    await this.supabase.auth.signOut();
  }

  async getUser(): Promise<User | null> {
    const { data } = await this.supabase.auth.getUser();
    return data.user;
  }

  onAuthStateChanged(callback: (user: User | null) => void) {
    this.supabase.auth.onAuthStateChange((_event, session) => {
      callback(session?.user ?? null);
    });
  }
}
