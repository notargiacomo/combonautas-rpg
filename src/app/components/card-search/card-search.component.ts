import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCard } from '@angular/material/card';

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
    });

    this.consult();
  }

  consult() {
    let filter = this.form.value;
    if (this.service && this.service.consult) {
      this.service.consult(filter, this.searchColumn).subscribe((res: any[]) => {
        this.objects = res;
        this.records_number = res.length;
      });
    }
  }
}
