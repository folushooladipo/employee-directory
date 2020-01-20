import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.styl']
})
export class NavBarComponent implements OnInit {
  shouldShowBackBtn = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.shouldShowBackBtn = window.history.length > 2 && this.router.url !== '/';
  }
}
