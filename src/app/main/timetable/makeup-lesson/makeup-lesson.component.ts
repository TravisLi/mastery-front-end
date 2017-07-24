import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lesson } from '../../../lesson/lesson';
import { AuthService } from '../../../auth/auth.service';
import { LessonService} from '../../../lesson/lesson.service';

@Component({
  selector: 'makeup-lesson',
  templateUrl: './makeup-lesson.component.html',
})
export class MakeupLessonComponent {

  lessons:Lesson[];

  constructor(public authService: AuthService, public lessonService: LessonService) {
  }

  public chkMkupLson(l:Lesson){
    this.lessons=[];

    this.lessonService.getMkupLson(l,this.authService.user.name).then(lessons=>{
       console.log(lessons);
       this.lessons = lessons;
    });
  }

}
