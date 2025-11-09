import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoDesafiosComponent } from './calculo-desafios.component';

describe('CalculoDesafiosComponent', () => {
  let component: CalculoDesafiosComponent;
  let fixture: ComponentFixture<CalculoDesafiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculoDesafiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoDesafiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
