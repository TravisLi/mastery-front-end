import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'timeslot',
  templateUrl: './timeslot.component.html',
})
export class TimeslotComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router:Router,
  ){};

  ngOnInit(): void {
  }

}
