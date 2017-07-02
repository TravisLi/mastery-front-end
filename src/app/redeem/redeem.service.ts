import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Logger } from '../logger/logger';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Redeem } from './redeem';

@Injectable()
export class RedeemService {

  private logger = Logger.getLogger(this.constructor.name);
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'api/redeems';

  constructor(private http:Http){}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getRedeems(): Promise<Redeem[]> {
    return this.http.get(this.url)
    .toPromise()
    .then(response => response.json().data as Redeem[])
    .catch(this.handleError);
  }

  getRedeemsSlowly(): Promise<Redeem[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getRedeems()), 2000);
    });
  }

}
