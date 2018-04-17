import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.less']
})
export class Page3Component implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['/page4']);
  }

  prev() {
    this.router.navigate(['/page2']);
  }


}
