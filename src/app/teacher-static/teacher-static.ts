import { Timeslot } from '../main/timeslot/timeslot';
import { Subject } from '../subject/subject';

export class TeacherStatic{
  userId: number;
  cap:number;
  teachingSubjs:Subject[];
  dutyTimeslots:Timeslot[];
}
