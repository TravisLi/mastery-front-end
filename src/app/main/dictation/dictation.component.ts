import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { WordListComponent } from './word-list/word-list.component';
import { AuthService } from '../../auth/auth.service';
import { DictationService } from './dictation.service';
import { Dictation } from './dictation';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'jquery';

@Component({
  selector: 'dictation',
  templateUrl: './dictation.component.html',
  providers: [ DictationService ]
})

export class DictationComponent implements OnInit{

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;
  selectedIdx:number;
  assignDictation:Dictation;
  dictationList: Dictation[];

  constructor(private authService:AuthService, private dictationService: DictationService){

  };

  ngOnInit(): void {
    this.titleBar.title = "默書小幫手";
    this.titleBar.sendPriMsg('存取中...');
    this.dictationService.getDictationListSlowly()
    .then(dictationList=>{
      this.dictationList=dictationList;
      if(this.dictationList.length>0){
        this.selectedIdx = 0;
      }
      this.titleBar.clearMsg();
    });
  }

  assign():void{
    console.log("assign");
    console.log(this.selectedIdx);
    this.assignDictation = this.dictationList[this.selectedIdx];
  }

  createNew():void{
    console.log("creaetNew");
    this.assignDictation = new Dictation();
  }

  canDeactivate():boolean{
    console.log('canDeactivate');
    //this.titleBar.openConfirmationBox('Quit without save?');

    //let btn = document.querySelector('#con');
    //console.log(btn);
    //let cs = Observable.fromEvent(btn,'click');
    //cs.subscribe(()=>{console.log('click')});

    return window.confirm('Leave?');

  }

}
