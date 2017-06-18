import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from './title-bar.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    TitleBarComponent
  ],
  exports:[
    TitleBarComponent
  ]
})
export class TitleBarModule {}
