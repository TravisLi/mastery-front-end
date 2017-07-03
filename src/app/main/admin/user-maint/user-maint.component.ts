import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Logger } from '../../../logger/logger';
import { TitleBarComponent } from '../../title-bar/title-bar.component';
import { User } from '../../../user/user';
import { Role } from '../../../role/role';
import { UserService } from '../../../user/user.service';
import { Util } from '../../../util/util';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'user-maint',
  templateUrl: './user-maint.component.html',
})
export class UserMaintComponent {

  private logger:Logger = Logger.getLogger(this.constructor.name);

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;
  userss: User[][];
  users:User[];
  selectedUser:User = new User();

  constructor(private userService:UserService){};

  ngOnInit(){
    this.titleBar.title = "用戶管理";
    this.titleBar.msgBox.sendLoadingMsg();
    this.userService.getUsersSlowly()
    .then(users=>{
      this.users=users;
      this.userss = Util.toArrayOfArray(users);
      console.log(this.userss);
      this.titleBar.msgBox.clearMsg();
    });
    let role = new Role();
    role.type = '';
    this.selectedUser.role = role;
  }

  onClick(user:User){
    this.selectedUser = user;
  }

  isSelectedUser(user:User){
    return user.id === this.selectedUser.id;
  }

  ngAfterViewInit(){
    jQuery('#userNewReveal').foundation();
    jQuery('#userUpdateReveal').foundation();
    jQuery('#rewardReveal').foundation();
    jQuery('#redeemReveal').foundation();
  }

}
