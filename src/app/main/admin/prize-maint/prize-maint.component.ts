import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Logger } from '../../../logger/logger';
import { TitleBarComponent } from '../../title-bar/title-bar.component';
import { Prize} from '../../../prize/prize';
import { PrizeService } from '../../../prize/prize.service';

@Component({
  selector: 'prize-maint',
  templateUrl: './prize-maint.component.html',
})
export class PrizeMaintComponent {

  private logger:Logger = Logger.getLogger(this.constructor.name);

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;

  prizes:Prize[];
  selectedPrize:Prize = new Prize();

  constructor(private prizeService:PrizeService){};

  ngOnInit(){
    this.titleBar.title = "禮物管理";
    this.titleBar.msgBox.sendLoadingMsg();
    this.prizeService.getPrizesSlowly()
    .then(prizes=>{
      this.prizes=prizes;
      this.titleBar.msgBox.clearMsg();
    });
    this.selectedPrize.photo='';
  }

  onClick(prize:Prize){
    this.selectedPrize = prize;
  }

  isSelectedPrize(prize:Prize){
    return prize.id === this.selectedPrize.id;
  }

  ngAfterViewInit(){
    jQuery('#prizeNewReveal').foundation();
    jQuery('#prizeUpdateReveal').foundation();
    // jQuery('#rewardReveal').foundation();
    // jQuery('#redeemReveal').foundation();
  }

}
