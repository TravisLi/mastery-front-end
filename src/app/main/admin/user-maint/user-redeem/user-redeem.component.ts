import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../user/user';

@Component({
  selector: 'user-redeem',
  templateUrl: './user-redeem.component.html'
})
export class UserRedeemComponent {

  @Input()user:User;

  ngOnInit(){};

  ngAfterViewInit(){
  //jQuery('#updateReveal').foundation();
  }

}
