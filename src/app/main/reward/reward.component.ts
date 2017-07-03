import { Component, NgModule, OnInit, Input, ViewChild } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { Observable } from 'rxjs/Observable';

import { User } from '../../user/user';
import { RewardReason } from '../../reward/reward-reason';

import { AuthService } from '../../auth/auth.service';
import { RewardReasonService } from '../../reward/reward-reason.service';
import { UserService } from '../../user/user.service';
import { Util } from '../../util/util';

// Observable class extensions
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.css'],
  providers:[RewardReasonService]
})
export class RewardComponent {

  private searchTerms = new Subject<string>();

  @ViewChild(TitleBarComponent)
  titleBar:TitleBarComponent;

  @Input()selectedReason:RewardReason = new RewardReason;
  selectedStudent:User = new User();
  rewarder:User = new User();
  studentss:User[][];
  students:Observable<User[]>;
  rewardReasons:RewardReason[];

  constructor(
    private authService:AuthService,
    private rewardReasonService:RewardReasonService,
    private userService:UserService
  ){}

  ngOnInit(){
    this.titleBar.title='頒發獎盃';
    this.rewarder = this.authService.user;
    this.rewardReasonService.getRewardReasonsSlowly()
    .then(rewardReasons=>{
      this.rewardReasons=rewardReasons;
      this.addOtherReason();
      if(rewardReasons.length>0){
        this.selectedReason = rewardReasons[0];
      }
    });

    this.students = this.searchTerms
    .debounceTime(100)
    .distinctUntilChanged()
    .switchMap(term => term ? this.userService.getStudentsByName(term): Observable.of<User[]>([]))
    .catch(error=>{
      console.log(error);
      return Observable.of<User[]>([]);
    })

    this.students.subscribe((students)=>{
      this.studentss = Util.toArrayOfArray(students);
    })
  };

  addOtherReason():void{
    if(this.authService.hasAdminRight()){
      let otherReason:RewardReason = new RewardReason();
      otherReason.id = 0;
      otherReason.desc = '其他'
      otherReason.tropyWorth = 1;
      this.rewardReasons.push(otherReason);
    }
  }

  search(term:string):void{
    this.searchTerms.next(term);
  }

  searchAll():void{
    console.log("searchall");
    this.searchTerms.next('all');
  }

  isSelectedStudent(student:User){
    return student.id === this.selectedStudent.id;
  }

  onClickStudent(student:User){
    this.selectedStudent = student;
  }

  onSelectReason(id:number){
    //other is selected
    console.log(id);
    if(id==0){
        this.selectedReason = new RewardReason();
        this.selectedReason.id = 0;
    }else{
      this.selectedReason = this.rewardReasons.find(
        (reason)=>{return reason.id==id}
      )
    }
  }

  confirm(){
    console.log(this.selectedReason);
  }

  ngAfterViewInit(){
  //jQuery('#updateReveal').foundation();
  }

}
