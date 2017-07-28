import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Lesson } from '../../../lesson/lesson';
import { Student } from '../../../student/student';

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
})
export class LessonComponent {

  @Input() lesson:Lesson;
  @Output() chkEvt = new EventEmitter<Lesson>();

  constructor(private authService:AuthService) {
  }

  public isMkup():boolean{
    for(let s of this.lesson.students){
      if(s.id == this.authService.user.id){
        return s.isMkup;
      }
    }
  }

  public chkMkupLson():void{
    console.log("chkmkupLesson");
    this.chkEvt.emit(this.lesson);
  }

}
