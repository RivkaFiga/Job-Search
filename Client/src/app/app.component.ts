import { Component, OnInit } from '@angular/core';
import { JobService } from './services/job.service';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { JobField, user } from 'src/app/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  cv:number=0;
  userName:string="";
  userJobField:JobField=JobField.TAXES;
  today:Date= new Date();

  constructor(private jobService:JobService,private userService:UserService,private router: Router) {
    
  }
  ngOnInit(): void { 
    if(localStorage.getItem("user")==null)
     this.router.navigate(['login']);
    this.jobService.get().subscribe(j=>this.cv=j.length);
    this.userService.get().subscribe(u=>this.userName=u.userName); 
    this.userService.get().subscribe(u=>this.userJobField=u.jobField)
  }
  
}
