import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../user/user';
import { RewardReason } from '../../../../reward/reward-reason';
import { RewardReasonService } from '../../../../reward/reward-reason.service';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'user-reward',
  templateUrl: './user-reward.component.html'
})
export class UserRewardComponent {

  @Input()student:User = new User();
  @Input()reason:RewardReason;
  @Input()selectedReason:RewardReason;
  rewarder:User = new User();
  rewardReasons:RewardReason[];

  constructor(private authService:AuthService,private rewardReasonService:RewardReasonService){

  }

  ngOnInit(){
    this.rewarder = this.authService.user;
    this.rewardReasonService.getRewardReasonsSlowly()
    .then(rewardReasons=>{
      this.rewardReasons=rewardReasons;
    });
  };

  onClick(){
    this.reason=this.selectedReason;
  }

  confirm(){

  }

  ngAfterViewInit(){
  //jQuery('#updateReveal').foundation();
  }

}
