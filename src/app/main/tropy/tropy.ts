import { Reward } from '../../reward/reward';
import { Redeem } from '../../redeem/redeem';

export class Tropy{
  rewardNo:number;
  redeemNo:number;
  rewards:Reward[];
  redeems:Redeem[];

  constructor(){
    this.rewardNo=0;
    this.redeemNo=0;
    this.rewards=Reward[0];
    this.redeems=Redeem[0];
  }

}
