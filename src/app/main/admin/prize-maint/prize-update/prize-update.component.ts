import { Component, OnInit, Input } from '@angular/core';
import { Prize } from '../../../../prize/prize';

@Component({
  selector: 'prize-update',
  templateUrl: './prize-update.component.html'
})
export class PrizeUpdateComponent {

  @Input()prize:Prize;

  ngOnInit(){};

  ngAfterViewInit(){
  //jQuery('#updateReveal').foundation();
  }

  update(){
    jQuery('#prizeUpdateReveal').foundation('close');
  }

}
