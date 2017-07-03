import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//module
import { TitleBarModule } from '../title-bar/title-bar.module'
import { FileUploadModule } from '../../file-upload/file-upload.module';
//routing module
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { UserMaintComponent } from './user-maint/user-maint.component';
import { UserNewComponent } from './user-maint/user-new/user-new.component';
import { UserUpdateComponent } from './user-maint/user-update/user-update.component';

import { PrizeMaintComponent } from './prize-maint/prize-maint.component';
import { PrizeNewComponent } from './prize-maint/prize-new/prize-new.component';
import { PrizeUpdateComponent } from './prize-maint/prize-update/prize-update.component';

import { RewardReasonService } from '../../reward/reward-reason.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    TitleBarModule,
    FileUploadModule
  ],
  declarations: [
    AdminComponent,
    UserMaintComponent,
    UserNewComponent,
    UserUpdateComponent,
    PrizeMaintComponent,
    PrizeNewComponent,
    PrizeUpdateComponent
  ],
  providers: [
    RewardReasonService
  ]
})
export class AdminModule {}
