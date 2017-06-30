import { Component, OnInit, Input } from '@angular/core';
import { Prize } from '../../../../prize/prize';

@Component({
  selector: 'prize-update',
  templateUrl: './prize-update.component.html'
})
export class PrizeUpdateComponent {

  @Input()prize:Prize = new Prize();

  ngOnInit(){};

  ngAfterViewInit(){
  //jQuery('#updateReveal').foundation();
  }

  confirm(){
    
  }

}
