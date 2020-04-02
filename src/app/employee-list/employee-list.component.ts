import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounce, identity, sortBy } from 'lodash';

import { listOfEmployees } from '../employees';
import { EMPLOYEE_PICTURES_DIRECTORY } from '../common-values';

/* I saw 'orderBy:orderProp' in the old Angularjs app but couldn't find
 where orderProp was defined. Since the orderyBy pipe defaults to using the
 original index of an element in its parent array IF the ordering attribute is
 not defined, I decided to stick with that behavior.
 https://docs.angularjs.org/api/ng/filter/orderBy
*/
const sortedListOfEmployees = sortBy(listOfEmployees, identity);
const SEARCH_DEBOUNCING_DELAY = 500;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.styl']
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployeeProfile[] = sortedListOfEmployees;
  searchQuery = '';
  employeePicturesPath = `${ EMPLOYEE_PICTURES_DIRECTORY }/`;
  debounceQueryChange = debounce(this.onChangeQuery, SEARCH_DEBOUNCING_DELAY);

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  onChangeQuery(rawQuery: string) {
    // Does some basic fuzzy matching.
    const query = rawQuery.toLowerCase();
    if (query.length < 3) {
      this.employees = sortedListOfEmployees;
      this.searchQuery = query;
      return;
    }

    const filteredEmployees = sortedListOfEmployees.filter(employee => {
      const { firstName, lastName, title } = employee;
      const employeeSummary = `${ firstName } ${ lastName } ${ title }`.toLowerCase();
      return employeeSummary.includes(query);
    });

    this.employees = filteredEmployees;
    this.searchQuery = query;
  }

  goTo(someRoute: string) {
    this.router.navigate([someRoute]);
  }
}
