import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { MsgBoxComponent } from '../../msg-box/msg-box.component';
import { Observable }    from 'rxjs/Observable';

@Component({
  selector: 'title-bar',
  templateUrl: './title-bar.component.html',
})

export class TitleBarComponent {

  @ViewChild(MsgBoxComponent)
  msgBox:MsgBoxComponent;
  title:string;

  constructor(public authService: AuthService) {

  }

  logout(){
    this.authService.logout();
  }
}
