import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesModule} from './pages/pages.module';
import {Page4Component} from './pages/page4/page4.component';
import {Page3Component} from './pages/page3/page3.component';
import {Page2Component} from './pages/page2/page2.component';
import {Page1Component} from './pages/page1/page1.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'page4', component: Page4Component }
];

@NgModule({
  imports: [
    PagesModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
