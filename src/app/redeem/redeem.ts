import { Prize } from '../prize/prize';
import { User } from '../user/user';

export class Redeem {
  id:number;
  applyDate:Date;
  confirmDate:Date;
  prize:Prize;
  redeemedBy:User;
  confirmedBy:User;
  photo:string;
}
