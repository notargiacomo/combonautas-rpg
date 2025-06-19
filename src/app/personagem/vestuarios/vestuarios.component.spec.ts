import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestuariosComponent } from './vestuarios.component';

describe('VestuariosComponent', () => {
  let component: VestuariosComponent;
  let fixture: ComponentFixture<VestuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VestuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VestuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
