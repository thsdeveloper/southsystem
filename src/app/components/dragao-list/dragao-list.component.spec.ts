import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragaoListComponent } from './dragao-list.component';

describe('DragaoListComponent', () => {
  let component: DragaoListComponent;
  let fixture: ComponentFixture<DragaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragaoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
