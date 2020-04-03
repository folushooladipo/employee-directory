import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { EmployeesService } from '../services/employees.service';

@Injectable()
export default class EmployeeProfileResolver implements Resolve<IEmployeeProfile> {
    constructor(private employeesService: EmployeesService) {}

    resolve(route: ActivatedRouteSnapshot) {
        const employeeId = Number(route.paramMap.get('employeeId'));
        return this.employeesService.getEmployeeById(employeeId);
    }
}
