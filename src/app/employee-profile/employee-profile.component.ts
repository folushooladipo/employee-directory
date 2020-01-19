import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { listOfEmployees } from '../employees';
import { findEmployeeById } from '../util';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.styl']
})
export class EmployeeProfileComponent implements OnInit {
  employeeId: number;
  employee: IEmployeeProfile | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.employeeId = Number(params.get('employeeId'));
      this.employee = findEmployeeById(this.employeeId, listOfEmployees);
    });
  }

  goTo(someRoute: string) {
    this.router.navigate([someRoute]);
  }
}
