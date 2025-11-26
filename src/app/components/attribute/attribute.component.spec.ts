import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeComponent } from './attribute.component';

describe('AttributeComponent', () => {
  let component: AttributeComponent;
  let fixture: ComponentFixture<AttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
