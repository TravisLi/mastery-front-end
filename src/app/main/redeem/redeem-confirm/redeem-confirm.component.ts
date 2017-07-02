import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TitleBarComponent } from '../../title-bar/title-bar.component';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../user/user';
import { Redeem } from '../../../redeem/redeem';
import { RedeemService } from '../../../redeem/redeem.service';

@Component({
  selector: 'redeem-confirm',
  templateUrl: './redeem-confirm.component.html'
})
export class RedeemConfirmComponent {

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;

  redeems:Redeem[];
  selectedRedeem:Redeem=new Redeem();

  constructor(private redeemService:RedeemService){};

  ngOnInit(): void {
    this.titleBar.title = "禮物換領確認";
    this.redeemService.getRedeems()
    .then(redeems=>{
      this.redeems=redeems;
    });
  }

  onClick(redeem:Redeem){
    this.selectedRedeem = redeem;
  }

  isSelectedRedeem(redeem:Redeem):boolean{
    return this.selectedRedeem.id == redeem.id;
  }

  ngAfterViewInit(){
    //jQuery('#orbit').foundation();
  }

}
