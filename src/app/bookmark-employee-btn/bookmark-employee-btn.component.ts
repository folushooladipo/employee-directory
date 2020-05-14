import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { listOfEmployees } from '../employees';
import { bookmarkEmployee, unbookmarkEmployee } from '../actions/bookmarkedEmployeesActions';

@Component({
  selector: 'app-bookmark-employee-btn',
  templateUrl: './bookmark-employee-btn.component.html',
  styleUrls: ['./bookmark-employee-btn.component.styl']
})
export class BookmarkEmployeeBtnComponent implements OnInit, OnDestroy {
  @Input() employeeId: string;
  bookmarkedEmployees: IBookmarkedEmployeesState = {};
  subscriptionForStore: Subscription;


  constructor(
    private store: Store<IRootState>
  ) {}

  ngOnInit() {
    this.subscriptionForStore = this.store.subscribe(rootState => {
      this.bookmarkedEmployees = rootState.bookmarkedEmployees;
    });
  }

  ngOnDestroy() {
    this.subscriptionForStore.unsubscribe();
  }

  addBookmark() {
    const employee: IEmployeeProfile = listOfEmployees.find(someEmployee =>
      someEmployee.id.toString() === this.employeeId
    );
    const { id, firstName, lastName, title, picture } = employee;
    const payload: BriefEmployee = { id, firstName, lastName, title, picture };
    this.store.dispatch(bookmarkEmployee({ payload }));
  }

  removeBookmark() {
    const payload = { id: Number(this.employeeId) };
    this.store.dispatch(unbookmarkEmployee({ payload }));
  }
}
