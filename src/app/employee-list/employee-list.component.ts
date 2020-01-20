import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { debounce, identity, sortBy } from 'lodash';

import { listOfEmployees } from '../employees';
import { getStringifiedListOfEmployees } from '../util';

/* I saw 'orderBy:orderProp' in the old Angularjs app but couldn't find
 where orderProp was defined. Since the orderyBy pipe defaults to using the
 original index of an element in its parent array IF the ordering attribute is
 not defined, I decided to stick with that behavior.
 https://docs.angularjs.org/api/ng/filter/orderBy
*/
const sortedListOfEmployees = sortBy(listOfEmployees, identity);
const stringifiedListOfEmployees = getStringifiedListOfEmployees(sortedListOfEmployees);
const SEARCH_DEBOUNCING_DELAY = 500;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.styl']
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployeeProfile[] = sortedListOfEmployees;
  searchQuery = '';
  debounceQueryChange = debounce(this.onChangeQuery, SEARCH_DEBOUNCING_DELAY);

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  onChangeQuery(query: string) {
    // Uses fuzzy matching.
    const filteredEmployees = [];
    stringifiedListOfEmployees.forEach((employee, index) => {
      if (employee.includes(query.toLowerCase())) {
        filteredEmployees.push(sortedListOfEmployees[index]);
      }
    });

    this.employees = filteredEmployees;
    this.searchQuery = query;
  }

  goTo(someRoute: string) {
    this.router.navigate([someRoute]);
  }
}
