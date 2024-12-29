import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { NgxLoaderIndicatorDirective } from 'ngx-loader-indicator';
import { LoadingIndicatorComponent } from './conf/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatMenuModule, MatButtonModule, MatCardModule, MatDividerModule, LoadingIndicatorComponent],
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