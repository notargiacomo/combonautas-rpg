import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.supabase = createClient(
        'https://wayuqqjsfdlilckjgtfo.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndheXVxcWpzZmRsaWxja2pndGZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1MDkyNzEsImV4cCI6MjA2MzA4NTI3MX0.-QR2FYVfI72zlhZE6n90ex58G0YT-joFtoqMVARFydw',
        {
          auth: {
            persistSession: false,  // <- Isso impede que ele tente acessar o localStorage e locks
            autoRefreshToken: false
          }
        }   
      );
    }
  }

  get client() {
    return this.supabase;
  }
}