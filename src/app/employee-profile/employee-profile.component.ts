import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { listOfEmployees } from '../employees';
import { EMPLOYEE_PICTURES_DIRECTORY } from '../common-values';
import { findEmployeeById } from '../util';

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
    this.employee = this.route.snapshot.data.resolvedEmployeeProfile;
    this.employeeId = this.employee ? this.employee.id : -1;

    this.route.paramMap.subscribe(params => {
      this.employeeId = Number(params.get('employeeId'));
      this.employee = findEmployeeById(this.employeeId, listOfEmployees);
    });
  }

  goTo(someRoute: string) {
    this.router.navigate([someRoute]);
  }
}
