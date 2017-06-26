import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Role } from './role';

@Injectable()
export class RoleService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'api/roles';

  constructor(private http:Http){}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getRoles(): Promise<Role[]> {
    return this.http.get(this.url)
    .toPromise()
    .then(response => response.json().data as Role[])
    .catch(this.handleError);
  }

  getRolesSlowly(): Promise<Role[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getRoles()), 2000);
    });
  }

}
