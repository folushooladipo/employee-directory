import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { resetBookmarkedEmployees } from '../actions/bookmarkedEmployeesActions';

@Component({
  selector: 'app-bookmarked-employees-list',
  templateUrl: './bookmarked-employees-list.component.html',
  styleUrls: ['./bookmarked-employees-list.component.styl']
})
export class BookmarkedEmployeesListComponent implements OnInit, OnDestroy {
  listOfBookmarkedEmployees: BriefEmployee[] = [];
  subForBookmarkedEmployees: Subscription;
  hasReceivedOneSubscriptionUpdate = false;

  constructor(
    private store: Store<IRootState>
  ) {}

  ngOnInit() {
    this.subForBookmarkedEmployees = this.store.subscribe(rootState => {
      const { bookmarkedEmployees } = rootState;
      const listOfIds = Object.keys(bookmarkedEmployees);
      this.listOfBookmarkedEmployees = listOfIds.map(id => ({
        id,
        name: bookmarkedEmployees[id]
      }));

      if (!this.hasReceivedOneSubscriptionUpdate) {
        this.hasReceivedOneSubscriptionUpdate = true;
      }
    });
  }

  ngOnDestroy() {
    this.subForBookmarkedEmployees.unsubscribe();
  }

  resetBookmarks() {
    this.store.dispatch(resetBookmarkedEmployees());
  }
}
