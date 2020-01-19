import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAndPageTitleComponent } from './navbar-and-page-title.component';

describe('NavbarAndPageTitleComponent', () => {
  let component: NavbarAndPageTitleComponent;
  let fixture: ComponentFixture<NavbarAndPageTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarAndPageTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAndPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
