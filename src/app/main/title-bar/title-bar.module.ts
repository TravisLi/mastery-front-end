import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from './title-bar.component'
import { MsgBoxModule } from '../../msg-box/msg-box.module';

@NgModule({
  imports: [
    CommonModule,
    MsgBoxModule
  ],
  declarations: [
    TitleBarComponent,
  ],
  exports:[
    TitleBarComponent
  ]
})
export class TitleBarModule {}
