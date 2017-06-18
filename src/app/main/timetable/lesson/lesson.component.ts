import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from './lesson';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
})
export class LessonComponent {

  @Input() lesson:Lesson;

  constructor(public authService: AuthService) {
  }

}
