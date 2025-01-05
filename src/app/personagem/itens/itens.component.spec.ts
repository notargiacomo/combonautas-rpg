import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensComponent } from './itens.component';

describe('ItensComponent', () => {
  let component: ItensComponent;
  let fixture: ComponentFixture<ItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
