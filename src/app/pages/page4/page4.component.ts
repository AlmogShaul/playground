import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.less']
})
export class Page4Component implements OnInit {


  @Input() public carouselOne: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      custom: 'banner'
    };
  }


  next() {
    this.router.navigate(['/page4']);
  }

  prev() {
    this.router.navigate(['/page3']);
  }

}
