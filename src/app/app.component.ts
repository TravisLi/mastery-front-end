import { Component, OnInit, AfterViewInit, AfterContentInit} from '@angular/core';
import { Router } from '@angular/router';

import 'jquery';
import 'what-input';
import 'foundation-sites';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private router:Router
  ){};

  ngOnInit(): void {
    this.router.navigate(['/login']);
  }

}
