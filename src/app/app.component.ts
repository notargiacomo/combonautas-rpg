import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatMenuModule, MatButtonModule, MatCardModule, MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'combonautas';

  constructor(private readonly router: Router){}

  ngOnInit() {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}