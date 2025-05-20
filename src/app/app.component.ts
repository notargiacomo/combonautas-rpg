import { NgIf } from '@angular/common';
import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterOutlet } from '@angular/router';
import { User } from '@supabase/supabase-js';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingIndicatorComponent } from './conf/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    LoadingIndicatorComponent,
    FooterComponent,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'combonautas';
  user: User | null = null;
  readonly dialog = inject(MatDialog);
  form!: FormGroup;

  constructor(private readonly router: Router, private fb: FormBuilder, @Inject(PLATFORM_ID) private platformId: Object) {
      this.form = this.fb.group({
        login: [''],
        senha: [''], // nunca recupere senha da sessão
        mostrarCamposLogin: [false],
        logado: [false],
      });
  }

  ngAfterViewInit(){
    if (typeof window !== 'undefined') {
      const login = sessionStorage.getItem('login') || '';
      const logado = sessionStorage.getItem('logado') === 'true';
      const mostrarCamposLogin =
        sessionStorage.getItem('mostrarCamposLogin') !== 'false';
  
        this.form = this.fb.group({
          login: [login],
          senha: [''], // nunca recupere senha da sessão
          mostrarCamposLogin: [mostrarCamposLogin],
          logado: [logado],
        });
    }
  }

  ngOnInit() {

  }

  logar() {
    const login = this.form.value.login;
    const senha = this.form.value.senha;
    if (this.form.value.mostrarCamposLogin) {
      if (
        this.form.value.login === 'admin' &&
        this.form.value.senha === 'admin'
      ) {
        this.form.patchValue({
          logado: true,
          mostrarCamposLogin: false,
        });

        // Salvar na sessionStorage
        sessionStorage.setItem('login', login);
        sessionStorage.setItem('logado', 'true');
        sessionStorage.setItem('mostrarCamposLogin', 'false');
      } else {
        alert('Login inválido');
      }
    } else {
      this.form.get('mostrarCamposLogin')?.setValue(true);
    }
  }

  deslogar() {
    this.form.get('logado')?.setValue(false);
    this.form.patchValue({
      login: '',
      senha: '',
      logado: false,
      mostrarCamposLogin: true,
    });

    sessionStorage.clear();
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
