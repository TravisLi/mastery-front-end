import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//component
import { MainComponent } from './main.component';
import { DictationComponent } from './dictation/dictation.component';
import { NewsComponent } from './news/news.component';
import { RewardComponent } from './reward/reward.component';
import { TimetableComponent } from './timetable/timetable.component';

import { AuthGuard } from '../auth/auth-guard.service';
import { AdminAuthGuard } from '../auth/admin-auth-guard.service';

const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'dictation', component: DictationComponent},
          { path: 'news', component: NewsComponent },
          { path: 'reward', component: RewardComponent },
          { path: 'timetable', component: TimetableComponent }
        ]
      }
    ]
  }];

@NgModule({
  imports: [ RouterModule.forChild(mainRoutes) ],
  exports: [ RouterModule ]
})

export class MainRoutingModule {}
