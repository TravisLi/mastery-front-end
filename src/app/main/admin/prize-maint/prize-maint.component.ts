import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Logger } from '../../../logger/logger';
import { TitleBarComponent } from '../../title-bar/title-bar.component';
import { User } from '../../../user/user';
import { UserService } from '../../../user/user.service';

@Component({
  selector: 'prize-maint',
  templateUrl: './prize-maint.component.html',
  styleUrls:['./prize-maint.component.css']
})
export class PrizeMaintComponent {

  private logger:Logger = Logger.getLogger(this.constructor.name);

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;

  users:User[];
  selectedUser:User = new User();

  constructor(private userService:UserService){};

  ngOnInit(){
    this.titleBar.title = "用戶管理";
    this.titleBar.sendLoadingMsg();
    this.userService.getUsersSlowly()
    .then(users=>{
      this.users=users;
      this.titleBar.clearMsg();
    });
  }

  onClick(user:User){
    this.selectedUser = user;
  }

  isSelectedUser(user:User){
    return user.id === this.selectedUser.id;
  }

  ngAfterViewInit(){
    jQuery('#newReveal').foundation();
    jQuery('#updateReveal').foundation();
    jQuery('#rewardReveal').foundation();
    jQuery('#redeemReveal').foundation();
  }

}
