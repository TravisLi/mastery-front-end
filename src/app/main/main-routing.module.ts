import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//module
import { AdminModule } from './admin/admin.module';

//component
import { MainComponent } from './main.component';
import { DictationComponent } from './dictation/dictation.component';
import { NewsComponent } from './news/news.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TropyComponent } from './tropy/tropy.component';


import { RedeemComponent} from './redeem/redeem.component';
import { RewardComponent } from './reward/reward.component';

import { AuthGuard } from '../auth/auth-guard.service';
import { AdminAuthGuard } from '../auth/admin-auth-guard.service';
import { TeacherAuthGuard } from '../auth/teacher-auth-guard.service';
import { CanDeactivateGuard } from '../can-deactivate-guard.service';

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
          {
            path: 'admin',
            loadChildren: './admin/admin.module#AdminModule'
          },
          { path: 'dictation', component: DictationComponent, canDeactivate:[CanDeactivateGuard]},
          { path: 'news', component: NewsComponent },
          { path: 'tropy', component: TropyComponent },
          { path: 'timetable', component: TimetableComponent },
          { path: 'redeem', component: RedeemComponent },
          { path: 'reward',
            component: RewardComponent,
            canActivate: [TeacherAuthGuard]},
        ]
      }
    ]
  }];

@NgModule({
  imports: [ RouterModule.forChild(mainRoutes) ],
  exports: [ RouterModule ]
})

export class MainRoutingModule {}
