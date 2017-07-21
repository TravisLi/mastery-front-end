import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Lesson } from './lesson';
import { environment } from '../../environments/environment';

@Injectable()
export class LessonService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private lessonUrl = environment.masteryRestUrl + '/lesson/student';
  private mkupLsonUrl = environment.masteryRestUrl + '/mkuplson/find/';

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
      console.log(response.json());
      return response.json() as Lesson[];
    })
    .catch(this.handleError);
  }

  getMkupLson(l:Lesson): Promise<Lesson[]>{
    return this.http.post(this.mkupLsonUrl,l).toPromise().then(
      response => {
        return response.json() as Lesson[]
      }
    ).catch(this.handleError);
  }

}
