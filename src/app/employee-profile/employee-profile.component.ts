import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { listOfEmployees } from '../employees';
import { findEmployeeById } from '../util';
import { EMPLOYEE_PICTURES_DIRECTORY } from '../common-values';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.styl']
})
export class EmployeeProfileComponent implements OnInit {
  employeeId: number;
  employee: IEmployeeProfile | null;
  employeePicturesPath = `${ EMPLOYEE_PICTURES_DIRECTORY }/`;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

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
