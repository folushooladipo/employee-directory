import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import {  EmployeeManagedColleaguesListComponent } from './employee-managed-colleagues-list/employee-managed-colleagues-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import EmployeeProfileResolver from './resolvers/employee-profile.resolver';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  {
    path: '',
    component: FooterComponent,
    outlet: 'footer'
  },
  {
    path: '',
    component: NavBarComponent,
    outlet: 'nav-bar'
  },
  {
    path: 'employees/:employeeId',
    component: EmployeeProfileComponent,
    resolve: { resolvedEmployeeProfile: EmployeeProfileResolver }
  },
  // TODO: Use a data resolver for the reports page too.
  { path: 'employees/:employeeId/reports', component: EmployeeManagedColleaguesListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
