import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Lesson } from './lesson';
import { environment } from '../../environments/environment';

@Injectable()
export class LessonService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private lessonUrl = environment.masteryRestUrl + '/lesson/student';

  constructor(private http:Http){}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getWeeklyLsonByStd(name:string,week:number): Promise<Lesson[]> {
    let parm:string = `/${name}/${week}/`
    let reqUrl:string = this.lessonUrl + parm;
    console.log("reqUrl=" + reqUrl);
    return this.http.get(reqUrl)
    .toPromise()
    .then(response => {
      console.log(response);
      response.json().data as Lesson[];

    })
    .catch(this.handleError);
  }

}