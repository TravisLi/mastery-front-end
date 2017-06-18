import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { Dictation } from '../dictation';

@Component({
  selector: 'word-list',
  templateUrl: './word-list.component.html',
})

export class WordListComponent implements OnInit{
  @Input()word:string;
  @Input()dictation:Dictation;

  constructor(private authService:AuthService){

  };

  ngOnInit(): void {
  }

  add(): void {
    this.dictation.words.push(this.word);
    this.word = '';
  }

  delete(idx:number):void{
    console.log('delete');
    console.log(idx);
    if(idx>-1){
      this.dictation.words.splice(idx,1);
    }
  }

  save():void{
    console.log("save");
  }

  read(second:number):void{
    console.log(second);
  }
}
