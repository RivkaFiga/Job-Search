import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url:string="https://localhost:5001/api/User";

  getUser(name:string,password:string):Observable<user>{
    return this.http.get(`${this.url}/${name}/${password}`) as Observable<user>;
  }
  private user=new Subject<user>;
  public set(user:user){
    localStorage.setItem("user",JSON.stringify(user));
    this.user.next(user);
  }
  public get() {
    return this.user;
  }

}
