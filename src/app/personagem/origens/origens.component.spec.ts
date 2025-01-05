import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigensComponent } from './origens.component';

describe('OrigensComponent', () => {
  let component: OrigensComponent;
  let fixture: ComponentFixture<OrigensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrigensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrigensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
