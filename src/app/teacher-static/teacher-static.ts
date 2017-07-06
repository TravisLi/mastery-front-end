import { Timeslot } from '../timeslot/timeslot';
import { Subject } from '../subject/subject';

export class TeacherStatic{
  userId: number;
  cap:number;
  teachingSubjs:Subject[];
  dutyTimeslots:Timeslot[];
}
