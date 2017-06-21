import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Tropy } from './tropy';

@Injectable()
export class TropyService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private tropyUrl = 'api/tropy';

  constructor(private http:Http){}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getTropy(): Promise<Tropy> {
    return this.http.get(this.tropyUrl)
    .toPromise()
    .then(response => response.json().data as Tropy)
    .catch(this.handleError);
  }

  getTropySlowly(): Promise<Tropy> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getTropy()), 2000);
    });
  }

}
