import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkEmployeeBtnComponent } from './bookmark-employee-btn.component';

describe('BookmarkEmployeeBtnComponent', () => {
  let component: BookmarkEmployeeBtnComponent;
  let fixture: ComponentFixture<BookmarkEmployeeBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkEmployeeBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkEmployeeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
