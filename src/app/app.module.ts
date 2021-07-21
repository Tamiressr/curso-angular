import { CourseInfoComponent } from './courses/course-info.component';
import { Error404Component } from './error-404/error-404.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'courses',component: CourseListComponent

      },
      {
        path:'courses/info/:id', component:CourseInfoComponent
      },

      {
        path:'', redirectTo:'courses',pathMatch:'full'

      },
     {
      path:'**', component:Error404Component
     }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
