import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmeacasComponent } from './ameacas.component';

describe('AmeacasComponent', () => {
  let component: AmeacasComponent;
  let fixture: ComponentFixture<AmeacasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmeacasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmeacasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
