import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCard } from '@angular/material/card';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-card-search',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridList,
    MatGridTile,
    NgIf,
    NgFor,
    ReactiveFormsModule,
    MatCard,
    NgTemplateOutlet,
    MatAutocompleteModule,
    MatChipsModule,
    MatIcon,
  ],
  templateUrl: './card-search.component.html',
  styleUrl: './card-search.component.scss',
})
export class CardSearchComponent {
  @Input() name!: string;
  @Input() service: any;
  @Input() searchColumn: string[] = [];
  @Input() colsGrid: number = 3;
  @Input() rowHeight: number = 600;
  @Input() gutterSizeGrid: string = '10px';
  @Input() suggestions: string[] = [];

  separatorKeysCodes: number[] = [ENTER, COMMA];

  sugestoes = signal<string[]>([]);
  isSelecting = false; // 🔥 controle do autocomplete

  readonly announcer = inject(LiveAnnouncer);

  @ContentChild(TemplateRef) template!: TemplateRef<any>;

  isMobile = false;
  objects: any[] = [];
  form!: FormGroup;
  records_number = 0;

  constructor(
    private fb: FormBuilder,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [],
      corrente: [],
    });

    this.consult();
  }

  filtered(): string[] {
    const value = this.form.get('corrente')?.value?.toLowerCase() || '';

    return this.suggestions.filter(s => s.toLowerCase().includes(value) && !this.sugestoes().includes(s));
  }

  consult() {
    const resultado = this.sugestoes().join(';') ? this.sugestoes().join(';') : '';

    if (this.service?.consult) {
      this.service.consult(resultado).subscribe((res: any[]) => {
        this.objects = res.sort((a, b) => a.nome.localeCompare(b.nome));
        this.records_number = this.objects.length;
      });
    }
  }

  add(event: MatChipInputEvent): void {
    // 🚫 evita conflito com autocomplete
    if (this.isSelecting) {
      this.isSelecting = false;
      return;
    }

    const value = (event.value || '').trim();

    const existe = this.sugestoes().some(s => s.toLowerCase() === value.toLowerCase());

    if (value && !existe) {
      this.sugestoes.update(s => [...s, value]);
    }

    if (event.input) {
      event.input.value = '';
    }

    this.form.get('corrente')?.setValue('');
    this.consult();
  }

  remove(sugestao: string): void {
    this.sugestoes.update(s => {
      const index = s.indexOf(sugestao);
      if (index < 0) return s;

      const updated = [...s];
      updated.splice(index, 1);

      this.announcer.announce(`Removed ${sugestao}`);
      return updated;
    });

    this.consult();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.isSelecting = true;

    const value = event.option.value;

    const existe = this.sugestoes().some(s => s.toLowerCase() === value.toLowerCase());

    if (!existe) {
      this.sugestoes.update(s => [...s, value]);
    }

    this.form.get('corrente')?.setValue('');
    this.consult();
  }
}
