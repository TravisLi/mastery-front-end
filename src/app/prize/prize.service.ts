import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Prize } from './prize';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PrizeService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'api/prizes';

  constructor(private http:Http){}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getPrizes(): Promise<Prize[]> {
    return this.http.get(this.url)
    .toPromise()
    .then(response => response.json().data as Prize[])
    .catch(this.handleError);
  }

  getPrizesSlowly(): Promise<Prize[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getPrizes()), 2000);
    });
  }

}
