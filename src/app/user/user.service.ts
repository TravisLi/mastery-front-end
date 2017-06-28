import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Logger } from '../logger/logger';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UserService {

  private logger = Logger.getLogger(this.constructor.name);
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

  getStudentsByName(name:string):Observable<User[]> {
    if(name=='all'){
      console.log("all");
      return this.http.get(this.url)
      .map(response=>UserService.filterStudent(response));
    }else{
      console.log("search by name");
      const url = `${this.url}?name=${name}`;
      return this.http.get(url)
      .map(response=>UserService.filterStudent(response));
    }
  }

  private static filterStudent(response:any):User[]{
    let users = response.json().data as User[];
    let students = users.filter((user)=>{
      return user.role.type=='student'
    })
    console.log(students);
    return students;
  }

  getUserByUsername(username:string): Promise<User>{
    this.getStudentsByName(username);
    const url = `${this.url}?username=${username}`;
    return this.http.get(url)
    .toPromise()
    .then(response => {
      let users = response.json().data as User[];
      if(users.length>0){
          return users[0];
      }else{
        throw new Error('no such user');
      }
    })
  }
}
