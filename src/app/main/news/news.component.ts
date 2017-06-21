import { Component, ViewChild, OnInit } from '@angular/core';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { AuthService } from '../../auth/auth.service';
import { NewsService } from './news.service';
import { News } from './news'

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  providers: [NewsService]
})

export class NewsComponent implements OnInit {

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;
  newses: News[] = News[0];

  constructor(private authService:AuthService, private newsService: NewsService){

  };

  ngOnInit(): void {
    this.titleBar.title = "主頁";
    this.newsService.getNews()
    .then(newes=>{
      this.newses=newes;
      for(let news of newes){
        console.log(news.img);
      }
    });
  }

}
