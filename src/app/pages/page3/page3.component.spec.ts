import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3Component } from './page3.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonModule} from '@angular/common';
import {NgxCarouselModule} from 'ngx-carousel';

describe('Page3Component', () => {
  let component: Page3Component;
  let fixture: ComponentFixture<Page3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page3Component ],
      imports: [CommonModule, RouterTestingModule, NgxCarouselModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
