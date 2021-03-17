import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.components';
import { CourseService } from './courses.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent, HomeComponent],
  imports: [BrowserModule],
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
