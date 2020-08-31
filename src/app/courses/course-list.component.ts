import {Component, OnInit} from '@angular/core'
import {Course} from './course'
import { CourseService } from './course.service';

@Component({
    //selector: 'app-course-list', retirado, a partir do momento em que as rotas foram implementadas
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{
    _courses: Course[] = [];
    _filterBy: string;
    filteredCourses: Course[] = [];
    constructor(private courseService: CourseService){

    }
    ngOnInit(): void {
      this.retrieveAll();
    }
    retrieveAll(): void{
      this.courseService.retriveAll().subscribe({
        next: courses => {
          this._courses = courses;
          this.filteredCourses = this._courses;
        },
        error: err => console.log('Error', err)

      });
    }
    deleteById(courseId: number) : void{
      this.courseService.deleteById(courseId).subscribe({
        next: () => {
          console.log('Deletado com sucesso');
          this.retrieveAll();
        } ,
        error: err => console.log('Error', err)
      });
    }
    set filter(value: string){
      this._filterBy = value;
      this.filteredCourses = this._courses.filter((course: Course) =>
      course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > - 1);
    }
    get filter (){
      return this._filterBy;
    }
}
