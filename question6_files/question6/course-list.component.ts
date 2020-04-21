import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent  {
  courses: any[];

  constructor(private _router:Router) {
    this.courses = [
      {id : 1 , name: 'Spring'},
      {id : 2,  name: 'Hibernate'},
      {id : 3 , name: 'Junit'},
      {id : 4 , name: 'HTML'},
      {id : 5 , name: 'CSS'},
    ]
   }

   onClick(courseId : number){
     this._router.navigate(['/courses',courseId])
}

}
