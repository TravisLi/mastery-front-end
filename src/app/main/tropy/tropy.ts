import { Reward } from './reward';
import { Redeem } from './redeem';

export class Tropy{
  rewardNo:number;
  redeemNo:number;
  rewardList:Reward[];
  redeemList:Redeem[];

  constructor(){
    this.rewardNo=0;
    this.redeemNo=0;
    this.rewardList=Reward[0];
    this.redeemList=Redeem[0];
  }

}
