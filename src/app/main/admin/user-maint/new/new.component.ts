import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../user/user';

@Component({
  selector: 'new',
  templateUrl: './new.component.html'
})
export class NewComponent {

  @Input()user:User = new User();

  ngOnInit(){};

  ngAfterViewInit(){
  //jQuery('#updateReveal').foundation();
  }

}
