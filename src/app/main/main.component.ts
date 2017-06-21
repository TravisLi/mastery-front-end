import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
// import 'foundation-sites';
// import 'jquery';
// import 'what-input';

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

  showAdminFunc(){
    if(this.authService.user.role=='admin'){
      return true;
    }
    return false;
  }

  ngAfterViewInit(){
    jQuery('#offCanvas').foundation();
  }

}
