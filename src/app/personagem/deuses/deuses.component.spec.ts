import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeusesComponent } from './deuses.component';

describe('DeusesComponent', () => {
  let component: DeusesComponent;
  let fixture: ComponentFixture<DeusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeusesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
