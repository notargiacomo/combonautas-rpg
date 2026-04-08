import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliaresComponent } from './familiares.component';

describe('FamiliaresComponent', () => {
  let component: FamiliaresComponent;
  let fixture: ComponentFixture<FamiliaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamiliaresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
