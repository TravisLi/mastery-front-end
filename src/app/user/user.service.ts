import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from './user';

@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'api/users';

  constructor(private http:Http){}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getUsers(): Promise<User[]> {
    return this.http.get(this.url)
    .toPromise()
    .then(response => response.json().data as User[])
    .catch(this.handleError);
  }

  getUsersSlowly(): Promise<User[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getUsers()), 2000);
    });
  }

  getUserByUsername(username:string): Promise<User>{
    const url = `${this.url}?username=${username}`;
    return this.http.get(url)
    .toPromise()
    .then(response => {
      let users = response.json().data as User[];
      if(users.length>0){
        return Promise.resolve(users[0]);
      }
      return Promise.reject('cannot find user ' + username);
    });
  }
}
