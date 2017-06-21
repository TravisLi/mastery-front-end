import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'update',
  templateUrl: './update.component.html'
})
export class UpdateComponent {

  @Input()show:boolean;

  ngOnInit(){
    this.show=false;
  }

  ngAfterViewInit(){
    jQuery('#updateReveal').foundation();
  }

}
