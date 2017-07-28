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
  @Output() aplyEvt = new EventEmitter<Lesson>();

  constructor() {
  }

  public aplyMkup(l:Lesson):void{
    console.log("aplyMkup");
    this.aplyEvt.emit(l);
  }

}
