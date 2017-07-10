import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { RoleType } from '../role/role';
import * as jQuery from 'jquery';
import 'foundation-sites';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router:Router,
  ){};

  ngOnInit(){
    //this.router.navigate(['news'],{ relativeTo: this.route });
  }

  showStudentFunc():boolean{
    return this.authService.hasStudentRight();
  }

  showAdminFunc():boolean{
    return this.authService.hasAdminRight();
  }

  showTeacherFunc():boolean{
    return this.authService.hasTeacherRight();
  }

  ngAfterViewInit(){
    jQuery('#offCanvas').foundation();
  }

}
