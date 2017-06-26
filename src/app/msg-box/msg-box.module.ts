import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgBoxComponent } from './msg-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MsgBoxComponent
  ],
  exports:[
    MsgBoxComponent
  ]
})
export class MsgBoxModule {}
