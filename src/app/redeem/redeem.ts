import { Prize } from '../prize/prize';
import { User } from '../user/user';

export class Redeem {
  id: number;
  date:Date;
  prize:Prize;
  redeemBy:User;
}
