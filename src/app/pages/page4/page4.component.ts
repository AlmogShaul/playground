import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.less']
})
export class Page4Component implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['/page4']);
  }

  prev() {
    this.router.navigate(['/page3']);
  }

}
