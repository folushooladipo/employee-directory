import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { findEmployeeById, findManagedColleagues } from '../util';
import { listOfEmployees } from '../employees';
import { EMPLOYEE_PICTURES_DIRECTORY } from '../common-values';

@Component({
  selector: 'app-employee-managed-colleagues-list',
  templateUrl: './employee-managed-colleagues-list.component.html',
  styleUrls: ['./employee-managed-colleagues-list.component.styl']
})
export class EmployeeManagedColleaguesListComponent implements OnInit {
  hasManagedColleagues = false;
  managedColleagues: IEmployeeProfile[] = [];
  employee: IEmployeeProfile;
  employeePicturesPath = `${ EMPLOYEE_PICTURES_DIRECTORY }/`;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const employeeId = Number(params.get('employeeId'));
      this.employee = findEmployeeById(employeeId, listOfEmployees);
      if (this.employee) {
        this.managedColleagues = findManagedColleagues(employeeId, listOfEmployees);
        this.hasManagedColleagues = this.managedColleagues.length > 0;
      }
    });
  }
}
