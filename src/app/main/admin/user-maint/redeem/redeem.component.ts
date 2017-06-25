import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../user/user';

@Component({
  selector: 'redeem',
  templateUrl: './redeem.component.html'
})
export class RedeemComponent {

  @Input()user:User;

  ngOnInit(){};

  ngAfterViewInit(){
  //jQuery('#updateReveal').foundation();
  }

}
