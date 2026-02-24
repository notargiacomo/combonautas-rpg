import { NgIf, isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingIndicatorComponent } from './conf/loading-indicator/loading-indicator.component';
import { Acesso } from './dao/acessos.dao';

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
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'combonautas';

  readonly dialog = inject(MatDialog);

  form!: FormGroup;

  totalAcessos = 0;

  constructor(
    private readonly router: Router,
    private fb: FormBuilder,
    private acessoDao: Acesso,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.form = this.fb.group({
      login: [''],
      senha: [''],
      mostrarCamposLogin: [false],
      logado: [false],
    });
  }

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      await this.controlarContador();
    }
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      const login = sessionStorage.getItem('login') || '';
      const logado = sessionStorage.getItem('logado') === 'true';
      const mostrarCamposLogin = sessionStorage.getItem('mostrarCamposLogin') !== 'false';

      this.form = this.fb.group({
        login: [login],
        senha: [''],
        mostrarCamposLogin: [mostrarCamposLogin],
        logado: [logado],
      });
    }
  }

  private async controlarContador() {
    try {
      const jaContou = sessionStorage.getItem('contador_incrementado');

      if (!jaContou) {
        this.totalAcessos = await this.acessoDao.atualizar();

        sessionStorage.setItem('contador_incrementado', 'true');
      } else {
        this.totalAcessos = await this.acessoDao.buscar();
      }
    } catch (erro) {
      console.error('Erro ao controlar contador:', erro);
    }
  }

  logar() {
    const login = this.form.value.login;
    const senha = this.form.value.senha;

    if (this.form.value.mostrarCamposLogin) {
      if (login === 'admin' && senha === 'admin') {
        this.form.patchValue({
          logado: true,
          mostrarCamposLogin: false,
        });

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
    this.form.patchValue({
      login: '',
      senha: '',
      logado: false,
      mostrarCamposLogin: true,
    });

    sessionStorage.removeItem('login');
    sessionStorage.removeItem('logado');
    sessionStorage.removeItem('mostrarCamposLogin');
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
