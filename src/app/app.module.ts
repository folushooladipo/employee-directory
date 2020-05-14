import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeManagedColleaguesListComponent } from './employee-managed-colleagues-list/employee-managed-colleagues-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import EmployeeProfileResolver from './resolvers/employee-profile.resolver';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { BookmarkedEmployeesListComponent } from './bookmarked-employees-list/bookmarked-employees-list.component';
import { BookmarkEmployeeBtnComponent } from './bookmark-employee-btn/bookmark-employee-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeProfileComponent,
    EmployeeManagedColleaguesListComponent,
    PageNotFoundComponent,
    PageTitleComponent,
    NavBarComponent,
    FooterComponent,
    BookmarkedEmployeesListComponent,
    BookmarkEmployeeBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [
    EmployeeProfileResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
