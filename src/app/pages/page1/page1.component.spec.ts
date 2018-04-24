import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Page1Component} from './page1.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgxCarouselModule} from 'ngx-carousel';
import {RouterTestingModule} from '@angular/router/testing';

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Page1Component],
      imports: [CommonModule, RouterTestingModule, NgxCarouselModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
