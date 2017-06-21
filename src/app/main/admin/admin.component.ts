import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router:Router,
  ){};

  ngOnInit(){
    //this.router.navigate(['news'],{ relativeTo: this.route });
  }

}
