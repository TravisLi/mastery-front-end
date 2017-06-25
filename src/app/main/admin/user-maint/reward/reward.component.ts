import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../user/user';
import { RewardReasonService } from './reward-reason.service';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'reward',
  templateUrl: './reward.component.html'
})
export class RewardComponent {

  @Input()student:User = new User();
  @Input()reason:string;
  @Input()selectedReason:string;
  rewarder:User = new User();
  rewardReasons:string[];

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
