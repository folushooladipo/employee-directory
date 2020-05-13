import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedEmployeesListComponent } from './bookmarked-employees-list.component';

describe('BookmarkedEmployeesListComponent', () => {
  let component: BookmarkedEmployeesListComponent;
  let fixture: ComponentFixture<BookmarkedEmployeesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkedEmployeesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkedEmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
