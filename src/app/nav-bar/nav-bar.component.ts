import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.styl']
})
export class NavBarComponent implements OnInit {
  shouldShowBackBtn = false;

  constructor(
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.shouldShowBackBtn = window.history.length > 2 && this.router.url !== '/';
  }

  goBack() {
    const pastPages = window.history.length;
    if (pastPages > 2) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
