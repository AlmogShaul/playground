import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.less']
})
export class Page1Component implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['/page2']);
  }

}
