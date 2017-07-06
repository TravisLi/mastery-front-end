import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../user/user';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent {

  user:User;
  @Input()oldPwd:string;
  @Input()newPwd:string;
  @Input()confirmNewPwd:string;

  constructor(private authService:AuthService){};

  ngOnInit(){
    this.user = this.authService.user;
  }

}
