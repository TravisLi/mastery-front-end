import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdDatepickerModule, MdInputModule, MdNativeDateModule} from '@angular/material';
//module
import { TitleBarModule } from '../title-bar/title-bar.module'
import { TimeslotRoutingModule } from './timeslot-routing.module';
//routing module
import { TimeslotComponent } from './timeslot.component';
import { TimeslotTableComponent } from './timeslot-table/timeslot-table.component';
import { TimeslotInputComponent } from './timeslot-input/timeslot-input.component';
import { TimeslotEditComponent } from './timeslot-edit/timeslot-edit.component';
import { TimeslotService } from './timeslot.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TitleBarModule,
    TimeslotRoutingModule,
    MdDatepickerModule,
    MdInputModule,
    MdNativeDateModule
  ],
  declarations: [
    TimeslotComponent,
    TimeslotTableComponent,
    TimeslotInputComponent,
    TimeslotEditComponent,
  ],
  providers: [
    TimeslotService
  ]
})
export class TimeslotModule {}
