import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../user/user';

@Component({
  selector: 'user-new',
  templateUrl: './user-new.component.html'
})
export class UserNewComponent {

  @Input()user:User = new User();

  ngOnInit(){};

  ngAfterViewInit(){
  //jQuery('#updateReveal').foundation();
  }

  create(){
    jQuery('#userUpdateReveal').foundation('close');
  }
}
