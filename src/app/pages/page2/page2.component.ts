import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.less']
})
export class Page2Component implements OnInit {

  activate = true;

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  next() {
    this.router.navigate(['/page3']);
  }


  prev() {
    this.router.navigate(['/page1']);
  }

}
