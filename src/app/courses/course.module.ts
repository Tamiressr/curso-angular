import { StarModule } from './../shared/component/star/star.module';
import { ReplacePipe } from '../shared/component/pipe/replace.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AppPipeModule } from '../shared/component/pipe/app-pipe.module';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,

  ],imports:[
    FormsModule,
    CommonModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path:'courses',component: CourseListComponent

      },
      {
        path:'courses/info/:id', component:CourseInfoComponent
      }
    ])
  ]

})
export class CourseModule{

}
