import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragaoCreateComponent } from './dragao-create.component';

describe('DragaoCreateComponent', () => {
  let component: DragaoCreateComponent;
  let fixture: ComponentFixture<DragaoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragaoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
