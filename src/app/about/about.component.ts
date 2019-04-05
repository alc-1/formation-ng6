import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  template: `
    <h1 class="about view container">
      About Page
    </h1>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
