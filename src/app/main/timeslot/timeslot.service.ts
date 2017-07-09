import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
// import { RewardReason } from './schedule';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TimeslotService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'api/rewardReasons';

  constructor(private http:Http){}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // getRewardReasons(): Promise<RewardReason[]> {
  //   return this.http.get(this.url)
  //   .toPromise()
  //   .then(response => response.json().data as RewardReason[])
  //   .catch(this.handleError);
  // }
  //
  // getRewardReasonsSlowly(): Promise<RewardReason[]> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(this.getRewardReasons()), 2000);
  //   });
  // }

}
