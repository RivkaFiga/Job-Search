import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { job } from 'src/app/models/job';
import { JobField } from 'src/app/models/user';
import { JobService } from 'src/app/services/job.service';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  job: job = new job(0, JobField.KINDERGARDEN, "XXX", "XXX", 0, "XXX", false)
  flag: boolean = false
  constructor(private ar: ActivatedRoute,private jobService:JobService) {
  }
  ngOnInit() {
    this.ar.params.subscribe(j => {
      this.job.jobName = j['jobName'];
      this.job.scopeOfHours = j['scopeOfHours'];
      this.job.area = j['area'];
      this.flag = this.job.hybrid;
      this.job.requirements = j['requirements'];
    })
  }
  CV(job: job): void {
    let cv: Array<job> = JSON.parse(localStorage.getItem("cv") || "[]");
    cv.push(job); 
    this.jobService.set(cv);
    let sent:Array<string> = []; 
    this.jobService.get().subscribe(j=>{(j.forEach(j1=>sent.push(j1.jobName)));alert(" שלחת קורות חיים ל"+job.jobName+" !"+" \n עד כה שלחת קורות חיים ל"+sent);sent=[]});    
  }
}