import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { Personagem } from '../model/personagem';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  personagens: Personagem[] = [];
  personagem: Personagem = new Personagem();

  constructor(private readonly router: Router) {}

  ngOnInit() {
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
