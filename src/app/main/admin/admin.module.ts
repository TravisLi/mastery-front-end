import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//module
import { TitleBarModule } from '../title-bar/title-bar.module'

//routing module
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserMaintComponent } from './user-maint/user-maint.component';
import { UpdateComponent } from './user-maint/update/update.component';

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
    UpdateComponent
  ],
})
export class AdminModule {}
