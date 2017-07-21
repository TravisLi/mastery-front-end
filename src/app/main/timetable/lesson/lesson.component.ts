import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from '../../../lesson/lesson';
import { AuthService } from '../../../auth/auth.service';
import { LessonService} from '../../../lesson/lesson.service';

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
})
export class LessonComponent {

  @Input() lesson:Lesson;

  constructor(public authService: AuthService, public lessonService: LessonService) {
  }

  public getMkupLson(){
    this.lessonService.getMkupLson(this.lesson).then(lessons=>{
      console.log(lessons);
    })
  }

}
