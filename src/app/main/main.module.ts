import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//component
import { MainComponent } from './main.component';
import { NewsComponent } from './news/news.component';
import { DictationModule} from './dictation/dictation.module'
import { RewardComponent } from './reward/reward.component';
import { TimetableComponent } from './timetable/timetable.component';
import { LessonComponent } from './timetable/lesson/lesson.component';
//routing module
import { MainRoutingModule } from './main-routing.module';
import { TitleBarModule } from './title-bar/title-bar.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    DictationModule,
    TitleBarModule
  ],
  declarations: [
    MainComponent,
    NewsComponent,
    RewardComponent,
    TimetableComponent,
    LessonComponent,
  ],
})
export class MainModule {}
