import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { AdminComponent } from './admin.component';
import { UserMaintComponent } from './user-maint/user-maint.component';
import { AuthGuard } from '../../auth/auth-guard.service';
import { AdminAuthGuard } from '../../auth/admin-auth-guard.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AdminAuthGuard],
        children: [
          { path: 'user-maint', component: UserMaintComponent},
        ]
      }
    ]
  }];

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes) ],
  exports: [ RouterModule ]
})

export class AdminRoutingModule {}
