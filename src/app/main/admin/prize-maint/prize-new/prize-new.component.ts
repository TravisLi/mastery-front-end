import { Component, OnInit, Input } from '@angular/core';
import { Prize } from '../../../../prize/prize';

@Component({
  selector: 'prize-new',
  templateUrl: './prize-new.component.html'
})
export class PrizeNewComponent {

  @Input()prize:Prize = new Prize();

  ngOnInit(){};

  ngAfterViewInit(){
  //jQuery('#updateReveal').foundation();
  }

  create(){
    jQuery('#userNewReveal').foundation('close');
  }

}
