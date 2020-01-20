import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagedColleaguesListComponent } from './employee-managed-colleagues-list.component';

describe('EmployeeManagedColleaguesListComponent', () => {
  let component: EmployeeManagedColleaguesListComponent;
  let fixture: ComponentFixture<EmployeeManagedColleaguesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeManagedColleaguesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeManagedColleaguesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
