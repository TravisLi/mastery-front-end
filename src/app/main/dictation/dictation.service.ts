import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Dictation } from './dictation';

@Injectable()
export class DictationService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private dictationListUrl = 'api/dictationLists';

  constructor(private http:Http){}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getDictationList(): Promise<Dictation[]> {
    return this.http.get(this.dictationListUrl)
    .toPromise()
    .then(response => response.json().data as Dictation[])
    .catch(this.handleError);
  }

  getDictationListSlowly(): Promise<Dictation[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getDictationList()), 2000);
    });
  }

}
