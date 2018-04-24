import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2Component } from './page2.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonModule} from '@angular/common';
import {NgxCarouselModule} from 'ngx-carousel';

describe('Page2Component', () => {
  let component: Page2Component;
  let fixture: ComponentFixture<Page2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2Component ],
      imports: [CommonModule, RouterTestingModule, NgxCarouselModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
