import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
@Component({
  templateUrl : './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
  course: Course;
  constructor(private activateroute: ActivatedRoute, private courseService: CourseService){

  }
  ngOnInit(): void {
    //o mais é para converter para number
    this.courseService.retrieveById(+this.activateroute.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error', err)

    });
  }
  save():void{
    this.courseService.save(this.course).subscribe({
        next: course => console.log('Saved with success', course),
        error: err => console.log('err', err)

    });
  }
}
