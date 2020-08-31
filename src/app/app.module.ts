import { CoreModule } from './core/app.core';
import { AppPipeModule } from './shared/pipe/app-pipe-module';
import { CourseModule } from './courses/course.module';
import { Error404Component } from './error404/error-404.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import {CourseService} from './courses/course.service';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    CourseModule,
    BrowserModule,
    AppPipeModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
