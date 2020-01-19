import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import {  EmployeeManagedColleaguesListComponent } from './employee-managed-colleagues-list/employee-managed-colleagues-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employees/:employeeId', component: EmployeeProfileComponent },
  { path: 'employees/:employeeId/reports', component: EmployeeManagedColleaguesListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
