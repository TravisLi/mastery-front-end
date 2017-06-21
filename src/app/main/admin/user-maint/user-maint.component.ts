import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'UserMaintComponent',
  templateUrl: './user-maint.component.html'
})
export class UserMaintComponent {

  @Input()updateShow:boolean;

  ngOnInit(){
    this.updateShow=false;
  }

  updateOpen():void{
    console.log("success");
    this.updateShow=true;
  }

  ngAfterViewInit(){
    jQuery('#update').foundation();
    jQuery('#updateReveal').foundation();
  }

}
