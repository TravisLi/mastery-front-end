import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { TimeslotComponent } from './timeslot.component';
import { TimeslotInputComponent } from './timeslot-input/timeslot-input.component';
import { TimeslotEditComponent } from './timeslot-edit/timeslot-edit.component';
import { AuthGuard } from '../../auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'timeslot',
    component: TimeslotComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'timeslot-input', component: TimeslotInputComponent },
          { path: 'timeslot-edit', component: TimeslotEditComponent },
        ]
      }
    ]
  }];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class TimeslotRoutingModule {}
