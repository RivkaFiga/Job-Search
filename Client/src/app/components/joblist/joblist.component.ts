import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobComponent } from '../job/job.component';
import { JobField, user } from 'src/app/models/user';
import { JobService } from 'src/app/services/job.service';
import { job } from 'src/app/models/job';
import { count } from 'rxjs';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.scss']
})
export class JoblistComponent {
  jobs: job[] | undefined;
  area:any='';

  currentUser: user = JSON.parse(localStorage.getItem("user") || `new user(JobField.KINDERGARDEN,"xxx",'12345678',0)`);
JobField: any;
  constructor(private router: Router, private jobService: JobService) {
  }
  

  ngOnInit() {
    this.jobService.getJobs().subscribe(j => {     
      this.jobs = j.filter(j=>(j.jobField==this.currentUser.jobField));
    })
  }

  withoutFilter():void{
    this.jobService.getJobs().subscribe(j => {     
      this.jobs = j.filter(j=>j);
    })
  }

  filterByJobField():void{
    this.jobService.getJobs().subscribe(j => {     
      this.jobs = j.filter(j=>(j.jobField==this.currentUser.jobField));
    })
  }

  filterByArea():void{
    this.jobService.getJobs().subscribe(j => {     
      this.jobs = j.filter(j=>(j.area==this.area));
    })
  }

  showJob(job:job): void {  
    this.router.navigate(['alljobs/job',job.jobName,job.scopeOfHours,job.area,job.hybrid,job.requirements])
  }
  
}