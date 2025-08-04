import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosItensComponent } from './todos-itens.component';

describe('TodosItensComponent', () => {
  let component: TodosItensComponent;
  let fixture: ComponentFixture<TodosItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosItensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
