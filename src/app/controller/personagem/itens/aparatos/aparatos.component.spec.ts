import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparatosComponent } from './aparatos.component';

describe('AparatosComponent', () => {
  let component: AparatosComponent;
  let fixture: ComponentFixture<AparatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AparatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AparatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
