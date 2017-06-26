import { Component, OnInit, ViewChild } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { AuthService } from '../../auth/auth.service';
import { TropyService } from './tropy.service';
import { Tropy } from './tropy';

@Component({
  selector: 'tropy',
  templateUrl: './tropy.component.html',
  styleUrls: ['tropy.component.css'],
  providers: [ TropyService ]
})
export class TropyComponent implements OnInit{

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;
  tropy:Tropy = new Tropy();

  constructor(private authService:AuthService, private tropyService:TropyService ){

  }

  ngOnInit(): void {
    this.titleBar.title = "奬勵印章";
    this.titleBar.msgBox.sendPriMsg('loading');
    this.tropyService.getTropySlowly()
    .then(tropy=>{
      this.tropy=tropy;
      this.titleBar.msgBox.clearMsg();
    });
  }




}
