import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { job } from '../models/job';
import { JobField } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }
  url: string = "https://localhost:5001/api/Job/GetJobs"

  getJobs(): Observable<job[]> {
    return this.http.get(`${this.url}`) as Observable<job[]>
  }

  private cv = new Subject<job[]>();
  
  public set(cv: job[]) {
    localStorage.setItem("cv", JSON.stringify(cv));
    this.cv.next(cv);
  }

  public get() {
    return this.cv;
  }

}
