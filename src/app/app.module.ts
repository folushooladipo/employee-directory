import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeManagedColleaguesListComponent } from './employee-managed-colleagues-list/employee-managed-colleagues-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarAndPageTitleComponent } from './navbar-and-page-title/navbar-and-page-title.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeProfileComponent,
    EmployeeManagedColleaguesListComponent,
    PageNotFoundComponent,
    NavbarAndPageTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
