import { Redeem } from "../redeem/redeem";

export class Prize{
  id:number;
  name:string;
  photoUrl:string;
  tropyRequired:number;
  addedDate:Date;
  redeem:Redeem;
}
