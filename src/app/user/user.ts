import { Role } from '../role/role';
import { Reward } from '../reward/reward';

export class User{
  id: number;
  username: string;
  name: string;
  pwd: string;
  role: Role;
  stid: string;
}
