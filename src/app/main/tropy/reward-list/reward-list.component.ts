import { Component, OnInit, Input } from '@angular/core';
import { Reward } from '../../../reward/reward';

@Component({
  selector: 'reward-list',
  templateUrl: './reward-list.component.html',
})
export class RewardListComponent {

  @Input()rewardList: Reward[];

}
