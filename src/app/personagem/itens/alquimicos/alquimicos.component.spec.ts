import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquimicosComponent } from './alquimicos.component';

describe('AlquimicosComponent', () => {
  let component: AlquimicosComponent;
  let fixture: ComponentFixture<AlquimicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlquimicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlquimicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
