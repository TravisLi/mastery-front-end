import { Component, OnInit, Input } from '@angular/core';
import { Redeem } from '../../../redeem/redeem';

@Component({
  selector: 'redeem-list',
  templateUrl: './redeem-list.component.html',
  styleUrls: ['./redeem-list.component.css']
})
export class RedeemListComponent {

  @Input()redeemList:Redeem[];

}
