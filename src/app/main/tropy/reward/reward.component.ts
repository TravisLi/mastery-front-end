import { Component, OnInit, Input } from '@angular/core';
import { Reward } from '../reward';

@Component({
  selector: 'reward',
  templateUrl: './reward.component.html',
})
export class RewardComponent {

  @Input()rewardList: Reward[];

}
