import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { listOfEmployees } from '../employees';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.styl']
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployeeProfile[] = listOfEmployees;

  // TODO: for searching, should I implement fuzzy matching using a pre-JSON-stringified list of each employee's profile?
  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  goTo(someRoute: string) {
    this.router.navigate([someRoute]);
  }
}
