import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//module
import { MainModule } from './main/main.module';
import { MsgBoxModule } from './msg-box/msg-box.module'
import { AppRoutingModule} from './app-routing.module';

//component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MsgBoxComponent } from './msg-box/msg-box.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//service
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

//guard
import { AuthGuard } from './auth/auth-guard.service';
import { AdminAuthGuard } from './auth/admin-auth-guard.service';
import { TeacherAuthGuard } from './auth/teacher-auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MainModule,
    MsgBoxModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  providers: [
    AuthGuard,
    AdminAuthGuard,
    TeacherAuthGuard,
    AuthService,
    UserService,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
