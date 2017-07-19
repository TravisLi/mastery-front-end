import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//module
import { TitleBarModule } from './title-bar/title-bar.module';
import { FileUploadModule } from '../file-upload/file-upload.module';
import { AdminModule } from './admin/admin.module';
import { TimeslotModule } from './timeslot/timeslot.module';

//component
import { DictationComponent} from './dictation/dictation.component';
import { WordListComponent } from './dictation/word-list/word-list.component';
import { LessonComponent } from './timetable/lesson/lesson.component';
import { MainComponent } from './main.component';
import { NewsComponent } from './news/news.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TropyComponent } from './tropy/tropy.component';
import { RewardListComponent } from './tropy/reward-list/reward-list.component';
import { RedeemListComponent } from './tropy/redeem-list/redeem-list.component';
import { RewardComponent } from './reward/reward.component';
import { RedeemComponent } from './redeem/redeem.component';
import { RedeemConfirmComponent } from './redeem/redeem-confirm/redeem-confirm.component';

//routing module
import { MainRoutingModule } from './main-routing.module';
import { PrizeService } from '../prize/prize.service';
import { RedeemService } from '../redeem/redeem.service';
import { LessonService } from '../lesson/lesson.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    TitleBarModule,
    FileUploadModule,
    AdminModule,
    TimeslotModule
  ],
  declarations: [
    MainComponent,
    NewsComponent,
    DictationComponent,
    WordListComponent,
    LessonComponent,
    TimetableComponent,
    TropyComponent,
    RewardListComponent,
    RedeemListComponent,
    RewardComponent,
    RedeemComponent,
    RedeemConfirmComponent
  ],
  providers:[ PrizeService, RedeemService, LessonService ]
})
export class MainModule {}
