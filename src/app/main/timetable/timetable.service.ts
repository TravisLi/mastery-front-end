import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Timetable } from './timetable';

@Injectable()
export class TimetableService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private timetableUrl = 'api/timetables';

  constructor(private http:Http){}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getTimetable(): Promise<Timetable[]> {
    return this.http.get(this.timetableUrl)
    .toPromise()
    .then(response => response.json().data as Timetable[])
    .catch(this.handleError);
  }

  getTimetableSlowly(): Promise<Timetable[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getTimetable()), 2000);
    });
  }

}
