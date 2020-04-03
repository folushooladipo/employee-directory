import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { listOfEmployees } from '../employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor() { }

  getEmployeeById(id: number): Observable<IEmployeeProfile | null> {
    const targetEmployee = listOfEmployees.find(employee =>
      employee.id === id
    );
    return of(targetEmployee || null);
  }
}
