import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    this.employee = this.route.snapshot.data.resolvedEmployeeProfile;
    this.employeeId = this.employee ? this.employee.id : -1;
  }

  goTo(someRoute: string) {
    this.router.navigate([someRoute]);
  }
}
