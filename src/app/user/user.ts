import { Role } from '../role/role';
export class User{
  id: number;
  username: string;
  name: string;
  pwd: string;
  role: Role;
  stLink: string;
}
