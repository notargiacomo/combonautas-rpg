import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PericiasComponent } from './pericias.component';

describe('PericiasComponent', () => {
  let component: PericiasComponent;
  let fixture: ComponentFixture<PericiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PericiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PericiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
