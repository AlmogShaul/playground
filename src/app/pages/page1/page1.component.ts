import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.less']
})
export class Page1Component implements OnInit {


  ngOnInit(): void {
  }

  constructor(private router: Router) {
  }

  next() {
    this.router.navigate(['/page2']);
  }

}
