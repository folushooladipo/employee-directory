import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-and-page-title',
  templateUrl: './navbar-and-page-title.component.html',
  styleUrls: ['./navbar-and-page-title.component.styl']
})
export class NavbarAndPageTitleComponent implements OnInit {
  @Input() pageTitle: string;

  constructor(
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {}

  goBack() {
    const pastPages = window.history.length;
    if (pastPages > 2) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
