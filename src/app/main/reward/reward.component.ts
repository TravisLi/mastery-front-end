import { Component, OnInit, ViewChild } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';

@Component({
  selector: 'reward',
  templateUrl: './reward.component.html',
})
export class RewardComponent {

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;

}
