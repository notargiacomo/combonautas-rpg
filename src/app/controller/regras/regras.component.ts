import { ChangeDetectorRef, Component } from '@angular/core';
import { RegraService } from '@app/service/regra.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardSearchComponent } from '@app/components/card-search/card-search.component';

@Component({
  selector: 'app-regras',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatGridListModule,
    CardSearchComponent,
  ],
  templateUrl: './regras.component.html',
  styleUrl: './regras.component.scss',
})
export class RegrasComponent {
  constructor(readonly regraService: RegraService) {}
}
