import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Question2Component} from './question2/question2.component';
import { CourseListComponent } from './question6/course-list.component'
import { CourseDetailsComponent } from './question6/course-details.component'

const appRoutes: Routes = [
  {path : 'courses/:id' , component: CourseDetailsComponent}
];
@NgModule({
  declarations: [
    AppComponent, 
    Question2Component, 
    CourseListComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
