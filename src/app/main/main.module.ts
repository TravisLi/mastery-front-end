import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//module
import { TitleBarModule } from './title-bar/title-bar.module'

//component
import { DictationComponent} from './dictation/dictation.component';
import { WordListComponent } from './dictation/word-list/word-list.component';
import { LessonComponent } from './timetable/lesson/lesson.component';
import { MainComponent } from './main.component';
import { NewsComponent } from './news/news.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TropyComponent } from './tropy/tropy.component';
import { RewardComponent } from './tropy/reward/reward.component';
import { RedeemComponent } from './tropy/redeem/redeem.component';

//routing module
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    TitleBarModule
  ],
  declarations: [
    MainComponent,
    NewsComponent,
    DictationComponent,
    WordListComponent,
    LessonComponent,
    TimetableComponent,
    TropyComponent,
    RewardComponent,
    RedeemComponent
  ],
})
export class MainModule {}
