import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../user/user';

@Component({
  selector: 'update',
  templateUrl: './update.component.html'
})
export class UpdateComponent {

  @Input()user:User;

  ngOnInit(){};

  ngAfterViewInit(){
  //jQuery('#updateReveal').foundation();
  }

}
