import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lesson } from '../../../lesson/lesson';
import { AuthService } from '../../../auth/auth.service';
import { LessonService} from '../../../lesson/lesson.service';

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
})
export class LessonComponent {

  @Input() lesson:Lesson;
  @Output() chkEvt = new EventEmitter<Lesson>();

  constructor(public authService: AuthService, public lessonService: LessonService) {
  }

  public chkMkupLson():void{
    console.log("chkmkupLesson");
    this.chkEvt.emit(this.lesson);
  }

}
