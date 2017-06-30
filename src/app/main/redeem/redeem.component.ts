import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../user/user';
import { Prize } from '../../prize/prize';
import { PrizeService } from '../../prize/prize.service';

@Component({
  selector: 'redeem',
  templateUrl: './redeem.component.html'
})
export class RedeemComponent {

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;

  user:User;
  prizes:Prize[];
  selectedPrize:Prize=new Prize();

  constructor(private authService:AuthService, private prizeService:PrizeService){};

  ngOnInit(): void {
    this.titleBar.title = "主頁";
    this.prizeService.getNonRedeemedPrize()
    .then(prizes=>{
      this.prizes=prizes;
      //defer to init the orbit
      setTimeout(()=>{
          Foundation.reInit(['orbit'])
      },200);
    });
  }

  clear(){
    this.titleBar.msgBox.clearMsg();
    this.selectedPrize = new Prize();
  }

  onClick(prize:Prize){
    if(prize.tropyRequired<50){
      this.selectedPrize=prize;
    }else{
      let tropyOwe = 50 - prize.tropyRequired;
      this.titleBar.msgBox.sendAlterMsg(`重差${tropyOwe}個獎杯`);
    }
  }

  ngAfterViewInit(){
    jQuery('#orbit').foundation();
  }

}
