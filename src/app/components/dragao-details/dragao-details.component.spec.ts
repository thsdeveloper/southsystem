import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragaoDetailsComponent } from './dragao-details.component';

describe('DragaoDetailsComponent', () => {
  let component: DragaoDetailsComponent;
  let fixture: ComponentFixture<DragaoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragaoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragaoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
