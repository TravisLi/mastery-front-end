import { Room } from '../room/room';
import { Teacher } from '../teacher/teacher';

export class Lesson{
  id: number;
  name: string;
  frLvl: string;
  toLvl: string;
  startDateTime: Date;
  endDateTime: Date;
  room: Room;
  teacher: Teacher;
}
