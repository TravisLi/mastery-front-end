import { Component, OnInit, Input } from '@angular/core';
import { Redeem } from '../redeem';

@Component({
  selector: 'redeem',
  templateUrl: './redeem.component.html',
  styleUrls: ['./redeem.component.css']
})
export class RedeemComponent {

  @Input()redeemList:Redeem[];

}
