import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentosComponent } from './alimentos.component';

describe('AlimentosComponent', () => {
  let component: AlimentosComponent;
  let fixture: ComponentFixture<AlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
