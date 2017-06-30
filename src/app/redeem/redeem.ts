import { Prize } from '../prize/prize';
import { User } from '../user/user';

export class Redeem {
  id:number;
  redeemDate:Date;
  prize:Prize;
  redeemedBy:User;
  confirmedBy:User;
  photo:string;
}
