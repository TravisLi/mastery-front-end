import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//component
import { DictationComponent } from './dictation.component';
import { WordListComponent } from './word-list/word-list.component';
//routing module
import { TitleBarModule } from '../title-bar/title-bar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TitleBarModule
  ],
  declarations: [
    DictationComponent,
    WordListComponent,
  ],
})
export class DictationModule {}
