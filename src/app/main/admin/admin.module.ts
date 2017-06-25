import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//module
import { TitleBarModule } from '../title-bar/title-bar.module'

//routing module
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserMaintComponent } from './user-maint/user-maint.component';
import { NewComponent } from './user-maint/new/new.component';
import { UpdateComponent } from './user-maint/update/update.component';
import { RewardComponent } from './user-maint/reward/reward.component';
import { RedeemComponent } from './user-maint/redeem/redeem.component';

import { RewardReasonService } from './user-maint/reward/reward-reason.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    TitleBarModule
  ],
  declarations: [
    AdminComponent,
    UserMaintComponent,
    NewComponent,
    UpdateComponent,
    RewardComponent,
    RedeemComponent
  ],
  providers: [
    RewardReasonService
  ]
})
export class AdminModule {}
