import { User } from '../user/user';

export class Reward{
  id:number;
  rewardDate:Date;
  reason:string;
  student:User;
  awardedBy:User;
  tropyEarned:number;
}
