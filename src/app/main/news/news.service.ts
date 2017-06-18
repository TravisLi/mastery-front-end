import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { News } from './news';

@Injectable()
export class NewsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private newsUrl = 'api/newses';

  constructor(private http:Http){}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getNews(): Promise<News[]> {
    return this.http.get(this.newsUrl)
    .toPromise()
    .then(response => response.json().data as News[])
    .catch(this.handleError);
  }

  getNewsSlowly(): Promise<News[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getNews()), 2000);
    });
  }

}
