import { Component, ViewChild, OnInit } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { AuthService } from '../../auth/auth.service';
import { NewsService } from './news.service';
import { News } from './news';
import * as $ from 'jquery';
import 'foundation-sites';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  providers: [NewsService]
})

export class NewsComponent implements OnInit {

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;
  newses: News[] = [];
  dataLoaded:boolean = false;

  constructor(private authService:AuthService, private newsService: NewsService){

  };

  ngOnInit(): void {
    this.titleBar.title = "主頁";
    this.newsService.getNews()
    .then(newes=>{
      this.newses=newes;
      this.dataLoaded = true;
      //defer to init the orbit
      setTimeout(()=>{
          Foundation.reInit(['orbit'])
      },200);
    });
  }

  ngAfterViewInit(){
    $('#orbit').foundation();
  }

  ngAfterViewChecked(){
    //jQuery('#orbit').foundation();

  }
}
