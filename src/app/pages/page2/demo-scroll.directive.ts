import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appDemoScroll]'
})
export class DemoScrollDirective implements OnChanges, OnInit {

  constructor(private el: ElementRef) {
  }

  @Input('appDemoScroll') activate: string;

  ngOnInit() {
    // this.startAnimateScroll();
  }

  private startAnimateScroll() {
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        this.el.nativeElement.scrollLeft = i;
      }, i * 5);
    }
    setTimeout(() => {
      for (let i = 50; i > 0; i--) {
        setTimeout(() => {
          this.el.nativeElement.scrollLeft = i;
        }, (50 - i) * 2);
      }
    }, 250);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.activate === 'true') {
      setTimeout(() => {
        this.startAnimateScroll();
      }, 2000);
    }
  }
}
