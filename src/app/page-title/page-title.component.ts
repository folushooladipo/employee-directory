import { Component, Input, OnInit } from '@angular/core';
// TODO: use .alert-secondary, .alert-error etc for messages in the app.
// TODO: style the profile, manage colleagues and 404 pages.

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.styl']
})
export class PageTitleComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
