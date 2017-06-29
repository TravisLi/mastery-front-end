import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../user/user';

@Component({
  selector: 'user-update',
  templateUrl: './user-update.component.html'
})
export class UserUpdateComponent {

  @Input()user:User;

  ngOnInit(){};

  ngAfterViewInit(){
  //jQuery('#updateReveal').foundation();
  }

}
